# EXP-001 — Show a partial result before the AI tool gate

**Status: proposed — not started. Blocked on baseline data.**

## Hypothesis
Visitors to the 14 gated AI tools are asked for an account *and* their own
OpenRouter API key before they see any output. If a partial result appeared
first, more visitors would complete signup, because the ask would follow
evidence of value rather than precede it.

## Evidence
Structural, from the code — not yet from user data. `useAiTool` returns an
`AUTH` or `NO_KEY` gate before any result is rendered, so a first-time
visitor's entire experience of the tool is two requests and no output. The
tools are a top-of-funnel acquisition surface reached from ~145 indexable
pages, which makes this the most-trafficked place where that friction sits.

## Why it is not running yet
Until `tool_run_gated` has accumulated data, the size of the problem is
unknown. If most runs are gated at `AUTH`, this experiment is worth
building; if most are `NO_KEY` from returning users, the fix is onboarding
for the key instead, and building this first would waste the cycle.

**Start condition:** ≥ 2 weeks of `tool_run_started` / `tool_run_gated`
data, and `AUTH` accounting for the largest share of gated runs.

## Design
- **Control:** current behaviour — gate before any output.
- **Variant:** render a genuinely useful partial result (first section, or
  the analysis with specifics withheld), then the gate.
- **Primary metric:** tool visitor → `user_signed_up` conversion.
- **Guardrails:** AI spend per signup; `tool_run_completed` rate for
  existing users must not fall; no rise in `RATE_LIMITED`.
- **Minimum sample:** enough runs per arm to detect a 20% relative change
  at 95% confidence — computed from the observed baseline rate before
  launch, not assumed now.

## Honest risk
The partial result costs real AI spend on visitors who never sign up. The
guardrail metric exists because this could plausibly lose money while
raising the headline conversion rate — in which case it does not ship.

## Result
Not started.

## Decision
Pending.
