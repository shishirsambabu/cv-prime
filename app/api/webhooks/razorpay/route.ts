import { NextResponse } from 'next/server';
import { z } from 'zod';
import { upgradeToPro } from '@/lib/plan';
import { verifyRazorpayWebhookSignature } from '@/lib/razorpay';
import { createClient } from '@/lib/supabase/server';
import type { Database } from '@/types/database.types';

export const runtime = 'nodejs';

const webhookPaymentSchema = z.object({
  id: z.string(),
  amount: z.number().int(),
  currency: z.string(),
  order_id: z.string().nullable().optional(),
  status: z.string(),
  notes: z.record(z.string()).optional().default({}),
});

const webhookSchema = z.object({
  event: z.string(),
  payload: z.object({
    payment: z
      .object({
        entity: webhookPaymentSchema,
      })
      .optional(),
  }),
});

async function insertWebhookPaymentRecord({
  userId,
  payment,
}: {
  userId: string;
  payment: z.infer<typeof webhookPaymentSchema>;
}): Promise<void> {
  const supabase = createClient();
  const payload: Database['public']['Tables']['payments']['Insert'] = {
    user_id: userId,
    gateway: 'razorpay',
    gateway_order_id: payment.order_id ?? null,
    amount: payment.amount,
    currency: payment.currency,
    status: payment.status,
  };
  const { error } = await supabase.from('payments').insert([payload] as never);

  if (error) {
    throw new Error(error.message);
  }
}

export async function POST(req: Request): Promise<NextResponse> {
  const signature = req.headers.get('x-razorpay-signature');
  const rawBody = await req.text();

  if (!signature) {
    return NextResponse.json({ error: 'Missing Razorpay signature' }, { status: 400 });
  }

  let signatureValid = false;
  try {
    signatureValid = verifyRazorpayWebhookSignature({ body: rawBody, signature });
  } catch (error) {
    if (error instanceof Error && error.message === 'RAZORPAY_NOT_CONFIGURED') {
      return NextResponse.json(
        { error: 'RAZORPAY_NOT_CONFIGURED', message: 'Razorpay webhook secret is not configured.' },
        { status: 500 }
      );
    }

    throw error;
  }

  if (!signatureValid) {
    return NextResponse.json({ error: 'Invalid Razorpay signature' }, { status: 400 });
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

  if (webhook.data.event !== 'payment.captured') {
    return NextResponse.json({ ok: true, ignored: true });
  }

  const payment = webhook.data.payload.payment?.entity;
  const userId = payment?.notes.userId;

  if (!payment || !userId) {
    return NextResponse.json({ ok: true, ignored: true });
  }

  if (payment.currency !== 'INR' || payment.status !== 'captured') {
    return NextResponse.json({ ok: true, ignored: true });
  }

  await upgradeToPro(userId);
  await insertWebhookPaymentRecord({ userId, payment });

  return NextResponse.json({ ok: true });
}
