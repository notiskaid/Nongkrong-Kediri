import type { APIRoute } from 'astro';
import { createAdminSession } from '@/lib/admin/session';
import { adminEmails, getSupabaseAdmin, getSupabaseServer } from '@/lib/supabase/server';

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

  const normalizedEmail = email.toLowerCase();
  const isAdmin = await isAllowedAdmin(context, normalizedEmail);
  if (!isAdmin) {
    await supabase.auth.signOut();
    return fail(context, 'Email ini tidak punya akses admin.', 403, wantsJson);
  }

  await createAdminSession(context, normalizedEmail);
  return wantsJson ? json({ ok: true }, 200) : context.redirect('/admin/', 303);
};

async function isAllowedAdmin(context: Parameters<APIRoute>[0], email: string) {
  const allowed = adminEmails(context);
  if (allowed.includes(email)) return true;

  const adminSupabase = getSupabaseAdmin(context);
  if (!adminSupabase) return allowed.length === 0;

  const { data, error } = await adminSupabase
    .from('admin_users')
    .select('email')
    .eq('email', email)
    .maybeSingle();

  if (error) throw error;
  return Boolean(data);
}

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
