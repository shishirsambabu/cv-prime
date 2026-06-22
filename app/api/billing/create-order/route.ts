import { NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rateLimit';
import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { getActiveOffer, LTD_BASE_PRICE } from '@/lib/festiveOffers';

export const runtime = 'nodejs';

const CASHFREE_APP_ID = process.env.CASHFREE_APP_ID ?? '10128623e81840ab457ba85c3ac2682101';
const CASHFREE_SECRET = process.env.CASHFREE_SECRET_KEY ?? '';
const CASHFREE_API_VERSION = process.env.CASHFREE_API_VERSION ?? '2023-08-01';
const IS_PROD = (process.env.CASHFREE_ENVIRONMENT ?? 'production').toLowerCase() !== 'sandbox';
const BASE_URL = IS_PROD ? 'https://api.cashfree.com/pg' : 'https://sandbox.cashfree.com/pg';

function sanitizePhone(raw: string | undefined): string {
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

  const limited = await rateLimit(user.id, 'billing-create-order', 20, '1h');
  if (limited) return NextResponse.json({ error: 'RATE_LIMITED', message: 'Too many attempts. Try again shortly.' }, { status: 429 });

  // Already Pro?
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
  const testPrice = Number(process.env.LTD_TEST_PRICE);
  const useTest = Number.isFinite(testPrice) && testPrice > 0;
  const amount = useTest ? testPrice : activeOffer ? activeOffer.discountPrice : LTD_BASE_PRICE;
  const purpose = useTest
    ? 'CV Prime Lifetime Pro (test)'
    : activeOffer
      ? `CV Prime Lifetime Pro — ${activeOffer.name}`
      : 'CV Prime Lifetime Pro';

  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://cv-prime.in';
  // link_id allows letters, numbers, _ and -. Embed nothing sensitive; userId lives in link_notes.
  const linkId = `ltd-${user.id.replace(/-/g, '').slice(0, 20)}-${Date.now()}`;

  const body = {
    link_id: linkId,
    link_amount: Number(amount),
    link_currency: 'INR',
    link_purpose: purpose,
    customer_details: {
      customer_phone: sanitizePhone(user.phone),
      customer_email: user.email ?? 'user@cv-prime.in',
      customer_name: (user.email ?? 'CV Prime user').split('@')[0],
    },
    link_notify: { send_sms: false, send_email: false },
    link_auto_reminders: false,
    link_notes: { userId: user.id, plan: 'ltd' },
    link_meta: {
      // Server verifies + upgrades on return, then redirects to the dashboard.
      return_url: `${appUrl}/api/billing/return?link_id=${linkId}`,
      notify_url: `${appUrl}/api/webhooks/billing`,
    },
  };

  let res: Response;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  try {
    res = await fetch(`${BASE_URL}/links`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-client-id': CASHFREE_APP_ID,
        'x-client-secret': CASHFREE_SECRET,
        'x-api-version': CASHFREE_API_VERSION,
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
  } catch (err) {
    const aborted = err instanceof DOMException && err.name === 'AbortError';
    // eslint-disable-next-line no-console
    console.error('[create-order] fetch failed', { aborted, err: err instanceof Error ? err.message : err });
    return NextResponse.json(
      {
        error: 'NETWORK_ERROR',
        message: aborted ? 'Cashfree did not respond in time. Please try again.' : 'Network error reaching Cashfree.',
      },
      { status: 502 }
    );
  } finally {
    clearTimeout(timer);
  }

  const payload = (await res.json().catch(() => null)) as
    | { link_url?: string; link_id?: string; message?: string }
    | null;

  if (!res.ok || !payload?.link_url) {
    const message = payload?.message ?? `Cashfree responded with HTTP ${res.status}. Check API keys and environment.`;
    // eslint-disable-next-line no-console
    console.error('[create-order] Cashfree link error', { status: res.status, payload, env: IS_PROD ? 'production' : 'sandbox' });
    return NextResponse.json({ error: 'ORDER_FAILED', message }, { status: 502 });
  }

  return NextResponse.json({
    paymentLink: payload.link_url,
    amount,
    isFestive: Boolean(activeOffer),
    offerName: activeOffer?.name ?? null,
  });
}
