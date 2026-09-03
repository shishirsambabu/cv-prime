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

export function saveCv(cvId: string, payload: SaveCvPayload): Promise<Response> {
  const previous = queues.get(cvId) ?? Promise.resolve();

  const run = previous.then(() =>
    fetch(`/api/cvs/${cvId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
  );

  // Keep the queue alive even if this save rejects, so later saves still run.
  queues.set(
    cvId,
    run.catch(() => undefined)
  );

  return run;
}
