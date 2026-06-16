import type { APIRoute } from 'astro';
import { ensureAdmin } from '@/lib/supabase/server';
import { createPlace } from '@/lib/admin/places';

export const POST: APIRoute = async (context) => {
  const auth = await ensureAdmin(context);
  if (!auth.ok) return auth.response;
  try {
    const payload = await context.request.json() as any;
    const id = await createPlace(auth.supabase, payload);
    return new Response(JSON.stringify({ id }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error?.message || 'Gagal menyimpan tempat.' }), { status: 400 });
  }
};
