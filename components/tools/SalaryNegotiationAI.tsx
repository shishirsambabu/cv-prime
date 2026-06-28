'use client';

import { useState } from 'react';
import { IndianRupee, Quote } from 'lucide-react';
import { useAiTool } from '@/components/tools/ai/useAiTool';
import { AiGate } from '@/components/tools/ai/AiGate';
import { ToolTextarea, ToolInput, RunButton, ToolCard } from '@/components/tools/ai/fields';

interface NegotiationResult {
  talkingPoints: string[];
  scripts: Array<{ situation: string; script: string }>;
  tips: string[];
}

const TOOL_PATH = '/tools/ai-salary-negotiation';

export function SalaryNegotiationAI(): JSX.Element {
  const [role, setRole] = useState('');
  const [context, setContext] = useState('');
  const { run, loading, gate, data } = useAiTool<NegotiationResult>('/api/tools/salary-negotiation');
  const ready = role.trim().length > 1 && context.trim().length >= 10;

  function onSubmit(e: React.FormEvent): void {
    e.preventDefault();
    if (!ready) return;
    void run({ role, context });
  }

  return (
    <div className="space-y-6">
      <form onSubmit={onSubmit}>
        <ToolCard>
          <ToolInput label="Role" value={role} onChange={setRole} placeholder="e.g. Senior Software Engineer" />
          <div className="mt-5">
            <ToolTextarea label="Offer details / your situation" value={context} onChange={setContext} placeholder="e.g. Offer ₹18 LPA (₹15 base + ₹3 variable), current ₹14 LPA, 2 competing offers, want ₹22…" rows={6} />
          </div>
          <div className="mt-5">
            <RunButton loading={loading} disabled={!ready}>
              <IndianRupee className="h-4 w-4" />
              Build my negotiation plan
            </RunButton>
          </div>
        </ToolCard>
      </form>

      {gate ? <AiGate code={gate} toolPath={TOOL_PATH} /> : null}

      {data ? (
        <ToolCard>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-300">Your talking points</p>
          <ul className="mt-3 space-y-2">
            {data.talkingPoints.map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-sm leading-6 text-slate-200">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" /> {t}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-violet-300">Ready-to-say scripts</p>
          <div className="mt-3 space-y-3">
            {data.scripts.map((s) => (
              <div key={s.situation} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{s.situation}</p>
                <p className="mt-2 flex items-start gap-2 text-sm leading-7 text-white">
                  <Quote className="mt-1 h-4 w-4 shrink-0 text-violet-300" /> {s.script}
                </p>
              </div>
            ))}
          </div>

          {data.tips.length > 0 ? (
            <ul className="mt-6 space-y-2">
              {data.tips.map((t) => (
                <li key={t} className="text-xs leading-6 text-slate-400">— {t}</li>
              ))}
            </ul>
          ) : null}
        </ToolCard>
      ) : null}
    </div>
  );
}
