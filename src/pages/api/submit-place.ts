import type { APIRoute } from 'astro';

export const POST: APIRoute = async () => {
  return new Response(
    JSON.stringify({ error: 'Submit tempat sudah ditutup. Hubungi editorial melalui /kontak/ untuk pengaduan, kerja sama, atau koreksi data.' }),
    { status: 410, headers: { 'Content-Type': 'application/json' } }
  );
};
