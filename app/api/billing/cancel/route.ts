import { NextResponse } from 'next/server';
import { z } from 'zod';
import { cancelCashfreeSubscription, isCashfreeRequestError } from '@/lib/cashfree';
import { rateLimit } from '@/lib/rateLimit';
import { createClient } from '@/lib/supabase/server';

export const runtime = 'nodejs';

const cancelSchema = z.object({
  confirm: z.literal(true),
});

export async function POST(req: Request): Promise<NextResponse> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const limited = await rateLimit(user.id, 'billing-cancel', 10, '1h');
  if (limited) {
    return NextResponse.json({ error: 'RATE_LIMITED' }, { status: 429 });
  }

  const body = cancelSchema.safeParse(await req.json().catch(() => ({})));
  if (!body.success) {
    return NextResponse.json({ error: body.error.flatten() }, { status: 400 });
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('billing_subscription_id, billing_current_period_end')
    .eq('id', user.id)
    .maybeSingle();

  const subscriptionId = (profile as { billing_subscription_id?: string | null } | null)?.billing_subscription_id;
  if (!subscriptionId) {
    return NextResponse.json(
      { error: 'NO_ACTIVE_SUBSCRIPTION', message: 'No monthly renewal was found for this account.' },
      { status: 400 }
    );
  }

  try {
    await cancelCashfreeSubscription(subscriptionId);

    const { error } = await supabase
      .from('profiles')
      .update({
        billing_subscription_status: 'CANCEL_REQUESTED',
        billing_cancel_at:
          (profile as { billing_current_period_end?: string | null } | null)?.billing_current_period_end ??
          new Date().toISOString(),
      } as never)
      .eq('id', user.id);

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json({
      ok: true,
      message: 'Renewal cancellation requested. Your plan updates after billing confirms the change.',
    });
  } catch (error) {
    if (error instanceof Error && error.message === 'CASHFREE_NOT_CONFIGURED') {
      return NextResponse.json(
        { error: 'BILLING_NOT_CONFIGURED', message: 'Billing is not configured yet.' },
        { status: 500 }
      );
    }

    if (isCashfreeRequestError(error)) {
      return NextResponse.json(
        { error: 'CANCEL_FAILED', message: 'Could not cancel renewal right now.' },
        { status: error.status }
      );
    }

    return NextResponse.json(
      { error: 'CANCEL_FAILED', message: 'Could not cancel renewal right now.' },
      { status: 500 }
    );
  }
}
