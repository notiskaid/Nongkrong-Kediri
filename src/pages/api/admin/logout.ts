import type { APIRoute } from 'astro';
import { getSupabaseServer } from '@/lib/supabase/server';

export const POST: APIRoute = async (context) => {
  const supabase = getSupabaseServer(context);
  if (supabase) await supabase.auth.signOut();
  return context.redirect('/admin/login/');
};
