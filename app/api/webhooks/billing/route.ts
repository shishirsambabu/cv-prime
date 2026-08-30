import { NextResponse } from 'next/server';
import { z } from 'zod';
import { verifyCashfreeWebhookSignature } from '@/lib/cashfree';
import { downgradeToFree, upgradeToPro } from '@/lib/plan';
import {
  sendCancellationEmail,
  sendPaymentFailedEmail,
  sendPurchaseSuccessEmail,
  sendRenewalEmail,
} from '@/lib/email/lifecycle';
import { createAdminClient } from '@/lib/supabase/admin';
import { createClient } from '@/lib/supabase/server';
import type { Database } from '@/types/database.types';

// Webhooks carry no user session, so prefer the service-role client to bypass RLS.
function db(): ReturnType<typeof createClient> {
  return (createAdminClient() ?? createClient()) as ReturnType<typeof createClient>;
}

export const runtime = 'nodejs';

const webhookSchema = z.object({
  type: z.string(),
  data: z.record(z.unknown()).optional().default({}),
});

const ACTIVE_SUBSCRIPTION_STATUSES = new Set(['ACTIVE']);
const TERMINAL_SUBSCRIPTION_STATUSES = new Set([
  'CANCELLED',
  'CUSTOMER_CANCELLED',
  'EXPIRED',
  'LINK_EXPIRED',
  'CARD_EXPIRED',
  'TERMINATED',
]);
const ACTIVE_AUTH_STATUSES = new Set(['ACTIVE', 'SUCCESS', 'AUTHORIZED', 'APPROVED']);
const FAILED_AUTH_STATUSES = new Set(['FAILED', 'CANCELLED', 'REJECTED', 'EXPIRED']);
const SUCCESS_PAYMENT_STATUSES = new Set(['SUCCESS', 'PAID', 'CAPTURED', 'COMPLETED']);
const FAILED_PAYMENT_STATUSES = new Set(['FAILED', 'DECLINED', 'USER_DROPPED', 'VOID', 'NOT_PAID']);

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' && !Array.isArray(value) ? (value as Record<string, unknown>) : {};
}

function asString(value: unknown): string | null {
  if (typeof value === 'string' && value.length > 0) {
    return value;
  }

  if (typeof value === 'number') {
    return String(value);
  }

  return null;
}

function upper(value: string | null): string | null {
  return value ? value.toUpperCase() : null;
}

function extractDetails(data: Record<string, unknown>): {
  subscriptionId: string | null;
  providerSubscriptionId: string | null;
  subscriptionStatus: string | null;
  authorizationStatus: string | null;
  currentPeriodStart: string | null;
  currentPeriodEnd: string | null;
  cancelAt: string | null;
  paymentStatus: string | null;
  paymentAmount: number | null;
  paymentCurrency: string;
  userIdFromTags: string | null;
} {
  const subscription = asRecord(data.subscription_details ?? data.subscription ?? data);
  const authorization = asRecord(data.authorization_details ?? data.authorization ?? data);
  const payment = asRecord(data.payment_details ?? data.payment ?? data.payment_gateway_details ?? data);
  const order = asRecord(data.order);
  const orderTags = asRecord(order.order_tags);
  const customer = asRecord(subscription.customer_details ?? data.customer_details ?? data.customer ?? data);
  const rawTags = subscription.subscription_tags ?? data.subscription_tags ?? data.tags;
  const tags = asRecord(rawTags ?? null);
  const paymentAmount = payment.payment_amount ?? payment.amount ?? order.order_amount;

  return {
    subscriptionId: asString(
      subscription.subscription_id ?? data.subscription_id ?? payment.subscription_id
    ),
    providerSubscriptionId: asString(subscription.cf_subscription_id ?? data.cf_subscription_id),
    subscriptionStatus: upper(asString(subscription.subscription_status ?? data.subscription_status)),
    authorizationStatus: upper(asString(authorization.authorization_status ?? data.authorization_status)),
    currentPeriodStart: asString(
      subscription.current_period_start ?? subscription.subscription_first_charge_time ?? data.current_period_start
    ),
    currentPeriodEnd: asString(
      subscription.current_period_end ?? subscription.subscription_expiry_time ?? data.current_period_end
    ),
    cancelAt: asString(subscription.cancel_at ?? subscription.subscription_cancelled_at ?? data.cancel_at),
    paymentStatus: upper(asString(payment.payment_status ?? payment.status ?? data.payment_status ?? data.status)),
    paymentAmount: typeof paymentAmount === 'number' ? paymentAmount : null,
    paymentCurrency: asString(payment.payment_currency ?? payment.currency ?? order.order_currency) ?? 'INR',
    userIdFromTags:
      asString(tags.userId ?? tags.user_id) ??
      asString(orderTags.userId ?? orderTags.user_id) ??
      asString(customer.customer_id ?? data.customer_id),
  };
}

async function resolveUserId(subscriptionId: string | null, userIdFromTags: string | null): Promise<string | null> {
  if (userIdFromTags) {
    return userIdFromTags;
  }

  if (!subscriptionId) {
    return null;
  }

  const supabase = db();
  const { data } = await supabase
    .from('profiles')
    .select('id')
    .eq('billing_subscription_id', subscriptionId)
    .maybeSingle();

  return (data as { id?: string } | null)?.id ?? null;
}

async function updateSubscriptionState({
  userId,
  subscriptionId,
  providerSubscriptionId,
  subscriptionStatus,
  authorizationStatus,
  currentPeriodStart,
  currentPeriodEnd,
  cancelAt,
  paymentStatus,
}: {
  userId: string;
  subscriptionId: string | null;
  providerSubscriptionId: string | null;
  subscriptionStatus: string | null;
  authorizationStatus: string | null;
  currentPeriodStart: string | null;
  currentPeriodEnd: string | null;
  cancelAt: string | null;
  paymentStatus: string | null;
}): Promise<void> {
  const supabase = db();
  const update = {
    ...(subscriptionId ? { billing_subscription_id: subscriptionId } : {}),
    ...(providerSubscriptionId ? { billing_provider_subscription_id: providerSubscriptionId } : {}),
    ...(subscriptionStatus ? { billing_subscription_status: subscriptionStatus } : {}),
    ...(authorizationStatus ? { billing_authorization_status: authorizationStatus } : {}),
    ...(currentPeriodStart ? { billing_current_period_start: currentPeriodStart } : {}),
    ...(currentPeriodEnd ? { billing_current_period_end: currentPeriodEnd } : {}),
    ...(cancelAt ? { billing_cancel_at: cancelAt } : {}),
    ...(paymentStatus ? { billing_last_payment_status: paymentStatus } : {}),
  };

  if (Object.keys(update).length === 0) {
    return;
  }

  const { error } = await supabase.from('profiles').update(update as never).eq('id', userId);
  if (error) {
    throw new Error(error.message);
  }
}

/** Count a user's prior successful payments — used to tell an initial purchase
 *  from a renewal so we send the right email. */
async function countPriorSuccessfulPayments(userId: string): Promise<number> {
  const supabase = db();
  const { count } = await supabase
    .from('payments')
    .select('id', { count: 'exact', head: true })
    .eq('user_id', userId)
    .in('status', ['SUCCESS', 'PAID', 'CAPTURED', 'COMPLETED']);
  return count ?? 0;
}

/** Idempotent payment write — a duplicate (gateway, order id) is ignored so a
 *  webhook firing five times records the payment exactly once. */
async function upsertPaymentRecord({
  userId,
  orderId,
  amount,
  currency,
  status,
}: {
  userId: string;
  orderId: string;
  amount: number;
  currency: string;
  status: string;
}): Promise<void> {
  const supabase = db();
  const payload: Database['public']['Tables']['payments']['Insert'] = {
    user_id: userId,
    gateway: 'cashfree',
    gateway_order_id: orderId,
    amount: Math.round(amount * 100),
    currency,
    status,
  };
  const { error } = await supabase
    .from('payments')
    .upsert([payload] as never, { onConflict: 'gateway,gateway_order_id', ignoreDuplicates: true });

  if (error) {
    throw new Error(error.message);
  }
}

export async function POST(req: Request): Promise<NextResponse> {
  const signature = req.headers.get('x-webhook-signature');
  const timestamp = req.headers.get('x-webhook-timestamp');
  const rawBody = await req.text();

  if (!signature || !timestamp) {
    return NextResponse.json({ error: 'Missing webhook signature' }, { status: 400 });
  }

  try {
    if (!verifyCashfreeWebhookSignature({ body: rawBody, signature, timestamp })) {
      return NextResponse.json({ error: 'Invalid webhook signature' }, { status: 400 });
    }
  } catch (error) {
    if (error instanceof Error && error.message === 'CASHFREE_NOT_CONFIGURED') {
      return NextResponse.json(
        { error: 'BILLING_NOT_CONFIGURED', message: 'Billing webhook secret is not configured.' },
        { status: 500 }
      );
    }

    throw error;
  }

  const parsedJson = (() => {
    try {
      return JSON.parse(rawBody) as unknown;
    } catch {
      return null;
    }
  })();
  if (!parsedJson) {
    return NextResponse.json({ error: 'Invalid webhook payload' }, { status: 400 });
  }

  const webhook = webhookSchema.safeParse(parsedJson);
  if (!webhook.success) {
    return NextResponse.json({ error: webhook.error.flatten() }, { status: 400 });
  }

  const rawData = webhook.data.data;
  const details = extractDetails(rawData);
  const userId = await resolveUserId(details.subscriptionId, details.userIdFromTags);
  const orderData = asRecord(rawData.order);
  const paymentData = asRecord(rawData.payment_details ?? rawData.payment ?? rawData.payment_gateway_details);
  const orderId =
    details.subscriptionId ??
    asString(orderData.order_id ?? rawData.order_id ?? paymentData.order_id) ??
    null;

  // eslint-disable-next-line no-console
  console.log('[webhook/billing]', {
    type: webhook.data.type,
    userId,
    orderId,
    paymentStatus: details.paymentStatus,
    subscriptionStatus: details.subscriptionStatus,
    authorizationStatus: details.authorizationStatus,
  });

  if (!userId) {
    // eslint-disable-next-line no-console
    console.warn('[webhook/billing] no userId resolved - ignoring event', { type: webhook.data.type });
    return NextResponse.json({ ok: true, ignored: true });
  }

  if (details.subscriptionId) {
    await updateSubscriptionState({ userId, ...details });
  }

  const isActiveStatus =
    (details.subscriptionStatus ? ACTIVE_SUBSCRIPTION_STATUSES.has(details.subscriptionStatus) : false) ||
    (details.authorizationStatus ? ACTIVE_AUTH_STATUSES.has(details.authorizationStatus) : false) ||
    (details.paymentStatus ? SUCCESS_PAYMENT_STATUSES.has(details.paymentStatus) : false);
  const isTerminalStatus =
    (details.subscriptionStatus ? TERMINAL_SUBSCRIPTION_STATUSES.has(details.subscriptionStatus) : false) ||
    (details.authorizationStatus ? FAILED_AUTH_STATUSES.has(details.authorizationStatus) : false);

  const hasSuccessfulPayment = Boolean(
    details.paymentStatus &&
      SUCCESS_PAYMENT_STATUSES.has(details.paymentStatus) &&
      details.paymentAmount !== null &&
      orderId
  );
  const isFailedPayment = Boolean(
    details.paymentStatus && FAILED_PAYMENT_STATUSES.has(details.paymentStatus) && !isActiveStatus
  );

  // Count prior successful payments BEFORE recording this one, so we can tell
  // an initial purchase (welcome email) from a renewal (receipt email).
  const priorSuccessfulPayments = hasSuccessfulPayment
    ? await countPriorSuccessfulPayments(userId)
    : 0;

  // 1) Commit entitlement first — this is the state customers actually paid for.
  if (isActiveStatus) {
    await upgradeToPro(userId);
  }
  if (isTerminalStatus && details.subscriptionId) {
    await downgradeToFree(userId);
  }
  if (hasSuccessfulPayment && orderId) {
    await upsertPaymentRecord({
      userId,
      orderId,
      amount: details.paymentAmount as number,
      currency: details.paymentCurrency,
      status: details.paymentStatus as string,
    });
  }

  // 2) Dispatch lifecycle email AFTER entitlement is committed. Every send is
  //    idempotent on the order id, so duplicate webhooks never double-email.
  //    Email failures must never fail the webhook (Cashfree would retry-storm);
  //    the email-health cron re-sends anything left queued.
  try {
    if (hasSuccessfulPayment && orderId) {
      if (priorSuccessfulPayments === 0) {
        await sendPurchaseSuccessEmail({
          userId,
          orderId,
          amount: details.paymentAmount,
          currency: details.paymentCurrency,
          purchaseDate: details.currentPeriodStart,
        });
      } else {
        await sendRenewalEmail({
          userId,
          orderId,
          amount: details.paymentAmount,
          currency: details.paymentCurrency,
          purchaseDate: details.currentPeriodStart,
        });
      }
    } else if (isFailedPayment && orderId) {
      await sendPaymentFailedEmail(userId, orderId);
    }

    if (isTerminalStatus && details.subscriptionId) {
      await sendCancellationEmail(userId, details.currentPeriodEnd ?? details.cancelAt);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('[webhook/billing] lifecycle email dispatch failed', error);
  }

  return NextResponse.json({ ok: true });
}
