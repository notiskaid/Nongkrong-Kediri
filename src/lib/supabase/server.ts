import type { APIContext } from 'astro';
import { createServerClient } from '@supabase/ssr';

function runtimeEnv(context?: Pick<APIContext, 'locals'>) {
  return context?.locals?.runtime?.env || {};
}

function envValue(context: Pick<APIContext, 'locals'> | undefined, key: 'PUBLIC_SUPABASE_URL' | 'PUBLIC_SUPABASE_ANON_KEY' | 'ADMIN_EMAILS') {
  const env = runtimeEnv(context);
  if (key === 'PUBLIC_SUPABASE_URL') return env.PUBLIC_SUPABASE_URL || import.meta.env.PUBLIC_SUPABASE_URL || '';
  if (key === 'PUBLIC_SUPABASE_ANON_KEY') return env.PUBLIC_SUPABASE_ANON_KEY || import.meta.env.PUBLIC_SUPABASE_ANON_KEY || '';
  return env.ADMIN_EMAILS || import.meta.env.ADMIN_EMAILS || '';
}

export function isSupabaseConfigured(context?: Pick<APIContext, 'locals'>) {
  return Boolean(envValue(context, 'PUBLIC_SUPABASE_URL') && envValue(context, 'PUBLIC_SUPABASE_ANON_KEY'));
}

export function getSupabaseServer(context: Pick<APIContext, 'cookies' | 'locals'>) {
  if (!isSupabaseConfigured(context)) return null;

  return createServerClient(envValue(context, 'PUBLIC_SUPABASE_URL'), envValue(context, 'PUBLIC_SUPABASE_ANON_KEY'), {
    cookies: {
      getAll() {
        const getAll = (context.cookies as any).getAll;
        return typeof getAll === 'function'
          ? getAll.call(context.cookies).map((cookie: { name: string; value: string }) => ({ name: cookie.name, value: cookie.value }))
          : [];
      },
      setAll(cookiesToSet: { name: string; value: string; options?: any }[]) {
        cookiesToSet.forEach(({ name, value, options }) => {
          context.cookies.set(name, value, options);
        });
      }
    }
  });
}

export function adminEmails(context?: Pick<APIContext, 'locals'>) {
  return envValue(context, 'ADMIN_EMAILS')
    .split(',')
    .map((email: string) => email.trim().toLowerCase())
    .filter(Boolean);
}

export async function ensureAdmin(context: APIContext) {
  const supabase = getSupabaseServer(context);
  if (!supabase) {
    return { ok: false as const, response: new Response(JSON.stringify({ error: 'Database belum tersambung.' }), { status: 503 }) };
  }

  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user) {
    return { ok: false as const, response: new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 }) };
  }

  const allowed = adminEmails(context);
  if (allowed.length > 0 && !allowed.includes((data.user.email || '').toLowerCase())) {
    return { ok: false as const, response: new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 }) };
  }

  return { ok: true as const, supabase, user: data.user };
}
