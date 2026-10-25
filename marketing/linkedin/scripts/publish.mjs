#!/usr/bin/env node
// Publishes at most one due post from the queue branch to the CV Prime
// LinkedIn page, then moves it from queue/ to published/ with a result.json.
//
//   node marketing/linkedin/scripts/publish.mjs --data <linkedin-queue checkout>
//
// Nothing is sent to LinkedIn unless LINKEDIN_AUTOPUBLISH=true; otherwise it
// prints what it would publish (dry run).

import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { buildContent, createClient, refreshAccessToken } from './lib/linkedin.mjs';
import { listPostDirs, loadPost, pickDuePost, withUtm } from './lib/queue.mjs';

const args = process.argv.slice(2);
const dataRoot = args[args.indexOf('--data') + 1];
if (!args.includes('--data') || !dataRoot) {
  console.error('usage: publish.mjs --data <path to linkedin-queue checkout>');
  process.exit(2);
}

const queueRoot = join(dataRoot, 'queue');
const publishedRoot = join(dataRoot, 'published');
const live = process.env.LINKEDIN_AUTOPUBLISH === 'true';
const minHoursBetween = Number(process.env.MIN_HOURS_BETWEEN_POSTS ?? 18);

function lastPublishedAt() {
  let latest = null;
  for (const name of listPostDirs(publishedRoot)) {
    const file = join(publishedRoot, name, 'result.json');
    if (!existsSync(file)) continue;
    const at = new Date(JSON.parse(readFileSync(file, 'utf8')).published_at);
    if (!latest || at > latest) latest = at;
  }
  return latest;
}

/** @param {string} text @param {string} url */
const fillCta = (text, url) => (url ? text.replaceAll('{{cta_url}}', url) : text);

async function main() {
  const candidates = [];
  for (const name of listPostDirs(queueRoot)) {
    const loaded = loadPost(join(queueRoot, name));
    if (!loaded.ok) {
      console.warn(`skip ${name}: ${loaded.errors.join('; ')}`);
      continue;
    }
    candidates.push({ ...loaded.post, dir: name });
  }

  const post = pickDuePost(candidates, {
    now: new Date(),
    lastPublishedAt: lastPublishedAt(),
    minHoursBetween,
  });
  if (!post) {
    console.log(`Nothing due (${candidates.length} queued, min gap ${minHoursBetween}h).`);
    return;
  }

  const ctaUrl = post.cta_url ? withUtm(post.cta_url, post.id) : '';
  const commentary = fillCta(post.commentary, ctaUrl);
  const firstComment = post.first_comment ? fillCta(post.first_comment, ctaUrl) : null;

  if (!live) {
    console.log(`[dry run] would publish ${post.id} (${post.format})\n---\n${commentary}\n---`);
    if (firstComment) console.log(`[dry run] first comment: ${firstComment}`);
    console.log('Set repository variable LINKEDIN_AUTOPUBLISH=true to go live.');
    return;
  }

  const orgId = process.env.LINKEDIN_ORG_ID;
  if (!orgId) throw new Error('LINKEDIN_ORG_ID is not set');
  const accessToken = process.env.LINKEDIN_REFRESH_TOKEN
    ? await refreshAccessToken({
        clientId: process.env.LINKEDIN_CLIENT_ID ?? '',
        clientSecret: process.env.LINKEDIN_CLIENT_SECRET ?? '',
        refreshToken: process.env.LINKEDIN_REFRESH_TOKEN,
      })
    : process.env.LINKEDIN_ACCESS_TOKEN;
  if (!accessToken) throw new Error('Set LINKEDIN_REFRESH_TOKEN or LINKEDIN_ACCESS_TOKEN');

  const li = createClient({ accessToken, orgId, apiVersion: process.env.LINKEDIN_API_VERSION || undefined });
  const srcDir = join(queueRoot, post.dir);

  let mediaUrn = null;
  if (post.media) {
    const bytes = readFileSync(join(srcDir, post.media.file));
    mediaUrn = await li.upload(post.format === 'carousel' ? 'documents' : 'images', bytes);
  }

  const postUrn = await li.createPost({ commentary, content: buildContent(post, mediaUrn) });
  console.log(`Published ${post.id} → ${postUrn}`);

  // From here on the post is live: never throw, or the next run would re-post it.
  const result = {
    post_urn: postUrn,
    url: `https://www.linkedin.com/feed/update/${postUrn}/`,
    published_at: new Date().toISOString(),
    media_urn: mediaUrn,
    first_comment: null,
    warnings: [],
  };
  if (firstComment) {
    try {
      await li.commentAsPage(postUrn, firstComment);
      result.first_comment = firstComment;
    } catch (err) {
      result.warnings.push(`first comment failed: ${err.message}`);
      console.warn(result.warnings.at(-1));
    }
  }

  writeFileSync(join(srcDir, 'result.json'), `${JSON.stringify(result, null, 2)}\n`);
  mkdirSync(publishedRoot, { recursive: true });
  renameSync(srcDir, join(publishedRoot, post.dir));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
