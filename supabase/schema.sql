-- Golden Brix (Supabase) schema
-- Run in Supabase SQL editor.

-- Extensions (optional)
create extension if not exists pgcrypto;

-- Leads
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  source text not null default 'website',
  page text,
  name text not null,
  email text not null,
  phone text not null,
  budget text,
  location text,
  property_slug text,
  message text,
  created_at timestamptz not null default now()
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_property_slug_idx on public.leads (property_slug);

-- Properties
create table if not exists public.properties (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  location text not null,
  price text,
  bhk text,
  builder text,
  property_type text,
  possession text,
  overview text,
  highlights jsonb not null default '[]'::jsonb,
  amenities jsonb not null default '[]'::jsonb,
  size text,
  hero_image text,
  gallery_images jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists properties_location_idx on public.properties (location);
create index if not exists properties_property_type_idx on public.properties (property_type);

-- Developers (optional future use)
create table if not exists public.developers (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  logo_url text,
  website_url text,
  created_at timestamptz not null default now()
);

-- Testimonials
create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text,
  rating int,
  quote text not null,
  avatar_url text,
  created_at timestamptz not null default now()
);

-- Blogs
create table if not exists public.blogs (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text,
  content text not null,
  cover_image text,
  tags jsonb not null default '[]'::jsonb,
  published_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists blogs_published_at_idx on public.blogs (published_at desc);

-- Minimal RLS that still allows public inserts for leads.
alter table public.leads enable row level security;
alter table public.properties enable row level security;
alter table public.blogs enable row level security;
alter table public.testimonials enable row level security;

-- Leads: allow anyone to insert (website forms)
drop policy if exists "leads_insert" on public.leads;
create policy "leads_insert"
on public.leads
for insert
to anon
with check (true);

-- Public read for properties/blogs/testimonials (site content)
drop policy if exists "properties_read" on public.properties;
create policy "properties_read"
on public.properties
for select
to anon
using (true);

drop policy if exists "blogs_read" on public.blogs;
create policy "blogs_read"
on public.blogs
for select
to anon
using (true);

drop policy if exists "testimonials_read" on public.testimonials;
create policy "testimonials_read"
on public.testimonials
for select
to anon
using (true);

