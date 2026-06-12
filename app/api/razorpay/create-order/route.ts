import { NextResponse } from 'next/server';
import { z } from 'zod';
import {
  createRazorpayOrder,
  getPlanPrice,
  getRazorpayPublicKey,
  isRazorpayRequestError,
} from '@/lib/razorpay';
import { rateLimit } from '@/lib/rateLimit';
import { createClient } from '@/lib/supabase/server';

export const runtime = 'nodejs';

const createOrderSchema = z.object({
  billingCycle: z.enum(['monthly', 'annual']).default('monthly'),
});

export async function POST(req: Request): Promise<NextResponse> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const limited = await rateLimit(user.id, 'razorpay-create-order', 20, '1h');
  if (limited) {
    return NextResponse.json({ error: 'RATE_LIMITED' }, { status: 429 });
  }

  const body = createOrderSchema.safeParse(await req.json().catch(() => ({})));
  if (!body.success) {
    return NextResponse.json({ error: body.error.flatten() }, { status: 400 });
  }

  try {
    const order = await createRazorpayOrder({
      userId: user.id,
      billingCycle: body.data.billingCycle,
      email: user.email ?? undefined,
    });
    const price = getPlanPrice(body.data.billingCycle);

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      key: getRazorpayPublicKey(),
      billingCycle: body.data.billingCycle,
      description: price.description,
      displayPrice: price.displayPrice,
      email: user.email ?? '',
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
        { error: 'RAZORPAY_ORDER_FAILED', message: 'Could not create a Razorpay order.' },
        { status: error.status }
      );
    }

    return NextResponse.json(
      { error: 'RAZORPAY_ORDER_FAILED', message: 'Could not create a Razorpay order.' },
      { status: 500 }
    );
  }
}
