import type { APIContext } from 'astro';
import { slugify } from '@/lib/utils/slug';

type UploadInput = {
  file: File;
  placeSlug?: string;
  prefix?: string;
};

const MAX_UPLOAD_SIZE = 6 * 1024 * 1024;
const ALLOWED_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/avif']);

function getRuntimeEnv(context: APIContext) {
  return context.locals.runtime?.env || {};
}

export function getR2PublicUrl(context: APIContext) {
  const env = getRuntimeEnv(context);
  return env.CLOUDFLARE_R2_PUBLIC_URL || import.meta.env.CLOUDFLARE_R2_PUBLIC_URL || '';
}

export function getMediaBucket(context: APIContext) {
  const env = getRuntimeEnv(context);
  return env.NK_MEDIA || null;
}

export function validateImageFile(file: File) {
  if (!file || file.size === 0) throw new Error('File gambar tidak ditemukan.');
  if (file.size > MAX_UPLOAD_SIZE) throw new Error('Ukuran gambar maksimal 6 MB. Kompres gambar sebelum upload.');
  if (!ALLOWED_TYPES.has(file.type)) throw new Error('Format gambar harus JPG, PNG, WebP, atau AVIF.');
}

function extensionFromFile(file: File) {
  const fromName = file.name.split('.').pop()?.toLowerCase();
  if (fromName && ['jpg', 'jpeg', 'png', 'webp', 'avif'].includes(fromName)) return fromName === 'jpeg' ? 'jpg' : fromName;
  if (file.type === 'image/jpeg') return 'jpg';
  if (file.type === 'image/png') return 'png';
  if (file.type === 'image/webp') return 'webp';
  if (file.type === 'image/avif') return 'avif';
  return 'jpg';
}

export function buildImageKey({ file, placeSlug, prefix = 'places' }: UploadInput) {
  const safePlace = slugify(placeSlug || 'unassigned');
  const baseName = slugify(file.name.replace(/\.[^.]+$/, '') || 'image');
  const ext = extensionFromFile(file);
  const stamp = Date.now();
  return `${prefix}/${safePlace}/${stamp}-${baseName}.${ext}`;
}

export async function uploadImageToR2(context: APIContext, input: UploadInput) {
  const bucket = getMediaBucket(context);
  if (!bucket) throw new Error('R2 binding NK_MEDIA belum tersedia. Jalankan di Cloudflare atau konfigurasi wrangler dev.');

  validateImageFile(input.file);

  const key = buildImageKey(input);
  const body = await input.file.arrayBuffer();

  await bucket.put(key, body, {
    httpMetadata: {
      contentType: input.file.type,
      cacheControl: 'public, max-age=31536000, immutable'
    },
    customMetadata: {
      originalName: input.file.name
    }
  });

  const publicBase = getR2PublicUrl(context).replace(/\/$/, '');
  const url = publicBase ? `${publicBase}/${key}` : key;

  return { key, url, size: input.file.size, contentType: input.file.type };
}
