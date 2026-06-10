# CV Prime — Codex Quick Reference

## HOW TO USE THIS SYSTEM

### Starting a new Codex session
1. Open a new Codex conversation
2. Paste the ENTIRE contents of CODEX_SESSION_PROMPT.md
3. Codex reads AGENTS.md + MEMORY.md + CHECKLIST.md
4. Codex tells you where you are and what's next
5. Tell Codex what to build

### After each session
- Codex updates MEMORY.md automatically
- Codex ticks CHECKLIST.md boxes
- Commit these changes to git so the next session has fresh context

### Dispatching a specific subagent
Say: "Build the AI module" → Codex reads agents/03-ai-module.md
Say: "Set up auth" → Codex reads agents/01-foundation.md
Say: "Build PDF export" → Codex reads agents/04-07-...md
Codex always reads AGENTS.md first, then the task-specific agent file.

---

## FILE PURPOSES AT A GLANCE

| File | Purpose |
|------|---------|
| AGENTS.md | Rules, stack, standards, folder structure — never changes |
| MEMORY.md | Living state — agents update this after every task |
| CHECKLIST.md | Launch readiness — tick boxes as features ship |
| CODEX_SESSION_PROMPT.md | Paste at start of every Codex session |
| agents/01-foundation.md | Auth, DB setup, middleware |
| agents/02-cv-editor.md | Zustand, forms, templates, live preview |
| agents/03-ai-module.md | BYOK, encryption, all AI routes |
| agents/04-07-*.md | PDF, dashboard, payments, polish |

---

## STANDARD ERROR CODES (memorise these)

| Code | Meaning | UI response |
|------|---------|-------------|
| NO_KEY | User has no OpenAI key | Show NoKeyPrompt component |
| KEY_INVALID | Key revoked or quota exceeded | Show KeyExpiredPrompt component |
| RATE_LIMITED | Too many AI requests | Toast: "Try again in an hour" |
| PLAN_GATE | Feature needs Pro | Open UpgradeModal |

---

## PLAN LIMITS QUICK REFERENCE

| Feature | Free | Pro |
|---------|------|-----|
| Saved CVs | 1 | Unlimited |
| Templates | 3 (Classic, Modern, Minimal) | All 8 |
| PDF export | With watermark | No watermark |
| ATS score | Score only | Score + keywords + suggestions |
| AI bullet rewrites | 3/month | 100/month (pooled) |
| Cover letters | 0 | 10/month |
| JD Tailoring | 0 | Unlimited |
| Job tracker | 3 jobs | Unlimited |
| LinkedIn import | No | Yes |

---

## PRICING

| Plan | India | Global |
|------|-------|--------|
| Free | ₹0 | $0 |
| Pro monthly | ₹249/mo | $3.99/mo |
| Pro annual | ₹1,999/yr (33% off) | $29.99/yr (37% off) |

---

## GIT WORKFLOW

```bash
# Feature branches named after agent files
git checkout -b phase/01-foundation
git checkout -b phase/02-cv-editor
git checkout -b phase/03-ai-module
# etc.

# Commit format
git commit -m "feat(editor): add zustand store with undo/redo"
git commit -m "feat(ai): add ATS score route with BYOK"
git commit -m "fix(auth): handle magic link redirect on mobile"

# Main branch = production (auto-deploys to Vercel)
git checkout main && git merge phase/01-foundation
```

---

## CRITICAL SECURITY CHECKLIST (check before every PR)

- [ ] No API keys or secrets in client-side code
- [ ] No `console.log` with sensitive data
- [ ] Every API route has `auth.getUser()` check
- [ ] Supabase queries have `.eq('user_id', user.id)` (belt + RLS suspenders)
- [ ] AES encryption used for all stored user keys
- [ ] Upstash rate limiting on all AI endpoints
- [ ] Webhook signatures verified (Razorpay + Stripe)
