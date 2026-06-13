import { notFound, redirect } from 'next/navigation';
import { templateMap } from '@/components/templates';
import { cvDataSchema } from '@/lib/cv.schema';
import { createAdminClient } from '@/lib/supabase/admin';
import { createClient } from '@/lib/supabase/server';
import type { CVData, Plan, TemplateId } from '@/types/cv.types';
import type { Database } from '@/types/database.types';
import { PrintTrigger } from './PrintTrigger';

export const dynamic = 'force-dynamic';

const TEMPLATE_IDS = [
  'classic', 'modern', 'minimal', 'executive',
  'creative', 'technical', 'academic', 'premium',
] as const;

type CVRow = Pick<
  Database['public']['Tables']['cvs']['Row'],
  'title' | 'template_id' | 'data' | 'user_id'
>;

// Plain element so the print styles render server-side without a client boundary.
const PRINT_STYLES = `
  @page { size: A4; margin: 0; }
  @media print {
    html, body { background: #ffffff !important; }
    body::before, body::after { display: none !important; }
    .print-page { box-shadow: none !important; }
  }
  /* Ensure template background colours print (dark sidebars, accents, etc.). */
  .print-page, .print-page * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
  /* Strip the app's gradient page background while on the print route. */
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
    ? await admin
        .from('cvs')
        .select('title, template_id, data, user_id')
        .eq('id', params.cvId)
        .single()
    : await supabase
        .from('cvs')
        .select('title, template_id, data, user_id')
        .eq('id', params.cvId)
        .single();

  const cv = raw as CVRow | null;
  if (!cv || cv.user_id !== user.id) notFound();

  const parsedData = cvDataSchema.safeParse(cv.data);
  if (!parsedData.success) notFound();

  const templateId = (TEMPLATE_IDS as readonly string[]).includes(cv.template_id ?? '')
    ? (cv.template_id as TemplateId)
    : 'modern';
  const Template = templateMap[templateId];

  let plan: Plan = 'free';
  try {
    const { data: profile } = admin
      ? await admin.from('profiles').select('plan').eq('id', user.id).maybeSingle()
      : await supabase.from('profiles').select('plan').eq('id', user.id).maybeSingle();
    if ((profile as { plan?: string } | null)?.plan === 'pro') plan = 'pro';
  } catch {
    /* default free */
  }

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
