'use client';

import { useState } from 'react';
import { CheckCircle2, XCircle, Sparkles } from 'lucide-react';
import { ScoreRing } from '@/components/marketing/ScoreRing';
import { useAiTool } from '@/components/tools/ai/useAiTool';
import { AiGate } from '@/components/tools/ai/AiGate';
import { ToolTextarea, RunButton, ToolCard } from '@/components/tools/ai/fields';
import { ResumeField } from '@/components/tools/ai/ResumeField';
import { SAMPLE_RESUME, SAMPLE_JD } from '@/components/tools/ai/samples';

interface AtsResult {
  score: number;
  missingKeywords: string[];
  presentKeywords: string[];
  suggestions: string[];
}

const TOOL_PATH = '/tools/ai-ats-score';

export function AtsScoreCheckerAI(): JSX.Element {
  const [cvText, setCvText] = useState('');
  const [jd, setJd] = useState('');
  const { run, loading, gate, data } = useAiTool<AtsResult>('/api/ats-score');

  const tooShort = cvText.trim().length < 50 || jd.trim().length < 50;

  function onSubmit(e: React.FormEvent): void {
    e.preventDefault();
    if (tooShort) return;
    void run({ cvText, jobDescription: jd });
  }

  return (
    <div className="space-y-6">
      <form onSubmit={onSubmit}>
        <ToolCard>
          <div className="grid gap-5 md:grid-cols-2">
            <ResumeField label="Your resume" hint="upload or paste" value={cvText} onChange={setCvText} sample={SAMPLE_RESUME} rows={12} />
            <ToolTextarea label="Job description" hint="the exact role" value={jd} onChange={setJd} placeholder="Paste the job description you're targeting…" rows={12} />
          </div>
          <button type="button" onClick={() => setJd(SAMPLE_JD)} className="mt-2 text-xs font-semibold text-cyan-300/80 transition hover:text-cyan-200">
            Need a job description? Use a sample →
          </button>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <RunButton loading={loading} disabled={tooShort}>
              <Sparkles className="h-4 w-4" />
              Check ATS score
            </RunButton>
            {tooShort ? (
              <span className="text-xs text-slate-400">Add your resume and a job description (50+ characters each).</span>
            ) : null}
          </div>
        </ToolCard>
      </form>

      {gate ? <AiGate code={gate} toolPath={TOOL_PATH} /> : null}

      {data ? (
        <ToolCard>
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
            <ScoreRing value={data.score} size={132} hole="#0b0a16" />
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-400">ATS match score</p>
              <p className="mt-1 font-display text-2xl font-bold text-white">
                {data.score >= 80 ? 'Strong match — ship it.' : data.score >= 50 ? 'Moderate — close the gaps below.' : 'Low match — the fixes below will move it fast.'}
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-rose-300">Missing keywords</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {data.missingKeywords.length === 0 ? (
                  <span className="text-sm text-slate-400">None — great coverage.</span>
                ) : (
                  data.missingKeywords.map((k) => (
                    <span key={k} className="inline-flex items-center gap-1.5 rounded-full border border-rose-400/20 bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-200">
                      <XCircle className="h-3 w-3" /> {k}
                    </span>
                  ))
                )}
              </div>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-300">Already matched</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {data.presentKeywords.map((k) => (
                  <span key={k} className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                    <CheckCircle2 className="h-3 w-3" /> {k}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {data.suggestions.length > 0 ? (
            <div className="mt-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-300">Fixes to raise your score</p>
              <ul className="mt-3 space-y-2.5">
                {data.suggestions.map((s) => (
                  <li key={s} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3.5 text-sm leading-6 text-slate-200">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </ToolCard>
      ) : null}
    </div>
  );
}
