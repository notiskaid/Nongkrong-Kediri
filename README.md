# Nongkrong Kediri

Nongkrong Kediri adalah website direktori lokal untuk tempat ngopi, cafe, WFC, warkop, dan tempat nongkrong di Kediri.

Project ini dibuat dengan:

- Astro
- TypeScript
- React islands
- Tailwind CSS
- Supabase
- Cloudflare Workers
- Cloudflare R2
- Remix Icon

Desain mengikuti gaya minimal monokrom, font mono, card border tipis, dan nuansa personal website.

## Fitur MVP

- Homepage SEO-ready
- Halaman detail tiap tempat: `/tempat/[slug]/`
- Landing page keyword dinamis dari `seo_pages`: `/wfc-kediri/`, `/tempat-ngopi-kediri/`, dan seterusnya
- Halaman area: `/area/[slug]/`
- Listing card otomatis berdasarkan taxonomy
- Submit tempat publik
- Lapor data salah
- Custom admin ringan:
  - `/admin/places/`
  - `/admin/seo-pages/`
  - `/admin/reports/`
- Sitemap dinamis: `/sitemap.xml`
- RSS sederhana: `/rss.xml`
- Mock data fallback ketika Supabase belum dikonfigurasi

## Install

```bash
npm install
npm run dev
```

Buka:

```txt
http://localhost:4321
```

## Setup environment

Copy file env:

```bash
cp .env.example .env
```

Isi env:

```txt
PUBLIC_SITE_URL=http://localhost:4321
PUBLIC_SUPABASE_URL=
PUBLIC_SUPABASE_ANON_KEY=
ADMIN_EMAILS=mr.winando@gmail.com
CLOUDFLARE_R2_PUBLIC_URL=https://media.nongkrongkediri.id
```

Tanpa Supabase, website tetap jalan memakai mock data. Untuk admin save data permanen, Supabase wajib aktif. Upload gambar admin memakai Cloudflare R2 lewat binding `NK_MEDIA`; jika R2 belum aktif, isi Image URL manual dulu.

## Deploy Cloudflare

Project ini sudah Cloudflare-ready:

- `astro.config.mjs` memakai adapter Cloudflare.
- `wrangler.jsonc` sudah disiapkan untuk Workers.
- Binding R2 bernama `NK_MEDIA`.
- Upload image admin masuk ke endpoint `/api/admin/upload-image`.

Lihat `docs/DEPLOYMENT.md`.

## Setup Supabase

Lihat `supabase/README.md`.

Ringkasnya:

1. Buat project Supabase.
2. Jalankan `supabase/migrations/0001_initial_schema.sql`.
3. Jalankan `supabase/seed.sql`.
4. Pastikan email admin ada di `public.admin_users` (seed default: `mr.winando@gmail.com`).
5. Buat user Auth untuk email admin yang sama.
6. Login lewat `/admin/login/`.

## Struktur penting

```txt
src/pages/tempat/[slug].astro      Halaman detail tempat
src/pages/[...slug].astro          Landing page keyword dari seo_pages
src/pages/area/[slug].astro        Halaman area
src/pages/admin/                   Custom admin ringan
src/lib/queries/                   Data access layer
src/components/place/              Komponen detail/listing tempat
src/components/seo/                Komponen landing page SEO
supabase/                          Schema dan seed database
docs/                              Dokumentasi untuk manusia dan AI agent
```

## Prinsip data

Satu tempat hanya diinput sekali sebagai `Place`. Setelah itu, tempat akan otomatis muncul di banyak halaman keyword berdasarkan:

- kategori
- area
- use case
- fasilitas
- harga
- status publish

Landing page keyword dikontrol oleh `seo_pages.query_config`.

Contoh:

```json
{
  "use_cases": ["wfc"],
  "facilities": ["wifi", "colokan"],
  "sort": "featured_first"
}
```

## Catatan development

Baca dokumen ini sebelum mengubah flow:

- `docs/DESAIN.md`
- `docs/FLOW.md`
- `docs/SEO.md`
- `docs/DATABASE.md`
- `docs/AGENT.md`
- `docs/DEPLOYMENT.md`
