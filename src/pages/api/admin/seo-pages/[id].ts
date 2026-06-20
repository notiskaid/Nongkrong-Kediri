import type { APIRoute } from 'astro';
import { ensureAdmin } from '@/lib/supabase/server';
import { updateSeoPage } from '@/lib/admin/seo-pages';

export const PUT: APIRoute = async (context) => {
  const auth = await ensureAdmin(context);
  if (!auth.ok) return auth.response;
  try {
    const payload = await context.request.json() as any;
    const id = context.params.id!;
    await updateSeoPage(auth.supabase, id, payload);
    return new Response(JSON.stringify({ id }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error?.message || 'Gagal mengupdate SEO page.' }), { status: 400 });
  }
};

export const DELETE: APIRoute = async (context) => {
  const auth = await ensureAdmin(context);
  if (!auth.ok) return auth.response;
  const id = context.params.id!;
  const { error } = await auth.supabase.from('seo_pages').delete().eq('id', id);
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  return new Response(JSON.stringify({ id }), { status: 200 });
};
