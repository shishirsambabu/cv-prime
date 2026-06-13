'use client';

import { useEffect } from 'react';

export function PrintTrigger(): null {
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
      }, 300);
    }

    void triggerPrint();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
