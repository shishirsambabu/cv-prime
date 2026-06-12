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

const templateOptions: Array<{
  id: TemplateId;
  label: string;
  description: string;
}> = [
  {
    id: 'modern',
    label: 'Modern',
    description: 'Best for product, growth, and general business roles.',
  },
  {
    id: 'technical',
    label: 'Technical',
    description: 'Best for engineering, data, and technical product roles.',
  },
  {
    id: 'executive',
    label: 'Executive',
    description: 'Best for senior, strategy, and leadership roles.',
  },
  {
    id: 'minimal',
    label: 'Minimal',
    description: 'Best when ATS readability matters more than design.',
  },
];

function errorMessage(payload: GeneratedCVResponse): string {
  if (payload.error === 'NO_KEY') {
    return 'Connect your OpenRouter key before generating a CV.';
  }

  if (payload.error === 'KEY_INVALID') {
    return 'OpenRouter rejected this key. Update it in settings.';
  }

  if (payload.error === 'RATE_LIMITED') {
    return 'Too many AI requests. Try again in an hour.';
  }

  return payload.message ?? 'Could not generate the tailored CV. Please try again.';
}

function remainingDownloads(plan: Plan, pdfExportsUsed: number): string {
  if (plan === 'pro') {
    return 'Unlimited PDF downloads unlocked.';
  }

  const remaining = Math.max(0, 3 - pdfExportsUsed);
  return `${remaining}/3 free PDF downloads remaining.`;
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

    if (file) {
      formData.set('cvFile', file);
    }

    const response = await fetch('/api/ai-generate-cv', {
      method: 'POST',
      body: formData,
    });
    const payload = (await response.json().catch(() => ({}))) as GeneratedCVResponse;
    setLoading(false);

    if (!response.ok) {
      if (payload.error === 'KEY_INVALID') {
        setKeyInvalid(true);
      }

      setError(errorMessage(payload));
      return;
    }

    setResult(payload);
    captureClientEvent('jd_tailor_used', {
      templateId,
      score: payload.score ?? null,
    });
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_390px]">
      <section className="space-y-5">
        <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white">
              <KeyRound className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
                Step 1
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-[-0.03em]">
                Connect OpenRouter once
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-500">
                Use a temporary OpenRouter key with a small credit limit. You can delete it from OpenRouter after downloading your CV.
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

        <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
            Step 2
          </p>
          <Label htmlFor="job-description" className="mt-3 block font-display text-2xl font-bold">
            Paste the job description
          </Label>
          <p className="mt-2 text-sm leading-7 text-slate-500">
            Paste the role exactly as posted. The AI will use this to choose keywords, rewrite bullets, and score the match.
          </p>
          <Textarea
            id="job-description"
            className="mt-4 min-h-[230px]"
            placeholder="Paste the JD here..."
            value={jobDescription}
            onChange={(event) => setJobDescription(event.target.value)}
          />
        </article>

        <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
            Step 3
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-[-0.03em]">
            Upload or paste your current CV
          </h2>
          <p className="mt-2 text-sm leading-7 text-slate-500">
            PDF, DOCX, and TXT are supported. If the file text is not readable, paste your CV text below.
          </p>
          <label
            htmlFor="cv-file"
            className="mt-5 flex cursor-pointer flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50 px-5 py-8 text-center transition hover:border-cyan-300 hover:bg-cyan-50"
          >
            <FileUp className="h-8 w-8 text-cyan-700" />
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
            onChange={(event) => setFile(event.target.files?.[0] ?? null)}
          />
          <Textarea
            className="mt-4 min-h-[190px]"
            placeholder="Optional fallback: paste CV text here..."
            value={cvText}
            onChange={(event) => setCvText(event.target.value)}
          />
        </article>

        <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
            Step 4
          </p>
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
                      : 'border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-950/5'
                  }`}
                  onClick={() => setTemplateId(template.id)}
                >
                  <span className="flex h-48 items-start justify-center overflow-hidden rounded-[1.1rem] border border-slate-200 bg-[#e9eef5] p-3">
                    <TemplatePreview Template={Template} scale={0.145} />
                  </span>
                  <span className="mt-4 block font-display text-lg font-bold">
                    {template.label}
                  </span>
                  <span className={`mt-2 block text-sm leading-6 ${selected ? 'text-slate-300' : 'text-slate-500'}`}>
                    {template.description}
                  </span>
                </button>
              );
            })}
          </div>
        </article>

        <div className="xl:hidden">
          <button
            type="button"
            disabled={loading || jobDescription.trim().length < 50 || !hasOpenRouterKey}
            onClick={handleGenerate}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-4 text-sm font-bold text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="h-4 w-4" />
            )}
            {loading ? 'Generating CV...' : 'Generate tailored CV'}
          </button>
          {!hasOpenRouterKey ? (
            <p className="mt-3 text-center text-sm font-semibold text-slate-500">
              Connect your OpenRouter key in{' '}
              <a href="/settings" className="font-bold text-slate-950 underline-offset-4 hover:underline">
                Settings
              </a>{' '}
              first.
            </p>
          ) : null}
          {error ? (
            <p className="mt-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
              {error}
            </p>
          ) : null}
        </div>
      </section>

      <aside className="space-y-5 xl:sticky xl:top-24 xl:self-start">
        <section className="overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl shadow-slate-950/20">
          <div className="border-b border-white/10 p-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-950">
              <Sparkles className="h-3.5 w-3.5" />
              AI job CV
            </div>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-[-0.04em]">
              Generate a CV for this exact role.
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              We parse your CV, tailor it to the JD, score the match, and save an editable CV draft.
            </p>
          </div>
          <div className="space-y-3 p-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Downloads
              </p>
              <p className="mt-2 text-sm font-bold text-white">
                {remainingDownloads(plan, pdfExportsUsed)}
              </p>
            </div>
            <Button
              type="button"
              className="w-full"
              disabled={loading || jobDescription.trim().length < 50 || !hasOpenRouterKey}
              onClick={handleGenerate}
            >
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-4 w-4" />
              )}
              {loading ? 'Generating CV...' : 'Generate tailored CV'}
            </Button>
            {error ? (
              <p className="rounded-2xl border border-rose-300/30 bg-rose-400/10 p-3 text-sm font-semibold text-rose-100">
                {error}
              </p>
            ) : null}
            {keyInvalid ? <KeyExpiredPrompt /> : null}
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
                <p className="font-display text-3xl font-bold text-slate-950">
                  {result.score ?? '--'}/100
                </p>
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
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-black"
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
