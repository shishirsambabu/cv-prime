import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createPdfExportToken } from '@/lib/billingQuota';
import { rateLimit } from '@/lib/rateLimit';
import { createClient } from '@/lib/supabase/server';

export const runtime = 'nodejs';

const schema = z.object({ cvId: z.string().uuid() });

export async function POST(req: Request): Promise<NextResponse> {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const limited = await rateLimit(user.id, 'export-pdf', 20, '1h');
  if (limited) return NextResponse.json({ error: 'RATE_LIMITED' }, { status: 429 });

  const body = schema.safeParse(await req.json().catch(() => ({})));
  if (!body.success) return NextResponse.json({ error: body.error.flatten() }, { status: 400 });

  // Confirm the CV belongs to this user.
  const { data: cv } = await supabase
    .from('cvs').select('id').eq('id', body.data.cvId).eq('user_id', user.id).single();
  if (!cv) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  const quota = await createPdfExportToken({ userId: user.id, cvId: body.data.cvId });

  if (!quota.allowed || !quota.token) {
    return NextResponse.json(
      {
        error: quota.error === 'NOT_FOUND' ? 'NOT_FOUND' : 'PLAN_GATE',
        message:
          quota.error === 'NOT_FOUND'
            ? 'CV not found.'
            : 'You have used your 3 free PDF downloads. Upgrade for unlimited clean exports.',
        used: quota.used,
        limit: quota.limit,
      },
      { status: quota.error === 'NOT_FOUND' ? 404 : 403 },
    );
  }

  return NextResponse.json({ ok: true, token: quota.token, used: quota.used, limit: quota.limit });
}
