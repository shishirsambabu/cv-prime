'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  FileUp,
  GaugeCircle,
  KeyRound,
  Loader2,
  Sparkles,
} from 'lucide-react';
import { KeyExpiredPrompt } from '@/components/ai/KeyExpiredPrompt';
import { NoKeyPrompt } from '@/components/ai/NoKeyPrompt';
import { ExportPDFButton } from '@/components/editor/ExportPDFButton';
import { templateMap } from '@/components/templates';
import { TemplatePreview } from '@/components/templates/TemplatePreview';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { captureClientEvent } from '@/lib/clientAnalytics';
import type { Plan, TemplateId } from '@/types/cv.types';

interface AIJobCVWizardProps {
  hasOpenRouterKey: boolean;
  plan: Plan;
  pdfExportsUsed: number;
}

interface GeneratedCVResponse {
  cvId?: string;
  title?: string;
  score?: number;
  missingKeywords?: string[];
  presentKeywords?: string[];
  suggestions?: string[];
  error?: string;
  message?: string;
}

const templateOptions: Array<{ id: TemplateId; label: string; description: string }> = [
  { id: 'modern', label: 'Modern', description: 'Best for product, growth, and general business roles.' },
  { id: 'technical', label: 'Technical', description: 'Best for engineering, data, and technical product roles.' },
  { id: 'executive', label: 'Executive', description: 'Best for senior, strategy, and leadership roles.' },
  { id: 'minimal', label: 'Minimal', description: 'Best when ATS readability matters more than design.' },
];

function errorMessage(payload: GeneratedCVResponse): string {
  if (payload.error === 'NO_KEY') return 'Connect your OpenRouter key before generating a CV.';
  if (payload.error === 'KEY_INVALID') return 'OpenRouter rejected this key. Update it in settings.';
  if (payload.error === 'RATE_LIMITED') return 'Too many AI requests. Try again in an hour.';
  return payload.message ?? 'Could not generate the tailored CV. Please try again.';
}

function remainingDownloads(plan: Plan, pdfExportsUsed: number): string {
  if (plan === 'pro') return 'Unlimited PDF downloads unlocked.';
  const remaining = Math.max(0, 3 - pdfExportsUsed);
  return `${remaining}/3 free PDF downloads remaining.`;
}

// Pulsing "next step" border + subtle glow to guide the user's eye.
function stepCardClass(isActive: boolean, isDone: boolean): string {
  if (isDone) return 'rounded-[2rem] border border-emerald-200 bg-white p-6 shadow-sm transition-all duration-300';
  if (isActive) return 'rounded-[2rem] border-2 border-cyan-400 bg-white p-6 shadow-lg shadow-cyan-200/60 ring-4 ring-cyan-100 transition-all duration-300';
  return 'rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm opacity-60 transition-all duration-300';
}

function StepBadge({ step, done }: { step: number; done: boolean }): JSX.Element {
  if (done) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
        <CheckCircle2 className="h-3.5 w-3.5" />
        Done
      </span>
    );
  }
  return (
    <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
      Step {step}
    </span>
  );
}

function ActiveArrow(): JSX.Element {
  return (
    <div className="flex justify-center py-1">
      <div className="flex h-8 w-8 animate-bounce items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
        <ArrowRight className="h-4 w-4 rotate-90" />
      </div>
    </div>
  );
}

export function AIJobCVWizard({
  hasOpenRouterKey,
  plan,
  pdfExportsUsed,
}: AIJobCVWizardProps): JSX.Element {
  const [jobDescription, setJobDescription] = useState('');
  const [cvText, setCvText] = useState('');
  const [templateId, setTemplateId] = useState<TemplateId>('modern');
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [keyInvalid, setKeyInvalid] = useState(false);
  const [result, setResult] = useState<GeneratedCVResponse | null>(null);

  // Completion state for each step — drives the visual cue logic.
  const step1Done = hasOpenRouterKey;
  const step2Done = jobDescription.trim().length >= 50;
  const step3Done = file !== null || cvText.trim().length >= 80;
  // Template always has a default so step 4 is "done" once step 3 is done and
  // the user has actively clicked a template (we track this separately).
  const [templateChosen, setTemplateChosen] = useState(false);
  const step4Done = templateChosen;

  const allDone = step1Done && step2Done && step3Done && step4Done;

  // Which step number is currently "active" (next to complete)?
  function activeStep(): number {
    if (!step1Done) return 1;
    if (!step2Done) return 2;
    if (!step3Done) return 3;
    if (!step4Done) return 4;
    return 5; // all done, highlight the generate button
  }
  const active = activeStep();

  async function handleGenerate(): Promise<void> {
    setError(null);
    setKeyInvalid(false);
    setResult(null);

    if (!hasOpenRouterKey) {
      setError('Connect your OpenRouter key before generating a CV.');
      return;
    }

    if (!file && cvText.trim().length < 80) {
      setError('Upload a CV file or paste at least a few paragraphs from your CV.');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.set('jobDescription', jobDescription);
    formData.set('templateId', templateId);
    formData.set('cvText', cvText);
    if (file) formData.set('cvFile', file);

    const response = await fetch('/api/ai-generate-cv', { method: 'POST', body: formData });
    const payload = (await response.json().catch(() => ({}))) as GeneratedCVResponse;
    setLoading(false);

    if (!response.ok) {
      if (payload.error === 'KEY_INVALID') setKeyInvalid(true);
      setError(errorMessage(payload));
      return;
    }

    setResult(payload);
    captureClientEvent('jd_tailor_used', { templateId, score: payload.score ?? null });
  }

  const canGenerate = !loading && step1Done && step2Done && step3Done;

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_390px]">
      <section className="space-y-4">

        {/* ── Step 1: API key ───────────────────────────────────── */}
        <article className={stepCardClass(active === 1, step1Done)}>
          <div className="flex items-start gap-4">
            <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white transition-colors ${step1Done ? 'bg-emerald-500' : active === 1 ? 'bg-cyan-500' : 'bg-slate-300'}`}>
              {step1Done ? <CheckCircle2 className="h-5 w-5" /> : <KeyRound className="h-5 w-5" />}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-3">
                <StepBadge step={1} done={step1Done} />
              </div>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-[-0.03em]">
                Connect OpenRouter once
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-500">
                Use a temporary OpenRouter key with a small credit limit. You can delete it after downloading your CV.
              </p>
              <div className="mt-4">
                {hasOpenRouterKey ? (
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-800">
                    <CheckCircle2 className="h-4 w-4" />
                    OpenRouter key connected
                  </div>
                ) : (
                  <NoKeyPrompt />
                )}
              </div>
            </div>
          </div>
        </article>

        {active === 2 && <ActiveArrow />}

        {/* ── Step 2: Job description ────────────────────────────── */}
        <article className={stepCardClass(active === 2, step2Done)}>
          <div className="flex items-center justify-between gap-3">
            <StepBadge step={2} done={step2Done} />
            {active === 2 && (
              <span className="animate-pulse rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold text-brand">
                👉 Paste here next
              </span>
            )}
          </div>
          <Label htmlFor="job-description" className="mt-3 block font-display text-2xl font-bold">
            Paste the job description
          </Label>
          <p className="mt-2 text-sm leading-7 text-slate-500">
            Paste the role exactly as posted. The AI uses this to choose keywords, rewrite bullets, and score the match.
          </p>
          <Textarea
            id="job-description"
            className={`mt-4 min-h-[230px] transition-all duration-200 ${active === 2 ? 'border-cyan-400 ring-2 ring-cyan-100 focus:ring-cyan-200' : ''}`}
            placeholder="Paste the JD here..."
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
          {step2Done && (
            <p className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
              <CheckCircle2 className="h-3.5 w-3.5" /> Job description added
            </p>
          )}
        </article>

        {active === 3 && <ActiveArrow />}

        {/* ── Step 3: Upload CV ──────────────────────────────────── */}
        <article className={stepCardClass(active === 3, step3Done)}>
          <div className="flex items-center justify-between gap-3">
            <StepBadge step={3} done={step3Done} />
            {active === 3 && (
              <span className="animate-pulse rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold text-brand">
                👉 Upload your CV next
              </span>
            )}
          </div>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-[-0.03em]">
            Upload or paste your current CV
          </h2>
          <p className="mt-2 text-sm leading-7 text-slate-500">
            PDF, DOCX, and TXT are supported. If the file text is not readable, paste your CV text below.
          </p>
          <label
            htmlFor="cv-file"
            className={`mt-5 flex cursor-pointer flex-col items-center justify-center rounded-[1.5rem] border border-dashed px-5 py-8 text-center transition ${
              file
                ? 'border-emerald-300 bg-emerald-50'
                : active === 3
                  ? 'border-cyan-400 bg-cyan-50 hover:border-cyan-500 hover:bg-cyan-100'
                  : 'border-slate-300 bg-slate-50 hover:border-cyan-300 hover:bg-cyan-50'
            }`}
          >
            {file ? (
              <CheckCircle2 className="h-8 w-8 text-emerald-500" />
            ) : (
              <FileUp className={`h-8 w-8 ${active === 3 ? 'text-cyan-600' : 'text-brand'}`} />
            )}
            <span className="mt-3 text-sm font-bold text-slate-800">
              {file ? file.name : 'Upload CV file'}
            </span>
            <span className="mt-1 text-xs font-semibold text-slate-500">
              PDF, DOCX, or TXT up to 5 MB
            </span>
          </label>
          <input
            id="cv-file"
            type="file"
            className="sr-only"
            accept=".pdf,.docx,.txt,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />
          <Textarea
            className="mt-4 min-h-[190px]"
            placeholder="Optional fallback: paste CV text here..."
            value={cvText}
            onChange={(e) => setCvText(e.target.value)}
          />
        </article>

        {active === 4 && <ActiveArrow />}

        {/* ── Step 4: Template ───────────────────────────────────── */}
        <article className={stepCardClass(active === 4, step4Done)}>
          <div className="flex items-center justify-between gap-3">
            <StepBadge step={4} done={step4Done} />
            {active === 4 && (
              <span className="animate-pulse rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold text-brand">
                👉 Pick a template
              </span>
            )}
          </div>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-[-0.03em]">
            Choose a template
          </h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {templateOptions.map((template) => {
              const selected = templateId === template.id;
              const Template = templateMap[template.id];

              return (
                <button
                  key={template.id}
                  type="button"
                  className={`rounded-[1.5rem] border p-4 text-left transition ${
                    selected
                      ? 'border-slate-950 bg-slate-950 text-white shadow-xl shadow-slate-950/15'
                      : active === 4
                        ? 'border-cyan-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-cyan-400 hover:shadow-lg'
                        : 'border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-950/5'
                  }`}
                  onClick={() => {
                    setTemplateId(template.id);
                    setTemplateChosen(true);
                  }}
                >
                  <span className="flex h-48 items-start justify-center overflow-hidden rounded-[1.1rem] border border-slate-200 bg-[#e9eef5] p-3">
                    <TemplatePreview Template={Template} scale={0.145} />
                  </span>
                  <span className="mt-4 block font-display text-lg font-bold">{template.label}</span>
                  <span className={`mt-2 block text-sm leading-6 ${selected ? 'text-slate-300' : 'text-slate-500'}`}>
                    {template.description}
                  </span>
                </button>
              );
            })}
          </div>
        </article>

        {/* ── Mobile generate button ─────────────────────────────── */}
        <div className="xl:hidden">
          {active === 5 && <ActiveArrow />}
          <button
            type="button"
            disabled={!canGenerate}
            onClick={handleGenerate}
            className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-4 text-sm font-bold text-white transition ${
              allDone
                ? 'animate-pulse bg-cyan-500 shadow-lg shadow-cyan-400/50 hover:animate-none hover:bg-cyan-600'
                : canGenerate
                  ? 'bg-brand hover:bg-brand-strong'
                  : 'cursor-not-allowed bg-slate-950 opacity-50'
            }`}
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
            {loading ? 'Generating CV...' : 'Generate tailored CV'}
          </button>
          {!hasOpenRouterKey && (
            <p className="mt-3 text-center text-sm font-semibold text-slate-500">
              Connect your OpenRouter key in{' '}
              <a href="/settings" className="font-bold text-slate-950 underline-offset-4 hover:underline">Settings</a>{' '}
              first.
            </p>
          )}
          {error && (
            <p className="mt-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
              {error}
            </p>
          )}
        </div>
      </section>

      {/* ── Sticky sidebar ─────────────────────────────────────────── */}
      <aside className="space-y-5 xl:sticky xl:top-24 xl:self-start">
        <section className={`overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl shadow-slate-950/20 transition-all duration-500 ${allDone ? 'ring-4 ring-cyan-400 ring-offset-2' : ''}`}>
          <div className="border-b border-white/10 p-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-foreground">
              <Sparkles className="h-3.5 w-3.5" />
              AI job CV
            </div>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-[-0.04em]">
              Generate a CV for this exact role.
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              We parse your CV, tailor it to the JD, score the match, and save an editable CV draft.
            </p>

            {/* Mini progress tracker */}
            <div className="mt-5 space-y-2">
              {[
                { label: 'API key connected', done: step1Done },
                { label: 'Job description pasted', done: step2Done },
                { label: 'CV uploaded', done: step3Done },
                { label: 'Template chosen', done: step4Done },
              ].map(({ label, done }) => (
                <div key={label} className="flex items-center gap-2.5 text-xs">
                  <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${done ? 'border-emerald-400 bg-emerald-400 text-white' : 'border-white/20 text-transparent'}`}>
                    {done && <CheckCircle2 className="h-3 w-3" />}
                  </span>
                  <span className={done ? 'font-semibold text-white' : 'text-slate-500'}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3 p-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Downloads</p>
              <p className="mt-2 text-sm font-bold text-white">{remainingDownloads(plan, pdfExportsUsed)}</p>
            </div>

            {/* Generate button — pulses + glows once all steps are done */}
            <div className={allDone ? 'relative' : undefined}>
              {allDone && (
                <span className="absolute -inset-1 animate-ping rounded-full bg-cyan-400/40" />
              )}
              <Button
                type="button"
                className={`relative w-full transition-all duration-300 ${
                  allDone
                    ? 'bg-cyan-500 text-white shadow-xl shadow-cyan-500/40 hover:bg-brand-strong'
                    : canGenerate
                      ? ''
                      : ''
                }`}
                disabled={!canGenerate}
                onClick={handleGenerate}
              >
                {loading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-4 w-4" />
                )}
                {loading ? 'Generating CV...' : 'Generate tailored CV'}
              </Button>
            </div>

            {allDone && !loading && (
              <p className="text-center text-xs font-semibold text-cyan-300">
                ✨ All set — hit the button above!
              </p>
            )}

            {error && (
              <p className="rounded-2xl border border-rose-300/30 bg-rose-400/10 p-3 text-sm font-semibold text-rose-100">
                {error}
              </p>
            )}
            {keyInvalid && <KeyExpiredPrompt />}
          </div>
        </section>

        {result?.cvId ? (
          <section className="rounded-[2rem] border border-emerald-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                <GaugeCircle className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-500">AI score</p>
                <p className="font-display text-3xl font-bold text-slate-950">{result.score ?? '--'}/100</p>
              </div>
            </div>
            <h3 className="mt-5 font-display text-2xl font-bold tracking-[-0.03em]">
              {result.title ?? 'Tailored CV ready'}
            </h3>
            {result.suggestions && result.suggestions.length > 0 ? (
              <ul className="mt-4 space-y-2">
                {result.suggestions.slice(0, 4).map((suggestion) => (
                  <li key={suggestion} className="rounded-2xl bg-slate-50 p-3 text-sm leading-6 text-slate-600">
                    {suggestion}
                  </li>
                ))}
              </ul>
            ) : null}
            <div className="mt-5 flex flex-col gap-3">
              <Link
                href={`/editor/${result.cvId}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold text-brand-foreground transition hover:bg-brand-strong"
              >
                Review and edit
                <ArrowRight className="h-4 w-4" />
              </Link>
              <ExportPDFButton cvId={result.cvId} />
            </div>
          </section>
        ) : null}
      </aside>
    </div>
  );
}
