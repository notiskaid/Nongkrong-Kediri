import type { APIRoute } from 'astro';
import { adminEmails, getSupabaseServer } from '@/lib/supabase/server';

export const POST: APIRoute = async (context) => {
  const supabase = getSupabaseServer(context);
  if (!supabase) return new Response(JSON.stringify({ error: 'Database belum tersambung.' }), { status: 503 });

  const payload = await context.request.json() as { email?: string; password?: string };
  const email = payload.email?.trim();
  const password = payload.password || '';
  if (!email || !password) return new Response(JSON.stringify({ error: 'Email dan password wajib diisi.' }), { status: 400 });
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 400 });

  const allowed = adminEmails(context);
  if (allowed.length > 0 && !allowed.includes(email.toLowerCase())) {
    await supabase.auth.signOut();
    return new Response(JSON.stringify({ error: 'Email ini tidak punya akses admin.' }), { status: 403 });
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
