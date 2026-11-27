import type { ZodError } from 'zod';

/** Field names whose humanized form would read oddly. */
export const VALIDATION_LABELS: Record<string, string> = {
  cvText: 'Your CV text',
  cvData: 'Your CV',
  resumeText: 'Your resume text',
  jobDescription: 'The job description',
};

function humanize(key: string): string {
  const words = key.replace(/([a-z0-9])([A-Z])/g, '$1 $2').toLowerCase();
  return words.charAt(0).toUpperCase() + words.slice(1);
}

/**
 * One sentence a user can act on for a rejected request body.
 *
 * The AI routes answered a too-long paste (a 20,000-character job
 * description, a 130-character role) with `{ error: flatten() }`, and the
 * pages showed "Something went wrong. Please try again." — which no number of
 * retries could fix, because nothing said which box was the problem.
 */
export function describeValidationError(
  error: ZodError,
  labels: Record<string, string> = VALIDATION_LABELS
): string {
  const issue = error.issues[0];
  if (!issue) {
    return 'Check your inputs and try again.';
  }

  const key = [...issue.path].reverse().find((part): part is string => typeof part === 'string');
  const label = key ? labels[key] ?? humanize(key) : null;

  if (issue.code === 'too_big' && issue.type === 'string') {
    const max = Number(issue.maximum).toLocaleString('en-IN');
    return `${label ?? 'This field'} is too long. Keep it under ${max} characters.`;
  }
  if (issue.code === 'too_big' && issue.type === 'array') {
    return `${label ?? 'This list'} has too many items. The limit is ${String(issue.maximum)}.`;
  }

  // Routes give their own minimum-length and refine checks a readable
  // message ("Paste a job description."); zod's defaults are not.
  const isDefaultMessage = /^(String|Array|Number) must|^Required$|^Expected /.test(issue.message);
  if (!isDefaultMessage) {
    return issue.message;
  }
  return label ? `${label}: check this field and try again.` : 'Check your inputs and try again.';
}
