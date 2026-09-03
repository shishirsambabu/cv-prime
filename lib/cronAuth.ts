import { timingSafeEqual } from 'crypto';

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  // timingSafeEqual throws on length mismatch, and the length itself is not
  // secret, so compare lengths first and then the bytes in constant time.
  return bufA.length === bufB.length && timingSafeEqual(bufA, bufB);
}

/**
 * Authorize a scheduled job request. Vercel Cron automatically sends
 * `Authorization: Bearer $CRON_SECRET` when CRON_SECRET is configured.
 * Fails closed when unconfigured.
 *
 * The secret is accepted ONLY from the Authorization header. A `?key=` query
 * fallback was removed: query strings are recorded verbatim in Vercel access
 * logs (and leak via Referer), which would persist the cron secret in plaintext.
 * To trigger a job by hand:
 *   curl -H "Authorization: Bearer $CRON_SECRET" https://cv-prime.in/api/cron/<job>
 */
export function isAuthorizedCron(req: Request): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) {
    return false;
  }
  const auth = req.headers.get('authorization');
  if (!auth) {
    return false;
  }
  return safeEqual(auth, `Bearer ${secret}`);
}
