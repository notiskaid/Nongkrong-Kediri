import type { SupabaseClient } from '@supabase/supabase-js';
import { slugify } from '@/lib/utils/slug';

type PlacePayload = {
  id?: string;
  name: string;
  slug?: string;
  excerpt?: string;
  description?: string;
  editorial_notes?: string;
  address?: string;
  area_id?: string;
  google_maps_url?: string;
  phone?: string;
  website?: string;
  instagram?: string;
  price_min?: number | null;
  price_max?: number | null;
  price_label?: string;
  rating?: number | null;
  rating_count?: number | null;
  opening_label?: string;
  status?: string;
  is_featured?: boolean;
  sort_order?: number;
  meta_title?: string;
  meta_description?: string;
  canonical_url?: string;
  robots?: string;
  featured_image_url?: string;
  featured_image_alt?: string;
  categories?: string[];
  use_cases?: string[];
  facilities?: string[];
};

function cleanPlacePayload(payload: PlacePayload) {
  return {
    name: payload.name,
    slug: payload.slug || slugify(payload.name),
    excerpt: payload.excerpt || null,
    description: payload.description || null,
    editorial_notes: payload.editorial_notes || null,
    address: payload.address || null,
    area_id: payload.area_id || null,
    google_maps_url: payload.google_maps_url || null,
    phone: payload.phone || null,
    website: payload.website || null,
    instagram: payload.instagram || null,
    price_min: payload.price_min || null,
    price_max: payload.price_max || null,
    price_label: payload.price_label || null,
    rating: payload.rating || null,
    rating_count: payload.rating_count || null,
    opening_hours: payload.opening_label ? { label: payload.opening_label, is_24h: payload.opening_label.toLowerCase().includes('24') } : null,
    status: payload.status || 'draft',
    is_featured: Boolean(payload.is_featured),
    sort_order: payload.sort_order || 0,
    meta_title: payload.meta_title || null,
    meta_description: payload.meta_description || null,
    canonical_url: payload.canonical_url || null,
    robots: payload.robots || 'index,follow',
    updated_at: new Date().toISOString()
  };
}

function validatePlacePayload(payload: PlacePayload) {
  if (!payload.name?.trim()) throw new Error('Nama tempat wajib diisi.');
  if (payload.rating != null && (payload.rating < 0 || payload.rating > 5)) throw new Error('Rating harus antara 0 sampai 5.');
  if (payload.rating_count != null && payload.rating_count < 0) throw new Error('Jumlah rating tidak valid.');
  if (payload.price_min != null && payload.price_min < 0) throw new Error('Harga min tidak valid.');
  if (payload.price_max != null && payload.price_max < 0) throw new Error('Harga max tidak valid.');
}

function withPublishedAt(payload: PlacePayload, existingPublishedAt?: string | null) {
  const cleaned = cleanPlacePayload(payload);
  return {
    ...cleaned,
    published_at: payload.status === 'published' ? existingPublishedAt || new Date().toISOString() : null
  };
}

async function replacePivot(supabase: SupabaseClient, table: string, placeId: string, column: string, ids?: string[]) {
  const { error: deleteError } = await supabase.from(table).delete().eq('place_id', placeId);
  if (deleteError) throw deleteError;
  if (!ids?.length) return;
  const { error: insertError } = await supabase.from(table).insert(ids.map((id) => ({ place_id: placeId, [column]: id })));
  if (insertError) throw insertError;
}

async function replaceFeaturedImage(supabase: SupabaseClient, placeId: string, payload: PlacePayload) {
  const { error: deleteError } = await supabase.from('place_photos').delete().eq('place_id', placeId).eq('is_featured', true);
  if (deleteError) throw deleteError;
  if (!payload.featured_image_url) return;
  const { error: insertError } = await supabase.from('place_photos').insert({
    place_id: placeId,
    url: payload.featured_image_url,
    alt: payload.featured_image_alt || payload.name,
    source: 'manual',
    is_featured: true,
    sort_order: 0
  });
  if (insertError) throw insertError;
}

export async function createPlace(supabase: SupabaseClient, payload: PlacePayload) {
  validatePlacePayload(payload);
  const { data, error } = await supabase.from('places').insert(withPublishedAt(payload)).select('id').single();
  if (error || !data) throw error || new Error('Gagal membuat tempat.');

  await replacePivot(supabase, 'place_categories', data.id, 'category_id', payload.categories);
  await replacePivot(supabase, 'place_use_cases', data.id, 'use_case_id', payload.use_cases);
  await replacePivot(supabase, 'place_facilities', data.id, 'facility_id', payload.facilities);
  await replaceFeaturedImage(supabase, data.id, payload);
  return data.id;
}

export async function updatePlace(supabase: SupabaseClient, id: string, payload: PlacePayload) {
  validatePlacePayload(payload);
  const { data: existing, error: readError } = await supabase.from('places').select('published_at').eq('id', id).maybeSingle();
  if (readError) throw readError;
  const { error } = await supabase.from('places').update(withPublishedAt(payload, existing?.published_at)).eq('id', id);
  if (error) throw error;

  await replacePivot(supabase, 'place_categories', id, 'category_id', payload.categories);
  await replacePivot(supabase, 'place_use_cases', id, 'use_case_id', payload.use_cases);
  await replacePivot(supabase, 'place_facilities', id, 'facility_id', payload.facilities);
  await replaceFeaturedImage(supabase, id, payload);
  return id;
}
