#!/usr/bin/env node
// Pulls lifetime stats for every published post plus the follower count and
// writes them to the queue branch so the Analyst agent can learn from them.
//
//   node marketing/linkedin/scripts/analytics.mjs --data <linkedin-queue checkout>
//
// Output:
//   analytics/latest.json            per-post stats joined with pillar/format/time
//   analytics/history/<date>.json    daily snapshot (follower growth over time)

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { createClient, refreshAccessToken } from './lib/linkedin.mjs';
import { listPostDirs } from './lib/queue.mjs';

const args = process.argv.slice(2);
const dataRoot = args[args.indexOf('--data') + 1];
if (!args.includes('--data') || !dataRoot) {
  console.error('usage: analytics.mjs --data <path to linkedin-queue checkout>');
  process.exit(2);
}

async function main() {
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

  const publishedRoot = join(dataRoot, 'published');
  const posts = [];
  for (const name of listPostDirs(publishedRoot)) {
    const resultFile = join(publishedRoot, name, 'result.json');
    if (!existsSync(resultFile)) continue;
    const post = JSON.parse(readFileSync(join(publishedRoot, name, 'post.json'), 'utf8'));
    const result = JSON.parse(readFileSync(resultFile, 'utf8'));
    posts.push({ post, result });
  }

  const stats = {};
  for (let i = 0; i < posts.length; i += 20) {
    Object.assign(stats, await li.postStats(posts.slice(i, i + 20).map((p) => p.result.post_urn)));
  }

  const rows = posts.map(({ post, result }) => {
    const s = stats[result.post_urn] ?? {};
    const impressions = s.impressionCount ?? 0;
    const interactions = (s.likeCount ?? 0) + (s.commentCount ?? 0) + (s.shareCount ?? 0) + (s.clickCount ?? 0);
    const publishedAt = new Date(result.published_at);
    return {
      id: post.id,
      url: result.url,
      pillar: post.pillar,
      format: post.format,
      experiment: post.experiment ?? null,
      hook: post.hook,
      published_at: result.published_at,
      ist_hour: Number(
        new Intl.DateTimeFormat('en-GB', { hour: '2-digit', hourCycle: 'h23', timeZone: 'Asia/Kolkata' }).format(publishedAt),
      ),
      ist_weekday: new Intl.DateTimeFormat('en-GB', { weekday: 'short', timeZone: 'Asia/Kolkata' }).format(publishedAt),
      impressions,
      unique_impressions: s.uniqueImpressionsCount ?? 0,
      reactions: s.likeCount ?? 0,
      comments: s.commentCount ?? 0,
      reposts: s.shareCount ?? 0,
      clicks: s.clickCount ?? 0,
      engagement_rate: impressions ? Number((interactions / impressions).toFixed(4)) : 0,
    };
  });

  const followers = await li.followerCount();
  const today = new Date().toISOString().slice(0, 10);
  const snapshot = { date: today, followers, posts: rows };

  mkdirSync(join(dataRoot, 'analytics', 'history'), { recursive: true });
  writeFileSync(join(dataRoot, 'analytics', 'latest.json'), `${JSON.stringify(snapshot, null, 2)}\n`);
  writeFileSync(join(dataRoot, 'analytics', 'history', `${today}.json`), `${JSON.stringify(snapshot, null, 2)}\n`);
  console.log(`Analytics: ${rows.length} posts, ${followers} followers.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
