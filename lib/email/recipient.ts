import { createAdminClient } from '@/lib/supabase/admin';

export interface Recipient {
  userId: string;
  email: string | null;
  firstName: string;
  unsubscribeToken: string | null;
}

function firstNameFrom(fullName: string | null, email: string | null): string {
  const name = (fullName ?? '').trim();
  if (name) {
    return name.split(/\s+/)[0] ?? name;
  }
  // Fall back to the local part of the email, title-cased, never "undefined".
  const local = (email ?? '').split('@')[0]?.replace(/[._-]+/g, ' ').trim();
  if (local) {
    return local.charAt(0).toUpperCase() + local.slice(1);
  }
  return 'there';
}

/**
 * Resolve a user's email + display name for sending. Email lives in auth.users
 * (not profiles), so we read it through the service-role auth admin API and
 * merge the profile's full_name + unsubscribe token. Returns email=null when
 * the user cannot be resolved so callers can skip cleanly.
 */
export async function getRecipient(userId: string): Promise<Recipient> {
  const admin = createAdminClient();
  if (!admin) {
    return { userId, email: null, firstName: 'there', unsubscribeToken: null };
  }

  const [{ data: authData }, { data: profile }] = await Promise.all([
    admin.auth.admin.getUserById(userId),
    admin
      .from('profiles')
      .select('full_name, unsubscribe_token')
      .eq('id', userId)
      .maybeSingle(),
  ]);

  const row = profile as { full_name: string | null; unsubscribe_token: string | null } | null;
  const email = authData?.user?.email ?? null;
  const metadataName =
    (authData?.user?.user_metadata?.full_name as string | undefined) ??
    (authData?.user?.user_metadata?.name as string | undefined) ??
    null;

  return {
    userId,
    email,
    firstName: firstNameFrom(row?.full_name ?? metadataName ?? null, email),
    unsubscribeToken: row?.unsubscribe_token ?? null,
  };
}
