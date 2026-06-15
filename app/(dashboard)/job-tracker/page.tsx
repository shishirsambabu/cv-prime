import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { BriefcaseBusiness, KanbanSquare, Sparkles } from 'lucide-react';
import { JobTrackerBoard, type JobTrackerItem } from '@/components/job-tracker/JobTrackerBoard';
import { createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Job tracker',
  description: 'Track saved, applied, interview, offer, and rejected roles in CV Prime.',
};

export default async function JobTrackerPage(): Promise<JSX.Element> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  const [{ data: profile }, { data: jobs }] = await Promise.all([
    supabase.from('profiles').select('plan').eq('id', user.id).maybeSingle(),
    supabase
      .from('job_applications')
      .select('id, company, role, status, applied_date, notes, job_url')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false }),
  ]);
  const plan = ((profile as { plan?: 'free' | 'pro' } | null)?.plan ?? 'free') as
    | 'free'
    | 'pro';
  const jobList = (jobs ?? []) as JobTrackerItem[];

  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-panel bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20 sm:p-8">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-pill bg-brand/25 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-pill border border-white/10 bg-white/[0.08] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
              <KanbanSquare className="h-3.5 w-3.5" />
              Job tracker
            </div>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-[1] tracking-[-0.045em] sm:text-5xl">
              Keep every application moving instead of guessing what happened.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Track saved roles, applications, interviews, offers, and rejections in one board.
            </p>
          </div>
          <div className="rounded-card border border-white/10 bg-white/[0.08] p-5 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-inner bg-brand text-brand-foreground">
                <BriefcaseBusiness className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  Current load
                </p>
                <p className="font-display text-3xl font-bold">{jobList.length}</p>
              </div>
            </div>
            <div className="mt-5 flex items-start gap-3 rounded-2xl bg-white/[0.08] p-4">
              <Sparkles className="mt-0.5 h-4 w-4 text-cyan-200" />
              <p className="text-sm leading-6 text-slate-300">
                Pair each tracked role with a tailored CV from the AI job CV flow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <JobTrackerBoard initialJobs={jobList} plan={plan} />
    </div>
  );
}
