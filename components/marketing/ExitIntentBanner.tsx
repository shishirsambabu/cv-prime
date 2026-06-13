'use client';

import Link from 'next/link';
import { ArrowRight, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export function ExitIntentBanner(): JSX.Element | null {
  const [visible, setVisible] = useState(false);
  const triggered = useRef(false);

  useEffect(() => {
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

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Before you go"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-5 backdrop-blur-sm"
      onClick={() => setVisible(false)}
    >
      <div
        className="relative w-full max-w-md rounded-[2rem] bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setVisible(false)}
          aria-label="Close"
          className="absolute right-5 top-5 rounded-full p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
        >
          <X className="h-4 w-4" />
        </button>
        <p className="text-xs font-bold uppercase tracking-widest text-cyan-600">Wait — one thing</p>
        <h2 className="mt-3 font-display text-2xl font-bold text-slate-950">
          Your CV could be costing you interviews
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          ATS software rejects 75% of CVs before a human sees them. Get your free ATS score in 2 minutes — no credit card, no commitment.
        </p>
        <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
          {[
            '✅ 3 free PDF downloads',
            '✅ AI keyword gap analysis',
            '✅ 8 ATS-optimised templates',
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Link
          href="/signup"
          onClick={() => setVisible(false)}
          className="mt-6 flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-slate-800"
        >
          Get my free ATS score
          <ArrowRight className="h-4 w-4" />
        </Link>
        <button
          onClick={() => setVisible(false)}
          className="mt-3 w-full text-center text-xs text-slate-400 hover:text-slate-600"
        >
          No thanks, I&apos;ll skip the interview
        </button>
      </div>
    </div>
  );
}
