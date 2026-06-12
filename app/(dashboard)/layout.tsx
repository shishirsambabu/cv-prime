import Link from 'next/link';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import {
  BarChart3,
  FileText,
  KanbanSquare,
  Settings,
  Sparkles,
  Wand2,
} from 'lucide-react';
import { UpgradeModal } from '@/components/payments/UpgradeModal';
import { createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Workspace',
  description: 'Manage CV drafts, AI tailoring, job tracking, billing, and settings in CV Prime.',
};

const navItems = [
  { href: '/dashboard', label: 'Workspace', icon: FileText },
  { href: '/ai-cv', label: 'AI job CV', icon: Wand2 },
  { href: '/job-tracker', label: 'Job tracker', icon: KanbanSquare },
  { href: '/settings', label: 'Settings', icon: Settings },
];

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
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300 font-display text-sm font-bold text-slate-950">
                CV
              </span>
              <span>
                <span className="block font-display text-lg font-bold tracking-tight">
                  CV Prime
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  Career operating system
                </span>
              </span>
            </Link>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">
                  Signed in
                </p>
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <p className="mt-3 truncate text-sm font-semibold text-slate-200">
                {user.email ?? 'CV Prime user'}
              </p>
            </div>

            <nav className="mt-8 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto space-y-4">
              <div className="rounded-[1.5rem] border border-cyan-300/30 bg-cyan-300/10 p-4">
                <div className="flex items-center gap-2 text-sm font-bold text-cyan-100">
                  <Sparkles className="h-4 w-4" />
                  Pro value path
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Paste a JD, upload your CV, generate a tailored draft, and export 3 PDFs free.
                </p>
              </div>
              <UpgradeModal
                triggerLabel="Upgrade with Razorpay"
                triggerClassName="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-50"
              />
            </div>
          </div>
        </aside>

        <div className="min-w-0">
          <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
            <div className="flex items-center justify-between px-5 py-4 lg:px-8">
              <Link href="/dashboard" className="flex items-center gap-3 lg:hidden">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 font-display text-xs font-bold text-white">
                  CV
                </span>
                <span className="font-display font-bold">CV Prime</span>
              </Link>
              <div className="hidden items-center gap-3 text-sm font-semibold text-slate-500 lg:flex">
                <BarChart3 className="h-4 w-4 text-cyan-700" />
                Build, score, tailor, export
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href="/templates"
                  className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 md:inline-flex"
                >
                  Templates
                </Link>
                <UpgradeModal
                  triggerLabel="Upgrade"
                  triggerClassName="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:bg-black"
                />
              </div>
            </div>
          </header>
          <main className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-10">{children}</main>
        </div>
      </div>
    </div>
  );
}
