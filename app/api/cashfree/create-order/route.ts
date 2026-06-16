import { NextResponse } from 'next/server';
import { z } from 'zod';
import {
  createCashfreeOrder,
  getCashfreeEnvironment,
  getPlanPrice,
  isCashfreeRequestError,
} from '@/lib/cashfree';
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

  const limited = await rateLimit(user.id, 'cashfree-create-order', 20, '1h');
  if (limited) {
    return NextResponse.json({ error: 'RATE_LIMITED' }, { status: 429 });
  }

  const body = createOrderSchema.safeParse(await req.json().catch(() => ({})));
  if (!body.success) {
    return NextResponse.json({ error: body.error.flatten() }, { status: 400 });
  }

  try {
    const order = await createCashfreeOrder({
      userId: user.id,
      billingCycle: body.data.billingCycle,
      email: user.email ?? undefined,
    });
    const price = getPlanPrice(body.data.billingCycle);

    return NextResponse.json({
      orderId: order.id,
      paymentSessionId: order.paymentSessionId,
      billingCycle: body.data.billingCycle,
      description: price.description,
      displayPrice: price.displayPrice,
      environment: getCashfreeEnvironment(),
      email: user.email ?? '',
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
        { error: 'CASHFREE_ORDER_FAILED', message: 'Could not create a Cashfree order.' },
        { status: error.status }
      );
    }

    return NextResponse.json(
      { error: 'CASHFREE_ORDER_FAILED', message: 'Could not create a Cashfree order.' },
      { status: 500 }
    );
  }
}
