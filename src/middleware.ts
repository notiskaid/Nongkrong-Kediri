import { defineMiddleware } from 'astro:middleware';
import { adminEmails, getSupabaseServer, isSupabaseConfigured } from '@/lib/supabase/server';

export const onRequest = defineMiddleware(async (context, next) => {
  const supabase = getSupabaseServer(context);
  context.locals.supabase = supabase || undefined;
  context.locals.isSupabaseConfigured = isSupabaseConfigured(context);

  if (supabase) {
    const { data } = await supabase.auth.getUser();
    context.locals.user = data.user;
    const allowed = adminEmails(context);
    context.locals.isAdmin = Boolean(
      data.user && (allowed.length === 0 || allowed.includes((data.user.email || '').toLowerCase()))
    );
  } else {
    context.locals.user = null;
    context.locals.isAdmin = true;
  }

  const path = context.url.pathname;
  const isAdminRoute = path === '/admin' || path.startsWith('/admin/');
  const isLoginRoute = path === '/admin/login' || path === '/admin/login/';

  if (!isSupabaseConfigured(context) && isAdminRoute && import.meta.env.PROD) {
    return new Response('Admin belum tersedia. Konfigurasi database perlu dilengkapi.', { status: 503 });
  }

  if (isSupabaseConfigured(context) && isAdminRoute && !isLoginRoute && !context.locals.isAdmin) {
    return context.redirect('/admin/login/');
  }

  return next();
});
