-- Follow-up to 20260921000000_atomic_job_application_insert.sql.
--
-- 1. That function inserted `nullif(p_applied_date, '')` — a text expression —
--    into `job_applications.applied_date`, which is a `date` column. Postgres
--    has no implicit/assignment cast from text to date, so every call that got
--    past the plan check failed with "column applied_date is of type date but
--    expression is of type text". The API route treats an RPC error as "the
--    migration is not applied yet" and silently falls back to the old
--    count-then-insert path, so the race the function was written to close
--    was still open. The cast is now explicit.
-- 2. The function is `security definer` and took the user id from the caller
--    without comparing it to the session, so any signed-in user could create
--    rows in (and lock the profile row of) another account. It now refuses a
--    caller acting for someone else, and anonymous callers cannot execute it.
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
  if auth.uid() is null or auth.uid() <> p_user_id then
    return jsonb_build_object('allowed', false, 'error', 'NOT_FOUND');
  end if;

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
      nullif(p_applied_date, '')::date,
      nullif(p_notes, ''),
      'saved'
    )
    returning * into v_row;

  return jsonb_build_object('allowed', true, 'job', to_jsonb(v_row));
end;
$$;

revoke all on function public.create_job_application_atomic(uuid, text, text, text, text, text) from public;
revoke all on function public.create_job_application_atomic(uuid, text, text, text, text, text) from anon;
grant execute on function public.create_job_application_atomic(uuid, text, text, text, text, text) to authenticated;
