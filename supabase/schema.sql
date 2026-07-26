-- Run this once in the Supabase SQL editor (Project -> SQL Editor -> New query).

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  size text not null check (size in ('38', '39', '40', '41', '42', '43', '44', '45', '46')),
  condition text not null check (condition in ('Like New', '9/10', '8/10', 'Gently Worn')),
  price integer not null default 0,
  status text not null default 'Active' check (status in ('Active', 'Sold')),
  photo_url text
);

alter table public.products enable row level security;

-- Anyone (including signed-out storefront visitors) can read listings.
create policy "Public can view products"
  on public.products for select
  using (true);

-- Only a signed-in admin (via Supabase Auth) can add, edit, or remove listings.
create policy "Authenticated users can insert products"
  on public.products for insert
  with check ((select auth.uid()) is not null);

create policy "Authenticated users can update products"
  on public.products for update
  using ((select auth.uid()) is not null)
  with check ((select auth.uid()) is not null);

create policy "Authenticated users can delete products"
  on public.products for delete
  using ((select auth.uid()) is not null);
