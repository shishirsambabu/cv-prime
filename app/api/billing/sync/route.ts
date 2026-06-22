import { NextResponse } from 'next/server';
import { isCashfreeRequestError } from '@/lib/cashfree';
import { syncBillingSubscription } from '@/lib/billingSync';
import { createClient } from '@/lib/supabase/server';

export const runtime = 'nodejs';

export async function POST(req: Request): Promise<NextResponse> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = (await req.json().catch(() => ({}))) as { subscriptionId?: string | null };

  try {
    const plan = await syncBillingSubscription({
      userId: user.id,
      subscriptionId: body.subscriptionId ?? null,
    });

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
