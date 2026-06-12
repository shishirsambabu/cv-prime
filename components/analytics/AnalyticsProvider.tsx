'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  captureClientEvent,
  getAnalyticsConsent,
  initAnalytics,
  setAnalyticsConsent,
} from '@/lib/clientAnalytics';

export function AnalyticsProvider(): JSX.Element | null {
  const pathname = usePathname();
  const [consent, setConsent] = useState<'accepted' | 'declined' | null>(null);

  useEffect(() => {
    setConsent(getAnalyticsConsent());
  }, []);

  useEffect(() => {
    if (consent !== 'accepted') {
      return;
    }

    initAnalytics();
    captureClientEvent('page_viewed', { path: pathname });
  }, [consent, pathname]);

  function accept(): void {
    setAnalyticsConsent('accepted');
    setConsent('accepted');
    initAnalytics();
    captureClientEvent('page_viewed', { path: pathname });
  }

  function decline(): void {
    setAnalyticsConsent('declined');
    setConsent('declined');
  }

  if (consent !== null) {
    return null;
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-[1.5rem] border border-slate-200 bg-white p-4 text-slate-950 shadow-2xl shadow-slate-950/20 sm:flex sm:items-center sm:justify-between sm:gap-6">
      <div>
        <p className="font-display text-base font-bold">Help us improve CV Prime</p>
        <p className="mt-1 text-sm leading-6 text-slate-600">
          We use privacy-conscious product analytics only after consent. No CV text or API keys are tracked.
        </p>
      </div>
      <div className="mt-4 flex gap-2 sm:mt-0">
        <button
          type="button"
          className="rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
          onClick={decline}
        >
          Decline
        </button>
        <button
          type="button"
          className="rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:bg-black"
          onClick={accept}
        >
          Allow analytics
        </button>
      </div>
    </div>
  );
}
