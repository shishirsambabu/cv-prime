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

// Wait for the preloaded Cashfree SDK (or load it) without ever hanging.
function loadCashfree(timeoutMs = 10000): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const w = window as unknown as { Cashfree?: unknown };
    if (w.Cashfree) {
      resolve(w.Cashfree);
      return;
    }

    const deadline = Date.now() + timeoutMs;
    // Poll for the preloaded script becoming available.
    const poll = window.setInterval(() => {
      if (w.Cashfree) {
        window.clearInterval(poll);
        resolve(w.Cashfree);
      } else if (Date.now() > deadline) {
        window.clearInterval(poll);
        reject(new Error('Payment SDK could not load. Please disable ad/script blockers or try another browser.'));
      }
    }, 150);

    // Also inject as a fallback in case the preload didn't run.
    if (!document.querySelector('script[src*="sdk.cashfree.com"]')) {
      const s = document.createElement('script');
      s.src = 'https://sdk.cashfree.com/js/v3/cashfree.js';
      s.async = true;
      document.head.appendChild(s);
    }
  });
}

export function LTDCheckoutButton({
  label = 'Get lifetime access — ₹999',
  className,
}: LTDCheckoutButtonProps): JSX.Element {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('Starting…');
  const [error, setError] = useState<string | null>(null);

  async function handleClick(): Promise<void> {
    setLoading(true);
    setError(null);
    setStatus('Creating order…');
    captureClientEvent('ltd_checkout_started');

    try {
      // 1) Create the Cashfree order (with a client-side timeout).
      const controller = new AbortController();
      const fetchTimer = window.setTimeout(() => controller.abort(), 15000);
      let res: Response;
      try {
        res = await fetch('/api/billing/create-order', { method: 'POST', signal: controller.signal });
      } catch (e) {
        window.clearTimeout(fetchTimer);
        setError(
          e instanceof DOMException && e.name === 'AbortError'
            ? 'Server timed out creating the order. Please try again.'
            : 'Network error. Please try again.'
        );
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

      // 2) Ensure the SDK is ready (preloaded in layout; poll with timeout).
      setStatus('Opening payment…');
      let CashfreeFactory: (opts: { mode: CashfreeEnvironment }) => {
        checkout(opts: { paymentSessionId: string; redirectTarget: string }): Promise<{ error?: { message?: string } } | undefined>;
      };
      try {
        CashfreeFactory = (await loadCashfree()) as typeof CashfreeFactory;
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Payment SDK failed to load.');
        setLoading(false);
        return;
      }

      // 3) Redirect to Cashfree's hosted payment page.
      const cashfree = CashfreeFactory({ mode: data.environment ?? 'production' });
      const result = await cashfree.checkout({
        paymentSessionId: data.paymentSessionId,
        redirectTarget: '_self',
      });

      // _self navigates away on success; reaching here means it did not redirect.
      setError(result?.error?.message ?? 'Could not open the payment page. Please try again.');
      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setLoading(false);
    }
  }

  return (
    <div>
      <Button type="button" disabled={loading} onClick={handleClick} className={className}>
        {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Zap className="mr-2 h-4 w-4" />}
        {loading ? status : label}
      </Button>
      {error ? <p className="mt-2 text-xs font-semibold text-rose-600">{error}</p> : null}
    </div>
  );
}
