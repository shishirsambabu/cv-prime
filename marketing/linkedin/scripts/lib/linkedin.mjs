// Minimal typed-by-JSDoc client for the LinkedIn Community Management API.
// Requires an access token with w_organization_social (posting) and
// r_organization_social / rw_organization_admin (analytics) for a page the
// token's member administers.

import { escapeLittleText } from './littleText.mjs';

const API = 'https://api.linkedin.com/rest';
const OAUTH = 'https://www.linkedin.com/oauth/v2';

export const DEFAULT_API_VERSION = '202609';

export class LinkedInError extends Error {
  /**
   * @param {string} message
   * @param {number} status
   * @param {string} body
   */
  constructor(message, status, body) {
    super(`${message} (HTTP ${status}): ${body.slice(0, 500)}`);
    this.status = status;
    this.body = body;
  }
}

/**
 * Exchanges a refresh token for a fresh access token. Refresh tokens are only
 * issued to apps approved for the Community Management API.
 *
 * @param {{ clientId: string, clientSecret: string, refreshToken: string, fetchImpl?: typeof fetch }} args
 * @returns {Promise<string>}
 */
export async function refreshAccessToken({ clientId, clientSecret, refreshToken, fetchImpl = fetch }) {
  const res = await fetchImpl(`${OAUTH}/accessToken`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: clientId,
      client_secret: clientSecret,
    }),
  });
  const text = await res.text();
  if (!res.ok) throw new LinkedInError('Token refresh failed', res.status, text);
  return JSON.parse(text).access_token;
}

/**
 * @param {{ accessToken: string, orgId: string, apiVersion?: string, fetchImpl?: typeof fetch }} cfg
 */
export function createClient({ accessToken, orgId, apiVersion = DEFAULT_API_VERSION, fetchImpl = fetch }) {
  const orgUrn = `urn:li:organization:${orgId}`;
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'LinkedIn-Version': apiVersion,
    'X-Restli-Protocol-Version': '2.0.0',
  };

  /**
   * @param {string} path
   * @param {RequestInit} [init]
   */
  async function call(path, init = {}) {
    const res = await fetchImpl(`${API}${path}`, {
      ...init,
      headers: { ...headers, ...(init.body ? { 'Content-Type': 'application/json' } : {}), ...init.headers },
    });
    const text = await res.text();
    if (!res.ok) throw new LinkedInError(`${init.method ?? 'GET'} ${path} failed`, res.status, text);
    return { res, json: text ? JSON.parse(text) : null };
  }

  /**
   * Uploads an image/GIF (`images`) or PDF (`documents`) owned by the page.
   *
   * @param {'images' | 'documents'} kind
   * @param {Uint8Array} bytes
   * @returns {Promise<string>} the media URN
   */
  async function upload(kind, bytes) {
    const { json } = await call(`/${kind}?action=initializeUpload`, {
      method: 'POST',
      body: JSON.stringify({ initializeUploadRequest: { owner: orgUrn } }),
    });
    const { uploadUrl } = json.value;
    const urn = kind === 'images' ? json.value.image : json.value.document;
    const put = await fetchImpl(uploadUrl, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/octet-stream' },
      body: bytes,
    });
    if (!put.ok) throw new LinkedInError(`Upload to ${kind} failed`, put.status, await put.text());
    return urn;
  }

  return {
    orgUrn,
    upload,

    /**
     * @param {{ commentary: string, content?: Record<string, unknown> }} args
     * @returns {Promise<string>} the post URN
     */
    async createPost({ commentary, content }) {
      const { res } = await call('/posts', {
        method: 'POST',
        body: JSON.stringify({
          author: orgUrn,
          commentary: escapeLittleText(commentary),
          visibility: 'PUBLIC',
          distribution: { feedDistribution: 'MAIN_FEED', targetEntities: [], thirdPartyDistributionChannels: [] },
          ...(content ? { content } : {}),
          lifecycleState: 'PUBLISHED',
          isReshareDisabledByAuthor: false,
        }),
      });
      const urn = res.headers.get('x-restli-id') ?? res.headers.get('x-linkedin-id');
      if (!urn) throw new LinkedInError('Post created but no URN returned', res.status, '');
      return urn;
    },

    /**
     * Comments on a post as the page (used for the link-in-first-comment CTA).
     *
     * @param {string} postUrn
     * @param {string} text
     */
    async commentAsPage(postUrn, text) {
      await call(`/socialActions/${encodeURIComponent(postUrn)}/comments`, {
        method: 'POST',
        body: JSON.stringify({ actor: orgUrn, object: postUrn, message: { text } }),
      });
    },

    /**
     * Lifetime share statistics for the given post URNs.
     *
     * @param {string[]} postUrns
     * @returns {Promise<Record<string, Record<string, number>>>}
     */
    async postStats(postUrns) {
      const shares = postUrns.filter((u) => u.startsWith('urn:li:share:'));
      const ugc = postUrns.filter((u) => u.startsWith('urn:li:ugcPost:'));
      const list = (urns) => `List(${urns.map(encodeURIComponent).join(',')})`;
      const params = [`q=organizationalEntity`, `organizationalEntity=${encodeURIComponent(orgUrn)}`];
      if (shares.length) params.push(`shares=${list(shares)}`);
      if (ugc.length) params.push(`ugcPosts=${list(ugc)}`);
      if (!shares.length && !ugc.length) return {};
      const { json } = await call(`/organizationalEntityShareStatistics?${params.join('&')}`);
      /** @type {Record<string, Record<string, number>>} */
      const out = {};
      for (const el of json.elements ?? []) {
        const urn = el.share ?? el.ugcPost;
        if (urn) out[urn] = el.totalShareStatistics;
      }
      return out;
    },

    /** @returns {Promise<number>} */
    async followerCount() {
      const { json } = await call(
        `/networkSizes/${encodeURIComponent(orgUrn)}?edgeType=COMPANY_FOLLOWED_BY_MEMBER`,
      );
      return json.firstDegreeSize;
    },
  };
}

/**
 * Builds the `content` block for a post from its format.
 *
 * @param {{ format: string, media?: { alt_text: string, title?: string }, poll?: { question: string, options: string[], duration: string } }} post
 * @param {string | null} mediaUrn
 */
export function buildContent(post, mediaUrn) {
  switch (post.format) {
    case 'image':
    case 'gif':
      return { media: { id: mediaUrn, altText: post.media?.alt_text } };
    case 'carousel':
      return { media: { id: mediaUrn, title: post.media?.title ?? 'CV Prime' } };
    case 'poll':
      return {
        poll: {
          question: post.poll?.question,
          options: post.poll?.options.map((text) => ({ text })),
          settings: { duration: post.poll?.duration },
        },
      };
    default:
      return undefined;
  }
}
