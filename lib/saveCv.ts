import type { CVData, TemplateId } from '@/types/cv.types';

interface SaveCvPayload {
  data?: CVData;
  templateId?: TemplateId;
}

// Per-CV FIFO queues. Autosave and export-triggered saves both PATCH the same
// endpoint; without serialization two overlapping requests can resolve out of
// order and let an older, staler save clobber a newer one. Queuing every
// write for a given CV guarantees they land in the order they were sent.
const queues = new Map<string, Promise<unknown>>();

// Bounds how long a single save can block the rest of its CV's queue. Without
// this, a request that never settles (a stalled connection, a hung
// serverless cold start) would wedge every later save to the same CV for the
// rest of the session, since each new save only runs after the previous one
// resolves or rejects.
const SAVE_TIMEOUT_MS = 20_000;

// CVs this tab has written to since the page loaded. The editor uses it to
// tell when the server-rendered CV it was handed may predate this tab's own
// saves (see CVEditor's hydrate effect).
const writtenThisSession = new Set<string>();

export function hasSavedThisSession(cvId: string): boolean {
  return writtenThisSession.has(cvId);
}

// The version (lib/cvVersion.ts) of the stored row each CV's editor copy is
// based on: set when the editor loads the CV, advanced by every save that
// succeeds. Sent as `baseVersion` so the server can refuse a save from a copy
// that predates another tab's or device's edits (409 CONFLICT) instead of
// silently overwriting them. Read when the request is actually sent, not when
// it is queued, so a save queued behind another uses that save's result.
const knownVersions = new Map<string, string>();

export function setKnownVersion(cvId: string, version: string | null | undefined): void {
  if (version) {
    knownVersions.set(cvId, version);
  } else {
    knownVersions.delete(cvId);
  }
}

export function getKnownVersion(cvId: string): string | undefined {
  return knownVersions.get(cvId);
}

/** Resolves once every save queued so far for this CV has settled. */
export function whenSavesSettle(cvId: string): Promise<void> {
  return (queues.get(cvId) ?? Promise.resolve()).then(() => undefined);
}

// Browsers cap the combined body size of in-flight keepalive requests at 64KiB
// and reject anything over it outright, so keepalive is only requested for
// bodies comfortably under that.
const KEEPALIVE_MAX_BYTES = 60_000;

interface SaveCvOptions {
  /**
   * Ask the browser to finish the request even if the page is being torn
   * down. Used for the save fired as the editor unmounts or the tab is hidden.
   */
  keepalive?: boolean;
  /**
   * Save even if the stored CV changed since this copy was loaded. Only for
   * an explicit "keep my version" after the user has been told about the
   * conflict.
   */
  force?: boolean;
}

export function saveCv(
  cvId: string,
  payload: SaveCvPayload,
  options: SaveCvOptions = {}
): Promise<Response> {
  const previous = queues.get(cvId) ?? Promise.resolve();
  writtenThisSession.add(cvId);
  const writesContent = payload.data !== undefined || payload.templateId !== undefined;

  const run = previous.then(async () => {
    const baseVersion = writesContent && !options.force ? knownVersions.get(cvId) : undefined;
    const body = JSON.stringify(baseVersion ? { ...payload, baseVersion } : payload);
    const keepalive = options.keepalive === true && body.length * 3 <= KEEPALIVE_MAX_BYTES;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), SAVE_TIMEOUT_MS);

    const response = await fetch(`/api/cvs/${cvId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body,
      signal: controller.signal,
      ...(keepalive ? { keepalive: true } : {}),
    }).finally(() => clearTimeout(timeout));

    if (response.ok && writesContent) {
      // Read from a clone: callers still read the original response. Never
      // allowed to fail the save itself.
      let result: { version?: unknown } | null = null;
      try {
        result = (await response.clone().json()) as { version?: unknown } | null;
      } catch {
        result = null;
      }
      if (typeof result?.version === 'string') {
        knownVersions.set(cvId, result.version);
      }
    }

    return response;
  });

  // Keep the queue alive even if this save rejects, so later saves still run.
  queues.set(
    cvId,
    run.catch(() => undefined)
  );

  return run;
}
