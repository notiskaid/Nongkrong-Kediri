import type { APIRoute } from 'astro';
import { adminEmails, getSupabaseServer } from '@/lib/supabase/server';

export const POST: APIRoute = async (context) => {
  const supabase = getSupabaseServer(context);
  const wantsJson = context.request.headers.get('content-type')?.includes('application/json');
  if (!supabase) return fail(context, 'Database belum tersambung.', 503, wantsJson);

  const payload = wantsJson
    ? await context.request.json() as { email?: string; password?: string }
    : Object.fromEntries(await context.request.formData()) as { email?: string; password?: string };
  const email = payload.email?.trim();
  const password = payload.password || '';
  if (!email || !password) return fail(context, 'Email dan password wajib diisi.', 400, wantsJson);
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return fail(context, error.message, 400, wantsJson);

  const allowed = adminEmails(context);
  if (allowed.length > 0 && !allowed.includes(email.toLowerCase())) {
    await supabase.auth.signOut();
    return fail(context, 'Email ini tidak punya akses admin.', 403, wantsJson);
  }

  return wantsJson ? json({ ok: true }, 200) : context.redirect('/admin/', 303);
};

function fail(context: Parameters<APIRoute>[0], message: string, status: number, wantsJson = true) {
  if (wantsJson) return json({ error: message }, status);
  return context.redirect(`/admin/login/?error=${encodeURIComponent(message)}`, 303);
}

function json(payload: unknown, status: number) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}
