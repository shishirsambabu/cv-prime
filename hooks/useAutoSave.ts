'use client';

import { useEffect, useRef } from 'react';
import { useCVStore } from '@/store/cvStore';

const IDLE_SAVE_MS = 30_000;
// Every `data` change (i.e. every keystroke) used to restart the 30s idle
// timer from scratch, so a user typing continuously without a 30s pause
// never triggered an autosave at all — closing the tab right after
// finishing an edit lost the work. This caps how long edits can stay
// unsaved even under continuous typing.
const MAX_UNSAVED_MS = 30_000;

export function useAutoSave(): void {
  const cvId = useCVStore((state) => state.cvId);
  const data = useCVStore((state) => state.data);
  const templateId = useCVStore((state) => state.templateId);
  const isDirty = useCVStore((state) => state.isDirty);
  const markSaved = useCVStore((state) => state.markSaved);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dirtySinceRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isDirty || !cvId) {
      dirtySinceRef.current = null;
      return;
    }

    if (dirtySinceRef.current === null) {
      dirtySinceRef.current = Date.now();
    }

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    const elapsedSinceDirty = Date.now() - dirtySinceRef.current;
    const delay = Math.max(0, Math.min(IDLE_SAVE_MS, MAX_UNSAVED_MS - elapsedSinceDirty));

    timerRef.current = setTimeout(async () => {
      const response = await fetch(`/api/cvs/${cvId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data, templateId }),
      });

      if (response.ok) {
        dirtySinceRef.current = null;
        markSaved();
      }
    }, delay);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [cvId, data, isDirty, markSaved, templateId]);

  useEffect(() => {
    function handleBeforeUnload(event: BeforeUnloadEvent) {
      if (!isDirty) {
        return;
      }
      event.preventDefault();
      event.returnValue = '';
    }

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isDirty]);
}
