import type { APIRoute } from 'astro';
import { clearAdminSession } from '@/lib/admin/session';
import { getSupabaseServer } from '@/lib/supabase/server';

export const POST: APIRoute = async (context) => {
  await clearAdminSession(context);
  const supabase = getSupabaseServer(context);
  if (supabase) await supabase.auth.signOut();
  return context.redirect('/admin/login/');
};
