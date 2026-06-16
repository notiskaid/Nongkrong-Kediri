import { createBrowserClient } from '@supabase/ssr';

export function isSupabaseBrowserConfigured() {
  return Boolean(import.meta.env.PUBLIC_SUPABASE_URL && import.meta.env.PUBLIC_SUPABASE_ANON_KEY);
}

export function createSupabaseBrowserClient() {
  if (!isSupabaseBrowserConfigured()) return null;
  return createBrowserClient(import.meta.env.PUBLIC_SUPABASE_URL, import.meta.env.PUBLIC_SUPABASE_ANON_KEY);
}
