-- Fixes a check-then-insert race in `POST /api/job-applications`: the route
-- ran a `count()` of the user's existing rows and an `insert` as two separate
-- requests, with no transaction or lock tying them together. Two concurrent
-- adds (e.g. a double-click, or two tabs) could both read the same
-- pre-insert count, both see it under the free plan's 3-job limit, and both
-- insert — leaving a free-plan user with 4+ tracked jobs. This mirrors the
-- exact class of bug `consume_free_pdf_export` (see
-- 20260616010000_billing_subscriptions_and_usage_limits.sql) and
-- `consume_free_cv_creation` already fix for exports and CV creation: do the
-- check and the write inside one function, under a row lock on the user's
-- own `profiles` row, so concurrent calls for the same user serialize.
create or replace function public.create_job_application_atomic(
  p_user_id uuid,
  p_company text,
  p_role text,
  p_job_url text,
  p_applied_date text,
  p_notes text
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_plan text;
  v_count integer;
  v_row public.job_applications%rowtype;
begin
  select plan into v_plan
    from public.profiles
    where id = p_user_id
    for update;

  if not found then
    return jsonb_build_object('allowed', false, 'error', 'NOT_FOUND');
  end if;

  if v_plan <> 'pro' then
    select count(*) into v_count
      from public.job_applications
      where user_id = p_user_id;

    if v_count >= 3 then
      return jsonb_build_object('allowed', false, 'error', 'PLAN_GATE');
    end if;
  end if;

  insert into public.job_applications(user_id, company, role, job_url, applied_date, notes, status)
    values (
      p_user_id,
      p_company,
      p_role,
      nullif(p_job_url, ''),
      nullif(p_applied_date, ''),
      nullif(p_notes, ''),
      'saved'
    )
    returning * into v_row;

  return jsonb_build_object('allowed', true, 'job', to_jsonb(v_row));
end;
$$;
