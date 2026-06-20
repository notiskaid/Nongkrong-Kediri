import { defineMiddleware } from 'astro:middleware';
import { getAdminSession } from '@/lib/admin/session';
import { getSupabaseAdmin, getSupabaseServer, isSupabaseConfigured } from '@/lib/supabase/server';
import { redirectTarget } from '@/lib/seo/silo';

export const onRequest = defineMiddleware(async (context, next) => {
  const path = context.url.pathname;
  const target = redirectTarget(path);
  if (target) {
    const url = new URL(target, context.url.origin);
    return Response.redirect(url, 301);
  }

  const isApiRoute = path.startsWith('/api/');

  if (isApiRoute) {
    const supabase = getSupabaseServer(context);
    context.locals.supabase = supabase || undefined;
    context.locals.isSupabaseConfigured = isSupabaseConfigured(context);
    context.locals.user = null;
    context.locals.isAdmin = false;
    return next();
  }

  const session = await getAdminSession(context);
  const supabase = session ? getSupabaseAdmin(context) || getSupabaseServer(context) : getSupabaseServer(context);
  context.locals.supabase = supabase || undefined;
  context.locals.isSupabaseConfigured = isSupabaseConfigured(context);
  context.locals.user = session ? ({ email: session.email } as any) : null;
  context.locals.isAdmin = Boolean(session);

  const isAdminRoute = path === '/admin' || path.startsWith('/admin/');
  const isLoginRoute = path === '/admin/login' || path === '/admin/login/';
  const isPasswordResetRoute = path === '/admin/reset-password' || path === '/admin/reset-password/';

  if (!isSupabaseConfigured(context) && isAdminRoute && import.meta.env.PROD) {
    return new Response('Admin belum tersedia. Konfigurasi database perlu dilengkapi.', { status: 503 });
  }

  if (isSupabaseConfigured(context) && isAdminRoute && !isLoginRoute && !isPasswordResetRoute && !context.locals.isAdmin) {
    return context.redirect('/admin/login/');
  }

  if (isSupabaseConfigured(context) && isLoginRoute && context.locals.isAdmin) {
    return context.redirect('/admin/');
  }

  return next();
});
