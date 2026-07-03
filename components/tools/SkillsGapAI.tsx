'use client';

import { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import { useAiTool } from '@/components/tools/ai/useAiTool';
import { AiGate } from '@/components/tools/ai/AiGate';
import { ToolInput, RunButton, ToolCard } from '@/components/tools/ai/fields';
import { ResumeField } from '@/components/tools/ai/ResumeField';
import { SAMPLE_RESUME } from '@/components/tools/ai/samples';

interface SkillsResult {
  summary: string;
  skills: Array<{ skill: string; why: string; how: string; priority: 'high' | 'medium' | 'low' }>;
}

const TOOL_PATH = '/tools/ai-skills-gap';

const priorityStyle: Record<'high' | 'medium' | 'low', string> = {
  high: 'border-rose-400/20 bg-rose-500/10 text-rose-200',
  medium: 'border-amber-400/20 bg-amber-500/10 text-amber-200',
  low: 'border-white/10 bg-white/[0.05] text-slate-300',
};

export function SkillsGapAI(): JSX.Element {
  const [role, setRole] = useState('');
  const [resume, setResume] = useState('');
  const { run, loading, gate, data } = useAiTool<SkillsResult>('/api/tools/skills-gap');
  const ready = role.trim().length > 1 && resume.trim().length >= 50;

  function onSubmit(e: React.FormEvent): void {
    e.preventDefault();
    if (!ready) return;
    void run({ targetRole: role, resumeText: resume });
  }

  return (
    <div className="space-y-6">
      <form onSubmit={onSubmit}>
        <ToolCard>
          <ToolInput label="Target role" value={role} onChange={setRole} placeholder="e.g. Data Scientist" />
          <div className="mt-5">
            <ResumeField label="Your resume" value={resume} onChange={setResume} sample={SAMPLE_RESUME} placeholder="Paste your full resume…" rows={11} />
          </div>
          <div className="mt-5">
            <RunButton loading={loading} disabled={!ready}>
              <GraduationCap className="h-4 w-4" />
              Find my skill gaps
            </RunButton>
          </div>
        </ToolCard>
      </form>

      {gate ? <AiGate code={gate} toolPath={TOOL_PATH} /> : null}

      {data ? (
        <ToolCard>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-cyan-300">The gap to close</p>
          <p className="mt-2 text-sm leading-7 text-slate-100">{data.summary}</p>
          <div className="mt-5 space-y-3">
            {data.skills.map((s) => (
              <div key={s.skill} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-base font-bold text-white">{s.skill}</h3>
                  <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-bold uppercase ${priorityStyle[s.priority]}`}>{s.priority}</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-300">{s.why}</p>
                <p className="mt-1.5 text-sm leading-6 text-cyan-200">How: {s.how}</p>
              </div>
            ))}
          </div>
        </ToolCard>
      ) : null}
    </div>
  );
}
