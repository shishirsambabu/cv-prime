'use client';

import { useRef, useState } from 'react';
import type { DragEvent } from 'react';
import { Upload, Loader2, FileText, Wand2, X, CheckCircle2 } from 'lucide-react';

/**
 * Resume input that upgrades the plain textarea: drag-and-drop or click to
 * upload a PDF / DOCX / TXT (parsed server-side via /api/tools/parse-resume),
 * a one-click "Try a sample" prefill, and the same paste-the-text fallback.
 * Drop-in replacement for <ToolTextarea> on the resume-based AI tools.
 */
export function ResumeField({
  label = 'Your resume',
  value,
  onChange,
  placeholder = 'Paste your full resume text here — or drop a PDF/DOCX above.',
  rows = 12,
  hint,
  sample,
}: {
  label?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
  hint?: string;
  sample?: string;
}): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  async function handleFile(file: File): Promise<void> {
    setErr(null);
    setFileName(null);
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append('file', file);
      const res = await fetch('/api/tools/parse-resume', { method: 'POST', body: fd });
      if (res.status === 401) {
        setErr('Sign in to read files automatically — or paste the text below for now.');
        return;
      }
      const payload = (await res.json().catch(() => ({}))) as { text?: string; message?: string };
      if (!res.ok || !payload.text) {
        setErr(payload.message ?? 'Could not read that file. Try a PDF/DOCX, or paste the text.');
        return;
      }
      onChange(payload.text);
      setFileName(file.name);
    } catch {
      setErr('Upload failed. Paste your resume text instead.');
    } finally {
      setUploading(false);
    }
  }

  function onDrop(e: DragEvent<HTMLDivElement>): void {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) void handleFile(file);
  }

  return (
    <div className="block">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-sm font-semibold text-white">
          {label}
          {hint ? <span className="ml-2 text-xs font-medium text-slate-400">{hint}</span> : null}
        </span>
        {sample ? (
          <button
            type="button"
            onClick={() => {
              onChange(sample);
              setErr(null);
              setFileName(null);
            }}
            className="inline-flex items-center gap-1.5 rounded-pill border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-semibold text-cyan-200 transition hover:bg-white/[0.1]"
          >
            <Wand2 className="h-3.5 w-3.5" />
            Try a sample
          </button>
        ) : null}
      </div>

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={onDrop}
        onClick={() => inputRef.current?.click()}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            inputRef.current?.click();
          }
        }}
        className={`mt-2 flex cursor-pointer items-center justify-center gap-2.5 rounded-2xl border border-dashed px-4 py-3 text-center text-xs font-medium transition ${
          dragOver
            ? 'border-cyan-300/60 bg-cyan-500/[0.08] text-cyan-100'
            : 'border-white/15 bg-white/[0.02] text-slate-400 hover:border-cyan-300/40 hover:text-slate-200'
        }`}
      >
        {uploading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin text-cyan-300" /> Reading your file…
          </>
        ) : fileName ? (
          <>
            <CheckCircle2 className="h-4 w-4 text-emerald-300" /> Loaded{' '}
            <span className="font-semibold text-slate-200">{fileName}</span> — edit below if needed
          </>
        ) : (
          <>
            <Upload className="h-4 w-4" /> Drop a PDF, DOCX or TXT here, or{' '}
            <span className="font-semibold text-cyan-200">browse</span>
          </>
        )}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept=".pdf,.doc,.docx,.txt,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) void handleFile(file);
          e.target.value = '';
        }}
      />

      {err ? (
        <p className="mt-2 flex items-start gap-1.5 text-xs text-amber-300">
          <X className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          {err}
        </p>
      ) : null}

      <div className="relative mt-2">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={rows}
          className="w-full resize-y rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-7 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:bg-white/[0.06]"
        />
        {value ? (
          <div className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-black/30 px-2 py-0.5 text-[10px] font-medium text-slate-400">
            <FileText className="h-3 w-3" /> {value.trim().split(/\s+/).filter(Boolean).length} words
          </div>
        ) : null}
      </div>
    </div>
  );
}
