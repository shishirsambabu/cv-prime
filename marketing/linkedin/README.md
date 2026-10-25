# CV Prime LinkedIn engine

An autonomous content team that researches, writes, designs and publishes one post
a day to the **CV Prime LinkedIn company page** (never to a personal profile).

```
Daily Claude session (TEAM.md)                     GitHub Actions (linkedin.yml)
 Analyst ─┐                                         hourly 06:50–20:50 IST
 Researcher ─┼→ Editor → Copy → Design → Red-team →  queue/  ──→ publish due post ──→ LinkedIn page
                                        render.mjs  (linkedin-queue branch)  + first comment w/ UTM link
                     LEARNINGS.md ←── analytics/ ←── nightly analytics pull
```

| Path | What |
|---|---|
| `PLAYBOOK.md` | Strategy: algorithm research, formats, timing, pillars, guardrails, KPIs |
| `TEAM.md` | The daily operating procedure the agent team follows |
| `brand/` | Brand CSS and vendored fonts (SIL OFL) |
| `templates/` | Starting designs: stat card, carousel cover and slide, animated GIF |
| `scripts/render.mjs` | HTML → PNG / PDF carousel / GIF (Playwright + ffmpeg) |
| `scripts/validate.mjs` | Queue QA gate |
| `scripts/publish.mjs` | Posts one due item (GitHub Actions only) |
| `scripts/analytics.mjs` | Pulls post and follower stats (GitHub Actions only) |
| `scripts/oauth.mjs` | One-time token helper you run on your own computer |
| branch `linkedin-queue` | Data only: `queue/`, `published/`, `analytics/`, `LEARNINGS.md` |

## One-time setup

1. **Rotate the client secret.** If the secret was ever pasted into a chat, an issue, or
   a commit, regenerate it in the LinkedIn developer portal → your app → **Auth**.
2. **Request API access.** In the developer portal → **Products**, request
   **Community Management API**. LinkedIn requires it to be the *only* product on the app,
   so create a separate app if this one has others (e.g. Sign In with OpenID). Your app also
   has to be verified by the CV Prime page (app **Settings** → Verify, approved by a page Super Admin).
   Development tier allows posting to pages you admin. Apply for Standard tier as well.
3. **Add the redirect URL** `http://localhost:8765/callback` under **Auth**.
4. **Get tokens** on your own computer from a checkout of this repo:
   ```bash
   LINKEDIN_CLIENT_ID=… LINKEDIN_CLIENT_SECRET=… node marketing/linkedin/scripts/oauth.mjs
   ```
   Sign in as a Super or Content admin of the CV Prime page.
5. **Find the organization ID:** it's the number in your page admin URL,
   `linkedin.com/company/<ID>/admin/`.
6. **GitHub repo → Settings → Secrets and variables → Actions**
   - Secrets: `LINKEDIN_CLIENT_ID`, `LINKEDIN_CLIENT_SECRET`, `LINKEDIN_ORG_ID`,
     and either `LINKEDIN_REFRESH_TOKEN` (preferred, valid for 365 days, auto-refreshes) or
     `LINKEDIN_ACCESS_TOKEN` (60 days, re-run step 4 before it expires).
   - Variables: `LINKEDIN_AUTOPUBLISH` = `true` when you're ready to go live (until then
     every run is a dry run that logs what it would post). Optional: `LINKEDIN_API_VERSION`
     (`YYYYMM`, default `202609`) and `MIN_HOURS_BETWEEN_POSTS` (default `18`).
7. **Test:** Actions → *LinkedIn page publisher* → Run workflow → `publish`.

The workflow runs on schedule only from the default branch, so this folder and the
workflow must be merged to `main`.

## Day-to-day controls

- **Pause one post:** set `"status": "hold"` in its `post.json` on `linkedin-queue`.
- **Pause everything:** set the `LINKEDIN_AUTOPUBLISH` variable to `false`.
- **Edit before it goes out:** edit the files in `queue/<folder>/` on `linkedin-queue`
  (re-render with `render.mjs` if you change a design).
- **What did we learn?** Read `LEARNINGS.md` and `analytics/latest.json` on `linkedin-queue`.
- **Token expired:** the workflow fails with HTTP 401 and GitHub emails you. Re-run step 4.
