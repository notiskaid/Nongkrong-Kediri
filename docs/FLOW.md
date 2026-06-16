# FLOW.md — Flow Website Nongkrong Kediri

## Konsep Utama

Core entity website ini adalah `Place`.

Satu tempat hanya diinput sekali, lalu otomatis muncul di berbagai halaman keyword sesuai taxonomy dan query_config.

Contoh:

`Kedai Kopi ABC` punya:

- category: cafe, coffee-shop
- use_case: wfc, nugas
- facility: wifi, colokan, indoor
- area: mojoroto

Maka otomatis bisa muncul di:

- `/tempat-ngopi-kediri/`
- `/wfc-kediri/`
- `/cafe-buat-nugas-kediri/`
- `/area/mojoroto/`

## Flow Publik

### Homepage

1. User masuk homepage.
2. User melihat search bar dan shortcut keyword.
3. User klik keyword atau mencari tempat.
4. User masuk ke landing page/listing.
5. User klik judul tempat.
6. User masuk halaman detail tempat.
7. User bisa buka Google Maps atau lapor data salah.

### Landing Page Keyword

1. Sistem mengambil data `seo_pages` berdasarkan slug.
2. Sistem render H1, deskripsi, author, tanggal terbit, tanggal update.
3. Sistem membaca `query_config`.
4. Sistem query/filter data `places`.
5. Sistem render listing card.
6. Sistem render konten manual bawah listing.

### Halaman Detail Tempat

1. Sistem mengambil `Place` berdasarkan slug.
2. Render H1 nama tempat.
3. Render data cepat: area, jam buka, harga, rating.
4. Render foto, deskripsi editorial, fasilitas, use case, alamat.
5. Render CTA Google Maps.
6. Render related places.
7. Render form lapor data salah.

## Flow Admin

### Input Tempat

1. Admin login.
2. Admin buka `/admin/places/new/`.
3. Admin isi data dasar.
4. Admin pilih area, kategori, use case, fasilitas.
5. Admin isi excerpt, deskripsi, catatan editorial.
6. Admin isi meta SEO.
7. Admin set status `published`.
8. Data otomatis muncul di halaman keyword yang cocok.

### Edit Landing Page SEO

1. Admin buka `/admin/seo-pages/`.
2. Admin edit H1, deskripsi, konten manual, meta.
3. Admin edit `query_config`.
4. Listing berubah otomatis sesuai query_config.

### Lapor Data Salah

1. User mengisi form lapor di halaman tempat.
2. Data masuk ke `place_reports`.
3. Admin melihat di `/admin/reports/`.
4. Admin update data tempat jika laporan valid.
5. Admin tandai laporan `resolved`.

## Status Data

Place status:

- draft
- review
- published
- archived
- closed

SEO page status:

- draft
- published
- archived

Report status:

- pending
- reviewed
- resolved
- rejected
