import { NextResponse } from 'next/server';
import { getAdminUserId } from '@/lib/adminAuth';
import { sendEmail } from '@/lib/email/send';
import { welcomeEmail } from '@/lib/email/templates';
import { createClient } from '@/lib/supabase/server';

export const runtime = 'nodejs';

/**
 * Admin-only diagnostic (spec §54). Sends a one-off test email to the admin's
 * own address, bypassing the welcome guard with a fresh idempotency key each
 * call. Isolates "does the key + domain actually deliver" from the lifecycle
 * triggers. Returns the exact send outcome so failures are visible immediately.
 */
export async function GET(): Promise<NextResponse> {
  const adminUserId = await getAdminUserId();
  if (!adminUserId) {
    return NextResponse.json(
      { error: 'Forbidden', hint: 'Set ADMIN_EMAILS and sign in as that user.' },
      { status: 403 }
    );
  }

  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const to = user?.email ?? null;
  if (!to) {
    return NextResponse.json({ error: 'No email on admin account' }, { status: 400 });
  }

  const outcome = await sendEmail({
    userId: adminUserId,
    email: welcomeEmail({ firstName: 'there' }),
    idempotencyKey: `test-email:${adminUserId}:${Date.now()}`,
    toOverride: to,
  });

  const diagnostics = {
    to,
    outcome,
    resendKeyConfigured: Boolean(process.env.RESEND_API_KEY),
    serviceRoleConfigured: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY),
    from: process.env.EMAIL_FROM ?? 'CV Prime <support@cv-prime.in> (default)',
  };

  // outcome.status: sent = success; skipped = no RESEND_API_KEY in this deploy;
  // no_admin = no SUPABASE_SERVICE_ROLE_KEY; failed = Resend rejected (see reason).
  return NextResponse.json(diagnostics, { status: outcome.status === 'sent' ? 200 : 500 });
}
