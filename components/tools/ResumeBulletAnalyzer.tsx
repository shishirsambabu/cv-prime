'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Wand2, RotateCcw, CheckCircle2, XCircle } from 'lucide-react';

const ACTION_VERBS = new Set([
  'built', 'led', 'shipped', 'designed', 'developed', 'created', 'launched', 'managed', 'drove',
  'grew', 'increased', 'reduced', 'cut', 'improved', 'optimised', 'optimized', 'delivered',
  'implemented', 'architected', 'engineered', 'automated', 'streamlined', 'analysed', 'analyzed',
  'owned', 'spearheaded', 'scaled', 'negotiated', 'generated', 'achieved', 'won', 'mentored',
  'coordinated', 'executed', 'forecasted', 'migrated', 'integrated', 'deployed', 'resolved',
  'boosted', 'accelerated', 'transformed', 'established', 'initiated', 'directed', 'oversaw',
  'secured', 'expanded', 'revamped', 'pioneered', 'orchestrated', 'authored', 'identified',
  'restructured', 'consolidated', 'launched', 'enhanced', 'maximised', 'maximized', 'trained',
]);

const WEAK_OPENERS = ['responsible for', 'worked on', 'helped', 'assisted', 'involved in', 'tasked with', 'duties included', 'handled'];

interface BulletResult {
  text: string;
  hasVerb: boolean;
  hasMetric: boolean;
  goodLength: boolean;
  noFiller: boolean;
  words: number;
  score: number;
}

function analyzeBullet(raw: string): BulletResult {
  const text = raw.replace(/^[-•*●\d.)\s]+/, '').trim();
  const lower = text.toLowerCase();
  const words = text.split(/\s+/).filter(Boolean).length;
  const firstWord = lower.split(/\s+/)[0]?.replace(/[^a-z]/g, '') ?? '';
  const hasVerb = ACTION_VERBS.has(firstWord);
  const hasMetric = /(\d|₹|\$|%|cr\b|lakh|million|\bk\b)/i.test(text);
  const goodLength = words >= 6 && words <= 34;
  const noFiller = !WEAK_OPENERS.some((w) => lower.startsWith(w) || lower.includes(` ${w} `));
  const score = [hasVerb, hasMetric, goodLength, noFiller].filter(Boolean).length;
  return { text, hasVerb, hasMetric, goodLength, noFiller, words, score };
}

function Badge({ ok, label }: { ok: boolean; label: string }): JSX.Element {
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${ok ? 'bg-green-50 text-green-700 ring-1 ring-green-200' : 'bg-red-50 text-red-600 ring-1 ring-red-200'}`}>
      {ok ? <CheckCircle2 className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
      {label}
    </span>
  );
}

export function ResumeBulletAnalyzer(): JSX.Element {
  const [text, setText] = useState('');
  const [results, setResults] = useState<BulletResult[] | null>(null);

  const canRun = text.trim().length > 10;

  function run(): void {
    const bullets = text.split('\n').map((l) => l.trim()).filter((l) => l.replace(/^[-•*●\d.)\s]+/, '').trim().length > 3);
    setResults(bullets.map(analyzeBullet));
    if (typeof window !== 'undefined') {
      window.requestAnimationFrame(() => document.getElementById('rba-result')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }
  }
  function reset(): void {
    setText('');
    setResults(null);
  }

  const avg = results && results.length ? Math.round((results.reduce((s, r) => s + r.score, 0) / (results.length * 4)) * 100) : 0;

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-sm sm:p-8">
      <label htmlFor="rba" className="text-sm font-bold text-slate-200">Paste your resume bullet points — one per line</label>
      <textarea
        id="rba"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={'e.g.\nResponsible for managing the social media accounts\nBuilt 12 payment APIs handling ₹40Cr/month, cutting failures to 0.9%'}
        className="mt-2 h-44 w-full resize-y rounded-xl border border-slate-300 bg-white/[0.03] p-3 text-sm leading-6 text-slate-200 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button type="button" onClick={run} disabled={!canRun} className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-bold text-brand-foreground transition hover:bg-brand-strong disabled:cursor-not-allowed disabled:opacity-40">
          <Wand2 className="h-4 w-4" /> Analyse bullets
        </button>
        {results ? (
          <button type="button" onClick={reset} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-bold text-slate-300 transition hover:border-slate-400">
            <RotateCcw className="h-4 w-4" /> Reset
          </button>
        ) : null}
      </div>
      <p className="mt-3 text-xs text-slate-400">Runs in your browser — nothing is uploaded or stored. Each bullet is scored on 4 checks: action verb, metric, length, and no filler.</p>

      {results ? (
        <div id="rba-result" className="mt-8 border-t border-white/10 pt-8">
          <p className="text-sm font-semibold text-slate-400">{results.length} bullet{results.length === 1 ? '' : 's'} analysed · average strength <span className="font-bold text-white">{avg}/100</span></p>
          <div className="mt-5 space-y-4">
            {results.map((r, i) => (
              <div key={`${i}-${r.text.slice(0, 20)}`} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm leading-6 text-slate-200">{r.text}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge ok={r.hasVerb} label="Action verb" />
                  <Badge ok={r.hasMetric} label="Quantified" />
                  <Badge ok={r.goodLength} label={`Length (${r.words} words)`} />
                  <Badge ok={r.noFiller} label="No filler" />
                </div>
                {r.score < 4 ? (
                  <p className="mt-2 text-xs text-slate-400">
                    {!r.hasVerb ? 'Start with a strong verb (Built, Led, Cut…). ' : ''}
                    {!r.hasMetric ? 'Add a number or % to show impact. ' : ''}
                    {!r.goodLength ? (r.words < 6 ? 'Too short — add the outcome. ' : 'Too long — tighten it. ') : ''}
                    {!r.noFiller ? 'Replace the weak opener ("responsible for / worked on"). ' : ''}
                  </p>
                ) : <p className="mt-2 text-xs font-semibold text-green-700">Strong bullet — verb, metric, length, and clarity all check out.</p>}
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-2xl bg-slate-950 p-6 text-center text-white">
            <p className="font-display text-lg font-bold">Let AI rewrite the weak ones</p>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-300">CV Prime&apos;s AI rewrites flagged bullets into strong, quantified, action-led lines — without inventing facts. Free to start.</p>
            <Link href="/signup?next=/ai-cv" className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-bold text-brand-foreground transition hover:bg-brand-strong">
              Rewrite my bullets with AI <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
