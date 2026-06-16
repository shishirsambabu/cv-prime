'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { SubscriptionCheckoutButton } from '@/components/payments/SubscriptionCheckoutButton';

interface PricingPlansProps {
  showCheckout?: boolean;
}

const freeFeatures = [
  '3 resume drafts',
  '3 free PDF downloads',
  '3 free templates',
  'Autosave editor',
  'Watermarked exports',
];

const proFeatures = [
  'Unlimited resumes',
  'Unlimited clean PDF exports',
  'All templates',
  'AI bullet rewrite tools',
  'Role-specific CV versions',
];

export function PricingPlans({ showCheckout = true }: PricingPlansProps): JSX.Element {
  const price = 'Rs 249';

  return (
    <div className="space-y-5">
      <div className="grid gap-5 lg:grid-cols-2">
        <article className="relative overflow-hidden rounded-panel border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="relative">
            <h2 className="font-display text-3xl font-bold">Free</h2>
            <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">
              For exploring the workflow and building your first polished CV.
            </p>

            <div className="mt-9 flex items-end gap-3">
              <p className="font-display text-6xl font-bold tracking-[-0.06em]">Rs 0</p>
              <p className="pb-2 text-sm font-bold text-slate-500">forever</p>
            </div>

            <ul className="mt-8 space-y-4 text-sm font-semibold text-slate-700">
              {freeFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href="/signup?next=/ai-cv"
              className="mt-9 inline-flex w-full items-center justify-center gap-2 rounded-pill bg-brand px-5 py-3 text-sm font-bold text-brand-foreground transition hover:-translate-y-0.5 hover:bg-brand-strong"
            >
              Start free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </article>

        <article className="relative overflow-hidden rounded-panel border border-slate-950 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20 sm:p-8">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-pill bg-brand/30 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-32 w-32 rounded-pill bg-cyan-300/20 blur-3xl" />
          <div className="relative">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-3xl font-bold">Pro</h2>
                <p className="mt-3 max-w-md text-sm leading-7 text-slate-300">
                  For active job seekers tailoring CVs for serious applications.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-pill bg-brand px-3 py-1 text-xs font-bold text-brand-foreground">
                <Sparkles className="h-3 w-3" />
                Best value
              </span>
            </div>

            <div className="mt-9 flex items-end gap-3">
              <p className="font-display text-6xl font-bold tracking-[-0.06em]">{price}</p>
              <p className="pb-2 text-sm font-bold text-slate-300">per month</p>
            </div>

            <ul className="mt-8 space-y-4 text-sm font-semibold text-slate-200">
              {proFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                  {feature}
                </li>
              ))}
            </ul>

            {showCheckout ? (
              <SubscriptionCheckoutButton
                label="Subscribe monthly"
                className="mt-9 h-12 w-full rounded-pill bg-white text-sm font-bold text-slate-950 hover:bg-slate-100"
              />
            ) : (
              <Link
                href="/signup?next=/pricing"
                className="mt-9 inline-flex w-full items-center justify-center gap-2 rounded-pill bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Sign in to upgrade
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
