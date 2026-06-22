'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ArrowRight, CheckCircle2, X, Zap } from 'lucide-react';
import { LTDCheckoutButton } from '@/components/payments/LTDCheckoutButton';
import { captureClientEvent } from '@/lib/clientAnalytics';

interface UpgradeModalProps {
  triggerLabel?: string;
  triggerClassName?: string;
}

const unlocks = [
  'Unlimited clean PDF exports — forever',
  'No watermark on any export',
  'All 5 premium templates',
  'AI bullet rewrite tools',
  'Role-specific CV versions',
];

function UpgradeDialog({ onClose }: { onClose: () => void }): JSX.Element {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="upgrade-title"
        className="relative w-full max-w-xl overflow-hidden rounded-[2rem] bg-white p-6 text-slate-950 shadow-2xl shadow-slate-950/30 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="absolute right-5 top-5 rounded-full border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-50 hover:text-slate-950"
          onClick={onClose}
          aria-label="Close upgrade modal"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-amber-800">
          <Zap className="h-3.5 w-3.5" />
          Lifetime Pro — Founding offer
        </div>
        <h2 id="upgrade-title" className="mt-5 font-display text-4xl font-bold tracking-[-0.04em]">
          Pay once. Use CV Prime Pro forever.
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-600">
          No subscription. No renewal. One payment of ₹999 unlocks everything — for life.
        </p>

        <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
          <div className="flex items-end gap-3">
            <p className="font-display text-5xl font-bold tracking-[-0.05em]">₹999</p>
            <p className="pb-2 text-sm font-bold text-slate-500">one time · lifetime</p>
          </div>
          <div className="mt-5 grid gap-3">
            {unlocks.map((unlock) => (
              <div key={unlock} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                {unlock}
              </div>
            ))}
          </div>
        </div>

        <LTDCheckoutButton
          label="Get lifetime access — ₹999"
          className="mt-6 h-12 w-full rounded-full text-sm font-bold"
        />

        <p className="mt-3 text-center text-xs text-slate-400">
          UPI · Cards · Net banking · Secured by Cashfree
        </p>
      </section>
    </div>
  );
}

export function UpgradeModal({
  triggerLabel = 'Upgrade to Pro',
  triggerClassName,
}: UpgradeModalProps): JSX.Element {
  const [open, setOpen] = useState(false);

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
          'inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold text-brand-foreground transition hover:bg-brand-strong'
        }
        onClick={openModal}
      >
        {triggerLabel}
        <ArrowRight className="h-4 w-4" />
      </button>

      {open ? createPortal(<UpgradeDialog onClose={() => setOpen(false)} />, document.body) : null}
    </>
  );
}
