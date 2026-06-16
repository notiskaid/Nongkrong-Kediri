import type { APIRoute } from 'astro';
import { ensureAdmin } from '@/lib/supabase/server';
import { uploadImageToR2 } from '@/lib/r2';

export const POST: APIRoute = async (context) => {
  const auth = await ensureAdmin(context);
  if (!auth.ok) return auth.response;

  try {
    const formData = await context.request.formData();
    const file = formData.get('file');
    const placeSlug = String(formData.get('placeSlug') || 'unassigned');

    if (!(file instanceof File)) {
      return new Response(JSON.stringify({ error: 'File gambar wajib diisi.' }), { status: 400 });
    }

    const uploaded = await uploadImageToR2(context, { file, placeSlug });
    return new Response(JSON.stringify(uploaded), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error?.message || 'Gagal upload gambar.' }), { status: 400 });
  }
};
