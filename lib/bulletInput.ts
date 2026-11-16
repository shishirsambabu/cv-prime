/** The most bullets the rewriter handles in one request. */
export const MAX_REWRITE_BULLETS = 12;

/** The non-empty lines of a pasted block, without list markers' surrounding space. */
export function bulletLines(text: string): string[] {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
}

/** The lines the rewriter will actually work on. */
export function firstBullets(text: string): string[] {
  return bulletLines(text).slice(0, MAX_REWRITE_BULLETS);
}
