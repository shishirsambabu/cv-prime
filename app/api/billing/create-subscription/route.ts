import { NextResponse } from 'next/server';
import {
  createCashfreeSubscription,
  getCashfreeEnvironment,
  isCashfreeRequestError,
} from '@/lib/cashfree';
import { rateLimit } from '@/lib/rateLimit';
import { createClient } from '@/lib/supabase/server';

export const runtime = 'nodejs';

export async function POST(): Promise<NextResponse> {
  if (process.env.CASHFREE_SUBSCRIPTIONS_ENABLED !== 'true') {
    return NextResponse.json(
      {
        error: 'BILLING_NOT_READY',
        message: 'Monthly Pro is being activated and will open soon.',
      },
      { status: 503 }
    );
  }

  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const limited = await rateLimit(user.id, 'billing-create-subscription', 20, '1h');
  if (limited) {
    return NextResponse.json(
      { error: 'RATE_LIMITED', message: 'Too many billing attempts. Try again in an hour.' },
      { status: 429 }
    );
  }

  try {
    const subscription = await createCashfreeSubscription({
      userId: user.id,
      email: user.email ?? undefined,
    });

    const { error } = await supabase
      .from('profiles')
      .update({
        billing_subscription_id: subscription.subscriptionId,
        billing_provider_subscription_id: subscription.providerSubscriptionId,
        billing_subscription_status: subscription.status,
        billing_authorization_status: subscription.authStatus ?? 'PENDING',
        billing_current_period_start: subscription.currentPeriodStart,
        billing_current_period_end: subscription.currentPeriodEnd,
      } as never)
      .eq('id', user.id);

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json({
      ok: true,
      subscriptionId: subscription.subscriptionId,
      authorizationUrl: subscription.authorizationUrl,
      subscriptionSessionId: subscription.subscriptionSessionId,
      environment: getCashfreeEnvironment(),
      message: 'Secure monthly billing started. Pro unlocks after the mandate is confirmed.',
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
        { error: 'BILLING_START_FAILED', message: 'Could not start secure monthly billing.' },
        { status: error.status }
      );
    }

    return NextResponse.json(
      { error: 'BILLING_START_FAILED', message: 'Could not start secure monthly billing.' },
      { status: 500 }
    );
  }
}
