import { createHmac, timingSafeEqual } from 'crypto';
import { z } from 'zod';

export type BillingCycle = 'monthly' | 'annual';
export type CashfreeEnvironment = 'sandbox' | 'production';

export interface CashfreePlanPrice {
  billingCycle: BillingCycle;
  amount: number;
  currency: 'INR';
  displayPrice: string;
  cadence: string;
  description: string;
}

export interface CashfreeOrder {
  id: string;
  amount: number;
  currency: string;
  status: string;
  paymentSessionId: string;
  notes: Record<string, string>;
}

export interface CashfreePayment {
  id: string;
  amount: number;
  currency: string;
  orderId: string;
  status: string;
}

export interface CreateCashfreeOrderInput {
  userId: string;
  billingCycle: BillingCycle;
  email?: string;
}

interface CashfreeRequestOptions {
  method: 'GET' | 'POST';
  body?: unknown;
}

const CASHFREE_APP_ID = '10128623e81840ab457ba85c3ac2682101';
const CASHFREE_API_VERSION = '2023-08-01';

const planPrices: Record<BillingCycle, CashfreePlanPrice> = {
  monthly: {
    billingCycle: 'monthly',
    amount: 249,
    currency: 'INR',
    displayPrice: 'Rs 249',
    cadence: 'per month',
    description: 'CV Prime Pro monthly',
  },
  annual: {
    billingCycle: 'annual',
    amount: 1999,
    currency: 'INR',
    displayPrice: 'Rs 1,999',
    cadence: 'per year',
    description: 'CV Prime Pro annual',
  },
};

const orderSchema = z.object({
  order_id: z.string(),
  order_amount: z.number(),
  order_currency: z.string(),
  order_status: z.string(),
  payment_session_id: z.string(),
  order_meta: z
    .object({
      return_url: z.string().optional(),
      notify_url: z.string().optional(),
    })
    .optional(),
  order_tags: z.record(z.string()).optional(),
});

const fetchedOrderSchema = orderSchema.extend({
  payment_session_id: z.string().optional().default(''),
});

const paymentSchema = z
  .object({
    cf_payment_id: z.union([z.string(), z.number()]).transform(String),
    order_id: z.string(),
    payment_amount: z.number(),
    payment_currency: z.string().optional().default('INR'),
    payment_status: z.string(),
  })
  .array();

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

function getWebhookSecret(): string {
  const secret = process.env.CASHFREE_WEBHOOK_SECRET ?? process.env.CASHFREE_SECRET_KEY;

  if (!secret) {
    throw new Error('CASHFREE_NOT_CONFIGURED');
  }

  return secret;
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

function toCashfreeOrder(rawOrder: {
  order_id: string;
  order_amount: number;
  order_currency: string;
  order_status: string;
  payment_session_id?: string;
  order_tags?: Record<string, string>;
}): CashfreeOrder {
  return {
    id: rawOrder.order_id,
    amount: rawOrder.order_amount,
    currency: rawOrder.order_currency,
    status: rawOrder.order_status,
    paymentSessionId: rawOrder.payment_session_id ?? '',
    notes: rawOrder.order_tags ?? {},
  };
}

function toCashfreePayment(rawPayment: {
  cf_payment_id: string | number;
  order_id: string;
  payment_amount: number;
  payment_currency?: string;
  payment_status: string;
}): CashfreePayment {
  return {
    id: String(rawPayment.cf_payment_id),
    amount: rawPayment.payment_amount,
    currency: rawPayment.payment_currency ?? 'INR',
    orderId: rawPayment.order_id,
    status: rawPayment.payment_status,
  };
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
  return [planPrices.monthly, planPrices.annual];
}

export async function createCashfreeOrder({
  userId,
  billingCycle,
  email,
}: CreateCashfreeOrderInput): Promise<CashfreeOrder> {
  const price = getPlanPrice(billingCycle);
  const orderId = `cvp_${userId.slice(0, 8)}_${Date.now()}`.slice(0, 45);
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://cv-prime.in';
  const rawOrder = await cashfreeRequest(
    '/orders',
    {
      method: 'POST',
      body: {
        order_id: orderId,
        order_amount: price.amount,
        order_currency: price.currency,
        customer_details: {
          customer_id: userId,
          customer_email: email ?? 'support@cv-prime.in',
          customer_phone: process.env.CASHFREE_DEFAULT_CUSTOMER_PHONE ?? '9999999999',
        },
        order_meta: {
          return_url: `${appUrl}/settings?cashfree_order_id=${orderId}`,
          notify_url: `${appUrl}/api/webhooks/cashfree`,
        },
        order_tags: {
          userId,
          plan: 'pro',
          billingCycle,
          email: email ?? '',
        },
      },
    },
    orderSchema
  );

  return toCashfreeOrder(rawOrder);
}

export async function fetchCashfreeOrder(orderId: string): Promise<CashfreeOrder> {
  const rawOrder = await cashfreeRequest(`/orders/${orderId}`, { method: 'GET' }, fetchedOrderSchema);
  return toCashfreeOrder(rawOrder);
}

export async function fetchCashfreePayments(orderId: string): Promise<CashfreePayment[]> {
  const rawPayments = await cashfreeRequest(`/orders/${orderId}/payments`, { method: 'GET' }, paymentSchema);
  return rawPayments.map(toCashfreePayment);
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
  const expected = createHmac('sha256', getWebhookSecret()).update(`${timestamp}${body}`).digest('base64');
  return safeCompareBase64(expected, signature);
}

export function isCashfreeRequestError(error: unknown): error is CashfreeRequestError {
  return error instanceof CashfreeRequestError;
}
