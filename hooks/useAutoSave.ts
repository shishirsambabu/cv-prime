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
      // Reset the ceiling window as soon as a save is actually attempted,
      // not only once one resolves matching the exact data it was sent
      // with. Under continuous typing, a save dispatched here is virtually
      // guaranteed to see newer data land in the store before it resolves,
      // so gating the reset on an exact match left `dirtySinceRef` pinned in
      // the past forever: `elapsedSinceDirty` stayed >= MAX_UNSAVED_MS, delay
      // recomputed to 0 on every subsequent keystroke, and each one fired an
      // immediate PATCH — several requests per second, blowing through the
      // /api/cvs/[cvId] rate limit within seconds and then silently losing
      // edits (this only acts `if (response.ok)`, with no retry or
      // user-visible failure state). Resetting here instead throttles
      // ceiling-triggered saves to at most once per MAX_UNSAVED_MS even
      // under nonstop typing, matching the idle-pause cadence.
      dirtySinceRef.current = Date.now();

      // Routed through saveCv() so this can never race an export-triggered
      // save (or another autosave still in flight from continuous typing
      // past MAX_UNSAVED_MS): requests to the same CV are queued and always
      // resolve in the order they were sent, so a slower older save can
      // never land after and overwrite a newer one.
      try {
        const response = await saveCv(cvId, { data, templateId });

        if (response.ok) {
          markSaved({ data, templateId });
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
