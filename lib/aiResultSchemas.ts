import { z } from 'zod';
import type { CVData } from '@/types/cv.types';
import { sanitizeCVData } from '@/lib/cv';

/**
 * Tolerant building blocks for validating what a model sends back.
 *
 * A model asked for "an integer 0-100" or "at most 6 items" follows that most
 * of the time, not all of the time. Validating its answer strictly turned a
 * perfectly usable response (a score of 74.5, a seventh strength, "High"
 * instead of "high") into AI_FAILED — after the user's own key had already
 * paid for it. These helpers repair the answer instead of rejecting it.
 */

/** A 0-100 score: accepts 74.5 or "74", rounds, and clamps to the range. */
export const lenientScore = z
  .union([z.number(), z.string().trim().min(1)])
  .transform((value, ctx) => {
    const numeric = typeof value === 'number' ? value : Number(value.replace(/%$/, ''));
    if (!Number.isFinite(numeric)) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'Score is not a number.' });
      return z.NEVER;
    }
    return Math.min(100, Math.max(0, Math.round(numeric)));
  });

/** An array that keeps the first `max` items instead of failing on item max + 1. */
export function cappedArray<T extends z.ZodTypeAny>(item: T, max: number) {
  return z.array(item).transform((items) => items.slice(0, max));
}

/** A lowercase enum that accepts any casing and falls back instead of failing. */
export function lenientEnum<T extends [string, ...string[]]>(values: T, fallback: T[number]) {
  return z.string().transform((value): T[number] => {
    const normalized = value.trim().toLowerCase();
    return (values as readonly string[]).includes(normalized) ? (normalized as T[number]) : fallback;
  });
}

/** A list of strings: drops non-string items, and treats a missing or non-array value as empty. */
export const lenientStringArray = z
  .unknown()
  .transform((value): string[] =>
    Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : []
  );

/**
 * A whole CV written by a model. Models routinely answer `"endDate": null` for
 * a current job, `"gpa": null`, a year as a number, or leave out `sectionOrder`
 * or an `id`. The strict CV schema rejected every one of those, which threw
 * away a complete generation (up to a minute, paid for by the user's key) as
 * AI_FAILED. This repairs the answer the same way a stored legacy row is
 * repaired (`sanitizeCVData`); only a value that is not an object is refused.
 */
export const lenientCVData = z
  .record(z.unknown())
  .transform((value): CVData => sanitizeCVData(value));
