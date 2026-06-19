'use client';

import { useEffect, useRef } from 'react';
import { useCVStore } from '@/store/cvStore';

export function useAutoSave(): void {
  const cvId = useCVStore((state) => state.cvId);
  const data = useCVStore((state) => state.data);
  const templateId = useCVStore((state) => state.templateId);
  const isDirty = useCVStore((state) => state.isDirty);
  const markSaved = useCVStore((state) => state.markSaved);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!isDirty || !cvId) {
      return;
    }

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(async () => {
      const response = await fetch(`/api/cvs/${cvId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data, templateId }),
      });

      if (response.ok) {
        markSaved();
      }
    }, 30_000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [cvId, data, isDirty, markSaved, templateId]);
}
