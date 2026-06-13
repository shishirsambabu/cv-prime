'use client';

import { useEffect } from 'react';

export function PrintTrigger(): JSX.Element {
  useEffect(() => {
    let cancelled = false;

    async function triggerPrint(): Promise<void> {
      // Wait for the next/font webfonts to finish loading so text is measured
      // and laid out correctly before the print snapshot is taken.
      try {
        if (document.fonts?.ready) {
          await document.fonts.ready;
        }
      } catch {
        /* ignore — fall through to the timed fallback */
      }

      if (cancelled) return;
      // A short settle delay lets the final layout paint before printing.
      window.setTimeout(() => {
        if (!cancelled) window.print();
      }, 400);
    }

    void triggerPrint();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      className="no-print"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 10000,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 14,
        padding: '12px 18px',
        background: '#0f172a',
        color: 'white',
        font: '500 13px/1.4 system-ui, sans-serif',
        textAlign: 'center',
      }}
    >
      <span>
        In the print dialog, set <strong>Destination → “Save as PDF”</strong> (not “Microsoft
        Print to PDF”), <strong>Margins → None</strong>, and tick{' '}
        <strong>Background graphics</strong> for a crisp, ATS-readable file.
      </span>
      <button
        type="button"
        onClick={() => window.print()}
        style={{
          flexShrink: 0,
          borderRadius: 9999,
          background: '#22d3ee',
          color: '#0f172a',
          border: 'none',
          padding: '8px 18px',
          font: '700 13px system-ui, sans-serif',
          cursor: 'pointer',
        }}
      >
        Open print dialog
      </button>
    </div>
  );
}
