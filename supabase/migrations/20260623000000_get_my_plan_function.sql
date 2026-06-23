-- Read the caller's own plan/usage while bypassing row-level security.
--
-- Why this exists: the dashboard must know whether the signed-in user is Pro.
-- When the service-role key is not configured on the server, the only client
-- available is the cookie-based one, which is subject to RLS. If the profiles
-- table has no permissive SELECT policy for `auth.uid() = id`, that read
-- silently returns zero rows and the user is shown as "free" even though their
-- row says "pro".
--
-- A SECURITY DEFINER function runs with the privileges of its owner (which
-- bypasses RLS), but `auth.uid()` still resolves to the *calling* user's id
-- from their JWT. So this returns only the caller's own row, safely, without
-- needing the service-role key.

create or replace function public.get_my_plan()
returns table (plan text, pdf_exports_used integer)
language sql
security definer
set search_path = public
as $$
  select coalesce(p.plan, 'free')::text,
         0::integer
  from public.profiles p
  where p.id = auth.uid();
$$;

revoke all on function public.get_my_plan() from public;
grant execute on function public.get_my_plan() to authenticated;
