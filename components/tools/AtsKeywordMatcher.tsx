'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Search, RotateCcw } from 'lucide-react';

const STOPWORDS = new Set([
  'the', 'and', 'for', 'are', 'with', 'you', 'your', 'will', 'have', 'has', 'our', 'this', 'that',
  'from', 'they', 'their', 'them', 'all', 'any', 'can', 'who', 'what', 'when', 'where', 'which',
  'work', 'working', 'team', 'teams', 'role', 'roles', 'company', 'companies', 'experience',
  'ability', 'able', 'strong', 'good', 'great', 'excellent', 'required', 'require', 'requirements',
  'preferred', 'responsibilities', 'responsible', 'candidate', 'candidates', 'join', 'joining',
  'looking', 'should', 'must', 'including', 'include', 'includes', 'etc', 'plus', 'years', 'year',
  'job', 'jobs', 'position', 'positions', 'opportunity', 'description', 'about', 'within', 'across',
  'using', 'use', 'used', 'help', 'helping', 'ensure', 'ensuring', 'support', 'new', 'well', 'also',
  'into', 'over', 'per', 'via', 'such', 'more', 'most', 'than', 'other', 'others', 'both', 'each',
  'may', 'not', 'but', 'out', 'its', 'his', 'her', 'were', 'was', 'been', 'being', 'how', 'why',
  'one', 'two', 'three', 'day', 'days', 'time', 'times', 'part', 'full', 'high', 'level', 'levels',
  'we', 'us', 'in', 'on', 'at', 'to', 'of', 'as', 'is', 'be', 'by', 'or', 'an', 'a', 'it',
  'skills', 'skill', 'knowledge', 'understanding', 'develop', 'developing', 'build', 'building',
  'manage', 'managing', 'lead', 'leading', 'across', 'within', 'end', 'based', 'like', 'make',
]);

// Multi-word skills/keywords that should be matched as a whole phrase.
const KNOWN_PHRASES = [
  'machine learning', 'deep learning', 'data analysis', 'data science', 'data visualization',
  'data visualisation', 'power bi', 'system design', 'project management', 'product management',
  'communication skills', 'problem solving', 'team management', 'stakeholder management',
  'financial modelling', 'financial modeling', 'digital marketing', 'customer service',
  'customer success', 'supply chain', 'quality assurance', 'business development', 'business analysis',
  'user research', 'cloud computing', 'version control', 'unit testing', 'rest api', 'node js',
  'react js', 'spring boot', 'data structures', 'time management', 'social media', 'content marketing',
  'google analytics', 'google ads', 'continuous integration', 'object oriented', 'test automation',
  'natural language processing', 'computer vision', 'data engineering', 'data pipelines',
  'account management', 'risk management', 'change management', 'agile methodologies', 'ci cd',
];

interface MatchResult {
  score: number;
  matched: string[];
  missing: string[];
}

function normalize(text: string): string {
  return ` ${text.toLowerCase().replace(/[^a-z0-9+#. ]/g, ' ').replace(/\s+/g, ' ')} `;
}

function hasWord(haystack: string, word: string): boolean {
  // haystack is already padded/normalized with single spaces
  return haystack.includes(` ${word} `) || haystack.includes(` ${word}.`) || haystack.includes(` ${word},`);
}

function analyze(resume: string, jd: string): MatchResult {
  const jdNorm = normalize(jd);
  const resumeNorm = normalize(resume);

  const keywords: string[] = [];
  const seen = new Set<string>();

  // 1) Known multi-word phrases present in the JD
  for (const phrase of KNOWN_PHRASES) {
    if (jdNorm.includes(` ${phrase} `) && !seen.has(phrase)) {
      keywords.push(phrase);
      seen.add(phrase);
    }
  }

  // 2) Single-token keywords by frequency
  const freq = new Map<string, number>();
  for (const tok of jdNorm.trim().split(' ')) {
    const t = tok.replace(/^\.+|\.+$/g, '');
    if (t.length < 3 && !['go', 'r', 'ml', 'ai', 'qa', 'ux', 'ui'].includes(t)) continue;
    if (STOPWORDS.has(t)) continue;
    if (/^\d+$/.test(t)) continue;
    freq.set(t, (freq.get(t) ?? 0) + 1);
  }
  const ranked = [...freq.entries()].sort((a, b) => b[1] - a[1]).map(([t]) => t);
  for (const t of ranked) {
    if (keywords.length >= 30) break;
    // skip tokens already part of an included phrase
    if (seen.has(t) || keywords.some((k) => k.includes(t))) continue;
    keywords.push(t);
    seen.add(t);
  }

  const matched: string[] = [];
  const missing: string[] = [];
  for (const kw of keywords) {
    const present = kw.includes(' ') ? resumeNorm.includes(` ${kw} `) : hasWord(resumeNorm, kw);
    if (present) matched.push(kw);
    else missing.push(kw);
  }

  const total = matched.length + missing.length;
  const score = total === 0 ? 0 : Math.round((matched.length / total) * 100);
  return { score, matched, missing };
}

function band(score: number): { label: string; color: string; bar: string } {
  if (score >= 80) return { label: 'Strong match', color: 'text-green-700', bar: 'bg-green-500' };
  if (score >= 65) return { label: 'Decent — close the gaps', color: 'text-emerald-700', bar: 'bg-emerald-500' };
  if (score >= 45) return { label: 'At risk — tailor it', color: 'text-amber-700', bar: 'bg-amber-500' };
  return { label: 'Likely filtered out', color: 'text-red-700', bar: 'bg-red-500' };
}

export function AtsKeywordMatcher(): JSX.Element {
  const [resume, setResume] = useState('');
  const [jd, setJd] = useState('');
  const [result, setResult] = useState<MatchResult | null>(null);

  const canRun = resume.trim().length > 40 && jd.trim().length > 40;

  function run(): void {
    setResult(analyze(resume, jd));
    if (typeof window !== 'undefined') {
      window.requestAnimationFrame(() => {
        document.getElementById('ats-result')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }

  function reset(): void {
    setResume('');
    setJd('');
    setResult(null);
  }

  const b = result ? band(result.score) : null;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="resume" className="text-sm font-bold text-slate-800">Your resume text</label>
          <textarea
            id="resume"
            value={resume}
            onChange={(e) => setResume(e.target.value)}
            placeholder="Paste your full resume text here…"
            className="mt-2 h-56 w-full resize-y rounded-xl border border-slate-300 bg-slate-50 p-3 text-sm leading-6 text-slate-800 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </div>
        <div>
          <label htmlFor="jd" className="text-sm font-bold text-slate-800">Job description</label>
          <textarea
            id="jd"
            value={jd}
            onChange={(e) => setJd(e.target.value)}
            placeholder="Paste the full job description here…"
            className="mt-2 h-56 w-full resize-y rounded-xl border border-slate-300 bg-slate-50 p-3 text-sm leading-6 text-slate-800 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={run}
          disabled={!canRun}
          className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-bold text-brand-foreground transition hover:bg-brand-strong disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Search className="h-4 w-4" /> Check keyword match
        </button>
        {result ? (
          <button type="button" onClick={reset} className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-bold text-slate-600 transition hover:border-slate-400">
            <RotateCcw className="h-4 w-4" /> Reset
          </button>
        ) : null}
        {!canRun ? <span className="text-xs text-slate-400">Paste both your resume and the job description to run the check.</span> : null}
      </div>

      <p className="mt-3 text-xs text-slate-400">
        Runs entirely in your browser — your resume and the job description are never uploaded or stored.
      </p>

      {result && b ? (
        <div id="ats-result" className="mt-8 border-t border-slate-100 pt-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-500">Keyword match score</p>
              <p className={`font-display text-5xl font-bold ${b.color}`}>{result.score}<span className="text-2xl text-slate-400">/100</span></p>
              <p className={`mt-1 text-sm font-bold ${b.color}`}>{b.label}</p>
            </div>
            <div className="w-full sm:max-w-xs">
              <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100">
                <div className={`h-full rounded-full ${b.bar}`} style={{ width: `${result.score}%` }} />
              </div>
              <p className="mt-2 text-xs text-slate-500">{result.matched.length} of {result.matched.length + result.missing.length} key terms found in your resume</p>
            </div>
          </div>

          <div className="mt-7 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-green-200 bg-green-50/50 p-5">
              <p className="font-display text-sm font-bold text-green-800">✓ Matched keywords ({result.matched.length})</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {result.matched.length ? result.matched.map((k) => (
                  <span key={k} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-green-700 ring-1 ring-green-200">{k}</span>
                )) : <span className="text-xs text-slate-500">No keywords matched yet.</span>}
              </div>
            </div>
            <div className="rounded-2xl border border-red-200 bg-red-50/50 p-5">
              <p className="font-display text-sm font-bold text-red-800">✗ Missing keywords ({result.missing.length})</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {result.missing.length ? result.missing.map((k) => (
                  <span key={k} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-red-700 ring-1 ring-red-200">{k}</span>
                )) : <span className="text-xs text-slate-500">Nothing missing — great keyword coverage.</span>}
              </div>
              <p className="mt-3 text-xs text-slate-500">Weave the genuinely-true missing terms into your skills and experience bullets — naturally, not as a list.</p>
            </div>
          </div>

          <div className="mt-7 rounded-2xl bg-slate-950 p-6 text-center text-white">
            <p className="font-display text-lg font-bold">Want the full picture — not just keywords?</p>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-300">
              This free tool checks keyword overlap. CV Prime&apos;s AI also scores format and section gaps, rewrites your weak bullets to add the missing terms, and re-scores — then exports a clean PDF.
            </p>
            <Link href="/signup?next=/ai-cv" className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-bold text-brand-foreground transition hover:bg-brand-strong">
              Get my full ATS score + AI fixes <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
