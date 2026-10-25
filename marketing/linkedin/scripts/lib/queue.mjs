import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { z } from 'zod';
import { MAX_COMMENTARY_LENGTH } from './littleText.mjs';

export const PILLARS = [
  'ats-decoded',
  'recruiter-pov',
  'india-job-market',
  'career-moves',
  'cv-teardown',
  'product-proof',
];

export const FORMATS = ['image', 'carousel', 'gif', 'text', 'poll'];

const mediaSchema = z.object({
  file: z.string().min(1),
  alt_text: z.string().min(10).max(300),
  title: z.string().max(200).optional(),
});

export const postSchema = z
  .object({
    id: z.string().regex(/^\d{4}-\d{2}-\d{2}-[a-z0-9-]+$/),
    scheduled_at: z.string().datetime({ offset: true }),
    status: z.enum(['scheduled', 'hold']),
    pillar: z.enum(PILLARS),
    format: z.enum(FORMATS),
    hook: z.string().min(1).max(210),
    commentary: z.string().min(1).max(MAX_COMMENTARY_LENGTH),
    media: mediaSchema.optional(),
    poll: z
      .object({
        question: z.string().min(1).max(140),
        options: z.array(z.string().min(1).max(30)).min(2).max(4),
        duration: z.enum(['ONE_DAY', 'THREE_DAYS', 'SEVEN_DAYS', 'FOURTEEN_DAYS']),
      })
      .optional(),
    first_comment: z.string().max(1250).optional(),
    cta_url: z.string().url().optional(),
    research: z.object({
      topic: z.string().min(1),
      why_now: z.string().min(1),
      sources: z.array(z.string().url()).min(1),
    }),
    experiment: z.string().optional(),
  })
  .superRefine((post, ctx) => {
    const needsMedia = post.format === 'image' || post.format === 'carousel' || post.format === 'gif';
    if (needsMedia && !post.media) {
      ctx.addIssue({ code: 'custom', path: ['media'], message: `${post.format} posts need media` });
    }
    if (post.format === 'poll' && !post.poll) {
      ctx.addIssue({ code: 'custom', path: ['poll'], message: 'poll posts need poll options' });
    }
    const ext = post.media?.file.split('.').pop()?.toLowerCase();
    const expected = { image: ['png', 'jpg', 'jpeg'], carousel: ['pdf'], gif: ['gif'] }[post.format];
    if (expected && ext && !expected.includes(ext)) {
      ctx.addIssue({
        code: 'custom',
        path: ['media', 'file'],
        message: `${post.format} media must be .${expected.join('/.')}`,
      });
    }
    if (post.commentary.startsWith(post.hook) === false) {
      ctx.addIssue({
        code: 'custom',
        path: ['hook'],
        message: 'commentary must open with the hook line (it is what shows before "…see more")',
      });
    }
  });

/**
 * @param {string} dir  absolute path of a post folder
 * @returns {{ ok: true, post: z.infer<typeof postSchema> } | { ok: false, errors: string[] }}
 */
export function loadPost(dir) {
  const file = join(dir, 'post.json');
  if (!existsSync(file)) return { ok: false, errors: [`${file} missing`] };
  let raw;
  try {
    raw = JSON.parse(readFileSync(file, 'utf8'));
  } catch (err) {
    return { ok: false, errors: [`post.json is not valid JSON: ${err.message}`] };
  }
  const parsed = postSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      ok: false,
      errors: parsed.error.issues.map((i) => `${i.path.join('.') || '(root)'}: ${i.message}`),
    };
  }
  if (parsed.data.media && !existsSync(join(dir, parsed.data.media.file))) {
    return { ok: false, errors: [`media file ${parsed.data.media.file} not found in ${dir}`] };
  }
  return { ok: true, post: parsed.data };
}

/**
 * @param {string} root  directory containing post folders
 * @returns {string[]} folder names, oldest first
 */
export function listPostDirs(root) {
  if (!existsSync(root)) return [];
  return readdirSync(root)
    .filter((name) => !name.startsWith('.') && statSync(join(root, name)).isDirectory())
    .sort();
}

/**
 * Picks the next post that is due, respecting the minimum gap since the last
 * publish so the page never cannibalises its own reach.
 *
 * @param {Array<{ id: string, scheduled_at: string, status: string }>} posts
 * @param {{ now: Date, lastPublishedAt: Date | null, minHoursBetween: number }} opts
 */
export function pickDuePost(posts, { now, lastPublishedAt, minHoursBetween }) {
  if (lastPublishedAt && now.getTime() - lastPublishedAt.getTime() < minHoursBetween * 3_600_000) {
    return null;
  }
  const due = posts
    .filter((p) => p.status === 'scheduled' && new Date(p.scheduled_at).getTime() <= now.getTime())
    .sort((a, b) => new Date(a.scheduled_at).getTime() - new Date(b.scheduled_at).getTime());
  return due[0] ?? null;
}

/**
 * Adds UTM tags so PostHog can attribute signups to a specific post.
 *
 * @param {string} url
 * @param {string} postId
 */
export function withUtm(url, postId) {
  const u = new URL(url);
  u.searchParams.set('utm_source', 'linkedin');
  u.searchParams.set('utm_medium', 'organic_social');
  u.searchParams.set('utm_campaign', 'company_page');
  u.searchParams.set('utm_content', postId);
  return u.toString();
}
