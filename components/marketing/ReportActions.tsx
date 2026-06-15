'use client';

import { Download, Share2 } from 'lucide-react';

export function ReportActions({ reportUrl }: { reportUrl: string }) {
  return (
    <div className="mt-8 flex flex-wrap gap-3 print:hidden">
      <button
        onClick={() => window.print()}
        className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground hover:bg-brand-strong transition"
      >
        <Download className="h-4 w-4" />
        Download PDF
      </button>
      <button
        onClick={() => navigator.clipboard?.writeText(reportUrl)}
        className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-800 px-6 py-3 text-sm font-medium text-slate-200 hover:bg-slate-700 transition"
      >
        <Share2 className="h-4 w-4" />
        Copy link
      </button>
    </div>
  );
}
