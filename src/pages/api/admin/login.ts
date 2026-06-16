import type { APIRoute } from 'astro';
import { adminEmails, getSupabaseServer } from '@/lib/supabase/server';

export const POST: APIRoute = async (context) => {
  const supabase = getSupabaseServer(context);
  if (!supabase) return json({ error: 'Database belum tersambung.' }, 503);

  const payload = await context.request.json() as { email?: string; password?: string };
  const email = payload.email?.trim();
  const password = payload.password || '';
  if (!email || !password) return json({ error: 'Email dan password wajib diisi.' }, 400);
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return json({ error: error.message }, 400);

  const allowed = adminEmails(context);
  if (allowed.length > 0 && !allowed.includes(email.toLowerCase())) {
    await supabase.auth.signOut();
    return json({ error: 'Email ini tidak punya akses admin.' }, 403);
  }

  return json({ ok: true }, 200);
};

function json(payload: unknown, status: number) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}
