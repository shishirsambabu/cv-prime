'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const FIELDS: Array<{ key: string; label: string; limit: number; tip: string }> = [
  { key: 'headline', label: 'Headline', limit: 220, tip: 'Lead with your role + specialisation + a credential. This is the most-searched field on LinkedIn.' },
  { key: 'about', label: 'About / Summary', limit: 2600, tip: 'Only the first ~2 lines show before "see more" — front-load your strongest hook.' },
  { key: 'post', label: 'Post', limit: 3000, tip: 'Only the first ~140–210 characters show before "see more" in the feed.' },
  { key: 'experience', label: 'Experience description', limit: 2000, tip: 'Use short, quantified bullet lines — same rules as your resume.' },
  { key: 'recommendation', label: 'Recommendation', limit: 3000, tip: 'Be specific: what they did, the impact, and your relationship.' },
];

export function LinkedInCounter(): JSX.Element {
  const [fieldKey, setFieldKey] = useState('headline');
  const [text, setText] = useState('');

  const field = FIELDS.find((f) => f.key === fieldKey) ?? FIELDS[0]!;
  const chars = text.length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const remaining = field.limit - chars;
  const over = remaining < 0;
  const pct = Math.min(100, Math.round((chars / field.limit) * 100));
  const barColor = over ? 'bg-red-500' : pct > 90 ? 'bg-amber-500' : 'bg-brand';

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-wrap gap-2">
        {FIELDS.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFieldKey(f.key)}
            className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition ${f.key === fieldKey ? 'bg-brand text-brand-foreground' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            {f.label} <span className="opacity-70">· {f.limit}</span>
          </button>
        ))}
      </div>

      <label htmlFor="li" className="mt-5 block text-sm font-bold text-slate-800">Your LinkedIn {field.label.toLowerCase()}</label>
      <textarea
        id="li"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={`Type or paste your LinkedIn ${field.label.toLowerCase()} here…`}
        className={`mt-2 w-full resize-y rounded-xl border bg-slate-50 p-3 text-sm leading-6 text-slate-800 outline-none focus:ring-2 ${over ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-brand focus:ring-brand/20'} ${field.key === 'headline' ? 'h-24' : 'h-48'}`}
      />

      <div className="mt-4">
        <div className="flex items-center justify-between text-sm">
          <span className={`font-bold ${over ? 'text-red-600' : 'text-slate-800'}`}>{chars} / {field.limit} characters</span>
          <span className={`font-semibold ${over ? 'text-red-600' : 'text-slate-500'}`}>
            {over ? `${Math.abs(remaining)} over the limit` : `${remaining} left`} · {words} words
          </span>
        </div>
        <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
          <div className={`h-full rounded-full ${barColor}`} style={{ width: `${pct}%` }} />
        </div>
        {over ? <p className="mt-2 text-xs font-semibold text-red-600">Over LinkedIn&apos;s {field.limit}-character limit — trim {Math.abs(remaining)} characters.</p> : null}
      </div>

      <p className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs leading-5 text-slate-600"><span className="font-semibold text-slate-800">Tip:</span> {field.tip}</p>
      <p className="mt-3 text-xs text-slate-400">Runs in your browser — nothing is uploaded or stored. Limits are LinkedIn&apos;s standard maximums and may vary slightly.</p>

      <div className="mt-6 rounded-2xl bg-slate-950 p-6 text-center text-white">
        <p className="font-display text-lg font-bold">Need a headline that gets you found?</p>
        <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-300">See proven LinkedIn headline formulas and examples by role, then build a matching ATS resume with CV Prime.</p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Link href="/linkedin-headline" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-sm font-bold text-brand-foreground transition hover:bg-brand-strong">
            LinkedIn headline examples <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/linkedin-profile-optimizer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-2.5 text-sm font-bold text-white transition hover:border-white/40">
            LinkedIn profile optimizer
          </Link>
        </div>
      </div>
    </div>
  );
}
