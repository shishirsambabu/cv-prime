import { decryptAPIKey } from '@/lib/crypto';
import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';
import type { SupabaseProfile } from '@/types/cv.types';

export async function getUserOpenRouterKey(userId: string): Promise<string | null> {
  // Prefer the service-role client (bypasses RLS) so a stale session cookie
  // cannot make the user's own saved key appear missing during generation.
  const supabase = createAdminClient() ?? createClient();
  const { data, error } = await supabase
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
