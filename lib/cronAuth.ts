/**
 * Authorize a scheduled job request. Vercel Cron automatically sends
 * `Authorization: Bearer $CRON_SECRET` when CRON_SECRET is configured. We also
 * accept `?key=` for manual/admin triggering. Fails closed when unconfigured.
 */
export function isAuthorizedCron(req: Request): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) {
    return false;
  }
  const auth = req.headers.get('authorization');
  if (auth === `Bearer ${secret}`) {
    return true;
  }
  const url = new URL(req.url);
  return url.searchParams.get('key') === secret;
}
