'use client';

import { useState } from 'react';
import { Linkedin, Copy, Check } from 'lucide-react';
import { useAiTool } from '@/components/tools/ai/useAiTool';
import { AiGate } from '@/components/tools/ai/AiGate';
import { ToolTextarea, ToolInput, RunButton, ToolCard } from '@/components/tools/ai/fields';

interface LinkedInResult {
  headlines: string[];
  about: string;
}

const TOOL_PATH = '/tools/ai-linkedin';

function Copyable({ text }: { text: string }): JSX.Element {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        void navigator.clipboard.writeText(text);
        setDone(true);
        window.setTimeout(() => setDone(false), 1500);
      }}
      className="shrink-0 rounded-lg border border-white/10 bg-white/[0.05] p-1.5 text-slate-300 transition hover:bg-white/[0.1] hover:text-white"
      aria-label="Copy"
    >
      {done ? <Check className="h-3.5 w-3.5 text-emerald-300" /> : <Copy className="h-3.5 w-3.5" />}
    </button>
  );
}

export function LinkedInOptimizerAI(): JSX.Element {
  const [role, setRole] = useState('');
  const [resume, setResume] = useState('');
  const { run, loading, gate, data } = useAiTool<LinkedInResult>('/api/tools/linkedin');
  const tooShort = resume.trim().length < 30;

  function onSubmit(e: React.FormEvent): void {
    e.preventDefault();
    if (tooShort) return;
    void run({ role: role.trim() || undefined, resumeText: resume });
  }

  return (
    <div className="space-y-6">
      <form onSubmit={onSubmit}>
        <ToolCard>
          <div className="space-y-5">
            <ToolInput label="Positioning / target role (optional)" value={role} onChange={setRole} placeholder="e.g. Product-led growth marketer" />
            <ToolTextarea label="Your experience" hint="paste your resume or a few lines about you" value={resume} onChange={setResume} placeholder="Paste your resume or describe your experience…" rows={10} />
          </div>
          <div className="mt-5">
            <RunButton loading={loading} disabled={tooShort}>
              <Linkedin className="h-4 w-4" />
              Generate LinkedIn copy
            </RunButton>
          </div>
        </ToolCard>
      </form>

      {gate ? <AiGate code={gate} toolPath={TOOL_PATH} /> : null}

      {data ? (
        <ToolCard>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-300">Headline options</p>
          <div className="mt-3 space-y-2.5">
            {data.headlines.map((h) => (
              <div key={h} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3.5">
                <p className="flex-1 text-sm leading-6 text-white">{h}</p>
                <span className="shrink-0 text-[11px] text-slate-500">{h.length}/220</span>
                <Copyable text={h} />
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-300">About section</p>
            <Copyable text={data.about} />
          </div>
          <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-100">{data.about}</p>
        </ToolCard>
      ) : null}
    </div>
  );
}
