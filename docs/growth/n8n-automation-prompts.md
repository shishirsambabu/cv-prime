# CV Prime — n8n Automation Prompts

Copy-paste prompts for the n8n AI Workflow Builder (n8n chat). They were written
against the real CV Prime schema (Supabase) as of 2026-11-01.

**How to use**
1. Do the one-time setup in **Step 0** (database role + n8n credentials).
2. For each workflow, paste **SHARED CONTEXT** first, then the workflow prompt,
   in one message to n8n chat.
3. Build workflows **inactive**, test with your own account, then activate.

**Already handled by the app — do NOT rebuild in n8n** (duplicates would double-email users):
`welcome`, `payment_failed`, `purchase_success`, `renewal`, `cancellation`,
`newsletter_welcome` emails are sent by `lib/email/lifecycle.ts`.

---

## Step 0 — One-time setup (do this before any prompt)

### 0a. Create a limited database role for n8n (Supabase → SQL Editor)

Review before running. It gives n8n read access to the data it needs and write
access only to the email log, through a private `automation` schema that the
public Supabase API does not expose. Do not give n8n the `postgres` password or
the service role key.

```sql
-- 1. Login role for n8n (replace the password)
create role n8n_automation login password 'REPLACE_WITH_LONG_RANDOM_PASSWORD';

-- 2. Private schema (not exposed through the Supabase REST API)
create schema if not exists automation;
grant usage on schema automation to n8n_automation;

-- 3. Read-only views (owned by postgres, so they read past RLS for n8n only)
create or replace view automation.users as
  select p.id, u.email, p.full_name, p.plan, p.created_at,
         (p.openrouter_key_enc is not null) as has_ai_key,
         p.pdf_exports_used, p.email_prefs, p.unsubscribe_token,
         p.billing_subscription_status, p.billing_cancel_at,
         p.billing_last_payment_status
  from public.profiles p
  join auth.users u on u.id = p.id;

create or replace view automation.cvs as
  select id, user_id, title, template_id, ats_score, is_public, last_edited, created_at
  from public.cvs;

create or replace view automation.job_applications as
  select id, user_id, company, role, status, applied_date, job_url, created_at
  from public.job_applications;

create or replace view automation.payments as
  select id, user_id, gateway, gateway_order_id, amount, currency, status, created_at
  from public.payments;

create or replace view automation.email_suppressions as
  select email, reason from public.email_suppressions;

-- 4. Writable email log (shares the app's idempotency keys, so nothing double-sends)
create or replace view automation.email_messages as
  select id, user_id, recipient, email_type, category, provider,
         provider_message_id, idempotency_key, status, error, created_at, sent_at, failed_at
  from public.email_messages;

grant select on all tables in schema automation to n8n_automation;
grant insert, update on automation.email_messages to n8n_automation;
```

### 0b. Create these credentials in n8n (names matter — the prompts refer to them)

| Credential name | Type | Values |
|---|---|---|
| `CV Prime DB` | Postgres | Supabase → Project Settings → Database → **Session pooler** host, port 5432, db `postgres`, user `n8n_automation.<project-ref>`, SSL on |
| `Resend` | Header Auth | Name `Authorization`, Value `Bearer re_...` |
| `Ops Telegram` | Telegram API | Bot token from @BotFather; get your chat ID from @userinfobot |
| `PostHog` | Header Auth | Name `Authorization`, Value `Bearer phx_...` (personal API key, read-only) — only for #10 |
| `Google Sheets` | Google OAuth | Only for #5, #11, #12 |
| `Gmail Outreach` | Gmail OAuth | **Separate outreach domain/mailbox** — only for #12 |
| `LLM` | OpenAI-compatible / OpenRouter | Only for #5, #12 |

Also create one **Error Workflow** in n8n: `Error Trigger` → `Telegram` (Ops Telegram)
message "n8n workflow {{workflow.name}} failed: {{execution.error.message}} {{execution.url}}".
Set it as the error workflow on every workflow below.

---

## SHARED CONTEXT (paste this at the top of every prompt)

```
CONTEXT — CV Prime (https://cv-prime.in), an AI CV builder for the Indian job market.
Plans: Free = unlimited CV drafts + 3 PDF exports. Pro = ₹999 one-time (unlimited exports,
no watermark, premium templates). Payments via Cashfree. Users bring their own OpenRouter
AI key (BYOK) — saving the key is a key activation step.
Timezone: Asia/Kolkata for every schedule.

DATABASE: use the Postgres credential "CV Prime DB". Only query the "automation" schema:
- automation.users(id, email, full_name, plan 'free'|'pro', created_at, has_ai_key bool,
  pdf_exports_used int, email_prefs jsonb {career_tips,product_updates,offers,newsletter: bool},
  unsubscribe_token uuid, billing_subscription_status, billing_cancel_at, billing_last_payment_status)
- automation.cvs(id, user_id, title, template_id, ats_score, is_public, last_edited, created_at)
- automation.job_applications(id, user_id, company, role, status 'saved'|'applied'|'interview'|'offer'|'rejected',
  applied_date text YYYY-MM-DD, job_url, created_at)
- automation.payments(id, user_id, gateway, gateway_order_id, amount, currency, status
  e.g. 'SUCCESS'|'PAID'|'FAILED'|'USER_DROPPED'|'PENDING', created_at)
- automation.email_suppressions(email, reason)
- automation.email_messages(id, user_id, recipient, email_type, category, provider,
  provider_message_id, idempotency_key UNIQUE, status, error, created_at, sent_at, failed_at)

EMAIL SENDING RULES (apply to every user email):
1. Skip if the email is in automation.email_suppressions.
2. Consent: category 'offers' requires email_prefs->>'offers' = 'true'; 'career_tips' requires
   email_prefs->>'career_tips' = 'true'; 'product_updates' requires email_prefs->>'product_updates' = 'true'.
   Category 'transactional' (onboarding help and messages about the user's own account/data) needs no opt-in.
3. Idempotency: BEFORE sending, run
   INSERT INTO automation.email_messages (user_id, recipient, email_type, category, provider, idempotency_key, status)
   VALUES (..., 'resend', '<key>', 'queued') ON CONFLICT (idempotency_key) DO NOTHING RETURNING id;
   If no row comes back, do NOT send (already sent). Each prompt gives the key format.
4. Send with an HTTP Request node: POST https://api.resend.com/emails, credential "Resend",
   JSON body {from: "CV Prime <hello@cv-prime.in>", to, subject, html, reply_to: "support@cv-prime.in"}.
5. On success UPDATE automation.email_messages SET status='sent', provider_message_id=<resend id>, sent_at=now()
   WHERE id=<id>. On failure SET status='failed', error=<message>, failed_at=now(). Continue on error per item.
6. Every email: short, plain, mobile-friendly HTML, one clear button, footer with
   "Manage emails: https://cv-prime.in/api/newsletter/unsubscribe?token={{unsubscribe_token}}".
7. Never invent statistics, salaries, success rates or testimonials in any generated text.
8. Process users in batches of 20 with a 1-second wait between batches. Max 300 emails per run.
Ops alerts go to Telegram credential "Ops Telegram", chat ID <YOUR_CHAT_ID>.
```

> Replace `hello@cv-prime.in` / `support@cv-prime.in` with your verified Resend sender, and `<YOUR_CHAT_ID>`.

---

## #5 — Daily job-market content

```
Build a workflow "05 Daily Job-Market Post".

Trigger: Schedule, every day at 07:30.

Steps:
1. Fetch fresh India job data from 2–3 RSS/HTTP sources I'll fill in (create placeholder HTTP Request
   nodes named "Source 1", "Source 2", "Source 3" returning job titles + companies + locations,
   e.g. Adzuna India API https://api.adzuna.com/v1/api/jobs/in/search/1 with app_id/app_key params,
   and job-board RSS feeds).
2. Merge results, normalise to {title, company, location, date}, drop duplicates and anything older than 3 days.
3. Code node: count postings per normalised role title, take the top 10.
4. LLM node (credential "LLM"): write, from ONLY these counts and titles —
   a) a LinkedIn post (max 1,200 chars): "Roles hiring this week in India" + one practical CV tip per top-3 role,
      ending with "Build an ATS-friendly CV free: https://cv-prime.in/ai-cv-maker"
   b) a WhatsApp channel message (max 600 chars, emojis ok)
   c) a newsletter section (HTML, 150 words).
   Do not state numbers that are not in the input. Do not claim these are "all" jobs in India.
   Link role names to https://cv-prime.in/resume-builder/<role-slug> only for slugs I list in a Set node
   called "Known role slugs" (leave it with placeholders: software-engineer, data-analyst, etc.).
5. Append a row to Google Sheet "CV Prime Content Queue" (date, linkedin, whatsapp, newsletter, status='draft').
6. Send the LinkedIn draft to Telegram with two inline buttons "Approve" / "Skip".
   (Use a Wait node "On webhook call" / Telegram callback.) On Approve: post to LinkedIn
   (LinkedIn node, organisation page) and set the sheet row status='posted'. On Skip: status='skipped'.
   If no response in 6 hours, leave as draft.
```

---

## #6 — Signup onboarding drip

```
Build a workflow "06 Onboarding Drip". The app already sends the Day-0 welcome email — do not send one.

Trigger: Schedule, every hour.

Step 1 — Postgres "CV Prime DB": find users who signed up 1–8 days ago:
  SELECT u.*, (SELECT count(*) FROM automation.cvs c WHERE c.user_id=u.id) AS cv_count,
         (SELECT max(ats_score) FROM automation.cvs c WHERE c.user_id=u.id) AS best_ats
  FROM automation.users u
  WHERE u.created_at BETWEEN now() - interval '8 days' AND now() - interval '20 hours'
    AND u.plan = 'free'
    AND u.email NOT IN (SELECT email FROM automation.email_suppressions);

Step 2 — Code node: decide AT MOST ONE email per user per run, first match wins:
  - "onb_d1_first_cv": signed up ≥ 20h ago AND cv_count = 0.
    Subject "Your CV in 3 minutes — paste a job, we do the rest". CTA https://cv-prime.in/ai-cv
  - "onb_d2_ai_key": signed up ≥ 44h ago AND has_ai_key = false.
    Subject "One quick step to unlock AI rewrites". Explain CV Prime uses your own free/cheap
    OpenRouter key, it's stored encrypted, takes 2 minutes. CTA https://cv-prime.in/settings
  - "onb_d4_ats": signed up ≥ 92h ago AND cv_count > 0 AND pdf_exports_used = 0.
    Subject "Is your CV passing ATS filters?" (if best_ats is not null mention "your current score is {{best_ats}}/100").
    CTA https://cv-prime.in/dashboard
  - "onb_d7_checkin": signed up ≥ 164h ago. Subject "Anything stopping you?" — a plain-text-style
    founder note asking what they're stuck on, reply-to support. No button.
  Skip a user if none match.

Step 3 — Send following the EMAIL SENDING RULES. Category 'transactional'.
  email_type = the rule name (e.g. onb_d1_first_cv). idempotency_key = '<email_type>:<user_id>'.

Step 4 — At the end, Telegram summary: "Onboarding drip: X sent (d1 a, d2 b, d4 c, d7 d), Y skipped, Z failed" — only if X+Z > 0.
```

---

## #7 — Free export-limit upgrade nudge

```
Build a workflow "07 Export Limit Upgrade Nudge".

Trigger: Schedule, every 30 minutes.

Step 1 — Postgres: free users who have used all 3 free PDF exports and are not Pro:
  SELECT * FROM automation.users
  WHERE plan='free' AND pdf_exports_used >= 3
    AND email NOT IN (SELECT email FROM automation.email_suppressions);

Step 2 — Email A "upgrade_limit_hit" (category 'transactional' — it's about their own account limit):
  idempotency_key 'upgrade_limit_hit:<user_id>'.
  Subject "You've used your 3 free PDF exports". Body: their CVs stay saved and editable; Pro is ₹999
  one-time (not a subscription) for unlimited exports, no watermark, all premium templates.
  CTA https://cv-prime.in/pricing.

Step 3 — Reminder "upgrade_limit_reminder" (category 'offers' — ONLY if email_prefs->>'offers'='true'):
  Only for users where an email_messages row with idempotency_key 'upgrade_limit_hit:<user_id>' has
  status='sent' and sent_at < now() - interval '48 hours', and the user is still plan='free'.
  idempotency_key 'upgrade_limit_reminder:<user_id>'. Subject "Still job hunting? Finish strong with Pro".
  Include a placeholder for a coupon code variable {{COUPON}} that is EMPTY by default — if empty, omit the coupon line.

Never send more than these two emails per user, ever.
```

---

## #8 — Abandoned checkout recovery

```
Build a workflow "08 Abandoned Checkout Recovery". The app already emails users on FAILED payments —
this workflow only handles checkouts that were started but never completed.

Trigger: Schedule, every 30 minutes.

Step 1 — Postgres:
  SELECT p.id AS payment_id, p.gateway_order_id, p.amount, p.status, p.created_at, u.*
  FROM automation.payments p JOIN automation.users u ON u.id = p.user_id
  WHERE p.status NOT IN ('SUCCESS','PAID','FAILED')
    AND p.created_at BETWEEN now() - interval '24 hours' AND now() - interval '1 hour'
    AND u.plan = 'free'
    AND NOT EXISTS (SELECT 1 FROM automation.payments s WHERE s.user_id=p.user_id
                    AND s.status IN ('SUCCESS','PAID') AND s.created_at >= p.created_at)
    AND u.email NOT IN (SELECT email FROM automation.email_suppressions);

Step 2 — Keep only the latest row per user (Code node).

Step 3 — Email "checkout_abandoned" (category 'transactional'), idempotency_key 'checkout_abandoned:<user_id>'
  (one recovery email per user lifetime). Subject "Your CV Prime Pro upgrade didn't go through".
  Body: no money was taken for an incomplete checkout; if money was debited, reply and we'll sort it;
  CTA "Complete upgrade" → https://cv-prime.in/pricing. Mention UPI, cards and netbanking are supported.

Step 4 — Telegram: "Abandoned checkout: <email> ₹<amount> order <gateway_order_id>" per user emailed.

Optional (leave disabled): WhatsApp node branch (WATI/Interakt HTTP request) — only enable once I
collect WhatsApp opt-in; we do not store phone numbers today.
```

---

## #9 — Job tracker reminders

```
Build a workflow "09 Job Tracker Reminders".

Trigger: Schedule, every day at 09:15.

Step 1 — Postgres, two queries:
  A) Follow-ups due:
     SELECT j.*, u.email, u.full_name, u.unsubscribe_token, u.email_prefs
     FROM automation.job_applications j JOIN automation.users u ON u.id=j.user_id
     WHERE j.status='applied' AND j.applied_date ~ '^\d{4}-\d{2}-\d{2}$'
       AND j.applied_date::date BETWEEN current_date - 14 AND current_date - 7;
  B) Interviews:
     SELECT j.*, u.email, u.full_name, u.unsubscribe_token, u.email_prefs
     FROM automation.job_applications j JOIN automation.users u ON u.id=j.user_id
     WHERE j.status='interview' AND j.created_at > now() - interval '60 days';
  Exclude suppressed emails.

Step 2 — Group by user so each user gets ONE email per day max, combining their items.

Step 3 — Email (category 'transactional' — it's about jobs they're tracking):
  - For A items: email_type 'tracker_followup', idempotency_key 'tracker_followup:<job_id>'.
    Subject "Time to follow up with {{company}}?" (or "Follow-ups due for 3 applications").
    Include a short, polite follow-up email template they can copy, with {{role}} and {{company}} filled in.
    CTA https://cv-prime.in/job-tracker
  - For B items: email_type 'tracker_interview_prep', idempotency_key 'tracker_interview_prep:<job_id>'.
    Subject "Interview at {{company}} — a quick prep checklist". 5-point generic prep checklist
    (research company, STAR stories, questions to ask, re-read your CV, logistics). CTA https://cv-prime.in/job-tracker
  When combining, insert one email_messages row per job (each with its own idempotency key) and only
  include jobs whose insert returned a row; if none returned a row, send nothing.
```

---

## #10 — Share-link referral loop

```
Build a workflow "10 Share Link Referral Loop". (Phase 1 = email kit + milestone alert. Rewards are
approved manually because the app has no referral/coupon system yet.)

Trigger: Schedule, every day at 11:00.

Step 1 — Postgres: users with at least one public CV:
  SELECT u.*, c.id AS cv_id, c.title FROM automation.cvs c JOIN automation.users u ON u.id=c.user_id
  WHERE c.is_public = true AND u.email NOT IN (SELECT email FROM automation.email_suppressions);

Step 2 — Email "share_kit" (category 'transactional'), idempotency_key 'share_kit:<cv_id>'.
  Subject "Your CV is live — here's how to share it". Include the link https://cv-prime.in/share/<cv_id>,
  plus 2 ready-to-copy LinkedIn post texts (one "open to work", one "just updated my CV") and a
  LinkedIn share URL: https://www.linkedin.com/sharing/share-offsite/?url=<encoded share link>.

Step 3 — Visit milestones via PostHog (credential "PostHog"):
  HTTP POST https://app.posthog.com/api/projects/<PROJECT_ID>/query/ with HogQL
  "SELECT properties.$pathname AS path, count() AS views FROM events
   WHERE event IN ('$pageview','page_viewed') AND properties.$pathname LIKE '/share/%'
   AND timestamp > now() - INTERVAL 30 DAY GROUP BY path"
  (note: only visitors who accepted analytics cookies are counted).
  Match path → cv_id. For each cv with views >= 5:
  - Email "share_milestone_5" (category 'product_updates', requires consent), idempotency_key 'share_milestone_5:<cv_id>':
    "Your CV has been viewed 5+ times" + invite them to share CV Prime with friends.
  - Telegram to me: "Referral candidate: <email>, cv <cv_id>, <views> views — approve reward?" (manual action).
```

---

## #11 — Testimonial and review harvester

```
Build a workflow "11 Offer → Testimonial Harvester".

Trigger: Schedule, every day at 18:00.

Step 1 — Postgres:
  SELECT j.id AS job_id, j.company, j.role, u.* FROM automation.job_applications j
  JOIN automation.users u ON u.id=j.user_id
  WHERE j.status='offer' AND u.email NOT IN (SELECT email FROM automation.email_suppressions);
  Keep one row per user (latest job).

Step 2 — Email "offer_congrats" (category 'transactional'), idempotency_key 'offer_congrats:<user_id>'
  (once per user, ever). Subject "Congratulations on the offer from {{company}}! 🎉".
  Warm 3-line note, then: "Would you share 2 lines about how CV Prime helped?" button →
  Tally form https://tally.so/r/<FORM_ID>?email={{email}}&role={{role}}&company={{company}}.
  Say clearly it's optional and we'll only publish with their permission.

Step 3 — Second workflow trigger (same workflow, separate branch): Webhook node for Tally submissions
  (fields: name, email, quote, rating 1–5, permission_to_publish yes/no, linkedin_url optional).
  - Append to Google Sheet "CV Prime Testimonials" with status='pending'.
  - Telegram to me with the quote and buttons "Approve" / "Reject"; update the sheet status accordingly.
  - If rating >= 4 AND permission_to_publish = yes: email "review_request" (category 'transactional'),
    idempotency_key 'review_request:<email>', asking for a Google review at <GOOGLE_REVIEW_LINK>.
  Never publish or edit a testimonial automatically.
```

---

## #12 — College & placement-cell B2B outreach

```
Build a workflow "12 College Outreach Sequence". IMPORTANT: send from the separate outreach mailbox
(credential "Gmail Outreach"), never from Resend or the main cv-prime.in transactional domain.

Data: Google Sheet "CV Prime B2B Leads" with columns:
  college, city, contact_name, title, email, linkedin, source, status, step, last_sent_at, notes.
  status values: new | verified | invalid | in_sequence | replied | won | lost | unsubscribed.

Workflow A — Verify (Schedule, daily 10:00): rows with status='new' → HTTP Request to Hunter Email
  Verifier (https://api.hunter.io/v2/email-verifier?email=..&api_key=..). result 'deliverable' → status='verified',
  else 'invalid'.

Workflow B — Send (Schedule, Mon–Fri 10:30): take up to 20 rows where
  (status='verified' AND step empty) OR (status='in_sequence' AND last_sent_at <= today-4 days AND step < 3).
  LLM node (credential "LLM") personalises the opener using only college/city/title — no invented facts.
  Sequence:
   - Step 1: "Free CV workshop + Pro access for your final-year batch" — offer: a free 45-min online
     ATS/CV session for students + bulk Pro licences for the batch at a placement-cell price (placeholder {{PRICE}}).
     CTA: reply or book <CALENDLY_LINK>.
   - Step 2 (4 days later, reply in same thread): one-line bump + link to https://cv-prime.in/fresher-resume
   - Step 3 (4 days later): polite close-the-loop email.
  Every email: plain text, signature with my name/phone, and "Reply 'stop' and I won't email again."
  Send via Gmail, then update step, last_sent_at, status='in_sequence'. Wait 60–120 random seconds between sends.

Workflow C — Replies (Gmail Trigger on the outreach inbox, every 5 min): match sender to a lead row.
  If body contains stop/unsubscribe/not interested → status='unsubscribed'. Otherwise status='replied'
  and send me a Telegram alert with college, contact and the reply snippet. Any status other than
  verified/in_sequence must stop the sequence.
```

---

## #13 — Daily KPI digest

```
Build a workflow "13 Daily KPI Digest".

Trigger: Schedule, every day at 08:45.

Postgres "CV Prime DB" — run these (yesterday = previous calendar day in Asia/Kolkata):
 1. New signups yesterday and last 7 days: count(*) FROM automation.users by created_at.
 2. Activation (yesterday's signups): % with ≥1 CV, % with has_ai_key = true, % with pdf_exports_used > 0.
 3. CVs created yesterday: count FROM automation.cvs.
 4. Public CVs total: count where is_public.
 5. Payments yesterday: count and sum(amount) WHERE status IN ('SUCCESS','PAID'); also count of FAILED
    and of other non-success statuses (abandoned).
 6. Total Pro users: count where plan='pro'; free users at the export limit: plan='free' AND pdf_exports_used>=3.
 7. Jobs tracked yesterday; offers recorded total.
 8. Emails yesterday from automation.email_messages grouped by status (sent/failed/suppressed) and by email_type (top 5).
 9. Same metrics for the same weekday last week, to show ▲/▼ change.

Code node: format a compact Telegram message (Markdown) like:
 "📊 CV Prime — <date>
  Signups 23 (▲4 vs last wk) · 7d 140
  Activation: CV 61% · AI key 34% · Export 22%
  Revenue ₹4,995 (5) · failed 1 · abandoned 3
  Pro total 212 · at export limit 87
  Emails: 140 sent · 2 failed"
Send to Telegram "Ops Telegram". If a query fails, still send the rest with "n/a".
```

---

## #14 — Churn / cancellation alert & win-back

```
Build a workflow "14 Churn Alert & Win-back". The app already sends the cancellation confirmation email —
do not send another confirmation.

Trigger: Schedule, every 2 hours.

Step 1 — Postgres:
  SELECT * FROM automation.users
  WHERE (billing_cancel_at IS NOT NULL OR billing_subscription_status IN ('CANCELLED','EXPIRED')
         OR billing_last_payment_status = 'FAILED')
    AND email NOT IN (SELECT email FROM automation.email_suppressions);

Step 2 — For each user, Telegram alert to me ONCE: use an email_messages row with
  email_type 'internal_churn_alert', category 'transactional', recipient = my ops address, provider 'telegram',
  idempotency_key 'churn_alert:<user_id>:<billing_cancel_at or status>' — only alert if the insert returns a row.
  Message: "⚠️ Churn: <email> plan=<plan> status=<status> cancel_at=<date>".

Step 3 — 1 day after first alert: exit survey email "exit_survey" (category 'transactional'),
  idempotency_key 'exit_survey:<user_id>'. Subject "Quick question — what could we have done better?"
  One-click options as links to a Tally form https://tally.so/r/<EXIT_FORM_ID>?reason=<x>&email=<email>
  (too expensive / got a job 🎉 / missing feature / AI key hassle / other).

Step 4 — 14 days after first alert, if plan is now 'free' and email_prefs->>'offers'='true':
  win-back email "winback_14d" (category 'offers'), idempotency_key 'winback_14d:<user_id>'.
  Subject "Your CVs are still here when you need them". Mention Pro ₹999 one-time (lifetime, no renewals).
  Coupon line only if {{COUPON}} is set.

Step 5 — Tally exit-survey webhook branch: append responses to Google Sheet "CV Prime Exit Survey"
  and post to Telegram.
```

---

## Caveats to check before going live

- **Consent model.** Onboarding, tracker and limit emails are labelled `transactional` because they're about
  the user's own account. Upgrade reminders, milestones and win-back are `offers`/`product_updates`
  and only reach users who opted in (all categories default to off). Adjust if your legal advice differs.
- **Coupons and referral rewards** are placeholders — the app has no coupon or referral system yet.
  Don't grant Pro manually in the database to reward someone: the daily entitlement reconcile cron may
  treat a Pro profile without a payment as a discrepancy. Build an app-side "comp Pro" path first.
- **`job_applications` has no status-change timestamp**, so #9 uses `applied_date` and per-job
  idempotency instead of "moved to interview N days ago".
- **#10 visit counts** only include visitors who accepted analytics cookies.
- **#12 cold email**: use a separate domain with SPF/DKIM/DMARC set up, warm it up, keep ≤20/day at first.
- The SQL in Step 0 was written against the repo's migrations but not run against your live project —
  review it in the Supabase SQL editor first.
