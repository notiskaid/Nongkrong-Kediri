import type { APIRoute } from 'astro';
import { ensureAdmin } from '@/lib/supabase/server';

export const PUT: APIRoute = async (context) => {
  const auth = await ensureAdmin(context);
  if (!auth.ok) return auth.response;
  const payload = await context.request.json() as { status?: string };
  const { error } = await auth.supabase.from('place_reports').update({ status: payload.status || 'resolved' }).eq('id', context.params.id!);
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
