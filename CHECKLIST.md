# CV Prime — Launch Checklist
# Agents tick boxes as they complete each item.
# Do NOT mark done unless you have personally verified it works.

---

## PHASE 1 — Foundation

### Setup
- [ ] Next.js 14 App Router project initialised with TypeScript strict
- [ ] Tailwind CSS configured with custom design tokens
- [ ] shadcn/ui installed and configured
- [ ] Absolute imports configured (@/ paths)
- [ ] ESLint + Prettier configured and passing
- [ ] Supabase project created
- [ ] Supabase types generated and committed
- [ ] All env vars added to .env.local and Vercel dashboard
- [ ] Git repo created and connected to Vercel CI/CD
- [ ] Custom domain cv-prime.in pointed to Vercel

### Database
- [ ] profiles table created with all columns including openai_key_enc
- [ ] cvs table created
- [ ] cover_letters table created
- [ ] job_applications table created
- [ ] payments table created
- [ ] Row Level Security (RLS) enabled on ALL tables
- [ ] RLS policies: users can only read/write their own rows
- [ ] Supabase Storage bucket created for avatars

### Auth
- [ ] Email + password signup works
- [ ] Email magic link works
- [ ] Google OAuth works
- [ ] Auth callback route handles session correctly
- [ ] middleware.ts protects all /dashboard/* routes
- [ ] Unauthenticated users redirected to /login
- [ ] Authenticated users on /login redirected to /dashboard
- [ ] Forgot password flow works
- [ ] Email confirmation flow works (Resend configured)

### Landing page
- [ ] Above-the-fold hero with clear value prop
- [ ] Feature section (ATS score, AI rewrite, templates)
- [ ] Template preview section
- [ ] Pricing section with free/pro comparison
- [ ] FAQ section
- [ ] CTA buttons link to /signup
- [ ] OG image set for social sharing
- [ ] Page speed Lighthouse score > 90

---

## PHASE 2 — CV Editor

### Core editor
- [ ] Zustand cvStore initialised with correct CV JSON shape
- [ ] Left panel: Personal Info form (react-hook-form + zod)
- [ ] Left panel: Work Experience form with add/remove entries
- [ ] Left panel: Education form with add/remove entries
- [ ] Left panel: Skills form (technical, soft, languages)
- [ ] Left panel: Projects form with add/remove entries
- [ ] Left panel: Certifications section
- [ ] Right panel: LivePreview renders from Zustand state
- [ ] LivePreview updates on every keystroke (< 100ms)
- [ ] Section drag-and-drop reordering (dnd-kit)
- [ ] Undo/redo (20 step history in Zustand)
- [ ] Auto-save to Supabase every 30s (only if dirty flag set)
- [ ] Unsaved changes indicator in header
- [ ] Template switcher (dropdown, preview thumbnails)
- [ ] Mobile: editor collapses to single panel with tab switch

### Templates
- [ ] TemplateClassic — tested at 794px width, A4 proportions
- [ ] TemplateModern — tested at 794px width, A4 proportions
- [ ] TemplateMinimal — tested at 794px width, A4 proportions
- [ ] TemplateExecutive — tested at 794px width (Pro gate)
- [ ] TemplateCreative — tested at 794px width (Pro gate)
- [ ] TemplateTechnical — tested at 794px width (Pro gate)
- [ ] TemplateAcademic — tested at 794px width (Pro gate)
- [ ] TemplatePremium — tested at 794px width (Pro gate)
- [ ] All templates pass ATS parser test (score > 85 on Jobscan)
- [ ] All templates render correctly in Browserless PDF export

---

## PHASE 3 — AI + Export

### API key management
- [ ] POST /api/keys/save — encrypts and stores key
- [ ] DELETE /api/keys/delete — wipes key from DB
- [ ] Key validated against OpenAI before saving
- [ ] APIKeySettings.tsx component renders saved hint
- [ ] NoKeyPrompt.tsx shown on all AI features if no key
- [ ] KeyExpiredPrompt.tsx shown on KEY_INVALID response
- [ ] Settings page has step-by-step guide to get OpenAI key
- [ ] Spending limit advice included in guide

### ATS score
- [ ] POST /api/ats-score — auth + rate limit + zod + BYOK
- [ ] Returns score (0-100), missingKeywords[], presentKeywords[], suggestions[]
- [ ] ATSScorePanel.tsx renders score with visual ring
- [ ] Keyword chips show green (present) / red (missing)
- [ ] Score history saved to cvs.ats_score_history (jsonb array)
- [ ] Score history chart shown (Recharts line graph)

### AI writing
- [ ] POST /api/ai-suggest — bullet rewriter, returns 3 alternatives
- [ ] AIAssistPanel.tsx shows 3 alternatives with one-click apply
- [ ] Loading skeleton shown during AI call
- [ ] POST /api/cover-letter — generates from CV + JD + tone
- [ ] Cover letter page renders result with edit capability
- [ ] Tone selector: professional / friendly / executive
- [ ] POST /api/jd-tailor — rewrites summary + reorders bullets for a JD
- [ ] All AI routes: Upstash rate limit 20/hour per user

### PDF export
- [ ] POST /api/export-pdf — calls Browserless REST API
- [ ] Template renders as standalone HTML at 794x1123px
- [ ] A4 PDF returned as download with correct filename
- [ ] Free plan: watermark injected before render
- [ ] Pro plan: no watermark
- [ ] PDF render < 3s (Browserless, not Puppeteer)
- [ ] Tested: all 8 templates export correctly

---

## PHASE 4 — Dashboard + Job Tracker

### Dashboard
- [ ] CV card grid: title, template, last edited, ATS score badge
- [ ] Create new CV button
- [ ] Clone CV action
- [ ] Rename CV (inline edit)
- [ ] Delete CV (with confirm dialog)
- [ ] Max 2 CVs enforced for free plan
- [ ] CV public share link (toggle on CVCard)

### Job tracker
- [ ] Kanban board: Saved / Applied / Interview / Offer / Rejected
- [ ] Add job: company, role, URL, date, notes
- [ ] Drag cards between columns (dnd-kit)
- [ ] Free plan: 3 jobs max
- [ ] Pro plan: unlimited
- [ ] LinkedIn PDF import: parses and pre-fills CV editor

---

## PHASE 5 — Payments

### Razorpay (India)
- [ ] Razorpay order created server-side on checkout click
- [ ] Razorpay checkout modal opens client-side
- [ ] POST /api/webhooks/razorpay — signature verified
- [ ] On success: profiles.plan set to 'pro'
- [ ] Payment record inserted to payments table
- [ ] Subscription cancellation flow handled

### Stripe (Global)
- [ ] Stripe Checkout session created server-side
- [ ] POST /api/webhooks/stripe — signature verified
- [ ] checkout.session.completed → set plan to 'pro'
- [ ] customer.subscription.deleted → set plan to 'free'
- [ ] Payment record inserted to payments table

### Pricing page
- [ ] Free vs Pro comparison table
- [ ] Annual plan toggle (33% discount shown)
- [ ] INR pricing for India, USD for others (geo-detected)
- [ ] Upgrade CTA from within dashboard (on gated features)

---

## PHASE 6 — Polish + Launch

### Performance
- [ ] Lighthouse Performance > 90 on landing page
- [ ] Lighthouse Performance > 85 on editor page
- [ ] Lighthouse Accessibility > 90 on all pages
- [ ] Core Web Vitals: LCP < 2.5s, CLS < 0.1, FID < 100ms

### SEO
- [ ] Metadata (title, description) on all pages
- [ ] OG image (1200x630) for landing and pricing pages
- [ ] /sitemap.xml generated
- [ ] /robots.txt configured
- [ ] Google Search Console submitted

### Mobile
- [ ] Landing page: tested at 375px, 390px, 414px
- [ ] Editor: tested at 390px (single panel mode)
- [ ] Dashboard: tested at 375px
- [ ] Pricing page: tested at 375px

### Monitoring
- [ ] Sentry error monitoring active (errors going to Sentry dashboard)
- [ ] PostHog events firing: signup, cv_created, ats_checked, upgraded, exported_pdf
- [ ] Vercel Analytics enabled

### Legal
- [ ] Privacy policy page live at /privacy
- [ ] Terms of service page live at /terms
- [ ] Cookie consent banner (if using analytics cookies)

### Launch
- [ ] Product Hunt assets prepared (logo, screenshots, tagline, description)
- [ ] 10 beta users onboarded and feedback collected
- [ ] Waitlist users notified via Resend email campaign
- [ ] LinkedIn founder post drafted and scheduled

---

## FINAL GATE — DO NOT LAUNCH UNTIL ALL OF THESE ARE TICKED

- [ ] All auth flows tested (signup, login, Google, magic link, forgot password)
- [ ] Payment flows tested end-to-end in test mode (Razorpay + Stripe)
- [ ] ATS score tested with real job descriptions
- [ ] PDF export tested for all 8 templates
- [ ] RLS verified: user A cannot access user B's CVs (run SQL test)
- [ ] Rate limiting verified: AI endpoints reject after limit
- [ ] ENCRYPTION_SECRET rotation procedure documented
- [ ] All env vars confirmed in Vercel production dashboard
- [ ] No console.log or debug code in production build
- [ ] `npm run build` passes with 0 TypeScript errors
