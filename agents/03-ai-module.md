# Agent 03 — AI Module (BYOK)
# Read AGENTS.md first. Then MEMORY.md. Phase 1 + 2 must be complete.

---

## YOUR MISSION
Build the complete AI module: key management, ATS scoring, bullet rewriting,
cover letter generation, JD tailoring, and the job-first AI CV flow. All AI calls
use the user's own OpenRouter key — zero AI cost to CV Prime.

---

## SECURITY RULES (non-negotiable)
1. lib/crypto.ts must use AES-256-GCM with a random IV per encryption.
2. The IV is stored prepended to the ciphertext (base64 format: iv:cipher).
3. ENCRYPTION_SECRET must be 32 bytes (64 hex chars). Validate at startup.
4. Keys are NEVER logged, NEVER returned to client after saving (only the hint).
5. Upstash rate limiting on every AI endpoint: 20 requests / user / hour.

---

## STEP 1 — lib/crypto.ts

```typescript
// Server-only. Never import in client components.
const ALGO = 'AES-GCM' as const;

function getSecret(): Buffer {
  const secret = process.env.ENCRYPTION_SECRET;
  if (!secret || secret.length !== 64) {
    throw new Error('ENCRYPTION_SECRET must be 64 hex characters (32 bytes)');
  }
  return Buffer.from(secret, 'hex');
}

export async function encryptAPIKey(plaintext: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw', getSecret(), ALGO, false, ['encrypt']
  );
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encoded = new TextEncoder().encode(plaintext);
  const cipher = await crypto.subtle.encrypt({ name: ALGO, iv }, key, encoded);
  return `${Buffer.from(iv).toString('base64')}:${Buffer.from(cipher).toString('base64')}`;
}

export async function decryptAPIKey(blob: string): Promise<string> {
  const [ivB64, cipherB64] = blob.split(':');
  if (!ivB64 || !cipherB64) throw new Error('Invalid encrypted key format');
  const key = await crypto.subtle.importKey(
    'raw', getSecret(), ALGO, false, ['decrypt']
  );
  const plain = await crypto.subtle.decrypt(
    { name: ALGO, iv: Buffer.from(ivB64, 'base64') },
    key,
    Buffer.from(cipherB64, 'base64')
  );
  return new TextDecoder().decode(plain);
}
```

---

## STEP 2 — lib/rateLimit.ts

```typescript
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const limiters = new Map<string, Ratelimit>();

function getLimiter(key: string, requests: number, window: string): Ratelimit {
  const cacheKey = `${key}:${requests}:${window}`;
  if (!limiters.has(cacheKey)) {
    limiters.set(cacheKey, new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(requests, window as `${number} ${'s'|'m'|'h'|'d'}`),
      prefix: `cvprime:${key}`,
    }));
  }
  return limiters.get(cacheKey)!;
}

export async function rateLimit(
  userId: string,
  routeName: string,
  limit = 20,
  window = '1 h'
): Promise<boolean> {
  const limiter = getLimiter(routeName, limit, window);
  const { success } = await limiter.limit(userId);
  return !success; // returns true if LIMITED
}
```

---

## STEP 3 — lib/getUserOpenRouterKey.ts

```typescript
import { createClient } from '@/lib/supabase/server';
import { decryptAPIKey } from '@/lib/crypto';

export async function getUserOpenRouterKey(userId: string): Promise<string | null> {
  const supabase = createClient();
  const { data } = await supabase
    .from('profiles')
    .select('openrouter_key_enc')
    .eq('id', userId)
    .single();
  if (!data?.openrouter_key_enc) return null;
  return decryptAPIKey(data.openrouter_key_enc);
}
```

---

## STEP 4 — lib/openrouter.ts (typed wrapper)

```typescript
interface OpenRouterMessage { role: 'system' | 'user' | 'assistant'; content: string; }

interface OpenRouterOptions {
  apiKey: string;
  model?: string;
  messages: OpenRouterMessage[];
  maxTokens?: number;
  jsonMode?: boolean;
}

export async function callOpenRouter(opts: OpenRouterOptions): Promise<string> {
  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${opts.apiKey}`,
    },
    body: JSON.stringify({
      model: opts.model ?? 'gpt-4o-mini',
      max_tokens: opts.maxTokens ?? 1000,
      response_format: opts.jsonMode ? { type: 'json_object' } : undefined,
      messages: opts.messages,
    }),
  });

  if (!res.ok) {
    const err = await res.json();
    if (err.error?.code === 'invalid_api_key') throw new Error('KEY_INVALID');
    if (err.error?.type === 'insufficient_quota') throw new Error('KEY_INVALID');
    throw new Error(`OpenRouter error: ${err.error?.message}`);
  }

  const data = await res.json();
  return data.choices[0].message.content as string;
}
```

---

## STEP 5 — API Routes

### app/api/keys/save/route.ts
Input: { apiKey: string }
1. Auth check
2. Validate format: must start with 'sk-', length >= 40
3. Verify against OpenRouter before saving the key
4. Encrypt with encryptAPIKey()
5. Store openrouter_key_enc and hint (last 4 chars) in profiles
6. Return { success: true, hint: '...XXXX' }

### app/api/keys/delete/route.ts
Method: DELETE
1. Auth check
2. Set openrouter_key_enc and openrouter_key_hint to null
3. Return { success: true }

### app/api/ats-score/route.ts
Input schema: z.object({ cvText: z.string().min(50), jobDescription: z.string().min(50) })
Output: { score: number, missingKeywords: string[], presentKeywords: string[], suggestions: string[] }

System prompt:
```
You are an expert ATS (Applicant Tracking System) analyst.
Analyse the CV against the job description.
Return ONLY valid JSON:
{
  "score": <integer 0-100>,
  "missingKeywords": ["keyword1", "keyword2"],
  "presentKeywords": ["keyword1", "keyword2"],
  "suggestions": ["Action item under 15 words", ...]
}
Score rubric:
- 90-100: Excellent match, likely to pass ATS
- 70-89: Good match, minor gaps
- 50-69: Moderate match, significant keywords missing
- Below 50: Poor match, major revision needed
```

After success: save score to cvs.ats_score and append to cvs.ats_score_history.

### app/api/ai-suggest/route.ts
Input: { bullet: string, role: string, company: string }
Output: { alternatives: string[] } (exactly 3)

System prompt:
```
You are an expert CV writer. Rewrite the given CV bullet point.
Rules:
- Start with a strong action verb (Engineered, Reduced, Led, Built, etc.)
- Include specific metrics where the original implies them
- Keep under 20 words
- ATS-friendly language
Return ONLY valid JSON: { "alternatives": ["bullet1", "bullet2", "bullet3"] }
```

### app/api/cover-letter/route.ts
Input: { cvData: CVData, jobDescription: string, tone: 'professional' | 'friendly' | 'executive' }
Output: { content: string }

System prompt varies by tone. Max 350 words. Save result to cover_letters table.

### app/api/jd-tailor/route.ts
Input: { cvData: CVData, jobDescription: string }
Output: { tailoredSummary: string, tailoredBullets: Record<experienceId, string[]> }

System prompt:
```
You are an expert CV optimisation specialist.
Given the CV data and job description, rewrite:
1. The professional summary to directly address the job requirements
2. The 3 most relevant bullet points per job experience to use keywords from the JD

Return ONLY valid JSON:
{
  "tailoredSummary": "...",
  "tailoredBullets": {
    "<experience_id>": ["bullet1", "bullet2", "bullet3"]
  }
}
Keep all rewrites truthful to the original content — only rephrase, never fabricate.
```

---

## STEP 6 — UI Components

### components/settings/APIKeySettings.tsx
- Shows current hint if key exists (e.g. "Connected ...k3aX")
- Input for new key (type="password")
- On save: calls /api/keys/save, shows validation errors inline
- On delete: calls /api/keys/delete, confirms before proceeding
- Links to step-by-step guide (collapsible)
- Shows typical cost estimates (ATS check ≈ $0.001)

### components/ai/NoKeyPrompt.tsx
- Shown when API returns { error: 'NO_KEY' }
- "Connect your OpenRouter key to unlock AI" CTA
- Link to settings page
- Link to openrouter.ai/settings/keys (opens new tab)

### components/ai/KeyExpiredPrompt.tsx
- Shown when API returns { error: 'KEY_INVALID' }
- "Your API key may have expired or hit its quota"
- Link to settings to update

### components/editor/ATSScorePanel.tsx
- Circular score ring (0-100, colour: red <50, amber 50-70, green >70)
- Missing keywords as red chips
- Present keywords as green chips
- Suggestions list
- Score history mini chart (Recharts, last 10 scores)
- "Re-check" button (calls /api/ats-score again)

---

## STEP 7 — Error handling pattern (use everywhere)

```typescript
// In any component calling an AI route:
const res = await fetch('/api/ats-score', { ... });
const data = await res.json();

if (!res.ok) {
  if (data.error === 'NO_KEY') { showNoKeyPrompt(); return; }
  if (data.error === 'KEY_INVALID') { showKeyExpiredPrompt(); return; }
  if (data.error === 'RATE_LIMITED') { toast.error('Too many requests. Try again in an hour.'); return; }
  if (data.error === 'PLAN_GATE') { openUpgradeModal(); return; }
  toast.error('Something went wrong. Please try again.');
  return;
}
```

---

## TESTS TO WRITE

- crypto.test.ts — encrypt then decrypt roundtrip, invalid secret handling
- rateLimit.test.ts — mock Upstash, test limit enforcement
- ats-score.test.ts — mock OpenRouter, test schema validation, test NO_KEY response
- APIKeySettings.test.tsx — test save flow, error display, delete confirmation

---

## DONE — Update MEMORY.md

Mark Phase 3 complete. Note model choices and rate limit settings.
Tick all Phase 3 boxes in CHECKLIST.md.
### app/api/ai-generate-cv/route.ts  (THE KILLER FEATURE)
Input: multipart form data with { jobDescription, templateId, cvFile?, cvText? }
Output: { cvId, title, score, missingKeywords, presentKeywords, suggestions }
1. Auth check
2. Rate limit
3. Validate JD/template/text
4. Parse uploaded PDF/DOCX/TXT or fallback CV text
5. Use OpenRouter BYOK to extract and tailor CV data truthfully for the JD
6. Save generated CV to Supabase with ATS score history
7. Return the saved CV id for review/export
