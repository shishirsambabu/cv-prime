import { createAdminClient } from '@/lib/supabase/admin';
import { getRecipient } from '@/lib/email/recipient';
import { sendEmail, type SendOutcome } from '@/lib/email/send';
import { recordLifecycleEvent } from '@/lib/lifecycle/events';
import {
  cancellationEmail,
  newsletterWelcomeEmail,
  paymentFailedEmail,
  purchaseSuccessEmail,
  renewalEmail,
  welcomeEmail,
} from '@/lib/email/templates';

const PLAN_LABEL = 'CV Prime Pro';

function formatAmount(amount: number | null | undefined, currency = 'INR'): string | null {
  if (amount == null || Number.isNaN(amount)) return null;
  try {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency, maximumFractionDigits: 0 }).format(amount);
  } catch {
    return `${currency} ${amount}`;
  }
}

function formatDate(iso?: string | null): string | null {
  const d = iso ? new Date(iso) : new Date();
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

/** Welcome email — sent once per user, guarded by profiles.welcome_email_sent_at. */
export async function sendWelcomeEmail(userId: string): Promise<SendOutcome> {
  const admin = createAdminClient();
  if (!admin) return { status: 'no_admin' };

  const { data } = await admin
    .from('profiles')
    .select('welcome_email_sent_at')
    .eq('id', userId)
    .maybeSingle();
  if ((data as { welcome_email_sent_at?: string | null } | null)?.welcome_email_sent_at) {
    return { status: 'duplicate' };
  }

  const recipient = await getRecipient(userId);
  const outcome = await sendEmail({
    userId,
    email: welcomeEmail({ firstName: recipient.firstName }),
    idempotencyKey: `welcome:${userId}`,
    toOverride: recipient.email,
  });

  if (outcome.status === 'sent' || outcome.status === 'duplicate' || outcome.status === 'skipped') {
    await admin.from('profiles').update({ welcome_email_sent_at: new Date().toISOString() } as never).eq('id', userId);
    await recordLifecycleEvent({ userId, type: 'user.welcomed', idempotencyKey: `welcome:${userId}` });
  }
  return outcome;
}

interface PurchaseArgs {
  userId: string;
  orderId: string;
  amount?: number | null;
  currency?: string | null;
  purchaseDate?: string | null;
}

/**
 * Purchase thank-you — sent ONLY after entitlement is verified as active in the
 * database (spec §7/§29). Idempotent on the order id so duplicate webhooks or
 * the reconciliation self-heal can never double-send.
 */
export async function sendPurchaseSuccessEmail(args: PurchaseArgs): Promise<SendOutcome> {
  const admin = createAdminClient();
  if (!admin) return { status: 'no_admin' };

  // ENTITLEMENT VERIFICATION — never thank someone for access they don't have.
  const { data } = await admin.from('profiles').select('plan').eq('id', args.userId).maybeSingle();
  const plan = (data as { plan?: string } | null)?.plan;
  if (plan !== 'pro') {
    return { status: 'suppressed', reason: 'entitlement not active' };
  }

  const recipient = await getRecipient(args.userId);
  const eventId = await recordLifecycleEvent({
    userId: args.userId,
    type: 'purchase.completed',
    entityId: args.orderId,
    payload: { amount: args.amount ?? null, currency: args.currency ?? 'INR' },
    idempotencyKey: `purchase:${args.orderId}`,
  });

  return sendEmail({
    userId: args.userId,
    email: purchaseSuccessEmail({
      firstName: recipient.firstName,
      planName: PLAN_LABEL,
      amountFormatted: formatAmount(args.amount, args.currency ?? 'INR'),
      purchaseDate: formatDate(args.purchaseDate),
    }),
    idempotencyKey: `purchase-thank-you:${args.orderId}`,
    toOverride: recipient.email,
    lifecycleEventId: eventId,
  });
}

export async function sendRenewalEmail(args: PurchaseArgs): Promise<SendOutcome> {
  const recipient = await getRecipient(args.userId);
  const eventId = await recordLifecycleEvent({
    userId: args.userId,
    type: 'subscription.renewed',
    entityId: args.orderId,
    idempotencyKey: `renewal:${args.orderId}`,
  });
  return sendEmail({
    userId: args.userId,
    email: renewalEmail({
      firstName: recipient.firstName,
      planName: PLAN_LABEL,
      amountFormatted: formatAmount(args.amount, args.currency ?? 'INR'),
      purchaseDate: formatDate(args.purchaseDate),
    }),
    idempotencyKey: `renewal-receipt:${args.orderId}`,
    toOverride: recipient.email,
    lifecycleEventId: eventId,
  });
}

export async function sendPaymentFailedEmail(userId: string, orderId: string): Promise<SendOutcome> {
  const recipient = await getRecipient(userId);
  const eventId = await recordLifecycleEvent({
    userId,
    type: 'payment.failed',
    entityId: orderId,
    idempotencyKey: `payment-failed:${orderId}`,
  });
  return sendEmail({
    userId,
    email: paymentFailedEmail({ firstName: recipient.firstName }),
    idempotencyKey: `payment-failed-email:${orderId}`,
    toOverride: recipient.email,
    lifecycleEventId: eventId,
  });
}

export async function sendCancellationEmail(userId: string, accessEndsOn?: string | null): Promise<SendOutcome> {
  const recipient = await getRecipient(userId);
  // Key on the period end so one cancellation yields one email.
  const key = `cancellation:${userId}:${accessEndsOn ?? 'now'}`;
  const eventId = await recordLifecycleEvent({
    userId,
    type: 'subscription.cancelled',
    payload: { accessEndsOn: accessEndsOn ?? null },
    idempotencyKey: key,
  });
  return sendEmail({
    userId,
    email: cancellationEmail({ firstName: recipient.firstName, accessEndsOn: formatDate(accessEndsOn) }),
    idempotencyKey: `${key}:email`,
    toOverride: recipient.email,
    lifecycleEventId: eventId,
  });
}

export async function sendNewsletterWelcomeEmail(userId: string): Promise<SendOutcome> {
  const recipient = await getRecipient(userId);
  return sendEmail({
    userId,
    email: newsletterWelcomeEmail({ firstName: recipient.firstName, unsubscribeUrl: null }),
    idempotencyKey: `newsletter-welcome:${userId}`,
    toOverride: recipient.email,
    unsubscribeToken: recipient.unsubscribeToken,
  });
}
