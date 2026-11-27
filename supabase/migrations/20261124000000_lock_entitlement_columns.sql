-- Signed-in users could grant themselves Pro by writing their own rows.
--
-- The base schema (agents/01-foundation.md) gives every user
--   create policy "own profile"  on public.profiles for all using (auth.uid() = id);
--   create policy "own payments" on public.payments for all using (auth.uid() = user_id);
-- and Supabase grants INSERT/UPDATE/DELETE on public tables to `authenticated`.
-- With only the public anon key and their own session, a user could, over
-- PostgREST:
--   - set profiles.plan = 'pro', or reset pdf_exports_used / cv_creations_used;
--   - set profiles.billing_subscription_id to someone else's live Cashfree
--     subscription, then POST /api/billing/sync, which reads that id from the
--     profile and upgrades the caller (lib/billingSync.ts);
--   - insert a payments row with gateway_order_id 'ltd_...' and status
--     'SUCCESS', which lib/readProfile.ts and lib/entitlements/lifetime.ts
--     treat as a permanent lifetime purchase (re-promoted to Pro on every page
--     load and never downgraded).
--
-- After this migration:
--   - payments is read-only for anon/authenticated. Every payment write in the
--     app goes through the service role (webhooks/billing, entitlement audit).
--   - anon/authenticated may change only these profile columns:
--       full_name, avatar_url, linkedin_url, openrouter_key_enc, openrouter_key_hint
--     (the OpenRouter key routes write the last two with the user's session).
--     Any other column change is refused with SQLSTATE 42501. Columns added to
--     profiles later are protected by default.
--   - A row a user inserts must carry the defaults for plan, usage counters and
--     billing state.
--   - The service role and SECURITY DEFINER functions (consume_free_pdf_export,
--     consume_free_cv_creation, handle_new_user, ...) run as other roles and are
--     not affected.
--
-- The app moves its two remaining user-session billing writes
-- (/api/billing/cancel, /api/billing/create-subscription) to the service role
-- in the same change.

revoke insert, update, delete on public.payments from anon, authenticated;

create or replace function public.guard_profile_entitlement_columns()
returns trigger
language plpgsql
-- Deliberately NOT security definer: current_user must be the calling role.
set search_path = public
as $$
declare
  user_editable constant text[] := array[
    'full_name',
    'avatar_url',
    'linkedin_url',
    'openrouter_key_enc',
    'openrouter_key_hint'
  ];
  new_row jsonb;
begin
  if current_user not in ('anon', 'authenticated') then
    return new;
  end if;

  new_row := to_jsonb(new);

  if tg_op = 'UPDATE' then
    if (new_row - user_editable) is distinct from (to_jsonb(old) - user_editable) then
      raise exception 'profiles: only name, avatar, LinkedIn and OpenRouter key columns can be changed by the account owner'
        using errcode = '42501';
    end if;
    return new;
  end if;

  -- INSERT (including the insert half of an upsert).
  if coalesce(new_row->>'plan', 'free') <> 'free'
     or coalesce((new_row->>'pdf_exports_used')::integer, 0) <> 0
     or coalesce((new_row->>'cv_creations_used')::integer, 0) <> 0
     or new_row->>'billing_subscription_id' is not null
     or new_row->>'billing_provider_subscription_id' is not null
     or new_row->>'billing_subscription_status' is not null
     or new_row->>'billing_authorization_status' is not null
     or new_row->>'billing_current_period_start' is not null
     or new_row->>'billing_current_period_end' is not null
     or new_row->>'billing_cancel_at' is not null
     or new_row->>'billing_last_payment_status' is not null then
    raise exception 'profiles: plan, usage and billing columns cannot be set by the account owner'
      using errcode = '42501';
  end if;

  return new;
end;
$$;

drop trigger if exists guard_profile_entitlement_columns on public.profiles;
create trigger guard_profile_entitlement_columns
  before insert or update on public.profiles
  for each row execute function public.guard_profile_entitlement_columns();
