# AGENT.md — Instruksi untuk AI Agent

Kamu sedang mengerjakan website Nongkrong Kediri, sebuah direktori tempat ngopi, cafe, WFC, dan tempat nongkrong di Kediri.

## Tujuan Website

Website ini dibuat untuk SEO lokal dan discovery tempat. Setiap tempat hanya diinput satu kali sebagai data `Place`, lalu otomatis muncul di berbagai halaman keyword berdasarkan kategori, area, use case, dan fasilitas.

## Prinsip Penting

1. Jangan hardcode listing tempat di halaman keyword.
2. Semua listing harus berasal dari data `places`.
3. Halaman keyword harus berasal dari `seo_pages`.
4. Gunakan `query_config` untuk menentukan listing otomatis.
5. Desain harus mengikuti `docs/DESAIN.md`.
6. SEO rules harus mengikuti `docs/SEO.md`.
7. Gunakan Astro untuk halaman content/static/server-rendered.
8. Gunakan React hanya untuk komponen interaktif.
9. Gunakan Remix Icon untuk icon.
10. Jangan membuat UI warna-warni.
11. Jangan membuat konten template spam.
12. Jangan index halaman search/filter parameter.

## Struktur Data

Core entity:

- places
- seo_pages
- areas
- categories
- use_cases
- facilities

## Page Rules

- `/tempat/[slug]/` untuk detail tempat.
- `/{slug}/` untuk SEO landing page dari `seo_pages`.
- `/area/[slug]/` untuk halaman area.
- `/search/` untuk pencarian dan noindex.
- `/admin/` untuk internal CMS.

## SEO Rules

- Halaman detail tempat index.
- Halaman keyword utama index.
- Search/filter query noindex.
- Gunakan canonical.
- Gunakan schema JSON-LD yang valid.
- Gunakan internal linking dari card title ke halaman detail tempat.

## Design Rules

- Monokrom.
- Font mono.
- Border tipis.
- Card simple.
- Spacing lega.
- Remix Icon.
- Jangan gradient.
- Jangan shadow berat.

## Development Rules

- Jika menambah landing page keyword, tambah data di `seo_pages`, bukan membuat page hardcoded.
- Jika menambah taxonomy, gunakan tabel taxonomy.
- Jika mengubah form admin, pastikan API endpoint dan schema database sinkron.
- Jika menambah fitur user/public write, perhatikan RLS.
- Jika membuat URL baru untuk SEO, tambahkan logic sitemap jika perlu.

## Cloudflare & R2 Rules

- Project ini ditargetkan untuk Cloudflare Workers, bukan Node server.
- Jangan mengganti adapter Cloudflare ke Node kecuali diminta eksplisit.
- Storage gambar memakai Cloudflare R2 binding `NK_MEDIA`.
- Jangan pakai Supabase Storage untuk media kecuali ada keputusan baru.
- Upload gambar admin harus lewat endpoint server `/api/admin/upload-image`.
- URL gambar yang disimpan di Supabase adalah public URL dari `CLOUDFLARE_R2_PUBLIC_URL`.
