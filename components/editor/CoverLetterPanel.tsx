'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MailPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NoKeyPrompt } from '@/components/ai/NoKeyPrompt';
import { KeyExpiredPrompt } from '@/components/ai/KeyExpiredPrompt';
import { captureClientEvent } from '@/lib/clientAnalytics';
import { useCVStore } from '@/store/cvStore';

type Tone = 'professional' | 'friendly' | 'executive';

interface CoverLetterResponse {
  id?: string | null;
  content?: string;
  error?: string;
}

function parseError(payload: CoverLetterResponse): 'NO_KEY' | 'KEY_INVALID' | 'RATE_LIMITED' | 'OTHER' {
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

export function CoverLetterPanel(): JSX.Element {
  const router = useRouter();
  const cvId = useCVStore((state) => state.cvId);
  const data = useCVStore((state) => state.data);
  const [jobDescription, setJobDescription] = useState('');
  const [tone, setTone] = useState<Tone>('professional');
  const [errorState, setErrorState] = useState<'NO_KEY' | 'KEY_INVALID' | 'RATE_LIMITED' | 'OTHER' | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleGenerate(): Promise<void> {
    setLoading(true);
    setErrorState(null);

    const response = await fetch('/api/cover-letter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cvId,
        cvData: data,
        jobDescription,
        tone,
      }),
    });
    const payload = (await response.json().catch(() => ({}))) as CoverLetterResponse;
    setLoading(false);

    if (!response.ok || !payload.id) {
      setErrorState(parseError(payload));
      return;
    }

    captureClientEvent('cover_letter_generated');
    router.push(`/cover-letter/${payload.id}`);
  }

  return (
    <section className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-brand">
        <MailPlus className="h-4 w-4" />
        Cover letter
      </div>
      <h2 className="mt-3 font-display text-2xl font-bold tracking-[-0.03em]">
        Generate a tailored draft
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-500">
        Paste a job description, choose a tone, and create an editable cover letter.
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-[180px_1fr]">
        <select
          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none transition focus:border-cyan-500"
          value={tone}
          onChange={(event) => setTone(event.target.value as Tone)}
        >
          <option value="professional">Professional</option>
          <option value="friendly">Friendly</option>
          <option value="executive">Executive</option>
        </select>
        <textarea
          value={jobDescription}
          onChange={(event) => setJobDescription(event.target.value)}
          className="min-h-28 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 outline-none transition focus:border-cyan-500"
          placeholder="Paste the job description here..."
        />
      </div>

      <Button
        type="button"
        className="mt-3"
        disabled={loading || jobDescription.trim().length < 50}
        onClick={handleGenerate}
      >
        {loading ? 'Generating...' : 'Generate cover letter'}
      </Button>

      {loading ? (
        <div className="mt-5 space-y-3">
          <div className="h-4 w-3/4 animate-pulse rounded-full bg-slate-200" />
          <div className="h-4 w-1/2 animate-pulse rounded-full bg-slate-200" />
          <div className="h-20 animate-pulse rounded-2xl bg-slate-100" />
        </div>
      ) : null}

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
    </section>
  );
}
