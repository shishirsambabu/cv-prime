import { NextResponse } from 'next/server';
import { isAuthorizedCron } from '@/lib/cronAuth';
import { reconcileEntitlements } from '@/lib/entitlements/reconcile';

export const runtime = 'nodejs';
export const maxDuration = 60;

/**
 * Entitlement reconciliation job (spec §57/§58).
 *   - Daily full sweep: /api/cron/reconcile-entitlements
 *   - Hourly recent sweep: /api/cron/reconcile-entitlements?recent=1
 * Compares Cashfree truth against CV Prime entitlements, repairs safe
 * discrepancies, and self-heals missing purchase emails. Alerts (logs at error
 * level) when any mismatch is left unresolved.
 */
export async function GET(req: Request): Promise<NextResponse> {
  if (!isAuthorizedCron(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const recentOnly = new URL(req.url).searchParams.get('recent') === '1';
  const summary = await reconcileEntitlements({ recentOnly });

  if (summary.unresolved > 0 || summary.incorrectPremium > 0) {
    // eslint-disable-next-line no-console
    console.error('[cron/reconcile] UNRESOLVED entitlement mismatches', summary);
  } else {
    // eslint-disable-next-line no-console
    console.log('[cron/reconcile]', { recentOnly, ...summary, repairs: summary.repairs.length });
  }

  return NextResponse.json({ ok: true, recentOnly, ...summary });
}
