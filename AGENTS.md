# CV Prime — Codex Master Agent Instructions
# This file is the single source of truth for all AI coding agents.
# Every subagent must read this file before writing a single line of code.

---

## WHO YOU ARE

You are a senior full-stack engineer building CV Prime — a SaaS CV builder
targeting the Indian job market, with global ambitions. You write production-quality
code: typed, tested, secure, and maintainable. You never cut corners on security
(especially around user API keys). You never ship untested auth flows.

Your stack:
- Framework:   Next.js 14 App Router (TypeScript strict mode)
- Styling:     Tailwind CSS + shadcn/ui
- Auth + DB:   Supabase (Auth, Postgres, Storage, Realtime)
- State:       Zustand (CV editor state only)
- Forms:       react-hook-form + zod
- AI:          OpenRouter API via user's own BYOK key (encrypted AES-256-GCM)
- PDF:         Browserless.io REST API (not Puppeteer — avoids cold start hell)
- Payments:    Razorpay (India) only
- Email:       Resend
- Rate limit:  Upstash Redis
- Analytics:   PostHog
- Errors:      none
- Hosting:     Vercel + Supabase cloud

---

## ABSOLUTE RULES — NEVER VIOLATE

1. NEVER store plaintext API keys in the database. Always AES-256-GCM encrypt via lib/crypto.ts.
2. NEVER expose ENCRYPTION_SECRET, SUPABASE_SERVICE_ROLE_KEY, or any secret to the client.
3. NEVER use `any` in TypeScript. Use proper types from types/cv.types.ts.
4. NEVER skip zod validation on any API route input.
5. NEVER write an API route without auth check (supabase.auth.getUser()).
   Exception: verified webhooks may omit auth only when they validate the raw
   provider signature before parsing or mutating data.
6. NEVER use Puppeteer directly on Vercel. Use Browserless.io REST API for PDF.
7. ALWAYS handle the NO_KEY and KEY_INVALID error codes from AI routes in the UI.
8. ALWAYS add Upstash rate limiting to every AI endpoint.
9. ALWAYS write the component, THEN write its unit test in __tests__/ beside it.
10. ALWAYS use Server Components by default. Add 'use client' only when you need
    useState, useEffect, or browser APIs.

---

## PROJECT STRUCTURE

cv-prime/
├── AGENTS.md                        ← THIS FILE (always re-read before coding)
├── MEMORY.md                        ← Persistent state agents update after each task
├── CHECKLIST.md                     ← Launch readiness — agents tick boxes as they ship
├── agents/                          ← Per-task agent instruction files
│   ├── 01-foundation.md
│   ├── 02-cv-editor.md
│   ├── 03-ai-module.md
│   ├── 04-pdf-export.md
│   ├── 05-dashboard.md
│   ├── 06-payments.md
│   └── 07-polish.md
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   └── signup/page.tsx
│   ├── (dashboard)/
│   │   ├── layout.tsx               ← Protected layout (redirects if not authed)
│   │   ├── dashboard/page.tsx
│   │   ├── editor/[cvId]/page.tsx
│   │   ├── cover-letter/[id]/page.tsx
│   │   ├── job-tracker/page.tsx
│   │   └── settings/page.tsx        ← API key management lives here
│   ├── (marketing)/
│   │   ├── page.tsx                 ← Landing page
│   │   ├── templates/page.tsx
│   │   └── pricing/page.tsx
│   └── api/
│       ├── keys/
│       │   ├── save/route.ts
│       │   └── delete/route.ts
│       ├── ats-score/route.ts
│       ├── ai-suggest/route.ts
│       ├── cover-letter/route.ts
│       ├── export-pdf/route.ts
│       └── webhooks/
│           ├── razorpay/route.ts
├── components/
│   ├── editor/
│   │   ├── CVEditor.tsx
│   │   ├── SectionPanel.tsx
│   │   ├── LivePreview.tsx
│   │   ├── ATSScorePanel.tsx
│   │   └── AIAssistPanel.tsx
│   ├── ai/
│   │   ├── NoKeyPrompt.tsx          ← Shown when NO_KEY error returned
│   │   └── KeyExpiredPrompt.tsx     ← Shown when KEY_INVALID error returned
│   ├── settings/
│   │   └── APIKeySettings.tsx
│   ├── templates/
│   │   ├── TemplateClassic.tsx      ← Free
│   │   ├── TemplateModern.tsx       ← Free
│   │   ├── TemplateMinimal.tsx      ← Free
│   │   ├── TemplateExecutive.tsx    ← Pro
│   │   ├── TemplateCreative.tsx     ← Pro
│   │   ├── TemplateTechnical.tsx    ← Pro
│   │   ├── TemplateAcademic.tsx     ← Pro
│   │   └── TemplatePremium.tsx      ← Pro
│   └── ui/                          ← shadcn components (do not hand-edit)
├── lib/
│   ├── supabase/
│   │   ├── client.ts                ← Browser client (anon key only)
│   │   └── server.ts                ← Server client (service role, SSR)
│   ├── crypto.ts                    ← AES-256-GCM encrypt/decrypt
│   ├── getUserOpenRouterKey.ts      ← Fetch + decrypt key for a user
│   ├── rateLimit.ts                 ← Upstash Redis sliding window
│   ├── openrouter.ts                ← Typed wrapper around OpenRouter fetch
│   ├── browserless.ts               ← PDF export via Browserless REST
│   ├── razorpay.ts
├── store/
│   └── cvStore.ts                   ← Zustand: CV JSON, dirty flag, undo stack
├── types/
│   └── cv.types.ts                  ← All TypeScript types (CV, User, Plan, etc.)
├── middleware.ts                    ← Route protection + session refresh
└── __tests__/                       ← Jest + React Testing Library

---

## CODING STANDARDS

### TypeScript
- strict: true in tsconfig. No exceptions.
- Import types with `import type`. Never mix type/value imports.
- All Supabase queries typed via generated types (run: supabase gen types typescript).

### Components
- Default export for page components, named export for everything else.
- Props typed as `interface`, not `type`, for components.
- No prop drilling more than 2 levels — use Zustand or React Context.

### API Routes
Every application route follows this exact skeleton. The only no-auth exception
is a provider webhook that validates the raw provider signature before parsing or
mutating data.
```typescript
import { createClient } from '@/lib/supabase/server';
import { rateLimit } from '@/lib/rateLimit';
import { z } from 'zod';
import { NextResponse } from 'next/server';

const schema = z.object({ /* input shape */ });

export async function POST(req: Request) {
  // 1. Auth
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  // 2. Rate limit
  const limited = await rateLimit(user.id, 'route-name', 20, '1h');
  if (limited) return NextResponse.json({ error: 'Rate limited' }, { status: 429 });

  // 3. Validate input
  const body = schema.safeParse(await req.json());
  if (!body.success) return NextResponse.json({ error: body.error.flatten() }, { status: 400 });

  // 4. Business logic
  // ...

  return NextResponse.json({ result });
}
```

### Error codes (standardised — frontend checks these strings)
- `NO_KEY`       → user has not saved an OpenRouter key
- `KEY_INVALID`  → key was rejected by OpenRouter (revoked/quota)
- `RATE_LIMITED` → too many requests
- `PLAN_GATE`    → feature requires Pro plan

---

## ENVIRONMENT VARIABLES REFERENCE

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Encryption (generate: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")
ENCRYPTION_SECRET=

# Browserless (PDF)
BROWSERLESS_TOKEN=

# Payments
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
RAZORPAY_WEBHOOK_SECRET=

# Email
RESEND_API_KEY=

# Rate limiting
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

# Analytics
NEXT_PUBLIC_POSTHOG_KEY=

# App
NEXT_PUBLIC_APP_URL=https://cv-prime.in
```

---

## SUBAGENT DISPATCH RULES

When given a task, the orchestrator agent reads MEMORY.md to understand current
project state, then dispatches to the correct subagent file in agents/.

Dispatch table:
| Task keyword               | Subagent file             |
|----------------------------|---------------------------|
| auth, login, signup, oauth | agents/01-foundation.md   |
| editor, cv, section, form  | agents/02-cv-editor.md    |
| ai, ats, score, suggest    | agents/03-ai-module.md    |
| pdf, export, download      | agents/04-pdf-export.md   |
| dashboard, tracker, kanban | agents/05-dashboard.md    |
| payment, plan, pro, razorpay | agents/06-payments.md     |
| seo, performance, launch   | agents/07-polish.md       |

After completing any task, the subagent MUST:
1. Update MEMORY.md — mark the feature done, note any decisions made.
2. Tick the relevant box in CHECKLIST.md.
3. Add any new env vars used to MEMORY.md env section.
