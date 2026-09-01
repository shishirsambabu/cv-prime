'use client';

import { useState } from 'react';
import { Download, FileCheck2 } from 'lucide-react';
import { UpgradeModal } from '@/components/payments/UpgradeModal';
import { Button } from '@/components/ui/button';
import { captureClientEvent } from '@/lib/clientAnalytics';
import { saveCv } from '@/lib/saveCv';
import { useCVStore } from '@/store/cvStore';
import type { TemplateId } from '@/types/cv.types';

interface ExportError {
  error?: string;
  message?: string;
}

interface ExportCheckResponse extends ExportError {
  token?: string;
}

interface ExportPDFButtonProps {
  cvId?: string;
  templateId?: TemplateId;
  disabled?: boolean;
}

export function ExportPDFButton({
  cvId: providedCvId,
  templateId: providedTemplateId,
  disabled = false,
}: ExportPDFButtonProps): JSX.Element {
  const storedCvId = useCVStore((state) => state.cvId);
  const storedData = useCVStore((state) => state.data);
  const storedTemplateId = useCVStore((state) => state.templateId);
  const isDirty = useCVStore((state) => state.isDirty);
  const markSaved = useCVStore((state) => state.markSaved);
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
    const printWindow = window.open('', '_blank');

    try {
      const shouldSaveGeneratedTemplate = providedCvId !== undefined && providedTemplateId !== undefined;
      const shouldSaveEditorChanges = providedCvId === undefined && isDirty;

      if (shouldSaveGeneratedTemplate || shouldSaveEditorChanges) {
        // Routed through saveCv() so this can never race the editor's own
        // autosave: both queue onto the same per-CV FIFO, so an in-flight
        // autosave can't land after this one and overwrite it (or vice versa).
        const saveResponse = await saveCv(
          cvId,
          shouldSaveGeneratedTemplate
            ? { templateId: providedTemplateId }
            : { data: storedData, templateId: storedTemplateId },
        );

        if (!saveResponse.ok) {
          printWindow?.close();
          setLoading(false);
          setError('Could not save your selected template. Please try again.');
          return;
        }

        if (shouldSaveEditorChanges) {
          markSaved({ data: storedData, templateId: storedTemplateId });
        }
      }

      // Check plan gate before loading the authenticated print page.
      const response = await fetch('/api/export-pdf/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cvId }),
      });

      setLoading(false);

      if (!response.ok) {
        printWindow?.close();
        const payload = (await response.json().catch(() => ({}))) as ExportError;
        const hitPlanGate = payload.error === 'PLAN_GATE';
        setPlanGate(hitPlanGate);
        setError(
          payload.error === 'RATE_LIMITED'
            ? 'Too many exports. Try again in an hour.'
            : payload.error === 'Unauthorized'
              ? 'Your session expired. Sign in again, then retry the export.'
              : payload.error === 'NOT_FOUND'
                ? 'This CV could not be found. Open it from your dashboard and try again.'
                : hitPlanGate
                  ? 'You have used your 3 free PDF downloads. Upgrade to export more.'
                  : payload.message ?? 'Could not export this CV right now.',
        );
        return;
      }

      const payload = (await response.json().catch(() => ({}))) as ExportCheckResponse;
      if (!payload.token) {
        printWindow?.close();
        setError('Could not prepare this PDF export right now.');
        return;
      }

      const printUrl = `/print/${cvId}?token=${encodeURIComponent(payload.token)}`;
      captureClientEvent('pdf_exported', { cvId });

      if (printWindow) {
        printWindow.location.href = printUrl;
      } else {
        window.location.assign(printUrl);
      }
    } catch {
      printWindow?.close();
      setLoading(false);
      setError('Could not reach the PDF service. Check your connection and try again.');
    }
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
      <Button type="button" variant="secondary" onClick={handleExport} disabled={loading || disabled}>
        <Download className="mr-2 h-4 w-4" />
        {loading ? 'Checking...' : 'Export PDF'}
      </Button>
      {error ? <p className="mt-2 text-xs font-semibold text-rose-700">{error}</p> : null}
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
