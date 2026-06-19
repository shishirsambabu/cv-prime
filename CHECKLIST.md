# CV Prime - Launch Checklist
# Agents tick boxes as they complete each item.
# Do NOT mark done unless you have personally verified it works.

---

## PHASE 1 - Foundation

### Setup
- [x] Next.js 14 App Router project initialised with TypeScript strict
- [x] Tailwind CSS configured with custom design tokens
- [x] shadcn/ui installed and configured
- [x] Absolute imports configured (@/ paths)
- [x] ESLint + Prettier configured and passing
- [ ] Supabase project created
- [ ] Supabase types generated and committed
- [ ] All env vars added to .env.local and Vercel dashboard
- [ ] Git repo created and connected to Vercel CI/CD
- [ ] Custom domain cv-prime.in pointed to Vercel

### Database
- [ ] profiles table created with all columns including openrouter_key_enc and pdf_exports_used
- [ ] cvs table created
- [ ] cover_letters table created
- [ ] job_applications table created
- [ ] payments table created
- [ ] Row Level Security (RLS) enabled on ALL tables
- [ ] RLS policies: users can only read/write their own rows
- [ ] Supabase Storage bucket created for avatars

### Auth
- [x] Email + password signup works
- [x] Email magic link works
- [x] Google OAuth works
- [x] Auth callback route handles session correctly
- [x] middleware.ts protects all /dashboard/* routes
- [x] Unauthenticated users redirected to /login
- [x] Authenticated users on /login redirected to /dashboard
- [x] Forgot password flow works
- [ ] Email confirmation flow works (Resend configured)

### Landing page
- [x] Above-the-fold hero with clear value prop
- [x] Feature section (ATS score, AI rewrite, templates)
- [x] Template preview section
- [x] Pricing section with free/pro comparison
- [x] FAQ section
- [x] CTA buttons route CV-related actions into signup first, then `/ai-cv`
- [x] OG image set for social sharing
- [x] Demo section has clear workflow navigation cues
- [ ] Page speed Lighthouse score > 90

---

## PHASE 2 - CV Editor

### Core editor
- [x] Zustand cvStore initialised with correct CV JSON shape
- [x] Left panel: Personal Info form (react-hook-form + zod)
- [x] Left panel: Work Experience form with add/remove entries
- [x] Left panel: Education form with add/remove entries
- [x] Left panel: Skills form (technical, soft, languages)
- [x] Left panel: Projects form with add/remove entries
- [x] Left panel: Certifications section
- [x] Right panel: LivePreview renders from Zustand state
- [x] LivePreview updates on every keystroke (< 100ms)
- [x] Section drag-and-drop reordering (dnd-kit)
- [x] Undo/redo (20 step history in Zustand)
- [x] Auto-save to Supabase every 30s (only if dirty flag set)
- [x] Unsaved changes indicator in header
- [x] Template switcher (dropdown, preview thumbnails)
- [x] Mobile: editor collapses to single panel with tab switch

### Templates
- [x] TemplateClassic - tested at 794px width, A4 proportions
- [x] TemplateModern - tested at 794px width, A4 proportions
- [x] TemplateMinimal - tested at 794px width, A4 proportions
- [x] TemplateExecutive - tested at 794px width (Pro gate)
- [x] TemplateCreative - tested at 794px width (Pro gate)
- [x] TemplateTechnical - tested at 794px width (Pro gate)
- [x] TemplateAcademic - tested at 794px width (Pro gate)
- [x] TemplatePremium - tested at 794px width (Pro gate)
- [ ] All templates pass ATS parser test (score > 85 on Jobscan)
- [ ] All templates render correctly in Browserless PDF export

---

## PHASE 3 - AI + Export

### API key management
- [x] POST /api/keys/save - encrypts and stores key
- [x] DELETE /api/keys/delete - wipes key from DB
- [x] Key validated against OpenRouter before saving
- [x] APIKeySettings.tsx component renders saved hint
- [x] NoKeyPrompt.tsx shown on all AI features if no key
- [x] KeyExpiredPrompt.tsx shown on KEY_INVALID response
- [x] Settings page has step-by-step guide to get OpenRouter key
- [x] Spending limit advice included in guide
- [x] Guide tells users they can delete the OpenRouter key after use

### ATS score
- [x] POST /api/ats-score - auth + rate limit + zod + BYOK
- [x] Returns score (0-100), missingKeywords[], presentKeywords[], suggestions[]
- [x] ATSScorePanel.tsx renders score with visual ring
- [x] Keyword chips show green (present) / red (missing)
- [x] Score history saved to cvs.ats_score_history (jsonb array)
- [x] Score history chart shown (Recharts line graph)

### AI writing
- [x] POST /api/ai-suggest - bullet rewriter, returns 3 alternatives
- [x] AIAssistPanel.tsx shows 3 alternatives with one-click apply
- [x] Loading skeleton shown during AI call
- [x] POST /api/cover-letter - generates from CV + JD + tone
- [x] Cover letter page renders result with edit capability
- [x] Tone selector: professional / friendly / executive
- [x] POST /api/jd-tailor - rewrites summary + reorders bullets for a JD
- [x] All AI routes: Upstash rate limit 20/hour per user
- [x] POST /api/ai-generate-cv - parses uploaded CV + JD and saves a tailored CV
- [x] AI job CV wizard: paste JD -> upload CV -> choose template -> generate CV
- [x] PDF/DOCX/TXT upload support for CV parsing
- [x] `/create-with-ai` redirects into signup-first AI CV workflow
- [x] Authenticated AI generation uses the user's encrypted saved OpenRouter key
- [x] AI CV template step renders actual template previews before generation

### PDF export
- [x] POST /api/export-pdf - calls Browserless REST API
- [x] Template renders as standalone HTML at 794x1123px
- [x] A4 PDF returned as download with correct filename
- [x] Free plan: watermark injected before render
- [x] Pro plan: no watermark
- [x] Free plan: first 3 PDF downloads allowed, then upgrade gate
- [x] Export gate has an authenticated signed-token fallback when the database token RPC is unavailable
- [ ] PDF render < 3s (Browserless, not Puppeteer)
- [ ] Tested: all 8 templates export correctly

---

## PHASE 4 - Dashboard + Job Tracker

### Dashboard
- [x] CV card grid: title, template, last edited, ATS score badge
- [x] Create new CV button
- [x] Clone CV action
- [x] Rename CV (inline edit)
- [x] Delete CV (with confirm dialog)
- [x] Free plan allows unlimited drafts and gates after 3 PDF downloads
- [x] CV public share link (toggle on CVCard)

### Job tracker
- [x] Kanban board: Saved / Applied / Interview / Offer / Rejected
- [x] Add job: company, role, URL, date, notes
- [x] Drag cards between columns (dnd-kit)
- [x] Free plan: 3 jobs max
- [x] Pro plan: unlimited
- [ ] LinkedIn PDF import: parses and pre-fills CV editor

---

## PHASE 5 - Payments

### Razorpay (India)
- [x] Razorpay order created server-side on checkout click
- [x] Razorpay checkout modal opens client-side
- [x] POST /api/webhooks/razorpay - signature verified
- [x] On success: profiles.plan set to 'pro'
- [x] Payment record inserted to payments table
- [x] Test-mode Pro cancellation/downgrade flow handled

### Pricing page
- [x] Free vs Pro comparison table
- [x] Annual plan toggle (33% discount shown)
- [x] INR pricing for Razorpay checkout
- [x] Upgrade CTA from within dashboard (on gated features)

---

## PHASE 6 - Polish + Launch

### Performance
- [ ] Lighthouse Performance > 90 on landing page
- [ ] Lighthouse Performance > 85 on editor page
- [ ] Lighthouse Accessibility > 90 on all pages
- [ ] Core Web Vitals: LCP < 2.5s, CLS < 0.1, FID < 100ms

### SEO
- [x] Metadata (title, description) on all major pages
- [x] OG image (1200x630) for landing and pricing pages
- [x] /sitemap.xml generated
- [x] /robots.txt configured
- [ ] Google Search Console submitted

### Mobile
- [x] Landing page: tested at 375px
- [ ] Landing page: tested at 390px and 414px
- [ ] Editor: tested at 390px (single panel mode)
- [ ] Dashboard: tested at 375px
- [x] Pricing page: tested at 375px

### Monitoring
- [x] PostHog events wired behind consent: signup, cv_created, ats_score_checked, upgraded, exported_pdf
- [ ] Vercel Analytics enabled

### Legal
- [x] Privacy policy page live at /privacy
- [x] Terms of service page live at /terms
- [x] Cookie consent banner (if using analytics cookies)

### Launch
- [ ] Product Hunt assets prepared (logo, screenshots, tagline, description)
- [ ] 10 beta users onboarded and feedback collected
- [ ] Waitlist users notified via Resend email campaign
- [ ] LinkedIn founder post drafted and scheduled

---

## FINAL GATE - DO NOT LAUNCH UNTIL ALL OF THESE ARE TICKED

- [ ] All auth flows tested (signup, login, Google, magic link, forgot password)
- [ ] Payment flows tested end-to-end in test mode (Razorpay only)
- [ ] ATS score tested with real job descriptions
- [ ] PDF export tested for all 8 templates
- [ ] RLS verified: user A cannot access user B's CVs (run SQL test)
- [ ] Rate limiting verified: AI endpoints reject after limit
- [ ] ENCRYPTION_SECRET rotation procedure documented
- [ ] All env vars confirmed in Vercel production dashboard
- [x] No console.log or debug code in production build
- [x] `npm run build` passes with 0 TypeScript errors
