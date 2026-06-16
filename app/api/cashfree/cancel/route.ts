import { NextResponse } from 'next/server';
import { z } from 'zod';
import { downgradeToFree } from '@/lib/plan';
import { rateLimit } from '@/lib/rateLimit';
import { createClient } from '@/lib/supabase/server';

export const runtime = 'nodejs';

const cancelSchema = z.object({
  confirm: z.literal(true),
});

export async function POST(req: Request): Promise<NextResponse> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const limited = await rateLimit(user.id, 'cashfree-cancel', 10, '1h');
  if (limited) {
    return NextResponse.json({ error: 'RATE_LIMITED' }, { status: 429 });
  }

  const body = cancelSchema.safeParse(await req.json().catch(() => ({})));
  if (!body.success) {
    return NextResponse.json({ error: body.error.flatten() }, { status: 400 });
  }

  await downgradeToFree(user.id);

  return NextResponse.json({
    ok: true,
    plan: 'free',
    message: 'Pro renewal cancelled. Your account is now on the free plan.',
  });
}
