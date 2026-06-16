# DATABASE.md — Model Database

## Core Tables

- `places`
- `seo_pages`
- `areas`
- `categories`
- `use_cases`
- `facilities`
- `place_photos`
- `place_reports`
- `place_reviews`
- `place_submissions`
- `authors`
- `admin_users`

## Prinsip Relasi

`places` adalah single source of truth.

Relasi many-to-many:

- `place_categories`
- `place_use_cases`
- `place_facilities`

Dengan model ini satu tempat bisa muncul di banyak landing page tanpa duplikasi data.

## View

### `places_public`

View agregasi untuk frontend. Berisi:

- semua field `places`
- `area_name`
- `area_slug`
- `categories` sebagai JSON array
- `use_cases` sebagai JSON array
- `facilities` sebagai JSON array
- `photos` sebagai JSON array
- `featured_image_url`
- `featured_image_alt`

Frontend membaca view ini agar query lebih sederhana.

### `seo_pages_public`

View SEO page dengan author name/slug.

### `place_reports_public`

View laporan dengan nama dan slug tempat.

## `seo_pages.query_config`

`query_config` menentukan tempat apa yang muncul di landing page keyword.

Contoh WFC:

```json
{
  "use_cases": ["wfc"],
  "facilities": ["wifi", "colokan"],
  "sort": "featured_first"
}
```

Contoh cafe outdoor:

```json
{
  "facilities": ["outdoor"],
  "categories": ["cafe", "coffee-shop"],
  "sort": "featured_first"
}
```

Contoh area:

```json
{
  "areas": ["mojoroto"],
  "categories": ["cafe", "coffee-shop", "warkop"]
}
```

## RLS

RLS aktif di semua tabel.

Public bisa:

- read taxonomy
- read published places
- read published seo_pages
- insert place_reports
- insert place_submissions

Admin bisa CRUD semua data jika email ada di `admin_users`.

Admin juga diproteksi middleware berdasarkan `ADMIN_EMAILS`.

## Media Storage

File gambar tidak disimpan di Supabase Storage. File gambar disimpan di Cloudflare R2, sedangkan Supabase hanya menyimpan metadata dan URL publik di tabel `place_photos`.

Kolom penting `place_photos`:

- `place_id`
- `url`
- `alt`
- `source`
- `credit`
- `is_featured`
- `sort_order`
