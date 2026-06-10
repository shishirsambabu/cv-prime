# CV Prime — Codex Memory
# Agents read this at start of every session. Update it after every task.
# Format: [ ] = not done, [x] = done, [~] = in progress

---

## PROJECT STATUS
Last updated: (agent fills this in)
Current phase: Phase 1 — Foundation
Overall completion: 0%

---

## COMPLETED FEATURES
(agents append to this list as features ship)

---

## IN PROGRESS
(agents note what they're currently building)

---

## KEY DECISIONS MADE
(agents document non-obvious decisions here so future agents don't re-debate them)

- PDF export: using Browserless.io REST API, NOT Puppeteer. Reason: Vercel cold
  starts with @sparticuz/chromium are 8–15s and unreliable. Browserless gives
  consistent sub-3s renders.

- AI: BYOK model — user supplies their own OpenAI key. Encrypted AES-256-GCM in
  Supabase profiles.openai_key_enc. Never stored or logged in plaintext.

- Default AI model: gpt-4o-mini. Reason: 100x cheaper than gpt-4o, sufficient
  quality for ATS analysis and bullet rewrites. Power users can opt into gpt-4o.

- Rate limiting: Upstash Redis sliding window. 20 AI requests per user per hour.

- State management: Zustand for CV editor only. Everything else uses React Server
  Components + Supabase directly.

- Form validation: react-hook-form + zod everywhere. No uncontrolled forms.

---

## DATABASE SCHEMA STATE
(agents update this as migrations are applied)

Tables created:
- [ ] profiles
- [ ] cvs
- [ ] cover_letters
- [ ] job_applications
- [ ] payments

Columns added post-init:
- [ ] profiles.openai_key_enc (text)
- [ ] profiles.openai_key_hint (text)
- [ ] profiles.plan (text DEFAULT 'free')

---

## ENVIRONMENT VARIABLES CONFIGURED
(agents tick these as they're added to Vercel + .env.local)

- [ ] NEXT_PUBLIC_SUPABASE_URL
- [ ] NEXT_PUBLIC_SUPABASE_ANON_KEY
- [ ] SUPABASE_SERVICE_ROLE_KEY
- [ ] ENCRYPTION_SECRET
- [ ] BROWSERLESS_TOKEN
- [ ] RAZORPAY_KEY_ID
- [ ] RAZORPAY_KEY_SECRET
- [ ] STRIPE_SECRET_KEY
- [ ] STRIPE_WEBHOOK_SECRET
- [ ] NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
- [ ] RESEND_API_KEY
- [ ] UPSTASH_REDIS_REST_URL
- [ ] UPSTASH_REDIS_REST_TOKEN
- [ ] NEXT_PUBLIC_POSTHOG_KEY
- [ ] SENTRY_DSN
- [ ] NEXT_PUBLIC_APP_URL

---

## KNOWN ISSUES / TECH DEBT
(agents log problems they discovered but didn't fix)

---

## DEPENDENCY VERSIONS PINNED
(agents log exact versions to avoid breaking changes)

next: 14.x
react: 18.x
typescript: 5.x
tailwindcss: 3.x
@supabase/supabase-js: 2.x
zustand: 4.x
react-hook-form: 7.x
zod: 3.x
@dnd-kit/core: 6.x
@upstash/redis: 1.x
@upstash/ratelimit: 1.x
posthog-js: 1.x
@sentry/nextjs: 8.x
resend: 3.x
razorpay: 2.x
stripe: 14.x
