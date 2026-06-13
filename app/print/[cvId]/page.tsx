import { notFound, redirect } from 'next/navigation';
import { templateMap } from '@/components/templates';
import { cvDataSchema } from '@/lib/cv.schema';
import { createAdminClient } from '@/lib/supabase/admin';
import { createClient } from '@/lib/supabase/server';
import type { CVData, Plan, TemplateId } from '@/types/cv.types';
import type { Database } from '@/types/database.types';
import { PrintTrigger } from './PrintTrigger';

export const dynamic = 'force-dynamic';

const templateIdSchema = [
  'classic', 'modern', 'minimal', 'executive',
  'creative', 'technical', 'academic', 'premium',
] as const;

type CVRow = Pick<Database['public']['Tables']['cvs']['Row'], 'title' | 'template_id' | 'data' | 'user_id'>;

export default async function PrintPage({
  params,
}: {
  params: { cvId: string };
}): Promise<JSX.Element> {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login');

  const admin = createAdminClient();
  const { data: raw } = admin
    ? await admin.from('cvs').select('title, template_id, data, user_id').eq('id', params.cvId).single()
    : await supabase.from('cvs').select('title, template_id, data, user_id').eq('id', params.cvId).single();

  const cv = raw as CVRow | null;
  if (!cv || cv.user_id !== user.id) notFound();

  const parsedData = cvDataSchema.safeParse(cv.data);
  if (!parsedData.success) notFound();

  const templateId = (templateIdSchema as readonly string[]).includes(cv.template_id ?? '')
    ? (cv.template_id as TemplateId)
    : 'modern';

  const Template = templateMap[templateId];

  // Read plan to decide watermark
  let plan: Plan = 'free';
  try {
    const { data: profile } = admin
      ? await admin.from('profiles').select('plan').eq('id', user.id).maybeSingle()
      : await supabase.from('profiles').select('plan').eq('id', user.id).maybeSingle();
    if ((profile as { plan?: string } | null)?.plan === 'pro') plan = 'pro';
  } catch { /* default free */ }

  const data: CVData = parsedData.data;

  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=794, initial-scale=1" />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://cdn.tailwindcss.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap"
        />
        <style>{`
          * { box-sizing: border-box; }
          body { margin: 0; width: 794px; background: white; font-family: 'Plus Jakarta Sans', sans-serif; }
          .font-display { font-family: 'Space Grotesk', sans-serif; }
          .font-sans   { font-family: 'Plus Jakarta Sans', sans-serif; }
          @media print {
            @page { margin: 0; size: A4; }
            body  { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            .no-print { display: none !important; }
          }
        `}</style>
      </head>
      <body>
        <PrintTrigger />
        {plan === 'free' && (
          <div
            style={{
              position: 'fixed', right: 24, bottom: 18, zIndex: 9999,
              font: '600 11px Arial,sans-serif', color: 'rgba(15,23,42,0.32)',
              letterSpacing: '0.08em', textTransform: 'uppercase',
            }}
          >
            Created with CV Prime free
          </div>
        )}
        <Template data={data} forExport />
      </body>
    </html>
  );
}
