-- The three quota functions from 20260616010000_billing_subscriptions_and_usage_limits.sql
-- are `security definer` and act on whatever `p_user_id` the caller passes.
-- Supabase grants EXECUTE on new functions in `public` to `anon` and
-- `authenticated`, so anyone holding the public anon key could call them over
-- PostgREST for another account:
--   - consume_free_cv_creation(p_user_id) spent another user's counter,
--   - consume_free_pdf_export(p_user_id, p_cv_id) spent another user's free
--     PDF exports and minted export tokens in their name,
--   - consume_export_token(...) burned another user's pending export token.
--
-- The app only calls them through the signed-in user's session
-- (lib/billingQuota.ts uses lib/supabase/server.ts, the anon key plus the
-- user's cookies), so `auth.uid()` always equals `p_user_id` there. The same
-- guard as create_job_application_atomic (20261112000000) is added; the
-- service role is still allowed for server-side maintenance. Bodies are
-- otherwise unchanged.

create or replace function public.consume_free_cv_creation(p_user_id uuid)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_plan text;
  v_used integer;
begin
  if coalesce(auth.role(), '') <> 'service_role'
     and (auth.uid() is null or auth.uid() <> p_user_id) then
    return jsonb_build_object('allowed', false, 'used', 0, 'limit', 3, 'error', 'FORBIDDEN');
  end if;

  select plan, cv_creations_used
    into v_plan, v_used
    from public.profiles
    where id = p_user_id
    for update;

  if not found then
    return jsonb_build_object('allowed', false, 'used', 0, 'limit', 3);
  end if;

  if v_plan = 'pro' then
    return jsonb_build_object('allowed', true, 'used', v_used, 'limit', null);
  end if;

  if v_used >= 3 then
    return jsonb_build_object('allowed', false, 'used', v_used, 'limit', 3);
  end if;

  update public.profiles
    set cv_creations_used = cv_creations_used + 1
    where id = p_user_id
    returning cv_creations_used into v_used;

  return jsonb_build_object('allowed', true, 'used', v_used, 'limit', 3);
end;
$$;

create or replace function public.consume_free_pdf_export(p_user_id uuid, p_cv_id uuid)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_plan text;
  v_used integer;
  v_token uuid;
begin
  if coalesce(auth.role(), '') <> 'service_role'
     and (auth.uid() is null or auth.uid() <> p_user_id) then
    return jsonb_build_object('allowed', false, 'error', 'NOT_FOUND');
  end if;

  if not exists (
    select 1 from public.cvs where id = p_cv_id and user_id = p_user_id
  ) then
    return jsonb_build_object('allowed', false, 'error', 'NOT_FOUND');
  end if;

  select plan, pdf_exports_used
    into v_plan, v_used
    from public.profiles
    where id = p_user_id
    for update;

  if not found then
    return jsonb_build_object('allowed', false, 'used', 0, 'limit', 3);
  end if;

  if v_plan <> 'pro' then
    if v_used >= 3 then
      return jsonb_build_object('allowed', false, 'used', v_used, 'limit', 3);
    end if;

    update public.profiles
      set pdf_exports_used = pdf_exports_used + 1
      where id = p_user_id
      returning pdf_exports_used into v_used;
  end if;

  insert into public.export_tokens(user_id, cv_id)
    values (p_user_id, p_cv_id)
    returning id into v_token;

  return jsonb_build_object(
    'allowed', true,
    'token', v_token,
    'used', v_used,
    'limit', case when v_plan = 'pro' then null else 3 end
  );
end;
$$;

create or replace function public.consume_export_token(p_user_id uuid, p_cv_id uuid, p_token uuid)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  if coalesce(auth.role(), '') <> 'service_role'
     and (auth.uid() is null or auth.uid() <> p_user_id) then
    return false;
  end if;

  update public.export_tokens
    set used = true
    where id = p_token
      and user_id = p_user_id
      and cv_id = p_cv_id
      and used = false
      and expires_at > now();

  return found;
end;
$$;

revoke all on function public.consume_free_cv_creation(uuid) from public;
revoke all on function public.consume_free_cv_creation(uuid) from anon;
grant execute on function public.consume_free_cv_creation(uuid) to authenticated, service_role;

revoke all on function public.consume_free_pdf_export(uuid, uuid) from public;
revoke all on function public.consume_free_pdf_export(uuid, uuid) from anon;
grant execute on function public.consume_free_pdf_export(uuid, uuid) to authenticated, service_role;

revoke all on function public.consume_export_token(uuid, uuid, uuid) from public;
revoke all on function public.consume_export_token(uuid, uuid, uuid) from anon;
grant execute on function public.consume_export_token(uuid, uuid, uuid) to authenticated, service_role;
