'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Loader2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { captureClientEvent } from '@/lib/clientAnalytics';

type CashfreeEnvironment = 'sandbox' | 'production';


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
  const [status, setStatus] = useState('Starting checkout…');
  const [error, setError] = useState<string | null>(null);

  async function handleClick(): Promise<void> {
    setLoading(true);
    setError(null);
    setStatus('Creating order…');
    captureClientEvent('ltd_checkout_started');

    try {
      // Abort the order request if the server does not respond in 20s.
      const controller = new AbortController();
      const fetchTimer = window.setTimeout(() => controller.abort(), 20000);

      let res: Response;
      try {
        res = await fetch('/api/billing/create-order', { method: 'POST', signal: controller.signal });
      } catch (e) {
        window.clearTimeout(fetchTimer);
        if (e instanceof DOMException && e.name === 'AbortError') {
          setError('Server timed out creating the order. Please try again in a moment.');
        } else {
          setError(e instanceof Error ? e.message : 'Network error. Please try again.');
        }
        setLoading(false);
        return;
      }
      window.clearTimeout(fetchTimer);

      if (res.status === 401) {
        router.push('/signup?next=/pricing');
        return;
      }

      const data = (await res.json().catch(() => ({}))) as {
        paymentSessionId?: string;
        environment?: CashfreeEnvironment;
        error?: string;
        message?: string;
      };

      if (data.error === 'ALREADY_PRO') {
        router.push('/dashboard');
        return;
      }

      if (!res.ok || !data.paymentSessionId) {
        setError(data.message ?? `Could not start checkout (HTTP ${res.status}). Please try again.`);
        setLoading(false);
        return;
      }

      setStatus('Opening payment page…');

      // Load Cashfree.js SDK if not already present, with a timeout so a blocked
      // or stalled script can never hang the button indefinitely.
      if (!window.Cashfree) {
        await new Promise<void>((resolve, reject) => {
          const existing = document.querySelector<HTMLScriptElement>('script[src*="sdk.cashfree.com"]');
          const timer = window.setTimeout(
            () => reject(new Error('Payment SDK timed out. Disable ad/script blockers and try again.')),
            12000
          );
          const finish = (ok: boolean) => {
            window.clearTimeout(timer);
            if (ok) {
              resolve();
            } else {
              reject(new Error('Failed to load payment SDK. Disable ad/script blockers and try again.'));
            }
          };
          if (existing) {
            existing.addEventListener('load', () => finish(true));
            existing.addEventListener('error', () => finish(false));
            // If it already loaded, window.Cashfree will exist shortly.
            if (window.Cashfree) finish(true);
            return;
          }
          const script = document.createElement('script');
          script.src = 'https://sdk.cashfree.com/js/v3/cashfree.js';
          script.async = true;
          script.onload = () => finish(true);
          script.onerror = () => finish(false);
          document.head.appendChild(script);
        });
      }

      const CashfreeCtor = window.Cashfree as ((opts: { mode: CashfreeEnvironment }) => {
        checkout(opts: { paymentSessionId: string; redirectTarget: string }): Promise<{ error?: { message?: string }; redirect?: boolean } | undefined>;
      }) | undefined;

      const cashfree = CashfreeCtor?.({ mode: data.environment ?? 'production' });
      if (!cashfree) {
        setError('Payment SDK unavailable. Please refresh and try again.');
        setLoading(false);
        return;
      }

      // Redirect the current page to Cashfree's hosted payment page.
      const result = await cashfree.checkout({
        paymentSessionId: data.paymentSessionId,
        redirectTarget: '_self',
      });

      // On success _self navigates away; if we reach here it did not redirect.
      if (result?.error?.message) {
        setError(result.error.message);
      } else {
        setError('Could not open the payment page. Disable redirect/popup blockers and try again.');
      }
      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
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
        {loading ? status : label}
      </Button>
      {error ? (
        <p className="mt-2 text-xs font-semibold text-rose-600">{error}</p>
      ) : null}
    </div>
  );
}
