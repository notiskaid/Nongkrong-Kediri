alter table public.places
  add column if not exists visited_at date,
  add column if not exists editorial_rating numeric check (editorial_rating is null or (editorial_rating >= 1 and editorial_rating <= 5)),
  add column if not exists editorial_highlights text,
  add column if not exists editorial_notes_cons text,
  add column if not exists editorial_verdict text;

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
