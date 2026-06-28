'use client';
import { useState } from 'react';

export function FAQItem({
  question,
  answer,
  defaultOpen = false,
  tone = 'light',
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
  /** 'dark' renders light text for dark glass surfaces. */
  tone?: 'light' | 'dark';
}): JSX.Element {
  const [open, setOpen] = useState(defaultOpen);
  const dark = tone === 'dark';
  return (
    <div className="px-6 py-5">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-start justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <span className={`font-display text-base font-bold ${dark ? 'text-white' : 'text-slate-950'}`}>{question}</span>
        <span className={`mt-0.5 shrink-0 transition-transform duration-200 ${dark ? 'text-cyan-300' : 'text-slate-500'} ${open ? 'rotate-45' : ''}`}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      {open && (
        <p className={`mt-3 text-sm leading-7 ${dark ? 'text-slate-300' : 'text-slate-500'}`}>{answer}</p>
      )}
    </div>
  );
}
