import type { SupabaseClient } from '@supabase/supabase-js';
import type { TaxonomyTerm } from '@/types/taxonomy';
import { mockAreas, mockCategories, mockFacilities, mockUseCases } from '@/lib/mock';
import { SILO_AREAS } from '@/lib/seo/silo';

const QUERY_TIMEOUT_MS = 3500;

function withTimeout<T>(promise: PromiseLike<T>): Promise<T> {
  return Promise.race([
    Promise.resolve(promise),
    new Promise<T>((_, reject) => setTimeout(() => reject(new Error('Supabase query timeout')), QUERY_TIMEOUT_MS))
  ]);
}

async function fetchTaxonomy(supabase: SupabaseClient | null | undefined, table: string, fallback: TaxonomyTerm[]) {
  function mergeRequiredAreas(rows: TaxonomyTerm[]) {
    if (table !== 'areas') return rows;
    const required = SILO_AREAS.map((area, index) => ({ id: `silo-area-${area.slug}`, name: area.label, slug: area.slug, sort_order: index + 1 } as TaxonomyTerm));
    return [...rows, ...required.filter((area) => !rows.some((row) => row.slug === area.slug))];
  }

  if (!supabase) return mergeRequiredAreas(fallback);
  try {
    const { data, error } = await withTimeout(supabase.from(table).select('*').order('sort_order', { ascending: true }).order('name'));
    if (error || !data) return mergeRequiredAreas(fallback);
    return mergeRequiredAreas(data as TaxonomyTerm[]);
  } catch {
    return mergeRequiredAreas(fallback);
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
