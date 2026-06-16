# SEO.md — SEO Rules Nongkrong Kediri

## Tujuan SEO

Website ini fokus pada SEO lokal Kediri untuk keyword:

- tempat ngopi kediri
- tempat nongkrong kediri
- wfc kediri
- cafe buat nugas kediri
- cafe 24 jam kediri
- cafe murah kediri
- cafe outdoor kediri
- cafe dekat stasiun kediri
- keyword area seperti Mojoroto, Pesantren, Kota Kediri

## URL Strategy

Indexable:

```txt
/
/tempat/[slug]/
/tempat-ngopi-kediri/
/tempat-nongkrong-kediri/
/wfc-kediri/
/cafe-buat-nugas-kediri/
/cafe-24-jam-kediri/
/cafe-murah-kediri/
/cafe-outdoor-kediri/
/cafe-dekat-stasiun-kediri/
/area/[slug]/
```

Noindex:

```txt
/search/
/admin/
filter/query parameter pages
```

## Page Rules

### Detail Tempat

- H1 = nama tempat.
- Meta title boleh custom.
- Jika meta title kosong, gunakan pattern:
  - `{Nama Tempat}: Alamat, Jam Buka, Fasilitas & Review`
- Deskripsi harus unik.
- Jangan hanya menampilkan data mentah.
- Tambahkan catatan editorial.
- Tambahkan internal link ke area, use case, dan related places.

### Landing Page Keyword

Template teknis:

1. H1
2. Deskripsi pendek
3. Author
4. Tanggal terbit
5. Tanggal terakhir diperbarui
6. Listing card otomatis
7. Konten manual bebas
8. FAQ opsional
9. Internal links opsional

Konten bawah listing harus manual dan bermanfaat. Jangan membuat konten template spam.

## Canonical

- Halaman detail canonical ke `/tempat/[slug]/`.
- Landing page canonical ke `/{slug}/`.
- Search/filter noindex.
- Jangan index semua kombinasi filter.

## Internal Linking

Card listing wajib menjadikan nama tempat sebagai link utama ke halaman detail.

Halaman detail harus link ke:

- halaman area
- halaman use case relevan
- related places

Landing page keyword harus link ke:

- detail tempat
- landing page terkait

## Structured Data

Halaman detail:

- `CafeOrCoffeeShop` atau `LocalBusiness`
- `BreadcrumbList`

Landing page keyword:

- `ItemList`
- `BreadcrumbList`

Jangan markup rating/review Google seolah-olah itu review milik website sendiri. Jika rating berasal dari Google, tampilkan sebagai informasi eksternal biasa.

## Freshness

Gunakan:

- `published_at`
- `updated_at`
- `last_reviewed_at`

Untuk directory lokal, `last_reviewed_at` penting karena jam buka, alamat, dan status tempat bisa berubah.

## Sitemap

Sitemap tersedia di:

```txt
/sitemap.xml
```

Sitemap mengambil:

- homepage
- SEO pages published
- place pages published
- area pages
- submit page

## Thin Content Prevention

Agar tidak jadi directory tipis:

- Tambahkan deskripsi editorial unik untuk tiap tempat.
- Tambahkan catatan WFC/nugas/nongkrong jika relevan.
- Jangan menampilkan landing page keyword tanpa listing atau tanpa konteks.
- Gunakan konten manual bawah listing.
- Update data secara berkala.
