import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';

export const dynamic = 'force-dynamic';

/**
 * Temporary diagnostic PAGE (server component). Unlike the API route, this runs
 * through middleware, so comparing its output to /api/debug/key-status isolates
 * whether the middleware session refresh is what hides the key on pages.
 */
export default async function DebugStatusPage(): Promise<JSX.Element> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let payload: Record<string, unknown> = { authenticated: Boolean(user) };

  if (user) {
    const admin = createAdminClient();
    let hint: string | null = null;
    let hasKey = false;
    let readError: string | null = null;

    if (admin) {
      const { data, error } = await admin
        .from('profiles')
        .select('openrouter_key_hint, openrouter_key_enc')
        .eq('id', user.id)
        .maybeSingle();
      const row = data as
        | { openrouter_key_hint: string | null; openrouter_key_enc: string | null }
        | null;
      hint = row?.openrouter_key_hint ?? null;
      hasKey = Boolean(row?.openrouter_key_enc);
      readError = error?.message ?? null;
    }

    payload = {
      source: 'SERVER COMPONENT (through middleware)',
      userId: user.id,
      email: user.email,
      serviceRoleConfigured: Boolean(admin),
      hint,
      hasKey,
      readError,
    };
  }

  return (
    <pre style={{ padding: 24, whiteSpace: 'pre-wrap', fontFamily: 'monospace', fontSize: 14 }}>
      {JSON.stringify(payload, null, 2)}
    </pre>
  );
}
