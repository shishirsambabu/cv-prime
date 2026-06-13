'use client';

import Link from 'next/link';
import { ArrowRight, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface StickyCTAProps {
  href?: string;
  label?: string;
  message?: string;
}

export function StickyCTA({
  href = '/signup',
  label = 'Build my CV free',
  message = 'Join 1,000+ job seekers who landed more interviews with CV Prime',
}: StickyCTAProps): JSX.Element | null {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('sticky-cta-dismissed');
    if (dismissed) return;

    const onScroll = () => {
      if (window.scrollY > 600) {
        setVisible(true);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const dismiss = () => {
    setDismissed(true);
    sessionStorage.setItem('sticky-cta-dismissed', '1');
  };

  if (dismissed || !visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-800 bg-slate-950 px-5 py-3 shadow-2xl animate-in slide-in-from-bottom-2 duration-300">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
        <p className="hidden text-sm text-slate-300 sm:block">{message}</p>
        <div className="flex flex-1 items-center justify-between gap-3 sm:flex-none sm:justify-end">
          <Link
            href={href}
            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            {label}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            onClick={dismiss}
            aria-label="Dismiss"
            className="rounded-full p-1 text-slate-400 transition hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
