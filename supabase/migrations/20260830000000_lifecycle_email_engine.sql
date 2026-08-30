-- Lifecycle Email, Entitlement Integrity & Newsletter engine
-- Adds: durable event log, email delivery log (with idempotency), suppression
-- list, entitlement repair audit, newsletter/preference state, and a uniqueness
-- guard on payments so duplicate webhooks cannot double-insert or double-email.

-- ---------------------------------------------------------------------------
-- 1. Profile-level email preferences, newsletter state, unsubscribe token.
--    Every category defaults to FALSE — we never silently opt users in.
-- ---------------------------------------------------------------------------
alter table public.profiles
  add column if not exists email_prefs jsonb not null default
    '{"career_tips": false, "product_updates": false, "offers": false, "newsletter": false}'::jsonb,
  add column if not exists newsletter_status text,               -- null | 'subscribed' | 'unsubscribed'
  add column if not exists newsletter_subscribed_at timestamptz,
  add column if not exists newsletter_unsubscribed_at timestamptz,
  add column if not exists welcome_email_sent_at timestamptz,
  add column if not exists unsubscribe_token uuid not null default gen_random_uuid();

create unique index if not exists profiles_unsubscribe_token_idx
  on public.profiles(unsubscribe_token);

-- ---------------------------------------------------------------------------
-- 2. Payment uniqueness — the foundation of purchase-email idempotency.
--    A gateway + order id pair identifies one payment; retries must no-op.
--    Partial index (order id not null) so legacy null rows are unaffected.
-- ---------------------------------------------------------------------------
create unique index if not exists payments_gateway_order_uidx
  on public.payments(gateway, gateway_order_id)
  where gateway_order_id is not null;

-- ---------------------------------------------------------------------------
-- 3. Lifecycle event log — the single spine every email hangs off.
-- ---------------------------------------------------------------------------
create table if not exists public.lifecycle_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade,
  event_type text not null,
  entity_id text,
  payload jsonb not null default '{}'::jsonb,
  idempotency_key text unique,
  status text not null default 'recorded',   -- recorded | processed | failed
  retry_count integer not null default 0,
  error text,
  occurred_at timestamptz not null default now(),
  processed_at timestamptz
);

create index if not exists lifecycle_events_user_idx on public.lifecycle_events(user_id);
create index if not exists lifecycle_events_type_idx on public.lifecycle_events(event_type, occurred_at desc);

-- ---------------------------------------------------------------------------
-- 4. Email delivery log — one row per intended send. idempotency_key is UNIQUE
--    so a duplicate webhook / retry / redeploy can never send twice.
-- ---------------------------------------------------------------------------
create table if not exists public.email_messages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete set null,
  recipient text not null,
  email_type text not null,
  category text not null default 'transactional', -- transactional | career_tips | product_updates | offers | newsletter
  lifecycle_event_id uuid references public.lifecycle_events(id) on delete set null,
  provider text not null default 'resend',
  provider_message_id text,
  template_version text,
  status text not null default 'queued',          -- queued | sent | delivered | bounced | complained | failed | suppressed
  idempotency_key text not null unique,
  error text,
  created_at timestamptz not null default now(),
  sent_at timestamptz,
  delivered_at timestamptz,
  bounced_at timestamptz,
  clicked_at timestamptz,
  failed_at timestamptz
);

create index if not exists email_messages_user_idx on public.email_messages(user_id, created_at desc);
create index if not exists email_messages_status_idx on public.email_messages(status);
create index if not exists email_messages_provider_msg_idx on public.email_messages(provider_message_id);

-- ---------------------------------------------------------------------------
-- 5. Suppression list — hard bounces, complaints, global unsubscribes.
-- ---------------------------------------------------------------------------
create table if not exists public.email_suppressions (
  email text primary key,
  reason text not null,                           -- hard_bounce | complaint | unsubscribe_all | manual
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- 6. Entitlement repair audit — every automated fix leaves a trail.
-- ---------------------------------------------------------------------------
create table if not exists public.entitlement_repairs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade,
  kind text not null,                             -- missing_pro | stale_pro | missing_purchase_email | unmapped_payment
  detail jsonb not null default '{}'::jsonb,
  resolved boolean not null default true,
  created_at timestamptz not null default now()
);

create index if not exists entitlement_repairs_user_idx on public.entitlement_repairs(user_id, created_at desc);

-- ---------------------------------------------------------------------------
-- RLS: these are operational tables written only by the service role and the
-- webhook/cron endpoints. Enable RLS with no public policies (service role
-- bypasses RLS); users read their own email history through server code only.
-- ---------------------------------------------------------------------------
alter table public.lifecycle_events enable row level security;
alter table public.email_messages enable row level security;
alter table public.email_suppressions enable row level security;
alter table public.entitlement_repairs enable row level security;

drop policy if exists "own lifecycle events" on public.lifecycle_events;
create policy "own lifecycle events" on public.lifecycle_events
  for select using (auth.uid() = user_id);

drop policy if exists "own email messages" on public.email_messages;
create policy "own email messages" on public.email_messages
  for select using (auth.uid() = user_id);
