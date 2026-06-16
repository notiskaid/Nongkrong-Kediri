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
('Dekat Stasiun Kediri', 'dekat-stasiun-kediri', 'Spot ngopi yang enak untuk transit atau janjian dekat stasiun.', 4)
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
('Keluarga', 'keluarga', 'ri-home-heart-line', 6)
on conflict (slug) do nothing;

insert into public.facilities(name, slug, icon, sort_order) values
('WiFi', 'wifi', 'ri-wifi-line', 1),
('Colokan', 'colokan', 'ri-plug-line', 2),
('Indoor', 'indoor', 'ri-building-line', 3),
('Outdoor', 'outdoor', 'ri-leaf-line', 4),
('AC', 'ac', 'ri-windy-line', 5),
('Parkir Motor', 'parkir-motor', 'ri-motorbike-line', 6),
('Mushola', 'mushola', 'ri-community-line', 7),
('24 Jam', '24-jam', 'ri-time-line', 8)
on conflict (slug) do nothing;

with author as (select id from public.authors where slug = 'nando-rifky')
insert into public.seo_pages(slug, page_type, title, h1, description, query_config, content, author_id, status, published_at, last_reviewed_at, meta_title, meta_description)
select * from (
  values
  ('tempat-ngopi-kediri', 'keyword', 'Tempat Ngopi Kediri', 'Tempat Ngopi Kediri', 'Kumpulan tempat ngopi di Kediri, mulai dari cafe, coffee shop, sampai warkop yang cocok untuk nongkrong santai.', '{"categories":["cafe","coffee-shop","warkop"],"sort":"featured_first"}'::jsonb, '[{"type":"markdown","content":"## Catatan kurasi\n\nKonten bawah listing bisa kamu isi manual sesuai strategi SEO."}]'::jsonb, (select id from author), 'published', now(), now(), 'Tempat Ngopi Kediri: Cafe, Coffee Shop, dan Warkop Pilihan', 'Cari tempat ngopi di Kediri? Lihat rekomendasi cafe, coffee shop, dan warkop dengan info area, fasilitas, harga, dan jam buka.'),
  ('wfc-kediri', 'keyword', 'WFC Kediri', 'WFC Kediri', 'Cari tempat WFC di Kediri? Temukan cafe yang nyaman untuk kerja, nugas, laptopan, WiFi, dan colokan.', '{"use_cases":["wfc"],"facilities":["wifi","colokan"],"sort":"featured_first"}'::jsonb, '[{"type":"markdown","content":"## Cara memilih tempat WFC\n\nCek WiFi, colokan, ukuran meja, noise, dan apakah tempatnya nyaman untuk duduk lama."}]'::jsonb, (select id from author), 'published', now(), now(), 'WFC Kediri: Cafe Nyaman untuk Kerja, Nugas, dan Laptopan', 'Rekomendasi tempat WFC di Kediri dengan WiFi, colokan, area nyaman, dan info jam buka.')
) as v(slug, page_type, title, h1, description, query_config, content, author_id, status, published_at, last_reviewed_at, meta_title, meta_description)
on conflict (slug) do nothing;
