-- Nongkrong Kediri initial schema
-- Run this migration in Supabase SQL editor or via Supabase CLI.

create extension if not exists pgcrypto;

create table if not exists public.admin_users (
  email text primary key,
  created_at timestamptz default now()
);

create or replace function public.is_admin()
returns boolean
language sql
stable
as $$
  select exists(select 1 from public.admin_users where lower(email) = lower(auth.email()))
$$;

create table if not exists public.authors (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  role text,
  bio text,
  avatar_url text,
  created_at timestamptz default now()
);

create table if not exists public.areas (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  description text,
  sort_order int default 0,
  created_at timestamptz default now()
);

create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  description text,
  sort_order int default 0,
  created_at timestamptz default now()
);

create table if not exists public.use_cases (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  icon text,
  description text,
  sort_order int default 0,
  created_at timestamptz default now()
);

create table if not exists public.facilities (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  icon text,
  description text,
  sort_order int default 0,
  created_at timestamptz default now()
);

create table if not exists public.places (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  excerpt text,
  description text,
  editorial_notes text,
  google_place_id text unique,
  google_maps_url text,
  address text,
  area_id uuid references public.areas(id) on delete set null,
  city text default 'Kediri',
  latitude double precision,
  longitude double precision,
  phone text,
  website text,
  instagram text,
  price_min int,
  price_max int,
  price_label text,
  rating numeric,
  rating_count int,
  opening_hours jsonb,
  status text default 'draft' check (status in ('draft','review','published','archived','closed')),
  is_featured boolean default false,
  sort_order int default 0,
  meta_title text,
  meta_description text,
  canonical_url text,
  robots text default 'index,follow',
  published_at timestamptz,
  last_reviewed_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.place_categories (
  place_id uuid references public.places(id) on delete cascade,
  category_id uuid references public.categories(id) on delete cascade,
  primary key (place_id, category_id)
);

create table if not exists public.place_use_cases (
  place_id uuid references public.places(id) on delete cascade,
  use_case_id uuid references public.use_cases(id) on delete cascade,
  primary key (place_id, use_case_id)
);

create table if not exists public.place_facilities (
  place_id uuid references public.places(id) on delete cascade,
  facility_id uuid references public.facilities(id) on delete cascade,
  primary key (place_id, facility_id)
);

create table if not exists public.place_photos (
  id uuid primary key default gen_random_uuid(),
  place_id uuid references public.places(id) on delete cascade,
  url text not null,
  alt text,
  source text,
  credit text,
  is_featured boolean default false,
  sort_order int default 0,
  created_at timestamptz default now()
);

create table if not exists public.seo_pages (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  page_type text not null default 'keyword',
  title text not null,
  h1 text not null,
  description text,
  content jsonb default '[]'::jsonb,
  query_config jsonb default '{}'::jsonb,
  author_id uuid references public.authors(id) on delete set null,
  status text default 'draft' check (status in ('draft','published','archived')),
  meta_title text,
  meta_description text,
  canonical_url text,
  robots text default 'index,follow',
  published_at timestamptz,
  last_reviewed_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.place_reports (
  id uuid primary key default gen_random_uuid(),
  place_id uuid references public.places(id) on delete cascade,
  report_type text not null,
  message text,
  reporter_name text,
  reporter_contact text,
  status text default 'pending' check (status in ('pending','reviewed','resolved','rejected')),
  created_at timestamptz default now()
);

create table if not exists public.place_reviews (
  id uuid primary key default gen_random_uuid(),
  place_id uuid references public.places(id) on delete cascade,
  name text,
  rating int check (rating between 1 and 5),
  comment text,
  status text default 'pending' check (status in ('pending','published','rejected')),
  created_at timestamptz default now()
);

create table if not exists public.place_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  address text,
  google_maps_url text,
  contact_url text,
  notes text,
  submitter_name text,
  submitter_contact text,
  status text default 'pending' check (status in ('pending','reviewed','accepted','rejected')),
  created_at timestamptz default now()
);

create or replace view public.places_public with (security_invoker = on) as
select
  p.*,
  a.name as area_name,
  a.slug as area_slug,
  coalesce((
    select jsonb_agg(jsonb_build_object('id', c.id, 'name', c.name, 'slug', c.slug, 'description', c.description) order by c.sort_order, c.name)
    from public.place_categories pc
    join public.categories c on c.id = pc.category_id
    where pc.place_id = p.id
  ), '[]'::jsonb) as categories,
  coalesce((
    select jsonb_agg(jsonb_build_object('id', u.id, 'name', u.name, 'slug', u.slug, 'icon', u.icon, 'description', u.description) order by u.sort_order, u.name)
    from public.place_use_cases pu
    join public.use_cases u on u.id = pu.use_case_id
    where pu.place_id = p.id
  ), '[]'::jsonb) as use_cases,
  coalesce((
    select jsonb_agg(jsonb_build_object('id', f.id, 'name', f.name, 'slug', f.slug, 'icon', f.icon, 'description', f.description) order by f.sort_order, f.name)
    from public.place_facilities pf
    join public.facilities f on f.id = pf.facility_id
    where pf.place_id = p.id
  ), '[]'::jsonb) as facilities,
  coalesce((
    select jsonb_agg(jsonb_build_object('id', ph.id, 'url', ph.url, 'alt', ph.alt, 'source', ph.source, 'credit', ph.credit, 'is_featured', ph.is_featured) order by ph.sort_order, ph.created_at)
    from public.place_photos ph
    where ph.place_id = p.id
  ), '[]'::jsonb) as photos,
  (select ph.url from public.place_photos ph where ph.place_id = p.id and ph.is_featured = true order by ph.sort_order limit 1) as featured_image_url,
  (select ph.alt from public.place_photos ph where ph.place_id = p.id and ph.is_featured = true order by ph.sort_order limit 1) as featured_image_alt
from public.places p
left join public.areas a on a.id = p.area_id;

create or replace view public.seo_pages_public with (security_invoker = on) as
select
  sp.*,
  au.name as author_name,
  au.slug as author_slug
from public.seo_pages sp
left join public.authors au on au.id = sp.author_id;

create or replace view public.place_reports_public with (security_invoker = on) as
select
  pr.*,
  p.name as place_name,
  p.slug as place_slug
from public.place_reports pr
left join public.places p on p.id = pr.place_id;

alter table public.admin_users enable row level security;
alter table public.authors enable row level security;
alter table public.areas enable row level security;
alter table public.categories enable row level security;
alter table public.use_cases enable row level security;
alter table public.facilities enable row level security;
alter table public.places enable row level security;
alter table public.place_categories enable row level security;
alter table public.place_use_cases enable row level security;
alter table public.place_facilities enable row level security;
alter table public.place_photos enable row level security;
alter table public.seo_pages enable row level security;
alter table public.place_reports enable row level security;
alter table public.place_reviews enable row level security;
alter table public.place_submissions enable row level security;

-- Public read for taxonomy and published content.
create policy "Public can read taxonomy" on public.areas for select using (true);
create policy "Public can read categories" on public.categories for select using (true);
create policy "Public can read use_cases" on public.use_cases for select using (true);
create policy "Public can read facilities" on public.facilities for select using (true);
create policy "Public can read published places" on public.places for select using (status = 'published' or public.is_admin());
create policy "Public can read place relations" on public.place_categories for select using (true);
create policy "Public can read place use cases" on public.place_use_cases for select using (true);
create policy "Public can read place facilities" on public.place_facilities for select using (true);
create policy "Public can read place photos" on public.place_photos for select using (true);
create policy "Public can read published seo pages" on public.seo_pages for select using (status = 'published' or public.is_admin());
create policy "Public can read authors" on public.authors for select using (true);
create policy "Public can submit place reports" on public.place_reports for insert with check (true);
create policy "Public can submit place submissions" on public.place_submissions for insert with check (true);

-- Admin CRUD.
create policy "Admin can manage admin users" on public.admin_users for all using (public.is_admin()) with check (public.is_admin());
create policy "Admin can manage authors" on public.authors for all using (public.is_admin()) with check (public.is_admin());
create policy "Admin can manage areas" on public.areas for all using (public.is_admin()) with check (public.is_admin());
create policy "Admin can manage categories" on public.categories for all using (public.is_admin()) with check (public.is_admin());
create policy "Admin can manage use cases" on public.use_cases for all using (public.is_admin()) with check (public.is_admin());
create policy "Admin can manage facilities" on public.facilities for all using (public.is_admin()) with check (public.is_admin());
create policy "Admin can manage places" on public.places for all using (public.is_admin()) with check (public.is_admin());
create policy "Admin can manage place_categories" on public.place_categories for all using (public.is_admin()) with check (public.is_admin());
create policy "Admin can manage place_use_cases" on public.place_use_cases for all using (public.is_admin()) with check (public.is_admin());
create policy "Admin can manage place_facilities" on public.place_facilities for all using (public.is_admin()) with check (public.is_admin());
create policy "Admin can manage photos" on public.place_photos for all using (public.is_admin()) with check (public.is_admin());
create policy "Admin can manage seo pages" on public.seo_pages for all using (public.is_admin()) with check (public.is_admin());
create policy "Admin can manage reports" on public.place_reports for all using (public.is_admin()) with check (public.is_admin());
create policy "Admin can manage reviews" on public.place_reviews for all using (public.is_admin()) with check (public.is_admin());
create policy "Admin can manage submissions" on public.place_submissions for all using (public.is_admin()) with check (public.is_admin());

create index if not exists places_slug_idx on public.places(slug);
create index if not exists places_status_idx on public.places(status);
create index if not exists seo_pages_slug_idx on public.seo_pages(slug);
create index if not exists seo_pages_status_idx on public.seo_pages(status);
