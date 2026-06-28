'use client';

import { useState } from 'react';
import { Mail, Copy, Check } from 'lucide-react';
import { useAiTool } from '@/components/tools/ai/useAiTool';
import { AiGate } from '@/components/tools/ai/AiGate';
import { ToolTextarea, ToolInput, RunButton, ToolCard } from '@/components/tools/ai/fields';

interface OutreachResult {
  subject: string;
  email: string;
}

type Kind = 'cold' | 'followup' | 'thankyou';
const TOOL_PATH = '/tools/ai-outreach-email';
const KINDS: Array<{ id: Kind; label: string }> = [
  { id: 'cold', label: 'Cold outreach' },
  { id: 'followup', label: 'Follow-up' },
  { id: 'thankyou', label: 'Post-interview thank-you' },
];

export function OutreachEmailAI(): JSX.Element {
  const [kind, setKind] = useState<Kind>('cold');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [recipient, setRecipient] = useState('');
  const [context, setContext] = useState('');
  const [copied, setCopied] = useState(false);
  const { run, loading, gate, data } = useAiTool<OutreachResult>('/api/tools/outreach');
  const tooShort = context.trim().length < 10;

  function onSubmit(e: React.FormEvent): void {
    e.preventDefault();
    if (tooShort) return;
    void run({ kind, role: role.trim() || undefined, company: company.trim() || undefined, recipient: recipient.trim() || undefined, context });
  }

  return (
    <div className="space-y-6">
      <form onSubmit={onSubmit}>
        <ToolCard>
          <div className="flex flex-wrap gap-2">
            {KINDS.map((k) => (
              <button key={k.id} type="button" onClick={() => setKind(k.id)} className={`rounded-pill px-4 py-2 text-xs font-semibold transition ${kind === k.id ? 'bg-brand text-white' : 'border border-white/10 bg-white/[0.05] text-slate-300 hover:bg-white/[0.1]'}`}>
                {k.label}
              </button>
            ))}
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            <ToolInput label="Role (optional)" value={role} onChange={setRole} placeholder="e.g. Data Analyst" />
            <ToolInput label="Company (optional)" value={company} onChange={setCompany} placeholder="e.g. Swiggy" />
            <ToolInput label="Recipient (optional)" value={recipient} onChange={setRecipient} placeholder="e.g. Priya, recruiter" />
          </div>
          <div className="mt-5">
            <ToolTextarea label="Context" hint="a few lines about you / the situation" value={context} onChange={setContext} placeholder="e.g. 4 yrs in analytics, applied last week, no response; or: just interviewed for the SDE role with Anil…" rows={6} />
          </div>
          <div className="mt-5">
            <RunButton loading={loading} disabled={tooShort}>
              <Mail className="h-4 w-4" />
              Write my email
            </RunButton>
          </div>
        </ToolCard>
      </form>

      {gate ? <AiGate code={gate} toolPath={TOOL_PATH} /> : null}

      {data ? (
        <ToolCard>
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-cyan-300">Subject</p>
            <button type="button" onClick={() => { void navigator.clipboard.writeText(`Subject: ${data.subject}\n\n${data.email}`); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }} className="inline-flex items-center gap-1.5 rounded-pill border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs font-bold text-white transition hover:bg-white/[0.12]">
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-300" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? 'Copied' : 'Copy all'}
            </button>
          </div>
          <p className="mt-1.5 text-sm font-semibold text-white">{data.subject}</p>
          <p className="mt-4 whitespace-pre-wrap text-sm leading-7 text-slate-100">{data.email}</p>
        </ToolCard>
      ) : null}
    </div>
  );
}
