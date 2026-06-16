import type { SupabaseClient } from '@supabase/supabase-js';
import type { SeoPage } from '@/types/seo-page';
import { mockSeoPages } from '@/lib/mock';

const QUERY_TIMEOUT_MS = 3500;

function withTimeout<T>(promise: PromiseLike<T>): Promise<T> {
  return Promise.race([
    Promise.resolve(promise),
    new Promise<T>((_, reject) => setTimeout(() => reject(new Error('Supabase query timeout')), QUERY_TIMEOUT_MS))
  ]);
}

function normalizeSeoPage(row: any): SeoPage {
  return {
    ...row,
    content: Array.isArray(row.content) ? row.content : [],
    query_config: row.query_config || {}
  };
}

export async function getPublishedSeoPages(supabase?: SupabaseClient | null): Promise<SeoPage[]> {
  if (!supabase) return mockSeoPages.filter((page) => page.status === 'published');

  try {
    const { data, error } = await withTimeout(supabase
      .from('seo_pages_public')
      .select('*')
      .eq('status', 'published')
      .order('published_at', { ascending: true }));

    if (error || !data) return mockSeoPages.filter((page) => page.status === 'published');
    return data.map(normalizeSeoPage);
  } catch {
    return mockSeoPages.filter((page) => page.status === 'published');
  }
}

export async function getAllSeoPagesForAdmin(supabase?: SupabaseClient | null): Promise<SeoPage[]> {
  if (!supabase) return mockSeoPages;
  try {
    const { data, error } = await withTimeout(supabase.from('seo_pages_public').select('*').order('updated_at', { ascending: false }));
    if (error || !data) throw error || new Error('Gagal mengambil data halaman SEO.');
    return data.map(normalizeSeoPage);
  } catch {
    throw new Error('Gagal mengambil data halaman SEO.');
  }
}

export async function getSeoPageBySlug(supabase: SupabaseClient | null | undefined, slug: string) {
  if (!supabase) return mockSeoPages.find((page) => page.slug === slug && page.status === 'published') || null;
  try {
    const { data, error } = await withTimeout(supabase.from('seo_pages_public').select('*').eq('slug', slug).maybeSingle());
    if (error) return mockSeoPages.find((page) => page.slug === slug && page.status === 'published') || null;
    if (!data || data.status !== 'published') return null;
    return normalizeSeoPage(data);
  } catch {
    return mockSeoPages.find((page) => page.slug === slug && page.status === 'published') || null;
  }
}

export async function getSeoPageByIdForAdmin(supabase: SupabaseClient | null | undefined, id: string) {
  if (!supabase) return mockSeoPages.find((page) => page.id === id) || null;
  try {
    const { data, error } = await withTimeout(supabase.from('seo_pages_public').select('*').eq('id', id).maybeSingle());
    if (error) throw error;
    if (!data) return null;
    return normalizeSeoPage(data);
  } catch {
    throw new Error('Gagal mengambil data halaman SEO.');
  }
}
