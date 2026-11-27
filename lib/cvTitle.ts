/** Create, clone and rename all cap a CV title at this many characters. */
export const MAX_CV_TITLE_LENGTH = 80;

const COPY_SUFFIX = ' copy';

/**
 * The default title for a clone. "<title> copy" on a 76-80 character title
 * used to be stored at up to 85 characters - a title the dashboard rename then
 * refused to save unchanged, and one that grew by 5 on every clone of a clone.
 */
export function defaultCloneTitle(title: string | null | undefined): string {
  const base = (title ?? '').trim() || 'Untitled CV';
  return `${base.slice(0, MAX_CV_TITLE_LENGTH - COPY_SUFFIX.length).trimEnd()}${COPY_SUFFIX}`;
}
