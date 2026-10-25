#!/usr/bin/env node
// Turns a post folder's HTML designs into LinkedIn-ready media.
//
//   node marketing/linkedin/scripts/render.mjs <post dir>
//
// Reads post.json for the format and writes media.file:
//   image    design.html                → PNG  (1080x1350)
//   carousel slide-01.html, slide-02…    → PDF document (one 1080x1350 page each)
//   gif      design.html (CSS animation) → GIF  (frames sampled via the Web Animations API)
//
// Designs are served from a virtual origin so they can use:
//   /brand/brand.css, /brand/fonts/*, /public/logo-white.png, /public/logo.png

import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, extname, join, resolve } from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

// require() so a globally installed Playwright (cloud sessions) resolves too.
const { chromium } = createRequire(import.meta.url)('playwright');

const here = dirname(fileURLToPath(import.meta.url));
const brandDir = resolve(here, '..', 'brand');
const publicDir = resolve(here, '..', '..', '..', 'public');
const ORIGIN = 'http://render.local';
const WIDTH = 1080;
const HEIGHT = 1350;

const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
};

const postDir = resolve(process.argv[2] ?? '');
if (!process.argv[2]) {
  console.error('usage: render.mjs <post dir>');
  process.exit(2);
}
const post = JSON.parse(readFileSync(join(postDir, 'post.json'), 'utf8'));

/** @param {import('playwright').Page} page */
async function serve(page) {
  await page.route(`${ORIGIN}/**`, (route) => {
    const path = decodeURIComponent(new URL(route.request().url()).pathname);
    const file = path.startsWith('/brand/')
      ? join(brandDir, path.slice('/brand/'.length))
      : path.startsWith('/public/')
        ? join(publicDir, path.slice('/public/'.length))
        : join(postDir, path);
    try {
      return route.fulfill({ body: readFileSync(file), contentType: MIME[extname(file)] ?? 'application/octet-stream' });
    } catch {
      console.warn(`render: 404 ${path}`);
      return route.fulfill({ status: 404, body: '' });
    }
  });
}

/** @param {import('playwright').Page} page @param {string} name */
async function open(page, name) {
  await page.goto(`${ORIGIN}/${name}`, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
}

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: WIDTH, height: HEIGHT }, deviceScaleFactor: 1 });
  await serve(page);
  const out = join(postDir, post.media?.file ?? 'post.png');

  if (post.format === 'image') {
    await open(page, 'design.html');
    await page.screenshot({ path: out, type: out.endsWith('.png') ? 'png' : 'jpeg' });
  } else if (post.format === 'carousel') {
    const slides = readdirSync(postDir).filter((f) => /^slide-\d+\.html$/.test(f)).sort();
    if (!slides.length) throw new Error('carousel needs slide-01.html, slide-02.html, …');
    const pngs = [];
    for (const slide of slides) {
      await open(page, slide);
      const png = join(postDir, slide.replace('.html', '.png'));
      await page.screenshot({ path: png });
      pngs.push(png);
    }
    const pdfPage = await browser.newPage();
    const imgs = pngs
      .map((p) => `<img src="data:image/png;base64,${readFileSync(p).toString('base64')}">`)
      .join('');
    await pdfPage.setContent(
      `<style>@page{size:${WIDTH}px ${HEIGHT}px;margin:0}body{margin:0}img{display:block;width:${WIDTH}px;height:${HEIGHT}px;page-break-after:always}</style>${imgs}`,
    );
    await pdfPage.pdf({ path: out, width: `${WIDTH}px`, height: `${HEIGHT}px`, printBackground: true });
  } else if (post.format === 'gif') {
    const durationMs = post.media?.duration_ms ?? 4000;
    const fps = post.media?.fps ?? 15;
    const frames = Math.min(Math.round((durationMs / 1000) * fps), 240);
    const tmp = mkdtempSync(join(tmpdir(), 'gif-'));
    await open(page, 'design.html');
    for (let i = 0; i < frames; i += 1) {
      const t = (i * durationMs) / frames;
      await page.evaluate((ms) => {
        for (const a of document.getAnimations()) {
          a.pause();
          a.currentTime = ms;
        }
      }, t);
      await page.screenshot({ path: join(tmp, `f${String(i).padStart(4, '0')}.png`) });
    }
    const scale = post.media?.width ?? 800;
    const filter = `fps=${fps},scale=${scale}:-1:flags=lanczos,split[a][b];[a]palettegen=max_colors=192[p];[b][p]paletteuse=dither=sierra2_4a`;
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', String(fps), '-i', join(tmp, 'f%04d.png'), '-vf', filter, '-loop', '0', out]);
    rmSync(tmp, { recursive: true, force: true });
  } else {
    console.log(`${post.format} posts have no media to render.`);
    await browser.close();
    return;
  }

  await browser.close();
  const kb = Math.round(statSync(out).size / 1024);
  console.log(`Rendered ${out} (${kb} KB)`);
  writeFileSync(join(postDir, '.rendered'), new Date().toISOString());
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
