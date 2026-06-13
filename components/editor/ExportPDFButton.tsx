'use client';

import { useState } from 'react';
import { Download, FileCheck2 } from 'lucide-react';
import { UpgradeModal } from '@/components/payments/UpgradeModal';
import { Button } from '@/components/ui/button';
import { captureClientEvent } from '@/lib/clientAnalytics';
import { useCVStore } from '@/store/cvStore';

interface ExportError {
  error?: string;
  message?: string;
}

interface ExportPDFButtonProps {
  cvId?: string;
}

export function ExportPDFButton({ cvId: providedCvId }: ExportPDFButtonProps): JSX.Element {
  const storedCvId = useCVStore((state) => state.cvId);
  const cvId = providedCvId ?? storedCvId;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [planGate, setPlanGate] = useState(false);

  async function handleExport(): Promise<void> {
    if (!cvId) {
      setError('Save the CV before exporting.');
      return;
    }

    setLoading(true);
    setError(null);
    setPlanGate(false);

    // Check plan gate before opening the print page.
    const response = await fetch('/api/export-pdf/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cvId }),
    });

    setLoading(false);

    if (!response.ok) {
      const payload = (await response.json().catch(() => ({}))) as ExportError;
      const hitPlanGate = payload.error === 'PLAN_GATE';
      setPlanGate(hitPlanGate);
      setError(
        payload.error === 'RATE_LIMITED'
          ? 'Too many exports. Try again in an hour.'
          : hitPlanGate
            ? 'You have used your 3 free PDF downloads. Upgrade to export more.'
            : payload.message ?? 'Could not export this CV right now.',
      );
      return;
    }

    captureClientEvent('pdf_exported', { cvId });
    window.open(`/print/${cvId}`, '_blank');
  }

  return (
    <div>
      <div className="mb-3 flex gap-2.5 rounded-2xl border border-amber-300/60 bg-amber-50 p-3 text-left">
        <FileCheck2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
        <div className="text-[11px] leading-5 text-amber-900">
          <p className="font-bold uppercase tracking-wide">For an ATS-readable PDF</p>
          <p className="mt-0.5">
            In the print dialog choose <strong>Destination → “Save as PDF”</strong> (not “Microsoft
            Print to PDF”), set <strong>Margins → None</strong>, and tick{' '}
            <strong>Background graphics</strong>.
          </p>
        </div>
      </div>
      <Button type="button" variant="secondary" onClick={handleExport} disabled={loading}>
        <Download className="mr-2 h-4 w-4" />
        {loading ? 'Checking...' : 'Export PDF'}
      </Button>
      {error ? <p className="mt-2 text-xs font-semibold text-amber-200">{error}</p> : null}
      {planGate ? (
        <div className="mt-3">
          <UpgradeModal
            triggerLabel="Upgrade now"
            triggerClassName="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-950 transition hover:bg-cyan-50"
          />
        </div>
      ) : null}
    </div>
  );
}
