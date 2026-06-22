'use client';

import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { UpgradeModal } from '@/components/payments/UpgradeModal';
import type { Plan } from '@/types/cv.types';

interface PlanSettingsProps {
  plan: Plan;
  pdfExportsUsed: number;
}

export function PlanSettings({ plan, pdfExportsUsed }: PlanSettingsProps): JSX.Element {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
        <div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-800">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <p className="mt-5 text-sm font-bold uppercase tracking-[0.22em] text-brand">
            Billing
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.03em]">
            Your CV Prime plan
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
            {plan === 'pro'
              ? 'Lifetime Pro is active on this account. Unlimited clean exports and premium templates are unlocked.'
              : 'Free includes 3 clean PDF exports. Upgrade once to unlock Lifetime Pro.'}
          </p>
        </div>
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-bold capitalize text-white">
          <CheckCircle2 className="h-4 w-4 text-cyan-300" />
          {plan}
        </span>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-bold text-slate-500">Resume drafts</p>
          <p className="mt-2 font-display text-3xl font-bold text-slate-950">
            Unlimited
          </p>
        </div>
        <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-bold text-slate-500">PDF exports</p>
          <p className="mt-2 font-display text-3xl font-bold text-slate-950">
            {plan === 'pro' ? 'Unlimited' : `${pdfExportsUsed}/3`}
          </p>
        </div>
        <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-bold text-slate-500">Premium templates</p>
          <p className="mt-2 font-display text-3xl font-bold text-slate-950">
            {plan === 'pro' ? 'Unlocked' : 'Upgrade'}
          </p>
        </div>
      </div>

      <div className="mt-6">
        {plan === 'pro' ? (
          <span className="inline-flex items-center gap-2 rounded-pill bg-emerald-50 px-5 py-3 text-sm font-bold text-emerald-700 ring-1 ring-emerald-200">
            <CheckCircle2 className="h-4 w-4" />
            Lifetime Pro unlocked
          </span>
        ) : (
          <UpgradeModal triggerLabel="Upgrade to Pro" />
        )}
      </div>
    </section>
  );
}
