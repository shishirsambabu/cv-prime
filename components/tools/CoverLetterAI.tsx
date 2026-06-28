'use client';

import { useState } from 'react';
import { Sparkles, Copy, Check } from 'lucide-react';
import { useAiTool } from '@/components/tools/ai/useAiTool';
import { AiGate } from '@/components/tools/ai/AiGate';
import { ToolTextarea, ToolInput, RunButton, ToolCard } from '@/components/tools/ai/fields';

interface CoverLetterResult {
  coverLetter: string;
}

type Tone = 'professional' | 'friendly' | 'executive';
const TOOL_PATH = '/tools/ai-cover-letter';
const TONES: Array<{ id: Tone; label: string }> = [
  { id: 'professional', label: 'Professional' },
  { id: 'friendly', label: 'Friendly' },
  { id: 'executive', label: 'Executive' },
];

export function CoverLetterAI(): JSX.Element {
  const [resume, setResume] = useState('');
  const [jd, setJd] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [tone, setTone] = useState<Tone>('professional');
  const [copied, setCopied] = useState(false);
  const { run, loading, gate, data } = useAiTool<CoverLetterResult>('/api/tools/cover-letter');

  const tooShort = resume.trim().length < 50 || jd.trim().length < 50;

  function onSubmit(e: React.FormEvent): void {
    e.preventDefault();
    if (tooShort) return;
    void run({ resumeText: resume, jobDescription: jd, company: company.trim() || undefined, role: role.trim() || undefined, tone });
  }

  return (
    <div className="space-y-6">
      <form onSubmit={onSubmit}>
        <ToolCard>
          <div className="grid gap-5 md:grid-cols-2">
            <ToolInput label="Company (optional)" value={company} onChange={setCompany} placeholder="e.g. Razorpay" />
            <ToolInput label="Role (optional)" value={role} onChange={setRole} placeholder="e.g. Backend Engineer" />
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <ToolTextarea label="Your resume" value={resume} onChange={setResume} placeholder="Paste your full resume text here…" rows={11} />
            <ToolTextarea label="Job description" value={jd} onChange={setJd} placeholder="Paste the job description…" rows={11} />
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              {TONES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTone(t.id)}
                  className={`rounded-pill px-4 py-2 text-xs font-semibold transition ${tone === t.id ? 'bg-brand text-white' : 'border border-white/10 bg-white/[0.05] text-slate-300 hover:bg-white/[0.1]'}`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <RunButton loading={loading} disabled={tooShort}>
              <Sparkles className="h-4 w-4" />
              Write my cover letter
            </RunButton>
          </div>
        </ToolCard>
      </form>

      {gate ? <AiGate code={gate} toolPath={TOOL_PATH} /> : null}

      {data ? (
        <ToolCard>
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-cyan-300">Your cover letter</p>
            <button
              type="button"
              onClick={() => {
                void navigator.clipboard.writeText(data.coverLetter);
                setCopied(true);
                window.setTimeout(() => setCopied(false), 1800);
              }}
              className="inline-flex items-center gap-1.5 rounded-pill border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs font-bold text-white transition hover:bg-white/[0.12]"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-300" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
          <p className="mt-4 whitespace-pre-wrap text-sm leading-7 text-slate-100">{data.coverLetter}</p>
        </ToolCard>
      ) : null}
    </div>
  );
}
