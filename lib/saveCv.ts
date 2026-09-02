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

export function saveCv(cvId: string, payload: SaveCvPayload): Promise<Response> {
  const previous = queues.get(cvId) ?? Promise.resolve();

  const run = previous.then(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), SAVE_TIMEOUT_MS);

    return fetch(`/api/cvs/${cvId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    }).finally(() => clearTimeout(timeout));
  });

  // Keep the queue alive even if this save rejects, so later saves still run.
  queues.set(
    cvId,
    run.catch(() => undefined)
  );

  return run;
}
