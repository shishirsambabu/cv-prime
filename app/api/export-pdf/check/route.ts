import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createPdfExportToken } from '@/lib/billingQuota';
import { rateLimit } from '@/lib/rateLimit';
import { createClient } from '@/lib/supabase/server';
import { getUserPlan } from '@/lib/plan';
import { PRO_TEMPLATES } from '@/lib/constants';
import type { TemplateId } from '@/types/cv.types';

export const runtime = 'nodejs';

const schema = z.object({ cvId: z.string().uuid() });

export async function POST(req: Request): Promise<NextResponse> {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const limited = await rateLimit(user.id, 'export-pdf', 20, '1h').catch(() => false);
  if (limited) return NextResponse.json({ error: 'RATE_LIMITED' }, { status: 429 });

  const body = schema.safeParse(await req.json().catch(() => ({})));
  if (!body.success) return NextResponse.json({ error: body.error.flatten() }, { status: 400 });

  // Everything that can stop the print page from rendering a PDF has to be
  // checked *before* a free export is spent. The print page refuses a Pro
  // template on the free plan, but only after createPdfExportToken() below had
  // already counted the export: a downgraded user whose CV was still on a Pro
  // template lost all 3 free downloads to three "This template is part of
  // Pro" pages without ever getting a PDF, and was then locked out even after
  // switching to a free template.
  const { data: cvRow, error: cvError } = await supabase
    .from('cvs')
    .select('template_id')
    .eq('id', body.data.cvId)
    .eq('user_id', user.id)
    .maybeSingle();

  if (!cvError) {
    if (!cvRow) {
      return NextResponse.json({ error: 'NOT_FOUND', message: 'CV not found.' }, { status: 404 });
    }

    const templateId = (cvRow as { template_id: string | null }).template_id;
    if (templateId && PRO_TEMPLATES.includes(templateId as TemplateId)) {
      // A failed plan lookup is treated as Pro here: the print page repeats
      // this gate, so the worst case is the old behaviour, never a wrongly
      // blocked paying user.
      const plan = await getUserPlan(user.id).catch(() => 'pro' as const);
      if (plan === 'free') {
        return NextResponse.json(
          {
            error: 'PLAN_GATE',
            reason: 'premium-template',
            message:
              'This template is part of Pro. Switch to Classic, Modern or Minimal to export for free, or upgrade to keep this design.',
          },
          { status: 403 },
        );
      }
    }
  }

  const quota = await createPdfExportToken({
    userId: user.id,
    cvId: body.data.cvId,
  }).catch(() => null);

  if (!quota) {
    return NextResponse.json(
      {
        error: 'EXPORT_UNAVAILABLE',
        message: 'PDF export is temporarily unavailable. Please try again in a moment.',
      },
      { status: 503 },
    );
  }

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
