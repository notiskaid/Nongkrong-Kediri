import type { APIRoute } from 'astro';
import { getSupabaseServer } from '@/lib/supabase/server';

function text(value: unknown, max = 500) {
  return String(value || '').trim().slice(0, max);
}

export const POST: APIRoute = async (context) => {
  const contentType = context.request.headers.get('content-type') || '';
  const payload = (contentType.includes('application/json')
    ? await context.request.json()
    : Object.fromEntries((await context.request.formData()).entries())) as Record<string, unknown>;

  const name = text(payload.name, 120);
  if (!name) return new Response('Nama tempat wajib diisi.', { status: 400 });

  const supabase = getSupabaseServer(context);
  if (!supabase) {
    return new Response('Terima kasih. Usulan tempat sudah diterima dan akan ditinjau.', { status: 200 });
  }

  const { error } = await supabase.from('place_submissions').insert({
    name,
    address: text(payload.address, 500) || null,
    google_maps_url: text(payload.google_maps_url, 500) || null,
    contact_url: text(payload.contact_url, 500) || null,
    notes: text(payload.notes, 2000) || null,
    submitter_name: text(payload.submitter_name, 120) || null,
    submitter_contact: text(payload.submitter_contact, 200) || null,
    status: 'pending'
  });

  if (error) return new Response(`Gagal submit: ${error.message}`, { status: 400 });
  return new Response('Terima kasih. Tempat sudah masuk antrean review.', { status: 200 });
};
