import { NextResponse } from 'next/server';
import { z } from 'zod';
import { upgradeToPro } from '@/lib/plan';
import {
  fetchRazorpayOrder,
  fetchRazorpayPayment,
  getPlanPrice,
  isRazorpayRequestError,
  verifyRazorpayPaymentSignature,
  type BillingCycle,
} from '@/lib/razorpay';
import { rateLimit } from '@/lib/rateLimit';
import { createClient } from '@/lib/supabase/server';
import type { Database } from '@/types/database.types';

export const runtime = 'nodejs';

const verifyPaymentSchema = z.object({
  razorpay_order_id: z.string().min(1),
  razorpay_payment_id: z.string().min(1),
  razorpay_signature: z.string().min(1),
});

function parseBillingCycle(value: string | undefined): BillingCycle {
  return value === 'annual' ? 'annual' : 'monthly';
}

async function insertPaymentRecord({
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
    gateway: 'razorpay',
    gateway_order_id: orderId,
    amount,
    currency,
    status,
  };
  const { error } = await supabase.from('payments').insert([payload] as never);

  if (error) {
    throw new Error(error.message);
  }
}

export async function POST(req: Request): Promise<NextResponse> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const limited = await rateLimit(user.id, 'razorpay-verify', 40, '1h');
  if (limited) {
    return NextResponse.json({ error: 'RATE_LIMITED' }, { status: 429 });
  }

  const body = verifyPaymentSchema.safeParse(await req.json().catch(() => ({})));
  if (!body.success) {
    return NextResponse.json({ error: body.error.flatten() }, { status: 400 });
  }

  try {
    const signatureValid = verifyRazorpayPaymentSignature({
      orderId: body.data.razorpay_order_id,
      paymentId: body.data.razorpay_payment_id,
      signature: body.data.razorpay_signature,
    });

    if (!signatureValid) {
      return NextResponse.json({ error: 'PAYMENT_SIGNATURE_INVALID' }, { status: 400 });
    }

    const [order, payment] = await Promise.all([
      fetchRazorpayOrder(body.data.razorpay_order_id),
      fetchRazorpayPayment(body.data.razorpay_payment_id),
    ]);

    if (order.notes.userId !== user.id) {
      return NextResponse.json({ error: 'PAYMENT_USER_MISMATCH' }, { status: 403 });
    }

    if (payment.orderId !== order.id) {
      return NextResponse.json({ error: 'PAYMENT_ORDER_MISMATCH' }, { status: 400 });
    }

    const billingCycle = parseBillingCycle(order.notes.billingCycle);
    const expectedPrice = getPlanPrice(billingCycle);
    const amountMatches = order.amount === expectedPrice.amount && payment.amount === order.amount;
    const currencyMatches = order.currency === 'INR' && payment.currency === 'INR';

    if (!amountMatches || !currencyMatches) {
      return NextResponse.json({ error: 'PAYMENT_AMOUNT_MISMATCH' }, { status: 400 });
    }

    await insertPaymentRecord({
      userId: user.id,
      orderId: order.id,
      amount: payment.amount,
      currency: payment.currency,
      status: payment.status,
    });

    if (payment.status !== 'captured' && order.status !== 'paid') {
      return NextResponse.json(
        {
          ok: true,
          plan: 'pending',
          message: 'Payment received. Pro unlocks after Razorpay captures the payment.',
        },
        { status: 202 }
      );
    }

    await upgradeToPro(user.id);

    return NextResponse.json({
      ok: true,
      plan: 'pro',
      billingCycle,
    });
  } catch (error) {
    if (error instanceof Error && error.message === 'RAZORPAY_NOT_CONFIGURED') {
      return NextResponse.json(
        { error: 'RAZORPAY_NOT_CONFIGURED', message: 'Razorpay test keys are not configured.' },
        { status: 500 }
      );
    }

    if (isRazorpayRequestError(error)) {
      return NextResponse.json(
        { error: 'PAYMENT_VERIFY_FAILED', message: 'Could not verify this payment.' },
        { status: error.status }
      );
    }

    return NextResponse.json(
      { error: 'PAYMENT_VERIFY_FAILED', message: 'Could not verify this payment.' },
      { status: 500 }
    );
  }
}
