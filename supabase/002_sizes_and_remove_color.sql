-- Run this once in the Supabase SQL editor, after schema.sql and storage.sql.
-- Switches sizes from UK numbering to EU numbering, and drops the color column.

-- Any existing row with an old UK size wouldn't satisfy the new EU check
-- constraint below, so normalize those first.
update public.products
set size = '42'
where size not in ('38', '39', '40', '41', '42', '43', '44', '45', '46');

alter table public.products drop constraint if exists products_size_check;
alter table public.products add constraint products_size_check
  check (size in ('38', '39', '40', '41', '42', '43', '44', '45', '46'));

alter table public.products drop column if exists color;
