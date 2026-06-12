'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CreditCard, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { captureClientEvent } from '@/lib/clientAnalytics';
import type { BillingCycle } from '@/lib/razorpay';

interface RazorpaySuccessResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

interface RazorpayCheckoutOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  prefill?: {
    email?: string;
  };
  notes?: Record<string, string>;
  theme?: {
    color: string;
  };
  modal?: {
    ondismiss(): void;
  };
  handler(response: RazorpaySuccessResponse): void;
}

interface RazorpayInstance {
  open(): void;
}

interface RazorpayConstructor {
  new (options: RazorpayCheckoutOptions): RazorpayInstance;
}

declare global {
  interface Window {
    Razorpay?: RazorpayConstructor;
  }
}

interface CreateOrderResponse {
  orderId?: string;
  amount?: number;
  currency?: string;
  key?: string;
  billingCycle?: BillingCycle;
  description?: string;
  displayPrice?: string;
  email?: string;
  error?: string;
  message?: string;
}

interface VerifyPaymentResponse {
  ok?: boolean;
  plan?: 'pro' | 'pending';
  message?: string;
  error?: string;
}

interface RazorpayCheckoutButtonProps {
  billingCycle: BillingCycle;
  label?: string;
  className?: string;
}

function parseCreateOrderError(payload: CreateOrderResponse, status: number): string {
  if (status === 401) {
    return 'Sign in before upgrading.';
  }

  if (payload.error === 'RAZORPAY_NOT_CONFIGURED') {
    return 'Razorpay test keys are not configured yet.';
  }

  if (payload.error === 'RATE_LIMITED') {
    return 'Too many checkout attempts. Try again in an hour.';
  }

  return payload.message ?? 'Could not start Razorpay checkout.';
}

function parseVerifyError(payload: VerifyPaymentResponse): string {
  if (payload.error === 'PAYMENT_SIGNATURE_INVALID') {
    return 'Payment verification failed. No plan change was made.';
  }

  return payload.message ?? 'Could not verify this payment.';
}

function loadRazorpayScript(): Promise<boolean> {
  if (window.Razorpay) {
    return Promise.resolve(true);
  }

  const existingScript = document.getElementById('razorpay-checkout-js');
  if (existingScript) {
    return new Promise((resolve) => {
      existingScript.addEventListener('load', () => resolve(true), { once: true });
      existingScript.addEventListener('error', () => resolve(false), { once: true });
    });
  }

  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.id = 'razorpay-checkout-js';
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export function RazorpayCheckoutButton({
  billingCycle,
  label = 'Pay with Razorpay',
  className,
}: RazorpayCheckoutButtonProps): JSX.Element {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function verifyPayment(response: RazorpaySuccessResponse): Promise<void> {
    setLoading(true);
    setError(null);
    const verifyResponse = await fetch('/api/razorpay/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(response),
    });
    const payload = (await verifyResponse.json().catch(() => ({}))) as VerifyPaymentResponse;
    setLoading(false);

    if (!verifyResponse.ok || !payload.ok) {
      setError(parseVerifyError(payload));
      return;
    }

    setMessage(
      payload.plan === 'pending'
        ? payload.message ?? 'Payment received. Pro unlocks after capture.'
        : 'Pro unlocked. Your workspace has been refreshed.'
    );
    captureClientEvent('user_upgraded', {
      gateway: 'razorpay',
      plan: 'pro',
      status: payload.plan ?? 'pro',
    });
    router.refresh();
  }

  async function handleCheckout(): Promise<void> {
    setLoading(true);
    setError(null);
    setMessage(null);

    const orderResponse = await fetch('/api/razorpay/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ billingCycle }),
    });
    const order = (await orderResponse.json().catch(() => ({}))) as CreateOrderResponse;

    if (!orderResponse.ok || !order.orderId || !order.amount || !order.currency || !order.key) {
      setLoading(false);
      setError(parseCreateOrderError(order, orderResponse.status));
      return;
    }

    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded || !window.Razorpay) {
      setLoading(false);
      setError('Could not load Razorpay checkout. Check your connection and try again.');
      return;
    }

    const checkout = new window.Razorpay({
      key: order.key,
      amount: order.amount,
      currency: order.currency,
      name: 'CV Prime',
      description: order.description ?? 'CV Prime Pro',
      order_id: order.orderId,
      prefill: {
        email: order.email,
      },
      notes: {
        billingCycle,
      },
      theme: {
        color: '#020617',
      },
      modal: {
        ondismiss: () => setLoading(false),
      },
      handler: (response) => {
        void verifyPayment(response);
      },
    });

    checkout.open();
    setLoading(false);
  }

  return (
    <div>
      <Button type="button" className={className} onClick={handleCheckout} disabled={loading}>
        {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <CreditCard className="mr-2 h-4 w-4" />}
        {loading ? 'Opening Razorpay...' : label}
      </Button>
      {message ? <p className="mt-2 text-sm font-semibold text-emerald-700">{message}</p> : null}
      {error ? <p className="mt-2 text-sm font-semibold text-rose-700">{error}</p> : null}
    </div>
  );
}
