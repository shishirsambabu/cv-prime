import Link from 'next/link';
import { BrandLogo } from '@/components/BrandLogo';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { BarChart3, Sparkles } from 'lucide-react';
import { UpgradeModal } from '@/components/payments/UpgradeModal';
import { DashboardNav } from '@/components/dashboard/DashboardNav';
import { DashboardMobileNav } from '@/components/dashboard/DashboardMobileNav';
import { createClient } from '@/lib/supabase/server';

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

  return (
    <div className="min-h-screen bg-[#eef3f8] text-slate-950">
      <div className="grid min-h-screen lg:grid-cols-[292px_1fr]">
        <aside className="hidden bg-slate-950 text-white lg:block">
          <div className="flex h-full flex-col px-5 py-6">
            <Link href="/" className="block">
              <BrandLogo white className="h-9" />
              <span className="mt-2 block text-xs font-medium text-slate-400">
                Career operating system
              </span>
            </Link>

            <div className="mt-8 rounded-card border border-white/10 bg-white/[0.06] p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                  Signed in
                </p>
                <span className="h-2.5 w-2.5 rounded-pill bg-emerald-400" />
              </div>
              <p className="mt-3 truncate text-sm font-semibold text-slate-200">
                {user.email ?? 'CV Prime user'}
              </p>
            </div>

            <DashboardNav />

            <div className="mt-auto space-y-4">
              <div className="rounded-card border border-cyan-300/30 bg-cyan-300/10 p-4">
                <div className="flex items-center gap-2 text-sm font-bold text-cyan-100">
                  <Sparkles className="h-4 w-4" />
                  Pro value path
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Free includes unlimited drafts and 3 PDF exports. Pro unlocks unlimited clean exports and premium templates.
                </p>
              </div>
              <UpgradeModal
                triggerLabel="Upgrade to Pro"
                triggerClassName="inline-flex w-full items-center justify-center gap-2 rounded-pill bg-white px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-slate-100"
              />
            </div>
          </div>
        </aside>

        <div className="min-w-0">
          <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
            <div className="flex items-center justify-between px-5 py-4 lg:px-8">
              <Link href="/dashboard" className="lg:hidden">
                <BrandLogo className="h-8" />
              </Link>
              <div className="hidden items-center gap-3 text-sm font-medium text-slate-500 lg:flex">
                <BarChart3 className="h-4 w-4 text-brand" />
                Build, score, tailor, export
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href="/templates"
                  className="hidden rounded-pill border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 md:inline-flex"
                >
                  Templates
                </Link>
                <UpgradeModal
                  triggerLabel="Upgrade"
                  triggerClassName="inline-flex items-center gap-2 rounded-pill bg-brand px-4 py-2 text-sm font-bold text-brand-foreground transition hover:bg-brand-strong"
                />
                <DashboardMobileNav email={user.email ?? undefined} />
              </div>
            </div>
          </header>
          <main className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-10">{children}</main>
        </div>
      </div>
    </div>
  );
}
