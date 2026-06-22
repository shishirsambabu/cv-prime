'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { getActiveOffer, getDiscountPercent, getOfferEndDate, getSavings } from '@/lib/festiveOffers';
import type { FestiveOffer } from '@/lib/festiveOffers';

function useCountdown(endDate: Date): { h: string; m: string; s: string; expired: boolean } {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, endDate.getTime() - Date.now());
  const expired = diff === 0;
  const totalSecs = Math.floor(diff / 1000);
  const h = String(Math.floor(totalSecs / 3600)).padStart(2, '0');
  const m = String(Math.floor((totalSecs % 3600) / 60)).padStart(2, '0');
  const s = String(totalSecs % 60).padStart(2, '0');

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  tick; // trigger re-render

  return { h, m, s, expired };
}

function Segment({ value, label }: { value: string; label: string }): JSX.Element {
  return (
    <span className="flex flex-col items-center">
      <span className="font-display text-lg font-bold leading-none tabular-nums">{value}</span>
      <span className="text-[9px] font-bold uppercase tracking-widest opacity-70">{label}</span>
    </span>
  );
}

function BannerInner({ offer }: { offer: FestiveOffer }): JSX.Element {
  const endDate = getOfferEndDate(offer);
  const { h, m, s, expired } = useCountdown(endDate);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const val = window.sessionStorage.getItem(`festive-dismissed-${offer.id}`);
      if (val === 'true') setDismissed(true);
    }
  }, [offer.id]);

  function dismiss(): void {
    setDismissed(true);
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem(`festive-dismissed-${offer.id}`, 'true');
    }
  }

  if (dismissed || expired) return <></>;

  const savings = getSavings(offer);
  const pct = getDiscountPercent(offer);

  return (
    <div className="relative z-50 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-1.5 px-10 py-2 text-center sm:flex-nowrap sm:justify-between">
        {/* Left: event name + tagline */}
        <p className="flex items-center gap-2 text-xs font-bold sm:text-sm">
          <span className="text-base">{offer.emoji}</span>
          <span className="font-display font-extrabold">{offer.name}</span>
          <span className="hidden opacity-80 sm:inline">— {offer.tagline}</span>
        </p>

        {/* Centre: pricing */}
        <p className="flex items-baseline gap-2 text-sm font-bold sm:text-base">
          <span className="text-white/60 line-through">₹{offer.originalPrice}</span>
          <span className="font-display text-xl font-extrabold sm:text-2xl">₹{offer.discountPrice}</span>
          <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs font-bold">
            Save ₹{savings} ({pct}% off)
          </span>
        </p>

        {/* Right: countdown + CTA */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 rounded-lg bg-white/15 px-3 py-1">
            <Segment value={h} label="hr" />
            <span className="mb-1 font-bold opacity-60">:</span>
            <Segment value={m} label="min" />
            <span className="mb-1 font-bold opacity-60">:</span>
            <Segment value={s} label="sec" />
          </div>
          <a
            href="/pricing"
            className="rounded-full bg-white px-4 py-1.5 text-xs font-extrabold text-orange-600 transition hover:bg-orange-50 sm:text-sm"
          >
            Claim deal
          </a>
        </div>
      </div>

      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss offer banner"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 opacity-70 transition hover:opacity-100"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

// Render nothing on dashboard / editor / auth routes
const HIDDEN_PREFIXES = ['/dashboard', '/editor', '/job-tracker', '/settings', '/print', '/login', '/signup', '/auth'];

export function FestiveBanner(): JSX.Element {
  const pathname = usePathname();
  const [offer, setOffer] = useState<FestiveOffer | null>(null);

  useEffect(() => {
    setOffer(getActiveOffer());
  }, []);

  if (!offer) return <></>;
  if (HIDDEN_PREFIXES.some((p) => pathname.startsWith(p))) return <></>;

  return <BannerInner offer={offer} />;
}
