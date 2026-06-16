# DESAIN.md — Nongkrong Kediri

## Arah Desain

Nongkrong Kediri memakai gaya visual minimal editorial dengan sentuhan personal website. Desain harus terasa lokal, ringan, cepat, dan kuratif. Jangan membuat tampilan seperti template SaaS, marketplace besar, atau landing page startup.

Website ini terinspirasi dari personal web Nando Rifky: monokrom, font mono, border tipis, card sederhana, dan navigasi kecil.

## Mood

- Monokrom
- Font mono/typewriter
- Border tipis
- Card sederhana
- Banyak whitespace
- Navigasi kecil dengan separator titik
- Tombol rounded/pill
- Informasi jelas, bukan dekoratif

## Prinsip

1. Content first.
2. Directory harus mudah dibaca.
3. Listing card harus ringkas.
4. Halaman detail harus editorial.
5. Warna tidak boleh ramai.
6. Icon hanya sebagai pendukung.
7. Mobile first.
8. Jangan membuat semua halaman terasa seperti template SEO otomatis.

## Warna

Light mode:

```txt
background / paper: #f8f8f6
surface: #ffffff
text / ink: #1f1f1f
muted: #666666
border / line: #dedede
accent: #111111
```

Dark mode:

```txt
background / paper: #111111
surface: #181818
text / ink: #f2f2f2
muted: #a3a3a3
border / line: #2d2d2d
accent: #ffffff
```

## Typography

Gunakan font mono sebagai identitas visual utama.

- Heading: mono, tebal, tracking agak rapat.
- Body: mono, line-height lega.
- Label/meta: kecil, muted.

Jangan memakai terlalu banyak font family.

## Layout

- Max width utama: 6xl.
- Padding mobile: 16px.
- Padding desktop: 24–32px.
- Jarak antar section: 48–64px.
- Card memakai rounded 16–24px.

## Card

Card listing wajib:

- border 1px
- background surface
- rounded 16px
- shadow sangat halus atau tanpa shadow
- hover: border menjadi lebih gelap, boleh translate kecil

Jangan memakai shadow berat.

## Button

Primary:

- background hitam
- teks putih
- border hitam

Secondary:

- background putih/surface
- border abu
- teks hitam

Ghost:

- tanpa border kuat
- dipakai hanya untuk aksi ringan

## Icon

Gunakan Remix Icon.

Contoh icon:

```html
<i class="ri-cup-line"></i>
<i class="ri-search-line"></i>
<i class="ri-map-pin-line"></i>
<i class="ri-wifi-line"></i>
<i class="ri-plug-line"></i>
<i class="ri-macbook-line"></i>
```

## Header

Header harus kecil, ringan, dan mirip personal web.

Contoh struktur:

```txt
nongkrong kediri • tempat • wfc • area • submit        search moon rss
```

## Listing Card

Card tempat harus menampilkan:

- nama tempat sebagai link utama
- area
- rating jika ada
- excerpt pendek
- use case/fasilitas utama
- harga ringkas
- jam buka ringkas

Judul tempat harus menjadi anchor ke halaman detail.

## Jangan

- Jangan pakai gradient mencolok.
- Jangan pakai animasi berlebihan.
- Jangan pakai banyak warna kategori.
- Jangan membuat tampilan seperti marketplace besar.
- Jangan mengganti Remix Icon dengan icon library lain tanpa alasan kuat.
- Jangan menghapus karakter personal dan minimal.
