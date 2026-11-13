import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createClient } from '@/lib/supabase/server';
import { rateLimit } from '@/lib/rateLimit';
import { parseRouteParams } from '@/lib/apiParams';
import type { Database } from '@/types/database.types';

export const runtime = 'nodejs';

const paramsSchema = z.object({
  id: z.string().uuid(),
});

// Generated letters are capped at ~350 words; 20,000 characters leaves plenty
// of room for a user's own rewrite while keeping the row bounded.
const patchCoverLetterSchema = z.object({
  content: z.string().max(20_000),
});

export async function PATCH(
  req: Request,
  context: { params: { id: string } }
): Promise<NextResponse> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const limited = await rateLimit(user.id, 'cover-letter-update', 120, '1h');
  if (limited) {
    return NextResponse.json({ error: 'RATE_LIMITED' }, { status: 429 });
  }

  const parsedParams = parseRouteParams(paramsSchema, context.params);
  if (!parsedParams.ok) {
    return parsedParams.response;
  }

  const body = patchCoverLetterSchema.safeParse(await req.json().catch(() => ({})));
  if (!body.success) {
    return NextResponse.json({ error: body.error.flatten() }, { status: 400 });
  }

  const updates: Database['public']['Tables']['cover_letters']['Update'] = {
    content: body.data.content,
  };

  const { data: updated, error } = await supabase
    .from('cover_letters')
    .update(updates as never)
    .eq('id', parsedParams.data.id)
    .eq('user_id', user.id)
    .select('id');

  if (error) {
    return NextResponse.json({ error: 'SAVE_FAILED' }, { status: 500 });
  }

  // An update that matches no row is not an error to PostgREST: without this
  // check a letter deleted elsewhere, or one that belongs to another account,
  // would be reported as saved.
  if (!updated || updated.length === 0) {
    return NextResponse.json({ error: 'Cover letter not found' }, { status: 404 });
  }

  return NextResponse.json({ ok: true });
}
