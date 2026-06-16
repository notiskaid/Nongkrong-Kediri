import type { APIRoute } from 'astro';
import { getSupabaseServer } from '@/lib/supabase/server';

const reportTypes = new Set(['jam-buka-salah', 'tempat-tutup', 'alamat-salah', 'fasilitas-salah', 'harga-salah', 'lainnya']);

function text(value: unknown, max = 500) {
  return String(value || '').trim().slice(0, max);
}

export const POST: APIRoute = async (context) => {
  const payload = (await context.request.json()) as Record<string, unknown>;
  const placeId = text(payload.place_id, 80);
  const reportType = text(payload.report_type, 80);
  if (!placeId || !reportTypes.has(reportType)) return new Response(JSON.stringify({ error: 'Laporan tidak valid.' }), { status: 400 });

  const supabase = getSupabaseServer(context);
  if (!supabase) return new Response(JSON.stringify({ ok: true, demo: true }), { status: 200 });

  const { error } = await supabase.from('place_reports').insert({
    place_id: placeId,
    report_type: reportType,
    message: text(payload.message, 2000) || null,
    reporter_name: text(payload.reporter_name, 120) || null,
    reporter_contact: text(payload.reporter_contact, 200) || null,
    status: 'pending'
  });

  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
