do $$
begin
  if exists (
    select 1
    from information_schema.table_constraints
    where constraint_schema = 'public'
      and table_name = 'payments'
      and constraint_name = 'payments_gateway_check'
  ) then
    alter table public.payments drop constraint payments_gateway_check;
  end if;
end $$;

alter table public.payments
  add constraint payments_gateway_check
  check (gateway in ('cashfree'));
