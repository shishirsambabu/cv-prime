import { createHmac, timingSafeEqual } from 'crypto';
import { z } from 'zod';

export type BillingCycle = 'monthly';
export type CashfreeEnvironment = 'sandbox' | 'production';

export interface CashfreePlanPrice {
  billingCycle: BillingCycle;
  amount: number;
  currency: 'INR';
  displayPrice: string;
  cadence: string;
  description: string;
}

export interface CashfreeSubscription {
  subscriptionId: string;
  providerSubscriptionId: string | null;
  status: string;
  authStatus: string | null;
  currentPeriodStart: string | null;
  currentPeriodEnd: string | null;
  authorizationUrl: string | null;
  subscriptionSessionId: string | null;
}

export interface CreateCashfreeSubscriptionInput {
  userId: string;
  email?: string;
  phone?: string;
}

interface CashfreeRequestOptions {
  method: 'GET' | 'POST';
  body?: unknown;
}

const CASHFREE_APP_ID = '10128623e81840ab457ba85c3ac2682101';
const CASHFREE_API_VERSION = process.env.CASHFREE_API_VERSION ?? '2025-01-01';

const planPrices: Record<BillingCycle, CashfreePlanPrice> = {
  monthly: {
    billingCycle: 'monthly',
    amount: 249,
    currency: 'INR',
    displayPrice: 'Rs 249',
    cadence: 'per month',
    description: 'CV Prime Pro monthly',
  },
};

const subscriptionSchema = z.object({
  subscription_id: z.string(),
  cf_subscription_id: z.union([z.string(), z.number()]).optional().nullable(),
  subscription_status: z.string().optional().default('INITIALIZED'),
  authorization_status: z.string().optional().nullable(),
  current_period_start: z.string().optional().nullable(),
  current_period_end: z.string().optional().nullable(),
  subscription_first_charge_time: z.string().optional().nullable(),
  subscription_expiry_time: z.string().optional().nullable(),
  authorization_url: z.string().url().optional().nullable(),
  subscription_session_id: z.string().optional().nullable(),
  payment_session_id: z.string().optional().nullable(),
  data: z
    .object({
      authorization_url: z.string().url().optional().nullable(),
      subscription_session_id: z.string().optional().nullable(),
      payment_session_id: z.string().optional().nullable(),
    })
    .optional(),
});

export class CashfreeRequestError extends Error {
  constructor(
    message: string,
    readonly status: number
  ) {
    super(message);
    this.name = 'CashfreeRequestError';
  }
}

function getCashfreeCredentials(): { appId: string; secretKey: string } {
  const appId = process.env.CASHFREE_APP_ID ?? CASHFREE_APP_ID;
  const secretKey = process.env.CASHFREE_SECRET_KEY;

  if (!appId || !secretKey) {
    throw new Error('CASHFREE_NOT_CONFIGURED');
  }

  return { appId, secretKey };
}

export function getCashfreeEnvironment(): CashfreeEnvironment {
  return process.env.CASHFREE_ENV === 'sandbox' ? 'sandbox' : 'production';
}

function getCashfreeApiBaseUrl(): string {
  return getCashfreeEnvironment() === 'sandbox'
    ? 'https://sandbox.cashfree.com/pg'
    : 'https://api.cashfree.com/pg';
}

async function cashfreeRequest<T>(
  path: string,
  options: CashfreeRequestOptions,
  schema: z.ZodType<T>
): Promise<T> {
  const { appId, secretKey } = getCashfreeCredentials();
  const response = await fetch(`${getCashfreeApiBaseUrl()}${path}`, {
    method: options.method,
    headers: {
      'Content-Type': 'application/json',
      'x-api-version': CASHFREE_API_VERSION,
      'x-client-id': appId,
      'x-client-secret': secretKey,
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  const payload = (await response.json().catch(() => null)) as unknown;

  if (!response.ok) {
    throw new CashfreeRequestError('Cashfree request failed', response.status);
  }

  return schema.parse(payload);
}

function safeCompareBase64(expected: string, received: string): boolean {
  const expectedBuffer = Buffer.from(expected);
  const receivedBuffer = Buffer.from(received);

  if (expectedBuffer.length !== receivedBuffer.length) {
    return false;
  }

  return timingSafeEqual(expectedBuffer, receivedBuffer);
}

export function getPlanPrice(billingCycle: BillingCycle): CashfreePlanPrice {
  return planPrices[billingCycle];
}

export function getAllPlanPrices(): CashfreePlanPrice[] {
  return [planPrices.monthly];
}

function toCashfreeSubscription(raw: z.output<typeof subscriptionSchema>): CashfreeSubscription {
  return {
    subscriptionId: raw.subscription_id,
    providerSubscriptionId: raw.cf_subscription_id ? String(raw.cf_subscription_id) : null,
    status: raw.subscription_status,
    authStatus: raw.authorization_status ?? null,
    currentPeriodStart: raw.current_period_start ?? raw.subscription_first_charge_time ?? null,
    currentPeriodEnd: raw.current_period_end ?? raw.subscription_expiry_time ?? null,
    authorizationUrl: raw.authorization_url ?? raw.data?.authorization_url ?? null,
    subscriptionSessionId:
      raw.subscription_session_id ??
      raw.payment_session_id ??
      raw.data?.subscription_session_id ??
      raw.data?.payment_session_id ??
      null,
  };
}

export async function createCashfreeSubscription({
  userId,
  email,
  phone,
}: CreateCashfreeSubscriptionInput): Promise<CashfreeSubscription> {
  const price = getPlanPrice('monthly');
  const subscriptionId = `cvp_sub_${userId.slice(0, 8)}_${Date.now()}`.slice(0, 45);
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://cv-prime.in';
  const rawSubscription = await cashfreeRequest(
    process.env.CASHFREE_SUBSCRIPTION_CREATE_PATH ?? '/subscriptions',
    {
      method: 'POST',
      body: {
        subscription_id: subscriptionId,
        subscription_note: price.description,
        customer_details: {
          customer_id: userId,
          customer_email: email ?? 'support@cv-prime.in',
          customer_phone: phone ?? process.env.CASHFREE_DEFAULT_CUSTOMER_PHONE ?? '9999999999',
        },
        plan_details: {
          plan_id: process.env.CASHFREE_MONTHLY_PLAN_ID ?? 'cv_prime_pro_monthly',
          plan_name: 'CV Prime Pro Monthly',
          plan_type: 'PERIODIC',
          plan_recurring_amount: price.amount,
          plan_max_amount: price.amount,
          plan_currency: price.currency,
          plan_interval_type: 'MONTH',
          plan_intervals: 1,
        },
        authorization_details: {
          authorization_amount: price.amount,
          authorization_amount_refund: false,
          payment_methods: ['upi', 'card'],
        },
        subscription_meta: {
          return_url: `${appUrl}/settings?subscription_id=${subscriptionId}`,
          notification_url: `${appUrl}/api/webhooks/billing`,
        },
        subscription_tags: {
          userId,
          plan: 'pro',
          cadence: 'monthly',
        },
      },
    },
    subscriptionSchema
  );

  return toCashfreeSubscription(subscriptionSchema.parse(rawSubscription));
}

export async function cancelCashfreeSubscription(subscriptionId: string): Promise<void> {
  const pathTemplate =
    process.env.CASHFREE_SUBSCRIPTION_CANCEL_PATH ?? '/subscriptions/{subscriptionId}/cancel';
  await cashfreeRequest(
    pathTemplate.replace('{subscriptionId}', encodeURIComponent(subscriptionId)),
    { method: 'POST', body: { cancellation_reason: 'customer_requested' } },
    z.unknown()
  );
}

export function verifyCashfreeWebhookSignature({
  body,
  signature,
  timestamp,
}: {
  body: string;
  signature: string;
  timestamp: string;
}): boolean {
  // Cashfree signs webhooks with HMAC-SHA256 over `timestamp + rawBody`.
  // Payment Gateway webhooks are signed with the client secret key, while some
  // setups use a dedicated webhook secret. Accept a match against either so the
  // upgrade fires regardless of which secret Cashfree actually used.
  const candidates = [
    process.env.CASHFREE_WEBHOOK_SECRET,
    process.env.CASHFREE_SECRET_KEY,
  ].filter((s): s is string => Boolean(s));

  if (candidates.length === 0) {
    throw new Error('CASHFREE_NOT_CONFIGURED');
  }

  return candidates.some((secret) => {
    const expected = createHmac('sha256', secret).update(`${timestamp}${body}`).digest('base64');
    return safeCompareBase64(expected, signature);
  });
}

export function isCashfreeRequestError(error: unknown): error is CashfreeRequestError {
  return error instanceof CashfreeRequestError;
}
