import { notFound, redirect } from 'next/navigation';
import { templateMap } from '@/components/templates';
import { consumePdfExportToken } from '@/lib/billingQuota';
import { cvDataSchema } from '@/lib/cv.schema';
import { PRO_TEMPLATES } from '@/lib/constants';
import { createAdminClient } from '@/lib/supabase/admin';
import { createClient } from '@/lib/supabase/server';
import type { CVData, Plan, TemplateId } from '@/types/cv.types';
import type { Database } from '@/types/database.types';
import { PrintGate } from './PrintGate';
import { PrintTrigger } from './PrintTrigger';

export const dynamic = 'force-dynamic';

const TEMPLATE_IDS = [
  'classic',
  'modern',
  'minimal',
  'executive',
  'creative',
  'technical',
  'academic',
  'premium',
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
  searchParams,
}: {
  params: { cvId: string };
  searchParams: { token?: string };
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

  let plan: Plan = 'free';

  try {
    const profileQuery = admin
      ? admin.from('profiles').select('plan').eq('id', user.id).maybeSingle()
      : supabase.from('profiles').select('plan').eq('id', user.id).maybeSingle();
    const { data: profile } = await profileQuery;
    const profilePlan = profile as { plan?: string } | null;
    if (profilePlan?.plan === 'pro') plan = 'pro';
  } catch {
    // Default to the free plan if plan lookup is unavailable.
  }

  const rawTemplateId = (TEMPLATE_IDS as readonly string[]).includes(cv.template_id ?? '')
    ? (cv.template_id as TemplateId)
    : 'modern';

  if (plan === 'free' && PRO_TEMPLATES.includes(rawTemplateId)) {
    return <PrintGate reason="premium-template" />;
  }

  if (!searchParams.token) {
    return <PrintGate />;
  }

  const tokenValid = await consumePdfExportToken({
    userId: user.id,
    cvId: params.cvId,
    token: searchParams.token,
  }).catch(() => false);

  if (!tokenValid) {
    return <PrintGate />;
  }

  const Template = templateMap[rawTemplateId];
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
