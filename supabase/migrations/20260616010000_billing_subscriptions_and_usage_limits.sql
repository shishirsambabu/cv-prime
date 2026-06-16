alter table public.profiles
  add column if not exists cv_creations_used integer not null default 0,
  add column if not exists billing_subscription_id text,
  add column if not exists billing_provider_subscription_id text,
  add column if not exists billing_subscription_status text,
  add column if not exists billing_authorization_status text,
  add column if not exists billing_current_period_start timestamptz,
  add column if not exists billing_current_period_end timestamptz,
  add column if not exists billing_cancel_at timestamptz,
  add column if not exists billing_last_payment_status text;

create table if not exists public.export_tokens (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  cv_id uuid not null references public.cvs(id) on delete cascade,
  used boolean not null default false,
  expires_at timestamptz not null default (now() + interval '10 minutes'),
  created_at timestamptz not null default now()
);

create index if not exists export_tokens_user_cv_idx
  on public.export_tokens(user_id, cv_id, expires_at desc);

alter table public.export_tokens enable row level security;

drop policy if exists "own export tokens" on public.export_tokens;
create policy "own export tokens" on public.export_tokens
  for select using (auth.uid() = user_id);

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
