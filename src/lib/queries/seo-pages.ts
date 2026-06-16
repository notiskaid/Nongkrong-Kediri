import type { SupabaseClient } from '@supabase/supabase-js';
import type { SeoPage } from '@/types/seo-page';
import { mockSeoPages } from '@/lib/mock';

function normalizeSeoPage(row: any): SeoPage {
  return {
    ...row,
    content: Array.isArray(row.content) ? row.content : [],
    query_config: row.query_config || {}
  };
}

export async function getPublishedSeoPages(supabase?: SupabaseClient | null): Promise<SeoPage[]> {
  if (!supabase) return mockSeoPages.filter((page) => page.status === 'published');

  const { data, error } = await supabase
    .from('seo_pages_public')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: true });

  if (error || !data) return mockSeoPages.filter((page) => page.status === 'published');
  return data.map(normalizeSeoPage);
}

export async function getAllSeoPagesForAdmin(supabase?: SupabaseClient | null): Promise<SeoPage[]> {
  if (!supabase) return mockSeoPages;
  const { data, error } = await supabase.from('seo_pages_public').select('*').order('updated_at', { ascending: false });
  if (error || !data) return mockSeoPages;
  return data.map(normalizeSeoPage);
}

export async function getSeoPageBySlug(supabase: SupabaseClient | null | undefined, slug: string) {
  if (!supabase) return mockSeoPages.find((page) => page.slug === slug && page.status === 'published') || null;
  const { data, error } = await supabase.from('seo_pages_public').select('*').eq('slug', slug).maybeSingle();
  if (error || !data || data.status !== 'published') return null;
  return normalizeSeoPage(data);
}

export async function getSeoPageByIdForAdmin(supabase: SupabaseClient | null | undefined, id: string) {
  if (!supabase) return mockSeoPages.find((page) => page.id === id) || null;
  const { data, error } = await supabase.from('seo_pages_public').select('*').eq('id', id).maybeSingle();
  if (error || !data) return null;
  return normalizeSeoPage(data);
}
