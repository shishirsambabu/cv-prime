import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { BrainCircuit, UploadCloud, Wand2 } from 'lucide-react';
import { AIJobCVWizard } from '@/components/tailor/AIJobCVWizard';
import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { importSiblingOpenRouterKey } from '@/lib/importSiblingKey';
import type { Database } from '@/types/database.types';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'AI job CV',
  description:
    'Paste a job description, upload your CV, choose a real template, and generate a tailored role-ready CV.',
};

type ProfileAIFlowView = Pick<
  Database['public']['Tables']['profiles']['Row'],
  'openrouter_key_hint' | 'plan' | 'pdf_exports_used'
>;

const flowCards = [
  {
    title: 'Paste the JD',
    body: 'The job description becomes the source of truth for keywords and score.',
    icon: BrainCircuit,
  },
  {
    title: 'Upload your CV',
    body: 'We extract the text, preserve truth, and rewrite only what is supported.',
    icon: UploadCloud,
  },
  {
    title: 'Download the role-ready CV',
    body: 'Choose a template, review the AI score, then export your PDF.',
    icon: Wand2,
  },
];

export default async function AICVPage(): Promise<JSX.Element> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  // Pull the OpenRouter key from a same-email sibling account if this one lacks
  // it (handles users with both an email/password and a Google account).
  await importSiblingOpenRouterKey(user.id);

  // Read the profile with the service-role client (bypasses RLS) so a stale
  // session cookie can never hide the user's own saved key. Falls back to the
  // cookie-based client when the service-role key is not configured.
  const admin = createAdminClient();
  const { data: rawProfile } = admin
    ? await admin
        .from('profiles')
        .select('openrouter_key_hint, plan, pdf_exports_used')
        .eq('id', user.id)
        .maybeSingle()
    : await supabase
        .from('profiles')
        .select('openrouter_key_hint, plan, pdf_exports_used')
        .eq('id', user.id)
        .maybeSingle();
  const profile = rawProfile as ProfileAIFlowView | null;
  const plan = profile?.plan ?? 'free';
  const pdfExportsUsed = profile?.pdf_exports_used ?? 0;

  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20 sm:p-8">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-amber-300/10 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">
              AI job CV
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-[1] tracking-[-0.045em] sm:text-5xl">
              Paste a role. Upload your CV. Get a tailored CV ready to send.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              CV Prime uses your OpenRouter key to parse your current CV, tailor it to the JD, score the match, and produce a template-ready PDF.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.08] p-5 backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
              Free tier
            </p>
            <p className="mt-3 font-display text-4xl font-bold">
              {plan === 'pro' ? 'Unlimited' : `${Math.max(0, 3 - pdfExportsUsed)}/3`}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {plan === 'pro'
                ? 'You can export as many PDFs as you need.'
                : 'Free PDF downloads remaining before upgrade.'}
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {flowCards.map((card) => {
          const Icon = card.icon;

          return (
            <article key={card.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-800">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="mt-5 font-display text-xl font-bold text-slate-950">
                {card.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">{card.body}</p>
            </article>
          );
        })}
      </section>

      <AIJobCVWizard
        hasOpenRouterKey={Boolean(profile?.openrouter_key_hint)}
        plan={plan}
        pdfExportsUsed={pdfExportsUsed}
      />
    </div>
  );
}
