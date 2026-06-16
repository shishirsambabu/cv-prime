'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CreditCard, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { captureClientEvent } from '@/lib/clientAnalytics';
import type { CashfreeEnvironment } from '@/lib/cashfree';

interface CheckoutResult {
  error?: {
    message?: string;
  };
}

interface SubscriptionCheckout {
  checkout(options: {
    paymentSessionId: string;
    redirectTarget?: '_modal' | '_self' | '_blank' | '_top';
  }): Promise<CheckoutResult | undefined>;
}

interface CheckoutConstructorOptions {
  mode: CashfreeEnvironment;
}

declare global {
  interface Window {
    Cashfree?: (options: CheckoutConstructorOptions) => SubscriptionCheckout;
  }
}

interface CreateSubscriptionResponse {
  ok?: boolean;
  subscriptionId?: string;
  authorizationUrl?: string | null;
  subscriptionSessionId?: string | null;
  environment?: CashfreeEnvironment;
  error?: string;
  message?: string;
}

interface SubscriptionCheckoutButtonProps {
  label?: string;
  className?: string;
}

function subscriptionsEnabled(): boolean {
  return process.env.NEXT_PUBLIC_CASHFREE_SUBSCRIPTIONS_ENABLED === 'true';
}

function parseStartError(payload: CreateSubscriptionResponse, status: number): string {
  if (status === 401) {
    return 'Sign in before upgrading.';
  }

  if (payload.error === 'BILLING_NOT_CONFIGURED') {
    return 'Billing is not configured yet.';
  }

  if (payload.error === 'RATE_LIMITED') {
    return 'Too many billing attempts. Try again in an hour.';
  }

  return payload.message ?? 'Could not start secure monthly billing.';
}

function loadCheckoutScript(): Promise<boolean> {
  if (window.Cashfree) {
    return Promise.resolve(true);
  }

  const existingScript = document.getElementById('billing-checkout-js');
  if (existingScript) {
    return new Promise((resolve) => {
      existingScript.addEventListener('load', () => resolve(true), { once: true });
      existingScript.addEventListener('error', () => resolve(false), { once: true });
    });
  }

  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.id = 'billing-checkout-js';
    script.src = 'https://sdk.cashfree.com/js/v3/cashfree.js';
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export function SubscriptionCheckoutButton({
  label = 'Subscribe monthly',
  className,
}: SubscriptionCheckoutButtonProps): JSX.Element {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout(): Promise<void> {
    if (!subscriptionsEnabled()) {
      setMessage('Monthly Pro is opening soon. Free resume drafts and exports are available now.');
      return;
    }

    setLoading(true);
    setError(null);
    setMessage(null);

    const response = await fetch('/api/billing/create-subscription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const payload = (await response.json().catch(() => ({}))) as CreateSubscriptionResponse;

    if (!response.ok || !payload.ok || !payload.environment) {
      setLoading(false);
      setError(parseStartError(payload, response.status));
      return;
    }

    if (payload.authorizationUrl) {
      captureClientEvent('user_upgraded', { plan: 'pro', cadence: 'monthly', status: 'started' });
      window.location.href = payload.authorizationUrl;
      return;
    }

    if (!payload.subscriptionSessionId) {
      setLoading(false);
      setError('Could not start secure monthly billing.');
      return;
    }

    const scriptLoaded = await loadCheckoutScript();
    if (!scriptLoaded || !window.Cashfree) {
      setLoading(false);
      setError('Could not load secure checkout. Check your connection and try again.');
      return;
    }

    const checkout = window.Cashfree({ mode: payload.environment });
    const result = await checkout.checkout({
      paymentSessionId: payload.subscriptionSessionId,
      redirectTarget: '_modal',
    });
    setLoading(false);

    if (result?.error) {
      setError(result.error.message ?? 'Monthly billing setup was cancelled.');
      return;
    }

    setMessage('Mandate submitted. Pro unlocks after billing confirms the subscription.');
    captureClientEvent('user_upgraded', { plan: 'pro', cadence: 'monthly', status: 'started' });
    router.refresh();
  }

  return (
    <div>
      <Button type="button" className={className} onClick={handleCheckout} disabled={loading}>
        {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <CreditCard className="mr-2 h-4 w-4" />}
        {loading ? 'Opening secure monthly billing...' : subscriptionsEnabled() ? label : 'Monthly Pro opening soon'}
      </Button>
      {message ? <p className="mt-2 text-sm font-semibold text-emerald-700">{message}</p> : null}
      {error ? <p className="mt-2 text-sm font-semibold text-rose-700">{error}</p> : null}
    </div>
  );
}
