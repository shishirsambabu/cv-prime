'use client';

import { useState } from 'react';
import { Target } from 'lucide-react';
import { useAiTool } from '@/components/tools/ai/useAiTool';
import { AiGate } from '@/components/tools/ai/AiGate';
import { RunButton, ToolCard } from '@/components/tools/ai/fields';
import { ResumeField } from '@/components/tools/ai/ResumeField';
import { SAMPLE_RESUME } from '@/components/tools/ai/samples';

interface FitResult {
  summary: string;
  roles: Array<{ title: string; fit: number; why: string; gaps: string[] }>;
}

const TOOL_PATH = '/tools/ai-role-fit';

export function RoleFitAI(): JSX.Element {
  const [resume, setResume] = useState('');
  const { run, loading, gate, data } = useAiTool<FitResult>('/api/tools/role-fit');
  const tooShort = resume.trim().length < 50;

  function onSubmit(e: React.FormEvent): void {
    e.preventDefault();
    if (tooShort) return;
    void run({ resumeText: resume });
  }

  return (
    <div className="space-y-6">
      <form onSubmit={onSubmit}>
        <ToolCard>
          <ResumeField label="Your resume" value={resume} onChange={setResume} sample={SAMPLE_RESUME} placeholder="Paste your full resume — the AI will suggest the roles you're most competitive for…" rows={12} />
          <div className="mt-5">
            <RunButton loading={loading} disabled={tooShort}>
              <Target className="h-4 w-4" />
              Find my best-fit roles
            </RunButton>
          </div>
        </ToolCard>
      </form>

      {gate ? <AiGate code={gate} toolPath={TOOL_PATH} /> : null}

      {data ? (
        <div className="space-y-4">
          <ToolCard>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-cyan-300">Where you fit</p>
            <p className="mt-2 text-sm leading-7 text-slate-100">{data.summary}</p>
          </ToolCard>
          {data.roles.map((r) => (
            <ToolCard key={r.title}>
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-display text-lg font-bold text-white">{r.title}</h3>
                <span className="font-display text-lg font-bold text-gradient-warm">{r.fit}%</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400" style={{ width: `${r.fit}%` }} />
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">{r.why}</p>
              {r.gaps.length > 0 ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {r.gaps.map((g) => (
                    <span key={g} className="rounded-full border border-amber-400/20 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-200">Gap: {g}</span>
                  ))}
                </div>
              ) : null}
            </ToolCard>
          ))}
        </div>
      ) : null}
    </div>
  );
}
