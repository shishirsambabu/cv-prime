'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, FileCheck2, RotateCcw, CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';

const CLICHES = [
  'to whom it may concern', 'dear sir or madam', 'i am writing to', 'i am applying for',
  'please find attached', 'hardworking', 'team player', 'perfect fit', 'go-getter',
  'think outside the box', 'fast learner', 'self-starter', 'hit the ground running',
];
const CTA_PHRASES = ['look forward', 'would welcome', 'happy to discuss', 'glad to discuss', 'discuss further', 'opportunity to', 'love to speak', 'available for', 'schedule a call', 'hear from you'];

type Status = 'pass' | 'warn' | 'fail';
interface Check { label: string; status: Status; detail: string; }
interface Result { score: number; words: number; checks: Check[]; }

function analyze(text: string): Result {
  const clean = text.replace(/\r/g, '').trim();
  const lower = clean.toLowerCase();
  const words = (clean.match(/\b[\w'-]+\b/g) ?? []).length;
  const paragraphs = clean.split(/\n\s*\n/).map((p) => p.trim()).filter((p) => p.length > 0).length;
  const firstChunk = lower.slice(0, 60);

  const checks: Check[] = [];
  let points = 0;

  // Length (20)
  {
    let status: Status = 'pass'; let detail = `${words} words — a good length for a cover letter.`;
    if (words < 120) { status = 'fail'; detail = `${words} words — too short. Aim for 200–400 words.`; }
    else if (words < 180) { status = 'warn'; detail = `${words} words — a little thin. Aim for 200–400.`; }
    else if (words > 450) { status = 'warn'; detail = `${words} words — likely too long. Tighten to 200–400.`; }
    else points += 20;
    if (status === 'warn') points += 12;
    checks.push({ label: 'Length', status, detail });
  }

  // Opening (20)
  {
    const generic = CLICHES.some((c) => firstChunk.includes(c));
    if (generic) { checks.push({ label: 'Strong opening', status: 'fail', detail: 'Opens with a generic line ("To whom it may concern" / "I am writing to apply…"). Open with a specific hook about the role or company.' }); }
    else { checks.push({ label: 'Strong opening', status: 'pass', detail: 'Opening avoids the generic clichés — good.' }); points += 20; }
  }

  // Paragraph structure (15)
  {
    let status: Status = 'pass'; let detail = `${paragraphs} paragraphs — clear structure.`;
    if (paragraphs < 2) { status = 'fail'; detail = 'Looks like one block of text. Use 3–4 short paragraphs: hook, proof, why-them, close.'; }
    else if (paragraphs < 3) { status = 'warn'; detail = `${paragraphs} paragraphs — consider 3–4: hook, proof, why-them, close.`; points += 9; }
    else points += 15;
    checks.push({ label: 'Paragraph structure', status, detail });
  }

  // Quantified proof (20)
  {
    const hasMetric = /(\d|₹|\$|%)/.test(clean);
    if (hasMetric) { checks.push({ label: 'Quantified proof', status: 'pass', detail: 'Includes at least one number/metric — concrete and credible.' }); points += 20; }
    else { checks.push({ label: 'Quantified proof', status: 'fail', detail: 'No numbers found. Add one quantified achievement (e.g. "grew X by 30%").' }); }
  }

  // Call to action (15)
  {
    const hasCta = CTA_PHRASES.some((c) => lower.includes(c));
    if (hasCta) { checks.push({ label: 'Call to action', status: 'pass', detail: 'Ends with a clear next step — good.' }); points += 15; }
    else { checks.push({ label: 'Call to action', status: 'warn', detail: 'No clear closing call to action. End with "I\'d welcome the chance to discuss…".' }); points += 6; }
  }

  // Clichés (10)
  {
    const hits = CLICHES.filter((c) => lower.includes(c));
    if (hits.length === 0) { checks.push({ label: 'No clichés', status: 'pass', detail: 'No common clichés detected.' }); points += 10; }
    else { checks.push({ label: 'No clichés', status: hits.length > 1 ? 'fail' : 'warn', detail: `Found: ${hits.slice(0, 3).join(', ')}. Replace with specifics.` }); if (hits.length === 1) points += 5; }
  }

  return { score: Math.min(100, points), words, checks };
}

function scoreColor(s: number): string {
  if (s >= 80) return 'text-green-700';
  if (s >= 60) return 'text-emerald-700';
  if (s >= 40) return 'text-amber-700';
  return 'text-red-700';
}

const ICON: Record<Status, JSX.Element> = {
  pass: <CheckCircle2 className="h-5 w-5 text-green-600" />,
  warn: <AlertTriangle className="h-5 w-5 text-amber-500" />,
  fail: <XCircle className="h-5 w-5 text-red-500" />,
};

export function CoverLetterChecker(): JSX.Element {
  const [text, setText] = useState('');
  const [result, setResult] = useState<Result | null>(null);
  const canRun = text.trim().length > 60;

  function run(): void {
    setResult(analyze(text));
    if (typeof window !== 'undefined') {
      window.requestAnimationFrame(() => document.getElementById('clc-result')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }
  }
  function reset(): void { setText(''); setResult(null); }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <label htmlFor="clc" className="text-sm font-bold text-slate-800">Paste your cover letter</label>
      <textarea
        id="clc"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your full cover letter here…"
        className="mt-2 h-64 w-full resize-y rounded-xl border border-slate-300 bg-slate-50 p-3 text-sm leading-6 text-slate-800 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button type="button" onClick={run} disabled={!canRun} className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-bold text-brand-foreground transition hover:bg-brand-strong disabled:cursor-not-allowed disabled:opacity-40">
          <FileCheck2 className="h-4 w-4" /> Check cover letter
        </button>
        {result ? (
          <button type="button" onClick={reset} className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-bold text-slate-600 transition hover:border-slate-400">
            <RotateCcw className="h-4 w-4" /> Reset
          </button>
        ) : null}
        {!canRun ? <span className="text-xs text-slate-400">Paste your cover letter to check it.</span> : null}
      </div>
      <p className="mt-3 text-xs text-slate-400">Runs in your browser — nothing is uploaded or stored.</p>

      {result ? (
        <div id="clc-result" className="mt-8 border-t border-slate-100 pt-8">
          <div className="flex items-end gap-4">
            <div>
              <p className="text-sm font-semibold text-slate-500">Cover letter score</p>
              <p className={`font-display text-5xl font-bold ${scoreColor(result.score)}`}>{result.score}<span className="text-2xl text-slate-400">/100</span></p>
            </div>
            <p className="pb-2 text-sm text-slate-500">{result.words} words</p>
          </div>
          <div className="mt-6 space-y-3">
            {result.checks.map((c) => (
              <div key={c.label} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <span className="mt-0.5 shrink-0">{ICON[c.status]}</span>
                <div>
                  <p className="font-display text-sm font-bold text-slate-900">{c.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-7 rounded-2xl bg-slate-950 p-6 text-center text-white">
            <p className="font-display text-lg font-bold">Generate a tailored cover letter in 60 seconds</p>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-300">CV Prime&apos;s AI writes a role-specific cover letter from your resume and the job description — hook, proof, why-them, and a clear close. Free to start.</p>
            <Link href="/signup?next=/cover-letter" className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-bold text-brand-foreground transition hover:bg-brand-strong">
              Generate with AI <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
