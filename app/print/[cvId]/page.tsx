import { notFound, redirect } from 'next/navigation';
import { templateMap } from '@/components/templates';
import { cvDataSchema } from '@/lib/cv.schema';
import { createAdminClient } from '@/lib/supabase/admin';
import { createClient } from '@/lib/supabase/server';
import type { CVData, Plan, TemplateId } from '@/types/cv.types';
import type { Database } from '@/types/database.types';
import { PrintTrigger } from './PrintTrigger';
import { PrintGate } from './PrintGate';

export const dynamic = 'force-dynamic';

const TEMPLATE_IDS = [
  'classic', 'modern', 'minimal', 'executive',
  'creative', 'technical', 'academic', 'premium',
] as const;

type CVRow = Pick<
  Database['public']['Tables']['cvs']['Row'],
  'title' | 'template_id' | 'data' | 'user_id'
>;

const PRINT_STYLES = `
  @page { size: A4; margin: 0; }
  @media print {
    html, body { background: #ffffff !important; }
    body::before, body::after { display: none !important; }
    .print-page { box-shadow: none !important; }
    .no-print { display: none !important; }
  }
  .print-page, .print-page * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
  body { background: #ffffff !important; }
`;

export default async function PrintPage({
  params,
}: {
  params: { cvId: string };
}): Promise<JSX.Element> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect('/login');

  const admin = createAdminClient();

  const { data: raw } = admin
    ? await admin.from('cvs').select('title, template_id, data, user_id').eq('id', params.cvId).single()
    : await supabase.from('cvs').select('title, template_id, data, user_id').eq('id', params.cvId).single();

  const cv = raw as CVRow | null;
  if (!cv || cv.user_id !== user.id) notFound();

  const parsedData = cvDataSchema.safeParse(cv.data);
  if (!parsedData.success) notFound();

  // ── Plan gate — enforced server-side so no client bypass is possible ────
  let plan: Plan = 'free';
  let pdfExportsUsed = 0;

  try {
    const profileQuery = admin
      ? admin.from('profiles').select('plan, pdf_exports_used').eq('id', user.id).maybeSingle()
      : supabase.from('profiles').select('plan, pdf_exports_used').eq('id', user.id).maybeSingle();
    const { data: profile } = await profileQuery;
    const p = profile as { plan?: string; pdf_exports_used?: number } | null;
    if (p?.plan === 'pro') plan = 'pro';
    pdfExportsUsed = p?.pdf_exports_used ?? 0;
  } catch {
    /* default free */
  }

  // Free users who have hit the limit see the upgrade wall.
  if (plan === 'free' && pdfExportsUsed >= 3) {
    return <PrintGate />;
  }

  // Increment the counter for every successful print page render so direct
  // navigation cannot bypass the /api/export-pdf/check endpoint.
  if (plan === 'free') {
    const next = pdfExportsUsed + 1;
    const updateQuery = admin
      ? admin.from('profiles').update({ pdf_exports_used: next } as never).eq('id', user.id)
      : supabase.from('profiles').update({ pdf_exports_used: next } as never).eq('id', user.id);
    void updateQuery;
  }

  const rawTemplateId = (TEMPLATE_IDS as readonly string[]).includes(cv.template_id ?? '')
    ? (cv.template_id as TemplateId)
    : 'modern';
  // Free users cannot render pro templates — silently fall back to 'modern'.
  const PRO_TEMPLATE_IDS: TemplateId[] = ['executive', 'creative', 'technical', 'academic', 'premium'];
  const templateId: TemplateId =
    plan === 'free' && PRO_TEMPLATE_IDS.includes(rawTemplateId) ? 'modern' : rawTemplateId;
  const Template = templateMap[templateId];
  const data: CVData = parsedData.data;

  return (
    <>
      {/* eslint-disable-next-line react/no-danger */}
      <style dangerouslySetInnerHTML={{ __html: PRINT_STYLES }} />
      <PrintTrigger />
      <div className="relative">
        <div className="print-page mx-auto">
          <Template data={data} forExport />
        </div>
        {plan === 'free' ? (
          <div
            style={{
              position: 'fixed',
              right: 24,
              bottom: 18,
              zIndex: 9999,
              font: '600 11px Arial, sans-serif',
              color: 'rgba(15,23,42,0.32)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Created with CV Prime free
          </div>
        ) : null}
      </div>
    </>
  );
}
