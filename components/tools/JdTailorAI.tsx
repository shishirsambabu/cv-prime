'use client';

import { useState } from 'react';
import { Sparkles, Copy, Check } from 'lucide-react';
import { useAiTool } from '@/components/tools/ai/useAiTool';
import { AiGate } from '@/components/tools/ai/AiGate';
import { ToolTextarea, RunButton, ToolCard } from '@/components/tools/ai/fields';

interface TailorResult {
  summary: string;
  bullets: string[];
  keywordsToAdd: string[];
  notes: string[];
}

const TOOL_PATH = '/tools/ai-resume-tailor';

export function JdTailorAI(): JSX.Element {
  const [resume, setResume] = useState('');
  const [jd, setJd] = useState('');
  const [copied, setCopied] = useState(false);
  const { run, loading, gate, data } = useAiTool<TailorResult>('/api/tools/jd-tailor');

  const tooShort = resume.trim().length < 50 || jd.trim().length < 50;

  function onSubmit(e: React.FormEvent): void {
    e.preventDefault();
    if (tooShort) return;
    void run({ resumeText: resume, jobDescription: jd });
  }

  function copyAll(): void {
    if (!data) return;
    const text = [data.summary, '', ...data.bullets.map((b) => `• ${b}`)].join('\n');
    void navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="space-y-6">
      <form onSubmit={onSubmit}>
        <ToolCard>
          <div className="grid gap-5 md:grid-cols-2">
            <ToolTextarea label="Your current resume" value={resume} onChange={setResume} placeholder="Paste your full resume text here…" rows={12} />
            <ToolTextarea label="Target job description" value={jd} onChange={setJd} placeholder="Paste the job description you're applying to…" rows={12} />
          </div>
          <div className="mt-5">
            <RunButton loading={loading} disabled={tooShort}>
              <Sparkles className="h-4 w-4" />
              Tailor my resume
            </RunButton>
          </div>
        </ToolCard>
      </form>

      {gate ? <AiGate code={gate} toolPath={TOOL_PATH} /> : null}

      {data ? (
        <ToolCard>
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-cyan-300">Tailored draft</p>
            <button onClick={copyAll} type="button" className="inline-flex items-center gap-1.5 rounded-pill border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs font-bold text-white transition hover:bg-white/[0.12]">
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-300" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? 'Copied' : 'Copy all'}
            </button>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Professional summary</p>
            <p className="mt-2 text-sm leading-7 text-slate-100">{data.summary}</p>
          </div>

          <div className="mt-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Tailored experience bullets</p>
            <ul className="mt-3 space-y-2.5">
              {data.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3.5 text-sm leading-6 text-slate-100">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {data.keywordsToAdd.length > 0 ? (
            <div className="mt-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-300">Keywords to weave in</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {data.keywordsToAdd.map((k) => (
                  <span key={k} className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-200">{k}</span>
                ))}
              </div>
            </div>
          ) : null}

          {data.notes.length > 0 ? (
            <ul className="mt-5 space-y-2">
              {data.notes.map((n) => (
                <li key={n} className="text-xs leading-6 text-slate-400">— {n}</li>
              ))}
            </ul>
          ) : null}

          <p className="mt-6 text-xs text-slate-500">Review every line and replace any [add metric] placeholders with your real numbers before using.</p>
        </ToolCard>
      ) : null}
    </div>
  );
}
