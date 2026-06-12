'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles, X } from 'lucide-react';
import { RazorpayCheckoutButton } from '@/components/payments/RazorpayCheckoutButton';
import { captureClientEvent } from '@/lib/clientAnalytics';
import type { BillingCycle } from '@/lib/razorpay';

interface UpgradeModalProps {
  triggerLabel?: string;
  triggerClassName?: string;
  defaultBillingCycle?: BillingCycle;
}

const unlocks = [
  'Unlimited clean PDF exports',
  'All premium CV templates',
  'Unlimited job tracking',
  'No free-plan watermark',
];

export function UpgradeModal({
  triggerLabel = 'Upgrade',
  triggerClassName,
  defaultBillingCycle = 'monthly',
}: UpgradeModalProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState<BillingCycle>(defaultBillingCycle);
  const price = billingCycle === 'annual' ? 'Rs 1,999' : 'Rs 249';
  const cadence = billingCycle === 'annual' ? 'per year' : 'per month';

  function openModal(): void {
    setOpen(true);
    captureClientEvent('upgrade_modal_opened', { trigger: 'plan_gate' });
  }

  return (
    <>
      <button
        type="button"
        className={
          triggerClassName ??
          'inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-black'
        }
        onClick={openModal}
      >
        {triggerLabel}
        <ArrowRight className="h-4 w-4" />
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-sm">
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="upgrade-title"
            className="relative w-full max-w-xl overflow-hidden rounded-[2rem] bg-white p-6 text-slate-950 shadow-2xl shadow-slate-950/30 sm:p-8"
          >
            <button
              type="button"
              className="absolute right-5 top-5 rounded-full border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-50 hover:text-slate-950"
              onClick={() => setOpen(false)}
              aria-label="Close upgrade modal"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan-800">
              <Sparkles className="h-3.5 w-3.5" />
              Pro
            </div>
            <h2 id="upgrade-title" className="mt-5 font-display text-4xl font-bold tracking-[-0.04em]">
              Unlock clean exports and serious application volume.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Upgrade with Razorpay test mode, then export without the free watermark and keep every active role organized.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-2 rounded-full bg-slate-100 p-1">
              {(['monthly', 'annual'] as BillingCycle[]).map((cycle) => (
                <button
                  key={cycle}
                  type="button"
                  className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                    billingCycle === cycle
                      ? 'bg-slate-950 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                  onClick={() => setBillingCycle(cycle)}
                >
                  {cycle === 'annual' ? 'Annual - save 33%' : 'Monthly'}
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-end gap-3">
                <p className="font-display text-5xl font-bold tracking-[-0.05em]">{price}</p>
                <p className="pb-2 text-sm font-bold text-slate-500">{cadence}</p>
              </div>
              <div className="mt-5 grid gap-3">
                {unlocks.map((unlock) => (
                  <div key={unlock} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                    {unlock}
                  </div>
                ))}
              </div>
            </div>

            <RazorpayCheckoutButton
              billingCycle={billingCycle}
              label={`Pay ${price} with Razorpay`}
              className="mt-6 h-12 w-full rounded-full text-sm font-bold"
            />
          </section>
        </div>
      ) : null}
    </>
  );
}
