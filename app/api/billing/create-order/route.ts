import { NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rateLimit';
import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { getActiveOffer, LTD_BASE_PRICE } from '@/lib/festiveOffers';

export const runtime = 'nodejs';

const CASHFREE_APP_ID = process.env.CASHFREE_APP_ID ?? '10128623e81840ab457ba85c3ac2682101';
const CASHFREE_SECRET = process.env.CASHFREE_SECRET_KEY ?? '';
// Cashfree's stable PG API version. 2023-08-01 is the widely supported GA version.
const CASHFREE_API_VERSION = process.env.CASHFREE_API_VERSION ?? '2023-08-01';
// Treat anything that is not explicitly "sandbox" as production.
const IS_PROD = (process.env.CASHFREE_ENVIRONMENT ?? 'production').toLowerCase() !== 'sandbox';
const BASE_URL = IS_PROD
  ? 'https://api.cashfree.com/pg'
  : 'https://sandbox.cashfree.com/pg';

function sanitizePhone(raw: string | undefined): string {
  // Cashfree wants a valid 10-digit Indian mobile. Strip non-digits, take last 10.
  const digits = (raw ?? '').replace(/\D/g, '');
  const last10 = digits.slice(-10);
  return /^[6-9]\d{9}$/.test(last10) ? last10 : '9999999999';
}

export async function POST(): Promise<NextResponse> {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  if (!CASHFREE_SECRET) {
    return NextResponse.json(
      { error: 'NOT_CONFIGURED', message: 'Payment gateway is not configured. Please contact support.' },
      { status: 500 }
    );
  }

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
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://cv-prime.in';

  const body = {
    order_id: orderId,
    order_amount: Number(orderAmount),
    order_currency: 'INR',
    order_note: orderNote,
    customer_details: {
      customer_id: user.id.replace(/-/g, '').slice(0, 36),
      customer_email: user.email ?? 'user@cv-prime.in',
      customer_phone: sanitizePhone(user.phone),
    },
    order_meta: {
      // {order_id} placeholder lets Cashfree append the order reference on return.
      return_url: `${appUrl}/dashboard?payment=success&order_id={order_id}`,
      notify_url: `${appUrl}/api/webhooks/billing`,
    },
    order_tags: {
      userId: user.id,
      plan: 'ltd',
    },
  };

  let res: Response;
  try {
    res = await fetch(`${BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-client-id': CASHFREE_APP_ID,
        'x-client-secret': CASHFREE_SECRET,
        'x-api-version': CASHFREE_API_VERSION,
      },
      body: JSON.stringify(body),
    });
  } catch (err) {
    return NextResponse.json(
      { error: 'NETWORK_ERROR', message: err instanceof Error ? err.message : 'Network error reaching Cashfree.' },
      { status: 502 }
    );
  }

  const payload = (await res.json().catch(() => null)) as
    | { payment_session_id?: string; order_id?: string; message?: string; type?: string; code?: string }
    | null;

  if (!res.ok || !payload?.payment_session_id) {
    // Surface Cashfree's actual error message so issues are diagnosable.
    const message =
      payload?.message ?? `Cashfree responded with HTTP ${res.status}. Check API keys and environment.`;
    // eslint-disable-next-line no-console
    console.error('[create-order] Cashfree error', { status: res.status, payload, env: IS_PROD ? 'production' : 'sandbox' });
    return NextResponse.json({ error: 'ORDER_FAILED', message }, { status: 502 });
  }

  return NextResponse.json({
    paymentSessionId: payload.payment_session_id,
    orderId: payload.order_id ?? orderId,
    environment: IS_PROD ? 'production' : 'sandbox',
    amount: orderAmount,
    isFestive: Boolean(activeOffer),
    offerName: activeOffer?.name ?? null,
  });
}
