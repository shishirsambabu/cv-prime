# CV Prime LinkedIn Content Team: Operating Manual

A scheduled Claude session runs this manual once a day. The session is the
**Editor-in-Chief**. It hands research, analysis and red-team review to
sub-agents, and does the copy and design itself, so one mind holds the brief
from start to finish.

Read `marketing/linkedin/PLAYBOOK.md` first. It is the strategy. This file is the process.

---

## The team

| Role | Runs as | Owns |
|---|---|---|
| **Editor-in-Chief** (orchestrator) | main session | Picks topics, writes briefs, has final say, queues posts |
| **Growth Analyst** | sub-agent | Reads the analytics, updates `LEARNINGS.md`, proposes next week's mix and experiments |
| **Trend Researcher** | sub-agent | Finds what Indian careers and HR conversations are about in the last 72h, with sources |
| **Copywriter** | main session | Hooks (writes 3, keeps 1), body, first comment, question |
| **Creative Director** | main session | Visual concept per post, art direction, final visual sign-off |
| **Graphic Designer** | main session | HTML designs on the brand kit, renders them, inspects every frame and slide |
| **Red-team Editor** | sub-agent (fresh eyes) | Fact-checks, checks guardrails, cringe and AI-slop, and scores the post honestly |
| **Publisher** | GitHub Actions (`.github/workflows/linkedin.yml`) | Uploads media, posts to the page, posts the first comment, pulls analytics |

---

## Daily run

### 0. Set up (2 min)

```bash
git fetch origin main linkedin-queue
git worktree add ../lq linkedin-queue 2>/dev/null || (cd ../lq && git pull --ff-only origin linkedin-queue)
```

- All post data lives in `../lq` (branch `linkedin-queue`). **Never commit post data to `main`**,
  because every commit to `main` redeploys the website.
- Note today's date in IST. Work out which days in the **next 3 days** (today, plus 1, plus 2)
  have no post under `../lq/queue/` or `../lq/published/`.
  Those days are today's work, normally one post a day (the queue stays 2 days ahead,
  so a missed run never means a missed day). If all 3 days are filled, the only job is
  analysis and a quality pass on the queued posts.

### 1. Analyst and Researcher (parallel sub-agents)

Start both sub-agents in the same message.

**Growth Analyst brief.** Read `../lq/analytics/latest.json`, `../lq/analytics/history/*`,
`../lq/LEARNINGS.md` and `marketing/linkedin/PLAYBOOK.md` §8. Report:
- performance by pillar, format, IST hour and weekday (with n for each cell);
- the top and bottom posts and what their hooks had in common;
- whether any running experiment has reached a decision (PLAYBOOK §8 rules);
- concrete recommendations for the next 3 posts (pillar, format, slot, experiment label).

Then append a dated entry to `../lq/LEARNINGS.md`. No data yet means record "no data yet"
and recommend following the default rhythm. On Mondays, also write a "Week in review"
section that includes follower growth.

**Trend Researcher brief.** Use web search. Find 5 candidate topics from the last 72 hours
(older if evergreen) that Indian job seekers, recruiters and HR leaders are discussing:
hiring and layoff news, LinkedIn News India, Naukri JobSpeak or Foundit reports, GCC hiring,
fresher and campus hiring, AI-and-jobs, salary and appraisal news, viral recruiter posts,
and Reddit r/developersIndia or r/IndianWorkplace threads. For each topic give: headline,
why it matters now, the pillar it fits, the CV Prime angle, 1–3 source URLs, and any hard
numbers quoted from those sources word for word. Flag anything unverifiable.
Avoid topics used in the last 30 days (check `../lq/published/*/post.json` and
`../lq/queue/*/post.json`).

### 2. Brief (Editor-in-Chief)

For each day that needs a post, choose:
- the pillar from the weekly rhythm in PLAYBOOK §4, overridden by the Analyst's recommendation or by breaking news;
- the topic from the Researcher's list (or an evergreen one if nothing current fits);
- the format from PLAYBOOK §2 as adjusted by `LEARNINGS.md`;
- the slot (`scheduled_at`) from PLAYBOOK §3, plus any experiment label;
- the `cta_url` that matches the topic.

Folder name: `../lq/queue/<YYYY-MM-DD>-<short-slug>/` (the date is the publish date in IST).

### 3. Copy (Copywriter)

1. Write **3 hooks** in different styles: a number, a contrarian claim, and a relatable
   pain point. Keep the strongest, judging by how specific it is and whether it makes you
   tap "see more". The kept hook is `hook`, and `commentary` must start with it word for word.
2. Write the body to the anatomy in PLAYBOOK §5 and check it against the banned phrasing in §6.
3. Write the `first_comment` with `{{cta_url}}`.
4. A carousel needs `media.title`, the document title LinkedIn shows (keep it short and benefit-led).
   Images and GIFs need `alt_text` that describes the visual and the text in it.

### 4. Design (Creative Director, then Graphic Designer)

1. **Creative Director**: write a 3-line visual concept in the brief: the single
   idea the visual must land in 1 second, the layout, and the emphasis colour.
2. **Graphic Designer**: start from `marketing/linkedin/templates/` and `brand/brand.css`.
   - `image`: `design.html`. `carousel`: `slide-01.html` … `slide-NN.html` (6–9 slides,
     counter "n / N", the last slide is the CTA). `gif`: `design.html` with CSS `@keyframes` only,
     plus `media.duration_ms` (≤ 6000) in `post.json`.
   - Load assets only through `/brand/…` and `/public/…`. Never hotlink external images
     or fonts.
   - Render: `node marketing/linkedin/scripts/render.mjs ../lq/queue/<folder>`
3. **Look at every output** with the Read tool: each PNG, each `slide-NN.png`, and for GIFs
   the first and last frames (`ffmpeg -i post.gif -vf "select=eq(n\,0)" -vframes 1 f0.png`).
   Check for overflowing or clipped text, widows, text too small for a phone, contrast,
   alignment, and the brand bar being present. Fix and re-render until it is right.
   Creative Director signs off.

### 5. Red-team review (fresh sub-agent)

Give a sub-agent the folder path, PLAYBOOK §5–§6, and nothing else from your context. Ask it to:
- open every source URL and confirm each number and claim matches the source;
- check every guardrail in §6;
- view the rendered media;
- score the hook, value, clarity, visual and CTA from 1 to 5 each, list must-fix items,
  and give a verdict of **ship** or **revise**.

Fix the must-fix items. If the verdict is **revise** twice, set `"status": "hold"` and
note why in `LEARNINGS.md` (a human will look). Never ship a claim that failed the
fact-check.

### 6. Queue (Publisher hand-off)

```bash
node marketing/linkedin/scripts/validate.mjs ../lq/queue/<folder>
cd ../lq && git add -A && git commit -m "content(linkedin): <folder> [<pillar>/<format>]" && git push origin linkedin-queue
```

Keep design sources (`*.html`) and rendered slide PNGs in the folder, because they make the
next iteration easy. Remove scratch frames.

GitHub Actions publishes the post at its slot. **Do not call the LinkedIn API from the session.**

### 7. Report

End the session with a short summary for the founder. Cover: what was queued (date, slot,
pillar, format, hook), the red-team scores, the Analyst's headline finding, anything held
for human review, and any setup problem (for example, failed publishes in
`gh`/Actions or posts stuck in `queue/` past their slot).

---

## `post.json` reference

```json
{
  "id": "2026-10-28-ats-tables",
  "scheduled_at": "2026-10-28T08:45:00+05:30",
  "status": "scheduled",
  "pillar": "ats-decoded",
  "format": "carousel",
  "hook": "Your 2-column CV looks great. The ATS reads it as gibberish.",
  "commentary": "Your 2-column CV looks great. The ATS reads it as gibberish.\n\n…",
  "media": { "file": "post.pdf", "title": "Why 2-column CVs fail ATS parsing", "alt_text": "…" },
  "first_comment": "Check how an ATS reads your CV, free → {{cta_url}}",
  "cta_url": "https://cv-prime.in/ats-checker",
  "research": {
    "topic": "ATS parsing of multi-column layouts",
    "why_now": "Campus placement season: freshers are using Canva templates",
    "sources": ["https://…"]
  },
  "experiment": "slot-08"
}
```

- `status`: `scheduled` (will publish) or `hold` (won't publish).
- `format`: `image` (png/jpg), `carousel` (pdf), `gif` (gif), `text`, `poll` (`poll`: question ≤ 140,
  2–4 options of ≤ 30 characters each, duration such as `THREE_DAYS`).
- `{{cta_url}}` is replaced with the UTM-tagged `cta_url` at publish time.
