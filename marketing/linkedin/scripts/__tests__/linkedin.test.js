/**
 * @jest-environment node
 */
import { escapeLittleText } from '../lib/littleText.mjs';
import { buildContent, createClient } from '../lib/linkedin.mjs';
import { pickDuePost, postSchema, withUtm } from '../lib/queue.mjs';

describe('escapeLittleText', () => {
  it('escapes reserved characters that would truncate a post', () => {
    expect(escapeLittleText('ATS (applicant tracking) [v2] @CV_Prime')).toBe(
      'ATS \\(applicant tracking\\) \\[v2\\] \\@CV\\_Prime',
    );
  });

  it('keeps hashtags clickable but escapes a bare #', () => {
    expect(escapeLittleText('#Resume tips # 1')).toBe('#Resume tips \\# 1');
  });
});

describe('pickDuePost', () => {
  const now = new Date('2026-10-27T03:30:00Z');
  const posts = [
    { id: 'b', scheduled_at: '2026-10-27T08:30:00+05:30', status: 'scheduled' },
    { id: 'a', scheduled_at: '2026-10-26T08:30:00+05:30', status: 'scheduled' },
    { id: 'c', scheduled_at: '2026-10-25T08:30:00+05:30', status: 'hold' },
    { id: 'd', scheduled_at: '2026-10-28T08:30:00+05:30', status: 'scheduled' },
  ];

  it('returns the oldest due scheduled post and ignores held or future ones', () => {
    expect(pickDuePost(posts, { now, lastPublishedAt: null, minHoursBetween: 18 })?.id).toBe('a');
  });

  it('waits when the last post went out too recently', () => {
    const lastPublishedAt = new Date('2026-10-26T20:00:00Z');
    expect(pickDuePost(posts, { now, lastPublishedAt, minHoursBetween: 18 })).toBeNull();
  });
});

describe('withUtm', () => {
  it('tags links so signups can be attributed to a post', () => {
    const url = new URL(withUtm('https://cv-prime.in/ats-checker', '2026-10-27-ats'));
    expect(url.searchParams.get('utm_source')).toBe('linkedin');
    expect(url.searchParams.get('utm_content')).toBe('2026-10-27-ats');
  });
});

describe('postSchema', () => {
  const base = {
    id: '2026-10-27-ats-myth',
    scheduled_at: '2026-10-27T08:30:00+05:30',
    status: 'scheduled',
    pillar: 'ats-decoded',
    format: 'image',
    hook: 'Your CV is not rejected by a robot.',
    commentary: 'Your CV is not rejected by a robot.\n\nMore…',
    media: { file: 'post.png', alt_text: 'A stat card about ATS parsing' },
    research: { topic: 'ATS myths', why_now: 'Trending', sources: ['https://example.com'] },
  };

  it('accepts a valid post', () => {
    expect(postSchema.safeParse(base).success).toBe(true);
  });

  it('rejects a carousel without a PDF', () => {
    expect(postSchema.safeParse({ ...base, format: 'carousel' }).success).toBe(false);
  });

  it('requires commentary to open with the hook', () => {
    expect(postSchema.safeParse({ ...base, hook: 'Something else' }).success).toBe(false);
  });
});

describe('createClient', () => {
  it('creates an escaped organisation post and returns its URN', async () => {
    const calls = [];
    const fetchImpl = async (url, init) => {
      calls.push({ url, init });
      return new Response(null, { status: 201, headers: { 'x-restli-id': 'urn:li:share:123' } });
    };
    const li = createClient({ accessToken: 't', orgId: '42', apiVersion: '202609', fetchImpl });
    const urn = await li.createPost({
      commentary: 'Hello (world)',
      content: buildContent({ format: 'image', media: { alt_text: 'alt text here' } }, 'urn:li:image:9'),
    });

    expect(urn).toBe('urn:li:share:123');
    expect(calls[0].url).toBe('https://api.linkedin.com/rest/posts');
    expect(calls[0].init.headers['LinkedIn-Version']).toBe('202609');
    const body = JSON.parse(calls[0].init.body);
    expect(body.author).toBe('urn:li:organization:42');
    expect(body.commentary).toBe('Hello \\(world\\)');
    expect(body.content.media).toEqual({ id: 'urn:li:image:9', altText: 'alt text here' });
  });

  it('uploads media to the URL LinkedIn hands back', async () => {
    const calls = [];
    const fetchImpl = async (url, init) => {
      calls.push({ url, init });
      if (url.includes('initializeUpload')) {
        return new Response(JSON.stringify({ value: { uploadUrl: 'https://upload.test/x', document: 'urn:li:document:7' } }), {
          status: 200,
        });
      }
      return new Response(null, { status: 201 });
    };
    const li = createClient({ accessToken: 't', orgId: '42', fetchImpl });
    const urn = await li.upload('documents', new Uint8Array([1, 2, 3]));

    expect(urn).toBe('urn:li:document:7');
    expect(calls[1].url).toBe('https://upload.test/x');
    expect(calls[1].init.method).toBe('PUT');
  });
});
