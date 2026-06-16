# DEPLOYMENT.md — Cloudflare Deployment

Project ini diarahkan untuk deploy ke Cloudflare Workers dengan Cloudflare R2 sebagai storage gambar.

## Arsitektur produksi

```txt
Astro SSR / Hybrid
→ Cloudflare Workers
→ Supabase untuk database dan auth
→ Cloudflare R2 untuk gambar tempat dan media
```

## File penting

- `astro.config.mjs` memakai `@astrojs/cloudflare`.
- `wrangler.jsonc` menyimpan konfigurasi Workers dan R2 binding.
- `src/lib/r2.ts` berisi helper upload ke R2.
- `src/pages/api/admin/upload-image.ts` adalah endpoint upload gambar admin.

## Setup Cloudflare R2

1. Buat bucket R2 bernama `nongkrong-kediri-media`.
2. Tambahkan custom domain untuk akses publik, misalnya `media.nongkrongkediri.id`.
3. Pastikan `wrangler.jsonc` punya binding berikut:

```json
{
  "r2_buckets": [
    {
      "binding": "NK_MEDIA",
      "bucket_name": "nongkrong-kediri-media"
    }
  ]
}
```

## Environment variable

Untuk production, isi variable berikut di Cloudflare:

```txt
PUBLIC_SITE_URL=https://nongkrongkediri.id
PUBLIC_SUPABASE_URL=
PUBLIC_SUPABASE_ANON_KEY=
ADMIN_EMAILS=mr.winando@gmail.com
CLOUDFLARE_R2_PUBLIC_URL=https://media.nongkrongkediri.id
```

`SUPABASE_SERVICE_ROLE_KEY` tidak wajib untuk MVP ini. Jangan expose service role key ke client.

## Deploy

```bash
npm install
npm run build
npm run deploy
```

Atau:

```bash
npx wrangler deploy
```

## Local development

Untuk development biasa:

```bash
npm run dev
```

Tanpa binding R2 lokal, upload gambar ke R2 akan gagal. Form admin tetap menyediakan input Image URL manual, jadi development tetap bisa lanjut.

Untuk test binding lokal, gunakan Wrangler dev setelah konfigurasi Cloudflare selesai:

```bash
npm run build
npx wrangler dev
```

## Catatan media

- Kompres gambar sebelum upload.
- Format yang diterima: JPG, PNG, WebP, AVIF.
- Ukuran maksimal endpoint upload: 6 MB.
- Path file R2 mengikuti pola:

```txt
places/[slug-tempat]/[timestamp]-[nama-file].webp
```

Jika memungkinkan, gunakan WebP/AVIF agar storage dan bandwidth tetap ringan.
