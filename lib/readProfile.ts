import { createAdminClient } from '@/lib/supabase/admin';

/**
 * Read the OpenRouter key hint on its own. Kept separate from plan/usage reads
 * so that a problem with any other column can never cause the key to appear
 * missing. Uses the service-role client to bypass RLS.
 */
export async function readOpenRouterHint(userId: string): Promise<string | null> {
  const admin = createAdminClient();
  if (!admin) {
    return null;
  }

  const { data } = await admin
    .from('profiles')
    .select('openrouter_key_hint')
    .eq('id', userId)
    .maybeSingle();

  return (data as { openrouter_key_hint: string | null } | null)?.openrouter_key_hint ?? null;
}

/**
 * Read plan + usage independently, with safe defaults if the columns
 * are missing or the read fails.
 */
export async function readPlanUsage(
  userId: string
): Promise<{ plan: 'free' | 'pro'; cvCreationsUsed: number; pdfExportsUsed: number }> {
  const admin = createAdminClient();
  if (!admin) {
    return { plan: 'free', cvCreationsUsed: 0, pdfExportsUsed: 0 };
  }

  try {
    const { data } = await admin
      .from('profiles')
      .select('plan, cv_creations_used, pdf_exports_used')
      .eq('id', userId)
      .maybeSingle();
    const row = data as
      | { plan: 'free' | 'pro' | null; cv_creations_used: number | null; pdf_exports_used: number | null }
      | null;
    return {
      plan: row?.plan ?? 'free',
      cvCreationsUsed: row?.cv_creations_used ?? 0,
      pdfExportsUsed: row?.pdf_exports_used ?? 0,
    };
  } catch {
    return { plan: 'free', cvCreationsUsed: 0, pdfExportsUsed: 0 };
  }
}
