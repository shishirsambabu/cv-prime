'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Gauge, RotateCcw, CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';

const ACTION_VERBS = new Set([
  'built', 'led', 'shipped', 'designed', 'developed', 'created', 'launched', 'managed', 'drove',
  'grew', 'increased', 'reduced', 'cut', 'improved', 'optimised', 'optimized', 'delivered',
  'implemented', 'architected', 'engineered', 'automated', 'streamlined', 'analysed', 'analyzed',
  'owned', 'spearheaded', 'scaled', 'negotiated', 'generated', 'achieved', 'won', 'mentored',
  'coordinated', 'executed', 'forecasted', 'migrated', 'integrated', 'deployed', 'resolved',
  'boosted', 'accelerated', 'transformed', 'established', 'initiated', 'directed', 'oversaw',
  'secured', 'expanded', 'revamped', 'pioneered', 'orchestrated', 'authored', 'identified',
  'restructured', 'consolidated', 'standardised', 'standardized', 'enhanced', 'maximised', 'maximized',
]);

const FILLER = [
  'responsible for', 'worked on', 'helped with', 'helped to', 'involved in', 'assisted with',
  'duties included', 'tasked with', 'hardworking', 'hard working', 'team player', 'go-getter',
  'detail oriented', 'detail-oriented', 'self-motivated', 'results-oriented', 'think outside the box',
  'various', 'etc', 'references available',
];

const SECTION_PATTERNS: Array<{ key: string; re: RegExp }> = [
  { key: 'Summary / Objective', re: /\b(summary|objective|profile)\b/i },
  { key: 'Work experience', re: /\b(experience|employment|work history|professional experience)\b/i },
  { key: 'Education', re: /\b(education|academic)\b/i },
  { key: 'Skills', re: /\b(skills|technical skills|core competencies)\b/i },
  { key: 'Projects / Certifications', re: /\b(projects|certifications|certificates)\b/i },
];

type Status = 'pass' | 'warn' | 'fail';
interface Check {
  label: string;
  status: Status;
  detail: string;
  points: number;
  max: number;
}
interface Analysis {
  score: number;
  words: number;
  pages: string;
  checks: Check[];
}

function analyze(text: string): Analysis {
  const clean = text.replace(/\r/g, '');
  const words = (clean.match(/\b[\w'-]+\b/g) ?? []).length;
  const pages = words < 380 ? '~1 page' : words < 850 ? '1–2 pages' : '2+ pages';

  const lines = clean.split('\n').map((l) => l.trim()).filter((l) => l.length > 0);
  const bulletLines = lines.filter((l) => {
    const stripped = l.replace(/^[-•*•●\d.)\s]+/, '');
    return stripped.length > 25 && stripped.length < 320;
  });

  // Action verbs at bullet start
  let verbStarts = 0;
  for (const l of bulletLines) {
    const first = l.replace(/^[-•*•●\d.)\s]+/, '').split(/\s+/)[0]?.toLowerCase().replace(/[^a-z]/g, '') ?? '';
    if (ACTION_VERBS.has(first)) verbStarts += 1;
  }
  const verbRatio = bulletLines.length ? verbStarts / bulletLines.length : 0;

  // Quantification
  const quantLines = bulletLines.filter((l) => /(\d|₹|\$|%|cr\b|lakh|million|k\b)/i.test(l)).length;
  const quantRatio = bulletLines.length ? quantLines / bulletLines.length : 0;

  // Filler
  const lower = clean.toLowerCase();
  let fillerCount = 0;
  const fillerHits: string[] = [];
  for (const f of FILLER) {
    const m = lower.split(f).length - 1;
    if (m > 0) {
      fillerCount += m;
      fillerHits.push(f);
    }
  }

  // Sections
  const sectionsFound = SECTION_PATTERNS.filter((s) => s.re.test(clean)).map((s) => s.key);

  // Contact
  const hasEmail = /\b[\w.+-]+@[\w-]+\.[\w.-]+\b/.test(clean);
  const hasPhone = /(\+?\d[\d\s-]{8,}\d)/.test(clean);

  const checks: Check[] = [];

  // Length (15)
  {
    let status: Status = 'pass';
    let points = 15;
    let detail = `${words} words (${pages}). Good length.`;
    if (words < 200) { status = 'fail'; points = 4; detail = `${words} words — too thin. Add quantified bullets and a skills section.`; }
    else if (words < 320) { status = 'warn'; points = 10; detail = `${words} words — a little light. Strengthen with more detail and metrics.`; }
    else if (words > 950) { status = 'warn'; points = 9; detail = `${words} words — likely too long. Tighten to 1–2 pages.`; }
    checks.push({ label: 'Length', status, detail, points, max: 15 });
  }

  // Action verbs (20)
  {
    const pct = Math.round(verbRatio * 100);
    let status: Status = 'pass';
    let points = 20;
    let detail = `${pct}% of bullets start with a strong action verb.`;
    if (bulletLines.length === 0) { status = 'warn'; points = 8; detail = 'No clear bullet points detected — use bullets that start with action verbs.'; }
    else if (verbRatio < 0.4) { status = 'fail'; points = 6; detail = `Only ${pct}% of bullets start with a strong verb. Replace "responsible for / worked on" with Built, Led, Cut, Grew…`; }
    else if (verbRatio < 0.7) { status = 'warn'; points = 13; detail = `${pct}% of bullets start with a strong verb — push more bullets to lead with action.`; }
    checks.push({ label: 'Action verbs', status, detail, points, max: 20 });
  }

  // Quantification (20)
  {
    const pct = Math.round(quantRatio * 100);
    let status: Status = 'pass';
    let points = 20;
    let detail = `${pct}% of bullets include a number or metric.`;
    if (bulletLines.length === 0) { status = 'warn'; points = 8; detail = 'No bullets detected to measure quantification.'; }
    else if (quantRatio < 0.25) { status = 'fail'; points = 6; detail = `Only ${pct}% of bullets are quantified. Add %, ₹, time saved, scale — recruiters reward measurable impact.`; }
    else if (quantRatio < 0.5) { status = 'warn'; points = 13; detail = `${pct}% of bullets are quantified — aim for at least half.`; }
    checks.push({ label: 'Quantified impact', status, detail, points, max: 20 });
  }

  // Filler (15)
  {
    let status: Status = 'pass';
    let points = 15;
    let detail = 'No weak filler phrases found. Clean and direct.';
    if (fillerCount >= 4) { status = 'fail'; points = 4; detail = `${fillerCount} weak/filler phrases (${fillerHits.slice(0, 4).join(', ')}). Cut them and lead with outcomes.`; }
    else if (fillerCount >= 1) { status = 'warn'; points = 10; detail = `${fillerCount} filler phrase(s) (${fillerHits.slice(0, 3).join(', ')}). Replace with action + result.`; }
    checks.push({ label: 'No filler', status, detail, points, max: 15 });
  }

  // Sections (15)
  {
    const n = sectionsFound.length;
    let status: Status = 'pass';
    let points = 15;
    let detail = `Found: ${sectionsFound.join(', ') || 'none'}.`;
    if (n < 2) { status = 'fail'; points = 4; detail = 'Few standard sections detected. Use clear headings: Summary, Skills, Experience, Education.'; }
    else if (n < 4) { status = 'warn'; points = 10; detail = `Found ${n} standard sections (${sectionsFound.join(', ')}). Add the missing standard headings.`; }
    checks.push({ label: 'Standard sections', status, detail, points, max: 15 });
  }

  // Contact (15)
  {
    let status: Status = 'pass';
    let points = 15;
    let detail = 'Email and phone detected.';
    if (!hasEmail && !hasPhone) { status = 'fail'; points = 3; detail = 'No email or phone detected. Add both as plain text in the header.'; }
    else if (!hasEmail || !hasPhone) { status = 'warn'; points = 9; detail = `Missing ${!hasEmail ? 'email' : 'phone'}. Include both in the header as plain text.`; }
    checks.push({ label: 'Contact info', status, detail, points, max: 15 });
  }

  const score = Math.min(100, checks.reduce((s, c) => s + c.points, 0));
  return { score, words, pages, checks };
}

function scoreColor(score: number): string {
  if (score >= 80) return 'text-green-700';
  if (score >= 60) return 'text-emerald-300';
  if (score >= 40) return 'text-amber-300';
  return 'text-red-700';
}

const STATUS_ICON: Record<Status, JSX.Element> = {
  pass: <CheckCircle2 className="h-5 w-5 text-green-600" />,
  warn: <AlertTriangle className="h-5 w-5 text-amber-500" />,
  fail: <XCircle className="h-5 w-5 text-red-500" />,
};

export function ResumeStrengthAnalyzer(): JSX.Element {
  const [text, setText] = useState('');
  const [result, setResult] = useState<Analysis | null>(null);
  const canRun = text.trim().length > 60;

  function run(): void {
    setResult(analyze(text));
    if (typeof window !== 'undefined') {
      window.requestAnimationFrame(() => {
        document.getElementById('rsa-result')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }
  function reset(): void {
    setText('');
    setResult(null);
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-sm sm:p-8">
      <label htmlFor="rsa" className="text-sm font-bold text-slate-200">Paste your resume text</label>
      <textarea
        id="rsa"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your full resume text here…"
        className="mt-2 h-64 w-full resize-y rounded-xl border border-slate-300 bg-white/[0.03] p-3 text-sm leading-6 text-slate-200 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={run}
          disabled={!canRun}
          className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-bold text-brand-foreground transition hover:bg-brand-strong disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Gauge className="h-4 w-4" /> Analyse my resume
        </button>
        {result ? (
          <button type="button" onClick={reset} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-bold text-slate-300 transition hover:border-slate-400">
            <RotateCcw className="h-4 w-4" /> Reset
          </button>
        ) : null}
        {!canRun ? <span className="text-xs text-slate-400">Paste your resume text to analyse it.</span> : null}
      </div>
      <p className="mt-3 text-xs text-slate-400">Runs entirely in your browser — nothing is uploaded or stored.</p>

      {result ? (
        <div id="rsa-result" className="mt-8 border-t border-white/10 pt-8">
          <div className="flex items-end gap-4">
            <div>
              <p className="text-sm font-semibold text-slate-400">Resume strength score</p>
              <p className={`font-display text-5xl font-bold ${scoreColor(result.score)}`}>{result.score}<span className="text-2xl text-slate-400">/100</span></p>
            </div>
            <p className="pb-2 text-sm text-slate-400">{result.words} words · {result.pages}</p>
          </div>

          <div className="mt-6 space-y-3">
            {result.checks.map((c) => (
              <div key={c.label} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <span className="mt-0.5 shrink-0">{STATUS_ICON[c.status]}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-display text-sm font-bold text-white">{c.label}</p>
                    <p className="text-xs font-semibold text-slate-400">{c.points}/{c.max}</p>
                  </div>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-2xl bg-slate-950 p-6 text-center text-white">
            <p className="font-display text-lg font-bold">Let AI fix what this flagged</p>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-300">
              CV Prime rewrites weak bullets into strong, quantified, action-led lines — and scores your ATS match against a real job description. Free to start.
            </p>
            <Link href="/signup?next=/ai-cv" className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-bold text-brand-foreground transition hover:bg-brand-strong">
              Fix my resume with AI <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
