import { createAdminClient } from '@/lib/supabase/admin';
import { createClient } from '@/lib/supabase/server';

type ProfileHintRow = { openrouter_key_hint: string | null } | null;
type ProfileUsageRow = {
  plan: 'free' | 'pro' | null;
  pdf_exports_used: number | null;
} | null;

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
    const { data, error } = await admin
      .from('profiles')
      .select('plan, pdf_exports_used')
      .eq('id', userId)
      .maybeSingle();

    if (!error) {
      const row = data as ProfileUsageRow;
      if (row) {
        return {
          plan: row.plan ?? 'free',
          pdfExportsUsed: row.pdf_exports_used ?? 0,
        };
      }
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
