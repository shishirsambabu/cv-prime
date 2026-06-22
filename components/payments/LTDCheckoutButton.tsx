'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Loader2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { captureClientEvent } from '@/lib/clientAnalytics';

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
      const controller = new AbortController();
      const timer = window.setTimeout(() => controller.abort(), 12000);

      let res: Response;
      try {
        res = await fetch('/api/billing/create-order', { method: 'POST', signal: controller.signal });
      } catch (e) {
        window.clearTimeout(timer);
        setError(
          e instanceof DOMException && e.name === 'AbortError'
            ? 'Server timed out. Please try again in a moment.'
            : 'Network error. Please try again.'
        );
        setLoading(false);
        return;
      }
      window.clearTimeout(timer);

      if (res.status === 401) {
        router.push('/signup?next=/pricing');
        return;
      }

      const data = (await res.json().catch(() => ({}))) as {
        paymentLink?: string;
        error?: string;
        message?: string;
      };

      if (data.error === 'ALREADY_PRO') {
        router.push('/dashboard');
        return;
      }

      if (!res.ok || !data.paymentLink) {
        setError(data.message ?? `Could not start checkout (HTTP ${res.status}). Please try again.`);
        setLoading(false);
        return;
      }

      // Plain, reliable redirect to Cashfree's hosted payment page.
      window.location.href = data.paymentLink;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setLoading(false);
    }
  }

  return (
    <div>
      <Button type="button" disabled={loading} onClick={handleClick} className={className}>
        {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Zap className="mr-2 h-4 w-4" />}
        {loading ? 'Opening secure checkout…' : label}
      </Button>
      {error ? <p className="mt-2 text-xs font-semibold text-rose-600">{error}</p> : null}
    </div>
  );
}
