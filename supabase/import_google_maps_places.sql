-- Draft import generated from docs/google-maps-data-1781714377780.csv
-- Review in admin before publishing. Existing slugs are left untouched.
begin;

with source_places as (
  select * from (values
    ('chocolata-cafe-kediri', 'Chocolata Cafe Kediri', 'Chocolata Cafe Kediri masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.2 dari 1151 ulasan. Kisaran harga awal: Rp 1–25.000.', 'Chocolata Cafe Kediri adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Chocolata+Cafe+Kediri/data=!4m7!3m6!1s0x2e78576d3403aa07:0xad7c46ba29f96115!8m2!3d-7.8208349!4d112.024842!16s%2Fg%2F11g6mlvrmy!19sChIJB6oDNG1XeC4RFWH5KbpGfK0', null, null, null, 'murah', 4.2, 1151, null, 10, 'draft', '2026-06-17T17:55:55.510Z'),
    ('mata-hati-cafe-kediri', 'Mata Hati Cafe - Kediri', 'Mata Hati Cafe - Kediri masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.6 dari 1361 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'Mata Hati Cafe - Kediri adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Mata+Hati+Cafe+-+Kediri/data=!4m7!3m6!1s0x2e78576608a3e335:0x367b1633648c7119!8m2!3d-7.8029471!4d112.0032112!16s%2Fg%2F11sgr2kmls!19sChIJNeOjCGZXeC4RGXGMZDMWezY', null, null, null, 'sedang', 4.6, 1361, null, 20, 'draft', '2026-06-17T17:55:55.512Z'),
    ('alinea-kediri', 'Alinea Kediri', 'Alinea Kediri masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.6 dari 2041 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'Alinea Kediri adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Alinea+Kediri/data=!4m7!3m6!1s0x2e78572f8ca7934b:0xd7fe62fb6dd85f4e!8m2!3d-7.8221321!4d112.0167922!16s%2Fg%2F11j4yvtfwf!19sChIJS5OnjC9XeC4RTl_Ybfti_tc', null, null, null, 'sedang', 4.6, 2041, null, 30, 'draft', '2026-06-17T17:55:55.512Z'),
    ('tomoro-coffee-joyoboyo-kediri', 'Tomoro Coffee - Joyoboyo Kediri', 'Tomoro Coffee - Joyoboyo Kediri masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.7 dari 1108 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'Tomoro Coffee - Joyoboyo Kediri adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Tomoro+Coffee+-+Joyoboyo+Kediri/data=!4m7!3m6!1s0x2e7857eb46c1c7a7:0x2a68dc63e0f71570!8m2!3d-7.8216215!4d112.0185921!16s%2Fg%2F11vsslmq1y!19sChIJp8fBRutXeC4RcBX34GPcaCo', null, null, null, 'sedang', 4.7, 1108, null, 40, 'draft', '2026-06-17T17:55:55.512Z'),
    ('wuffyspace-kediri', 'Wuffyspace Kediri', 'Wuffyspace Kediri masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 5.0 dari 607 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'Wuffyspace Kediri adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Wuffyspace+Kediri/data=!4m7!3m6!1s0x2e785721b78d3ddb:0xab2b669ad7e6244c!8m2!3d-7.8223087!4d111.987355!16s%2Fg%2F11vd9pyvfb!19sChIJ2z2NtyFXeC4RTCTm15pmK6s', null, null, null, 'sedang', 5, 607, null, 50, 'draft', '2026-06-17T17:55:55.512Z'),
    ('lunacia', 'Lunacia', 'Lunacia masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.5 dari 289 ulasan. Kisaran harga awal: Rp 1–25.000.', 'Lunacia adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Lunacia/data=!4m7!3m6!1s0x2e78579399336d31:0x594efdd4d6ade5d7!8m2!3d-7.8222991!4d111.9872683!16s%2Fg%2F11q4bqn9yc!19sChIJMW0zmZNXeC4R1-Wt1tT9Tlk', null, null, null, 'murah', 4.5, 289, null, 60, 'draft', '2026-06-17T17:55:55.512Z'),
    ('bedjo-coffee-3', 'Bedjo Coffee 3', 'Bedjo Coffee 3 masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.6 dari 492 ulasan. Kisaran harga awal: Rp 1–25.000.', 'Bedjo Coffee 3 adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Bedjo+Coffee+3/data=!4m7!3m6!1s0x2e7857d01b493a5f:0xf548999c9bdfff49!8m2!3d-7.8315383!4d111.9940539!16s%2Fg%2F11m_x_4r2p!19sChIJXzpJG9BXeC4RSf_fm5yZSPU', null, null, null, 'murah', 4.6, 492, null, 70, 'draft', '2026-06-17T17:55:55.512Z'),
    ('texture-coffee-kediri', 'Texture Coffee Kediri', 'Texture Coffee Kediri masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.1 dari 271 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'Texture Coffee Kediri adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Texture+Coffee+Kediri/data=!4m7!3m6!1s0x2e7857e2806d0f47:0x4de5b24b51691b4e!8m2!3d-7.8198536!4d112.0120063!16s%2Fg%2F11y4lr2d47!19sChIJRw9tgOJXeC4RThtpUUuy5U0', null, null, null, 'sedang', 4.1, 271, null, 80, 'draft', '2026-06-17T17:55:55.512Z'),
    ('kuvy-coffee-eatery', 'KUVY Coffee & Eatery', 'KUVY Coffee & Eatery masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.5 dari 425 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'KUVY Coffee & Eatery adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/KUVY+Coffee+%26+Eatery/data=!4m7!3m6!1s0x2e7857002cbf8c49:0x3e9d6cdfec88ac77!8m2!3d-7.8193598!4d112.0180479!16s%2Fg%2F11xm19vlvm!19sChIJSYy_LABXeC4Rd6yI7N9snT4', null, null, null, 'sedang', 4.5, 425, null, 90, 'draft', '2026-06-17T17:55:55.512Z'),
    ('tomoro-coffee-sekartaji', 'TOMORO COFFEE - SEKARTAJI', 'TOMORO COFFEE - SEKARTAJI masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.7 dari 855 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'TOMORO COFFEE - SEKARTAJI adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/TOMORO+COFFEE+-+SEKARTAJI/data=!4m7!3m6!1s0x2e7857d0e02ec695:0xbabc132169f33b87!8m2!3d-7.8100142!4d112.004509!16s%2Fg%2F11vwrmq2tz!19sChIJlcYu4NBXeC4RhzvzaSETvLo', null, null, null, 'sedang', 4.7, 855, null, 100, 'draft', '2026-06-17T17:55:55.512Z'),
    ('lucy-senja-cozyspace', 'LUCY senja & cozyspace', 'LUCY senja & cozyspace masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.5 dari 241 ulasan. Kisaran harga awal: Rp 1–25.000.', 'LUCY senja & cozyspace adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/LUCY+senja+%26+cozyspace/data=!4m7!3m6!1s0x2e7859596df5f4df:0x37eed9d84fe2b24c!8m2!3d-7.8153545!4d112.0317134!16s%2Fg%2F11ry4t1wz3!19sChIJ3_T1bVlZeC4RTLLiT9jZ7jc', null, null, null, 'murah', 4.5, 241, null, 110, 'draft', '2026-06-17T17:55:55.512Z'),
    ('toneeto-s-kitchen-coffee', 'Toneeto''s - Kitchen & Coffee', 'Toneeto''s - Kitchen & Coffee masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.6 dari 1109 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'Toneeto''s - Kitchen & Coffee adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Toneeto%27s+-+Kitchen+%26+Coffee/data=!4m7!3m6!1s0x2e7857704bec81bf:0x5901710cfeae65ee!8m2!3d-7.824276!4d112.012289!16s%2Fg%2F11j93tdd5c!19sChIJv4HsS3BXeC4R7mWu_gxxAVk', null, null, null, 'sedang', 4.6, 1109, null, 120, 'draft', '2026-06-17T17:55:55.512Z'),
    ('noa-coffee-eatery', 'NOA coffee & Eatery', 'NOA coffee & Eatery masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.5 dari 110 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'NOA coffee & Eatery adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/NOA+coffee+%26+Eatery/data=!4m7!3m6!1s0x2e7857004c123575:0x756b38cf13580cf0!8m2!3d-7.8376115!4d111.9956679!16s%2Fg%2F11wr63_f1k!19sChIJdTUSTABXeC4R8AxYE884a3U', null, null, null, 'sedang', 4.5, 110, null, 130, 'draft', '2026-06-17T17:55:55.512Z'),
    ('billions-coffee-kediri', 'Billions Coffee Kediri', 'Billions Coffee Kediri masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.8 dari 642 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'Billions Coffee Kediri adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Billions+Coffee+Kediri/data=!4m7!3m6!1s0x2e7857f45bf89e15:0xa8025e55980fc5b8!8m2!3d-7.8117606!4d112.0160778!16s%2Fg%2F11vwjw9fsg!19sChIJFZ74W_RXeC4RuMUPmFVeAqg', null, null, null, 'sedang', 4.8, 642, null, 140, 'draft', '2026-06-17T17:55:55.512Z'),
    ('in-coffee', 'In Coffee', 'In Coffee masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 5.0 dari 26 ulasan. Kisaran harga awal: $.', 'In Coffee adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/In+Coffee/data=!4m7!3m6!1s0x2e78578aa4c3800d:0xe297c95c81e51770!8m2!3d-7.8239541!4d111.9865938!16s%2Fg%2F11gy1l660y!19sChIJDYDDpIpXeC4RcBflgVzJl-I', null, null, null, null, 5, 26, null, 150, 'draft', '2026-06-17T17:55:55.512Z'),
    ('otw-coffeeshop', 'Otw Coffeeshop', 'Otw Coffeeshop masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.3 dari 457 ulasan. Kisaran harga awal: Rp 1–25.000.', 'Otw Coffeeshop adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Otw+Coffeeshop/data=!4m7!3m6!1s0x2e78576c1d11ab2b:0x9eee6a8716f453a0!8m2!3d-7.8176133!4d112.0292421!16s%2Fg%2F11c37hh2k9!19sChIJK6sRHWxXeC4RoFP0Fodq7p4', null, null, null, 'murah', 4.3, 457, null, 160, 'draft', '2026-06-17T17:55:55.512Z'),
    ('bluerry-coffee-and-eatery', 'Bluerry Coffee and Eatery', 'Bluerry Coffee and Eatery masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.5 dari 523 ulasan.', 'Bluerry Coffee and Eatery adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Bluerry+Coffee+and+Eatery/data=!4m7!3m6!1s0x2e78575db74857df:0xc44a5ba6228a3d6e!8m2!3d-7.8171304!4d112.0158881!16s%2Fg%2F11vd8v2m7h!19sChIJ31dIt11XeC4Rbj2KIqZbSsQ', null, null, null, null, 4.5, 523, null, 170, 'draft', '2026-06-17T17:55:55.512Z'),
    ('fore-coffee-hayam-wuruk-kediri', 'Fore Coffee - Hayam Wuruk, Kediri', 'Fore Coffee - Hayam Wuruk, Kediri masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.6 dari 588 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'Fore Coffee - Hayam Wuruk, Kediri adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Fore+Coffee+-+Hayam+Wuruk,+Kediri/data=!4m7!3m6!1s0x2e7857b0928d389d:0x945cbbd312e76e20!8m2!3d-7.8152556!4d112.0170393!16s%2Fg%2F11vc6_91fp!19sChIJnTiNkrBXeC4RIG7nEtO7XJQ', null, null, null, 'sedang', 4.6, 588, null, 180, 'draft', '2026-06-17T17:55:55.512Z'),
    ('bern-coffee-house', 'Bern Coffee House', 'Bern Coffee House masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.9 dari 292 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'Bern Coffee House adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Bern+Coffee+House/data=!4m7!3m6!1s0x2e7857001b527fb1:0x242eba049959ef6c!8m2!3d-7.804448!4d112.0087557!16s%2Fg%2F11wg831hcp!19sChIJsX9SGwBXeC4RbO9ZmQS6LiQ', null, null, null, 'sedang', 4.9, 292, null, 190, 'draft', '2026-06-17T17:55:55.512Z'),
    ('san-s-coffee-space', 'San''s Coffee Space', 'San''s Coffee Space masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.6 dari 117 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'San''s Coffee Space adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/San%27s+Coffee+Space/data=!4m7!3m6!1s0x2e7857002e3a57c3:0x98a0530efb7722b3!8m2!3d-7.8212831!4d112.0245698!16s%2Fg%2F11yhb3fk42!19sChIJw1c6LgBXeC4RsyJ3-w5ToJg', null, null, null, 'sedang', 4.6, 117, null, 200, 'draft', '2026-06-17T17:55:55.512Z'),
    ('suatukopi-coffee-and-space', 'SUATUKOPI Coffee and Space', 'SUATUKOPI Coffee and Space masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.5 dari 196 ulasan. Kisaran harga awal: Rp 1–25.000.', 'SUATUKOPI Coffee and Space adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/SUATUKOPI+Coffee+and+Space/data=!4m7!3m6!1s0x2e7857d3efa1272f:0xf0d586c2f91c9237!8m2!3d-7.8153913!4d112.0254129!16s%2Fg%2F11kblmqdw4!19sChIJLyeh79NXeC4RN5Ic-cKG1fA', null, null, null, 'murah', 4.5, 196, null, 210, 'draft', '2026-06-17T17:55:55.512Z'),
    ('tempat-bercakap-kopi-kediri', 'TEMPAT BERCAKAP KOPI KEDIRI', 'TEMPAT BERCAKAP KOPI KEDIRI masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.7 dari 2529 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'TEMPAT BERCAKAP KOPI KEDIRI adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/TEMPAT+BERCAKAP+KOPI+KEDIRI/data=!4m7!3m6!1s0x2e7857d4d75c2d39:0x55233fc3cb4b8a22!8m2!3d-7.8123768!4d112.0383925!16s%2Fg%2F11js277yrj!19sChIJOS1c19RXeC4RIopLy8M_I1U', null, null, null, 'sedang', 4.7, 2529, null, 220, 'draft', '2026-06-17T17:55:55.512Z'),
    ('republik-dendy-cafe-kediri', 'REPUBLIK DENDY CAFE KEDIRI', 'REPUBLIK DENDY CAFE KEDIRI masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.6 dari 1497 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'REPUBLIK DENDY CAFE KEDIRI adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/REPUBLIK+DENDY+CAFE+KEDIRI/data=!4m7!3m6!1s0x2e78571d69c67fa9:0x60a3e8229cab45dc!8m2!3d-7.8139898!4d111.9667383!16s%2Fg%2F11l2cp9hm3!19sChIJqX_GaR1XeC4R3EWrnCLoo2A', null, null, null, 'sedang', 4.6, 1497, null, 230, 'draft', '2026-06-17T17:55:55.512Z'),
    ('kocokin-coffeeshop-kediri', 'Kocokin Coffeeshop Kediri', 'Kocokin Coffeeshop Kediri masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.4 dari 894 ulasan. Kisaran harga awal: Rp 1–25.000.', 'Kocokin Coffeeshop Kediri adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Kocokin+Coffeeshop+Kediri/data=!4m7!3m6!1s0x2e78574f0bee00df:0x8f9609f7cf34a895!8m2!3d-7.8301123!4d112.0389583!16s%2Fg%2F11hqxj6dvd!19sChIJ3wDuC09XeC4Rlag0z_cJlo8', null, null, null, 'murah', 4.4, 894, null, 240, 'draft', '2026-06-17T17:55:55.512Z'),
    ('sk-coffee-lab', 'SK Coffee Lab.', 'SK Coffee Lab. masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.6 dari 1331 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'SK Coffee Lab. adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/SK+Coffee+Lab./data=!4m7!3m6!1s0x2e78576b42bb2add:0x1f5a767fc44436ca!8m2!3d-7.8162919!4d112.0251726!16s%2Fg%2F11f3tvrpt7!19sChIJ3Sq7QmtXeC4RyjZExH92Wh8', null, null, null, 'sedang', 4.6, 1331, null, 250, 'draft', '2026-06-17T17:55:55.512Z'),
    ('estar-cafe-eatery', 'ESTAR Cafe & Eatery', 'ESTAR Cafe & Eatery masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.5 dari 114 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'ESTAR Cafe & Eatery adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/ESTAR+Cafe+%26+Eatery/data=!4m7!3m6!1s0x2e7857c291e1c8af:0x432aa46b07d36cf7!8m2!3d-7.8084502!4d112.0013465!16s%2Fg%2F11shcz122y!19sChIJr8jhkcJXeC4R92zTB2ukKkM', null, null, null, 'sedang', 4.5, 114, null, 260, 'draft', '2026-06-17T17:55:55.512Z'),
    ('societe-cafe-kediri', 'Societe Cafe Kediri', 'Societe Cafe Kediri masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.7 dari 594 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'Societe Cafe Kediri adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Societe+Cafe+Kediri/data=!4m7!3m6!1s0x2e7857146e986485:0xac922071a2c930f3!8m2!3d-7.8169584!4d112.0197906!16s%2Fg%2F11c6qb2cwc!19sChIJhWSYbhRXeC4R8zDJonEgkqw', null, null, null, 'sedang', 4.7, 594, null, 270, 'draft', '2026-06-17T17:55:55.512Z'),
    ('tropis-coffee', 'Tropis Coffee', 'Tropis Coffee masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 3.9 dari 186 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'Tropis Coffee adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Tropis+Coffee/data=!4m7!3m6!1s0x2e78570010520e29:0x1bfa000587c5948a!8m2!3d-7.8190061!4d112.0106658!16s%2Fg%2F11mcb9d7mh!19sChIJKQ5SEABXeC4RipTFhwUA-hs', null, null, null, 'sedang', 3.9, 186, null, 280, 'draft', '2026-06-17T17:55:55.512Z'),
    ('parkir-depan-coffee-eatery', 'Parkir Depan Coffee & Eatery', 'Parkir Depan Coffee & Eatery masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.6 dari 531 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'Parkir Depan Coffee & Eatery adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Parkir+Depan+Coffee+%26+Eatery/data=!4m7!3m6!1s0x2e78576e6d970409:0x56ff0cf2e8c6f0b8!8m2!3d-7.820209!4d112.0231246!16s%2Fg%2F11r972k939!19sChIJCQSXbW5XeC4RuPDG6PIM_1Y', null, null, null, 'sedang', 4.6, 531, null, 290, 'draft', '2026-06-17T17:55:55.512Z'),
    ('tebu-cafe-temu-budaya-kediri', 'TEBU - Cafe Temu Budaya Kediri', 'TEBU - Cafe Temu Budaya Kediri masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.0 dari 490 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'TEBU - Cafe Temu Budaya Kediri adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/TEBU+-+Cafe+Temu+Budaya+Kediri/data=!4m7!3m6!1s0x2e7857004d0ac6ff:0x5ea064ab6da8e5f0!8m2!3d-7.8170805!4d112.0138707!16s%2Fg%2F11vlz030gs!19sChIJ_8YKTQBXeC4R8OWobatkoF4', null, null, null, 'sedang', 4, 490, null, 300, 'draft', '2026-06-17T17:55:55.512Z'),
    ('tell-kopi', 'TELL KOPI', 'TELL KOPI masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.4 dari 1286 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'TELL KOPI adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/TELL+KOPI/data=!4m7!3m6!1s0x2e7857e25c0919ff:0x3a98c7a3eaa95881!8m2!3d-7.8298448!4d112.0382753!16s%2Fg%2F11fksyf8t5!19sChIJ_xkJXOJXeC4RgVip6qPHmDo', null, null, null, 'sedang', 4.4, 1286, null, 310, 'draft', '2026-06-17T17:55:55.512Z'),
    ('kopi-calf-to-go-kediri', 'Kopi Calf To Go Kediri', 'Kopi Calf To Go Kediri masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.8 dari 941 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'Kopi Calf To Go Kediri adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Kopi+Calf+To+Go+Kediri/data=!4m7!3m6!1s0x2e7857005600f767:0x15d8358415ea3899!8m2!3d-7.8150358!4d112.0178122!16s%2Fg%2F11xrc70p9h!19sChIJZ_cAVgBXeC4RmTjqFYQ12BU', null, null, null, 'sedang', 4.8, 941, null, 320, 'draft', '2026-06-17T17:55:55.512Z'),
    ('okui-es-kopi-dan-temannya', 'Okui Es Kopi dan Temannya', 'Okui Es Kopi dan Temannya masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.5 dari 1263 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'Okui Es Kopi dan Temannya adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Okui+Es+Kopi+dan+Temannya/data=!4m7!3m6!1s0x2e78576b59e95a4d:0xc5fca40527937d9!8m2!3d-7.8170254!4d112.0248372!16s%2Fg%2F11gg9f4bhh!19sChIJTVrpWWtXeC4R2Td5UkDKXww', null, null, null, 'sedang', 4.5, 1263, null, 330, 'draft', '2026-06-17T17:55:55.512Z'),
    ('laoban-kediri', 'Laoban kediri', 'Laoban kediri masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.7 dari 514 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'Laoban kediri adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Laoban+kediri/data=!4m7!3m6!1s0x2e785700564efc11:0x61d576780053702a!8m2!3d-7.8214169!4d112.0273827!16s%2Fg%2F11v_5h83wm!19sChIJEfxOVgBXeC4RKnBTAHh21WE', null, null, null, 'sedang', 4.7, 514, null, 340, 'draft', '2026-06-17T17:55:55.512Z'),
    ('91-traditional-coffee', '91 traditional coffee', '91 traditional coffee masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.8 dari 51 ulasan.', '91 traditional coffee adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/91+traditional+coffee/data=!4m7!3m6!1s0x2e785704764af16b:0x21ba48b13ac8d337!8m2!3d-7.8240422!4d111.9844724!16s%2Fg%2F11jmzcwt00!19sChIJa_FKdgRXeC4RN9PIOrFIuiE', null, null, null, null, 4.8, 51, null, 350, 'draft', '2026-06-17T17:55:55.512Z'),
    ('epilogi-coffee', 'Epilogi Coffee', 'Epilogi Coffee masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.6 dari 164 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'Epilogi Coffee adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Epilogi+Coffee/data=!4m7!3m6!1s0x2e785738a1498d63:0x3382597396606819!8m2!3d-7.8144168!4d112.020778!16s%2Fg%2F11xvclyk9c!19sChIJY41JoThXeC4RGWhglnNZgjM', null, null, null, 'sedang', 4.6, 164, null, 360, 'draft', '2026-06-17T17:55:55.512Z'),
    ('cafe-republic', 'Cafe Republic', 'Cafe Republic masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.3 dari 226 ulasan. Kisaran harga awal: Rp 1–25.000.', 'Cafe Republic adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Cafe+Republic/data=!4m7!3m6!1s0x2e7856ec8bc6f76b:0x2bac971d54f2c77b!8m2!3d-7.8205604!4d111.9788179!16s%2Fg%2F11c5hz8wfk!19sChIJa_fGi-xWeC4Re8fyVB2XrCs', null, null, null, 'murah', 4.3, 226, null, 370, 'draft', '2026-06-17T17:55:55.512Z'),
    ('ama-cafe-and-resto', 'AMA cafe and resto', 'AMA cafe and resto masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.3 dari 382 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'AMA cafe and resto adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/AMA+cafe+and+resto/data=!4m7!3m6!1s0x2e785737f38bb00f:0x4464013f9187c216!8m2!3d-7.8129359!4d112.0247936!16s%2Fg%2F11rfc5nsw1!19sChIJD7CL8zdXeC4RFsKHkT8BZEQ', null, null, null, 'sedang', 4.3, 382, null, 380, 'draft', '2026-06-17T17:55:55.512Z'),
    ('asturo', 'Asturo', 'Asturo masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.7 dari 391 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'Asturo adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Asturo/data=!4m7!3m6!1s0x2e78572e696c1a7b:0xe6acb1bc93e3b1ca!8m2!3d-7.8475831!4d112.0346541!16s%2Fg%2F11spfdhblp!19sChIJexpsaS5XeC4RyrHjk7yxrOY', null, null, null, 'sedang', 4.7, 391, null, 390, 'draft', '2026-06-17T17:55:55.512Z'),
    ('tilik-sawah', 'Tilik Sawah', 'Tilik Sawah masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.3 dari 409 ulasan. Kisaran harga awal: Rp 1–25.000.', 'Tilik Sawah adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Tilik+Sawah/data=!4m7!3m6!1s0x2e7857a179ed81b5:0x802bf546dc39388e!8m2!3d-7.8122442!4d111.995781!16s%2Fg%2F11lfqy83yt!19sChIJtYHteaFXeC4Rjjg53Eb1K4A', null, null, null, 'murah', 4.3, 409, null, 400, 'draft', '2026-06-17T17:55:55.512Z'),
    ('rocabana-ice-coffee-donuts', 'ROCABANA - ice . coffee . donuts', 'ROCABANA - ice . coffee . donuts masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.5 dari 1602 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'ROCABANA - ice . coffee . donuts adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/ROCABANA+-+ice+.+coffee+.+donuts/data=!4m7!3m6!1s0x2e7857a35f75be8f:0x20d5ecff3271d593!8m2!3d-7.8127303!4d112.0207188!16s%2Fg%2F11j1jz5xdr!19sChIJj751X6NXeC4Rk9VxMv_s1SA', null, null, null, 'sedang', 4.5, 1602, null, 410, 'draft', '2026-06-17T17:55:55.512Z'),
    ('cafe-150', 'Cafe 150°', 'Cafe 150° masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.8 dari 34 ulasan. Kisaran harga awal: Rp 1–25.000.', 'Cafe 150° adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Cafe+150%C2%B0/data=!4m7!3m6!1s0x2e7857d590e1d159:0x6a5fece84d01319f!8m2!3d-7.8221874!4d112.005777!16s%2Fg%2F11qzxbmbv6!19sChIJWdHhkNVXeC4RnzEBTejsX2o', null, null, null, 'murah', 4.8, 34, null, 420, 'draft', '2026-06-17T17:55:55.512Z'),
    ('cafe-balok-kayu', 'Cafe Balok Kayu', 'Cafe Balok Kayu masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 3.8 dari 243 ulasan. Kisaran harga awal: Rp 1–25.000.', 'Cafe Balok Kayu adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Cafe+Balok+Kayu/data=!4m7!3m6!1s0x2e7857ed1bb7ab01:0xb15f35990fd35802!8m2!3d-7.8286386!4d111.9963752!16s%2Fg%2F11kpvtxj4n!19sChIJAau3G-1XeC4RAljTD5k1X7E', null, null, null, 'murah', 3.8, 243, null, 430, 'draft', '2026-06-17T17:55:55.512Z'),
    ('read-cafe-kediri', 'Read Cafe Kediri', 'Read Cafe Kediri masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.7 dari 99 ulasan.', 'Read Cafe Kediri adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Read+Cafe+Kediri/data=!4m7!3m6!1s0x2e7857917fea7a6d:0xe8646d83fca6f7b7!8m2!3d-7.8311058!4d111.9904644!16s%2Fg%2F11fmpzdcjh!19sChIJbXrqf5FXeC4Rt_em_INtZOg', null, null, null, null, 4.7, 99, null, 440, 'draft', '2026-06-17T17:55:55.512Z'),
    ('kopi-mandja-kediri', 'Kopi Mandja Kediri', 'Kopi Mandja Kediri masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.6 dari 266 ulasan. Kisaran harga awal: Rp 1–25.000.', 'Kopi Mandja Kediri adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Kopi+Mandja+Kediri/data=!4m7!3m6!1s0x2e78575dc2632ccb:0xa6054b985c15ba1d!8m2!3d-7.8193751!4d112.0192757!16s%2Fg%2F11stngrsnm!19sChIJyyxjwl1XeC4RHboVXJhLBaY', null, null, null, 'murah', 4.6, 266, null, 450, 'draft', '2026-06-17T17:55:55.512Z'),
    ('abank-coffee-kediri-gor-jayabaya', 'Abank Coffee Kediri Gor Jayabaya', 'Abank Coffee Kediri Gor Jayabaya masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.6 dari 71 ulasan. Kisaran harga awal: Rp 1–25.000.', 'Abank Coffee Kediri Gor Jayabaya adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Abank+Coffee+Kediri+Gor+Jayabaya/data=!4m7!3m6!1s0x2e78578f8b6af1ab:0xace45ef749235340!8m2!3d-7.832908!4d111.995914!16s%2Fg%2F11fghhs1zm!19sChIJq_Fqi49XeC4RQFMjSfde5Kw', null, null, null, 'murah', 4.6, 71, null, 460, 'draft', '2026-06-17T17:55:55.512Z'),
    ('kendhil-jejeg-2', 'Kendhil Jejeg 2', 'Kendhil Jejeg 2 masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.5 dari 302 ulasan. Kisaran harga awal: Rp 1–25.000.', 'Kendhil Jejeg 2 adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Kendhil+Jejeg+2/data=!4m7!3m6!1s0x2e7856ff446fb91d:0x8e2d293bd7ce66b9!8m2!3d-7.8331687!4d111.995068!16s%2Fg%2F11cs6dhhn1!19sChIJHblvRP9WeC4RuWbO1zspLY4', null, null, null, 'murah', 4.5, 302, null, 470, 'draft', '2026-06-17T17:55:55.512Z'),
    ('kopi-gus-kulon-kediri', 'Kopi Gus Kulon Kediri', 'Kopi Gus Kulon Kediri masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.6 dari 30 ulasan. Kisaran harga awal: Rp 1–25.000.', 'Kopi Gus Kulon Kediri adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Kopi+Gus+Kulon+Kediri/data=!4m7!3m6!1s0x2e785790244e09b3:0x90dbe1dee52b0be8!8m2!3d-7.8249609!4d111.9879547!16s%2Fg%2F11t65m3rrd!19sChIJswlOJJBXeC4R6Asr5d7h25A', null, null, null, 'murah', 4.6, 30, null, 480, 'draft', '2026-06-17T17:55:55.512Z'),
    ('kedai-expo', 'Kedai Expo', 'Kedai Expo masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.5 dari 1235 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'Kedai Expo adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Kedai+Expo/data=!4m7!3m6!1s0x2e78576bdc13b87d:0x1c94360977a9ed49!8m2!3d-7.8166264!4d111.9998599!16s%2Fg%2F11fl5mmshs!19sChIJfbgT3GtXeC4RSe2pdwk2lBw', null, null, null, 'sedang', 4.5, 1235, null, 490, 'draft', '2026-06-17T17:55:55.512Z'),
    ('lisensi-coffee', 'Lisensi Coffee', 'Lisensi Coffee masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.2 dari 37 ulasan. Kisaran harga awal: Rp 1–25.000.', 'Lisensi Coffee adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Lisensi+Coffee/data=!4m7!3m6!1s0x2e78575962ea6567:0xba806c74d18965d6!8m2!3d-7.8360438!4d112.0004228!16s%2Fg%2F11w3tc066w!19sChIJZ2XqYllXeC4R1mWJ0XRsgLo', null, null, null, 'murah', 4.2, 37, null, 500, 'draft', '2026-06-17T17:55:55.512Z'),
    ('teras-temu', 'TERAS TEMU', 'TERAS TEMU masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.6 dari 130 ulasan. Kisaran harga awal: Rp 1–25.000.', 'TERAS TEMU adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/TERAS+TEMU/data=!4m7!3m6!1s0x2e7857525a76fc4f:0xf6e70800442a8e38!8m2!3d-7.8129323!4d112.0101541!16s%2Fg%2F11tg1zrdbm!19sChIJT_x2WlJXeC4ROI4qRAAI5_Y', null, null, null, 'murah', 4.6, 130, null, 510, 'draft', '2026-06-17T17:55:55.512Z'),
    ('robucca-kediri', 'Robucca Kediri', 'Robucca Kediri masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.7 dari 771 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'Robucca Kediri adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Robucca+Kediri/data=!4m7!3m6!1s0x2e785749c34515f9:0x46c202a317bda389!8m2!3d-7.8080993!4d112.0018982!16s%2Fg%2F11xn7k7w_t!19sChIJ-RVFw0lXeC4RiaO9F6MCwkY', null, null, null, 'sedang', 4.7, 771, null, 520, 'draft', '2026-06-17T17:55:55.512Z'),
    ('arda-koffie', 'ARDA KOFFIE', 'ARDA KOFFIE masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.6 dari 371 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'ARDA KOFFIE adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/ARDA+KOFFIE/data=!4m7!3m6!1s0x2e7857be046c5515:0x69912254ccb79e9!8m2!3d-7.8159427!4d112.012535!16s%2Fg%2F11j3m55fk0!19sChIJFVVsBL5XeC4R6XnLTCUSmQY', null, null, null, 'sedang', 4.6, 371, null, 530, 'draft', '2026-06-17T17:55:55.512Z'),
    ('point-coffee', 'Point Coffee', 'Point Coffee masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.6 dari 401 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'Point Coffee adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Point+Coffee/data=!4m7!3m6!1s0x2e78575752541ecf:0x2db5d0fac1b84baa!8m2!3d-7.8207051!4d112.0281063!16s%2Fg%2F11hgbgxp2m!19sChIJzx5UUldXeC4Rqku4wfrQtS0', null, null, null, 'sedang', 4.6, 401, null, 540, 'draft', '2026-06-17T17:55:55.512Z'),
    ('mustcoffee', 'Mustcoffee', 'Mustcoffee masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.7 dari 171 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'Mustcoffee adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Mustcoffee/data=!4m7!3m6!1s0x2e78576d0aa31d4d:0x4121528cb30ea4a4!8m2!3d-7.8211422!4d112.0265517!16s%2Fg%2F11p13ltr63!19sChIJTR2jCm1XeC4RpKQOs4xSIUE', null, null, null, 'sedang', 4.7, 171, null, 550, 'draft', '2026-06-17T17:55:55.512Z'),
    ('warung-goopi', 'Warung Goopi', 'Warung Goopi masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 3.9 dari 314 ulasan. Kisaran harga awal: Rp 1–25.000.', 'Warung Goopi adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Warung+Goopi/data=!4m7!3m6!1s0x2e78574b95da0359:0x42ccc3b021347bc9!8m2!3d-7.8144403!4d112.0157353!16s%2Fg%2F11tcj6mb0b!19sChIJWQPalUtXeC4RyXs0IbDDzEI', null, null, null, 'murah', 3.9, 314, null, 560, 'draft', '2026-06-17T17:55:55.512Z'),
    ('cafe-mirna', 'CAFE MIRNA', 'CAFE MIRNA masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.3 dari 176 ulasan. Kisaran harga awal: Rp 1–25.000.', 'CAFE MIRNA adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/CAFE+MIRNA/data=!4m7!3m6!1s0x2e7856e2dc475a71:0x3a6fc6423bbb78af!8m2!3d-7.8238887!4d111.9969079!16s%2Fg%2F11c30ppxsd!19sChIJcVpH3OJWeC4Rr3i7O0LGbzo', null, null, null, 'murah', 4.3, 176, null, 570, 'draft', '2026-06-17T17:55:55.512Z'),
    ('bu-tejo-cafe-kediri', 'Bu Tejo Cafe Kediri', 'Bu Tejo Cafe Kediri masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.3 dari 204 ulasan. Kisaran harga awal: Rp 1–25.000.', 'Bu Tejo Cafe Kediri adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Bu+Tejo+Cafe+Kediri/data=!4m7!3m6!1s0x2e7857ab41003f49:0x503cda80d777eef3!8m2!3d-7.8606736!4d112.0286731!16s%2Fg%2F11qp05xxxt!19sChIJST8AQatXeC4R8-5314DaPFA', null, null, null, 'murah', 4.3, 204, null, 580, 'draft', '2026-06-17T17:55:55.513Z'),
    ('mice-street-cafe', 'Mice Street Cafe', 'Mice Street Cafe masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 5.0 dari 34 ulasan. Kisaran harga awal: Rp 1–25.000.', 'Mice Street Cafe adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Mice+Street+Cafe/data=!4m7!3m6!1s0x2e78570bf3f103ed:0xb4338e204bc44e5b!8m2!3d-7.8131534!4d112.0213951!16s%2Fg%2F11p5g4qtdg!19sChIJ7QPx8wtXeC4RW07ESyCOM7Q', null, null, null, 'murah', 5, 34, null, 590, 'draft', '2026-06-17T17:55:55.513Z'),
    ('kopiki', 'kopiki', 'kopiki masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.7 dari 492 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'kopiki adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/kopiki/data=!4m7!3m6!1s0x2e78575815effdab:0x5c53e08de005a5d9!8m2!3d-7.81251!4d112.0113032!16s%2Fg%2F11fl5mp946!19sChIJq_3vFVhXeC4R2aUF4I3gU1w', null, null, null, 'sedang', 4.7, 492, null, 600, 'draft', '2026-06-17T17:55:55.513Z'),
    ('wanmorn-cafe', 'Wanmorn Cafe', 'Wanmorn Cafe masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.6 dari 40 ulasan.', 'Wanmorn Cafe adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Wanmorn+Cafe/data=!4m7!3m6!1s0x2e7856e1dd1741fb:0xba4d444984ad5c52!8m2!3d-7.8217377!4d111.9980705!16s%2Fg%2F11hcfm3n2g!19sChIJ-0EX3eFWeC4RUlythElETbo', null, null, null, null, 4.6, 40, null, 610, 'draft', '2026-06-17T17:55:55.513Z'),
    ('koboi-cafe-kediri', 'Koboi cafe Kediri', 'Koboi cafe Kediri masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.5 dari 271 ulasan. Kisaran harga awal: $.', 'Koboi cafe Kediri adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Koboi+cafe+Kediri/data=!4m7!3m6!1s0x2e78576d2615fb67:0x9a19cc04e1f235e!8m2!3d-7.8197924!4d112.0246735!16s%2Fg%2F11g8ljs1m1!19sChIJZ_sVJm1XeC4RXiMfTsCcoQk', null, null, null, null, 4.5, 271, null, 620, 'draft', '2026-06-17T17:55:55.513Z'),
    ('tepian-coffeeshop-kediri', 'TEPIAN - Coffeeshop Kediri', 'TEPIAN - Coffeeshop Kediri masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.5 dari 234 ulasan. Kisaran harga awal: Rp 1–25.000.', 'TEPIAN - Coffeeshop Kediri adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/TEPIAN+-+Coffeeshop+Kediri/data=!4m7!3m6!1s0x2e7857a153456c79:0x575c9dd694be2396!8m2!3d-7.8196874!4d111.9986991!16s%2Fg%2F11h3bnsjw9!19sChIJeWxFU6FXeC4RliO-lNadXFc', null, null, null, 'murah', 4.5, 234, null, 630, 'draft', '2026-06-17T17:55:55.513Z'),
    ('homely-koffee', 'Homely koffee', 'Homely koffee masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.1 dari 772 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'Homely koffee adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Homely+koffee/data=!4m7!3m6!1s0x2e78570eadf435fd:0xd8fdb064a844201a!8m2!3d-7.7994326!4d112.0021968!16s%2Fg%2F11h196_wjj!19sChIJ_TX0rQ5XeC4RGiBEqGSw_dg', null, null, null, 'sedang', 4.1, 772, null, 640, 'draft', '2026-06-17T17:55:55.513Z'),
    ('etan-muning-sebuah-tempat-nongkrong', 'ETAN MUNING "sebuah tempat nongkrong"', 'ETAN MUNING "sebuah tempat nongkrong" masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.9 dari 25 ulasan. Kisaran harga awal: Rp 1–25.000.', 'ETAN MUNING "sebuah tempat nongkrong" adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/ETAN+MUNING+%22sebuah+tempat+nongkrong%22/data=!4m7!3m6!1s0x2e78575ad26f723b:0x61af3120940da9fc!8m2!3d-7.827383!4d111.9977759!16s%2Fg%2F11rjj7l60r!19sChIJO3Jv0lpXeC4R_KkNlCAxr2E', null, null, null, 'murah', 4.9, 25, null, 650, 'draft', '2026-06-17T17:55:55.513Z'),
    ('green-cafe', 'Green Cafe', 'Green Cafe masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.4 dari 96 ulasan. Kisaran harga awal: Rp 1–25.000.', 'Green Cafe adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Green+Cafe/data=!4m7!3m6!1s0x2e78570005d84e1f:0xcae068097d4641f2!8m2!3d-7.8339689!4d112.0322053!16s%2Fg%2F11y6kyl6l4!19sChIJH07YBQBXeC4R8kFGfQlo4Mo', null, null, null, 'murah', 4.4, 96, null, 660, 'draft', '2026-06-17T17:55:55.513Z'),
    ('freeya-coffee', 'Freeya Coffee', 'Freeya Coffee masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.7 dari 287 ulasan. Kisaran harga awal: Rp 1–25.000.', 'Freeya Coffee adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Freeya+Coffee/data=!4m7!3m6!1s0x2e785717e56fbfcf:0xe44a8297e060814c!8m2!3d-7.8160092!4d112.0252784!16s%2Fg%2F11h560_qkp!19sChIJz79v5RdXeC4RTIFg4JeCSuQ', null, null, null, 'murah', 4.7, 287, null, 670, 'draft', '2026-06-17T17:55:55.513Z'),
    ('warung-kopi-wilis-kediri-wkwk', 'Warung Kopi Wilis Kediri (WKWK)', 'Warung Kopi Wilis Kediri (WKWK) masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.6 dari 305 ulasan. Kisaran harga awal: Rp 1–25.000.', 'Warung Kopi Wilis Kediri (WKWK) adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Warung+Kopi+Wilis+Kediri+%28WKWK%29/data=!4m7!3m6!1s0x2e7856c283d2b88d:0x5bcc9c98d8eb14ad!8m2!3d-7.8140805!4d111.9855345!16s%2Fg%2F11gdsf_zk9!19sChIJjbjSg8JWeC4RrRTr2JiczFs', null, null, null, 'murah', 4.6, 305, null, 680, 'draft', '2026-06-17T17:55:55.513Z'),
    ('lastay-coffee', 'Lastay coffee', 'Lastay coffee masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.3 dari 113 ulasan. Kisaran harga awal: Rp 1–25.000.', 'Lastay coffee adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Lastay+coffee/data=!4m7!3m6!1s0x2e7857f00b1d13df:0xee84745c6f86f0c5!8m2!3d-7.8158125!4d112.0250781!16s%2Fg%2F11rz2g3f6c!19sChIJ3xMdC_BXeC4RxfCGb1x0hO4', null, null, null, 'murah', 4.3, 113, null, 690, 'draft', '2026-06-17T17:55:55.513Z'),
    ('abank-coffee-kediri-tamanan', 'Abank Coffee Kediri Tamanan', 'Abank Coffee Kediri Tamanan masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.5 dari 74 ulasan. Kisaran harga awal: $.', 'Abank Coffee Kediri Tamanan adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Abank+Coffee+Kediri+Tamanan/data=!4m7!3m6!1s0x2e7856f12b54a0c9:0x4c1fe69bcedb1cfd!8m2!3d-7.8294381!4d111.9846955!16s%2Fg%2F11b7y6p4tm!19sChIJyaBUK_FWeC4R_RzbzpvmH0w', null, null, null, null, 4.5, 74, null, 700, 'draft', '2026-06-17T17:55:55.513Z'),
    ('abank-coffee-kediri-doko', 'ABANK COFFEE Kediri - DOKO', 'ABANK COFFEE Kediri - DOKO masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.6 dari 140 ulasan. Kisaran harga awal: Rp 1–25.000.', 'ABANK COFFEE Kediri - DOKO adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/ABANK+COFFEE+Kediri+-+DOKO/data=!4m7!3m6!1s0x2e78575d8e901bf3:0xb5bc11f904953c!8m2!3d-7.8106599!4d112.0397695!16s%2Fg%2F11cs46xv_z!19sChIJ8xuQjl1XeC4RPJUE-RG8tQA', null, null, null, 'murah', 4.6, 140, null, 710, 'draft', '2026-06-17T17:55:55.513Z'),
    ('bakol-kopi-kediri', 'Bakol Kopi Kediri', 'Bakol Kopi Kediri masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.4 dari 167 ulasan. Kisaran harga awal: Rp 1–25.000.', 'Bakol Kopi Kediri adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Bakol+Kopi+Kediri/data=!4m7!3m6!1s0x2e7856fd2d5ae41d:0xfa6eaf77e440ceca!8m2!3d-7.8278364!4d111.9946846!16s%2Fg%2F11c0rnjl3w!19sChIJHeRaLf1WeC4Rys5A5Hevbvo', null, null, null, 'murah', 4.4, 167, null, 720, 'draft', '2026-06-17T17:55:55.513Z'),
    ('simple-kopi', 'Simple Kopi', 'Simple Kopi masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.6 dari 363 ulasan. Kisaran harga awal: Rp 1–25.000.', 'Simple Kopi adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Simple+Kopi/data=!4m7!3m6!1s0x2e78576b108dcbb1:0xf1e605f29b611a20!8m2!3d-7.811456!4d112.0283156!16s%2Fg%2F11fm_47t_n!19sChIJscuNEGtXeC4RIBphm_IF5vE', null, null, null, 'murah', 4.6, 363, null, 730, 'draft', '2026-06-17T17:55:55.513Z'),
    ('cafe-prongos', 'Cafe Prongos', 'Cafe Prongos masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.5 dari 1001 ulasan. Kisaran harga awal: Rp 1–25.000.', 'Cafe Prongos adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Cafe+Prongos/data=!4m7!3m6!1s0x2e79aac7fa52bd3f:0xb991c258c98acaec!8m2!3d-7.8643084!4d111.8377824!16s%2Fg%2F11hczzw9qc!19sChIJP71S-seqeS4R7MqKyVjCkbk', null, null, null, 'murah', 4.5, 1001, null, 740, 'draft', '2026-06-17T17:55:55.513Z'),
    ('d-wif-cafe', 'D''WIF CAFE', 'D''WIF CAFE masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.6 dari 345 ulasan. Kisaran harga awal: Rp 1–25.000.', 'D''WIF CAFE adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/D%27WIF+CAFE/data=!4m7!3m6!1s0x2e7857a4f68e0323:0x3e74b7cff820a41b!8m2!3d-7.8406188!4d112.0158462!16s%2Fg%2F11gfm9yfzq!19sChIJIwOO9qRXeC4RG6Qg-M-3dD4', null, null, null, 'murah', 4.6, 345, null, 750, 'draft', '2026-06-17T17:55:55.513Z'),
    ('yan-s-coffee-link-yang-dikunjungi', 'Yan’s Coffee·Link yang dikunjungi', 'Yan’s Coffee·Link yang dikunjungi masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.5 dari 103 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'Yan’s Coffee·Link yang dikunjungi adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Yan%E2%80%99s+Coffee/data=!4m7!3m6!1s0x2e7857e229541439:0x1da352ef04601865!8m2!3d-7.8097464!4d112.001829!16s%2Fg%2F11rhd_yfgp!19sChIJORRUKeJXeC4RZRhgBO9Sox0', null, null, null, 'sedang', 4.5, 103, null, 760, 'draft', '2026-06-17T17:55:55.513Z'),
    ('rencang-coffee', 'RENCANG COFFEE', 'RENCANG COFFEE masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.8 dari 102 ulasan. Kisaran harga awal: $.', 'RENCANG COFFEE adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/RENCANG+COFFEE/data=!4m7!3m6!1s0x2e7857fb307d6401:0xb86b146e93426c93!8m2!3d-7.8250091!4d112.0056701!16s%2Fg%2F11fkcl6s8n!19sChIJAWR9MPtXeC4Rk2xCk24Ua7g', null, null, null, null, 4.8, 102, null, 770, 'draft', '2026-06-17T17:55:55.513Z'),
    ('alohacoffee', 'Alohacoffee', 'Alohacoffee masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.1 dari 52 ulasan. Kisaran harga awal: Rp 1–25.000.', 'Alohacoffee adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Alohacoffee/data=!4m7!3m6!1s0x2e785707c694b2c1:0x34c0a5f043b47f31!8m2!3d-7.8343328!4d112.0127545!16s%2Fg%2F11lgktzmzz!19sChIJwbKUxgdXeC4RMX-0Q_ClwDQ', null, null, null, 'murah', 4.1, 52, null, 780, 'draft', '2026-06-17T17:55:55.513Z'),
    ('basecamp-cafe', 'Basecamp Cafe', 'Basecamp Cafe masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.0 dari 121 ulasan. Kisaran harga awal: Rp 1–25.000.', 'Basecamp Cafe adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Basecamp+Cafe/data=!4m7!3m6!1s0x2e78575c72ce5a6b:0xe9875e8327366435!8m2!3d-7.8348073!4d112.0311672!16s%2Fg%2F11jcs4_1cx!19sChIJa1rOclxXeC4RNWQ2J4Neh-k', null, null, null, 'murah', 4, 121, null, 790, 'draft', '2026-06-17T17:55:55.513Z'),
    ('desatu-coffee', 'deSatu Coffee', 'deSatu Coffee masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.7 dari 251 ulasan. Kisaran harga awal: Rp 1–25.000.', 'deSatu Coffee adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/deSatu+Coffee/data=!4m7!3m6!1s0x2e78573719e7b627:0xfe188fe6b3c27473!8m2!3d-7.8158979!4d112.025093!16s%2Fg%2F11fgj3xzfq!19sChIJJ7bnGTdXeC4Rc3TCs-aPGP4', null, null, null, 'murah', 4.7, 251, null, 800, 'draft', '2026-06-17T17:55:55.513Z'),
    ('kopicab', 'Kopicab', 'Kopicab masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.7 dari 356 ulasan. Kisaran harga awal: Rp 1–25.000.', 'Kopicab adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Kopicab/data=!4m7!3m6!1s0x2e78570bb44248d7:0x6a15dd3b75c18d4b!8m2!3d-7.8202632!4d112.0007816!16s%2Fg%2F11h0_q2zkm!19sChIJ10hCtAtXeC4RS43BdTvdFWo', null, null, null, 'murah', 4.7, 356, null, 810, 'draft', '2026-06-17T17:55:55.513Z'),
    ('pehkopi', 'pehkopi', 'pehkopi masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.6 dari 388 ulasan. Kisaran harga awal: Rp 1–25.000.', 'pehkopi adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/pehkopi/data=!4m7!3m6!1s0x2e78574353f9dec5:0xcb239de71bb6513!8m2!3d-7.8219463!4d112.0162801!16s%2Fg%2F11c459r5_r!19sChIJxd75U0NXeC4RE2W7cd45sgw', null, null, null, 'murah', 4.6, 388, null, 820, 'draft', '2026-06-17T17:55:55.513Z'),
    ('belikopi-kediri', 'BELIKOPI. KEDIRI', 'BELIKOPI. KEDIRI masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.0 dari 590 ulasan. Kisaran harga awal: Rp 1–25.000.', 'BELIKOPI. KEDIRI adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/BELIKOPI.+KEDIRI/data=!4m7!3m6!1s0x2e78573cc08552cb:0xdee87ecc7f6ef517!8m2!3d-7.8152732!4d112.0173939!16s%2Fg%2F11hht6nfl9!19sChIJy1KFwDxXeC4RF_Vuf8x-6N4', null, null, null, 'murah', 4, 590, null, 830, 'draft', '2026-06-17T17:55:55.513Z'),
    ('kopi-kenangan-hayam-wuruk-kediri', 'Kopi Kenangan - Hayam Wuruk Kediri', 'Kopi Kenangan - Hayam Wuruk Kediri masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.4 dari 475 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'Kopi Kenangan - Hayam Wuruk Kediri adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Kopi+Kenangan+-+Hayam+Wuruk+Kediri/data=!4m7!3m6!1s0x2e78579171fc33a9:0x456d127eacdd5118!8m2!3d-7.8145747!4d112.0155106!16s%2Fg%2F11pdf5qylc!19sChIJqTP8cZFXeC4RGFHdrH4SbUU', null, null, null, 'sedang', 4.4, 475, null, 840, 'draft', '2026-06-17T17:55:55.513Z'),
    ('kopi-gus-cabang-kediri', 'Kopi Gus Cabang Kediri', 'Kopi Gus Cabang Kediri masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.7 dari 182 ulasan. Kisaran harga awal: Rp 1–25.000.', 'Kopi Gus Cabang Kediri adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Kopi+Gus+Cabang+Kediri/data=!4m7!3m6!1s0x2e785780a10a852b:0xd9a30ca8bf9a7de!8m2!3d-7.8467172!4d112.0215462!16s%2Fg%2F11fpc434d4!19sChIJK4UKoYBXeC4R3qf5i8owmg0', null, null, null, 'murah', 4.7, 182, null, 850, 'draft', '2026-06-17T17:55:55.513Z'),
    ('omah-bambu', 'Omah Bambu', 'Omah Bambu masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.2 dari 139 ulasan.', 'Omah Bambu adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Omah+Bambu/data=!4m7!3m6!1s0x2e7857146e98637f:0x6791932612059ed9!8m2!3d-7.8330611!4d111.9963086!16s%2Fg%2F11f3m9wwv1!19sChIJf2OYbhRXeC4R2Z4FEiaTkWc', null, null, null, null, 4.2, 139, null, 860, 'draft', '2026-06-17T17:55:55.513Z'),
    ('warung-kopi-saya-buka-24-jam-live-music-wifi-cepat-unlimited-parkir-luas-working-space-colokan-listrik-cafe-vibes', 'Warung Kopi SAYA - Buka 24 Jam (live music, wifi cepat/unlimited, parkir luas, working space, colokan listrik, cafe vibes)', 'Warung Kopi SAYA - Buka 24 Jam (live music, wifi cepat/unlimited, parkir luas, working space, colokan listrik, cafe vibes) masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.5 dari 36 ulasan.', 'Warung Kopi SAYA - Buka 24 Jam (live music, wifi cepat/unlimited, parkir luas, working space, colokan listrik, cafe vibes) adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Warung+Kopi+SAYA+-+Buka+24+Jam+%28live+music,+wifi+cepat%2Funlimited,+parkir+luas,+working+space,+colokan+listrik,+cafe+vibes%29/data=!4m7!3m6!1s0x2e78570010638155:0x67184ea35a97685f!8m2!3d-7.8397057!4d112.0268104!16s%2Fg%2F11ld3c9jv2!19sChIJVYFjEABXeC4RX2iXWqNOGGc', null, null, null, null, 4.5, 36, null, 870, 'draft', '2026-06-17T17:55:55.513Z'),
    ('we-cafe', 'WE CAFÉ', 'WE CAFÉ masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.5 dari 28 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'WE CAFÉ adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/WE+CAF%C3%89/data=!4m7!3m6!1s0x2e7857923d62e625:0xbba98855625d9ef5!8m2!3d-7.8230612!4d112.0185398!16s%2Fg%2F11vjdk_1j8!19sChIJJeZiPZJXeC4R9Z5dYlWIqbs', null, null, null, 'sedang', 4.5, 28, null, 880, 'draft', '2026-06-17T17:55:55.513Z'),
    ('de-bronto-s-coffee-house', 'De''Bronto''s Coffee House', 'De''Bronto''s Coffee House masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.2 dari 206 ulasan. Kisaran harga awal: Rp 50–75 rb.', 'De''Bronto''s Coffee House adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/De%27Bronto%27s+Coffee+House/data=!4m7!3m6!1s0x2e785714f2d7dc23:0xbf4ad9b10452d141!8m2!3d-7.8159211!4d112.022229!16s%2Fg%2F1hd_47l7z!19sChIJI9zX8hRXeC4RQdFSBLHZSr8', null, null, null, 'premium', 4.2, 206, null, 890, 'draft', '2026-06-17T17:55:55.513Z'),
    ('warung-n-dlesep', 'Warung N''Dlesep', 'Warung N''Dlesep masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.7 dari 872 ulasan. Kisaran harga awal: Rp 1–25.000.', 'Warung N''Dlesep adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Warung+N%27Dlesep/data=!4m7!3m6!1s0x2e7857a492413bb3:0xbee56f2e68f0a663!8m2!3d-7.834702!4d112.014998!16s%2Fg%2F11ghzwn32x!19sChIJsztBkqRXeC4RY6bwaC5v5b4', null, null, null, 'murah', 4.7, 872, null, 900, 'draft', '2026-06-17T17:55:55.513Z'),
    ('pinka-kediri', 'Pinka kediri', 'Pinka kediri masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.7 dari 19 ulasan. Kisaran harga awal: Rp 1–25.000.', 'Pinka kediri adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Pinka+kediri/data=!4m7!3m6!1s0x2e78576788b0e425:0xb6a97540431b73b1!8m2!3d-7.8124263!4d112.0068635!16s%2Fg%2F11q23h77cw!19sChIJJeSwiGdXeC4RsXMbQ0B1qbY', null, null, null, 'murah', 4.7, 19, null, 910, 'draft', '2026-06-17T17:55:55.513Z'),
    ('kedai-kopi-papringan', 'Kedai kopi Papringan', 'Kedai kopi Papringan masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.4 dari 1520 ulasan. Kisaran harga awal: Rp 1–25.000.', 'Kedai kopi Papringan adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Kedai+kopi+Papringan/data=!4m7!3m6!1s0x2e7857064fc540bb:0x15fdfe801f0922fd!8m2!3d-7.8299024!4d112.0094658!16s%2Fg%2F11cmtqx4x2!19sChIJu0DFTwZXeC4R_SIJH4D-_RU', null, null, null, 'murah', 4.4, 1520, null, 920, 'draft', '2026-06-17T17:55:55.513Z'),
    ('coffee', 'Coffee', 'Coffee masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.4 dari 82 ulasan. Kisaran harga awal: $.', 'Coffee adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Coffee/data=!4m7!3m6!1s0x2e7857b402dfd00b:0x49212cf782289206!8m2!3d-7.8454643!4d112.0069934!16s%2Fg%2F11cn8v_x0c!19sChIJC9DfArRXeC4RBpIogvcsIUk', null, null, null, null, 4.4, 82, null, 930, 'draft', '2026-06-17T17:55:55.513Z'),
    ('jenaka-kopi-kediri', 'Jenaka Kopi Kediri', 'Jenaka Kopi Kediri masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.3 dari 104 ulasan. Kisaran harga awal: Rp 1–25.000.', 'Jenaka Kopi Kediri adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Jenaka+Kopi+Kediri/data=!4m7!3m6!1s0x2e78f1a239aef6d5:0x92a3a06ac3de3058!8m2!3d-7.816982!4d112.0177648!16s%2Fg%2F11rf8zhypn!19sChIJ1fauOaLxeC4RWDDew2qgo5I', null, null, null, 'murah', 4.3, 104, null, 940, 'draft', '2026-06-17T17:55:55.513Z'),
    ('cafe', 'Cafe', 'Cafe masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.5 dari 10 ulasan.', 'Cafe adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Cafe/data=!4m7!3m6!1s0x2e78574e77d72261:0x1b35688c5074f269!8m2!3d-7.8189156!4d112.0250246!16s%2Fg%2F11n7wctjkd!19sChIJYSLXd05XeC4RafJ0UIxoNRs', null, null, null, null, 4.5, 10, null, 950, 'draft', '2026-06-17T17:55:55.513Z'),
    ('koppi', 'Koppi', 'Koppi masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.7 dari 74 ulasan. Kisaran harga awal: Rp 25–50 rb.', 'Koppi adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Koppi/data=!4m7!3m6!1s0x2e7857c8e5f30e4b:0xd231fb1c666110a1!8m2!3d-7.8158637!4d112.0204213!16s%2Fg%2F11qtxj0qv9!19sChIJSw7z5chXeC4RoRBhZhz7MdI', null, null, null, 'sedang', 4.7, 74, null, 960, 'draft', '2026-06-17T17:55:55.513Z'),
    ('kopi-kota-kediri', 'Kopi Kota Kediri', 'Kopi Kota Kediri masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.5 dari 172 ulasan. Kisaran harga awal: Rp 1–25.000.', 'Kopi Kota Kediri adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Kopi+Kota+Kediri/data=!4m7!3m6!1s0x2e78579295bcf6bf:0x464c5699f8428157!8m2!3d-7.8199411!4d112.0205104!16s%2Fg%2F11nff1zfn7!19sChIJv_a8lZJXeC4RV4FC-JlWTEY', null, null, null, 'murah', 4.5, 172, null, 970, 'draft', '2026-06-17T17:55:55.513Z'),
    ('bube-kediri', 'Bube Kediri', 'Bube Kediri masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 4.5 dari 18 ulasan.', 'Bube Kediri adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Bube+Kediri/data=!4m7!3m6!1s0x2e785760db2f79f1:0xa6ee28706ec7ee8a!8m2!3d-7.8204031!4d111.9984074!16s%2Fg%2F11kcbh8qtx!19sChIJ8Xkv22BXeC4Riu7HbnAo7qY', null, null, null, null, 4.5, 18, null, 980, 'draft', '2026-06-17T17:55:55.513Z'),
    ('biji-sesawi-tongkrongan', 'Biji Sesawi Tongkrongan', 'Biji Sesawi Tongkrongan masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 5.0 dari 61 ulasan. Kisaran harga awal: Rp 1–25.000.', 'Biji Sesawi Tongkrongan adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/Biji+Sesawi+Tongkrongan/data=!4m7!3m6!1s0x2e7857b8587adaa3:0x478d321674ce5412!8m2!3d-7.8504955!4d112.0122236!16s%2Fg%2F11y28p2xz_!19sChIJo9p6WLhXeC4RElTOdBYyjUc', null, null, null, 'murah', 5, 61, null, 990, 'draft', '2026-06-17T17:55:55.513Z'),
    ('ja-di-cofee-semeru-kota-kediri', 'JA-DI COFEE SEMERU KOTA KEDIRI', 'JA-DI COFEE SEMERU KOTA KEDIRI masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong. Rating publik tercatat sekitar 5.0 dari 11 ulasan.', 'JA-DI COFEE SEMERU KOTA KEDIRI adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.

Data ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.', 'https://www.google.com/maps/place/JA-DI+COFEE+SEMERU+KOTA+KEDIRI/data=!4m7!3m6!1s0x2e785700107172a5:0xe164326644e00a4e!8m2!3d-7.827563!4d111.9951495!16s%2Fg%2F11mf14xq87!19sChIJpXJxEABXeC4RTgrgRGYyZOE', null, null, null, null, 5, 11, null, 1000, 'draft', '2026-06-17T17:55:55.513Z')
  ) as v(slug, name, excerpt, description, google_maps_url, phone, website, instagram, price_label, rating, rating_count, opening_hours, sort_order, status, last_reviewed_at)
), inserted_places as (
  insert into public.places (slug, name, excerpt, description, google_maps_url, phone, website, instagram, price_label, rating, rating_count, opening_hours, sort_order, status, last_reviewed_at, robots)
  select slug, name, excerpt, description, google_maps_url, phone, website, instagram, price_label, rating, rating_count, opening_hours::jsonb, sort_order, status, last_reviewed_at::timestamptz, 'index,follow'
  from source_places
  on conflict (slug) do nothing
  returning id, slug
), category_map as (
  select * from (values
    ('chocolata-cafe-kediri', 'cafe'),
    ('mata-hati-cafe-kediri', 'cafe'),
    ('alinea-kediri', 'cafe'),
    ('tomoro-coffee-joyoboyo-kediri', 'coffee-shop'),
    ('wuffyspace-kediri', 'cafe'),
    ('lunacia', 'coffee-shop'),
    ('bedjo-coffee-3', 'coffee-shop'),
    ('texture-coffee-kediri', 'coffee-shop'),
    ('kuvy-coffee-eatery', 'coffee-shop'),
    ('tomoro-coffee-sekartaji', 'coffee-shop'),
    ('lucy-senja-cozyspace', 'cafe'),
    ('toneeto-s-kitchen-coffee', 'coffee-shop'),
    ('noa-coffee-eatery', 'coffee-shop'),
    ('billions-coffee-kediri', 'coffee-shop'),
    ('in-coffee', 'coffee-shop'),
    ('otw-coffeeshop', 'coffee-shop'),
    ('bluerry-coffee-and-eatery', 'coffee-shop'),
    ('fore-coffee-hayam-wuruk-kediri', 'coffee-shop'),
    ('bern-coffee-house', 'coffee-shop'),
    ('san-s-coffee-space', 'coffee-shop'),
    ('suatukopi-coffee-and-space', 'coffee-shop'),
    ('tempat-bercakap-kopi-kediri', 'coffee-shop'),
    ('republik-dendy-cafe-kediri', 'cafe'),
    ('kocokin-coffeeshop-kediri', 'coffee-shop'),
    ('sk-coffee-lab', 'coffee-shop'),
    ('estar-cafe-eatery', 'cafe'),
    ('societe-cafe-kediri', 'cafe'),
    ('tropis-coffee', 'coffee-shop'),
    ('parkir-depan-coffee-eatery', 'coffee-shop'),
    ('tebu-cafe-temu-budaya-kediri', 'cafe'),
    ('tell-kopi', 'coffee-shop'),
    ('kopi-calf-to-go-kediri', 'coffee-shop'),
    ('okui-es-kopi-dan-temannya', 'coffee-shop'),
    ('laoban-kediri', 'cafe'),
    ('91-traditional-coffee', 'coffee-shop'),
    ('epilogi-coffee', 'coffee-shop'),
    ('cafe-republic', 'cafe'),
    ('ama-cafe-and-resto', 'cafe'),
    ('asturo', 'cafe'),
    ('tilik-sawah', 'cafe'),
    ('rocabana-ice-coffee-donuts', 'coffee-shop'),
    ('cafe-150', 'cafe'),
    ('cafe-balok-kayu', 'cafe'),
    ('read-cafe-kediri', 'cafe'),
    ('kopi-mandja-kediri', 'coffee-shop'),
    ('abank-coffee-kediri-gor-jayabaya', 'coffee-shop'),
    ('kendhil-jejeg-2', 'cafe'),
    ('kopi-gus-kulon-kediri', 'coffee-shop'),
    ('kedai-expo', 'cafe'),
    ('lisensi-coffee', 'coffee-shop'),
    ('teras-temu', 'cafe'),
    ('robucca-kediri', 'cafe'),
    ('arda-koffie', 'cafe'),
    ('point-coffee', 'coffee-shop'),
    ('mustcoffee', 'coffee-shop'),
    ('warung-goopi', 'cafe'),
    ('cafe-mirna', 'cafe'),
    ('bu-tejo-cafe-kediri', 'cafe'),
    ('mice-street-cafe', 'cafe'),
    ('kopiki', 'coffee-shop'),
    ('wanmorn-cafe', 'cafe'),
    ('koboi-cafe-kediri', 'cafe'),
    ('tepian-coffeeshop-kediri', 'coffee-shop'),
    ('homely-koffee', 'cafe'),
    ('etan-muning-sebuah-tempat-nongkrong', 'cafe'),
    ('green-cafe', 'cafe'),
    ('freeya-coffee', 'coffee-shop'),
    ('warung-kopi-wilis-kediri-wkwk', 'coffee-shop'),
    ('lastay-coffee', 'coffee-shop'),
    ('abank-coffee-kediri-tamanan', 'coffee-shop'),
    ('abank-coffee-kediri-doko', 'coffee-shop'),
    ('bakol-kopi-kediri', 'coffee-shop'),
    ('simple-kopi', 'coffee-shop'),
    ('cafe-prongos', 'cafe'),
    ('d-wif-cafe', 'cafe'),
    ('yan-s-coffee-link-yang-dikunjungi', 'coffee-shop'),
    ('rencang-coffee', 'coffee-shop'),
    ('alohacoffee', 'coffee-shop'),
    ('basecamp-cafe', 'cafe'),
    ('desatu-coffee', 'coffee-shop'),
    ('kopicab', 'coffee-shop'),
    ('pehkopi', 'coffee-shop'),
    ('belikopi-kediri', 'coffee-shop'),
    ('kopi-kenangan-hayam-wuruk-kediri', 'coffee-shop'),
    ('kopi-gus-cabang-kediri', 'coffee-shop'),
    ('omah-bambu', 'cafe'),
    ('warung-kopi-saya-buka-24-jam-live-music-wifi-cepat-unlimited-parkir-luas-working-space-colokan-listrik-cafe-vibes', 'coffee-shop'),
    ('we-cafe', 'cafe'),
    ('de-bronto-s-coffee-house', 'coffee-shop'),
    ('warung-n-dlesep', 'cafe'),
    ('pinka-kediri', 'cafe'),
    ('kedai-kopi-papringan', 'coffee-shop'),
    ('coffee', 'coffee-shop'),
    ('jenaka-kopi-kediri', 'coffee-shop'),
    ('cafe', 'coffee-shop'),
    ('koppi', 'coffee-shop'),
    ('kopi-kota-kediri', 'coffee-shop'),
    ('bube-kediri', 'cafe'),
    ('biji-sesawi-tongkrongan', 'cafe'),
    ('ja-di-cofee-semeru-kota-kediri', 'cafe')
  ) as v(slug, category_slug)
)
insert into public.place_categories (place_id, category_id)
select p.id, c.id
from inserted_places p
join category_map cm on cm.slug = p.slug
join public.categories c on c.slug = cm.category_slug
on conflict do nothing;

commit;
