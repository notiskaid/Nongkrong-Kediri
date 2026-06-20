import type { APIRoute } from 'astro';
import { ensureAdmin } from '@/lib/supabase/server';

type Direction = 'up' | 'down';

export const POST: APIRoute = async (context) => {
  const auth = await ensureAdmin(context);
  if (!auth.ok) return auth.response;

  try {
    const payload = await context.request.json() as { id?: string; direction?: Direction };
    if (!payload.id || !['up', 'down'].includes(String(payload.direction))) {
      return new Response(JSON.stringify({ error: 'Payload reorder tidak valid.' }), { status: 400 });
    }

    const { data, error } = await auth.supabase
      .from('places')
      .select('id,name,sort_order')
      .order('sort_order', { ascending: true, nullsFirst: false })
      .order('name', { ascending: true });

    if (error || !data) throw error || new Error('Gagal membaca urutan tempat.');

    const ordered = data.map((place, index) => ({ ...place, sort_order: (index + 1) * 10 }));
    const currentIndex = ordered.findIndex((place) => place.id === payload.id);
    if (currentIndex < 0) return new Response(JSON.stringify({ error: 'Tempat tidak ditemukan.' }), { status: 404 });

    const targetIndex = payload.direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    if (targetIndex < 0 || targetIndex >= ordered.length) {
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    const currentSort = ordered[currentIndex].sort_order;
    ordered[currentIndex].sort_order = ordered[targetIndex].sort_order;
    ordered[targetIndex].sort_order = currentSort;

    const updates = ordered.map((place) => auth.supabase.from('places').update({ sort_order: place.sort_order, updated_at: new Date().toISOString() }).eq('id', place.id));
    const results = await Promise.all(updates);
    const failed = results.find((result) => result.error);
    if (failed?.error) throw failed.error;

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error?.message || 'Gagal mengubah urutan tempat.' }), { status: 400 });
  }
};
