'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

const WIDGETS = [
  {
    key: 'ats-keyword-matcher',
    label: 'ATS Keyword Matcher',
    title: 'Free ATS Keyword Matcher by CV Prime',
    toolPath: '/tools/ats-keyword-matcher',
    linkText: 'ATS Keyword Matcher',
    height: 760,
  },
  {
    key: 'resume-strength-analyzer',
    label: 'Resume Strength Analyzer',
    title: 'Free Resume Strength Analyzer by CV Prime',
    toolPath: '/tools/resume-strength-analyzer',
    linkText: 'Resume Strength Analyzer',
    height: 820,
  },
] as const;

function buildCode(w: (typeof WIDGETS)[number]): string {
  return `<iframe src="https://cv-prime.in/embed/${w.key}" width="100%" height="${w.height}" style="border:0;border-radius:16px;max-width:760px" title="${w.title}" loading="lazy"></iframe>
<p style="font:14px/1.5 system-ui,sans-serif;margin-top:8px">Free <a href="https://cv-prime.in${w.toolPath}" target="_blank" rel="noopener">${w.linkText}</a> by <a href="https://cv-prime.in" target="_blank" rel="noopener">CV Prime</a></p>`;
}

export function EmbedCodeBox(): JSX.Element {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const widget = WIDGETS[active] ?? WIDGETS[0];
  const code = buildCode(widget);

  async function copy(): Promise<void> {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-wrap gap-2">
        {WIDGETS.map((w, i) => (
          <button
            key={w.key}
            type="button"
            onClick={() => { setActive(i); setCopied(false); }}
            className={`rounded-full px-4 py-2 text-sm font-bold transition ${i === active ? 'bg-brand text-brand-foreground' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            {w.label}
          </button>
        ))}
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold text-slate-800">Copy this embed code</p>
          <button
            type="button"
            onClick={copy}
            className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-1.5 text-xs font-bold text-brand-foreground transition hover:bg-brand-strong"
          >
            {copied ? <><Check className="h-3.5 w-3.5" /> Copied</> : <><Copy className="h-3.5 w-3.5" /> Copy code</>}
          </button>
        </div>
        <pre className="mt-2 overflow-x-auto rounded-xl border border-slate-200 bg-slate-950 p-4 text-xs leading-5 text-slate-100">
          <code>{code}</code>
        </pre>
        <p className="mt-2 text-xs text-slate-500">
          Paste it into any website, blog, or Notion/Webflow/WordPress embed block. The attribution link is required and helps your readers find the full tool.
        </p>
      </div>

      <div className="mt-7">
        <p className="text-sm font-bold text-slate-800">Live preview</p>
        <div className="mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <iframe
            key={widget.key}
            src={`/embed/${widget.key}`}
            title={widget.title}
            loading="lazy"
            className="h-[520px] w-full"
          />
        </div>
      </div>
    </div>
  );
}
