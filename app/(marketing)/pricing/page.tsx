import Link from 'next/link';
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { ArrowRight, CheckCircle2, CreditCard, XCircle } from 'lucide-react';
import { PricingPlans } from '@/components/payments/PricingPlans';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Start CV Prime free with 3 PDF downloads, then upgrade with Razorpay for unlimited clean exports and premium templates.',
};

const comparisonRows = [
  { feature: 'CV editor and autosave', free: true, pro: true },
  { feature: 'Free template library', free: true, pro: true },
  { feature: 'Premium template library', free: false, pro: true },
  { feature: 'AI bullet rewrites with BYOK', free: true, pro: true },
  { feature: '3 free PDF downloads', free: true, pro: true },
  { feature: 'Unlimited clean PDF export', free: false, pro: true },
  { feature: 'Razorpay checkout', free: false, pro: true },
];

function PricingHeader(): JSX.Element {
  return (
    <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6">
      <Link href="/" className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 font-display text-sm font-bold text-white">
          CV
        </span>
        <span className="font-display text-lg font-bold tracking-tight text-slate-950">
          CV Prime
        </span>
      </Link>
      <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-600 md:flex">
        <Link className="transition hover:text-slate-950" href="/">
          Home
        </Link>
        <Link className="transition hover:text-slate-950" href="/templates">
          Templates
        </Link>
        <Link className="transition hover:text-slate-950" href="/login">
          Sign in
        </Link>
      </nav>
      <Link
        href="/signup?next=/ai-cv"
        className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-black"
      >
        Get started
        <ArrowRight className="h-4 w-4" />
      </Link>
    </header>
  );
}

function FeatureMark({ enabled }: { enabled: boolean }): JSX.Element {
  if (enabled) {
    return <CheckCircle2 className="mx-auto h-5 w-5 text-emerald-600" />;
  }

  return <XCircle className="mx-auto h-5 w-5 text-slate-300" />;
}

export default function PricingPage(): JSX.Element {
  const country = headers().get('x-vercel-ip-country') ?? 'IN';
  const pricingNote =
    country === 'IN'
      ? 'Razorpay checkout is configured in INR for India test mode.'
      : 'Razorpay checkout is still shown in INR for this test-mode build.';

  return (
    <main className="min-h-screen bg-[#f6f9fc] text-slate-950">
      <section className="premium-grid relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_86%_5%,rgba(251,191,36,0.14),transparent_24%)]" />
        <PricingHeader />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 pb-12 pt-8 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:pb-14 lg:pt-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-800">
              <CreditCard className="h-4 w-4" />
              Razorpay-only billing path
            </div>
            <h1 className="mt-7 max-w-4xl font-display text-5xl font-bold leading-[0.96] tracking-[-0.055em] sm:text-6xl">
              Pricing that matches the moment users get serious.
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            Start free, build trust in the editor, then upgrade after the first 3 PDF downloads when clean exports become part of the application workflow.
          </p>
          <p className="max-w-2xl text-sm font-semibold text-cyan-800">{pricingNote}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-20">
        <PricingPlans />

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 p-6 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-700">
              Compare plans
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.03em]">
              The upgrade unlocks speed, polish, and confidence.
            </h2>
          </div>
          <div className="divide-y divide-slate-200">
            {comparisonRows.map((row) => (
              <div
                key={row.feature}
                className="grid grid-cols-[1fr_84px_84px] items-center gap-4 px-5 py-4 text-sm sm:grid-cols-[1fr_140px_140px] sm:px-8"
              >
                <p className="font-semibold text-slate-700">{row.feature}</p>
                <div className="text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  <FeatureMark enabled={row.free} />
                </div>
                <div className="text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  <FeatureMark enabled={row.pro} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-cyan-200 bg-cyan-50 p-6 sm:p-8">
          <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-cyan-950">
            Payment implementation note
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-cyan-900">
            This build intentionally uses Razorpay only. No alternate payment or error-monitoring vendor has been added.
          </p>
        </div>
      </section>
    </main>
  );
}
