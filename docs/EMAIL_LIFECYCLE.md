# CV Prime — Lifecycle Email & Entitlement Engine

Event-driven transactional email + entitlement integrity built on the existing
Cashfree + Supabase + Upstash stack. This document is the operator's guide.

## Architecture

```
Cashfree webhook ─▶ verify signature ─▶ commit entitlement (plan=pro) ─▶
  record lifecycle_event ─▶ sendEmail() [idempotent] ─▶ email_messages log ─▶
  Resend ─▶ Resend webhook ─▶ delivery/bounce status + suppression
```

Reliability is layered:

1. **Idempotency** — every send claims a unique `email_messages.idempotency_key`
   row *before* calling Resend. Duplicate webhooks, retries and redeploys lose
   the race and no-op. A row still `queued` (never sent) is retried, not skipped.
2. **Entitlement-first** — the purchase email is sent only after the DB confirms
   `plan = 'pro'` (`lib/email/lifecycle.ts → sendPurchaseSuccessEmail`).
3. **Self-healing** — cron jobs reconcile Cashfree truth vs CV Prime entitlements
   and re-drive any stuck/missing purchase email.
4. **Consent** — marketing categories gate on `profiles.email_prefs`; transactional
   mail always sends. Bounces/complaints/unsubscribes land in `email_suppressions`.

## Database (migration `20260830000000_lifecycle_email_engine.sql`)

- `lifecycle_events` — durable event log (idempotency, status, retry).
- `email_messages` — one row per intended send; unique `idempotency_key`.
- `email_suppressions` — hard bounces / complaints / unsubscribe-all.
- `entitlement_repairs` — audit trail of every automated fix.
- `payments (gateway, gateway_order_id)` unique index — payment idempotency.
- `profiles.email_prefs / newsletter_status / unsubscribe_token / welcome_email_sent_at`.

Apply it with `supabase db push` (or paste into the SQL editor) **before deploy**.

## Emails implemented

| Email | Trigger | Category |
|---|---|---|
| Welcome | first sign-in (`auth/callback`, once) | transactional |
| Purchase success | webhook, after entitlement verified | transactional |
| Renewal receipt | webhook, subsequent successful payment | transactional |
| Payment failed | webhook, failed payment status | transactional |
| Cancellation | webhook, terminal subscription status | transactional |
| Newsletter welcome | explicit opt-in | transactional (newsletter) |

Preview them at `/api/dev/email-preview?type=welcome|purchase|payment_failed|renewal|cancellation|newsletter`
(dev only; `&format=text` for the plain-text part).

## Cron jobs (`vercel.json`)

| Path | Schedule | Purpose |
|---|---|---|
| `/api/cron/reconcile-entitlements` | daily 02:00 | full Cashfree↔entitlement sweep + repairs |
| `/api/cron/reconcile-entitlements?recent=1` | hourly | recent purchases only (fast repair) |
| `/api/cron/email-health` | every 15 min | retry stuck `queued` emails |

All require `Authorization: Bearer $CRON_SECRET` (Vercel Cron adds it automatically).

## Admin

`GET /api/admin/entitlement-audit` (allowlisted via `ADMIN_EMAILS`) returns, per
paying customer: plan, subscription status, last paid order, and whether the
purchase email was delivered — sorted so any `P0_PAID_NO_ACCESS` is on top.

## Setup checklist (one-time, requires you)

1. **Resend account** → verify sending domain `cv-prime.in` (SPF, DKIM, DMARC).
2. Create mailboxes/identities: `hello@`, `support@`.
3. Set env in Vercel: `RESEND_API_KEY`, `EMAIL_FROM`, `EMAIL_REPLY_TO`,
   `RESEND_WEBHOOK_SECRET`, `CRON_SECRET`, `ADMIN_EMAILS`.
4. In Resend, add a webhook → `https://cv-prime.in/api/webhooks/resend`
   (events: sent, delivered, bounced, complained, clicked) and copy its
   signing secret into `RESEND_WEBHOOK_SECRET`.
5. Apply the migration to production Supabase.
6. Deploy. Until `RESEND_API_KEY` is set, sends are logged as `queued`/`skipped`
   (no crashes) — nothing is lost; the health cron sends them once the key lands.
