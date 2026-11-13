'use client';

import { useEffect, useRef, useState } from 'react';
import { useCVStore } from '@/store/cvStore';
import { saveCv } from '@/lib/saveCv';

const IDLE_SAVE_MS = 30_000;
// Every `data` change (i.e. every keystroke) used to restart the 30s idle
// timer from scratch, so a user typing continuously without a 30s pause
// never triggered an autosave at all — closing the tab right after
// finishing an edit lost the work. This caps how long edits can stay
// unsaved even under continuous typing.
const MAX_UNSAVED_MS = 30_000;
// A failed save (rate limit, 5xx, network drop) used to leave the edit
// dirty but schedule nothing: the next attempt only happened if the user
// typed again. Someone who finished editing right as a save failed sat on
// "Unsaved changes" indefinitely with nothing ever retrying. Failed saves
// now retry on their own with capped exponential backoff.
const RETRY_BASE_MS = 5_000;
const RETRY_MAX_MS = 60_000;

function isRetryableStatus(status: number): boolean {
  return status === 408 || status === 429 || status >= 500;
}

interface AutoSaveState {
  /**
   * True once an autosave attempt comes back 401. The session cookie has
   * expired or been invalidated mid-edit; every retry after this will keep
   * failing the same way until the user re-authenticates, so the caller
   * should tell them why their edits are not being saved instead of the
   * generic "Unsaved changes" badge sitting there silently forever.
   */
  sessionExpired: boolean;
  /**
   * True once an autosave comes back 404: the CV was deleted (typically from
   * the dashboard in another tab) while it was still open here. No retry can
   * succeed, so the caller should say so rather than leave "Unsaved changes"
   * up with no explanation.
   */
  cvMissing: boolean;
}

export function useAutoSave(): AutoSaveState {
  const cvId = useCVStore((state) => state.cvId);
  const data = useCVStore((state) => state.data);
  const templateId = useCVStore((state) => state.templateId);
  const isDirty = useCVStore((state) => state.isDirty);
  const markSaved = useCVStore((state) => state.markSaved);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dirtySinceRef = useRef<number | null>(null);
  const [sessionExpired, setSessionExpired] = useState(false);
  const [missingCvId, setMissingCvId] = useState<string | null>(null);
  const [retryNonce, setRetryNonce] = useState(0);
  const retryTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const failuresRef = useRef(0);

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

    function scheduleRetry(): void {
      failuresRef.current += 1;
      const backoff = Math.min(RETRY_MAX_MS, RETRY_BASE_MS * 2 ** (failuresRef.current - 1));
      if (retryTimerRef.current) {
        clearTimeout(retryTimerRef.current);
      }
      retryTimerRef.current = setTimeout(() => {
        retryTimerRef.current = null;
        // Make the re-run of this effect save immediately instead of
        // waiting out another full idle window.
        dirtySinceRef.current = Date.now() - MAX_UNSAVED_MS;
        setRetryNonce((n) => n + 1);
      }, backoff);
    }

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
          failuresRef.current = 0;
          setSessionExpired(false);
          markSaved({ data, templateId });
        } else if (isRetryableStatus(response.status)) {
          scheduleRetry();
        } else if (response.status === 401) {
          // The session cookie expired or was revoked mid-edit. Every retry
          // from here fails the same way until the user signs in again, and
          // before this the badge just kept reading "Unsaved changes" with
          // no indication why — indistinguishable from an ordinary pending
          // save. `isDirty` is deliberately left untouched so nothing here
          // claims the edits are safe, and the caller can now tell the user
          // what is actually happening.
          setSessionExpired(true);
        } else if (response.status === 404) {
          setMissingCvId(cvId);
        }
      } catch {
        // Network failure (offline, DNS, etc): saveCv's fetch rejects instead
        // of resolving with a non-ok response. Leave isDirty untouched so the
        // next store change (or the max-wait ceiling) retries the save,
        // instead of crashing as an unhandled promise rejection.
        scheduleRetry();
      }
    }, delay);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [cvId, data, isDirty, markSaved, templateId, retryNonce]);

  useEffect(
    () => () => {
      if (retryTimerRef.current) {
        clearTimeout(retryTimerRef.current);
      }
    },
    []
  );

  // Leaving the editor inside the app (browser Back, a router.push from the
  // cover letter or key prompts) unmounts this hook. The cleanup above then
  // cancels the pending idle timer, and before this effect existed nothing
  // ever sent the edit: anything typed in the last 30s was dropped without a
  // word, and reopening the CV re-hydrated the store over it. beforeunload
  // does not fire for in-app navigation, and is unreliable on phones even for
  // real page exits, so the same flush also runs when the tab is hidden.
  useEffect(() => {
    function flush(): void {
      const state = useCVStore.getState();
      if (!state.isDirty || !state.cvId) {
        return;
      }
      const snapshot = { data: state.data, templateId: state.templateId };
      saveCv(state.cvId, snapshot, { keepalive: true })
        .then((response) => {
          if (response.ok) {
            useCVStore.getState().markSaved(snapshot);
          }
        })
        .catch(() => {
          // Still dirty; the next mount (or the retry timer, if the editor is
          // still open) picks it up.
        });
    }

    function handleVisibilityChange(): void {
      if (document.visibilityState === 'hidden') {
        flush();
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', flush);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', flush);
      flush();
    };
  }, []);

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

  // Keyed by id so the flag cannot leak onto a different CV opened later in
  // the same session.
  return { sessionExpired, cvMissing: missingCvId !== null && missingCvId === cvId };
}
