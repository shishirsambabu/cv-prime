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
