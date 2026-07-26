-- Run this once in the Supabase SQL editor, after schema.sql.

insert into storage.buckets (id, name, public)
values ('product-photos', 'product-photos', true)
on conflict (id) do nothing;

create policy "Public can view product photos"
  on storage.objects for select
  using (bucket_id = 'product-photos');

create policy "Authenticated users can upload product photos"
  on storage.objects for insert
  with check (bucket_id = 'product-photos' and (select auth.uid()) is not null);

create policy "Authenticated users can update product photos"
  on storage.objects for update
  using (bucket_id = 'product-photos' and (select auth.uid()) is not null);

create policy "Authenticated users can delete product photos"
  on storage.objects for delete
  using (bucket_id = 'product-photos' and (select auth.uid()) is not null);
