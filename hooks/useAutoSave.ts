'use client';

import { useEffect, useRef } from 'react';
import { useCVStore } from '@/store/cvStore';
import { saveCv } from '@/lib/saveCv';

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
      // Routed through saveCv() so this can never race an export-triggered
      // save (or another autosave still in flight from continuous typing
      // past MAX_UNSAVED_MS): requests to the same CV are queued and always
      // resolve in the order they were sent, so a slower older save can
      // never land after and overwrite a newer one.
      try {
        const response = await saveCv(cvId, { data, templateId });

        if (response.ok) {
          markSaved({ data, templateId });
          // Only stop the "how long has this been dirty" clock if this save
          // actually captured what's currently in the store. If the user typed
          // more while the request was in flight, the store is still dirty
          // with newer content and the clock must keep running so that edit
          // stays bounded by MAX_UNSAVED_MS too.
          const current = useCVStore.getState();
          if (current.data === data && current.templateId === templateId) {
            dirtySinceRef.current = null;
          }
        }
      } catch {
        // Network failure (offline, DNS, etc): saveCv's fetch rejects instead
        // of resolving with a non-ok response. Leave isDirty untouched so the
        // next store change (or the max-wait ceiling) retries the save,
        // instead of crashing as an unhandled promise rejection.
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
