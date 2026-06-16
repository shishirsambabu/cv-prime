import { NextResponse } from 'next/server';
import { z } from 'zod';
import {
  fetchCashfreeOrder,
  fetchCashfreePayments,
  getPlanPrice,
  isCashfreeRequestError,
  type BillingCycle,
} from '@/lib/cashfree';
import { upgradeToPro } from '@/lib/plan';
import { rateLimit } from '@/lib/rateLimit';
import { createClient } from '@/lib/supabase/server';
import type { Database } from '@/types/database.types';

export const runtime = 'nodejs';

const verifyPaymentSchema = z.object({
  orderId: z.string().min(1),
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
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const limited = await rateLimit(user.id, 'cashfree-verify', 40, '1h');
  if (limited) {
    return NextResponse.json({ error: 'RATE_LIMITED' }, { status: 429 });
  }

  const body = verifyPaymentSchema.safeParse(await req.json().catch(() => ({})));
  if (!body.success) {
    return NextResponse.json({ error: body.error.flatten() }, { status: 400 });
  }

  try {
    const [order, payments] = await Promise.all([
      fetchCashfreeOrder(body.data.orderId),
      fetchCashfreePayments(body.data.orderId),
    ]);

    if (order.notes.userId !== user.id) {
      return NextResponse.json({ error: 'PAYMENT_USER_MISMATCH' }, { status: 403 });
    }

    const billingCycle = parseBillingCycle(order.notes.billingCycle);
    const expectedPrice = getPlanPrice(billingCycle);
    const paidPayment = payments.find((payment) => payment.status === 'SUCCESS');
    const amountMatches = order.amount === expectedPrice.amount;
    const currencyMatches = order.currency === 'INR';

    if (!amountMatches || !currencyMatches) {
      return NextResponse.json({ error: 'PAYMENT_AMOUNT_MISMATCH' }, { status: 400 });
    }

    await insertPaymentRecord({
      userId: user.id,
      orderId: order.id,
      amount: paidPayment?.amount ?? order.amount,
      currency: paidPayment?.currency ?? order.currency,
      status: paidPayment?.status ?? order.status,
    });

    if (order.status !== 'PAID' && !paidPayment) {
      return NextResponse.json(
        {
          ok: true,
          plan: 'pending',
          message: 'Payment received. Pro unlocks after Cashfree confirms the payment.',
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
    if (error instanceof Error && error.message === 'CASHFREE_NOT_CONFIGURED') {
      return NextResponse.json(
        { error: 'CASHFREE_NOT_CONFIGURED', message: 'Cashfree keys are not configured.' },
        { status: 500 }
      );
    }

    if (isCashfreeRequestError(error)) {
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
