import { decryptAPIKey } from '@/lib/crypto';
import { createClient } from '@/lib/supabase/server';
import type { SupabaseProfile } from '@/types/cv.types';

export async function getUserOpenRouterKey(userId: string): Promise<string | null> {
  const supabase = createClient();
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
