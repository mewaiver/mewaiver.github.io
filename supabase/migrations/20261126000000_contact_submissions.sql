create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(btrim(name)) between 1 and 200),
  email text not null check (char_length(btrim(email)) between 1 and 320 and email ~* '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'),
  subject text not null check (char_length(btrim(subject)) between 1 and 200),
  message text not null check (char_length(btrim(message)) between 1 and 10000),
  created_at timestamptz not null default now()
);

alter table public.contact_submissions enable row level security;

-- Public visitors may submit a message, but cannot read, change, or delete submissions.
revoke all on public.contact_submissions from anon, authenticated;
grant insert (name, email, subject, message) on public.contact_submissions to anon, authenticated;

create policy "Submit contact messages"
on public.contact_submissions for insert to anon, authenticated
with check (true);
