'use client';

import { useState } from 'react';
import { ScanSearch } from 'lucide-react';
import { useAiTool } from '@/components/tools/ai/useAiTool';
import { AiGate } from '@/components/tools/ai/AiGate';
import { ToolTextarea, RunButton, ToolCard } from '@/components/tools/ai/fields';
import { SAMPLE_JD } from '@/components/tools/ai/samples';

interface DecodeResult {
  seniority: string;
  mustHaves: string[];
  niceToHaves: string[];
  hiddenRequirements: string[];
  redFlags: string[];
  keywordsToMirror: string[];
}

const TOOL_PATH = '/tools/ai-jd-decoder';

function Chips({ label, items, tone }: { label: string; items: string[]; tone: string }): JSX.Element | null {
  if (!items || items.length === 0) return null;
  return (
    <div>
      <p className={`text-[11px] font-bold uppercase tracking-[0.2em] ${tone}`}>{label}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((k) => (
          <span key={k} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-semibold text-slate-200">{k}</span>
        ))}
      </div>
    </div>
  );
}

export function JdDecoderAI(): JSX.Element {
  const [jd, setJd] = useState('');
  const { run, loading, gate, data } = useAiTool<DecodeResult>('/api/tools/jd-decoder');
  const tooShort = jd.trim().length < 50;

  function onSubmit(e: React.FormEvent): void {
    e.preventDefault();
    if (tooShort) return;
    void run({ jobDescription: jd });
  }

  return (
    <div className="space-y-6">
      <form onSubmit={onSubmit}>
        <ToolCard>
          <ToolTextarea label="Job description" value={jd} onChange={setJd} placeholder="Paste the full job description to decode it…" rows={12} />
          <button type="button" onClick={() => setJd(SAMPLE_JD)} className="mt-2 text-xs font-semibold text-cyan-300/80 transition hover:text-cyan-200">
            Try a sample →
          </button>
          <div className="mt-5">
            <RunButton loading={loading} disabled={tooShort}>
              <ScanSearch className="h-4 w-4" />
              Decode this JD
            </RunButton>
          </div>
        </ToolCard>
      </form>

      {gate ? <AiGate code={gate} toolPath={TOOL_PATH} /> : null}

      {data ? (
        <ToolCard>
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/[0.06] p-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-300">Who they actually want</p>
            <p className="mt-1.5 text-sm leading-7 text-white">{data.seniority}</p>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Chips label="Must-haves" items={data.mustHaves} tone="text-emerald-300" />
            <Chips label="Nice-to-haves" items={data.niceToHaves} tone="text-slate-400" />
            <Chips label="Hidden requirements" items={data.hiddenRequirements} tone="text-amber-300" />
            <Chips label="Red flags" items={data.redFlags} tone="text-rose-300" />
          </div>
          <div className="mt-6">
            <Chips label="Keywords to mirror in your resume" items={data.keywordsToMirror} tone="text-violet-300" />
          </div>
        </ToolCard>
      ) : null}
    </div>
  );
}
