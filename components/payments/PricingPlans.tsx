'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { RazorpayCheckoutButton } from '@/components/payments/RazorpayCheckoutButton';
import type { BillingCycle } from '@/lib/razorpay';

interface PricingPlansProps {
  showCheckout?: boolean;
}

const freeFeatures = [
  'Unlimited CV drafts',
  '3 free PDF downloads',
  '3 free templates',
  'Autosave editor',
  'Watermarked exports',
];

const proFeatures = [
  'Unlimited clean PDF downloads',
  '5 premium templates',
  'AI rewrite tools with BYOK',
  'Unlimited job tracking',
  'Razorpay checkout in INR',
];

export function PricingPlans({ showCheckout = true }: PricingPlansProps): JSX.Element {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const price = billingCycle === 'annual' ? 'Rs 1,999' : 'Rs 249';
  const cadence = billingCycle === 'annual' ? 'per year' : 'per month';

  return (
    <div className="space-y-5">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2 rounded-full border border-slate-200 bg-white p-1 shadow-sm">
        <button
          type="button"
          className={`rounded-full px-4 py-2 text-sm font-bold transition ${
            billingCycle === 'monthly'
              ? 'bg-slate-950 text-white'
              : 'text-slate-600 hover:text-slate-950'
          }`}
          onClick={() => setBillingCycle('monthly')}
        >
          Monthly
        </button>
        <button
          type="button"
          className={`rounded-full px-4 py-2 text-sm font-bold transition ${
            billingCycle === 'annual'
              ? 'bg-slate-950 text-white'
              : 'text-slate-600 hover:text-slate-950'
          }`}
          onClick={() => setBillingCycle('annual')}
        >
          Annual - save 33%
        </button>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <article className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
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
              className="mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-black"
            >
              Start free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </article>

        <article className="relative overflow-hidden rounded-[2rem] border border-slate-950 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20 sm:p-8">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="relative">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-3xl font-bold">Pro</h2>
                <p className="mt-3 max-w-md text-sm leading-7 text-slate-300">
                  For active job seekers tailoring CVs for serious applications.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-3 py-1 text-xs font-bold text-slate-950">
                <Sparkles className="h-3 w-3" />
                Best value
              </span>
            </div>

            <div className="mt-9 flex items-end gap-3">
              <p className="font-display text-6xl font-bold tracking-[-0.06em]">{price}</p>
              <p className="pb-2 text-sm font-bold text-slate-300">{cadence}</p>
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
              <RazorpayCheckoutButton
                billingCycle={billingCycle}
                label={`Pay ${price} with Razorpay`}
                className="mt-9 h-12 w-full rounded-full bg-white text-sm font-bold text-slate-950 hover:bg-cyan-50"
              />
            ) : (
              <Link
                href="/signup?next=/pricing"
                className="mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-50"
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
