/**
 * Boots the stand-in Supabase backend and a dev server pointed at it, then
 * runs the browser specs in e2e/ against them.
 *
 * Nothing here talks to a real Supabase project, so it is safe to run on any
 * machine and needs no secrets.
 */

import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');

const MOCK_PORT = Number(process.env.E2E_MOCK_PORT ?? 54321);
const APP_PORT = Number(process.env.E2E_APP_PORT ?? 3002);
const MOCK_URL = `http://127.0.0.1:${MOCK_PORT}`;
const BASE_URL = `http://127.0.0.1:${APP_PORT}`;

// Playwright is intentionally NOT a dependency of this project: its install
// step downloads several hundred megabytes of browsers, which would land on
// every `npm ci` including CI, where these specs do not run.
try {
  createRequire(import.meta.url).resolve('playwright');
} catch {
  process.stderr.write(
    'e2e: the `playwright` package is not resolvable.\n' +
      'Install it once, outside this project\'s dependencies, e.g.\n' +
      '  npm i -g playwright && npx playwright install chromium\n' +
      'then re-run `npm run test:e2e`.\n',
  );
  process.exit(1);
}

const children = [];
const logs = new Map();

function start(label, command, args, options) {
  // detached: the dev server spawns its own child process; killing only the
  // parent leaves a next-server holding the port, which makes the next run
  // fail to bind.
  const child = spawn(command, args, { stdio: ['ignore', 'pipe', 'pipe'], detached: true, ...options });
  children.push(child);
  logs.set(label, []);
  for (const stream of [child.stdout, child.stderr]) {
    stream?.on('data', (chunk) => {
      const lines = logs.get(label);
      lines.push(String(chunk));
      if (lines.length > 100) lines.shift();
    });
  }
  return child;
}

function stopAll() {
  for (const child of children) {
    try {
      process.kill(-child.pid, 'SIGTERM');
    } catch {
      try {
        child.kill('SIGTERM');
      } catch {
        // already gone
      }
    }
  }
}
process.on('exit', stopAll);
process.on('SIGINT', () => {
  stopAll();
  process.exit(130);
});

async function waitFor(url, label, timeoutMs = 120_000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      await fetch(url);
      return;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }
  process.stderr.write(`\n--- ${label} output ---\n${(logs.get(label) ?? []).join('')}\n`);
  throw new Error(`${label} did not come up within ${timeoutMs}ms`);
}

start('mock Supabase', process.execPath, [path.join(here, 'mock-supabase.mjs')], {
  cwd: root,
  env: { ...process.env, MOCK_PORT: String(MOCK_PORT) },
});
await waitFor(`${MOCK_URL}/auth/v1/user`, 'mock Supabase');

start('dev server', 'npm', ['run', 'dev'], {
  cwd: root,
  env: {
    ...process.env,
    PORT: String(APP_PORT),
    NEXT_PUBLIC_SUPABASE_URL: MOCK_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: 'mock-anon-key',
    NEXT_PUBLIC_APP_URL: BASE_URL,
  },
});
await waitFor(BASE_URL, 'dev server');

const specs = process.argv.slice(2);
const toRun = specs.length > 0 ? specs : ['editor-typing.mjs'];
let failures = 0;

for (const spec of toRun) {
  process.stdout.write(`\n--- ${spec} ---\n`);
  const code = await new Promise((resolve) => {
    const child = spawn(process.execPath, [path.join(here, spec)], {
      cwd: root,
      stdio: 'inherit',
      env: { ...process.env, E2E_BASE_URL: BASE_URL, E2E_MOCK_URL: MOCK_URL },
    });
    child.on('exit', (exitCode) => resolve(exitCode ?? 1));
  });
  if (code !== 0) failures += 1;
}

stopAll();
process.exit(failures === 0 ? 0 : 1);
