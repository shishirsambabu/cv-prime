'use client';

import { useMemo, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NoKeyPrompt } from '@/components/ai/NoKeyPrompt';
import { KeyExpiredPrompt } from '@/components/ai/KeyExpiredPrompt';
import { captureClientEvent } from '@/lib/clientAnalytics';
import { useCVStore } from '@/store/cvStore';
import type { CVData } from '@/types/cv.types';

interface AISuggestResponse {
  alternatives?: string[];
  error?: string;
}

interface BulletTarget {
  experienceId: string;
  bulletIndex: number;
  label: string;
  bullet: string;
  role: string;
  company: string;
}

function parseError(payload: AISuggestResponse): 'NO_KEY' | 'KEY_INVALID' | 'RATE_LIMITED' | 'OTHER' {
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

function replaceBullet(
  data: CVData,
  experienceId: string,
  bulletIndex: number,
  nextBullet: string
): CVData {
  return {
    ...data,
    experience: data.experience.map((experience) => {
      if (experience.id !== experienceId) {
        return experience;
      }

      return {
        ...experience,
        bullets: experience.bullets.map((bullet, index) =>
          index === bulletIndex ? nextBullet : bullet
        ),
      };
    }),
  };
}

export function AIAssistPanel(): JSX.Element {
  const data = useCVStore((state) => state.data);
  const setData = useCVStore((state) => state.setData);
  const targets = useMemo<BulletTarget[]>(
    () =>
      data.experience.flatMap((experience) =>
        experience.bullets.map((bullet, bulletIndex) => ({
          experienceId: experience.id,
          bulletIndex,
          label: `${experience.role || 'Role'} at ${experience.company || 'Company'} - bullet ${bulletIndex + 1}`,
          bullet,
          role: experience.role || data.personal.title || 'Target role',
          company: experience.company || 'Company',
        }))
      ),
    [data]
  );
  const [selectedTarget, setSelectedTarget] = useState(() => targets[0]?.label ?? '');
  const activeTarget = targets.find((target) => target.label === selectedTarget) ?? targets[0] ?? null;
  const [alternatives, setAlternatives] = useState<string[]>([]);
  const [errorState, setErrorState] = useState<'NO_KEY' | 'KEY_INVALID' | 'RATE_LIMITED' | 'OTHER' | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleRewrite(): Promise<void> {
    if (!activeTarget) {
      return;
    }

    setLoading(true);
    setErrorState(null);
    setAlternatives([]);

    const response = await fetch('/api/ai-suggest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bullet: activeTarget.bullet,
        role: activeTarget.role,
        company: activeTarget.company,
      }),
    });
    const payload = (await response.json().catch(() => ({}))) as AISuggestResponse;
    setLoading(false);

    if (!response.ok || !payload.alternatives) {
      setErrorState(parseError(payload));
      return;
    }

    setAlternatives(payload.alternatives);
    captureClientEvent('ai_bullet_rewritten');
  }

  function handleApply(nextBullet: string): void {
    if (!activeTarget) {
      return;
    }

    setData(replaceBullet(data, activeTarget.experienceId, activeTarget.bulletIndex, nextBullet));
  }

  return (
    <section className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
        <Sparkles className="h-4 w-4" />
        AI rewrite
      </div>
      <h2 className="mt-3 font-display text-2xl font-bold tracking-[-0.03em]">
        Rewrite weak bullets
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-500">
        Pick a work-experience bullet and generate three stronger alternatives.
      </p>

      {targets.length === 0 ? (
        <p className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
          Add work experience bullets before using AI rewrites.
        </p>
      ) : (
        <>
          <select
            className="mt-5 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none transition focus:border-cyan-500"
            value={activeTarget?.label ?? ''}
            onChange={(event) => setSelectedTarget(event.target.value)}
          >
            {targets.map((target) => (
              <option key={target.label} value={target.label}>
                {target.label}
              </option>
            ))}
          </select>
          <div className="mt-3 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
            {activeTarget?.bullet || 'This bullet is empty.'}
          </div>
          <Button
            type="button"
            className="mt-3"
            disabled={loading || !activeTarget?.bullet.trim()}
            onClick={handleRewrite}
          >
            {loading ? 'Writing...' : 'Generate alternatives'}
          </Button>
        </>
      )}

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
          <div className="h-16 animate-pulse rounded-2xl bg-slate-100" />
          <div className="h-16 animate-pulse rounded-2xl bg-slate-100" />
          <div className="h-16 animate-pulse rounded-2xl bg-slate-100" />
        </div>
      ) : null}

      {alternatives.length > 0 ? (
        <div className="mt-5 space-y-3">
          {alternatives.map((alternative) => (
            <article key={alternative} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm leading-6 text-slate-700">{alternative}</p>
              <Button
                type="button"
                size="sm"
                className="mt-3"
                onClick={() => handleApply(alternative)}
              >
                Apply this bullet
              </Button>
            </article>
          ))}
        </div>
      ) : null}
    </section>
  );
}
