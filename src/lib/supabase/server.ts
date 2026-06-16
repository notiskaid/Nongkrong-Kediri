import type { APIContext } from 'astro';
import { createClient } from '@supabase/supabase-js';
import { createServerClient } from '@supabase/ssr';
import { getAdminSession } from '@/lib/admin/session';

function runtimeEnv(context?: Pick<APIContext, 'locals'>) {
  return context?.locals?.runtime?.env || {};
}

function envValue(context: Pick<APIContext, 'locals'> | undefined, key: 'PUBLIC_SUPABASE_URL' | 'PUBLIC_SUPABASE_ANON_KEY' | 'SUPABASE_SERVICE_ROLE_KEY' | 'ADMIN_EMAILS') {
  const env = runtimeEnv(context);
  if (key === 'PUBLIC_SUPABASE_URL') return env.PUBLIC_SUPABASE_URL || import.meta.env.PUBLIC_SUPABASE_URL || '';
  if (key === 'PUBLIC_SUPABASE_ANON_KEY') return env.PUBLIC_SUPABASE_ANON_KEY || import.meta.env.PUBLIC_SUPABASE_ANON_KEY || '';
  if (key === 'SUPABASE_SERVICE_ROLE_KEY') return env.SUPABASE_SERVICE_ROLE_KEY || import.meta.env.SUPABASE_SERVICE_ROLE_KEY || '';
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
          context.cookies.set(name, value, {
            ...options,
            path: '/',
            sameSite: options?.sameSite || 'lax',
            secure: options?.secure ?? import.meta.env.PROD
          });
        });
      }
    }
  });
}

export function getSupabaseAdmin(context?: Pick<APIContext, 'locals'>) {
  const url = envValue(context, 'PUBLIC_SUPABASE_URL');
  const serviceRoleKey = envValue(context, 'SUPABASE_SERVICE_ROLE_KEY');
  if (!url || !serviceRoleKey) return null;
  return createClient(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
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
  const session = await getAdminSession(context);
  const supabase = getSupabaseAdmin(context) || getSupabaseServer(context);
  if (!supabase) {
    return { ok: false as const, response: new Response(JSON.stringify({ error: 'Database belum tersambung.' }), { status: 503 }) };
  }

  if (!session) {
    return { ok: false as const, response: new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 }) };
  }

  return { ok: true as const, supabase, user: { email: session.email } };
}
