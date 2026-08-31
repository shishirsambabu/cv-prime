import { LTD_ORDER_PREFIX } from '@/lib/entitlements/lifetime';
import { createAdminClient } from '@/lib/supabase/admin';
import { createClient } from '@/lib/supabase/server';

type ProfileHintRow = { openrouter_key_hint: string | null } | null;
type ProfileUsageRow = {
  id?: string;
  plan: 'free' | 'pro' | null;
  pdf_exports_used: number | null;
} | null;
type AdminClient = NonNullable<ReturnType<typeof createAdminClient>>;

const SUCCESS_PAYMENT_STATUSES = new Set(['SUCCESS', 'PAID', 'CAPTURED', 'COMPLETED']);

/**
 * Read the OpenRouter key hint on its own. Kept separate from plan/usage reads
 * so that a problem with any other column can never cause the key to appear
 * missing. Uses the service-role client to bypass RLS.
 */
export async function readOpenRouterHint(userId: string): Promise<string | null> {
  const admin = createAdminClient();
  if (admin) {
    const { data, error } = await admin
      .from('profiles')
      .select('openrouter_key_hint')
      .eq('id', userId)
      .maybeSingle();

    if (!error) {
      return (data as ProfileHintRow)?.openrouter_key_hint ?? null;
    }
  }

  const { data } = await createClient()
    .from('profiles')
    .select('openrouter_key_hint')
    .eq('id', userId)
    .maybeSingle();

  return (data as ProfileHintRow)?.openrouter_key_hint ?? null;
}

/**
 * Read plan + usage independently, with safe defaults if the columns
 * are missing or the read fails.
 */
export async function readPlanUsage(
  userId: string
): Promise<{ plan: 'free' | 'pro'; pdfExportsUsed: number }> {
  // 1) Service-role client — fastest, bypasses RLS. Only available when the
  //    SUPABASE_SERVICE_ROLE_KEY env var is configured.
  const admin = createAdminClient();
  if (admin) {
    const usage = await readPlanUsageWithAdmin(admin, userId);
    if (usage) {
      return usage;
    }
  }

  const supabase = createClient();

  // 2) SECURITY DEFINER RPC — bypasses RLS *without* needing the service-role
  //    key. This is what saves us when the key is missing AND the profiles
  //    table has no permissive SELECT policy for the user's own row.
  try {
    const { data, error } = await supabase.rpc('get_my_plan');
    const rows = data as unknown as Array<{ plan: string | null; pdf_exports_used: number | null }> | null;
    const row = Array.isArray(rows) ? rows[0] : null;
    if (!error && row) {
      return {
        plan: row.plan === 'pro' ? 'pro' : 'free',
        pdfExportsUsed: row.pdf_exports_used ?? 0,
      };
    }
  } catch {
    // RPC not deployed to the database yet — fall through to a direct select.
  }

  // 3) Last resort: direct select under RLS. Works only if a self-select
  //    policy exists on profiles.
  const { data } = await supabase
    .from('profiles')
    .select('plan, pdf_exports_used')
    .eq('id', userId)
    .maybeSingle();
  const row = data as ProfileUsageRow;

  return {
    plan: row?.plan === 'pro' ? 'pro' : 'free',
    pdfExportsUsed: row?.pdf_exports_used ?? 0,
  };
}


async function promoteActiveProfile(admin: AdminClient, userId: string): Promise<void> {
  await admin
    .from('profiles')
    .update({ plan: 'pro' } as never)
    .eq('id', userId);
}

/**
 * Does the user hold a LIFETIME purchase? Scoped to `ltd_`-prefixed orders (the
 * one-time checkout in app/api/billing/create-order) rather than "any payment
 * ever", so a cancelled subscriber is not silently re-promoted to Pro off an
 * old subscription charge — which would undo every webhook/reconcile downgrade.
 * A lifetime purchase, by contrast, SHOULD always restore Pro.
 */
async function hasSuccessfulPayment(admin: AdminClient, userIds: string[]): Promise<boolean> {
  const { data, error } = await admin
    .from('payments')
    .select('status, gateway_order_id')
    .in('user_id', userIds)
    .like('gateway_order_id', `${LTD_ORDER_PREFIX}%`);

  if (error) {
    return false;
  }

  return ((data as Array<{ status: string | null }> | null) ?? []).some((payment) => {
    const status = payment.status?.toUpperCase() ?? '';
    return SUCCESS_PAYMENT_STATUSES.has(status);
  });
}

async function readPlanUsageWithAdmin(
  admin: AdminClient,
  userId: string
): Promise<{ plan: 'free' | 'pro'; pdfExportsUsed: number } | null> {
  const { data, error } = await admin
    .from('profiles')
    .select('id, plan, pdf_exports_used')
    .eq('id', userId)
    .maybeSingle();

  if (error) {
    return null;
  }

  const row = data as ProfileUsageRow;
  if (!row) return null;

  const planValue = row.plan ?? 'free';

  // Also check the payments table so a paid user is never stuck on 'free'
  // even if the profile update was delayed or failed.
  if (planValue !== 'pro') {
    const paid = await hasSuccessfulPayment(admin, [userId]);
    if (paid) {
      await promoteActiveProfile(admin, userId);
      return { plan: 'pro', pdfExportsUsed: row.pdf_exports_used ?? 0 };
    }
  }

  return {
    plan: planValue === 'pro' ? 'pro' : 'free',
    pdfExportsUsed: row.pdf_exports_used ?? 0,
  };
}
