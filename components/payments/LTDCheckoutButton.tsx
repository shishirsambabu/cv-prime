'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Loader2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { captureClientEvent } from '@/lib/clientAnalytics';

type CashfreeEnvironment = 'sandbox' | 'production';

interface CashfreePGCheckout {
  checkout(options: {
    paymentSessionId: string;
    redirectTarget?: '_modal' | '_self' | '_blank' | '_top';
  }): Promise<{ error?: { message?: string } } | undefined>;
}

declare global {
  interface Window {
    Cashfree?: (options: { mode: CashfreeEnvironment }) => CashfreePGCheckout;
  }
}

interface LTDCheckoutButtonProps {
  label?: string;
  className?: string;
}

export function LTDCheckoutButton({
  label = 'Get lifetime access — ₹999',
  className,
}: LTDCheckoutButtonProps): JSX.Element {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleClick(): Promise<void> {
    setLoading(true);
    setError(null);
    captureClientEvent('ltd_checkout_started');

    try {
      const res = await fetch('/api/billing/create-order', { method: 'POST' });
      const data = (await res.json()) as {
        paymentSessionId?: string;
        environment?: CashfreeEnvironment;
        error?: string;
      };

      if (data.error === 'ALREADY_PRO') {
        router.push('/dashboard');
        return;
      }

      if (!res.ok || !data.paymentSessionId) {
        setError('Could not start checkout. Please try again.');
        return;
      }

      // Load Cashfree.js if not already loaded
      if (!window.Cashfree) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://sdk.cashfree.com/js/v3/cashfree.js';
          script.onload = () => resolve();
          script.onerror = () => reject(new Error('Failed to load Cashfree SDK'));
          document.head.appendChild(script);
        });
      }

      const cashfree = window.Cashfree?.({ mode: data.environment ?? 'production' });
      if (!cashfree) {
        setError('Payment SDK unavailable. Please refresh and try again.');
        return;
      }

      const result = await cashfree.checkout({
        paymentSessionId: data.paymentSessionId,
        redirectTarget: '_modal',
      });

      if (result?.error?.message) {
        setError(result.error.message);
        return;
      }

      captureClientEvent('ltd_checkout_completed');
      router.push('/dashboard?payment=success');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Button
        type="button"
        disabled={loading}
        onClick={handleClick}
        className={className}
      >
        {loading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Zap className="mr-2 h-4 w-4" />
        )}
        {loading ? 'Opening payment...' : label}
      </Button>
      {error ? (
        <p className="mt-2 text-xs font-semibold text-rose-600">{error}</p>
      ) : null}
    </div>
  );
}
