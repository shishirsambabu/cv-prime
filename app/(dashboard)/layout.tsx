import { BrandLogo } from '@/components/BrandLogo';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { BarChart3, CheckCircle2, LogOut, Sparkles, Zap } from 'lucide-react';
import { UpgradeModal } from '@/components/payments/UpgradeModal';
import { DashboardNav } from '@/components/dashboard/DashboardNav';
import { DashboardMobileNav } from '@/components/dashboard/DashboardMobileNav';
import { GuardedLink } from '@/components/dashboard/GuardedLink';
import { createClient } from '@/lib/supabase/server';
import { readPlanUsage } from '@/lib/readProfile';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Workspace',
  description: 'Manage CV drafts, AI tailoring, job tracking, billing, and settings in CV Prime.',
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): Promise<JSX.Element> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  const { plan } = await readPlanUsage(user.id);
  const isPro = plan === 'pro';

  return (
    <div className="min-h-screen bg-[#eef3f8] text-slate-950">
      <div className="grid min-h-screen lg:grid-cols-[292px_1fr]">
        <aside className="hidden bg-slate-950 text-white lg:block">
          <div className="flex h-full flex-col px-5 py-6">
            <GuardedLink href="/" className="block">
              <BrandLogo white className="h-9" />
              <span className="mt-2 block text-xs font-medium text-slate-400">
                Career operating system
              </span>
            </GuardedLink>

            <div className="mt-8 rounded-card border border-white/10 bg-white/[0.06] p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                  Signed in
                </p>
                <div className="flex items-center gap-2">
                  {isPro && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-amber-300">
                      <Zap className="h-2.5 w-2.5" />
                      Pro
                    </span>
                  )}
                  <span className="h-2.5 w-2.5 rounded-pill bg-emerald-400" />
                </div>
              </div>
              <p className="mt-3 truncate text-sm font-semibold text-slate-200">
                {user.email ?? 'CV Prime user'}
              </p>
            </div>

            <DashboardNav />

            <div className="mt-auto space-y-4">
              <div className="rounded-card border border-cyan-300/30 bg-cyan-300/10 p-4">
                <div className="flex items-center gap-2 text-sm font-bold text-cyan-100">
                  {isPro ? <CheckCircle2 className="h-4 w-4" /> : <Sparkles className="h-4 w-4" />}
                  {isPro ? 'Pro active' : 'Pro value path'}
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {isPro
                    ? 'Unlimited clean exports, premium templates, and Pro tools are unlocked on this account.'
                    : 'Free includes unlimited drafts and 3 PDF exports. Pro unlocks unlimited clean exports and premium templates.'}
                </p>
              </div>
              {isPro ? (
                <span className="inline-flex w-full items-center justify-center gap-2 rounded-pill bg-emerald-400 px-4 py-3 text-sm font-bold text-emerald-950">
                  <CheckCircle2 className="h-4 w-4" />
                  Pro unlocked
                </span>
              ) : (
                <UpgradeModal
                  triggerLabel="Upgrade to Pro"
                  triggerClassName="inline-flex w-full items-center justify-center gap-2 rounded-pill bg-white px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-slate-100"
                />
              )}
              <form action="/api/auth/signout" method="post">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-pill border border-white/15 px-4 py-3 text-sm font-bold text-slate-200 transition hover:bg-white/[0.08] hover:text-white"
                >
                  <LogOut className="h-4 w-4" />
                  Sign out
                </button>
              </form>
            </div>
          </div>
        </aside>

        <div className="min-w-0">
          <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
            <div className="flex items-center justify-between px-5 py-4 lg:px-8">
              <GuardedLink href="/dashboard" className="lg:hidden">
                <BrandLogo className="h-8" />
              </GuardedLink>
              <div className="hidden items-center gap-3 text-sm font-medium text-slate-500 lg:flex">
                <BarChart3 className="h-4 w-4 text-brand" />
                Build, score, tailor, export
              </div>
              <div className="flex items-center gap-3">
                <GuardedLink
                  href="/templates"
                  className="hidden rounded-pill border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 md:inline-flex"
                >
                  Templates
                </GuardedLink>
                {isPro ? (
                  <span className="inline-flex items-center gap-2 rounded-pill bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700 ring-1 ring-emerald-200">
                    <CheckCircle2 className="h-4 w-4" />
                    Pro
                  </span>
                ) : (
                  <UpgradeModal
                    triggerLabel="Upgrade"
                    triggerClassName="inline-flex items-center gap-2 rounded-pill bg-brand px-4 py-2 text-sm font-bold text-brand-foreground transition hover:bg-brand-strong"
                  />
                )}
                <DashboardMobileNav email={user.email ?? undefined} plan={plan} />
              </div>
            </div>
          </header>
          <main className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-10">{children}</main>
        </div>
      </div>
    </div>
  );
}
