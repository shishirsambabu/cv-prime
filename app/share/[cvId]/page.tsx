import Link from 'next/link';
import { BrandLogo } from '@/components/BrandLogo';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { templateMap } from '@/components/templates';
import { cvDataSchema } from '@/lib/cv.schema';
import { createClient } from '@/lib/supabase/server';
import type { TemplateId } from '@/types/cv.types';
import type { Database } from '@/types/database.types';

export async function generateMetadata({
  params,
}: {
  params: { cvId: string };
}): Promise<Metadata> {
  try {
    const supabase = createClient();
    const { data } = await supabase
      .from('cvs')
      .select('title, data')
      .eq('id', params.cvId)
      .eq('is_public', true)
      .single();
    if (!data) throw new Error('not found');
    const parsed = cvDataSchema.safeParse((data as { data?: unknown }).data);
    const name = parsed.success ? parsed.data.personal.name : null;
    const role = parsed.success ? parsed.data.personal.title : null;
    const title = name && role ? `${name} — ${role} CV` : (data as { title?: string }).title ?? 'Shared CV';
    return {
      title,
      description: `View ${name ?? 'a professional'}${role ? `'s ${role}` : ''} CV created with CV Prime — the AI CV builder.`,
      openGraph: {
        title,
        description: `${name ?? 'A professional'}${role ? ` | ${role}` : ''} — CV built and shared via CV Prime.`,
        images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CV shared from CV Prime' }],
      },
    };
  } catch {
    return {
      title: 'Shared CV — CV Prime',
      description: 'View a professional CV built and shared with CV Prime, the free AI CV builder.',
    };
  }
}

const templateIds: TemplateId[] = [
  'classic',
  'modern',
  'minimal',
  'executive',
  'creative',
  'technical',
  'academic',
  'premium',
];

type PublicCVView = Pick<
  Database['public']['Tables']['cvs']['Row'],
  'title' | 'template_id' | 'data' | 'is_public'
>;

interface SharePageProps {
  params: {
    cvId: string;
  };
}

export default async function SharePage({ params }: SharePageProps): Promise<JSX.Element> {
  const supabase = createClient();
  const { data: rawCv } = await supabase
    .from('cvs')
    .select('title, template_id, data, is_public')
    .eq('id', params.cvId)
    .eq('is_public', true)
    .maybeSingle();
  const cv = rawCv as PublicCVView | null;

  if (!cv || !cv.is_public) {
    notFound();
  }

  const parsedData = cvDataSchema.safeParse(cv.data);
  const templateId = templateIds.includes(cv.template_id as TemplateId)
    ? (cv.template_id as TemplateId)
    : 'modern';
  const Template = templateMap[templateId];

  if (!parsedData.success) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#eef3f8] px-5 py-8 text-slate-950">
      <div className="mx-auto mb-6 flex max-w-5xl items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <BrandLogo className="h-9" />
        </Link>
        <Link
          href="/signup?next=/ai-cv"
          className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white"
        >
          Create yours
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <section className="mx-auto max-w-[794px] overflow-auto rounded-[1.5rem] bg-white shadow-2xl shadow-slate-950/15">
        <Template data={parsedData.data} />
      </section>
    </main>
  );
}
