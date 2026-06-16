import type { APIRoute } from 'astro';
import { deleteTaxonomyTerm, isTaxonomyType, updateTaxonomyTerm } from '@/lib/admin/taxonomy';
import { ensureAdmin } from '@/lib/supabase/server';

export const PUT: APIRoute = async (context) => {
  const auth = await ensureAdmin(context);
  if (!auth.ok) return auth.response;

  const type = context.params.type || '';
  const id = context.params.id || '';
  if (!isTaxonomyType(type)) return json({ error: 'Taxonomy tidak valid.' }, 404);

  try {
    const payload = await context.request.json();
    await updateTaxonomyTerm(auth.supabase, type, id, payload);
    return json({ id }, 200);
  } catch (error: any) {
    return json({ error: error?.message || 'Gagal mengupdate taxonomy.' }, 400);
  }
};

export const DELETE: APIRoute = async (context) => {
  const auth = await ensureAdmin(context);
  if (!auth.ok) return auth.response;

  const type = context.params.type || '';
  const id = context.params.id || '';
  if (!isTaxonomyType(type)) return json({ error: 'Taxonomy tidak valid.' }, 404);

  try {
    await deleteTaxonomyTerm(auth.supabase, type, id);
    return json({ id }, 200);
  } catch (error: any) {
    return json({ error: error?.message || 'Gagal menghapus taxonomy.' }, 400);
  }
};

function json(payload: unknown, status: number) {
  return new Response(JSON.stringify(payload), { status, headers: { 'Content-Type': 'application/json' } });
}
