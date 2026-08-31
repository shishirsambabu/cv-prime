-- Fix: the payments uniqueness guard must be a PLAIN unique index, not a partial one.
--
-- The previous migration created:
--   create unique index ... on payments(gateway, gateway_order_id)
--     where gateway_order_id is not null;
--
-- PostgreSQL cannot infer a PARTIAL unique index from a bare `ON CONFLICT (a, b)`
-- specification — it requires the index predicate to be restated. supabase-js only
-- forwards the column list, so every payment upsert raised 42P10
-- ("no unique or exclusion constraint matching the ON CONFLICT specification"),
-- which 500'd the Cashfree webhook AFTER the plan upgrade: the payment row was
-- never written and the purchase email never sent.
--
-- A plain unique index behaves identically for our purposes: under the SQL standard
-- NULLs are distinct in a unique index, so pre-existing rows with a null
-- gateway_order_id remain unconstrained.

-- 1. De-duplicate first. The pre-migration webhook did a bare INSERT with no
--    idempotency, so a single Cashfree retry could produce duplicate rows — and a
--    unique index cannot be created over duplicates. Keep the earliest row of each
--    (gateway, gateway_order_id) pair.
delete from public.payments p
  using public.payments q
 where p.gateway_order_id is not null
   and q.gateway_order_id is not null
   and p.gateway = q.gateway
   and p.gateway_order_id = q.gateway_order_id
   and p.ctid > q.ctid;

-- 2. Replace the partial index with a plain one.
drop index if exists public.payments_gateway_order_uidx;

create unique index if not exists payments_gateway_order_uidx
  on public.payments(gateway, gateway_order_id);
