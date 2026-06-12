import { createHmac, timingSafeEqual } from 'crypto';
import { z } from 'zod';

export type BillingCycle = 'monthly' | 'annual';

export interface RazorpayPlanPrice {
  billingCycle: BillingCycle;
  amount: number;
  currency: 'INR';
  displayPrice: string;
  cadence: string;
  description: string;
}

export interface RazorpayOrder {
  id: string;
  amount: number;
  currency: string;
  receipt: string | null;
  status: string;
  notes: Record<string, string>;
}

export interface RazorpayPayment {
  id: string;
  amount: number;
  currency: string;
  orderId: string | null;
  status: string;
  notes: Record<string, string>;
}

export interface CreateRazorpayOrderInput {
  userId: string;
  billingCycle: BillingCycle;
  email?: string;
}

interface RazorpayRequestOptions {
  method: 'GET' | 'POST';
  body?: unknown;
}

const planPrices: Record<BillingCycle, RazorpayPlanPrice> = {
  monthly: {
    billingCycle: 'monthly',
    amount: 24900,
    currency: 'INR',
    displayPrice: 'Rs 249',
    cadence: 'per month',
    description: 'CV Prime Pro monthly',
  },
  annual: {
    billingCycle: 'annual',
    amount: 199900,
    currency: 'INR',
    displayPrice: 'Rs 1,999',
    cadence: 'per year',
    description: 'CV Prime Pro annual',
  },
};

function normalizeNotes(value: unknown): Record<string, string> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(value as Record<string, unknown>).map(([key, noteValue]) => [
      key,
      String(noteValue),
    ])
  );
}

const notesSchema = z.preprocess(normalizeNotes, z.record(z.string()));

const orderSchema = z.object({
  id: z.string(),
  amount: z.number().int(),
  currency: z.string(),
  receipt: z.string().nullable().optional(),
  status: z.string(),
  notes: notesSchema.optional(),
});

const paymentSchema = z.object({
  id: z.string(),
  amount: z.number().int(),
  currency: z.string(),
  order_id: z.string().nullable().optional(),
  status: z.string(),
  notes: notesSchema.optional(),
});

class RazorpayRequestError extends Error {
  constructor(
    message: string,
    readonly status: number
  ) {
    super(message);
    this.name = 'RazorpayRequestError';
  }
}

function getRazorpayCredentials(): { keyId: string; keySecret: string } {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    throw new Error('RAZORPAY_NOT_CONFIGURED');
  }

  return { keyId, keySecret };
}

function getWebhookSecret(): string {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET ?? process.env.RAZORPAY_KEY_SECRET;

  if (!secret) {
    throw new Error('RAZORPAY_NOT_CONFIGURED');
  }

  return secret;
}

function authHeader(): string {
  const { keyId, keySecret } = getRazorpayCredentials();
  return `Basic ${Buffer.from(`${keyId}:${keySecret}`).toString('base64')}`;
}

async function razorpayRequest<T>(
  path: string,
  options: RazorpayRequestOptions,
  schema: z.ZodType<T>
): Promise<T> {
  const response = await fetch(`https://api.razorpay.com/v1${path}`, {
    method: options.method,
    headers: {
      Authorization: authHeader(),
      'Content-Type': 'application/json',
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  const payload = (await response.json().catch(() => null)) as unknown;

  if (!response.ok) {
    throw new RazorpayRequestError('Razorpay request failed', response.status);
  }

  return schema.parse(payload);
}

function toRazorpayOrder(rawOrder: {
  id: string;
  amount: number;
  currency: string;
  receipt?: string | null;
  status: string;
  notes?: unknown;
}): RazorpayOrder {
  return {
    id: rawOrder.id,
    amount: rawOrder.amount,
    currency: rawOrder.currency,
    receipt: rawOrder.receipt ?? null,
    status: rawOrder.status,
    notes: normalizeNotes(rawOrder.notes),
  };
}

function toRazorpayPayment(rawPayment: {
  id: string;
  amount: number;
  currency: string;
  order_id?: string | null;
  status: string;
  notes?: unknown;
}): RazorpayPayment {
  return {
    id: rawPayment.id,
    amount: rawPayment.amount,
    currency: rawPayment.currency,
    orderId: rawPayment.order_id ?? null,
    status: rawPayment.status,
    notes: normalizeNotes(rawPayment.notes),
  };
}

function safeCompareHex(expected: string, received: string): boolean {
  const expectedBuffer = Buffer.from(expected, 'hex');
  const receivedBuffer = Buffer.from(received, 'hex');

  if (expectedBuffer.length !== receivedBuffer.length) {
    return false;
  }

  return timingSafeEqual(expectedBuffer, receivedBuffer);
}

export function getRazorpayPublicKey(): string {
  return getRazorpayCredentials().keyId;
}

export function getPlanPrice(billingCycle: BillingCycle): RazorpayPlanPrice {
  return planPrices[billingCycle];
}

export function getAllPlanPrices(): RazorpayPlanPrice[] {
  return [planPrices.monthly, planPrices.annual];
}

export async function createRazorpayOrder({
  userId,
  billingCycle,
  email,
}: CreateRazorpayOrderInput): Promise<RazorpayOrder> {
  const price = getPlanPrice(billingCycle);
  const receipt = `cvp_${userId.slice(0, 8)}_${Date.now()}`.slice(0, 40);
  const rawOrder = await razorpayRequest(
    '/orders',
    {
      method: 'POST',
      body: {
        amount: price.amount,
        currency: price.currency,
        receipt,
        notes: {
          userId,
          plan: 'pro',
          billingCycle,
          email: email ?? '',
        },
      },
    },
    orderSchema
  );

  return toRazorpayOrder(rawOrder);
}

export async function fetchRazorpayOrder(orderId: string): Promise<RazorpayOrder> {
  const rawOrder = await razorpayRequest(`/orders/${orderId}`, { method: 'GET' }, orderSchema);
  return toRazorpayOrder(rawOrder);
}

export async function fetchRazorpayPayment(paymentId: string): Promise<RazorpayPayment> {
  const rawPayment = await razorpayRequest(
    `/payments/${paymentId}`,
    { method: 'GET' },
    paymentSchema
  );

  return toRazorpayPayment(rawPayment);
}

export function verifyRazorpayPaymentSignature({
  orderId,
  paymentId,
  signature,
}: {
  orderId: string;
  paymentId: string;
  signature: string;
}): boolean {
  const { keySecret } = getRazorpayCredentials();
  const expected = createHmac('sha256', keySecret)
    .update(`${orderId}|${paymentId}`)
    .digest('hex');

  return safeCompareHex(expected, signature);
}

export function verifyRazorpayWebhookSignature({
  body,
  signature,
}: {
  body: string;
  signature: string;
}): boolean {
  const expected = createHmac('sha256', getWebhookSecret()).update(body).digest('hex');
  return safeCompareHex(expected, signature);
}

export function isRazorpayRequestError(error: unknown): error is RazorpayRequestError {
  return error instanceof RazorpayRequestError;
}
