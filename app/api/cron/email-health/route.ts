import { NextResponse } from 'next/server';
import { isAuthorizedCron } from '@/lib/cronAuth';
import { createAdminClient } from '@/lib/supabase/admin';
import {
  sendCancellationEmail,
  sendNewsletterWelcomeEmail,
  sendPaymentFailedEmail,
  sendPurchaseSuccessEmail,
  sendRenewalEmail,
  sendWelcomeEmail,
} from '@/lib/email/lifecycle';

export const runtime = 'nodejs';
export const maxDuration = 60;

const STUCK_AFTER_MS = 10 * 60 * 1000;
const MAX_PER_RUN = 100;

interface StuckRow {
  id: string;
  user_id: string | null;
  email_type: string;
  lifecycle_event_id: string | null;
}

/**
 * Retry emails that were queued but never sent (transient provider failure,
 * crash between claim and send, etc.). Re-drives the matching idempotent
 * lifecycle sender, which re-attempts the provider call on the existing row.
 */
export async function GET(req: Request): Promise<NextResponse> {
  if (!isAuthorizedCron(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const admin = createAdminClient();
  if (!admin) {
    return NextResponse.json({ error: 'NO_ADMIN' }, { status: 500 });
  }

  const cutoff = new Date(Date.now() - STUCK_AFTER_MS).toISOString();
  const { data } = await admin
    .from('email_messages')
    .select('id, user_id, email_type, lifecycle_event_id')
    .eq('status', 'queued')
    .lt('created_at', cutoff)
    .limit(MAX_PER_RUN);

  const rows = (data as StuckRow[] | null) ?? [];
  let retried = 0;
  let recovered = 0;

  for (const row of rows) {
    if (!row.user_id) continue;
    // Recover the order id / payload from the linked lifecycle event.
    let orderId: string | null = null;
    let accessEndsOn: string | null = null;
    if (row.lifecycle_event_id) {
      const { data: ev } = await admin
        .from('lifecycle_events')
        .select('entity_id, payload')
        .eq('id', row.lifecycle_event_id)
        .maybeSingle();
      const event = ev as { entity_id: string | null; payload: Record<string, unknown> | null } | null;
      orderId = event?.entity_id ?? null;
      accessEndsOn = (event?.payload?.accessEndsOn as string | undefined) ?? null;
    }

    retried += 1;
    let outcome;
    switch (row.email_type) {
      case 'purchase_success':
        if (orderId) outcome = await sendPurchaseSuccessEmail({ userId: row.user_id, orderId });
        break;
      case 'renewal':
        if (orderId) outcome = await sendRenewalEmail({ userId: row.user_id, orderId });
        break;
      case 'payment_failed':
        if (orderId) outcome = await sendPaymentFailedEmail(row.user_id, orderId);
        break;
      case 'cancellation':
        outcome = await sendCancellationEmail(row.user_id, accessEndsOn);
        break;
      case 'welcome':
        outcome = await sendWelcomeEmail(row.user_id);
        break;
      case 'newsletter_welcome':
        outcome = await sendNewsletterWelcomeEmail(row.user_id);
        break;
      default:
        break;
    }
    if (outcome?.status === 'sent') recovered += 1;
  }

  const summary = { stuck: rows.length, retried, recovered };
  // eslint-disable-next-line no-console
  console.log('[cron/email-health]', summary);
  return NextResponse.json({ ok: true, ...summary });
}
