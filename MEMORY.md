# CV Prime - Codex Memory
# Agents read this at start of every session. Update it after every task.
# Format: [ ] = not done, [x] = done, [~] = in progress

---

## PROJECT STATUS
Last updated: 2026-06-19
Current phase: Phase 6 - Launch polish and audit fixes
Overall completion: 97%

---

## COMPLETED FEATURES
(agents append to this list as features ship)

- Next.js 14 App Router foundation scaffolded in the repo root with TypeScript strict mode.
- Tailwind CSS configured with project-specific design tokens and global styles.
- Absolute `@/*` imports configured and validated.
- ESLint and Prettier configured and passing.
- Supabase browser/server helpers added.
- AES-256-GCM key encryption and decryption helper added.
- Upstash Redis rate-limit helper added.
- Typed CV domain models added in `types/cv.types.ts`.
- Middleware added for dashboard protection and auth redirects.
- Auth callback route added for OAuth and email-link session exchange.
- Login and signup pages implemented with email/password, Google OAuth, magic links, and password reset.
- Local shadcn/ui foundation added for reusable button, input, label, card, badge, separator, and skeleton components.
- Typed Supabase database contract added in `types/database.types.ts`.
- CV editor foundation added with Zustand state, section reordering, auto-save, undo/redo, live preview, and template switching.
- CV editor routes and CRUD API scaffolded at `/editor/[cvId]` and `/api/cvs/[cvId]`.
- Eight CV templates added with a shared 794px A4 layout frame and free/pro gating metadata.
- Dashboard CV creation flow added with a new `/api/cvs` create endpoint, free-plan CV cap enforcement, and dashboard cards that open the editor.
- Marketing homepage upgraded into a real SaaS landing page with hero copy, feature sections, template previews, and signup/login CTAs.
- CV templates rebuilt into distinct visual variants instead of one shared layout with minor styling changes.
- Landing page rebuilt around a clearer paid-product story with visible CV previews, ATS readiness, pricing, and FAQ sections.
- `/pricing` and `/templates` marketing routes added so public navigation no longer dead-ends.
- Second visual overhaul added a professional SaaS homepage with full product-scene hero, redesigned dashboard app shell, richer CV cards, refreshed pricing/templates pages, and stronger editor toolbar.
- Third visual/product pass upgraded the brand system with display typography, premium gradients, product-specific hero scenes, richer templates/pricing/auth pages, a command-center dashboard, upgraded settings, stronger CV cards, and a more polished editor shell.
- High-fidelity sample CV data and actual rendered template previews now support the public templates gallery and homepage product scene.
- Template rendering key warnings fixed by wrapping dynamically rendered CV sections in keyed fragments.
- Phase 3 AI module implemented with encrypted BYOK settings, OpenRouter key validation, ATS scoring, AI bullet rewrites, cover letter generation, JD tailoring, standard NO_KEY/KEY_INVALID/RATE_LIMITED handling, and editor UI panels.
- Browserless PDF export implemented with authenticated export route, plan-aware watermarking, standalone A4 HTML rendering, and an editor download button.
- Job-first AI CV flow added at `/ai-cv`: paste JD, upload or paste CV text, choose template, generate a tailored CV, view AI score/suggestions, then edit or export.
- PDF/DOCX/TXT CV upload parsing added for the AI generation flow.
- Free tier export gating changed to 3 successful PDF downloads before upgrade, replacing the earlier 2-CV creation cap.
- Jest setup added with passing tests for AES key encryption/decryption and API key settings save/delete flows.
- Signup-first CV flow enforced: `/create-with-ai` now redirects to `/signup?next=/ai-cv`, and marketing CV CTAs send users into account creation before the AI CV workflow.
- Unauthenticated public AI generation was removed; role-tailored AI CV generation now runs only inside the authenticated workspace using the user's encrypted OpenRouter key.
- Dashboard CV actions shipped: inline rename, clone, delete with confirmation, public share toggle, and copyable public share links.
- Public CV share page added at `/share/[cvId]` for CVs explicitly toggled public.
- Phase 4 job tracker shipped with Saved/Applied/Interview/Offer/Rejected columns, add-job form, drag status updates, delete action, 3-job free limit, and unlimited Pro tracking.
- Jest coverage added for the authenticated AI CV wizard, dashboard CV card actions, and job tracker plan/add-job behavior.
- Phase 5 Razorpay test-mode payment flow shipped: authenticated server-side order creation, client checkout button, browser-return signature verification, payment record insertion, and Pro plan unlock after captured/paid status.
- Razorpay webhook endpoint added at `/api/webhooks/razorpay`; it verifies the raw-body HMAC signature before parsing and upgrades users on `payment.captured`.
- Pricing page now has monthly/annual plan toggle, INR pricing, and Razorpay checkout for Pro.
- Dashboard and PDF export plan gates now surface a Razorpay upgrade modal instead of only linking to pricing.
- Settings now includes billing controls with current plan, export usage, and a test-mode Pro cancellation/downgrade action.
- Jest coverage added for Razorpay helper signatures/order payloads, checkout button, pricing toggle, upgrade modal, and billing cancellation.
- Phase 6 audit fixes added: real rendered template previews on the landing page and AI template chooser, signup-first CV routing, metadata across major routes, sitemap/robots, privacy/terms pages, cookie consent banner, consent-gated PostHog events, launch OG image, and marketing footer links.
- Landing demo section refined without changing the wider landing page: the workflow block now uses a darker premium color treatment, explicit click/tap guidance, step count, active-screen label, and previous/next controls.
- Production PDF export hotfix added: export checks now fall back to a short-lived HMAC-signed token when the database token RPC is unavailable, keep authenticated CV ownership enforced, tolerate temporary quota-provider permission failures, and preserve the user-initiated print window across the async check.
- Removed the accidental 3-resume-draft gate from AI generation, manual CV creation, and cloning. Free accounts now have unlimited drafts as originally decided; only successful PDF exports are limited to 3 before upgrade.
- Fixed template-to-export consistency: editor autosave now persists the selected template, export synchronizes pending editor/template changes before opening print, post-generation AI template changes update the saved CV immediately, and free users see an explicit Pro gate instead of a silent Modern-template substitution.
- Production build and TypeScript checks pass.
- Autonomous growth-engineer pass (2026-07-09): fixed `/cv-prime-vs-linkedin-resume` missing from `app/sitemap.ts`, added 8 live pages missing from `app/robots.ts`'s allow-list, and removed a fabricated `aggregateRating` plus deduplicated a contradictory 36/35-role `featureList` claim in `app/layout.tsx` (actual count is 49, matching `lib/roleData.ts`). Note: six prior open PRs (#5, #7, #8, #9, #10, #11, #12) independently found and fixed versions of these same bugs since 2026-06-22, but none were merged, so `main` still had them — worth merging one PR from this cluster and closing the rest as duplicates rather than letting more pile up.

---

## IN PROGRESS
(agents note what they're currently building)

- Phase 1 external provisioning still needed: Supabase project/database setup, Vercel env dashboard, and deployment wiring.
- Supabase schema application and RLS policies still need to be run in the real Supabase project.
- Vercel environment variables still need to be mirrored in the production dashboard.
- Editor UI is implemented and build-passing, but authenticated editor QA still needs to be done with a real Supabase session.
- Dashboard responsive QA still needs to be done with an authenticated Supabase session.
- Phase 3 live QA still needs real environment values and database columns: OpenRouter BYOK save/validate, AI job CV generation against real uploads/JDs, Browserless PDF export, and Supabase score/history/export-count persistence.
- LinkedIn PDF import is still not built; the current parser supports normal PDF/DOCX/TXT CV uploads, not LinkedIn import automation.
- Authenticated AI CV live QA still needs a real OpenRouter key and Supabase session. Text-based PDFs, DOCX, and TXT files should parse; scanned/image-only PDFs require pasting CV text into the fallback field.
- Razorpay live QA still needs real test-mode `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`, and a configured webhook secret/public webhook URL. Unit tests verify signing logic, but the final Razorpay dashboard transaction test is not done.
- Production Supabase export-token/profile-update permissions still need to be reconciled. The emergency PDF fallback is ownership-safe and rate-limited, but it may not increment `pdf_exports_used` while the production RPC or profile update is unavailable.

---

## KEY DECISIONS MADE
(agents document non-obvious decisions here so future agents don't re-debate them)

- PDF export uses Browserless.io REST API, not Puppeteer, to avoid Vercel cold-start problems.
- AI uses a BYOK model: the user supplies their own OpenRouter key, encrypted with AES-256-GCM in Supabase.
- Default OpenRouter model is `openai/gpt-4o-mini`. It is cheaper and still good enough for ATS analysis and bullet rewrites.
- The main product loop is now JD-first: paste JD -> upload existing CV -> AI generates a tailored CV -> choose template -> download/export.
- Users are advised to set an OpenRouter key limit and delete the key after use if they only need it temporarily.
- Free plan monetization is 3 successful PDF downloads before upgrade, not a hard limit on draft CV count.
- Rate limiting uses Upstash Redis sliding window limits.
- Zustand is reserved for CV editor state; everything else uses React Server Components + Supabase directly.
- Form validation uses react-hook-form + zod everywhere.
- Payments use Razorpay only for this build.
- Error monitoring is kept vendor-free in this build. Product analytics use consent-gated PostHog only.
- Local dev server starts on port 3002.
- Dashboard creation now routes new users into a real CV record instead of a placeholder screen.
- Marketing copy now intentionally uses broader "job seekers" language throughout the app.
- Template design now prioritizes commercial differentiation: Classic, Modern, Minimal, Executive, Creative, Technical, Academic, and Premium each use distinct structure, spacing, and visual hierarchy.
- Visual direction now uses a sharper slate/white/cyan SaaS system instead of the earlier beige MVP look.
- Current product narrative is diagnosis -> repair -> ship: the UI should show rejection risk, content fixes, template selection, and export confidence instead of generic template-builder claims.
- Public copy uses broad "job seekers" positioning instead of India-specific tagline language.
- Phase 3 AI endpoints standardize on `gpt-4o-mini`, JSON-mode responses where structured output is required, and 20 requests per user per hour via Upstash rate limiting.
- CV creation is signup-first. `/create-with-ai` exists only as a redirect into `/signup?next=/ai-cv` so users create an account before generating or saving role-tailored CVs.
- User OpenRouter keys are managed only in authenticated settings. Saved keys are encrypted before storage, can be deleted from CV Prime, and users are advised to revoke temporary keys in OpenRouter after use.
- The only unauthenticated API exception is the Razorpay webhook, which verifies the raw HMAC signature before parsing or mutating payment data.
- CV upload parsing uses `pdf-parse` for text-based PDFs, `mammoth` for DOCX, and UTF-8 text for TXT. OCR is not included yet, so image-only PDFs need pasted CV text.
- Phase 4 monetization keeps drafts unlimited, gates free users after 3 PDF exports, and limits free job tracking to 3 jobs.
- Phase 5 uses Razorpay Orders + Checkout for test-mode Pro upgrades. Checkout return verification uses `order_id|payment_id` HMAC-SHA256 with `RAZORPAY_KEY_SECRET`; webhooks use raw request-body HMAC with `RAZORPAY_WEBHOOK_SECRET` when present, falling back to `RAZORPAY_KEY_SECRET`.
- Pro pricing is INR-only for this build: Rs 249 monthly and Rs 1,999 annual, with annual messaging shown as 33% savings.
- Because recurring Razorpay subscription IDs are not in the current schema yet, the cancellation path is a test-mode local downgrade: it moves `profiles.plan` back to `free` immediately.
- PDF export uses a dynamic server renderer inside the route to satisfy Next.js App Router build constraints while still rendering the actual template components.
- If `npm run build` is run while the local dev server is still active, restart the dev server on port 3002 afterward. Otherwise Next can serve stale CSS chunk links and the site may appear unstyled locally.
- Analytics events are consent-gated and intentionally avoid CV text, job descriptions, API keys, and payment secrets.
- PDF export uses the database-backed single-use token when available. A 10-minute stateless token signed with `ENCRYPTION_SECRET` is the production fallback; it is bound to the authenticated user and CV and cannot be forged or reused for another CV.
- The saved `cvs.template_id` is the source of truth for preview, editor, and print. Export must synchronize pending template changes before issuing a print token; print must never silently replace the selected design.

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
- [ ] profiles.openrouter_key_enc (text)
- [ ] profiles.openrouter_key_hint (text)
- [ ] profiles.plan (text DEFAULT 'free')
- [ ] profiles.pdf_exports_used (integer DEFAULT 0)

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
- [ ] RAZORPAY_WEBHOOK_SECRET
- [ ] RESEND_API_KEY
- [ ] UPSTASH_REDIS_REST_URL
- [ ] UPSTASH_REDIS_REST_TOKEN
- [ ] NEXT_PUBLIC_POSTHOG_KEY
- [ ] NEXT_PUBLIC_APP_URL

---

## KNOWN ISSUES / TECH DEBT
(agents log problems they discovered but didn't fix)

- Production build passes, but Next.js emits a Supabase Edge Runtime warning from `@supabase/ssr` because middleware imports the server client path. This is a warning, not a TypeScript/build failure, and should be reviewed before deployment hardening.
- Next.js dev/build logs can emit webpack cache-size warnings from large serialized strings during template-heavy page compilation.

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
resend: 3.x
razorpay: 2.x
pdf-parse: 2.x
mammoth: 1.x
