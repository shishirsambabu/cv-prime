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
  const admin = createAdminClient();
  if (admin) {
    const usage = await readPlanUsageWithAdmin(admin, userId);
    if (usage) {
      return usage;
    }
  }

  const { data } = await createClient()
    .from('profiles')
    .select('plan, pdf_exports_used')
    .eq('id', userId)
    .maybeSingle();
  const row = data as ProfileUsageRow;

  return {
    plan: row?.plan ?? 'free',
    pdfExportsUsed: row?.pdf_exports_used ?? 0,
  };
}

async function findSameEmailUserIds(admin: AdminClient, userId: string): Promise<string[]> {
  const { data: userResult } = await admin.auth.admin.getUserById(userId);
  const email = userResult?.user?.email?.trim().toLowerCase();
  if (!email) {
    return [userId];
  }

  const ids = new Set<string>([userId]);
  for (let page = 1; page <= 20; page += 1) {
    const { data, error } = await admin.auth.admin.listUsers({ page, perPage: 200 });
    if (error || !data) {
      break;
    }

    for (const candidate of data.users) {
      if ((candidate.email ?? '').trim().toLowerCase() === email) {
        ids.add(candidate.id);
      }
    }

    if (data.users.length < 200) {
      break;
    }
  }

  return [...ids];
}

async function promoteActiveProfile(admin: AdminClient, userId: string): Promise<void> {
  await admin
    .from('profiles')
    .update({ plan: 'pro' } as never)
    .eq('id', userId);
}

async function hasSuccessfulPayment(admin: AdminClient, userIds: string[]): Promise<boolean> {
  const { data, error } = await admin
    .from('payments')
    .select('status')
    .in('user_id', userIds);

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
  const userIds = await findSameEmailUserIds(admin, userId);
  const { data, error } = await admin
    .from('profiles')
    .select('id, plan, pdf_exports_used')
    .in('id', userIds);

  if (error) {
    return null;
  }

  const rows = ((data as ProfileUsageRow[] | null) ?? []).filter(Boolean) as NonNullable<ProfileUsageRow>[];
  const ownRow = rows.find((row) => row.id === userId) ?? null;
  const hasProProfile = rows.some((row) => row.plan === 'pro');
  const paid = hasProProfile || (await hasSuccessfulPayment(admin, userIds));

  if (paid) {
    if (ownRow?.plan !== 'pro') {
      await promoteActiveProfile(admin, userId);
    }

    return {
      plan: 'pro',
      pdfExportsUsed: ownRow?.pdf_exports_used ?? 0,
    };
  }

  if (ownRow) {
    return {
      plan: ownRow.plan ?? 'free',
      pdfExportsUsed: ownRow.pdf_exports_used ?? 0,
    };
  }

  return null;
}
