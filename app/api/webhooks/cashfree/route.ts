import { NextResponse } from 'next/server';
import { z } from 'zod';
import { verifyCashfreeWebhookSignature } from '@/lib/cashfree';
import { upgradeToPro } from '@/lib/plan';
import { createClient } from '@/lib/supabase/server';
import type { Database } from '@/types/database.types';

export const runtime = 'nodejs';

const webhookSchema = z.object({
  type: z.string(),
  data: z.object({
    order: z.object({
      order_id: z.string(),
      order_amount: z.number(),
      order_currency: z.string(),
      order_status: z.string(),
      order_tags: z.record(z.string()).optional().default({}),
    }),
    payment: z
      .object({
        cf_payment_id: z.union([z.string(), z.number()]).transform(String),
        payment_amount: z.number(),
        payment_currency: z.string().optional().default('INR'),
        payment_status: z.string(),
      })
      .optional(),
  }),
});

async function insertWebhookPaymentRecord({
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
  const supabase = createClient();
  const payload: Database['public']['Tables']['payments']['Insert'] = {
    user_id: userId,
    gateway: 'cashfree',
    gateway_order_id: orderId,
    amount: Math.round(amount * 100),
    currency,
    status,
  };
  const { error } = await supabase.from('payments').insert([payload] as never);

  if (error) {
    throw new Error(error.message);
  }
}

export async function POST(req: Request): Promise<NextResponse> {
  const signature = req.headers.get('x-webhook-signature');
  const timestamp = req.headers.get('x-webhook-timestamp');
  const rawBody = await req.text();

  if (!signature || !timestamp) {
    return NextResponse.json({ error: 'Missing Cashfree signature' }, { status: 400 });
  }

  let signatureValid = false;
  try {
    signatureValid = verifyCashfreeWebhookSignature({ body: rawBody, signature, timestamp });
  } catch (error) {
    if (error instanceof Error && error.message === 'CASHFREE_NOT_CONFIGURED') {
      return NextResponse.json(
        { error: 'CASHFREE_NOT_CONFIGURED', message: 'Cashfree webhook secret is not configured.' },
        { status: 500 }
      );
    }

    throw error;
  }

  if (!signatureValid) {
    return NextResponse.json({ error: 'Invalid Cashfree signature' }, { status: 400 });
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

  const order = webhook.data.data.order;
  const payment = webhook.data.data.payment;
  const userId = order.order_tags.userId;

  if (!userId || order.order_status !== 'PAID' || payment?.payment_status !== 'SUCCESS') {
    return NextResponse.json({ ok: true, ignored: true });
  }

  await upgradeToPro(userId);
  await insertWebhookPaymentRecord({
    userId,
    orderId: order.order_id,
    amount: payment.payment_amount,
    currency: payment.payment_currency,
    status: payment.payment_status,
  });

  return NextResponse.json({ ok: true });
}
