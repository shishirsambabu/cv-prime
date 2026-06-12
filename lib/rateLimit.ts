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

  const { success } = await limiter.limit(userId);
  return !success;
}
