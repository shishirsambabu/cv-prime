'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CheckCircle2, Loader2, ShieldCheck } from 'lucide-react';
import { UpgradeModal } from '@/components/payments/UpgradeModal';
import { Button } from '@/components/ui/button';
import type { Plan } from '@/types/cv.types';

interface PlanSettingsProps {
  plan: Plan;
  pdfExportsUsed: number;
}

interface CancelResponse {
  ok?: boolean;
  message?: string;
  error?: string;
}

export function PlanSettings({ plan, pdfExportsUsed }: PlanSettingsProps): JSX.Element {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleCancel(): Promise<void> {
    const confirmed = window.confirm('Cancel Pro renewal and move this account to the free plan?');
    if (!confirmed) {
      return;
    }

    setLoading(true);
    setMessage(null);
    setError(null);
    const response = await fetch('/api/razorpay/cancel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ confirm: true }),
    });
    const payload = (await response.json().catch(() => ({}))) as CancelResponse;
    setLoading(false);

    if (!response.ok || !payload.ok) {
      setError(payload.message ?? 'Could not cancel Pro renewal.');
      return;
    }

    setMessage(payload.message ?? 'Pro renewal cancelled.');
    router.refresh();
  }

  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
        <div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-800">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <p className="mt-5 text-sm font-bold uppercase tracking-[0.22em] text-cyan-700">
            Billing
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.03em]">
            Your CV Prime plan
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
            Razorpay is the only payment path in this build. Test-mode cancellation moves the account back to the free plan immediately.
          </p>
        </div>
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-bold capitalize text-white">
          <CheckCircle2 className="h-4 w-4 text-cyan-300" />
          {plan}
        </span>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-bold text-slate-500">PDF exports used</p>
          <p className="mt-2 font-display text-3xl font-bold text-slate-950">
            {plan === 'pro' ? 'Unlimited' : `${pdfExportsUsed}/3`}
          </p>
        </div>
        <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-bold text-slate-500">Clean exports</p>
          <p className="mt-2 font-display text-3xl font-bold text-slate-950">
            {plan === 'pro' ? 'On' : 'After upgrade'}
          </p>
        </div>
        <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-bold text-slate-500">Job tracker</p>
          <p className="mt-2 font-display text-3xl font-bold text-slate-950">
            {plan === 'pro' ? 'Unlimited' : '3 jobs'}
          </p>
        </div>
      </div>

      <div className="mt-6">
        {plan === 'pro' ? (
          <Button type="button" variant="secondary" onClick={handleCancel} disabled={loading}>
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            {loading ? 'Cancelling...' : 'Cancel Pro renewal'}
          </Button>
        ) : (
          <UpgradeModal triggerLabel="Upgrade with Razorpay" />
        )}
      </div>

      {message ? <p className="mt-3 text-sm font-semibold text-emerald-700">{message}</p> : null}
      {error ? <p className="mt-3 text-sm font-semibold text-rose-700">{error}</p> : null}
    </section>
  );
}
