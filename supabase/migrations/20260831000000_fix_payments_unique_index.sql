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
--    unique index cannot be created over duplicates.
--
--    Which row survives is chosen deterministically, NOT by physical position:
--    a successful payment always wins (so a duplicate pair of FAILED + SUCCESS
--    can never leave the customer looking unpaid), then the earliest created_at,
--    then ctid purely as a tie-breaker.
with ranked as (
  select ctid,
         row_number() over (
           partition by gateway, gateway_order_id
           order by
             case
               when upper(coalesce(status, '')) in ('SUCCESS', 'PAID', 'CAPTURED', 'COMPLETED')
               then 0 else 1
             end,
             created_at asc nulls last,
             ctid
         ) as rn
    from public.payments
   where gateway_order_id is not null
)
delete from public.payments p
 using ranked r
 where p.ctid = r.ctid
   and r.rn > 1;

-- 2. Replace the partial index with a plain one.
drop index if exists public.payments_gateway_order_uidx;

create unique index if not exists payments_gateway_order_uidx
  on public.payments(gateway, gateway_order_id);
