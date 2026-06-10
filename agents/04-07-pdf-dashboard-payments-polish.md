# Agent 04 — PDF Export
# Read AGENTS.md + MEMORY.md. Phase 1-3 must be complete.

## YOUR MISSION
Build rock-solid PDF export using Browserless.io REST API.
NEVER use Puppeteer directly on Vercel.

## lib/browserless.ts

```typescript
export async function renderPDF(html: string): Promise<Buffer> {
  const res = await fetch('https://production-sfo.browserless.io/pdf', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.BROWSERLESS_TOKEN}`,
    },
    body: JSON.stringify({
      html,
      options: {
        format: 'A4',
        printBackground: true,
        margin: { top: '0', right: '0', bottom: '0', left: '0' },
      },
      waitFor: 500, // allow fonts to load
    }),
  });
  if (!res.ok) throw new Error(`Browserless error: ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}
```

## app/api/export-pdf/route.ts

1. Auth check
2. Fetch CV + plan from Supabase
3. Render template to HTML string using ReactDOMServer.renderToStaticMarkup()
4. If free plan: inject watermark div (position: fixed, bottom-right, 0.3 opacity)
5. Wrap in full HTML doc with inline Tailwind CSS (use @tailwindcss/standalone CDN)
6. Call renderPDF(html)
7. Return PDF buffer with headers:
   Content-Type: application/pdf
   Content-Disposition: attachment; filename="cv-prime-{name}.pdf"

## Template HTML rendering

Templates must be renderable server-side with no client state.
Pass CVData as props to the template component.
Use ReactDOMServer.renderToStaticMarkup() — no hooks, no interactivity needed.

The standalone HTML must include:
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@400;700&display=swap');
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { width: 794px; min-height: 1123px; }
  </style>
</head>
<body>
  ${templateHTML}
</body>
</html>
```

## TESTS
- browserless.test.ts — mock fetch, test PDF buffer returned correctly
- export-pdf.test.ts — test watermark injection for free plan

## DONE — Update MEMORY.md + tick CHECKLIST.md Phase 3 export boxes.

---
---

# Agent 05 — Dashboard + Job Tracker
# Read AGENTS.md + MEMORY.md. Phase 1-3 must be complete.

## YOUR MISSION
Build the user dashboard (CV management) and job tracker (kanban board).

## Dashboard page (app/(dashboard)/dashboard/page.tsx)

Server Component. Fetches all user CVs from Supabase.
Renders CVCard grid.

CVCard shows:
- CV title (editable inline on click)
- Template name + small colour indicator
- Last edited (relative time: "2 hours ago")
- ATS score badge (green/amber/red based on score)
- Three-dot menu: Edit, Clone, Share link toggle, Delete

Plan enforcement:
```typescript
// Before creating a new CV:
const cvCount = await supabase.from('cvs').select('id').eq('user_id', user.id);
if (cvCount.data.length >= 2 && profile.plan === 'free') {
  // Show upgrade prompt instead of creating
}
```

## Job Tracker (app/(dashboard)/job-tracker/page.tsx)

Client Component (needs dnd-kit).

5 columns: Saved | Applied | Interview | Offer | Rejected
Each column is a droppable zone (dnd-kit).
Each card is draggable with job details.

On drag end: PATCH /api/job-applications/[id] with new status.

Add job form (dialog):
- Company name (required)
- Role (required)  
- Job URL (optional)
- Applied date (date picker)
- Notes (textarea)

Free plan: show counter "3/3 jobs used" and upgrade prompt when at limit.

## LinkedIn PDF Import

app/api/linkedin-import/route.ts:
1. Accept multipart form with PDF file
2. Extract text from PDF using pdf-parse library
3. Send text to OpenAI with parsing prompt
4. Return structured CVData JSON
5. Save as new CV in Supabase

Parsing prompt:
```
Extract CV data from this LinkedIn PDF export.
Return ONLY valid JSON matching this exact structure: [paste CVData interface]
Map LinkedIn sections to the correct fields.
For experience bullets: extract key achievements as separate bullet strings.
```

## TESTS
- CVCard.test.tsx — inline rename, delete confirmation
- JobTracker.test.tsx — drag between columns, plan gate enforcement

## DONE — Update MEMORY.md + tick CHECKLIST.md Phase 4 boxes.

---
---

# Agent 06 — Payments
# Read AGENTS.md + MEMORY.md. Phase 1-5 must be complete before payments.

## YOUR MISSION
Integrate Razorpay (India) and Stripe (global). Both must work end-to-end
in test mode before going live.

## Plan detection (lib/plan.ts)

```typescript
import { createClient } from '@/lib/supabase/server';

export async function getUserPlan(userId: string): Promise<'free' | 'pro'> {
  const supabase = createClient();
  const { data } = await supabase
    .from('profiles')
    .select('plan')
    .eq('id', userId)
    .single();
  return (data?.plan ?? 'free') as 'free' | 'pro';
}

export async function upgradeToPro(userId: string): Promise<void> {
  const supabase = createClient();
  await supabase.from('profiles').update({ plan: 'pro' }).eq('id', userId);
}

export async function downgradeToFree(userId: string): Promise<void> {
  const supabase = createClient();
  await supabase.from('profiles').update({ plan: 'free' }).eq('id', userId);
}
```

## Razorpay flow

app/api/razorpay/create-order/route.ts:
1. Auth check
2. Create Razorpay order server-side:
```typescript
const order = await razorpay.orders.create({
  amount: 24900, // ₹249 in paise
  currency: 'INR',
  receipt: `receipt_${userId}_${Date.now()}`,
});
```
3. Return { orderId, amount, currency, key: RAZORPAY_KEY_ID }

Client-side Razorpay checkout:
```typescript
const options = {
  key: data.key,
  amount: data.amount,
  currency: data.currency,
  order_id: data.orderId,
  name: 'CV Prime',
  description: 'Pro Plan — Monthly',
  handler: async (response) => {
    // Payment success — backend verifies signature
    await fetch('/api/razorpay/verify', {
      method: 'POST',
      body: JSON.stringify(response),
    });
    router.refresh(); // refresh to pick up new plan
  },
};
const rzp = new window.Razorpay(options);
rzp.open();
```

app/api/webhooks/razorpay/route.ts:
1. Verify webhook signature using RAZORPAY_KEY_SECRET
2. On payment.captured event: call upgradeToPro(userId)
3. Insert payment record

## Stripe flow

app/api/stripe/create-checkout/route.ts:
1. Auth check
2. Create Stripe Checkout session:
```typescript
const session = await stripe.checkout.sessions.create({
  mode: 'subscription',
  customer_email: user.email,
  line_items: [{
    price: process.env.STRIPE_PRICE_ID, // monthly subscription price
    quantity: 1,
  }],
  success_url: `${APP_URL}/dashboard?upgraded=1`,
  cancel_url: `${APP_URL}/pricing`,
  metadata: { userId: user.id },
});
```
3. Return { url: session.url }
4. Client redirects to session.url

app/api/webhooks/stripe/route.ts:
1. Verify signature: stripe.webhooks.constructEvent(body, sig, STRIPE_WEBHOOK_SECRET)
2. checkout.session.completed → upgradeToPro(metadata.userId)
3. customer.subscription.deleted → downgradeToFree(userId via customer lookup)
4. Insert payment record for completed events

## Pricing page (app/(marketing)/pricing/page.tsx)

Server Component. Detect user's country from Vercel's geo headers:
```typescript
import { headers } from 'next/headers';
const country = headers().get('x-vercel-ip-country') ?? 'US';
const isIndia = country === 'IN';
```

Show INR pricing for India, USD for everyone else.
Annual toggle: monthly ↔ yearly (yearly = 2 months free).

## Upgrade modal (components/payments/UpgradeModal.tsx)

Shown when user hits any plan gate.
Shows what they unlock.
Two buttons: "Pay with Razorpay (India)" | "Pay with Card (International)"
Detect country to show the relevant one first.

## TESTS
- razorpay.test.ts — mock order creation, test signature verification
- stripe.test.ts — mock webhook events, test plan upgrade/downgrade

## DONE — Update MEMORY.md + tick CHECKLIST.md Phase 5 boxes.

---
---

# Agent 07 — Polish, SEO, Monitoring, Launch
# Read AGENTS.md + MEMORY.md. All previous phases must be complete.

## YOUR MISSION
Get CV Prime to Lighthouse > 90, set up monitoring, and execute launch.

## SEO — app/layout.tsx metadata

```typescript
export const metadata: Metadata = {
  title: { default: 'CV Prime — ATS-optimised CV builder for India', template: '%s | CV Prime' },
  description: 'Build a CV that passes ATS filters. Get your ATS score instantly, rewrite bullets with AI, and export a pixel-perfect PDF. Free to start.',
  keywords: ['CV builder India', 'ATS resume', 'resume builder', 'job application'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://cv-prime.in',
    siteName: 'CV Prime',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};
```

## Sitemap — app/sitemap.ts

```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://cv-prime.in', changeFrequency: 'weekly', priority: 1 },
    { url: 'https://cv-prime.in/templates', changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://cv-prime.in/pricing', changeFrequency: 'monthly', priority: 0.9 },
  ];
}
```

## PostHog events — track these exactly

```typescript
import posthog from 'posthog-js';

// Call these at the right moments:
posthog.capture('user_signed_up', { plan: 'free', source: 'google' | 'email' });
posthog.capture('cv_created', { templateId });
posthog.capture('ats_score_checked', { score, hasKey: true });
posthog.capture('ai_bullet_rewritten');
posthog.capture('cover_letter_generated');
posthog.capture('jd_tailor_used');
posthog.capture('pdf_exported', { templateId, plan });
posthog.capture('upgrade_modal_opened', { trigger: 'template_gate' | 'cv_limit' | 'ai_gate' });
posthog.capture('user_upgraded', { gateway: 'razorpay' | 'stripe', plan: 'pro' });
```

## Sentry — next.config.ts

```typescript
import { withSentryConfig } from '@sentry/nextjs';
export default withSentryConfig(nextConfig, {
  silent: true,
  org: 'cv-prime',
  project: 'cv-prime-nextjs',
});
```

Create sentry.client.config.ts, sentry.server.config.ts, sentry.edge.config.ts.
Wrap AI routes in Sentry transaction spans for performance monitoring.

## Performance checklist

Image optimisation:
- All images use next/image with explicit width/height
- OG image pre-generated as static PNG (not computed at runtime)
- Template thumbnail previews are static WebP, not SVG renders

Font optimisation:
- Use next/font/google for Inter and Playfair Display
- No external font requests at runtime

Bundle size:
- Run: npx @next/bundle-analyzer
- Code-split the editor page (dynamic import CVEditor)
- Lazy-load Razorpay SDK: load script only on pricing/checkout pages

## Mobile audit (375px)

Test every page at 375px. Common issues to fix:
- Editor: collapses to single panel with Form | Preview tab
- Templates: preview scales down (transform: scale(0.45) with overflow hidden)
- Dashboard: CV cards become full-width single column
- Pricing: toggle and cards stack vertically

## RLS security audit

Run this SQL to verify no cross-user data leakage:
```sql
-- This should return 0 rows if RLS is correct
SET request.jwt.claim.sub = 'user-a-uuid';
SELECT * FROM cvs WHERE user_id = 'user-b-uuid';
```

## Pre-launch email (Resend)

Send to waitlist via app/api/admin/notify-launch/route.ts (admin-only route).
Use Resend bulk send API. Plain text email, personal tone from the founder.

## DONE — Update MEMORY.md

Mark ALL phases complete. Fill in final completion percentage.
Tick all Phase 6 + Final Gate boxes in CHECKLIST.md.
Project is ready to launch.
