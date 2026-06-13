import React from 'react';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { renderPDF } from '@/lib/browserless';
import { cvDataSchema } from '@/lib/cv.schema';
import { rateLimit } from '@/lib/rateLimit';
import { createClient } from '@/lib/supabase/server';
import { templateMap } from '@/components/templates';
import type { CVData, Plan, TemplateId } from '@/types/cv.types';
import type { Database } from '@/types/database.types';

const exportPdfSchema = z.object({
  cvId: z.string().uuid(),
});

const templateIdSchema = z.enum([
  'classic',
  'modern',
  'minimal',
  'executive',
  'creative',
  'technical',
  'academic',
  'premium',
]);

type CVExportView = Pick<
  Database['public']['Tables']['cvs']['Row'],
  'title' | 'template_id' | 'data'
>;

type ProfilePlanView = Pick<
  Database['public']['Tables']['profiles']['Row'],
  'plan' | 'pdf_exports_used'
>;

function safeFileName(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 80) || 'cv';
}

export const runtime = 'nodejs';

async function renderTemplateHtml(data: CVData, templateId: TemplateId, plan: Plan): Promise<string> {
  const { renderToStaticMarkup } = await import('react-dom/server');
  const Template = templateMap[templateId];
  const templateHtml = renderToStaticMarkup(
    React.createElement(Template, { data, forExport: true })
  );
  const watermark =
    plan === 'free'
      ? '<div style="position:fixed;right:24px;bottom:18px;z-index:9999;font:600 11px Arial,sans-serif;color:rgba(15,23,42,0.32);letter-spacing:0.08em;text-transform:uppercase;">Created with CV Prime free</div>'
      : '';

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=794, initial-scale=1" />
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap');
    * { box-sizing: border-box; }
    body { margin: 0; width: 794px; min-height: 1123px; background: white; font-family: 'Plus Jakarta Sans', sans-serif; }
    .font-display { font-family: 'Space Grotesk', sans-serif; }
    .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }
  </style>
</head>
<body>
  ${watermark}
  ${templateHtml}
</body>
</html>`;
}

export async function POST(req: Request): Promise<NextResponse> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const limited = await rateLimit(user.id, 'export-pdf', 20, '1h');
  if (limited) {
    return NextResponse.json({ error: 'RATE_LIMITED' }, { status: 429 });
  }

  const body = exportPdfSchema.safeParse(await req.json().catch(() => ({})));
  if (!body.success) {
    return NextResponse.json({ error: body.error.flatten() }, { status: 400 });
  }

  const [{ data: rawCv }, { data: rawProfile }] = await Promise.all([
    supabase
      .from('cvs')
      .select('title, template_id, data')
      .eq('id', body.data.cvId)
      .eq('user_id', user.id)
      .single(),
    supabase.from('profiles').select('plan, pdf_exports_used').eq('id', user.id).maybeSingle(),
  ]);
  const cv = rawCv as CVExportView | null;
  const profile = rawProfile as ProfilePlanView | null;

  if (!cv) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const parsedTemplateId = templateIdSchema.safeParse(cv.template_id);
  const parsedData = cvDataSchema.safeParse(cv.data);

  if (!parsedTemplateId.success || !parsedData.success) {
    return NextResponse.json({ error: 'Invalid CV data' }, { status: 422 });
  }

  const plan = ((profile as { plan?: Plan } | null)?.plan ?? 'free') as Plan;
  const pdfExportsUsed = profile?.pdf_exports_used ?? 0;

  if (plan === 'free' && pdfExportsUsed >= 3) {
    return NextResponse.json(
      {
        error: 'PLAN_GATE',
        message: 'You have used your 3 free PDF downloads. Upgrade to export more.',
      },
      { status: 403 }
    );
  }

  const html = await renderTemplateHtml(parsedData.data, parsedTemplateId.data, plan);

  try {
    const pdf = await renderPDF(html);
    const fileName = `cv-prime-${safeFileName(cv.title)}.pdf`;

    if (plan === 'free') {
      const updates: Database['public']['Tables']['profiles']['Update'] = {
        pdf_exports_used: pdfExportsUsed + 1,
      };

      await supabase.from('profiles').update(updates as never).eq('id', user.id);
    }

    return new NextResponse(new Uint8Array(pdf), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${fileName}"`,
      },
    });
  } catch (error) {
    console.error('export-pdf failed', error);
    return NextResponse.json(
      { error: 'PDF_FAILED', message: 'Could not export this CV right now.' },
      { status: 500 }
    );
  }
}
