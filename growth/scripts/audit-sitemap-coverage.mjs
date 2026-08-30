#!/usr/bin/env node
/**
 * Sitemap coverage audit.
 *
 * The sitemap in app/sitemap.ts is hand-maintained, so pages added under
 * app/(marketing) can silently never get submitted to Google. This script
 * diffs the static routes that exist on disk against the URLs the sitemap
 * emits, and reports pages that are missing (uncrawled surface) or listed
 * but absent (404s in the sitemap).
 *
 * Usage: node growth/scripts/audit-sitemap-coverage.mjs [--json]
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = process.cwd();
const APP = join(ROOT, 'app');

// Routes that intentionally stay out of the sitemap: authed surfaces, auth
// screens, and per-CV pages that are private or noindex.
const EXCLUDED = [/^\/(login|signup)$/, /^\/auth\//, /^\/(dashboard|editor|settings|job-tracker|cover-letter|ai-cv)(?=$|\/)/, /^\/(print|share)(?=$|\/)/];

/** Walk app/ and collect routes for every static page.tsx. */
function collectStaticRoutes(dir, segments = []) {
  const routes = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      // Dynamic segments ([role]) are generated, not static — skip the subtree.
      if (entry.startsWith('[')) continue;
      if (entry === 'api' || entry === 'node_modules') continue;
      // Route groups like (marketing) don't appear in the URL.
      const next = entry.startsWith('(') ? segments : [...segments, entry];
      routes.push(...collectStaticRoutes(full, next));
    } else if (entry === 'page.tsx') {
      const src = readFileSync(full, 'utf8');
      // A page that opts out of indexing belongs out of the sitemap too.
      if (/robots:\s*\{[^}]*index:\s*false/.test(src)) continue;
      // So does a bare redirect: submitting it just earns a "Page with
      // redirect" in Search Console and spends crawl budget for nothing.
      if (/from 'next\/navigation'/.test(src) && /\bredirect\(/.test(src) && !/export const metadata/.test(src))
        continue;
      routes.push('/' + segments.join('/'));
    }
  }
  return routes;
}

/** Pull every `${baseUrl}/path` literal out of the sitemap source. */
function collectSitemapRoutes() {
  const src = readFileSync(join(ROOT, 'app', 'sitemap.ts'), 'utf8');
  const listed = new Set();
  for (const m of src.matchAll(/\$\{baseUrl\}(\/[^`'"\s,}]*)/g)) listed.add(m[1]);
  // A bare `url: baseUrl` entry is the homepage.
  if (/url:\s*baseUrl\b/.test(src)) listed.add('/');
  return listed;
}

const onDisk = collectStaticRoutes(APP).filter((r) => !EXCLUDED.some((re) => re.test(r)));
const listed = collectSitemapRoutes();

// Routes built from a template literal (e.g. `/salary/${slug}`) are dynamic;
// the static walk already excludes those, so compare plain paths only.
const missing = onDisk.filter((r) => !listed.has(r)).sort();
const stale = [...listed]
  .filter((r) => !r.includes('${') && !onDisk.includes(r))
  .sort();

const report = {
  staticPagesOnDisk: onDisk.length,
  urlsInSitemap: listed.size,
  missingFromSitemap: missing,
  inSitemapButNoStaticPage: stale,
};

if (process.argv.includes('--json')) {
  console.log(JSON.stringify(report, null, 2));
} else {
  console.log(`Static public pages on disk    : ${report.staticPagesOnDisk}`);
  console.log(`URL literals in sitemap.ts     : ${report.urlsInSitemap}`);
  console.log(`\nMissing from sitemap (${missing.length}):`);
  for (const r of missing) console.log(`  ${r}`);
  console.log(`\nIn sitemap, no static page (${stale.length}) — dynamic or 404:`);
  for (const r of stale) console.log(`  ${r}`);
}
