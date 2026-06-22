import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

type ProfileDebugRow = {
  id: string;
  plan: 'free' | 'pro' | null;
  pdf_exports_used: number | null;
  cv_creations_used: number | null;
} | null;

export async function GET(): Promise<NextResponse> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const sessionRead = await supabase
    .from('profiles')
    .select('id, plan, pdf_exports_used, cv_creations_used')
    .eq('id', user.id)
    .maybeSingle();

  const admin = createAdminClient();
  const adminRead = admin
    ? await admin
        .from('profiles')
        .select('id, plan, pdf_exports_used, cv_creations_used')
        .eq('id', user.id)
        .maybeSingle()
    : null;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? null;

  return NextResponse.json({
    user: {
      id: user.id,
      email: user.email ?? null,
    },
    env: {
      hasAnonKey: Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
      hasServiceRoleKey: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY),
      supabaseHost: supabaseUrl ? new URL(supabaseUrl).host : null,
    },
    sessionProfile: {
      data: (sessionRead.data as ProfileDebugRow) ?? null,
      error: sessionRead.error?.message ?? null,
    },
    adminProfile: {
      data: (adminRead?.data as ProfileDebugRow | undefined) ?? null,
      error: adminRead?.error?.message ?? null,
      available: Boolean(admin),
    },
  });
}
