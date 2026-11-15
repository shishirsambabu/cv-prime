/**
 * sessionStorage throws (SecurityError) instead of returning null when the
 * browser blocks site data, e.g. Chrome with "Block all cookies" or some
 * embedded webviews. These wrappers make a blocked store behave like an empty
 * one, so a remembered dismissal is lost rather than the page crashing.
 */
export function safeSessionGet(key: string): string | null {
  try {
    return window.sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

export function safeSessionSet(key: string, value: string): void {
  try {
    window.sessionStorage.setItem(key, value);
  } catch {
    // Storage is unavailable; nothing to remember.
  }
}
