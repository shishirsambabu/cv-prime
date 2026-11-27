/**
 * Routes that are the product itself (the signed-in workspace, the sign-in
 * screens, the print/share/embed surfaces) rather than marketing pages.
 * Marketing chrome mounted in the root layout (sale banner, exit-intent
 * dialog) must stay off all of them.
 */
const APP_ROUTE_PREFIXES = [
  '/dashboard',
  '/editor',
  '/ai-cv',
  '/cover-letter',
  '/job-tracker',
  '/settings',
  '/print',
  '/share',
  '/login',
  '/signup',
  '/auth',
  '/embed',
];

export function isAppRoute(pathname: string | null | undefined): boolean {
  if (!pathname) return false;
  // Exact or segment match: `/cover-letter/123` is the app, while
  // `/cover-letter-examples` is a marketing page.
  return APP_ROUTE_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
}
