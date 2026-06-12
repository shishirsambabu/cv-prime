import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { KeyRound, LockKeyhole, ShieldCheck, Sparkles } from 'lucide-react';
import { PlanSettings } from '@/components/payments/PlanSettings';
import { APIKeySettings } from '@/components/settings/APIKeySettings';
import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';
import type { Plan } from '@/types/cv.types';
import type { Database } from '@/types/database.types';

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

type ProfileKeyView = Pick<
  Database['public']['Tables']['profiles']['Row'],
  'openrouter_key_hint' | 'plan' | 'pdf_exports_used'
>;

export default async function SettingsPage(): Promise<JSX.Element> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  // Read with the service-role client (bypasses RLS) so a stale session cookie
  // can never hide the user's own saved key. Falls back to the cookie client.
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
  const profile = rawProfile as ProfileKeyView | null;
  const plan = (profile?.plan ?? 'free') as Plan;

  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20 sm:p-8">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300 text-slate-950">
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

      <PlanSettings plan={plan} pdfExportsUsed={profile?.pdf_exports_used ?? 0} />

      <APIKeySettings initialHint={profile?.openrouter_key_hint ?? null} />

      <section className="grid gap-4 md:grid-cols-3">
        {securityNotes.map((note) => {
          const Icon = note.icon;

          return (
            <article key={note.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-800">
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
