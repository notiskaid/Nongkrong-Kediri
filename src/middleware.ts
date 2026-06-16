import { defineMiddleware } from 'astro:middleware';
import { adminEmails, getSupabaseServer, isSupabaseConfigured } from '@/lib/supabase/server';

export const onRequest = defineMiddleware(async (context, next) => {
  const path = context.url.pathname;
  const isApiRoute = path.startsWith('/api/');

  if (isApiRoute) {
    const supabase = getSupabaseServer(context);
    context.locals.supabase = supabase || undefined;
    context.locals.isSupabaseConfigured = isSupabaseConfigured(context);
    context.locals.user = null;
    context.locals.isAdmin = false;
    return next();
  }

  const supabase = getSupabaseServer(context);
  context.locals.supabase = supabase || undefined;
  context.locals.isSupabaseConfigured = isSupabaseConfigured(context);

  if (supabase) {
    try {
      const { data, error } = await supabase.auth.getUser();
      if (error) throw error;
      context.locals.user = data.user || null;
      const allowed = adminEmails(context);
      context.locals.isAdmin = Boolean(
        data.user && (allowed.length === 0 || allowed.includes((data.user.email || '').toLowerCase()))
      );
    } catch (error) {
      console.error('Admin auth check failed', error);
      context.locals.user = null;
      context.locals.isAdmin = false;
    }
  } else {
    context.locals.user = null;
    context.locals.isAdmin = true;
  }

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
