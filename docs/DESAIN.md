  # DESIGN.md — Nongkrong Kediri Redesign

  ## 0. Intent

  Rombak total visual Nongkrong Kediri menjadi **editorial directory yang bold, surreal, dan playful**, mengambil *styling cues* dari website referensi: masthead super besar, layout magazine, card bergaris tegas, warna krem-oranye-langit, section hitam kontras, dan elemen UI kecil berbentuk pill.

  Tujuan produk **tetap sama**: website direktori lokal untuk tempat ngopi, cafe, WFC, warkop, dan tempat nongkrong di Kediri.

  > Prinsip penting: **jangan menyalin brand, logo, copy, aset visual, ilustrasi, foto, atau komposisi persis dari referensi.** Yang diambil hanya rasa desainnya: editorial, bold, surreal, high-contrast, retro web, dan product-directory energy.

  ---

  ## 1. Arah Kreatif

  ### Nama rasa desain

  **“Kediri Hangoutverse”**

  Sebuah direktori tempat nongkrong yang terasa seperti majalah alternatif lokal: ada energi poster, katalog produk, zine digital, dan peta nongkrong imajinatif.

  ### Keywords

  - editorial web
  - surreal landscape
  - oversized typography
  - retro digital magazine
  - local directory
  - playful but useful
  - cream, black, orange, sky blue
  - thin borders
  - pill buttons
  - collage-like sections
  - high contrast
  - structured chaos

  ### Yang harus terasa

  Website harus terasa seperti:

  - direktori lokal yang dikurasi, bukan marketplace generik;
  - majalah nongkrong Kediri, bukan landing page SaaS;
  - fun dan berani, tapi tetap cepat dibaca;
  - cocok untuk anak WFC, cafe hopper, komunitas, mahasiswa, dan warga lokal.

  ### Yang tidak boleh

  - Jangan membuat clone website referensi.
  - Jangan pakai logo, nama, layout persis, aset gunung/kaleng/produk, atau copy dari referensi.
  - Jangan membuat semua section penuh gimmick sampai fungsi directory hilang.
  - Jangan mengorbankan SEO dan keterbacaan.
  - Jangan membuat UI seperti marketplace besar atau template startup.

  ---

  ## 2. Design Translation dari Referensi ke Nongkrong Kediri

  Referensi punya karakter utama:

  1. **Hero besar dengan masthead raksasa**  
    Terjemahkan menjadi headline seperti `NONGKRONG KEDIRI` atau judul halaman keyword seperti `WFC KEDIRI`, `CAFE KEDIRI`, `TEMPAT NGOPI KEDIRI`.

  2. **Surreal product world**  
    Terjemahkan menjadi dunia visual Kediri: siluet Gunung Kelud, Sungai Brantas, jalan kota, kursi plastik warkop, meja cafe, gelas kopi, colokan, laptop, lampu jalan, angkringan, dan suasana malam.

  3. **Product cards horizontal**  
    Terjemahkan menjadi card tempat: nama tempat, area, kategori, jam buka, fasilitas, harga, dan CTA.

  4. **Black ticker/news strip**  
    Terjemahkan menjadi strip navigasi cepat: `WFC`, `Cafe 24 Jam`, `Low Budget`, `Outdoor`, `Dekat Kampus`, `Dekat Stasiun`, `Submit Tempat`.

  5. **Section hitam dramatis**  
    Terjemahkan untuk section “Use Case”: WFC, nongkrong malam, date spot, kerja kelompok, komunitas, nugas.

  6. **Review cards kecil**  
    Terjemahkan menjadi testimoni lokal, highlight rating, atau kutipan pendek dari pengunjung.

  7. **FAQ editorial**  
    Tetap dipakai untuk SEO, tapi tampil lebih berani dengan accordion tipis dan layout dua kolom.

  ---

  ## 3. Visual System

  ### 3.1 Color Tokens

  Gunakan CSS variables agar mudah dipakai di Astro/Tailwind.

  ```css
  :root {
    --nk-cream: 250 243 231;      /* #FAF3E7 */
    --nk-paper: 255 250 241;      /* #FFFAF1 */
    --nk-ink: 8 8 8;              /* #080808 */
    --nk-muted: 92 82 70;         /* #5C5246 */
    --nk-line: 20 20 20;          /* #141414 */

    --nk-orange: 245 146 48;      /* #F59230 */
    --nk-sunset: 224 169 116;     /* #E0A974 */
    --nk-sky: 181 207 225;        /* #B5CFE1 */
    --nk-coffee: 87 51 28;        /* #57331C */
    --nk-brown: 143 94 49;        /* #8F5E31 */

    --nk-black: 0 0 0;            /* #000000 */
    --nk-white: 255 255 255;      /* #FFFFFF */
    --nk-danger: 199 54 39;       /* #C73627 */
  }
  ```

  ### 3.2 Color Usage

  | Token | Usage |
  |---|---|
  | `cream` | background utama |
  | `paper` | card terang, FAQ, listing |
  | `ink` | teks utama, border tegas |
  | `orange` | highlight, strip, CTA sekunder, gradient bawah |
  | `sky` | gradient section, background sosial/editorial |
  | `coffee` | texture overlay, section gelap hangat |
  | `black` | ticker, footer, section use-case |
  | `white` | teks di section gelap |

  ### 3.3 Gradients

  Pakai gradient sebagai suasana, bukan dekorasi berlebihan.

  ```css
  .bg-sky-sunset {
    background:
      linear-gradient(180deg, rgb(var(--nk-sky)) 0%, rgb(var(--nk-sunset)) 62%, rgb(var(--nk-orange)) 100%);
  }

  .bg-cream-glow {
    background:
      radial-gradient(circle at 50% 10%, rgba(255,255,255,0.75), transparent 36%),
      linear-gradient(180deg, rgb(var(--nk-cream)) 0%, rgb(var(--nk-paper)) 100%);
  }

  .bg-black-coffee {
    background:
      radial-gradient(circle at 20% 20%, rgba(143,94,49,0.4), transparent 28%),
      rgb(var(--nk-black));
  }
  ```

  ---

  ## 4. Typography

  ### 4.1 Font Direction

  Gunakan dua lapisan typography:

  1. **Display / Masthead**  
    Sans super bold, condensed atau grotesk. Dipakai untuk headline besar.

  2. **UI / Body**  
    Mono atau sans kecil yang rapi. Dipakai untuk nav, chip, metadata, CTA, card, dan detail.

  ### 4.2 Rekomendasi Font

  Prioritas aman dan cepat:

  ```css
  --font-display: "Arial Black", "Impact", "Inter Tight", system-ui, sans-serif;
  --font-body: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  ```

  Jika nanti mau pakai Google Fonts:

  - Display: `Anton`, `Archivo Black`, `Bebas Neue`, atau `Inter Tight`.
  - Body: `Inter`, `DM Sans`, atau tetap system sans.
  - UI kecil: mono system.

  ### 4.3 Type Scale

  ```css
  --text-micro: 10px;
  --text-xs: 12px;
  --text-sm: 14px;
  --text-md: 16px;
  --text-lg: 20px;
  --text-xl: 28px;
  --text-2xl: 44px;
  --text-display: clamp(64px, 15vw, 220px);
  ```

  ### 4.4 Heading Rules

  - Masthead uppercase, rapat, sangat besar.
  - Section title bisa kecil tapi tebal.
  - Card title uppercase atau title case, tergantung konteks.
  - Label pakai mono uppercase kecil.

  Contoh:

  ```txt
  NONGKRONG
  KEDIRI
  ```

  atau untuk halaman keyword:

  ```txt
  TEMPAT NGOPI
  KEDIRI
  ```

  ---

  ## 5. Layout Principles

  ### 5.1 Page Frame

  - Full width, bukan layout sempit terus-menerus.
  - Section boleh berganti background secara dramatis.
  - Konten penting tetap punya max-width agar mudah dibaca.

  ```css
  .page-frame {
    background: rgb(var(--nk-cream));
    color: rgb(var(--nk-ink));
  }

  .section-inner {
    width: min(100% - 32px, 1180px);
    margin-inline: auto;
  }
  ```

  ### 5.2 Section Rhythm

  Gunakan section seperti magazine:

  1. Hero surreal masthead
  2. Black ticker
  3. Featured places / our picks
  4. Big use-case hero
  5. Area / mood / category grid
  6. Reviews / local notes
  7. FAQ
  8. Editorial story / submit CTA
  9. Social / community
  10. Footer giant logo

  ### 5.3 Grid

  Desktop:

  - 12-column grid untuk hero dan editorial.
  - Card tempat 3 kolom.
  - FAQ 2 kolom: label kiri, accordion kanan.

  Mobile:

  - 1 kolom.
  - Masthead tetap besar, boleh overflow sedikit tapi jangan merusak scroll.
  - Ticker horizontal scroll.
  - Card tempat jadi carousel atau vertical list.

  ---

  ## 6. Components

  ## 6.1 Header

  Header kecil, pill-based, melayang di atas hero.

  ### Desktop Structure

  ```txt
  [ nongkrong kediri ]       [ tempat ] [ wfc ] [ area ] [ submit ]       [ search ] [ ☾ ]
  ```

  ### Rules

  - Posisi absolute/fixed di atas hero.
  - Background semi transparan cream/white.
  - Border hitam 1px.
  - Border radius pill.
  - Font mono 10–12px.
  - Jangan tinggi.

  ### CSS Direction

  ```css
  .site-header {
    position: fixed;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 50;
    display: flex;
    gap: 6px;
    align-items: center;
    padding: 5px 8px;
    border: 1px solid rgb(var(--nk-ink));
    border-radius: 999px;
    background: rgba(255, 250, 241, 0.72);
    backdrop-filter: blur(10px);
    font-family: var(--font-mono);
    font-size: 11px;
  }
  ```

  ---

  ## 6.2 Hero / Masthead

  Hero adalah identitas utama redesign.

  ### Homepage Hero Content

  - Micro nav/category pills di atas.
  - Masthead besar: `NONGKRONG KEDIRI`.
  - Background visual: surreal Kediri hangout landscape.
  - Floating card kiri: deskripsi direktori.
  - Floating card kanan: checklist cepat / submit CTA.
  - Optional center object: gelas kopi, kursi plastik, signage, laptop, atau ilustrasi map pin.

  ### Copy Example

  ```txt
  NONGKRONG KEDIRI

  Direktori lokal untuk cari cafe, warkop, WFC, tempat ngopi, dan spot nongkrong di Kediri.
  ```

  ### Floating Card kiri

  ```txt
  Cari tempat buat ngopi, nugas, ngobrol, atau kerja dari Kediri.
  Filter berdasarkan area, fasilitas, harga, dan suasana.

  [ Mulai cari ] [ Submit tempat ]
  ```

  ### Floating Card kanan

  ```txt
  CEK CEPAT
  ✓ WiFi & colokan
  ✓ Jam buka
  ✓ Harga
  ✓ Parkir
  ✓ Indoor/outdoor
  ```

  ### Visual Background Direction

  Boleh pakai:

  - CSS gradient dulu untuk MVP.
  - Ilustrasi lokal custom nanti.
  - Foto cafe lokal yang diberi halftone/duotone.
  - Generated/commissioned artwork yang original, bukan aset referensi.

  ### CSS Direction

  ```css
  .hero {
    position: relative;
    min-height: 760px;
    overflow: hidden;
    padding: 72px 16px 32px;
    background:
      radial-gradient(circle at 50% 38%, rgba(255,255,255,0.88), transparent 18%),
      linear-gradient(180deg, rgb(var(--nk-sky)) 0%, rgb(var(--nk-cream)) 50%, rgb(var(--nk-sunset)) 100%);
    border-bottom: 1px solid rgb(var(--nk-ink));
  }

  .hero-title {
    margin: 0 auto;
    max-width: 1200px;
    text-align: center;
    font-family: var(--font-display);
    font-size: var(--text-display);
    line-height: 0.78;
    letter-spacing: -0.08em;
    text-transform: uppercase;
    color: rgb(var(--nk-ink));
  }

  .hero-card {
    border: 1px solid rgb(var(--nk-ink));
    background: rgba(255, 250, 241, 0.82);
    backdrop-filter: blur(8px);
    padding: 16px;
    box-shadow: 6px 6px 0 rgb(var(--nk-ink));
  }
  ```

  ---

  ## 6.3 Ticker / Shortcut Strip

  Strip hitam setelah hero. Fungsinya navigasi cepat dan memberi rasa editorial.

  ### Content

  ```txt
  WFC KEDIRI / TEMPAT NGOPI / CAFE 24 JAM / WARKOP / OUTDOOR / DEKAT KAMPUS / SUBMIT TEMPAT / RSS
  ```

  ### Rules

  - Background hitam.
  - Text putih.
  - Link kecil uppercase.
  - Bisa dibuat marquee pelan, tapi harus tetap accessible.
  - Jika animasi aktif, pause saat hover dan disable untuk `prefers-reduced-motion`.

  ```css
  .ticker {
    display: flex;
    gap: 28px;
    overflow-x: auto;
    white-space: nowrap;
    background: rgb(var(--nk-black));
    color: rgb(var(--nk-white));
    border-bottom: 1px solid rgb(var(--nk-ink));
    font-family: var(--font-mono);
    font-size: 12px;
    text-transform: uppercase;
  }
  ```

  ---

  ## 6.4 Place Cards / Directory Product Cards

  Card tempat adalah pengganti product card.

  ### Required Content

  - Nama tempat
  - Area
  - Kategori: cafe, warkop, coffee shop, outdoor, dll.
  - Use case: WFC, nongkrong santai, date, komunitas, nugas
  - Fasilitas utama: WiFi, colokan, parkir, mushola, outdoor
  - Harga ringkas
  - Jam buka
  - CTA: `Lihat detail`

  ### Card Visual

  - White/paper background.
  - Border hitam 1px.
  - Image besar di atas atau kanan.
  - Label kecil di atas image.
  - CTA kecil pill hitam.
  - Rating/facility chips kecil.

  ### Desktop Card

  ```txt
  ┌─────────────────────────────┐
  │ [AREA] [WFC] [WIFI]          │
  │                             │
  │        image/tempat          │
  │                             │
  │ CAFE NAMA TEMPAT             │
  │ Jl. xxx · Mojoroto           │
  │ WiFi · Colokan · 15-30k      │
  │ [ Lihat detail → ]           │
  └─────────────────────────────┘
  ```

  ### Empty State

  Jangan tampilkan empty state polos. Buat jadi bagian dari style.

  ```txt
  BELUM ADA TEMPAT DI LIST INI
  Punya rekomendasi cafe/warkop/WFC di Kediri?
  [ Submit tempat ] [ Lihat kategori lain ]
  ```

  ### CSS Direction

  ```css
  .place-card {
    border: 1px solid rgb(var(--nk-ink));
    background: rgb(var(--nk-paper));
    min-height: 360px;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }

  .place-card__media {
    aspect-ratio: 4 / 3;
    background:
      linear-gradient(180deg, rgba(181,207,225,0.4), rgba(245,146,48,0.22)),
      rgb(var(--nk-cream));
    border-bottom: 1px solid rgb(var(--nk-ink));
  }

  .place-card__title {
    font-family: var(--font-display);
    font-size: 28px;
    line-height: 0.95;
    letter-spacing: -0.04em;
    text-transform: uppercase;
  }
  ```

  ---

  ## 6.5 Section: Featured Places / “Pilihan Nongkrong”

  Mirip section “Our Beers” di referensi, tapi menjadi katalog tempat.

  ### Layout

  - Background cream/paper.
  - Title kecil: `Pilihan Nongkrong`.
  - Grid 3 kolom desktop.
  - Ada filter chip di atas: `Semua`, `WFC`, `Cafe`, `Warkop`, `Outdoor`.

  ### Copy

  ```txt
  Pilihan Nongkrong
  Tempat yang layak masuk shortlist awal: enak buat ngobrol, kerja, atau sekadar cari suasana.
  ```

  ---

  ## 6.6 Section: Big Use Case Hero

  Section besar untuk use-case utama, mirip hero kedua referensi.

  ### Examples

  - `WFC TANPA DRAMA`
  - `NONGKRONG MALAM DI KEDIRI`
  - `CARI CAFE BUAT NUGAS`
  - `TEMPAT NGOPI LOW BUDGET`

  ### Layout

  - Background sky/cloud/cream gradient.
  - Object visual melayang: laptop, kopi, kursi, map pin, atau gelas.
  - Text besar putih atau hitam tergantung background.
  - Ada stat mini: `WiFi`, `Colokan`, `Jam buka`, `Harga`.
  - CTA: `Lihat spot WFC`.

  ---

  ## 6.7 Section: Area & Mood Grid

  Gantikan section kosong abu-abu dengan konten berguna.

  ### Content Buckets

  Area:

  - Kota Kediri
  - Mojoroto
  - Pesantren
  - Pare
  - Ngasem
  - Gurah
  - Plosoklaten

  Mood/use case:

  - Buat kerja
  - Buat ngobrol
  - Buat malam
  - Buat murah
  - Buat outdoor
  - Buat date

  ### Visual

  - Background solid orange-sunset.
  - Cards paper kecil.
  - Grid 4 kolom desktop, 2 kolom tablet, 1 kolom mobile.
  - Setiap card punya title besar, meta kecil, CTA.

  ---

  ## 6.8 Reviews / Local Notes

  Gunakan card review kecil seperti kutipan majalah.

  ### Sources

  - Bisa pakai review internal editorial.
  - Bisa pakai highlight fitur, bukan klaim palsu.
  - Jangan mengarang rating Google.

  ### Example

  ```txt
  “Enak buat buka laptop 1–2 jam, tapi cek jam ramai sebelum datang.”
  — Catatan editorial
  ```

  ---

  ## 6.9 Use Them / Filters Section

  Section hitam dengan background texture kopi/malam. Fungsinya memperjelas cara pakai directory.

  ### Content

  ```txt
  Use This Directory For

  [ WFC ]
  Cari tempat dengan WiFi, colokan, dan meja nyaman.

  [ Nongkrong Malam ]
  Cari spot yang buka sore sampai malam.

  [ Low Budget ]
  Cari tempat dengan estimasi harga ramah kantong.
  ```

  ### Visual

  - Background black coffee.
  - Text white.
  - Filter pills cream/white.
  - Border thin white opacity.

  ---

  ## 6.10 FAQ

  FAQ tetap penting untuk SEO halaman keyword.

  ### Layout

  Desktop:

  - Kiri: title besar `FAQs` + CTA kecil.
  - Kanan: accordion full width.

  Mobile:

  - Stack vertical.

  ### Style

  - Background paper.
  - Border-top tiap item 1px hitam.
  - Icon plus/minus kotak kecil.
  - Font mono kecil untuk pertanyaan.

  ---

  ## 6.11 Editorial / Submit Story Section

  Section split 50/50 seperti editorial story.

  ### Kiri

  Foto/ilustrasi lokal: orang nongkrong, meja kopi, laptop, atau suasana Kediri.

  ### Kanan

  Black background, text white.

  ### Copy Example

  ```txt
  Bantu bikin peta nongkrong Kediri lebih hidup.

  Punya cafe, warkop, coffee shop, atau spot WFC favorit? Submit tempatnya. Data yang bagus akan bantu orang lain memilih sebelum berangkat.

  [ Submit tempat ]
  ```

  ---

  ## 6.12 Social / Community Section

  Section gradient sky-orange dengan title besar `SOCIALS` atau `KOMUNITAS`.

  Untuk Nongkrong Kediri, lebih cocok:

  ```txt
  KOMUNITAS
  Tag, submit, atau rekomendasikan spot favoritmu.
  ```

  Isi:

  - Instagram card placeholder
  - link submit
  - RSS
  - newsletter optional

  ---

  ## 6.13 Footer

  Footer hitam besar dengan masthead putih.

  ### Content

  - CTA strip: `Punya tempat nongkrong? Submit sekarang.`
  - Link columns: Jelajah, Area, Kategori, Editorial.
  - Giant wordmark: `NONGKRONG KEDIRI`.
  - Small legal/meta.

  ### Style

  - Background black.
  - Text cream/white.
  - Border top cream.
  - Wordmark sangat besar, uppercase, letter spacing rapat.

  ---

  ## 7. Page Templates

  ## 7.1 Homepage

  Order:

  1. Header
  2. Hero masthead `NONGKRONG KEDIRI`
  3. Black ticker shortcuts
  4. Featured places
  5. Big WFC hero
  6. Area & mood grid
  7. Reviews/local notes
  8. Use-case filter section
  9. FAQ mini
  10. Submit editorial section
  11. Community/social section
  12. Footer giant wordmark

  ---

  ## 7.2 SEO Landing Page

  Untuk `/wfc-kediri/`, `/tempat-ngopi-kediri/`, `/cafe-kediri/`, dll.

  Order:

  1. Compact header
  2. Keyword masthead, contoh: `WFC KEDIRI`
  3. Intro floating card berisi deskripsi SEO natural
  4. Ticker kategori terkait
  5. Listing tempat sesuai `seo_pages.query_config`
  6. Empty state editorial jika belum ada data
  7. Panduan memilih
  8. FAQ lokal
  9. Internal links
  10. Footer

  ### Keyword Hero Example

  ```txt
  TEMPAT NGOPI
  KEDIRI
  ```

  Floating card:

  ```txt
  Kumpulan tempat ngopi di Kediri untuk ngobrol, kerja, atau cari suasana.
  Cek area, jam buka, fasilitas, dan kisaran harga sebelum berangkat.
  ```

  ---

  ## 7.3 Place Detail Page

  Order:

  1. Header
  2. Detail masthead: nama tempat besar
  3. Hero image / collage
  4. Quick facts bar
  5. Editorial description
  6. Facilities grid
  7. Jam buka & harga
  8. Lokasi/map link
  9. Similar places
  10. Report data salah
  11. Footer

  ### Detail Header Direction

  ```txt
  [NAMA TEMPAT]
  Cafe · Mojoroto · Cocok untuk WFC
  ```

  Quick facts:

  ```txt
  WiFi / Colokan / Outdoor / 15–30k / Buka sampai 22.00
  ```

  ---

  ## 7.4 Area Page

  Untuk `/area/[slug]/`.

  Hero title:

  ```txt
  NONGKRONG
  MOJOROTO
  ```

  Content:

  - intro area
  - featured places in area
  - filters by use-case
  - FAQ area
  - nearby areas

  ---

  ## 7.5 Submit Page

  Submit page harus tetap usable, jangan terlalu eksperimental.

  Style:

  - Background cream.
  - Form card paper.
  - Border hitam.
  - Input simple, tinggi cukup.
  - CTA hitam.
  - Sisi kanan bisa ada editorial note: “Data yang paling membantu: jam buka, fasilitas, kisaran harga, foto.”

  ---

  ## 8. UI Details

  ### 8.1 Buttons

  ```css
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    min-height: 30px;
    padding: 7px 12px;
    border: 1px solid rgb(var(--nk-ink));
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 11px;
    line-height: 1;
    text-transform: uppercase;
  }

  .btn-primary {
    background: rgb(var(--nk-black));
    color: rgb(var(--nk-white));
  }

  .btn-secondary {
    background: rgb(var(--nk-paper));
    color: rgb(var(--nk-ink));
  }

  .btn-orange {
    background: rgb(var(--nk-orange));
    color: rgb(var(--nk-ink));
  }
  ```

  ### 8.2 Chips

  ```css
  .chip {
    display: inline-flex;
    align-items: center;
    height: 20px;
    padding: 0 7px;
    border: 1px solid rgb(var(--nk-ink));
    border-radius: 999px;
    background: rgb(var(--nk-paper));
    font-family: var(--font-mono);
    font-size: 10px;
    text-transform: uppercase;
  }
  ```

  ### 8.3 Cards

  - Border: 1px solid black.
  - Shadow boleh hard shadow kecil: `4px 4px 0 black`.
  - Jangan pakai shadow blur berat.
  - Hover: translate `-2px`, shadow lebih tegas.

  ```css
  .hard-card {
    border: 1px solid rgb(var(--nk-ink));
    background: rgb(var(--nk-paper));
    box-shadow: 4px 4px 0 rgb(var(--nk-ink));
  }

  .hard-card:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 rgb(var(--nk-ink));
  }
  ```

  ### 8.4 Images

  Image treatment:

  - Object-fit cover.
  - Border hitam.
  - Bisa pakai grayscale/duotone tipis.
  - Jangan pakai rounded besar; referensi terasa lebih kotak/editorial.
  - Foto cafe boleh diberi overlay gradient orange/sky sangat halus.

  ```css
  .image-frame {
    border: 1px solid rgb(var(--nk-ink));
    background: rgb(var(--nk-cream));
    overflow: hidden;
  }

  .image-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: saturate(0.9) contrast(1.05);
  }
  ```

  ---

  ## 9. Motion

  Motion boleh ada, tapi ringan.

  Allowed:

  - ticker horizontal slow marquee;
  - floating object sangat pelan;
  - card hover hard shadow;
  - accordion open/close;
  - fade-in sederhana.

  Not allowed:

  - parallax berat yang bikin jank;
  - scroll hijacking;
  - animasi yang mengganggu baca listing;
  - auto-play terlalu cepat.

  Respect reduced motion:

  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
    }
  }
  ```

  ---

  ## 10. Accessibility

  - Minimum contrast tetap aman, terutama orange/sky background.
  - Jangan pakai text kecil di atas image tanpa overlay.
  - Semua CTA harus keyboard-accessible.
  - Ticker link tetap bisa difokuskan.
  - Accordion FAQ pakai button asli.
  - Jangan jadikan masthead satu-satunya H1 jika text terpecah visual; tetap pastikan semantic H1 jelas.
  - Images harus punya alt text yang deskriptif.

  ---

  ## 11. SEO Requirements

  Desain boleh bold, tapi SEO tidak boleh rusak.

  - Setiap landing page tetap punya `h1` sesuai keyword.
  - Intro 1–2 paragraf tetap ada.
  - Listing tempat tetap server-rendered.
  - FAQ tetap semantic.
  - Internal links tetap jelas.
  - Breadcrumb tetap tersedia, boleh kecil.
  - Jangan menyembunyikan konten penting hanya dalam carousel JS.

  ---

  ## 12. Implementation Notes untuk Repo Astro/Tailwind

  Repo menggunakan Astro, TypeScript, React islands, Tailwind CSS, Supabase, Cloudflare Workers/R2, dan Remix Icon. Struktur penting yang perlu disentuh:

  ```txt
  src/layouts/BaseLayout.astro
  src/components/base/
  src/components/home/
  src/components/place/
  src/components/seo/
  src/pages/index.astro
  src/pages/[...slug].astro
  src/pages/tempat/[slug].astro
  src/pages/area/[slug].astro
  tailwind.config.ts
  ```

  ### 12.1 Suggested Component Additions

  ```txt
  src/components/design/TickerStrip.astro
  src/components/design/MastheadHero.astro
  src/components/design/HardCard.astro
  src/components/design/Chip.astro
  src/components/design/GiantFooter.astro
  src/components/design/SectionLabel.astro
  src/components/design/UseCaseBand.astro
  src/components/design/FaqAccordion.astro
  ```

  ### 12.2 Suggested CSS File

  Buat atau update global stylesheet:

  ```txt
  src/styles/global.css
  ```

  Tambahkan:

  - CSS variables warna.
  - Base body background.
  - Typography utilities.
  - Hard card/button/chip utilities.
  - Gradient utilities.
  - Reduced motion rules.

  ### 12.3 Tailwind Extension Example

  ```ts
  // tailwind.config.ts
  extend: {
    fontFamily: {
      display: ['Arial Black', 'Impact', 'Inter Tight', 'system-ui', 'sans-serif'],
      body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
    },
    colors: {
      cream: 'rgb(var(--nk-cream) / <alpha-value>)',
      paper: 'rgb(var(--nk-paper) / <alpha-value>)',
      ink: 'rgb(var(--nk-ink) / <alpha-value>)',
      orange: 'rgb(var(--nk-orange) / <alpha-value>)',
      sky: 'rgb(var(--nk-sky) / <alpha-value>)',
      coffee: 'rgb(var(--nk-coffee) / <alpha-value>)',
    },
    boxShadow: {
      hard: '4px 4px 0 rgb(var(--nk-ink))',
      'hard-lg': '7px 7px 0 rgb(var(--nk-ink))',
    }
  }
  ```

  ---

  ## 13. Copywriting Tone

  Tone tetap lokal, ringan, dan praktis. Jangan terlalu corporate.

  ### Good

  ```txt
  Cari tempat buat buka laptop, ngobrol lama, atau sekadar ngopi sore di Kediri.
  ```

  ```txt
  Shortlist awal sebelum berangkat: cek area, jam buka, WiFi, colokan, dan kisaran harga.
  ```

  ```txt
  Punya spot favorit? Bantu masukin ke direktori.
  ```

  ### Avoid

  ```txt
  Solusi terbaik untuk kebutuhan lifestyle Anda.
  ```

  ```txt
  Platform revolusioner untuk menemukan destinasi kuliner.
  ```

  ---

  ## 14. Design QA Checklist

  Sebelum merge, cek:

  - [ ] Homepage punya masthead besar dan ticker hitam.
  - [ ] Directory/listing tetap mudah dipindai.
  - [ ] Empty state punya CTA submit.
  - [ ] Mobile hero tidak rusak walau headline besar.
  - [ ] Section gelap masih readable.
  - [ ] FAQ tetap SEO-friendly dan accessible.
  - [ ] Tidak ada aset/copy/brand yang menyalin referensi.
  - [ ] Semua link penting tetap terlihat.
  - [ ] Lighthouse tidak turun parah karena gambar/animasi.
  - [ ] `prefers-reduced-motion` dihormati.

  ---

  ## 15. MVP Redesign Scope

  Untuk tahap pertama, cukup kerjakan:

  1. Update global visual tokens.
  2. Redesign header.
  3. Redesign homepage hero.
  4. Tambah ticker strip.
  5. Redesign place cards.
  6. Redesign SEO landing page hero + empty state.
  7. Redesign footer giant wordmark.

  Tahap kedua:

  1. Big use-case section.
  2. Area/mood grid.
  3. Reviews/local notes.
  4. Editorial submit story.
  5. Community/social section.
  6. Custom original illustration/art direction.

  ---

  ## 16. One-Line Prompt untuk AI Agent

  Rombak visual Nongkrong Kediri menjadi editorial-surreal local directory: giant uppercase masthead, cream/orange/sky palette, black ticker strip, hard-border cards, pill UI, dramatic black sections, and magazine-like layout; keep the product purpose as a Kediri hangout/cafe/WFC directory and do not copy any brand assets or exact layout from the reference.
