import { NextResponse } from 'next/server';
import { z } from 'zod';
import { rateLimit } from '@/lib/rateLimit';
import { createClient } from '@/lib/supabase/server';
import { KEY_REMOVED_HINT } from '@/lib/importSiblingKey';
import type { Database } from '@/types/database.types';

const deleteKeySchema = z.object({});

export async function DELETE(): Promise<NextResponse> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const limited = await rateLimit(user.id, 'keys-delete', 5, '1h');
  if (limited) {
    return NextResponse.json({ error: 'RATE_LIMITED' }, { status: 429 });
  }

  const body = deleteKeySchema.safeParse({});
  if (!body.success) {
    return NextResponse.json({ error: body.error.flatten() }, { status: 400 });
  }

  const updates: Database['public']['Tables']['profiles']['Update'] = {
    openrouter_key_enc: null,
    // Not null: see KEY_REMOVED_HINT. A plain null was indistinguishable from
    // "never had a key", so a same-email sibling account's key was imported
    // straight back.
    openrouter_key_hint: KEY_REMOVED_HINT,
  };

  const { error } = await supabase
    .from('profiles')
    .update(updates as never)
    .eq('id', user.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
