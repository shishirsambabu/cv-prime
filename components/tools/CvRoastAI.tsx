'use client';

import { useState } from 'react';
import { Flame, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ScoreRing } from '@/components/marketing/ScoreRing';
import { useAiTool } from '@/components/tools/ai/useAiTool';
import { AiGate } from '@/components/tools/ai/AiGate';
import { ToolInput, RunButton, ToolCard } from '@/components/tools/ai/fields';
import { ResumeField } from '@/components/tools/ai/ResumeField';
import { SAMPLE_RESUME } from '@/components/tools/ai/samples';

interface RoastResult {
  score: number;
  verdict: string;
  strengths: string[];
  redFlags: Array<{ problem: string; fix: string }>;
}

const TOOL_PATH = '/tools/ai-cv-roast';

export function CvRoastAI(): JSX.Element {
  const [resume, setResume] = useState('');
  const [role, setRole] = useState('');
  const { run, loading, gate, data } = useAiTool<RoastResult>('/api/tools/cv-roast');
  const tooShort = resume.trim().length < 50;

  function onSubmit(e: React.FormEvent): void {
    e.preventDefault();
    if (tooShort) return;
    void run({ resumeText: resume, targetRole: role.trim() || undefined });
  }

  return (
    <div className="space-y-6">
      <form onSubmit={onSubmit}>
        <ToolCard>
          <div className="space-y-5">
            <ToolInput label="Target role (optional)" value={role} onChange={setRole} placeholder="e.g. Data Analyst" />
            <ResumeField label="Your resume" value={resume} onChange={setResume} sample={SAMPLE_RESUME} placeholder="Paste your full resume text — the AI will be honest…" rows={12} />
          </div>
          <div className="mt-5">
            <RunButton loading={loading} disabled={tooShort}>
              <Flame className="h-4 w-4" />
              Roast my CV
            </RunButton>
          </div>
        </ToolCard>
      </form>

      {gate ? <AiGate code={gate} toolPath={TOOL_PATH} /> : null}

      {data ? (
        <ToolCard>
          <div className="flex flex-col items-center gap-6 sm:flex-row">
            <ScoreRing value={data.score} size={120} hole="#0b0a16" />
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-400">The verdict</p>
              <p className="mt-1 font-display text-xl font-bold text-white">{data.verdict}</p>
            </div>
          </div>

          {data.strengths.length > 0 ? (
            <div className="mt-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-300">What's working</p>
              <ul className="mt-3 space-y-2">
                {data.strengths.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-sm leading-6 text-slate-200">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" /> {s}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mt-7">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-rose-300">Red flags & fixes</p>
            <div className="mt-3 space-y-3">
              {data.redFlags.map((r) => (
                <div key={r.problem} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-sm font-semibold text-rose-200">{r.problem}</p>
                  <p className="mt-1.5 flex items-start gap-2 text-sm leading-6 text-slate-200">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" /> {r.fix}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ToolCard>
      ) : null}
    </div>
  );
}
