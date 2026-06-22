import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

const redis =
  redisUrl && redisToken
    ? new Redis({
        url: redisUrl,
        token: redisToken,
      })
    : null;

export async function rateLimit(
  userId: string,
  route: string,
  limit: number,
  duration: `${number}${'s' | 'm' | 'h' | 'd'}`
): Promise<boolean> {
  if (!redis) {
    return false;
  }

  const limiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(limit, duration),
    prefix: `cv-prime:${route}`,
  });

  try {
    // Fail open if Redis is slow/unreachable so it never hangs a request.
    const limited = await Promise.race([
      limiter.limit(userId).then(({ success }) => !success),
      new Promise<boolean>((resolve) => setTimeout(() => resolve(false), 4000)),
    ]);
    return limited;
  } catch {
    return false;
  }
}
