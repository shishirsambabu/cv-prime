import { createAdminClient } from '@/lib/supabase/admin';

type ProfileKeyRow = {
  id: string;
  openrouter_key_hint: string | null;
  openrouter_key_enc: string | null;
};

/**
 * Stored in `openrouter_key_hint` (with a null key) when the user deletes
 * their key. It tells the sibling import below that the missing key is a
 * decision, not a gap to fill. Cleared by the next key save.
 */
export const KEY_REMOVED_HINT = '__removed__';

/** The hint to show a person: the removal marker is not a hint. */
export function visibleKeyHint(hint: string | null | undefined): string | null {
  return hint && hint !== KEY_REMOVED_HINT ? hint : null;
}

type AdminClient = NonNullable<ReturnType<typeof createAdminClient>>;

/**
 * Find other auth users that share the same email as `userId` (case-insensitive).
 * Used to bridge the case where a person has both an email/password account and
 * a Google account under one address. Relies on the service-role admin API.
 */
async function findSiblingUserIds(
  admin: AdminClient,
  userId: string,
  email: string
): Promise<string[]> {
  const target = email.trim().toLowerCase();
  const ids: string[] = [];

  for (let page = 1; page <= 20; page += 1) {
    const { data, error } = await admin.auth.admin.listUsers({ page, perPage: 200 });
    if (error || !data) {
      break;
    }

    for (const candidate of data.users) {
      if (candidate.id !== userId && (candidate.email ?? '').trim().toLowerCase() === target) {
        ids.push(candidate.id);
      }
    }

    if (data.users.length < 200) {
      break;
    }
  }

  return ids;
}

/**
 * If the signed-in account has no OpenRouter key but another account with the
 * same email does, copy the encrypted key (and hint) onto this account. The key
 * is encrypted with a server-wide secret, not per user, so copying is safe.
 *
 * Implemented entirely in application code via the service-role admin client —
 * no database function or manual setup required. Best-effort: any failure is
 * swallowed so it can never break a page render.
 */
export async function importSiblingOpenRouterKey(userId: string): Promise<void> {
  const admin = createAdminClient();
  if (!admin) {
    return;
  }

  try {
    const { data: ownData } = await admin
      .from('profiles')
      .select('id, openrouter_key_hint, openrouter_key_enc')
      .eq('id', userId)
      .maybeSingle();
    const own = ownData as ProfileKeyRow | null;

    // Already has a key on this account: nothing to do.
    if (own?.openrouter_key_enc) {
      return;
    }

    // The user removed their key on this account. Copying it back from the
    // sibling account undid the delete on the next page load, and AI calls
    // went on spending on a key they had just disconnected.
    if (own?.openrouter_key_hint === KEY_REMOVED_HINT) {
      return;
    }

    const { data: userResult } = await admin.auth.admin.getUserById(userId);
    const email = userResult?.user?.email ?? null;
    if (!email) {
      return;
    }

    const siblingIds = await findSiblingUserIds(admin, userId, email);
    if (siblingIds.length === 0) {
      return;
    }

    const { data: siblingData } = await admin
      .from('profiles')
      .select('id, openrouter_key_hint, openrouter_key_enc')
      .in('id', siblingIds);
    const siblings = (siblingData as ProfileKeyRow[] | null) ?? [];
    const withKey = siblings.find((row) => row.openrouter_key_enc);
    if (!withKey) {
      return;
    }

    await admin.from('profiles').upsert(
      {
        id: userId,
        openrouter_key_enc: withKey.openrouter_key_enc,
        openrouter_key_hint: withKey.openrouter_key_hint,
      } as never,
      { onConflict: 'id' }
    );
  } catch {
    // Best-effort bridge; never block the caller on failure.
  }
}
