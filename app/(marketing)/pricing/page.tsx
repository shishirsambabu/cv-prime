import Link from 'next/link';
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { CheckCircle2, CreditCard, ShieldCheck, XCircle } from 'lucide-react';
import { PricingPlans } from '@/components/payments/PricingPlans';
import { createClient } from '@/lib/supabase/server';
import { FaqSection } from '@/components/marketing/FaqSection';
import type { FaqEntry } from '@/components/marketing/FaqSection';

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
  { feature: 'Lifetime access — pay once, own forever', free: false, pro: true },
];

const faqs: FaqEntry[] = [
  {
    question: 'Is CV Prime free to use?',
    answer:
      "Yes. The Free plan costs ₹0 and has no time limit. It includes unlimited resume drafts, the autosave editor, 3 free templates and 3 PDF downloads. Free exports carry a watermark; upgrading to Lifetime Pro removes it.",
  },
  {
    question: 'How much does CV Prime Pro cost?',
    answer:
      "CV Prime Lifetime Pro is a one-time payment of ₹999. There is no monthly or annual subscription and no renewal charge — you pay once and keep Pro access. Festive offers can temporarily lower the price shown on this page.",
  },
  {
    question: 'Is CV Prime Pro a subscription?',
    answer:
      "No. Lifetime Pro is a single one-time purchase. It never auto-renews, so there is nothing to cancel and no recurring charge on your card or UPI.",
  },
  {
    question: 'What do I get when I upgrade to Pro?',
    answer:
      "Pro unlocks unlimited clean PDF exports with no watermark, all 5 premium templates (Executive, Creative, Technical, Academic and Premium) in addition to the 3 free ones, and lifetime access to those features.",
  },
  {
    question: 'Do I need to pay for the AI features?',
    answer:
      "CV Prime's AI features run on your own OpenRouter API key (bring your own key). You add the key once in Settings, it is stored encrypted, and AI usage is billed by OpenRouter at their rates rather than by CV Prime.",
  },
  {
    question: 'Can I get a refund on CV Prime Pro?',
    answer:
      "Pro payments are non-refundable. If something genuinely goes wrong with your purchase, contact support with the details and the team will review it fairly. You can try the Free plan for as long as you like before upgrading.",
  },
  {
    question: 'Which payment methods are accepted?',
    answer:
      "Prices are in Indian Rupees (INR) and checkout is handled by a secure payment partner. CV Prime never sees or stores your card details.",
  },
];

function FeatureMark({ enabled }: { enabled: boolean }): JSX.Element {
  if (enabled) {
    return <CheckCircle2 className="mx-auto h-5 w-5 text-emerald-600" />;
  }

  return <XCircle className="mx-auto h-5 w-5 text-slate-300" />;
}

async function checkIsLoggedIn(): Promise<boolean> {
  // This is a public marketing page: it must still render (as if signed out,
  // which only hides the checkout buttons behind a "Sign up" CTA) when
  // Supabase env vars are absent or the auth service is briefly unreachable.
  // createClient()/getUser() throwing uncaught here previously 500'd the
  // entire pricing page for every visitor — logged in or not — turning any
  // Supabase hiccup into a total loss of the site's highest-conversion page.
  try {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return Boolean(user);
  } catch {
    return false;
  }
}

export default async function PricingPage(): Promise<JSX.Element> {
  const country = headers().get('x-vercel-ip-country') ?? 'IN';
  const isLoggedIn = await checkIsLoggedIn();
  const pricingNote =
    country === 'IN'
      ? 'Prices in INR. Secure checkout securely. Pro payments are non-refundable.'
      : 'Billed in INR. Secure checkout securely. Pro payments are non-refundable.';

  return (
    <main className="min-h-screen bg-transparent text-white">
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'CV Prime Pro',
          description: 'Lifetime access to unlimited PDF exports, no watermark, and all premium CV templates on CV Prime.',
          brand: { '@type': 'Brand', name: 'CV Prime' },
          offers: [
            {
              '@type': 'Offer',
              name: 'CV Prime Pro — lifetime',
              price: '999',
              priceCurrency: 'INR',
              availability: 'https://schema.org/InStock',
              url: 'https://cv-prime.in/pricing',
              category: 'Lifetime access — pay once, own forever',
            },
            {
              '@type': 'Offer',
              name: 'CV Prime Free',
              price: '0',
              priceCurrency: 'INR',
              availability: 'https://schema.org/InStock',
              url: 'https://cv-prime.in/pricing',
              category: 'Free plan — 3 PDF exports, ATS scoring, AI bullet rewrites',
            },
          ],
        }) }}
      />
      <section className="premium-grid relative overflow-hidden bg-white/[0.04]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(99,102,241,0.16),transparent_28%),radial-gradient(circle_at_86%_5%,rgba(251,191,36,0.14),transparent_24%)]" />

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
            <p className="text-lg leading-8 text-slate-300">
              Build and tailor for free, then upgrade after your first 3 PDF downloads when clean,
              unlimited exports become part of your application routine.
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm font-medium text-slate-400">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              {pricingNote}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-20">
        <PricingPlans showCheckout={isLoggedIn} />

        <div className="mt-12 overflow-hidden rounded-panel border border-white/10 bg-white/[0.04] shadow-sm">
          <div className="border-b border-white/10 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
              Compare plans
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.03em]">
              The upgrade unlocks speed, polish, and confidence.
            </h2>
          </div>
          {/* Column headers */}
          <div className="grid grid-cols-[1fr_84px_84px] items-center gap-4 border-b border-white/10 bg-slate-50/70 px-5 py-3.5 sm:grid-cols-[1fr_140px_140px] sm:px-8">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
              Feature
            </span>
            <span className="text-center text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Free
            </span>
            <span className="inline-flex items-center justify-center gap-1.5 rounded-pill bg-brand/10 py-1 text-center text-xs font-bold uppercase tracking-[0.16em] text-brand">
              Pro
            </span>
          </div>
          <div className="divide-y divide-white/10">
            {comparisonRows.map((row) => (
              <div
                key={row.feature}
                className="grid grid-cols-[1fr_84px_84px] items-center gap-4 px-5 py-4 text-sm transition hover:bg-white/[0.03] sm:grid-cols-[1fr_140px_140px] sm:px-8"
              >
                <p className="font-semibold text-slate-300">{row.feature}</p>
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

        <div className="mt-10 flex flex-col items-start gap-5 rounded-panel border border-white/10 bg-white/[0.04] p-6 shadow-sm sm:flex-row sm:items-center sm:p-8">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-emerald-500/10 text-emerald-600">
            <ShieldCheck className="h-6 w-6" />
          </span>
          <div>
            <h2 className="font-display text-xl font-bold tracking-[-0.02em] text-white">
              Clear, honest billing.
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-300">
              Lifetime Pro is a one-time purchase — no recurring charges, no renewals, ever. Payments are
              non-refundable, but if something genuinely goes wrong, email{' '}
              <Link href="/contact" className="font-semibold text-brand underline-offset-4 hover:underline">
                our support team
              </Link>{' '}
              and we will review it fairly. Payments are processed securely by our payment partner; we never
              see or store your card details.
            </p>
          </div>
        </div>
      </section>
      <FaqSection faqs={faqs} heading="CV Prime pricing questions, answered" />

    </main>
  );
}
