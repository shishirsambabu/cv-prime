'use client';

import { useState } from 'react';
import { MessagesSquare } from 'lucide-react';
import { useAiTool } from '@/components/tools/ai/useAiTool';
import { AiGate } from '@/components/tools/ai/AiGate';
import { ToolTextarea, ToolInput, RunButton, ToolCard } from '@/components/tools/ai/fields';

interface QResult {
  questions: Array<{ question: string; category: string; tip: string }>;
}

const TOOL_PATH = '/tools/ai-interview-questions';

export function InterviewQuestionsAI(): JSX.Element {
  const [role, setRole] = useState('');
  const [jd, setJd] = useState('');
  const [resume, setResume] = useState('');
  const { run, loading, gate, data } = useAiTool<QResult>('/api/tools/interview-questions');

  const ready = role.trim().length > 1 || jd.trim().length > 30;

  function onSubmit(e: React.FormEvent): void {
    e.preventDefault();
    if (!ready) return;
    void run({
      role: role.trim() || undefined,
      jobDescription: jd.trim() || undefined,
      resumeText: resume.trim() || undefined,
    });
  }

  return (
    <div className="space-y-6">
      <form onSubmit={onSubmit}>
        <ToolCard>
          <ToolInput label="Role" value={role} onChange={setRole} placeholder="e.g. Backend Engineer (or paste a JD below)" />
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <ToolTextarea label="Job description (optional)" value={jd} onChange={setJd} placeholder="Paste the JD for sharper questions…" rows={9} />
            <ToolTextarea label="Your resume (optional)" value={resume} onChange={setResume} placeholder="Paste your resume to target your experience + gaps…" rows={9} />
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <RunButton loading={loading} disabled={!ready}>
              <MessagesSquare className="h-4 w-4" />
              Generate questions
            </RunButton>
            {!ready ? <span className="text-xs text-slate-400">Add a role or a job description.</span> : null}
          </div>
        </ToolCard>
      </form>

      {gate ? <AiGate code={gate} toolPath={TOOL_PATH} /> : null}

      {data ? (
        <div className="space-y-3">
          {data.questions.map((q, i) => (
            <ToolCard key={`${i}-${q.question}`}>
              <div className="flex items-start justify-between gap-4">
                <p className="font-display text-base font-bold text-white">{q.question}</p>
                <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-0.5 text-[11px] font-bold text-cyan-200">{q.category}</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-300">{q.tip}</p>
            </ToolCard>
          ))}
        </div>
      ) : null}
    </div>
  );
}
