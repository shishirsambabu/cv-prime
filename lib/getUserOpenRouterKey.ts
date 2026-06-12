import { decryptAPIKey } from '@/lib/crypto';
import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { importSiblingOpenRouterKey } from '@/lib/importSiblingKey';
import type { SupabaseProfile } from '@/types/cv.types';

export async function getUserOpenRouterKey(userId: string): Promise<string | null> {
  // Bridge the key from a same-email sibling account onto this one if needed,
  // so generation works no matter which login the user signed in with.
  await importSiblingOpenRouterKey(userId);

  // Prefer the service-role client (bypasses RLS) so a stale session cookie
  // cannot make the user's own saved key appear missing during generation.
  const admin = createAdminClient();
  const { data, error } = admin
    ? await admin
        .from('profiles')
        .select('openrouter_key_enc')
        .eq('id', userId)
        .single<SupabaseProfile>()
    : await createClient()
        .from('profiles')
        .select('openrouter_key_enc')
        .eq('id', userId)
        .single<SupabaseProfile>();

  if (error || !data?.openrouter_key_enc) {
    return null;
  }

  try {
    return decryptAPIKey(data.openrouter_key_enc);
  } catch {
    return null;
  }
}
