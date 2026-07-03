'use client';

import { Loader2 } from 'lucide-react';
import type { ReactNode } from 'react';

export function ToolTextarea({
  label,
  value,
  onChange,
  placeholder,
  rows = 8,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
  hint?: string;
}): JSX.Element {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-white">{label}</span>
      {hint ? <span className="ml-2 text-xs font-medium text-slate-400">{hint}</span> : null}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="mt-2 w-full resize-y rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-7 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:bg-white/[0.06]"
      />
    </label>
  );
}

export function ToolInput({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}): JSX.Element {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-white">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:bg-white/[0.06]"
      />
    </label>
  );
}

export function RunButton({
  loading,
  children,
  disabled,
}: {
  loading: boolean;
  children: ReactNode;
  disabled?: boolean;
}): JSX.Element {
  return (
    <button
      type="submit"
      disabled={loading || disabled}
      className="inline-flex h-12 items-center justify-center gap-2 rounded-pill bg-gradient-to-r from-brand to-cyan-500 px-7 text-sm font-bold text-white shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" /> Working…
        </>
      ) : (
        children
      )}
    </button>
  );
}

export function ToolCard({ children }: { children: ReactNode }): JSX.Element {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md sm:p-8">{children}</div>
  );
}
