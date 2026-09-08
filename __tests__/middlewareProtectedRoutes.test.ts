/**
 * Pins the route-protection matcher in middleware.ts.
 *
 * A bare `pathname.startsWith(prefix)` treated every public page whose slug
 * merely began with a protected prefix as protected, so logged-out visitors and
 * search-engine crawlers hitting /ai-cv-builder, /ai-cv-maker,
 * /cover-letter-generator or any /cover-letter-examples page were redirected to
 * /login — 50+ public marketing pages that could never be indexed.
 */

const protectedPrefixes = ['/dashboard', '/editor', '/ai-cv', '/cover-letter', '/job-tracker', '/settings'];

/** Mirrors the matcher in middleware.ts. */
function isProtectedRoute(pathname: string): boolean {
  return protectedPrefixes.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

describe('middleware protected-route matching', () => {
  it.each([
    '/dashboard',
    '/dashboard/anything',
    '/editor/abc-123',
    '/ai-cv',
    '/cover-letter/abc-123',
    '/job-tracker',
    '/settings',
    '/settings/notifications',
  ])('treats %s as protected', (pathname) => {
    expect(isProtectedRoute(pathname)).toBe(true);
  });

  it.each([
    '/ai-cv-builder',
    '/ai-cv-maker',
    '/cover-letter-generator',
    '/cover-letter-examples',
    '/cover-letter-examples/software-engineer',
    '/job-application-tracker',
    '/editors-picks',
    '/',
    '/pricing',
  ])('leaves the public page %s unprotected', (pathname) => {
    expect(isProtectedRoute(pathname)).toBe(false);
  });
});
