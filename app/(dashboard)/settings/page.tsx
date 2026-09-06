import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { KeyRound, LockKeyhole, ShieldCheck, Sparkles } from 'lucide-react';
import { PlanSettings } from '@/components/payments/PlanSettings';
import { APIKeySettings } from '@/components/settings/APIKeySettings';
import { EmailPreferences } from '@/components/settings/EmailPreferences';
import { createClient } from '@/lib/supabase/server';
import { syncBillingSubscription } from '@/lib/billingSync';
import { importSiblingOpenRouterKey } from '@/lib/importSiblingKey';
import { readOpenRouterHint, readPlanUsage } from '@/lib/readProfile';
import type { Plan } from '@/types/cv.types';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Settings',
  description: 'Manage OpenRouter key encryption, plan status, billing, and export usage.',
};

const securityNotes = [
  {
    title: 'Encrypted BYOK model',
    body: 'User OpenRouter keys are encrypted with AES-256-GCM before storage.',
    icon: LockKeyhole,
  },
  {
    title: 'No plaintext secrets',
    body: 'Secrets stay server-side and are never exposed to the browser.',
    icon: ShieldCheck,
  },
  {
    title: 'AI controls',
    body: 'The editor uses this key for ATS scoring, bullet rewrites, cover letters, and tailoring.',
    icon: Sparkles,
  },
];

export default async function SettingsPage(): Promise<JSX.Element> {
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

  // Always resolves the subscription id from this user's own profile row
  // (never from a `?subscription_id=` query param): that param is
  // caller-controlled, and trusting it would let anyone land on this page
  // with someone else's subscription id and get it applied to their own
  // account.
  await syncBillingSubscription({ userId: user.id }).catch(() => null);

  // Read the key hint independently from plan/usage so a problem with any other
  // column can never hide the saved key.
  const hint = await readOpenRouterHint(user.id);
  const usage = await readPlanUsage(user.id);
  const plan = usage.plan as Plan;
  const pdfExportsUsed = usage.pdfExportsUsed;

  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-panel bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20 sm:p-8">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-pill bg-brand/25 blur-3xl" />
        <div className="relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-brand-foreground">
            <KeyRound className="h-5 w-5" />
          </div>
          <p className="mt-7 text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">
            Settings
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-[-0.04em]">
            Account controls, AI keys, and security preferences.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
            Connect your own OpenRouter key to use AI features without CV Prime storing plaintext secrets.
          </p>
        </div>
      </section>

      <PlanSettings plan={plan} pdfExportsUsed={pdfExportsUsed} />

      <APIKeySettings initialHint={hint} />

      <EmailPreferences />

      <section className="grid gap-4 md:grid-cols-3">
        {securityNotes.map((note) => {
          const Icon = note.icon;

          return (
            <article key={note.title} className="rounded-card border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-inner bg-brand/10 text-brand">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="mt-5 font-display text-xl font-bold text-slate-950">{note.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">{note.body}</p>
            </article>
          );
        })}
      </section>
    </div>
  );
}
