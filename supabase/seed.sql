-- Seed minimal untuk Nongkrong Kediri.
-- Setelah migration, jalankan seed ini. Ubah admin email sesuai kebutuhan.

insert into public.admin_users(email) values ('mr.winando@gmail.com') on conflict do nothing;

insert into public.authors(name, slug, role, bio)
values ('Nando Rifky', 'nando-rifky', 'SEO Enthusiast', 'Editor dan pengelola Nongkrong Kediri.')
on conflict (slug) do nothing;

insert into public.areas(name, slug, description, sort_order) values
('Mojoroto', 'mojoroto', 'Area kampus, kos, dan banyak spot nongkrong di sisi barat Kediri.', 1),
('Kota Kediri', 'kota-kediri', 'Pusat kota, dekat stasiun, alun-alun, dan area transit.', 2),
('Pesantren', 'pesantren', 'Area timur Kediri dengan banyak tempat makan dan nongkrong.', 3),
('Dekat Stasiun Kediri', 'dekat-stasiun-kediri', 'Spot ngopi yang enak untuk transit atau janjian dekat stasiun.', 4),
('Dekat Kampus', 'dekat-kampus', 'Area cafe dan tempat ngopi yang praktis untuk mahasiswa, nugas, dan janjian dekat kampus.', 5)
on conflict (slug) do nothing;

insert into public.categories(name, slug, sort_order) values
('Cafe', 'cafe', 1),
('Coffee Shop', 'coffee-shop', 2),
('Warkop', 'warkop', 3),
('Resto Cafe', 'resto-cafe', 4),
('Angkringan', 'angkringan', 5)
on conflict (slug) do nothing;

insert into public.use_cases(name, slug, icon, sort_order) values
('WFC', 'wfc', 'ri-macbook-line', 1),
('Nugas', 'nugas', 'ri-book-open-line', 2),
('Nongkrong', 'nongkrong', 'ri-group-line', 3),
('Date', 'date', 'ri-heart-line', 4),
('Malam', 'malam', 'ri-moon-line', 5),
('Keluarga', 'keluarga', 'ri-home-heart-line', 6),
('Live Music', 'live-music', 'ri-music-2-line', 7),
('Aesthetic', 'aesthetic', 'ri-sparkling-line', 8),
('Instagramable', 'instagramable', 'ri-camera-line', 9),
('View Alam', 'view-alam', 'ri-landscape-line', 10),
('Kids Friendly', 'kids-friendly', 'ri-parent-line', 11),
('Bukber', 'bukber', 'ri-restaurant-line', 12)
on conflict (slug) do nothing;

insert into public.facilities(name, slug, icon, sort_order) values
('WiFi', 'wifi', 'ri-wifi-line', 1),
('Colokan', 'colokan', 'ri-plug-line', 2),
('Indoor', 'indoor', 'ri-building-line', 3),
('Outdoor', 'outdoor', 'ri-leaf-line', 4),
('AC', 'ac', 'ri-windy-line', 5),
('Parkir Motor', 'parkir-motor', 'ri-motorbike-line', 6),
('Mushola', 'mushola', 'ri-community-line', 7),
('24 Jam', '24-jam', 'ri-time-line', 8),
('Live Music', 'live-music', 'ri-music-2-line', 9),
('View Alam', 'view-alam', 'ri-landscape-line', 10),
('Kids Friendly', 'kids-friendly', 'ri-parent-line', 11),
('Area Bermain', 'area-bermain', 'ri-gamepad-line', 12),
('Reservasi', 'reservasi', 'ri-calendar-check-line', 13),
('Private Room', 'private-room', 'ri-door-closed-line', 14)
on conflict (slug) do nothing;

with author as (select id from public.authors where slug = 'nando-rifky')
insert into public.seo_pages(slug, page_type, title, h1, description, query_config, content, author_id, status, published_at, last_reviewed_at, meta_title, meta_description)
select * from (
  values
  ('cafe-kediri', 'keyword', 'Cafe Kediri', 'Cafe Kediri', 'Kurasi cafe Kediri untuk ngopi, WFC, nugas, ngobrol, date santai, sampai cari suasana baru di area kota dan sekitarnya.', '{"categories":["cafe","coffee-shop"],"sort":"featured_first","limit":4}'::jsonb, '[{"type":"markdown","content":"## Cafe Kediri pilihan\n\nGunakan halaman ini untuk mengatur spotlight cafe di homepage dan listing cafe Kediri."}]'::jsonb, (select id from author), 'published', now(), now(), 'Cafe Kediri: Rekomendasi Cafe, Coffee Shop, dan WFC', 'Cari cafe Kediri? Lihat kurasi cafe, coffee shop, dan tempat WFC dengan info area, fasilitas, harga, dan suasana.'),
  ('cafe-live-music-kediri', 'keyword', 'Cafe Live Music Kediri', 'Cafe Live Music Kediri', 'Pilihan cafe live music di Kediri untuk nongkrong malam, komunitas, dan suasana santai dengan hiburan musik.', '{"categories":["cafe","coffee-shop","resto-cafe"],"use_cases":["live-music","malam"],"facilities":["live-music"],"sort":"featured_first"}'::jsonb, '[{"type":"markdown","content":"## Tips memilih cafe live music\n\nCek jadwal tampil, jam ramai, biaya tambahan, dan apakah perlu reservasi sebelum datang."}]'::jsonb, (select id from author), 'draft', now(), now(), 'Cafe Live Music Kediri: Tempat Nongkrong Musik Malam', 'Cari cafe live music di Kediri? Lihat rekomendasi tempat dengan suasana malam, hiburan musik, area, harga, dan jam buka.'),
  ('cafe-aesthetic-kediri', 'keyword', 'Cafe Aesthetic Kediri', 'Cafe Aesthetic Kediri', 'Kurasi cafe aesthetic di Kediri untuk foto, date santai, nongkrong, dan menikmati ambience yang rapi.', '{"categories":["cafe","coffee-shop"],"use_cases":["aesthetic","date"],"sort":"featured_first"}'::jsonb, '[{"type":"markdown","content":"## Cafe aesthetic di Kediri\n\nPerhatikan pencahayaan, area duduk, jam ramai, dan apakah tempatnya tetap nyaman untuk ngobrol."}]'::jsonb, (select id from author), 'published', now(), now(), 'Cafe Aesthetic Kediri: Tempat Ngopi Instagramable', 'Rekomendasi cafe aesthetic di Kediri untuk foto, date, dan nongkrong dengan suasana nyaman.'),
  ('cafe-instagramable-kediri', 'keyword', 'Cafe Instagramable Kediri', 'Cafe Instagramable Kediri', 'Daftar cafe instagramable di Kediri dengan spot foto, ambience menarik, dan suasana yang cocok untuk konten ringan.', '{"categories":["cafe","coffee-shop"],"use_cases":["instagramable","aesthetic"],"sort":"featured_first"}'::jsonb, '[{"type":"markdown","content":"## Spot foto dan ambience\n\nDatang saat cahaya masih bagus dan cek area outdoor/indoor sebelum menentukan tempat."}]'::jsonb, (select id from author), 'draft', now(), now(), 'Cafe Instagramable Kediri: Spot Foto dan Tempat Ngopi', 'Cari cafe instagramable di Kediri? Lihat pilihan cafe dengan spot foto, suasana aesthetic, dan info lokasi.'),
  ('cafe-wfc-kediri', 'keyword', 'Cafe WFC Kediri', 'Cafe WFC Kediri', 'Cafe WFC di Kediri untuk kerja, laptopan, meeting ringan, dan nugas dengan WiFi serta colokan.', '{"categories":["cafe","coffee-shop"],"use_cases":["wfc"],"facilities":["wifi","colokan"],"sort":"featured_first"}'::jsonb, '[{"type":"markdown","content":"## Cafe WFC yang nyaman\n\nPrioritaskan WiFi stabil, colokan, meja cukup luas, dan noise level yang aman untuk fokus."}]'::jsonb, (select id from author), 'draft', now(), now(), 'Cafe WFC Kediri: Cafe Nyaman untuk Laptopan', 'Rekomendasi cafe WFC di Kediri dengan WiFi, colokan, meja nyaman, dan suasana fokus.'),
  ('cafe-view-alam-kediri', 'keyword', 'Cafe View Alam Kediri', 'Cafe View Alam Kediri', 'Cafe view alam di Kediri untuk nongkrong sore, date santai, outdoor, dan cari suasana lebih lega.', '{"categories":["cafe","coffee-shop","resto-cafe"],"use_cases":["view-alam","date"],"facilities":["view-alam","outdoor"],"sort":"featured_first"}'::jsonb, '[{"type":"markdown","content":"## Cafe dengan view alam\n\nCek cuaca, akses jalan, parkir, dan waktu terbaik datang untuk menikmati pemandangan."}]'::jsonb, (select id from author), 'draft', now(), now(), 'Cafe View Alam Kediri: Outdoor dan Suasana Santai', 'Cari cafe view alam di Kediri? Lihat pilihan cafe outdoor dengan suasana lega untuk sore dan malam.'),
  ('cafe-dekat-kampus-kediri', 'keyword', 'Cafe Dekat Kampus Kediri', 'Cafe Dekat Kampus Kediri', 'Cafe dekat kampus di Kediri untuk mahasiswa, nugas, kerja kelompok, dan nongkrong hemat.', '{"categories":["cafe","coffee-shop","warkop"],"areas":["dekat-kampus","mojoroto"],"use_cases":["nugas","wfc"],"sort":"featured_first"}'::jsonb, '[{"type":"markdown","content":"## Cafe dekat kampus\n\nPilih tempat dengan WiFi, colokan, harga masuk akal, dan jarak yang mudah dari area kos/kampus."}]'::jsonb, (select id from author), 'published', now(), now(), 'Cafe Dekat Kampus Kediri: Nugas dan Nongkrong', 'Rekomendasi cafe dekat kampus Kediri untuk nugas, WFC, kerja kelompok, dan nongkrong mahasiswa.'),
  ('cafe-kids-friendly-kediri', 'keyword', 'Cafe Kids Friendly Kediri', 'Cafe Kids Friendly di Kediri', 'Cafe kids friendly di Kediri untuk keluarga yang butuh tempat nyaman, area aman, dan opsi makan santai.', '{"categories":["cafe","resto-cafe"],"use_cases":["kids-friendly","keluarga"],"facilities":["kids-friendly","area-bermain"],"sort":"featured_first"}'::jsonb, '[{"type":"markdown","content":"## Cafe ramah anak\n\nCek area bermain, keamanan tempat duduk, parkir, dan menu yang cocok untuk keluarga."}]'::jsonb, (select id from author), 'draft', now(), now(), 'Cafe Kids Friendly Kediri: Tempat Nyaman untuk Keluarga', 'Cari cafe kids friendly di Kediri? Lihat rekomendasi cafe keluarga dengan fasilitas ramah anak.'),
  ('cafe-rating-tinggi-kediri', 'keyword', 'Cafe Rating Tinggi Kediri', 'Cafe Rating Tinggi di Kediri yang Nyaman', 'Kurasi cafe rating tinggi di Kediri yang nyaman untuk ngopi, nongkrong, WFC, dan bertemu teman.', '{"categories":["cafe","coffee-shop"],"min_rating":4.3,"sort":"rating_desc"}'::jsonb, '[{"type":"markdown","content":"## Rating tinggi bukan satu-satunya patokan\n\nTetap cek fasilitas, jam buka, harga, dan suasana karena rating bisa berbeda dari kebutuhan datang."}]'::jsonb, (select id from author), 'published', now(), now(), 'Cafe Rating Tinggi Kediri yang Nyaman', 'Lihat pilihan cafe rating tinggi di Kediri dengan suasana nyaman, info fasilitas, area, dan harga.'),
  ('cafe-keluarga-kediri', 'keyword', 'Cafe Keluarga Kediri', 'Cafe Keluarga di Kediri', 'Cafe keluarga di Kediri untuk makan santai, ngobrol, membawa anak, dan kumpul keluarga kecil.', '{"categories":["cafe","resto-cafe"],"use_cases":["keluarga"],"facilities":["parkir-motor","mushola"],"sort":"featured_first"}'::jsonb, '[{"type":"markdown","content":"## Cafe untuk keluarga\n\nUtamakan tempat duduk nyaman, parkir mudah, mushola, dan pilihan menu yang aman untuk banyak usia."}]'::jsonb, (select id from author), 'published', now(), now(), 'Cafe Keluarga Kediri: Tempat Nyaman untuk Kumpul', 'Rekomendasi cafe keluarga di Kediri dengan suasana nyaman, fasilitas, dan akses mudah.'),
  ('cafe-bukber-kediri', 'keyword', 'Cafe Bukber Kediri', 'Cafe Bukber di Kediri', 'Cafe untuk bukber di Kediri yang cocok untuk keluarga, komunitas, teman kantor, atau reunian kecil.', '{"categories":["cafe","resto-cafe"],"use_cases":["bukber","keluarga"],"facilities":["reservasi","mushola"],"sort":"featured_first"}'::jsonb, '[{"type":"markdown","content":"## Tips memilih tempat bukber\n\nCek kapasitas, opsi reservasi, mushola, parkir, dan jam ramai sebelum menentukan tempat."}]'::jsonb, (select id from author), 'draft', now(), now(), 'Cafe Bukber Kediri: Tempat Buka Bersama Nyaman', 'Cari cafe bukber di Kediri? Lihat pilihan tempat untuk buka bersama dengan reservasi, mushola, dan area nyaman.'),
  ('cafe-24-jam-kediri', 'keyword', 'Cafe 24 Jam Kediri', 'Cafe 24 Jam Kediri', 'Tempat ngopi dan nongkrong 24 jam di Kediri untuk malam hari, nugas, atau sekadar cari suasana.', '{"facilities":["24-jam"],"sort":"featured_first"}'::jsonb, '[{"type":"markdown","content":"## Cafe 24 jam\n\nPastikan data jam buka dicek berkala karena operasional cafe malam bisa berubah."}]'::jsonb, (select id from author), 'published', now(), now(), 'Cafe 24 Jam Kediri: Tempat Ngopi Malam', 'Rekomendasi cafe 24 jam di Kediri untuk malam hari, nugas, nongkrong, dan cari tempat buka lama.'),
  ('cafe-buat-nugas-kediri', 'keyword', 'Cafe Buat Nugas Kediri', 'Cafe untuk Nugas di Kediri', 'Pilihan cafe dan warkop di Kediri yang cocok untuk nugas, skripsian, dan laptopan.', '{"use_cases":["nugas"],"facilities":["wifi"],"sort":"featured_first"}'::jsonb, '[{"type":"markdown","content":"## Cafe buat nugas\n\nCari WiFi stabil, colokan, meja cukup, cahaya nyaman, dan suasana yang tidak terlalu bising."}]'::jsonb, (select id from author), 'published', now(), now(), 'Cafe untuk Nugas di Kediri: WiFi dan Colokan', 'Rekomendasi cafe buat nugas di Kediri dengan WiFi, colokan, meja nyaman, dan suasana fokus.'),
  ('cafe-murah-kediri', 'keyword', 'Cafe Murah Kediri', 'Rekomendasi Cafe Murah di Kediri', 'Rekomendasi tempat ngopi murah di Kediri untuk mahasiswa, nugas, dan nongkrong santai.', '{"price_label":["murah"],"sort":"featured_first"}'::jsonb, '[{"type":"markdown","content":"## Cafe murah di Kediri\n\nBandingkan harga, jam buka, dan fasilitas dasar seperti WiFi atau parkir sebelum datang."}]'::jsonb, (select id from author), 'published', now(), now(), 'Cafe Murah Kediri: Rekomendasi Tempat Ngopi Hemat', 'Cari cafe murah di Kediri? Lihat rekomendasi tempat ngopi hemat untuk mahasiswa, nugas, dan nongkrong.'),
  ('cafe-dekat-stasiun-kediri', 'keyword', 'Cafe Dekat Stasiun Kediri', 'Cafe Dekat Stasiun Kediri', 'Tempat ngopi dekat Stasiun Kediri yang cocok untuk transit, janjian, atau menunggu jadwal kereta.', '{"areas":["dekat-stasiun-kediri","kota-kediri"],"categories":["cafe","coffee-shop","warkop"],"sort":"featured_first"}'::jsonb, '[{"type":"markdown","content":"## Cafe dekat stasiun\n\nPerhatikan jarak, akses jalan kaki, parkir, dan jam buka kalau datang sebelum atau sesudah perjalanan."}]'::jsonb, (select id from author), 'published', now(), now(), 'Cafe Dekat Stasiun Kediri: Transit dan Janjian', 'Rekomendasi cafe dekat Stasiun Kediri untuk transit, menunggu kereta, atau janjian di pusat kota.'),
  ('tempat-ngopi-kediri', 'keyword', 'Tempat Ngopi Kediri', 'Tempat Ngopi Kediri', 'Kumpulan tempat ngopi di Kediri, mulai dari cafe, coffee shop, sampai warkop yang cocok untuk nongkrong santai.', '{"categories":["cafe","coffee-shop","warkop"],"sort":"featured_first"}'::jsonb, '[{"type":"markdown","content":"## Catatan kurasi\n\nKonten bawah listing bisa kamu isi manual sesuai strategi SEO."}]'::jsonb, (select id from author), 'published', now(), now(), 'Tempat Ngopi Kediri: Cafe, Coffee Shop, dan Warkop Pilihan', 'Cari tempat ngopi di Kediri? Lihat rekomendasi cafe, coffee shop, dan warkop dengan info area, fasilitas, harga, dan jam buka.'),
  ('wfc-kediri', 'keyword', 'WFC Kediri', 'WFC Kediri', 'Cari tempat WFC di Kediri? Temukan cafe yang nyaman untuk kerja, nugas, laptopan, WiFi, dan colokan.', '{"use_cases":["wfc"],"facilities":["wifi","colokan"],"sort":"featured_first"}'::jsonb, '[{"type":"markdown","content":"## Cara memilih tempat WFC\n\nCek WiFi, colokan, ukuran meja, noise, dan apakah tempatnya nyaman untuk duduk lama."}]'::jsonb, (select id from author), 'published', now(), now(), 'WFC Kediri: Cafe Nyaman untuk Kerja, Nugas, dan Laptopan', 'Rekomendasi tempat WFC di Kediri dengan WiFi, colokan, area nyaman, dan info jam buka.')
) as v(slug, page_type, title, h1, description, query_config, content, author_id, status, published_at, last_reviewed_at, meta_title, meta_description)
on conflict (slug) do nothing;
