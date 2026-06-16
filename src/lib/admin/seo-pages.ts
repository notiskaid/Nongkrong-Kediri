import type { SupabaseClient } from '@supabase/supabase-js';
import { slugify } from '@/lib/utils/slug';

type SeoPagePayload = {
  title: string;
  slug?: string;
  page_type?: string;
  h1?: string;
  description?: string;
  content?: unknown;
  query_config?: unknown;
  status?: string;
  meta_title?: string;
  meta_description?: string;
  canonical_url?: string;
  robots?: string;
};

function cleanPayload(payload: SeoPagePayload) {
  return {
    title: payload.title,
    slug: payload.slug || slugify(payload.title),
    page_type: payload.page_type || 'keyword',
    h1: payload.h1 || payload.title,
    description: payload.description || null,
    content: payload.content || [],
    query_config: payload.query_config || {},
    status: payload.status || 'draft',
    meta_title: payload.meta_title || null,
    meta_description: payload.meta_description || null,
    canonical_url: payload.canonical_url || null,
    robots: payload.robots || 'index,follow',
    updated_at: new Date().toISOString()
  };
}

function validatePayload(payload: SeoPagePayload) {
  if (!payload.title?.trim()) throw new Error('Title wajib diisi.');
  if (payload.content != null && !Array.isArray(payload.content)) throw new Error('Content harus array JSON.');
  if (payload.query_config != null && (typeof payload.query_config !== 'object' || Array.isArray(payload.query_config))) throw new Error('Query config harus object JSON.');
}

function withPublishedAt(payload: SeoPagePayload, existingPublishedAt?: string | null) {
  const cleaned = cleanPayload(payload);
  return {
    ...cleaned,
    published_at: payload.status === 'published' ? existingPublishedAt || new Date().toISOString() : null
  };
}

export async function createSeoPage(supabase: SupabaseClient, payload: SeoPagePayload) {
  validatePayload(payload);
  const { data, error } = await supabase.from('seo_pages').insert(withPublishedAt(payload)).select('id').single();
  if (error || !data) throw error || new Error('Gagal membuat SEO page.');
  return data.id;
}

export async function updateSeoPage(supabase: SupabaseClient, id: string, payload: SeoPagePayload) {
  validatePayload(payload);
  const { data: existing, error: readError } = await supabase.from('seo_pages').select('published_at').eq('id', id).maybeSingle();
  if (readError) throw readError;
  const { error } = await supabase.from('seo_pages').update(withPublishedAt(payload, existing?.published_at)).eq('id', id);
  if (error) throw error;
  return id;
}
