'use client';

import { useState } from 'react';
import { ClipboardList, Copy, Check, Download, Sparkles, FileText } from 'lucide-react';
import { useAiTool } from '@/components/tools/ai/useAiTool';
import { AiGate } from '@/components/tools/ai/AiGate';
import { ToolInput, ToolTextarea, RunButton, ToolCard } from '@/components/tools/ai/fields';

interface Jd {
  title: string;
  company?: string;
  location?: string;
  employmentType?: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  niceToHaves: string[];
  skills: string[];
  whatWeOffer: string[];
}

interface RoleSpec {
  title: string;
  company?: string;
  location?: string;
  seniority?: string;
  employmentType?: string;
  skills?: string;
  notes?: string;
}

type Tone = 'professional' | 'friendly' | 'inclusive' | 'startup';
const TONES: Array<{ id: Tone; label: string }> = [
  { id: 'professional', label: 'Professional' },
  { id: 'friendly', label: 'Friendly' },
  { id: 'inclusive', label: 'Inclusive' },
  { id: 'startup', label: 'Startup' },
];

const TOOL_PATH = '/tools/ai-jd-generator';

const SAMPLE_BULK = `Senior Backend Engineer | Razorpay | Bangalore (Hybrid) | Senior
Product Designer | Zomato | Gurgaon | Mid
Data Analyst | Swiggy | Remote | Junior`;

/** Turn one JD into clean Markdown for copy / download. */
function jdToMarkdown(j: Jd): string {
  const meta = [j.company, j.location, j.employmentType].filter(Boolean).join(' · ');
  const list = (items: string[]): string => items.map((x) => `- ${x}`).join('\n');
  const parts = [
    `# ${j.title}`,
    meta ? `*${meta}*` : '',
    `\n## About the role\n${j.summary}`,
    j.responsibilities.length ? `\n## Responsibilities\n${list(j.responsibilities)}` : '',
    j.requirements.length ? `\n## Requirements\n${list(j.requirements)}` : '',
    j.niceToHaves.length ? `\n## Nice to have\n${list(j.niceToHaves)}` : '',
    j.skills.length ? `\n## Skills\n${j.skills.join(', ')}` : '',
    j.whatWeOffer.length ? `\n## What we offer\n${list(j.whatWeOffer)}` : '',
  ];
  return parts.filter(Boolean).join('\n');
}

function download(filename: string, text: string): void {
  const blob = new Blob([text], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function slug(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'job-description';
}

function CopyButton({ text }: { text: string }): JSX.Element {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        void navigator.clipboard.writeText(text);
        setDone(true);
        window.setTimeout(() => setDone(false), 1500);
      }}
      className="inline-flex items-center gap-1.5 rounded-pill border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs font-bold text-white transition hover:bg-white/[0.12]"
    >
      {done ? <Check className="h-3.5 w-3.5 text-emerald-300" /> : <Copy className="h-3.5 w-3.5" />}
      {done ? 'Copied' : 'Copy'}
    </button>
  );
}

function Section({ heading, items, tone }: { heading: string; items: string[]; tone: string }): JSX.Element | null {
  if (!items.length) return null;
  return (
    <div className="mt-5">
      <p className={`text-[11px] font-bold uppercase tracking-[0.2em] ${tone}`}>{heading}</p>
      <ul className="mt-2 space-y-1.5">
        {items.map((x) => (
          <li key={x} className="flex items-start gap-2 text-sm leading-6 text-slate-200">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-500" />
            {x}
          </li>
        ))}
      </ul>
    </div>
  );
}

function JdCard({ j }: { j: Jd }): JSX.Element {
  const meta = [j.company, j.location, j.employmentType].filter(Boolean).join(' · ');
  return (
    <ToolCard>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-xl font-bold text-white">{j.title}</h3>
          {meta ? <p className="mt-1 text-sm text-slate-400">{meta}</p> : null}
        </div>
        <div className="flex items-center gap-2">
          <CopyButton text={jdToMarkdown(j)} />
          <button
            type="button"
            onClick={() => download(`${slug(j.title)}.md`, jdToMarkdown(j))}
            className="inline-flex items-center gap-1.5 rounded-pill border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs font-bold text-white transition hover:bg-white/[0.12]"
          >
            <Download className="h-3.5 w-3.5" /> .md
          </button>
        </div>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-100">{j.summary}</p>
      <Section heading="Responsibilities" items={j.responsibilities} tone="text-cyan-300" />
      <Section heading="Requirements" items={j.requirements} tone="text-violet-300" />
      <Section heading="Nice to have" items={j.niceToHaves} tone="text-slate-400" />
      {j.skills.length ? (
        <div className="mt-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-300">Skills</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {j.skills.map((s) => (
              <span key={s} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-semibold text-slate-200">{s}</span>
            ))}
          </div>
        </div>
      ) : null}
      <Section heading="What we offer" items={j.whatWeOffer} tone="text-amber-300" />
    </ToolCard>
  );
}

export function JdGeneratorAI(): JSX.Element {
  const [mode, setMode] = useState<'single' | 'bulk'>('single');
  const [tone, setTone] = useState<Tone>('professional');

  // single
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [seniority, setSeniority] = useState('');
  const [skills, setSkills] = useState('');
  const [notes, setNotes] = useState('');

  // bulk
  const [bulk, setBulk] = useState('');

  const { run, loading, gate, data } = useAiTool<{ jds: Jd[] }>('/api/tools/jd-generator');

  const singleReady = title.trim().length > 1;
  const bulkRoles = bulk
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
    .slice(0, 8)
    .map((line): RoleSpec => {
      const [t, c, loc, sen] = line.split('|').map((p) => p.trim());
      return { title: t ?? line, company: c || undefined, location: loc || undefined, seniority: sen || undefined };
    })
    .filter((r) => r.title.length > 1);
  const bulkReady = bulkRoles.length > 0;
  const ready = mode === 'single' ? singleReady : bulkReady;

  function onSubmit(e: React.FormEvent): void {
    e.preventDefault();
    if (!ready) return;
    const roles: RoleSpec[] =
      mode === 'single'
        ? [{
            title,
            company: company.trim() || undefined,
            location: location.trim() || undefined,
            seniority: seniority.trim() || undefined,
            skills: skills.trim() || undefined,
            notes: notes.trim() || undefined,
          }]
        : bulkRoles;
    void run({ roles, tone });
  }

  return (
    <div className="space-y-6">
      <form onSubmit={onSubmit}>
        <ToolCard>
          {/* Mode toggle */}
          <div className="inline-flex rounded-pill border border-white/10 bg-white/[0.03] p-1 text-sm font-bold">
            <button type="button" onClick={() => setMode('single')} className={`inline-flex items-center gap-1.5 rounded-pill px-4 py-2 transition ${mode === 'single' ? 'bg-brand text-white' : 'text-slate-300'}`}>
              <FileText className="h-4 w-4" /> Single role
            </button>
            <button type="button" onClick={() => setMode('bulk')} className={`inline-flex items-center gap-1.5 rounded-pill px-4 py-2 transition ${mode === 'bulk' ? 'bg-brand text-white' : 'text-slate-300'}`}>
              <ClipboardList className="h-4 w-4" /> Bulk (up to 8)
            </button>
          </div>

          {mode === 'single' ? (
            <div className="mt-5 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <ToolInput label="Role title" value={title} onChange={setTitle} placeholder="e.g. Senior Backend Engineer" />
                <ToolInput label="Company (optional)" value={company} onChange={setCompany} placeholder="e.g. Razorpay" />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <ToolInput label="Location / work mode (optional)" value={location} onChange={setLocation} placeholder="e.g. Bangalore (Hybrid)" />
                <ToolInput label="Seniority (optional)" value={seniority} onChange={setSeniority} placeholder="e.g. Senior · 5–8 yrs" />
              </div>
              <ToolInput label="Key skills to emphasise (optional)" value={skills} onChange={setSkills} placeholder="e.g. Go, PostgreSQL, Kubernetes, payments" />
              <ToolTextarea label="Extra context (optional)" hint="team, product, anything specific" value={notes} onChange={setNotes} placeholder="e.g. Owns the payments reliability charter; on-call rotation; reports to the Eng Manager." rows={4} />
            </div>
          ) : (
            <div className="mt-5">
              <ToolTextarea
                label="Roles"
                hint="one per line · Title | Company | Location | Seniority"
                value={bulk}
                onChange={setBulk}
                placeholder={'Senior Backend Engineer | Razorpay | Bangalore (Hybrid) | Senior\nProduct Designer | Zomato | Gurgaon | Mid'}
                rows={8}
              />
              <div className="mt-2 flex flex-wrap items-center gap-4">
                <button type="button" onClick={() => setBulk(SAMPLE_BULK)} className="text-xs font-semibold text-cyan-300/80 transition hover:text-cyan-200">
                  Try a sample →
                </button>
                <span className="text-xs text-slate-500">{bulkRoles.length}/8 roles detected</span>
              </div>
            </div>
          )}

          {/* Tone */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">Tone</span>
            {TONES.map((t) => (
              <button key={t.id} type="button" onClick={() => setTone(t.id)} className={`rounded-pill px-3.5 py-1.5 text-xs font-semibold transition ${tone === t.id ? 'bg-brand text-white' : 'border border-white/10 bg-white/[0.05] text-slate-300 hover:bg-white/[0.1]'}`}>
                {t.label}
              </button>
            ))}
          </div>

          <div className="mt-6">
            <RunButton loading={loading} disabled={!ready}>
              <Sparkles className="h-4 w-4" />
              {mode === 'single' ? 'Generate job description' : `Generate ${bulkRoles.length || ''} job descriptions`.trim()}
            </RunButton>
          </div>
        </ToolCard>
      </form>

      {gate ? <AiGate code={gate} toolPath={TOOL_PATH} /> : null}

      {data && data.jds.length ? (
        <div className="space-y-4">
          {data.jds.length > 1 ? (
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3.5">
              <p className="text-sm font-semibold text-white">{data.jds.length} job descriptions generated</p>
              <button
                type="button"
                onClick={() => download('job-descriptions.md', data.jds.map(jdToMarkdown).join('\n\n---\n\n'))}
                className="inline-flex items-center gap-2 rounded-pill bg-gradient-to-r from-brand to-cyan-500 px-4 py-2 text-xs font-bold text-white transition hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4" /> Download all (.md)
              </button>
            </div>
          ) : null}
          {data.jds.map((j, i) => (
            <JdCard key={`${i}-${j.title}`} j={j} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
