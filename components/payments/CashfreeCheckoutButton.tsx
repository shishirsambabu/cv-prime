'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CreditCard, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { captureClientEvent } from '@/lib/clientAnalytics';
import type { BillingCycle, CashfreeEnvironment } from '@/lib/cashfree';

interface CashfreeCheckoutResult {
  error?: {
    message?: string;
  };
  paymentDetails?: unknown;
}

interface CashfreeCheckout {
  checkout(options: {
    paymentSessionId: string;
    redirectTarget?: '_modal' | '_self' | '_blank' | '_top';
  }): Promise<CashfreeCheckoutResult | undefined>;
}

interface CashfreeConstructorOptions {
  mode: CashfreeEnvironment;
}

declare global {
  interface Window {
    Cashfree?: (options: CashfreeConstructorOptions) => CashfreeCheckout;
  }
}

interface CreateOrderResponse {
  orderId?: string;
  paymentSessionId?: string;
  billingCycle?: BillingCycle;
  description?: string;
  displayPrice?: string;
  environment?: CashfreeEnvironment;
  error?: string;
  message?: string;
}

interface VerifyPaymentResponse {
  ok?: boolean;
  plan?: 'pro' | 'pending';
  message?: string;
  error?: string;
}

interface CashfreeCheckoutButtonProps {
  billingCycle: BillingCycle;
  label?: string;
  className?: string;
}

function parseCreateOrderError(payload: CreateOrderResponse, status: number): string {
  if (status === 401) {
    return 'Sign in before upgrading.';
  }

  if (payload.error === 'CASHFREE_NOT_CONFIGURED') {
    return 'Cashfree keys are not configured yet.';
  }

  if (payload.error === 'RATE_LIMITED') {
    return 'Too many checkout attempts. Try again in an hour.';
  }

  return payload.message ?? 'Could not start Cashfree checkout.';
}

function parseVerifyError(payload: VerifyPaymentResponse): string {
  return payload.message ?? 'Could not verify this payment.';
}

function loadCashfreeScript(): Promise<boolean> {
  if (window.Cashfree) {
    return Promise.resolve(true);
  }

  const existingScript = document.getElementById('cashfree-checkout-js');
  if (existingScript) {
    return new Promise((resolve) => {
      existingScript.addEventListener('load', () => resolve(true), { once: true });
      existingScript.addEventListener('error', () => resolve(false), { once: true });
    });
  }

  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.id = 'cashfree-checkout-js';
    script.src = 'https://sdk.cashfree.com/js/v3/cashfree.js';
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export function CashfreeCheckoutButton({
  billingCycle,
  label = 'Pay with Cashfree',
  className,
}: CashfreeCheckoutButtonProps): JSX.Element {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function verifyPayment(orderId: string): Promise<void> {
    setLoading(true);
    setError(null);
    const verifyResponse = await fetch('/api/cashfree/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderId }),
    });
    const payload = (await verifyResponse.json().catch(() => ({}))) as VerifyPaymentResponse;
    setLoading(false);

    if (!verifyResponse.ok || !payload.ok) {
      setError(parseVerifyError(payload));
      return;
    }

    setMessage(
      payload.plan === 'pending'
        ? payload.message ?? 'Payment received. Pro unlocks after Cashfree confirms the payment.'
        : 'Pro unlocked. Your workspace has been refreshed.'
    );
    captureClientEvent('user_upgraded', {
      gateway: 'cashfree',
      plan: 'pro',
      status: payload.plan ?? 'pro',
    });
    router.refresh();
  }

  async function handleCheckout(): Promise<void> {
    setLoading(true);
    setError(null);
    setMessage(null);

    const orderResponse = await fetch('/api/cashfree/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ billingCycle }),
    });
    const order = (await orderResponse.json().catch(() => ({}))) as CreateOrderResponse;

    if (!orderResponse.ok || !order.orderId || !order.paymentSessionId || !order.environment) {
      setLoading(false);
      setError(parseCreateOrderError(order, orderResponse.status));
      return;
    }

    const scriptLoaded = await loadCashfreeScript();
    if (!scriptLoaded || !window.Cashfree) {
      setLoading(false);
      setError('Could not load Cashfree checkout. Check your connection and try again.');
      return;
    }

    const cashfree = window.Cashfree({ mode: order.environment });
    const result = await cashfree.checkout({
      paymentSessionId: order.paymentSessionId,
      redirectTarget: '_modal',
    });

    if (result?.error) {
      setLoading(false);
      setError(result.error.message ?? 'Cashfree checkout was cancelled.');
      return;
    }

    await verifyPayment(order.orderId);
  }

  return (
    <div>
      <Button type="button" className={className} onClick={handleCheckout} disabled={loading}>
        {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <CreditCard className="mr-2 h-4 w-4" />}
        {loading ? 'Opening Cashfree...' : label}
      </Button>
      {message ? <p className="mt-2 text-sm font-semibold text-emerald-700">{message}</p> : null}
      {error ? <p className="mt-2 text-sm font-semibold text-rose-700">{error}</p> : null}
    </div>
  );
}
