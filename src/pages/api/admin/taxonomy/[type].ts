import type { APIRoute } from 'astro';
import { createTaxonomyTerm, isTaxonomyType } from '@/lib/admin/taxonomy';
import { ensureAdmin } from '@/lib/supabase/server';

export const POST: APIRoute = async (context) => {
  const auth = await ensureAdmin(context);
  if (!auth.ok) return auth.response;

  const type = context.params.type || '';
  if (!isTaxonomyType(type)) return json({ error: 'Taxonomy tidak valid.' }, 404);

  try {
    const payload = await context.request.json();
    const id = await createTaxonomyTerm(auth.supabase, type, payload);
    return json({ id }, 200);
  } catch (error: any) {
    return json({ error: error?.message || 'Gagal menyimpan taxonomy.' }, 400);
  }
};

function json(payload: unknown, status: number) {
  return new Response(JSON.stringify(payload), { status, headers: { 'Content-Type': 'application/json' } });
}
