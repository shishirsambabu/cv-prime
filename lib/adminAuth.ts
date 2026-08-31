import { createClient } from '@/lib/supabase/server';

/**
 * Returns the authenticated user's id if they are an admin, else null.
 * Admins are an allowlist of emails in the ADMIN_EMAILS env var (comma-
 * separated). No admin is configured by default — fails closed.
 */
export async function getAdminUserId(): Promise<string | null> {
  const allow = (process.env.ADMIN_EMAILS ?? '')
    .split(',')
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
  if (allow.length === 0) {
    return null;
  }

  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.email) {
    return null;
  }
  return allow.includes(user.email.toLowerCase()) ? user.id : null;
}

export interface AdminDiagnostics {
  adminEmailsConfigured: boolean;
  allowlistCount: number;
  sessionFound: boolean;
  signedInAs: string | null;
  emailInAllowlist: boolean;
  authError: string | null;
}

/**
 * Explains exactly why the admin gate allowed or denied a request. Safe to
 * return to the caller: it only reveals the caller's own email and whether an
 * allowlist exists — never the allowlist contents or any secret.
 */
export async function getAdminDiagnostics(): Promise<AdminDiagnostics> {
  const allow = (process.env.ADMIN_EMAILS ?? '')
    .split(',')
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);

  let signedInAs: string | null = null;
  let authError: string | null = null;
  try {
    const supabase = createClient();
    const { data, error } = await supabase.auth.getUser();
    signedInAs = data.user?.email ?? null;
    authError = error?.message ?? null;
  } catch (err) {
    authError = err instanceof Error ? err.message : 'auth lookup threw';
  }

  return {
    adminEmailsConfigured: allow.length > 0,
    allowlistCount: allow.length,
    sessionFound: Boolean(signedInAs),
    signedInAs,
    emailInAllowlist: signedInAs ? allow.includes(signedInAs.toLowerCase()) : false,
    authError,
  };
}
