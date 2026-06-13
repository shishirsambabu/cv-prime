import { NextResponse } from 'next/server';
import { z } from 'zod';
import { rateLimit } from '@/lib/rateLimit';
import { createClient } from '@/lib/supabase/server';
import type { Database } from '@/types/database.types';
import type { Plan } from '@/types/cv.types';

export const runtime = 'nodejs';

const schema = z.object({ cvId: z.string().uuid() });

type ProfilePlanView = Pick<
  Database['public']['Tables']['profiles']['Row'],
  'plan' | 'pdf_exports_used'
>;

export async function POST(req: Request): Promise<NextResponse> {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const limited = await rateLimit(user.id, 'export-pdf', 20, '1h');
  if (limited) return NextResponse.json({ error: 'RATE_LIMITED' }, { status: 429 });

  const body = schema.safeParse(await req.json().catch(() => ({})));
  if (!body.success) return NextResponse.json({ error: body.error.flatten() }, { status: 400 });

  const { data: cv } = await supabase
    .from('cvs').select('id').eq('id', body.data.cvId).eq('user_id', user.id).single();
  if (!cv) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  const { data: rawProfile } = await supabase
    .from('profiles').select('plan, pdf_exports_used').eq('id', user.id).maybeSingle();
  const profile = rawProfile as ProfilePlanView | null;
  const plan = ((profile as { plan?: Plan } | null)?.plan ?? 'free') as Plan;
  const pdfExportsUsed = profile?.pdf_exports_used ?? 0;

  if (plan === 'free' && pdfExportsUsed >= 3) {
    return NextResponse.json(
      { error: 'PLAN_GATE', message: 'You have used your 3 free PDF downloads. Upgrade to export more.' },
      { status: 403 },
    );
  }

  if (plan === 'free') {
    const updates: Database['public']['Tables']['profiles']['Update'] = {
      pdf_exports_used: pdfExportsUsed + 1,
    };
    await supabase.from('profiles').update(updates as never).eq('id', user.id);
  }

  return NextResponse.json({ ok: true });
}
