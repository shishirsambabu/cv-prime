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
- Growth-engineering audit (PR #66): fixed a real 404 (`/resume-builder/[role]` linked to `/salary/${slug}` for all 50 roles when `salaryDataMap` only covers 35 — link now guarded), removed duplicate/conflicting page-level `SoftwareApplication` JSON-LD on `/ai-cv-maker`, `/ats-checker`, `/online-cv-maker` (the sitewide one in `app/layout.tsx` already covers it), fixed the sitewide `StickyCTA` default and 85 in-page CTAs across 55 pages that pointed to bare `/signup` (→ `/dashboard`) instead of `/signup?next=/ai-cv`, wrote unique fact-based meta descriptions for the 7 `cv-prime-vs-*` pages that shared one templated description, synced `public/llm.txt`/`public/llms.txt` (they had drifted apart) and added `/llms.txt` to `robots.ts`, and removed dead duplicate entries from `sitemap.ts`.
- Growth-engineering audit (PR #73): linked the orphaned `/how-to-write-a-cv` guide (built, sitemapped, GEO-bot-allowlisted, but zero inbound internal links) from the site-wide footer Guides column and from `/resume-format`, `/fresher-resume`, `/resume-tips`. That PR also added page-level `SoftwareApplication` JSON-LD to all 18 `cv-prime-vs-*` pages plus `/cv-prime-review` — **this was a mistake**, reintroducing the exact duplicate/conflicting-schema pattern PR #66 had just removed elsewhere, since `app/layout.tsx` already emits a sitewide `SoftwareApplication` block on every page. Follow-up commit reverted the 19 page-level additions (kept the footer/cross-link fix). **Lesson for future agents: `app/layout.tsx` already covers `SoftwareApplication` sitewide — never add a page-level one. Grep `app/layout.tsx` for existing sitewide JSON-LD types before adding any per-page schema, comparison pages included.**
- Growth-engineering audit (2026-09-26, pass 1): fixed GEO/AISO drift in `public/llm.txt`/`public/llms.txt` — the `ai-engineer` role (added in PR #75) was completely absent from both files' enumerated 50-role list and every hub role-count claim still said "50 roles" even though `lib/roleData.ts` now has 51 roles and the salary/cover-letter/ATS-guide hubs only covered 36 of them (an AI system citing cv-prime.in for e.g. "chartered accountant salary India" per the file's own claim would land on a 404). Corrected all role-count labels, added the missing "51. AI Engineer" list entry, added `ai-engineer` to the `cv-examples` role enumeration, and rewrote the role-coverage summary paragraph. Also fixed a matching stale "50-role" comment in `app/sitemap.ts:11`. Additionally de-orphaned `/skills-for-resume` (sitemapped at priority 0.9 with only one inbound link, from `/how-to-write-a-cv`) by linking it from the site-wide footer's Resources column and from `/resume-tips/skills-section`'s related-links row.
- Growth-engineering audit (2026-09-26, pass 2): closed the ATS-guide role gap flagged above. Added `generateStubAtsGuideData(slug)` to `lib/atsGuideData.ts`, mirroring `lib/interviewData.ts`'s existing stub pattern — it pulls `atsKeywords` from each role's own hand-curated `keySkills` in `lib/roleData.ts` (never invents new keywords) and pairs them with generic, role-agnostic ATS formatting/failure-mode/keyword-strategy advice, so nothing in it is a fabricated fact the way a specific salary figure would be. A fill loop backfills every role missing from the hand-curated map, so `/ats-guide` now covers all 51 roles instead of 36 (verified: `/ats-guide/pharmacist` and 14 other previously-missing role pages now build and appear in `sitemap.xml`). This also fixed two pre-existing latent 404s the same 36-vs-51 gap had caused elsewhere: `app/(marketing)/in-demand-skills-india-2026/page.tsx`'s marquee cards were safe (fixed 8-role list, all pre-existing), but `app/(marketing)/ats-guide/[role]/page.tsx:204` had an unconditional `/salary/${role}` cross-link that would now 404 for the 15 newly-added roles — guarded it the same way PR #66 guarded the equivalent `resume-builder/[role]` link (`role in salaryDataMap` check, falling back to an interview-questions link when absent). Also fixed a hardcoded "50 roles" string in `in-demand-skills-india-2026`'s FAQ copy that should have used the page's own dynamic `rolesAnalyzed` variable (every other reference on that page already did). Re-synced `public/llm.txt`/`public/llms.txt`: `/ats-guide` hub label and the role-coverage summary paragraph now say ATS guides cover all 51 roles. Verified with `tsc --noEmit`, `eslint .`, `npm run build`, and the full Jest suite (46/46 suites, 153/153 tests) before pushing. `atsGuideData.ts`'s stub pattern is now proven safe and reusable — a future pass could apply the same "pull from existing keySkills, keep everything else generic" approach to close the same 15-role gap in `lib/coverLetterData.ts` (salary remains the one file where a stub is NOT safe, per the original reasoning: it would need to either state a real number or omit the numeric figure entirely).

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
- `lib/roleData.ts` has 51 roles (50 + `ai-engineer`, added in PR #75). `lib/atsGuideData.ts` now covers all 51 (stub generator added — see COMPLETED FEATURES). `lib/salaryData.ts` and `lib/coverLetterData.ts` still only hand-curate 36 of them (the same 15 missing in both: business-development-manager, chartered-accountant, embedded-systems-engineer, full-stack-developer, interior-designer, investment-banker, ios-developer, logistics-manager, machine-learning-engineer, network-engineer, pharmacist, react-developer, sales-executive, sap-consultant, scrum-master). `lib/interviewData.ts`, the LinkedIn-headline data, and now `lib/atsGuideData.ts` all solve this with a `generateStub*Data` fallback so every role gets a page. The same pattern was deliberately NOT extended to salary/cover-letter in this pass — auto-generating specific INR salary figures for real roles without human review risks shipping wrong numbers, which is worse than the current (already-guarded, no-404) state. `coverLetterData.ts` is a better next candidate than `salaryData.ts`: cover letter dos/don'ts and sample paragraph structure can be made role-aware using the same `keySkills`-pull technique `atsGuideData.ts` just used, without inventing numeric facts. `salaryData.ts` remains the one file where a stub is genuinely unsafe — it would have to either state a real INR figure or omit the page's core content entirely. A future pass should either hand-write real salary data for these 15 roles, or design a qualitative "salary factors" page (experience level, company tier, city — without a specific number) as a different, safer stub shape.

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
