-- Leads table for capturing potential client submissions
create extension if not exists "pgcrypto";

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  message text,
  source text,
  created_at timestamptz not null default now()
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_email_idx on public.leads (email);

alter table public.leads enable row level security;

-- Allow anonymous visitors to submit leads from the marketing site
drop policy if exists "Anon can insert leads" on public.leads;
create policy "Anon can insert leads"
  on public.leads
  for insert
  to anon
  with check (true);

-- Authenticated users (admins via dashboard) can read leads; anon cannot
drop policy if exists "Authenticated can read leads" on public.leads;
create policy "Authenticated can read leads"
  on public.leads
  for select
  to authenticated
  using (true);
