#!/usr/bin/env node
/**
 * Metadata + SERP CTR audit.
 *
 * Reads the exported `metadata` of every static page and flags the things
 * that cost impressions or clicks: missing titles/descriptions, duplicates
 * across pages (cannibalisation signal), titles Google will truncate, and
 * descriptions outside the length band that renders in full.
 *
 * Usage: node growth/scripts/audit-metadata.mjs [--json]
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const TITLE_MAX = 60;
const DESC_MIN = 70;
const DESC_MAX = 160;

function walk(dir, segments = []) {
  const pages = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      if (entry === 'api' || entry === 'node_modules' || entry.startsWith('[')) continue;
      pages.push(...walk(full, entry.startsWith('(') ? segments : [...segments, entry]));
    } else if (entry === 'page.tsx') {
      pages.push({ route: '/' + segments.join('/'), file: full });
    }
  }
  return pages;
}

/**
 * Extract the string literal for `key:` from a metadata block. Handles
 * backslash escapes (`CV Prime\'s`) so an escaped quote doesn't end the
 * match early and report a real description as thin.
 */
function field(src, key) {
  const m = src.match(new RegExp(`\\b${key}:\\s*(['"\`])((?:\\\\.|(?!\\1)[\\s\\S])*)\\1`));
  if (!m) return null;
  // Unescape so lengths match what Google actually renders.
  return m[2].replace(/\\(.)/g, '$1').replace(/\s+/g, ' ').trim();
}

const pages = walk(join(ROOT, 'app'));
const seenTitle = new Map();
const seenDesc = new Map();
const findings = [];

for (const page of pages) {
  const src = readFileSync(page.file, 'utf8');
  if (/robots:\s*\{[^}]*index:\s*false/.test(src)) continue;
  // Only look at the exported metadata object, not body copy.
  const meta = src.match(/export const metadata[\s\S]*?\n\};/);
  if (!meta) {
    findings.push({ route: page.route, issue: 'no-exported-metadata', detail: 'page exports no metadata object' });
    continue;
  }
  const block = meta[0];
  const title = field(block, 'title');
  const desc = field(block, 'description');

  if (!title) findings.push({ route: page.route, issue: 'missing-title', detail: '' });
  else {
    if (title.length > TITLE_MAX)
      findings.push({ route: page.route, issue: 'title-too-long', detail: `${title.length} chars, truncates at ~${TITLE_MAX}` });
    const key = title.toLowerCase();
    if (seenTitle.has(key)) findings.push({ route: page.route, issue: 'duplicate-title', detail: `same title as ${seenTitle.get(key)}` });
    else seenTitle.set(key, page.route);
  }

  if (!desc) findings.push({ route: page.route, issue: 'missing-description', detail: '' });
  else {
    if (desc.length > DESC_MAX)
      findings.push({ route: page.route, issue: 'description-too-long', detail: `${desc.length} chars, truncates at ~${DESC_MAX}` });
    else if (desc.length < DESC_MIN)
      findings.push({ route: page.route, issue: 'description-thin', detail: `${desc.length} chars, under ${DESC_MIN}` });
    const key = desc.toLowerCase();
    if (seenDesc.has(key)) findings.push({ route: page.route, issue: 'duplicate-description', detail: `same description as ${seenDesc.get(key)}` });
    else seenDesc.set(key, page.route);
  }
}

const byIssue = findings.reduce((acc, f) => ((acc[f.issue] ??= []).push(f), acc), {});

if (process.argv.includes('--json')) {
  console.log(JSON.stringify({ pagesAudited: pages.length, findings }, null, 2));
} else {
  console.log(`Pages audited: ${pages.length}\nFindings: ${findings.length}\n`);
  for (const [issue, list] of Object.entries(byIssue).sort((a, b) => b[1].length - a[1].length)) {
    console.log(`${issue} (${list.length})`);
    for (const f of list) console.log(`  ${f.route}${f.detail ? ` — ${f.detail}` : ''}`);
    console.log('');
  }
}
