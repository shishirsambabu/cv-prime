#!/usr/bin/env node
/**
 * Funnel instrumentation audit.
 *
 * Growth work is blind wherever a funnel step emits no event. This script
 * checks each step of the north-star funnel against the events actually
 * fired in the codebase, so "we cannot measure X" is a finding rather than
 * something discovered months later while reading a dashboard.
 *
 * Usage: node growth/scripts/audit-instrumentation.mjs [--json]
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();

// Funnel step -> the event that proves it happened.
const FUNNEL = [
  ['Landing page visit', 'page_viewed'],
  ['Free tool run started', 'tool_run_started'],
  ['Free tool run completed', 'tool_run_completed'],
  ['Free tool blocked by a gate', 'tool_run_gated'],
  ['Signup', 'user_signed_up'],
  ['Resume created', 'cv_created'],
  ['ATS score checked', 'ats_score_checked'],
  ['AI feature used', 'ai_bullet_rewritten'],
  ['Cover letter generated', 'cover_letter_generated'],
  ['Resume completed', 'cv_completed'],
  ['Resume exported', 'pdf_exported'],
  ['Checkout started', 'ltd_checkout_started'],
  ['Paid conversion', 'user_upgraded'],
];

function walk(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    if (entry === 'node_modules' || entry === '.next' || entry === '.git') continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) files.push(...walk(full));
    else if (/\.(ts|tsx)$/.test(entry)) files.push(full);
  }
  return files;
}

const sources = walk(join(ROOT, 'app'))
  .concat(walk(join(ROOT, 'components')), walk(join(ROOT, 'lib')))
  .map((f) => ({ file: f, src: readFileSync(f, 'utf8') }));

/** Files that actually fire this event (not merely the type union). */
function emitters(event) {
  return sources
    .filter(({ file, src }) => !file.endsWith('lib/clientAnalytics.ts') && src.includes(`'${event}'`))
    .map(({ file }) => file.replace(`${ROOT}/`, ''));
}

const rows = FUNNEL.map(([step, event]) => {
  const firedIn = emitters(event);
  return { step, event, instrumented: firedIn.length > 0, firedIn };
});

const gaps = rows.filter((r) => !r.instrumented);

if (process.argv.includes('--json')) {
  console.log(JSON.stringify({ generatedAt: new Date().toISOString().slice(0, 10), rows }, null, 2));
} else {
  for (const r of rows) {
    console.log(`${r.instrumented ? 'OK  ' : 'GAP '} ${r.step.padEnd(30)} ${r.event}`);
    for (const f of r.firedIn) console.log(`         ${f}`);
  }
  console.log(`\n${rows.length - gaps.length}/${rows.length} funnel steps instrumented.`);
  if (gaps.length) console.log(`Blind steps: ${gaps.map((g) => g.step).join(', ')}`);
}
