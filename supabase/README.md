# Supabase Setup

1. Buat project Supabase.
2. Copy `.env.example` menjadi `.env` dan isi:
   - `PUBLIC_SUPABASE_URL`
   - `PUBLIC_SUPABASE_ANON_KEY`
   - `ADMIN_EMAILS`
3. Jalankan `supabase/migrations/0001_initial_schema.sql` di SQL Editor.
4. Jalankan `supabase/seed.sql`.
5. Buat user admin di Supabase Auth dengan email yang sama dengan `ADMIN_EMAILS` dan tabel `admin_users`.
6. Login lewat `/admin/login/`.

Catatan: tanpa env Supabase, website tetap bisa preview memakai mock data.
