import type { APIRoute } from 'astro';
import { ensureAdmin } from '@/lib/supabase/server';
import { createSeoPage } from '@/lib/admin/seo-pages';

export const POST: APIRoute = async (context) => {
  const auth = await ensureAdmin(context);
  if (!auth.ok) return auth.response;
  try {
    const payload = await context.request.json() as any;
    const id = await createSeoPage(auth.supabase, payload);
    return new Response(JSON.stringify({ id }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error?.message || 'Gagal menyimpan SEO page.' }), { status: 400 });
  }
};
