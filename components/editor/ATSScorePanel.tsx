'use client';

import { useEffect, useRef, useState } from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  GaugeCircle,
  Info,
  ScanSearch,
  Undo2,
  Wand2,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ExportPDFButton } from '@/components/editor/ExportPDFButton';
import { NoKeyPrompt } from '@/components/ai/NoKeyPrompt';
import { KeyExpiredPrompt } from '@/components/ai/KeyExpiredPrompt';
import { captureClientEvent } from '@/lib/clientAnalytics';
import { cvDataToPlainText } from '@/lib/cvText';
import { cvDataSchema } from '@/lib/cv.schema';
import { templateMap } from '@/components/templates';
import { type HighlightConfig } from '@/components/templates/template-utils';
import { useCVStore } from '@/store/cvStore';
import type { CVData, TemplateId } from '@/types/cv.types';

// Collect every comparable text fragment (summary + experience bullets) from a
// CV so we can diff the Before and After versions for change highlighting.
function collectTexts(cv: CVData): { summary: string; bullets: Set<string> } {
  const bullets = new Set(
    cv.experience
      .flatMap((exp) => exp.bullets)
      .map((b) => b.trim())
      .filter(Boolean),
  );
  return { summary: (cv.personal.summary ?? '').trim(), bullets };
}

// Build the highlight sets: text that is NEW in After (green) and text that was
// REMOVED from Before (amber). Reworded bullets show up on both sides.
function buildHighlights(
  before: CVData,
  after: CVData,
): { added: HighlightConfig; removed: HighlightConfig } {
  const b = collectTexts(before);
  const a = collectTexts(after);

  const addedTexts = new Set<string>();
  const removedTexts = new Set<string>();

  a.bullets.forEach((t) => {
    if (!b.bullets.has(t)) addedTexts.add(t);
  });
  b.bullets.forEach((t) => {
    if (!a.bullets.has(t)) removedTexts.add(t);
  });

  if (a.summary && a.summary !== b.summary) addedTexts.add(a.summary);
  if (b.summary && b.summary !== a.summary) removedTexts.add(b.summary);

  return {
    added: { texts: addedTexts, tone: 'added' },
    removed: { texts: removedTexts, tone: 'removed' },
  };
}

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
  if (score >= 80) return '#059669';
  if (score >= 50) return '#d97706';
  return '#e11d48';
}

function parseError(
  payload: APIErrorPayload,
): 'NO_KEY' | 'KEY_INVALID' | 'RATE_LIMITED' | 'OTHER' {
  if (payload.error === 'NO_KEY') return 'NO_KEY';
  if (payload.error === 'KEY_INVALID') return 'KEY_INVALID';
  if (payload.error === 'RATE_LIMITED') return 'RATE_LIMITED';
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
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{title}</p>
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

// Full-page CV renderer with page navigation, used inside the modal.
function CVPageViewer({
  data,
  templateId,
  label,
  highlight,
  changeConfig,
}: {
  data: CVData;
  templateId: TemplateId;
  label: string;
  highlight?: boolean;
  changeConfig: HighlightConfig;
}): JSX.Element {
  const Template = templateMap[templateId];
  const containerRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // A4 page is 794px wide × 1123px tall at 96 dpi.
  const pageHeight = 1123;
  const pageWidth = 794;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    // Wait for layout to settle before counting pages.
    const id = setTimeout(() => {
      const h = el.scrollHeight;
      setTotalPages(Math.max(1, Math.ceil(h / pageHeight)));
    }, 150);
    return () => clearTimeout(id);
  }, [data]);

  // Scale to fit the available modal column width (~380px on desktop).
  const scale = 0.47;
  const visibleWidth = Math.round(pageWidth * scale);
  const visibleHeight = Math.round(pageHeight * scale);

  // Clip to show only the current page by shifting the inner div upward.
  const offsetY = -(page - 1) * pageHeight;

  return (
    <div style={{ width: visibleWidth }} className="flex flex-col items-center">
      <p
        className={`mb-2 self-start text-[11px] font-bold uppercase tracking-[0.16em] ${
          highlight ? 'text-cyan-600' : 'text-slate-500'
        }`}
      >
        {label}
      </p>

      <div
        className={`overflow-hidden rounded-xl border bg-white shadow-md ${
          highlight ? 'border-cyan-400 ring-2 ring-cyan-200' : 'border-slate-200'
        }`}
        style={{ width: visibleWidth, height: visibleHeight }}
      >
        <div
          style={{
            width: pageWidth,
            transform: `scale(${scale}) translateY(${offsetY}px)`,
            transformOrigin: 'top left',
          }}
          ref={containerRef}
        >
          <Template data={data} highlight={changeConfig} />
        </div>
      </div>

      {/* Page navigation */}
      <div className="mt-3 flex items-center gap-3">
        <button
          type="button"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page <= 1}
          className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 disabled:opacity-30"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span className="text-xs font-semibold text-slate-600">
          Page {page} / {totalPages}
        </span>
        <button
          type="button"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page >= totalPages}
          className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 disabled:opacity-30"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function BeforeAfterModal({
  beforeData,
  afterData,
  templateId,
  changes,
  cvId,
  onRevert,
  onClose,
}: {
  beforeData: CVData;
  afterData: CVData;
  templateId: TemplateId;
  changes: string[];
  cvId?: string | null;
  onRevert: () => void;
  onClose: () => void;
}): JSX.Element {
  // Close on backdrop click.
  function handleBackdrop(e: React.MouseEvent<HTMLDivElement>): void {
    if (e.target === e.currentTarget) onClose();
  }

  // Close on Escape key.
  useEffect(() => {
    function handleKey(e: KeyboardEvent): void {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const { added, removed } = buildHighlights(beforeData, afterData);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm"
      onClick={handleBackdrop}
    >
      <div className="relative mt-8 w-full max-w-4xl rounded-[1.5rem] border border-slate-200 bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <div className="flex items-center gap-2">
            <ScanSearch className="h-5 w-5 text-cyan-600" />
            <h2 className="font-display text-lg font-bold tracking-[-0.02em]">
              Before &amp; After comparison
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:bg-slate-100"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-5 px-6 pt-4 text-[11px] font-semibold text-slate-600">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-3 w-3 rounded-[3px] bg-amber-200" />
            Original wording (removed / reworded)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-3 w-3 rounded-[3px] bg-emerald-200" />
            New &amp; improved wording
          </span>
        </div>

        {/* CV side-by-side */}
        <div className="flex flex-wrap justify-center gap-8 px-6 py-6">
          <CVPageViewer
            data={beforeData}
            templateId={templateId}
            label="Before"
            changeConfig={removed}
          />
          <CVPageViewer
            data={afterData}
            templateId={templateId}
            label="After"
            highlight
            changeConfig={added}
          />
        </div>

        {/* Changes list */}
        <div className="border-t border-slate-100 px-6 py-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            Changes applied ({changes.length})
          </p>
          <ul className="mt-3 space-y-1.5 text-xs leading-5 text-slate-700">
            {changes.map((c) => (
              <li key={c} className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Score note */}
        <div className="mx-6 mb-4 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <p className="text-xs leading-5 text-amber-800">
            AI scoring can vary by ±5 points between runs — small fluctuations don&apos;t mean the
            CV got worse. The bullet rewrites and keyword additions are the real improvement.
          </p>
        </div>

        {/* Footer actions */}
        <div className="flex flex-wrap items-center gap-3 border-t border-slate-100 px-6 py-4">
          <ExportPDFButton cvId={cvId ?? undefined} />
          <button
            type="button"
            onClick={() => {
              onRevert();
              onClose();
            }}
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-50"
          >
            <Undo2 className="h-3.5 w-3.5" />
            Revert changes
          </button>
          <button
            type="button"
            onClick={onClose}
            className="ml-auto inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold text-slate-600 transition hover:bg-slate-100"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export function ATSScorePanel(): JSX.Element {
  const cvId = useCVStore((state) => state.cvId);
  const data = useCVStore((state) => state.data);
  const setData = useCVStore((state) => state.setData);
  const templateId = useCVStore((state) => state.templateId);
  const [jobDescription, setJobDescription] = useState('');
  const [result, setResult] = useState<ATSResult | null>(null);
  const [errorState, setErrorState] = useState<
    'NO_KEY' | 'KEY_INVALID' | 'RATE_LIMITED' | 'OTHER' | null
  >(null);
  const [loading, setLoading] = useState(false);
  const [fixing, setFixing] = useState(false);
  const [appliedChanges, setAppliedChanges] = useState<string[] | null>(null);
  const [beforeData, setBeforeData] = useState<CVData | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  async function handleScore(): Promise<void> {
    setLoading(true);
    setErrorState(null);
    setAppliedChanges(null);

    const response = await fetch('/api/ats-score', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cvId, cvText: cvDataToPlainText(data), jobDescription }),
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

    const snapshot = data;

    const response = await fetch('/api/ats-fix', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cvId, cvData: data, jobDescription }),
    });
    const payload = (await response.json().catch(() => ({}))) as {
      cvData?: unknown;
      changes?: string[];
    } & APIErrorPayload;

    setFixing(false);

    if (!response.ok) {
      setErrorState(parseError(payload));
      return;
    }

    const parsedData = cvDataSchema.safeParse(payload.cvData);
    if (parsedData.success) {
      setData(parsedData.data);
      setBeforeData(snapshot);
      setAppliedChanges(payload.changes ?? []);
      captureClientEvent('ats_fix_applied', { changes: (payload.changes ?? []).length });
      // Open the modal automatically so the user sees the comparison immediately.
      setModalOpen(true);
    } else {
      setErrorState('OTHER');
    }
  }

  function handleRevert(): void {
    if (!beforeData) return;
    setData(beforeData);
    setBeforeData(null);
    setAppliedChanges(null);
    captureClientEvent('ats_fix_applied', { changes: 0 });
  }

  return (
    <>
      <section className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-brand">
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

        {errorState === 'NO_KEY' ? (
          <div className="mt-4">
            <NoKeyPrompt />
          </div>
        ) : null}
        {errorState === 'KEY_INVALID' ? (
          <div className="mt-4">
            <KeyExpiredPrompt />
          </div>
        ) : null}
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
                  <li key={suggestion} className="flex gap-2 rounded-2xl bg-slate-50 px-4 py-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                    <span>{suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fix this */}
            <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-500 text-white">
                  <Wand2 className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-900">Fix this automatically</p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    AI rewrites your bullets, weaves in missing keywords, and tightens your summary
                    — keeping every fact truthful.
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

            {/* Applied changes summary */}
            {appliedChanges && beforeData ? (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <p className="flex items-center gap-2 text-sm font-bold text-emerald-800">
                  <CheckCircle2 className="h-4 w-4" />
                  Applied {appliedChanges.length}{' '}
                  {appliedChanges.length === 1 ? 'change' : 'changes'}
                </p>
                <ul className="mt-3 space-y-1.5 text-xs leading-5 text-emerald-900">
                  {appliedChanges.map((change) => (
                    <li key={change} className="flex gap-2">
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-emerald-600" />
                      <span>{change}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-cyan-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-cyan-700"
                  >
                    <ScanSearch className="h-3.5 w-3.5" />
                    View before &amp; after
                  </button>
                  <button
                    type="button"
                    onClick={handleRevert}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-50"
                  >
                    <Undo2 className="h-3.5 w-3.5" />
                    Revert changes
                  </button>
                </div>
              </div>
            ) : null}

            {result.history.length > 1 ? (
              <div className="h-28 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={result.history.slice(-10)}>
                    <XAxis dataKey="createdAt" hide />
                    <YAxis domain={[0, 100]} hide />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="score"
                      stroke="#0891b2"
                      strokeWidth={3}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            ) : null}
          </div>
        ) : null}
      </section>

      {modalOpen && appliedChanges && beforeData ? (
        <BeforeAfterModal
          beforeData={beforeData}
          afterData={data}
          templateId={templateId}
          changes={appliedChanges}
          cvId={cvId}
          onRevert={handleRevert}
          onClose={() => setModalOpen(false)}
        />
      ) : null}
    </>
  );
}
