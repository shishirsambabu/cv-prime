import { NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rateLimit';
import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { getActiveOffer, LTD_BASE_PRICE } from '@/lib/festiveOffers';

export const runtime = 'nodejs';

const CASHFREE_APP_ID = process.env.CASHFREE_APP_ID ?? '10128623e81840ab457ba85c3ac2682101';
const CASHFREE_SECRET = process.env.CASHFREE_SECRET_KEY ?? '';
const CASHFREE_API_VERSION = process.env.CASHFREE_API_VERSION ?? '2025-01-01';
const IS_PROD = process.env.CASHFREE_ENVIRONMENT === 'production';
const BASE_URL = IS_PROD
  ? 'https://api.cashfree.com/pg'
  : 'https://sandbox.cashfree.com/pg';

export async function POST(): Promise<NextResponse> {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const limited = await rateLimit(user.id, 'billing-create-order', 10, '1h');
  if (limited) return NextResponse.json({ error: 'RATE_LIMITED' }, { status: 429 });

  // Check if already Pro
  const admin = createAdminClient();
  const client = admin ?? supabase;
  const { data: profile } = await (client as typeof supabase)
    .from('profiles')
    .select('plan')
    .eq('id', user.id)
    .maybeSingle();
  if ((profile as { plan?: string } | null)?.plan === 'pro') {
    return NextResponse.json({ error: 'ALREADY_PRO' }, { status: 409 });
  }

  const activeOffer = getActiveOffer();
  const orderAmount = activeOffer ? activeOffer.discountPrice : LTD_BASE_PRICE;
  const orderNote = activeOffer
    ? `CV Prime Lifetime Pro — ${activeOffer.name}`
    : 'CV Prime Lifetime Pro';

  const orderId = `ltd_${user.id.replace(/-/g, '').slice(0, 16)}_${Date.now()}`;

  const body = {
    order_id: orderId,
    order_amount: orderAmount,
    order_currency: 'INR',
    order_note: orderNote,
    customer_details: {
      customer_id: user.id.replace(/-/g, '').slice(0, 36),
      customer_email: user.email ?? 'user@cv-prime.in',
      customer_phone: '9999999999',
    },
    order_meta: {
      return_url: `${process.env.NEXT_PUBLIC_APP_URL ?? 'https://cv-prime.in'}/dashboard?payment=success`,
      notify_url: `${process.env.NEXT_PUBLIC_APP_URL ?? 'https://cv-prime.in'}/api/webhooks/billing`,
    },
    order_tags: {
      userId: user.id,
      plan: 'ltd',
    },
  };

  const res = await fetch(`${BASE_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-client-id': CASHFREE_APP_ID,
      'x-client-secret': CASHFREE_SECRET,
      'x-api-version': CASHFREE_API_VERSION,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    return NextResponse.json({ error: 'ORDER_FAILED', detail: err }, { status: 502 });
  }

  const order = (await res.json()) as { payment_session_id?: string; order_id?: string };

  return NextResponse.json({
    paymentSessionId: order.payment_session_id,
    orderId: order.order_id ?? orderId,
    environment: IS_PROD ? 'production' : 'sandbox',
    amount: orderAmount,
    isFestive: Boolean(activeOffer),
    offerName: activeOffer?.name ?? null,
  });
}
