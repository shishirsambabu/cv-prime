import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import type { Database } from '@/types/database.types';

export const metadata: Metadata = {
  title: 'Cover letter',
  description: 'Review and edit an AI-generated CV Prime cover letter draft.',
};

interface CoverLetterPageProps {
  params: {
    id: string;
  };
}

type CoverLetterView = Pick<
  Database['public']['Tables']['cover_letters']['Row'],
  'title' | 'content' | 'job_description' | 'created_at'
>;

export default async function CoverLetterPage({
  params,
}: CoverLetterPageProps): Promise<JSX.Element> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    notFound();
  }

  const { data: rawCoverLetter } = await supabase
    .from('cover_letters')
    .select('title, content, job_description, created_at')
    .eq('id', params.id)
    .eq('user_id', user.id)
    .maybeSingle();
  const coverLetter = rawCoverLetter as CoverLetterView | null;

  if (!coverLetter) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20 sm:p-8">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">
          Cover letter
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em]">
          {coverLetter.title}
        </h1>
        <p className="mt-3 text-sm text-slate-300">
          Created {coverLetter.created_at ? new Date(coverLetter.created_at).toLocaleString() : 'recently'}
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <label htmlFor="cover-letter-content" className="font-display text-2xl font-bold">
            Editable draft
          </label>
          <textarea
            id="cover-letter-content"
            defaultValue={coverLetter.content ?? ''}
            className="mt-5 min-h-[520px] w-full rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700 outline-none transition focus:border-cyan-500"
          />
        </article>
        <aside className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-display text-2xl font-bold">Job description</h2>
          <p className="mt-4 whitespace-pre-wrap text-sm leading-7 text-slate-600">
            {coverLetter.job_description ?? 'No job description saved.'}
          </p>
        </aside>
      </section>
    </div>
  );
}
