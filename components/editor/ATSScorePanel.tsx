'use client';

import { useState } from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { CheckCircle2, GaugeCircle, Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NoKeyPrompt } from '@/components/ai/NoKeyPrompt';
import { KeyExpiredPrompt } from '@/components/ai/KeyExpiredPrompt';
import { captureClientEvent } from '@/lib/clientAnalytics';
import { cvDataToPlainText } from '@/lib/cvText';
import { cvDataSchema } from '@/lib/cv.schema';
import { useCVStore } from '@/store/cvStore';

interface ScoreHistoryItem {
  score: number;
  createdAt: string;
}

interface ATSResult {
  score: number;
  missingKeywords: string[];
  presentKeywords: string[];
  suggestions: string[];
  history: ScoreHistoryItem[];
}

interface APIErrorPayload {
  error?: string;
  message?: string;
}

function scoreColor(score: number): string {
  if (score >= 80) {
    return '#059669';
  }

  if (score >= 50) {
    return '#d97706';
  }

  return '#e11d48';
}

function parseError(payload: APIErrorPayload): 'NO_KEY' | 'KEY_INVALID' | 'RATE_LIMITED' | 'OTHER' {
  if (payload.error === 'NO_KEY') {
    return 'NO_KEY';
  }

  if (payload.error === 'KEY_INVALID') {
    return 'KEY_INVALID';
  }

  if (payload.error === 'RATE_LIMITED') {
    return 'RATE_LIMITED';
  }

  return 'OTHER';
}

function KeywordChips({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: 'present' | 'missing';
}): JSX.Element {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
        {title}
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {items.length > 0 ? (
          items.map((item) => (
            <span
              key={item}
              className={`rounded-full border px-3 py-1 text-xs font-bold ${
                tone === 'present'
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                  : 'border-rose-200 bg-rose-50 text-rose-700'
              }`}
            >
              {item}
            </span>
          ))
        ) : (
          <span className="text-sm text-slate-500">None yet.</span>
        )}
      </div>
    </div>
  );
}

export function ATSScorePanel(): JSX.Element {
  const cvId = useCVStore((state) => state.cvId);
  const data = useCVStore((state) => state.data);
  const setData = useCVStore((state) => state.setData);
  const [jobDescription, setJobDescription] = useState('');
  const [result, setResult] = useState<ATSResult | null>(null);
  const [errorState, setErrorState] = useState<'NO_KEY' | 'KEY_INVALID' | 'RATE_LIMITED' | 'OTHER' | null>(null);
  const [loading, setLoading] = useState(false);
  const [fixing, setFixing] = useState(false);
  const [appliedChanges, setAppliedChanges] = useState<string[] | null>(null);

  async function handleScore(): Promise<void> {
    setLoading(true);
    setErrorState(null);
    setAppliedChanges(null);

    const response = await fetch('/api/ats-score', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cvId,
        cvText: cvDataToPlainText(data),
        jobDescription,
      }),
    });
    const payload = (await response.json().catch(() => ({}))) as ATSResult & APIErrorPayload;
    setLoading(false);

    if (!response.ok) {
      setErrorState(parseError(payload));
      return;
    }

    setResult(payload);
    captureClientEvent('ats_score_checked', { score: payload.score, hasKey: true });
  }

  async function handleFix(): Promise<void> {
    setFixing(true);
    setErrorState(null);
    setAppliedChanges(null);

    const response = await fetch('/api/ats-fix', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cvId, cvData: data, jobDescription }),
    });
    const payload = (await response.json().catch(() => ({}))) as {
      cvData?: unknown;
      changes?: string[];
    } & APIErrorPayload;

    if (!response.ok) {
      setFixing(false);
      setErrorState(parseError(payload));
      return;
    }

    const parsedData = cvDataSchema.safeParse(payload.cvData);
    if (parsedData.success) {
      setData(parsedData.data);
      captureClientEvent('ats_fix_applied', { changes: (payload.changes ?? []).length });
      // Re-score the freshly improved CV so the user sees the new number,
      // then surface the list of changes that were applied.
      await handleScore();
      setAppliedChanges(payload.changes ?? []);
    } else {
      setErrorState('OTHER');
    }

    setFixing(false);
  }

  return (
    <section className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
            <GaugeCircle className="h-4 w-4" />
            ATS score
          </div>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-[-0.03em]">
            Check match quality
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Paste a job description to find keyword gaps and content fixes.
          </p>
        </div>
        {result ? (
          <div
            className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full font-display text-2xl font-bold"
            style={{
              background: `conic-gradient(${scoreColor(result.score)} ${result.score * 3.6}deg, #e2e8f0 0deg)`,
            }}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
              {result.score}
            </div>
          </div>
        ) : null}
      </div>

      <textarea
        value={jobDescription}
        onChange={(event) => setJobDescription(event.target.value)}
        className="mt-5 min-h-32 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 outline-none transition focus:border-cyan-500"
        placeholder="Paste the job description here..."
      />
      <Button
        type="button"
        className="mt-3"
        disabled={loading || jobDescription.trim().length < 50}
        onClick={handleScore}
      >
        {loading ? 'Scoring...' : 'Check ATS score'}
      </Button>

      {errorState === 'NO_KEY' ? <div className="mt-4"><NoKeyPrompt /></div> : null}
      {errorState === 'KEY_INVALID' ? <div className="mt-4"><KeyExpiredPrompt /></div> : null}
      {errorState === 'RATE_LIMITED' ? (
        <p className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-800">
          Too many AI requests. Try again in an hour.
        </p>
      ) : null}
      {errorState === 'OTHER' ? (
        <p className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          Something went wrong. Please try again.
        </p>
      ) : null}

      {loading ? (
        <div className="mt-5 space-y-3">
          <div className="h-4 w-3/4 animate-pulse rounded-full bg-slate-200" />
          <div className="h-4 w-1/2 animate-pulse rounded-full bg-slate-200" />
          <div className="h-24 animate-pulse rounded-2xl bg-slate-100" />
        </div>
      ) : null}

      {result ? (
        <div className="mt-6 space-y-5">
          {/* ATS report header */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              ATS report
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-700">
              {result.score >= 80
                ? 'Strong match. A few tweaks below can push it higher.'
                : result.score >= 50
                  ? 'Moderate match. Apply the fixes below to improve your ranking.'
                  : 'Low match. The fixes below will meaningfully raise your score.'}
            </p>
          </div>

          <KeywordChips title="Present keywords" items={result.presentKeywords} tone="present" />
          <KeywordChips title="Missing keywords" items={result.missingKeywords} tone="missing" />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              Suggested fixes
            </p>
            <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-600">
              {result.suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="flex gap-2 rounded-2xl bg-slate-50 px-4 py-3"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                  <span>{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Fix this — auto-apply the suggestions with AI */}
          <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-500 text-white">
                <Wand2 className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-slate-900">Fix this automatically</p>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  AI rewrites your bullets, weaves in missing keywords, and tightens your
                  summary — keeping every fact truthful — then re-scores.
                </p>
                <Button
                  type="button"
                  className="mt-3"
                  disabled={fixing || loading || jobDescription.trim().length < 50}
                  onClick={handleFix}
                >
                  <Wand2 className="mr-2 h-4 w-4" />
                  {fixing ? 'Fixing your CV...' : 'Fix this'}
                </Button>
              </div>
            </div>
          </div>

          {appliedChanges ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
              <p className="flex items-center gap-2 text-sm font-bold text-emerald-800">
                <CheckCircle2 className="h-4 w-4" />
                Applied {appliedChanges.length} {appliedChanges.length === 1 ? 'change' : 'changes'}
              </p>
              <ul className="mt-2 space-y-1.5 text-xs leading-5 text-emerald-900">
                {appliedChanges.map((change) => (
                  <li key={change} className="flex gap-2">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-emerald-600" />
                    <span>{change}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {result.history.length > 1 ? (
            <div className="h-28 rounded-2xl border border-slate-200 bg-slate-50 p-3">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={result.history.slice(-10)}>
                  <XAxis dataKey="createdAt" hide />
                  <YAxis domain={[0, 100]} hide />
                  <Tooltip />
                  <Line type="monotone" dataKey="score" stroke="#0891b2" strokeWidth={3} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
