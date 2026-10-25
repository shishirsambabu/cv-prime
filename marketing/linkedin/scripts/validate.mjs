#!/usr/bin/env node
// QA gate: validates every post folder in a queue (or the folders given).
//
//   node marketing/linkedin/scripts/validate.mjs <post dir> [<post dir> ...]
//   node marketing/linkedin/scripts/validate.mjs --data <linkedin-queue checkout>

import { statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { listPostDirs, loadPost } from './lib/queue.mjs';

const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
const MAX_DOC_BYTES = 100 * 1024 * 1024;

const args = process.argv.slice(2);
const dirs = args[0] === '--data'
  ? listPostDirs(join(args[1], 'queue')).map((d) => join(args[1], 'queue', d))
  : args.map((d) => resolve(d));

let failed = 0;
for (const dir of dirs) {
  const loaded = loadPost(dir);
  const errors = loaded.ok ? [] : [...loaded.errors];
  if (loaded.ok) {
    const { post } = loaded;
    if (post.media) {
      const size = statSync(join(dir, post.media.file)).size;
      const limit = post.format === 'carousel' ? MAX_DOC_BYTES : MAX_IMAGE_BYTES;
      if (size > limit) errors.push(`${post.media.file} is ${(size / 1e6).toFixed(1)}MB (limit ${limit / 1e6}MB)`);
    }
    if (post.cta_url && !`${post.commentary}${post.first_comment ?? ''}`.includes('{{cta_url}}')) {
      errors.push('cta_url is set but {{cta_url}} is not used in commentary or first_comment');
    }
    const linksInBody = (post.commentary.match(/https?:\/\//g) ?? []).length + (post.commentary.includes('{{cta_url}}') ? 1 : 0);
    if (linksInBody > 1) errors.push('more than one link in the post body (reach penalty)');
    const hashtags = post.commentary.match(/#[\p{L}\p{N}_]+/gu) ?? [];
    if (hashtags.length > 5) errors.push(`${hashtags.length} hashtags (max 5)`);
    if (/\b(?:engagement pod|comment ['"]?yes|tag 3|like if)\b/i.test(post.commentary)) {
      errors.push('engagement-bait phrasing detected (LinkedIn demotes it)');
    }
  }
  if (errors.length) {
    failed += 1;
    console.error(`✗ ${dir}\n  - ${errors.join('\n  - ')}`);
  } else {
    console.log(`✓ ${dir}`);
  }
}
if (!dirs.length) console.log('No post folders found.');
process.exit(failed ? 1 : 0);
