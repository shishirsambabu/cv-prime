'use client';

import Link from 'next/link';
import { ArrowRight, X, Zap } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { getActiveOffer } from '@/lib/festiveOffers';
import type { FestiveOffer } from '@/lib/festiveOffers';

export function ExitIntentBanner(): JSX.Element | null {
  const [visible, setVisible] = useState(false);
  const [offer, setOffer] = useState<FestiveOffer | null>(null);
  const triggered = useRef(false);

  useEffect(() => {
    setOffer(getActiveOffer());
    if (sessionStorage.getItem('exit-intent-seen')) return;

    const onMouseLeave = (e: MouseEvent) => {
      if (triggered.current) return;
      if (e.clientY <= 5) {
        triggered.current = true;
        setVisible(true);
        sessionStorage.setItem('exit-intent-seen', '1');
      }
    };

    document.addEventListener('mouseleave', onMouseLeave);
    return () => document.removeEventListener('mouseleave', onMouseLeave);
  }, []);

  if (!visible) return null;

  const price = offer ? offer.discountPrice : 999;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Before you go"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-5 backdrop-blur-sm"
      onClick={() => setVisible(false)}
    >
      <div
        className="relative w-full max-w-md rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setVisible(false)}
          aria-label="Close"
          className="absolute right-5 top-5 rounded-full p-1.5 text-slate-400 transition hover:bg-slate-800 hover:text-slate-200"
        >
          <X className="h-4 w-4" />
        </button>

        {offer && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-slate-950">
            <Zap className="h-3 w-3" />
            {offer.emoji} {offer.name} — ends soon
          </span>
        )}

        <h2 className="mt-4 font-display text-2xl font-bold">
          Don&apos;t leave your career to chance
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          Get Lifetime Pro access — pay once, use forever. No monthly fees, no renewal, no limits.
        </p>

        <div className="mt-5 flex items-end gap-3">
          {offer ? (
            <>
              <span className="pb-1 font-display text-xl font-bold text-white/40 line-through">₹999</span>
              <span className="font-display text-4xl font-bold">₹{price}</span>
            </>
          ) : (
            <span className="font-display text-4xl font-bold">₹{price}</span>
          )}
          <span className="pb-1 text-sm text-slate-400">one time · forever</span>
        </div>

        <ul className="mt-5 space-y-2 text-sm text-slate-200">
          {[
            '✅ Unlimited clean PDF exports',
            '✅ No watermark — ever',
            '✅ All premium templates — forever',
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <Link
          href="/pricing"
          onClick={() => setVisible(false)}
          className="mt-6 flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-slate-100"
        >
          Claim Lifetime Pro — ₹{price}
          <ArrowRight className="h-4 w-4" />
        </Link>
        <button
          onClick={() => setVisible(false)}
          className="mt-3 w-full text-center text-xs text-slate-500 hover:text-slate-400"
        >
          No thanks, I&apos;ll keep losing to ATS
        </button>
      </div>
    </div>
  );
}
