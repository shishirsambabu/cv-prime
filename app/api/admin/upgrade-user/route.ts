import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';

export const runtime = 'nodejs';

// ONE-TIME admin route to manually upgrade a user to Pro.
// DELETE THIS FILE immediately after use.
export async function POST(req: Request): Promise<NextResponse> {
  const secret = req.headers.get('x-admin-secret');
  if (secret !== process.env.ADMIN_UPGRADE_SECRET) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const { email } = (await req.json()) as { email?: string };
  if (!email) return NextResponse.json({ error: 'email required' }, { status: 400 });

  const admin = createAdminClient();
  if (!admin) return NextResponse.json({ error: 'Admin client not available' }, { status: 500 });

  // Look up user by email
  const { data: authUser, error: authErr } = await admin.auth.admin.listUsers();
  if (authErr) return NextResponse.json({ error: authErr.message }, { status: 500 });

  const user = authUser.users.find((u) => u.email === email);
  if (!user) return NextResponse.json({ error: `No user found with email ${email}` }, { status: 404 });

  // Upgrade plan
  const { error: updateErr } = await admin
    .from('profiles')
    .update({ plan: 'pro' } as never)
    .eq('id', user.id);

  if (updateErr) return NextResponse.json({ error: updateErr.message }, { status: 500 });

  return NextResponse.json({ ok: true, userId: user.id, email, plan: 'pro' });
}
