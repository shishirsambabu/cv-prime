'use client';

import { useEffect } from 'react';

export function PrintTrigger(): null {
  useEffect(() => {
    // Small delay so fonts/styles finish painting before the print dialog opens.
    const t = setTimeout(() => window.print(), 800);
    return () => clearTimeout(t);
  }, []);

  return null;
}
