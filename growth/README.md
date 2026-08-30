# CV Prime Growth OS

A repo-native growth system: discover → prioritise → experiment → deploy →
measure → learn. State lives in git so every run starts with knowledge of
the previous ones.

## Layout

| Path | What lives here |
|---|---|
| `config/` | Funnel definition, north-star metrics, scoring weights |
| `scripts/` | Runnable audits — the OBSERVE step for anything checkable from the repo |
| `data/` | Snapshots produced by scripts (committed, so trends are comparable) |
| `reports/daily/`, `reports/weekly/` | Dated growth reviews |
| `experiments/` | One file per experiment: hypothesis → result → decision |
| `backlog.json` | Every opportunity, scored and ranked |
| `learnings.md` | What we proved and disproved. **Read before proposing an experiment.** |
| `agents/` | The routines: what each one checks and what it may change unattended |
| `seo/`, `content/`, `email/`, `community/`, `competitors/` | Working notes per channel |

## Current data access

Honesty about what this system can and cannot see today matters more than a
tidy dashboard, so it is stated plainly:

| Source | Status | Consequence |
|---|---|---|
| Repository | **Available** | Technical SEO, metadata, sitemap, internal links, instrumentation coverage are all auditable now — `scripts/` does this. |
| PostHog | **Instrumented, not readable from here** | Events fire in production; no API key is wired into this repo, so no run can read them back yet. |
| Search Console | **Not connected** | No query, impression, CTR or ranking data. Every CTR/keyword item in the backlog is blocked on this. |
| Google / Vercel Analytics | **Not connected** | No traffic or bounce data. |
| Application database | **Not connected** | No signup, resume, export or revenue counts. |

Nothing in `data/` or the reports is estimated or modelled. If a number is
not measured, the report says so instead of inventing one.

## Running the audits

```bash
node growth/scripts/audit-sitemap-coverage.mjs   # crawlable surface vs sitemap
node growth/scripts/audit-metadata.mjs           # titles, descriptions, duplicates
node growth/scripts/audit-instrumentation.mjs    # which funnel steps emit events
```

Add `--json` to any of them to write a snapshot into `data/`.
