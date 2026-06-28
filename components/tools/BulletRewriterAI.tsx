'use client';

import { useState } from 'react';
import { Sparkles, Copy, Check, ArrowRight } from 'lucide-react';
import { useAiTool } from '@/components/tools/ai/useAiTool';
import { AiGate } from '@/components/tools/ai/AiGate';
import { ToolTextarea, ToolInput, RunButton, ToolCard } from '@/components/tools/ai/fields';
import { SAMPLE_BULLETS } from '@/components/tools/ai/samples';

interface RewriteResult {
  rewrites: Array<{ original: string; options: string[] }>;
}

const TOOL_PATH = '/tools/ai-bullet-rewriter';

function CopyChip({ text }: { text: string }): JSX.Element {
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

export function BulletRewriterAI(): JSX.Element {
  const [bullets, setBullets] = useState('');
  const [role, setRole] = useState('');
  const { run, loading, gate, data } = useAiTool<RewriteResult>('/api/tools/bullet-rewriter');

  const tooShort = bullets.trim().length < 5;

  function onSubmit(e: React.FormEvent): void {
    e.preventDefault();
    if (tooShort) return;
    void run({ bullets, role: role.trim() || undefined });
  }

  return (
    <div className="space-y-6">
      <form onSubmit={onSubmit}>
        <ToolCard>
          <div className="space-y-5">
            <ToolInput label="Target role (optional)" value={role} onChange={setRole} placeholder="e.g. Senior Product Manager" />
            <ToolTextarea
              label="Your bullets"
              hint="one per line"
              value={bullets}
              onChange={setBullets}
              placeholder={'Responsible for managing the social media accounts\nWorked on the backend and helped improve performance'}
              rows={8}
            />
            <button type="button" onClick={() => setBullets(SAMPLE_BULLETS)} className="text-xs font-semibold text-cyan-300/80 transition hover:text-cyan-200">
              Try a sample →
            </button>
          </div>
          <div className="mt-5">
            <RunButton loading={loading} disabled={tooShort}>
              <Sparkles className="h-4 w-4" />
              Rewrite my bullets
            </RunButton>
          </div>
        </ToolCard>
      </form>

      {gate ? <AiGate code={gate} toolPath={TOOL_PATH} /> : null}

      {data ? (
        <div className="space-y-4">
          {data.rewrites.map((r, i) => (
            <ToolCard key={`${i}-${r.original}`}>
              <p className="text-sm leading-6 text-slate-400 line-through decoration-rose-400/50">{r.original}</p>
              <div className="mt-3 space-y-2.5">
                {r.options.map((o) => (
                  <div key={o} className="flex items-start gap-3 rounded-xl border border-cyan-400/20 bg-cyan-500/[0.06] p-3.5">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                    <p className="flex-1 text-sm leading-6 text-white">{o}</p>
                    <CopyChip text={o} />
                  </div>
                ))}
              </div>
            </ToolCard>
          ))}
          <p className="text-xs text-slate-500">Replace any [add metric] placeholders with your real numbers — never use a figure you can't back up.</p>
        </div>
      ) : null}
    </div>
  );
}
