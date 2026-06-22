import { NextResponse } from 'next/server';
import { upgradeToPro } from '@/lib/plan';

export const runtime = 'nodejs';

const CASHFREE_APP_ID = process.env.CASHFREE_APP_ID ?? '10128623e81840ab457ba85c3ac2682101';
const CASHFREE_SECRET = process.env.CASHFREE_SECRET_KEY ?? '';
const CASHFREE_API_VERSION = process.env.CASHFREE_API_VERSION ?? '2023-08-01';
const IS_PROD = (process.env.CASHFREE_ENVIRONMENT ?? 'production').toLowerCase() !== 'sandbox';
const BASE_URL = IS_PROD ? 'https://api.cashfree.com/pg' : 'https://sandbox.cashfree.com/pg';

// Cashfree redirects the buyer here after payment. We verify the link status
// server-side (source of truth) and upgrade the user immediately — independent
// of the webhook, which remains a backup.
export async function GET(req: Request): Promise<NextResponse> {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://cv-prime.in';
  const url = new URL(req.url);
  const linkId = url.searchParams.get('link_id');

  if (!linkId || !CASHFREE_SECRET) {
    return NextResponse.redirect(`${appUrl}/pricing?payment=error`);
  }

  let res: Response;
  try {
    res = await fetch(`${BASE_URL}/links/${encodeURIComponent(linkId)}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'x-client-id': CASHFREE_APP_ID,
        'x-client-secret': CASHFREE_SECRET,
        'x-api-version': CASHFREE_API_VERSION,
      },
    });
  } catch {
    return NextResponse.redirect(`${appUrl}/dashboard?payment=pending`);
  }

  const data = (await res.json().catch(() => null)) as
    | { link_status?: string; link_notes?: { userId?: string } | null; link_amount_paid?: number }
    | null;

  // eslint-disable-next-line no-console
  console.log('[billing/return]', { linkId, status: data?.link_status, paid: data?.link_amount_paid });

  const userId = data?.link_notes?.userId;
  const isPaid = data?.link_status === 'PAID' || (data?.link_amount_paid ?? 0) > 0;

  if (isPaid && userId) {
    try {
      await upgradeToPro(userId);
      return NextResponse.redirect(`${appUrl}/dashboard?upgraded=1`);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('[billing/return] upgrade failed', err instanceof Error ? err.message : err);
      // Payment succeeded; webhook will retry the upgrade.
      return NextResponse.redirect(`${appUrl}/dashboard?payment=success`);
    }
  }

  // Not paid yet (user backed out or payment is still processing).
  return NextResponse.redirect(`${appUrl}/pricing?payment=incomplete`);
}
