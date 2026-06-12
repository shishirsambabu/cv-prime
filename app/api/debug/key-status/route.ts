import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { importSiblingOpenRouterKey } from '@/lib/importSiblingKey';

export const dynamic = 'force-dynamic';

type ProfileKeyRow = {
  id: string;
  openrouter_key_hint: string | null;
  openrouter_key_enc: string | null;
};

/**
 * Temporary diagnostic. Reports the full key-resolution picture for the current
 * session so the duplicate-account bridge can be debugged end to end. Exposes
 * only non-secret hints, never decrypted keys. Remove after debugging.
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
  if (!admin) {
    return NextResponse.json({
      userId: user.id,
      email: user.email,
      serviceRoleConfigured: false,
    });
  }

  // 1. own profile before any import
  const { data: beforeData, error: beforeError } = await admin
    .from('profiles')
    .select('id, openrouter_key_hint, openrouter_key_enc')
    .eq('id', user.id)
    .maybeSingle();
  const before = beforeData as ProfileKeyRow | null;

  // 2. siblings sharing this email
  const target = (user.email ?? '').trim().toLowerCase();
  const siblings: Array<{ id: string; hasKey?: boolean; hint?: string | null }> = [];
  let listUsersError: string | null = null;
  for (let page = 1; page <= 20; page += 1) {
    const { data, error } = await admin.auth.admin.listUsers({ page, perPage: 200 });
    if (error || !data) {
      listUsersError = error?.message ?? 'no data';
      break;
    }
    for (const candidate of data.users) {
      if (candidate.id !== user.id && (candidate.email ?? '').trim().toLowerCase() === target) {
        siblings.push({ id: candidate.id });
      }
    }
    if (data.users.length < 200) break;
  }

  // enrich siblings with their profile key status
  if (siblings.length > 0) {
    const { data: sibProfiles } = await admin
      .from('profiles')
      .select('id, openrouter_key_hint, openrouter_key_enc')
      .in(
        'id',
        siblings.map((s) => s.id)
      );
    const rows = (sibProfiles as ProfileKeyRow[] | null) ?? [];
    for (const s of siblings) {
      const row = rows.find((r) => r.id === s.id);
      s.hasKey = Boolean(row?.openrouter_key_enc);
      s.hint = row?.openrouter_key_hint ?? null;
    }
  }

  // 3. run the real bridge, then re-read
  await importSiblingOpenRouterKey(user.id);
  const { data: afterData } = await admin
    .from('profiles')
    .select('id, openrouter_key_hint, openrouter_key_enc')
    .eq('id', user.id)
    .maybeSingle();
  const after = afterData as ProfileKeyRow | null;

  return NextResponse.json({
    userId: user.id,
    email: user.email,
    serviceRoleConfigured: true,
    ownProfileBefore: {
      found: Boolean(before),
      hint: before?.openrouter_key_hint ?? null,
      hasKey: Boolean(before?.openrouter_key_enc),
    },
    siblingCount: siblings.length,
    siblings,
    listUsersError,
    ownProfileAfterImport: {
      found: Boolean(after),
      hint: after?.openrouter_key_hint ?? null,
      hasKey: Boolean(after?.openrouter_key_enc),
    },
    beforeReadError: beforeError?.message ?? null,
  });
}
