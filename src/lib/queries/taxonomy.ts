import type { SupabaseClient } from '@supabase/supabase-js';
import type { TaxonomyTerm } from '@/types/taxonomy';
import { mockAreas, mockCategories, mockFacilities, mockUseCases } from '@/lib/mock';

const QUERY_TIMEOUT_MS = 3500;

function withTimeout<T>(promise: PromiseLike<T>): Promise<T> {
  return Promise.race([
    Promise.resolve(promise),
    new Promise<T>((_, reject) => setTimeout(() => reject(new Error('Supabase query timeout')), QUERY_TIMEOUT_MS))
  ]);
}

async function fetchTaxonomy(supabase: SupabaseClient | null | undefined, table: string, fallback: TaxonomyTerm[]) {
  if (!supabase) return fallback;
  try {
    const { data, error } = await withTimeout(supabase.from(table).select('*').order('sort_order', { ascending: true }).order('name'));
    if (error || !data) return fallback;
    return data as TaxonomyTerm[];
  } catch {
    return fallback;
  }
}

export const getAreas = (supabase?: SupabaseClient | null) => fetchTaxonomy(supabase, 'areas', mockAreas);
export const getCategories = (supabase?: SupabaseClient | null) => fetchTaxonomy(supabase, 'categories', mockCategories);
export const getUseCases = (supabase?: SupabaseClient | null) => fetchTaxonomy(supabase, 'use_cases', mockUseCases);
export const getFacilities = (supabase?: SupabaseClient | null) => fetchTaxonomy(supabase, 'facilities', mockFacilities);

export async function getAreaBySlug(supabase: SupabaseClient | null | undefined, slug: string) {
  const areas = await getAreas(supabase);
  return areas.find((area) => area.slug === slug) || null;
}
