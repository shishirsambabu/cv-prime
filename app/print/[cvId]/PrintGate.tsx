'use client';

import { ArrowRight, CheckCircle2, Lock } from 'lucide-react';
import { UpgradeModal } from '@/components/payments/UpgradeModal';

const unlocks = [
  'Unlimited clean PDF exports with no caps',
  'All 8 premium templates',
  'Unlimited ATS fixes and AI rewrites',
];

interface PrintGateProps {
  reason?: 'download-limit' | 'premium-template';
}

export function PrintGate({ reason = 'download-limit' }: PrintGateProps): JSX.Element {
  const premiumTemplate = reason === 'premium-template';

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-16">
      <div className="w-full max-w-md">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950">
          <Lock className="h-7 w-7 text-white" />
        </div>

        <div className="mt-6 text-center">
          <h1 className="font-display text-3xl font-bold tracking-[-0.03em] text-slate-950">
            {premiumTemplate ? 'This template is part of Pro' : 'You\'ve used your 3 free downloads'}
          </h1>
          <p className="mt-3 text-base leading-7 text-slate-500">
            {premiumTemplate
              ? 'Choose Classic, Modern, or Minimal for free, or upgrade to export this premium design.'
              : 'Free accounts include 3 PDF exports. Upgrade to Pro for unlimited clean downloads.'}
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
            Pro unlocks
          </p>
          <ul className="mt-4 space-y-3">
            {unlocks.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 space-y-3">
          <UpgradeModal
            triggerLabel={premiumTemplate ? 'Upgrade to unlock this template' : 'Upgrade to Pro - unlock unlimited exports'}
            triggerClassName="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-4 text-sm font-bold text-white transition hover:bg-black"
          />
          <a
            href="/dashboard"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Back to dashboard
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <p className="mt-5 text-center text-xs text-slate-400">
          Already upgraded?{' '}
          <a
            href=""
            className="font-semibold text-slate-700 underline-offset-2 hover:underline"
            onClick={(event) => {
              event.preventDefault();
              window.location.reload();
            }}
          >
            Refresh this page
          </a>
        </p>
      </div>
    </div>
  );
}
