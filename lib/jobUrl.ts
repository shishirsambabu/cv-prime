import { z } from 'zod';

const MAX_JOB_URL_LENGTH = 2000;

/**
 * Turns what a person pastes into the job tracker's link box into a URL that
 * is safe to store and to render as a link.
 *
 * - `''` (after trimming) stays `''`: the link is optional.
 * - A value with no scheme (`www.linkedin.com/jobs/view/1`, `acme.com/careers`)
 *   gets `https://`. People copy links this way all the time, and the strict
 *   `z.string().url()` check used to refuse them with a generic error.
 * - Anything that is not http(s) is refused (`null`). `z.string().url()`
 *   accepted `javascript:alert(1)`, which the board then rendered as a link.
 */
export function normalizeJobUrl(raw: string): string | null {
  const trimmed = raw.trim();
  if (!trimmed) return '';
  if (trimmed.length > MAX_JOB_URL_LENGTH) return null;
  if (/\s/.test(trimmed)) return null;

  // `host:port/path` has a colon but no scheme, so only treat a leading
  // `word:` as a scheme when it is not followed by a port number.
  const hasScheme = /^[a-z][a-z0-9+.-]*:(?!\d)/i.test(trimmed);
  const candidate = hasScheme ? trimmed : `https://${trimmed}`;

  let parsed: URL;
  try {
    parsed = new URL(candidate);
  } catch {
    return null;
  }

  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return null;
  // A bare word ("google") parses as a host; require a dot or localhost so a
  // typo is caught instead of stored as a dead link.
  if (!parsed.hostname.includes('.') && parsed.hostname !== 'localhost') return null;

  return candidate;
}

/** True when a stored value may be rendered as a link. */
export function isSafeJobUrl(value: string | null | undefined): value is string {
  return typeof value === 'string' && /^https?:\/\//i.test(value.trim());
}

export const JOB_URL_ERROR = 'Enter a valid job link, for example https://company.com/careers/role.';

/** Optional job link: '' or a normalised http(s) URL. */
export const jobUrlSchema = z
  .string()
  .transform((value, ctx) => {
    const normalized = normalizeJobUrl(value);
    if (normalized === null) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: JOB_URL_ERROR });
      return z.NEVER;
    }
    return normalized;
  })
  .optional();
