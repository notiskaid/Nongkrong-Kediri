import type { SupabaseClient } from '@supabase/supabase-js';
import type { Place, PlaceQueryConfig } from '@/types/place';
import type { TaxonomyTerm } from '@/types/taxonomy';
import { mockPlaces } from '@/lib/mock';

const QUERY_TIMEOUT_MS = 3500;

function withTimeout<T>(promise: PromiseLike<T>): Promise<T> {
  return Promise.race([
    Promise.resolve(promise),
    new Promise<T>((_, reject) => setTimeout(() => reject(new Error('Supabase query timeout')), QUERY_TIMEOUT_MS))
  ]);
}

function normalizeTerms(value: unknown): TaxonomyTerm[] {
  if (!value) return [];
  if (Array.isArray(value)) return value as TaxonomyTerm[];
  return [];
}

function normalizePlace(row: any): Place {
  return {
    ...row,
    categories: normalizeTerms(row.categories),
    use_cases: normalizeTerms(row.use_cases),
    facilities: normalizeTerms(row.facilities),
    photos: Array.isArray(row.photos) ? row.photos : row.featured_image_url ? [{ url: row.featured_image_url, alt: row.featured_image_alt, is_featured: true }] : [],
    opening_hours: row.opening_hours || null
  };
}

function termSlugs(terms: TaxonomyTerm[]) {
  return new Set(terms.map((term) => term.slug));
}

function matchesAny(required: string[] | undefined, actual: Set<string>) {
  if (!required || required.length === 0) return true;
  return required.some((slug) => actual.has(slug));
}

export function filterPlacesByConfig(places: Place[], config?: PlaceQueryConfig | null) {
  if (!config) return places;

  let result = places.filter((place) => {
    if (config.is_featured != null && Boolean(place.is_featured) !== config.is_featured) return false;
    if (config.price_label?.length && !config.price_label.includes(place.price_label || '')) return false;
    if (!matchesAny(config.categories, termSlugs(place.categories))) return false;
    if (!matchesAny(config.use_cases, termSlugs(place.use_cases))) return false;
    if (!matchesAny(config.facilities, termSlugs(place.facilities))) return false;
    if (config.areas?.length && !config.areas.includes(place.area_slug || '')) return false;
    return true;
  });

  switch (config.sort) {
    case 'name_asc':
      result = result.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'newest':
      result = result.sort((a, b) => new Date(b.published_at || b.created_at || 0).getTime() - new Date(a.published_at || a.created_at || 0).getTime());
      break;
    case 'featured_first':
    case 'editorial_score_desc':
    default:
      result = result.sort((a, b) => Number(b.is_featured) - Number(a.is_featured) || (a.sort_order || 999) - (b.sort_order || 999) || b.name.localeCompare(a.name));
  }

  return config.limit ? result.slice(0, config.limit) : result;
}

export async function getPublishedPlaces(supabase?: SupabaseClient | null): Promise<Place[]> {
  if (!supabase) return mockPlaces.filter((place) => place.status === 'published');

  try {
    const { data, error } = await withTimeout(supabase
      .from('places_public')
      .select('*')
      .eq('status', 'published')
      .order('sort_order', { ascending: true })
      .order('name', { ascending: true }));

    if (error || !data) {
      console.warn('getPublishedPlaces fallback:', error?.message);
      return mockPlaces.filter((place) => place.status === 'published');
    }

    return data.map(normalizePlace);
  } catch {
    return mockPlaces.filter((place) => place.status === 'published');
  }
}

export async function getAllPlacesForAdmin(supabase?: SupabaseClient | null): Promise<Place[]> {
  if (!supabase) return mockPlaces;

  try {
    const { data, error } = await withTimeout(supabase
      .from('places_public')
      .select('*')
      .order('updated_at', { ascending: false }));

    if (error || !data) return mockPlaces;
    return data.map(normalizePlace);
  } catch {
    return mockPlaces;
  }
}

export async function getPlaceBySlug(supabase: SupabaseClient | null | undefined, slug: string) {
  if (!supabase) return mockPlaces.find((place) => place.slug === slug && place.status === 'published') || null;

  try {
    const { data, error } = await withTimeout(supabase.from('places_public').select('*').eq('slug', slug).maybeSingle());
    if (error) return mockPlaces.find((place) => place.slug === slug && place.status === 'published') || null;
    if (!data || data.status !== 'published') return null;
    return normalizePlace(data);
  } catch {
    return mockPlaces.find((place) => place.slug === slug && place.status === 'published') || null;
  }
}

export async function getPlaceByIdForAdmin(supabase: SupabaseClient | null | undefined, id: string) {
  if (!supabase) return mockPlaces.find((place) => place.id === id) || null;

  try {
    const { data, error } = await withTimeout(supabase.from('places_public').select('*').eq('id', id).maybeSingle());
    if (error || !data) return mockPlaces.find((place) => place.id === id) || null;
    return normalizePlace(data);
  } catch {
    return mockPlaces.find((place) => place.id === id) || null;
  }
}

export async function getFeaturedPlaces(supabase?: SupabaseClient | null, limit = 6) {
  const places = await getPublishedPlaces(supabase);
  return filterPlacesByConfig(places, { is_featured: true, sort: 'featured_first', limit });
}

export async function getRelatedPlaces(supabase: SupabaseClient | null | undefined, place: Place, limit = 4) {
  const places = await getPublishedPlaces(supabase);
  const useCaseSlugs = termSlugs(place.use_cases);
  return places
    .filter((item) => item.id !== place.id)
    .filter((item) => item.area_slug === place.area_slug || item.use_cases.some((term) => useCaseSlugs.has(term.slug)))
    .slice(0, limit);
}

export async function getPlacesByArea(supabase: SupabaseClient | null | undefined, areaSlug: string) {
  const places = await getPublishedPlaces(supabase);
  return places.filter((place) => place.area_slug === areaSlug);
}

export async function searchPlaces(supabase: SupabaseClient | null | undefined, query: string) {
  const places = await getPublishedPlaces(supabase);
  const q = query.trim().toLowerCase();
  if (!q) return places;
  return places.filter((place) => {
    const haystack = [place.name, place.excerpt, place.address, place.area_name, ...place.categories.map((t) => t.name), ...place.use_cases.map((t) => t.name), ...place.facilities.map((t) => t.name)]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();
    return haystack.includes(q);
  });
}
