import Link from 'next/link';
import { BrandLogo } from '@/components/BrandLogo';
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { ArrowRight, CheckCircle2, CreditCard, ShieldCheck, XCircle } from 'lucide-react';
import { PricingPlans } from '@/components/payments/PricingPlans';
import { MobileNav } from '@/components/marketing/MobileNav';

export const metadata: Metadata = {
  title: 'Pricing — Free AI CV Builder, Pro from ₹999 one-time',
  description:
    'CV Prime is free to start — includes 3 PDF exports, ATS scoring, and AI bullet rewrites. Upgrade to Pro for ₹999 one-time for unlimited PDF exports, no watermark, and all premium CV templates.',
  alternates: { canonical: 'https://cv-prime.in/pricing' },
  openGraph: {
    title: 'CV Prime Pricing — Free AI CV Builder, Pro from ₹999 one-time',
    description: 'Free plan with 3 PDF exports. Pro plan from ₹999 one-time — unlimited exports, no watermark, all premium templates.',
    url: 'https://cv-prime.in/pricing',
  },
};

const comparisonRows = [
  { feature: 'CV editor and autosave', free: true, pro: true },
  { feature: 'Free template library', free: true, pro: true },
  { feature: 'Premium template library', free: false, pro: true },
  { feature: 'AI bullet rewrites with BYOK', free: true, pro: true },
  { feature: '3 free PDF downloads', free: true, pro: true },
  { feature: 'Unlimited clean PDF export', free: false, pro: true },
  { feature: 'Secure monthly billing', free: false, pro: true },
];

function PricingHeader(): JSX.Element {
  return (
    <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6">
      <Link href="/" className="flex items-center gap-3">
        <BrandLogo className="h-12" />
      </Link>
      <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
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
        className="hidden items-center gap-2 rounded-pill bg-brand px-5 py-2.5 text-sm font-bold text-brand-foreground shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-strong md:inline-flex"
      >
        Get started
        <ArrowRight className="h-4 w-4" />
      </Link>
      <MobileNav
        links={[
          { href: '/', label: 'Home' },
          { href: '/templates', label: 'Templates' },
          { href: '/login', label: 'Sign in' },
        ]}
        ctaHref="/signup?next=/ai-cv"
        ctaLabel="Get started"
        tone="dark"
      />
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
      ? 'Prices in INR. Secure checkout securely. Pro payments are non-refundable.'
      : 'Billed in INR. Secure checkout securely. Pro payments are non-refundable.';

  return (
    <main className="min-h-screen bg-[#f6f9fc] text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
            { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://cv-prime.in/pricing' },
          ],
        }) }}
      />
      <section className="premium-grid relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(99,102,241,0.16),transparent_28%),radial-gradient(circle_at_86%_5%,rgba(251,191,36,0.14),transparent_24%)]" />
        <PricingHeader />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 pb-12 pt-8 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:pb-14 lg:pt-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-pill border border-brand/20 bg-brand/[0.06] px-4 py-2 text-sm font-semibold text-brand">
              <CreditCard className="h-4 w-4" />
              Simple, honest pricing
            </div>
            <h1 className="mt-7 max-w-4xl font-display text-5xl font-bold leading-[0.98] tracking-[-0.05em] sm:text-6xl">
              Free to start. Pro when the application gets serious.
            </h1>
          </div>
          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-slate-600">
              Build and tailor for free, then upgrade after your first 3 PDF downloads when clean,
              unlimited exports become part of your application routine.
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm font-medium text-slate-500">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              {pricingNote}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-20">
        <PricingPlans />

        <div className="mt-12 overflow-hidden rounded-panel border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
              Compare plans
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.03em]">
              The upgrade unlocks speed, polish, and confidence.
            </h2>
          </div>
          {/* Column headers */}
          <div className="grid grid-cols-[1fr_84px_84px] items-center gap-4 border-b border-slate-200 bg-slate-50/70 px-5 py-3.5 sm:grid-cols-[1fr_140px_140px] sm:px-8">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
              Feature
            </span>
            <span className="text-center text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              Free
            </span>
            <span className="inline-flex items-center justify-center gap-1.5 rounded-pill bg-brand/10 py-1 text-center text-xs font-bold uppercase tracking-[0.16em] text-brand">
              Pro
            </span>
          </div>
          <div className="divide-y divide-slate-200">
            {comparisonRows.map((row) => (
              <div
                key={row.feature}
                className="grid grid-cols-[1fr_84px_84px] items-center gap-4 px-5 py-4 text-sm transition hover:bg-slate-50/60 sm:grid-cols-[1fr_140px_140px] sm:px-8"
              >
                <p className="font-semibold text-slate-700">{row.feature}</p>
                <div className="text-center">
                  <FeatureMark enabled={row.free} />
                </div>
                <div className="text-center">
                  <FeatureMark enabled={row.pro} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start gap-5 rounded-panel border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:p-8">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-emerald-50 text-emerald-600">
            <ShieldCheck className="h-6 w-6" />
          </span>
          <div>
            <h2 className="font-display text-xl font-bold tracking-[-0.02em] text-slate-950">
              Clear, honest billing.
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
              Cancel future renewals any time from your settings. Pro payments are
              non-refundable — but if something genuinely goes wrong, document it and email{' '}
              <Link href="/terms" className="font-semibold text-brand underline-offset-4 hover:underline">
                our support team
              </Link>{' '}
              and we will review it fairly. Payments are processed securely by our billing partner; we never
              see or store your card details.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
