import { createAdminClient } from '@/lib/supabase/admin';

/**
 * If the signed-in account has no OpenRouter key but another account with the
 * same (verified) email does, copy the encrypted key onto this account. This
 * resolves the case where a user has both an email/password account and a
 * Google account under one email and saved their key on the other one.
 *
 * Relies on the `import_sibling_openrouter_key` SQL function (security definer)
 * and the service-role client, so it works regardless of the session cookie.
 * Safe no-op when the service-role key or the function is not available.
 */
export async function importSiblingOpenRouterKey(userId: string): Promise<void> {
  const admin = createAdminClient();
  if (!admin) {
    return;
  }

  try {
    await (admin.rpc as unknown as (
      fn: string,
      args: Record<string, unknown>
    ) => Promise<unknown>)('import_sibling_openrouter_key', { p_user_id: userId });
  } catch {
    // Function not installed yet, or no sibling key to import. Ignore.
  }
}
