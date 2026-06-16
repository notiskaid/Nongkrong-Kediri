import type { SupabaseClient } from '@supabase/supabase-js';
import { slugify } from '@/lib/utils/slug';

export const taxonomyConfig = {
  areas: { label: 'Area', relationTable: 'places', relationColumn: 'area_id', hasIcon: false },
  categories: { label: 'Kategori', relationTable: 'place_categories', relationColumn: 'category_id', hasIcon: false },
  use_cases: { label: 'Use case', relationTable: 'place_use_cases', relationColumn: 'use_case_id', hasIcon: true },
  facilities: { label: 'Fasilitas', relationTable: 'place_facilities', relationColumn: 'facility_id', hasIcon: true }
} as const;

export type TaxonomyType = keyof typeof taxonomyConfig;

export function isTaxonomyType(type: string): type is TaxonomyType {
  return type in taxonomyConfig;
}

function cleanPayload(type: TaxonomyType, payload: any) {
  const name = String(payload.name || '').trim();
  const slug = String(payload.slug || slugify(name)).trim();
  if (!name) throw new Error('Nama wajib diisi.');
  if (!slug) throw new Error('Slug wajib diisi.');

  const value: Record<string, any> = {
    name,
    slug,
    description: String(payload.description || '').trim() || null,
    sort_order: Number(payload.sort_order) || 0
  };
  if (taxonomyConfig[type].hasIcon) value.icon = String(payload.icon || '').trim() || null;
  return value;
}

export async function createTaxonomyTerm(supabase: SupabaseClient, type: TaxonomyType, payload: any) {
  const value = cleanPayload(type, payload);
  const { data, error } = await supabase.from(type).insert(value).select('id').single();
  if (error) throw error;
  return data.id as string;
}

export async function updateTaxonomyTerm(supabase: SupabaseClient, type: TaxonomyType, id: string, payload: any) {
  const value = cleanPayload(type, payload);
  const { error } = await supabase.from(type).update(value).eq('id', id);
  if (error) throw error;
}

export async function deleteTaxonomyTerm(supabase: SupabaseClient, type: TaxonomyType, id: string) {
  const config = taxonomyConfig[type];
  const { count, error: countError } = await supabase
    .from(config.relationTable)
    .select('*', { count: 'exact', head: true })
    .eq(config.relationColumn, id);
  if (countError) throw countError;
  if ((count || 0) > 0) throw new Error(`${config.label} masih dipakai ${count} tempat. Lepas relasi dulu sebelum menghapus.`);

  const { error } = await supabase.from(type).delete().eq('id', id);
  if (error) throw error;
}
