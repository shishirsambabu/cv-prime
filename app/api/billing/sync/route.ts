import { NextResponse } from 'next/server';
import { isCashfreeRequestError } from '@/lib/cashfree';
import { syncBillingSubscription } from '@/lib/billingSync';
import { createClient } from '@/lib/supabase/server';
import { rateLimit } from '@/lib/rateLimit';

export const runtime = 'nodejs';

export async function POST(): Promise<NextResponse> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Every other billing route rate-limits; this one calls out to Cashfree's
  // API on each POST too and had no limit, so a signed-in user could hammer
  // it to spam that outbound call.
  const limited = await rateLimit(user.id, 'billing-sync', 30, '1h');
  if (limited) {
    return NextResponse.json({ error: 'Rate limited' }, { status: 429 });
  }

  try {
    const plan = await syncBillingSubscription({ userId: user.id });

    return NextResponse.json({ ok: true, plan });
  } catch (error) {
    if (isCashfreeRequestError(error)) {
      return NextResponse.json(
        { error: 'BILLING_SYNC_FAILED', message: 'Could not confirm billing yet.' },
        { status: error.status }
      );
    }

    return NextResponse.json(
      { error: 'BILLING_SYNC_FAILED', message: 'Could not confirm billing yet.' },
      { status: 500 }
    );
  }
}
