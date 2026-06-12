import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';

export const dynamic = 'force-dynamic';

/**
 * Temporary diagnostic. Reports exactly what the server sees for the current
 * session: the authenticated user id/email, whether the service-role key is
 * available at runtime, and what the profile read returns. Exposes only the
 * user's own non-secret hint (never the decrypted key). Remove after debugging.
 */
export async function GET(): Promise<NextResponse> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'not_authenticated' }, { status: 401 });
  }

  const admin = createAdminClient();
  const serviceRoleConfigured = Boolean(admin);

  const { data, error } = admin
    ? await admin
        .from('profiles')
        .select('id, openrouter_key_hint, openrouter_key_enc')
        .eq('id', user.id)
        .maybeSingle()
    : await supabase
        .from('profiles')
        .select('id, openrouter_key_hint, openrouter_key_enc')
        .eq('id', user.id)
        .maybeSingle();

  const row = data as
    | { id: string; openrouter_key_hint: string | null; openrouter_key_enc: string | null }
    | null;

  return NextResponse.json({
    userId: user.id,
    email: user.email,
    serviceRoleConfigured,
    profileFound: Boolean(row),
    hint: row?.openrouter_key_hint ?? null,
    hasEncryptedKey: Boolean(row?.openrouter_key_enc),
    readError: error?.message ?? null,
  });
}
