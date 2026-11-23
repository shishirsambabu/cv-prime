import { createHash } from 'node:crypto';

/**
 * A fingerprint of the parts of a CV row the editor writes (`data` and
 * `template_id`), used to stop a stale editor from overwriting newer content.
 *
 * Autosave sends the whole CV on every save. Before this existed, a tab (or a
 * second device) that had the CV open from before another tab's edits would,
 * on its next keystroke, PATCH its old copy over the newer row and silently
 * erase those edits. The editor now sends the version it last loaded or saved
 * as `baseVersion`, and the server refuses the write with 409 CONFLICT when
 * the stored row no longer matches it.
 *
 * Computed only on the server, always from values read back from the
 * database, so key order (jsonb reorders keys) and client-side repairs of a
 * malformed row cannot make an unchanged row look changed. Keys are sorted and
 * `undefined` object values dropped, exactly as JSON.stringify would drop them.
 *
 * Deliberately not tied to `last_edited`: an ATS score or a rename from the
 * dashboard bumps that column without touching the CV's content, and must
 * not make the open editor think its content was changed elsewhere.
 */
export function computeCvVersion(data: unknown, templateId: unknown): string {
  return createHash('sha256')
    .update(canonicalJson({ data: data ?? null, templateId: templateId ?? null }))
    .digest('hex')
    .slice(0, 32);
}

function canonicalJson(value: unknown): string {
  if (value === null || typeof value !== 'object') {
    // undefined (and functions/symbols) inside arrays become null, as in JSON.
    const encoded = JSON.stringify(value);
    return encoded === undefined ? 'null' : encoded;
  }

  if (Array.isArray(value)) {
    return `[${value.map((item) => canonicalJson(item)).join(',')}]`;
  }

  const record = value as Record<string, unknown>;
  const entries = Object.keys(record)
    .filter((key) => record[key] !== undefined)
    .sort()
    .map((key) => `${JSON.stringify(key)}:${canonicalJson(record[key])}`);
  return `{${entries.join(',')}}`;
}
