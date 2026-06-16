import type { SupabaseClient } from '@supabase/supabase-js';
import type { TaxonomyTerm } from '@/types/taxonomy';
import { mockAreas, mockCategories, mockFacilities, mockUseCases } from '@/lib/mock';

async function fetchTaxonomy(supabase: SupabaseClient | null | undefined, table: string, fallback: TaxonomyTerm[]) {
  if (!supabase) return fallback;
  const { data, error } = await supabase.from(table).select('*').order('sort_order', { ascending: true }).order('name');
  if (error || !data) return fallback;
  return data as TaxonomyTerm[];
}

export const getAreas = (supabase?: SupabaseClient | null) => fetchTaxonomy(supabase, 'areas', mockAreas);
export const getCategories = (supabase?: SupabaseClient | null) => fetchTaxonomy(supabase, 'categories', mockCategories);
export const getUseCases = (supabase?: SupabaseClient | null) => fetchTaxonomy(supabase, 'use_cases', mockUseCases);
export const getFacilities = (supabase?: SupabaseClient | null) => fetchTaxonomy(supabase, 'facilities', mockFacilities);

export async function getAreaBySlug(supabase: SupabaseClient | null | undefined, slug: string) {
  const areas = await getAreas(supabase);
  return areas.find((area) => area.slug === slug) || null;
}
