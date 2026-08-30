# Growth learnings

Durable conclusions only. Read this before proposing an experiment so
nothing already settled gets re-tested.

Each entry records what was observed, what it implies, and how strongly it
should be trusted. An entry backed by reasoning rather than measurement says
so — the distinction is the point of the file.

---

## 2026-08-30 — Shared hooks are the cheapest instrumentation point
**Confidence: high (verified in code).**
14 of 19 free tools route through `components/tools/ai/useAiTool.ts`. One
change there instrumented all of them; the alternative was 14 edits that
would drift apart. Before adding events tool by tool, look for the
chokepoint the tools already share.

## 2026-08-30 — Auth method was being mistaken for acquisition source
**Confidence: high (verified in code).**
`user_signed_up` carried `source: 'email' | 'google'`. That reads like
attribution in a dashboard but describes only the login button. For a site
whose acquisition surface is ~145 SEO pages, this made the central question
— which page earns users — unanswerable, and it would have been easy to
keep believing the funnel was instrumented. Check what a property means, not
just that it exists.

## 2026-08-30 — An audit that reports false findings is worse than no audit
**Confidence: high (observed while building the audits).**
The first metadata audit reported 20 pages with dangerously thin
descriptions. All 20 were a regex bug: an escaped apostrophe in
`CV Prime\'s` ended the string match early. Had that gone into the backlog,
it would have generated work against a defect that did not exist. Validate
findings against the source before recording them — the anomaly playbook's
"validate the data" step applies to our own tooling first.

## 2026-08-30 — 60/160 character SERP limits are a heuristic, not a defect list
**Confidence: medium (reasoning, not measured).**
130 of 154 titles exceed 60 characters. That is close to every page, which
means it reflects a house style rather than a set of mistakes, and Google
truncates on pixel width regardless. Treating the list as 130 bugs would
mean rewriting the site's metadata with no measurement — the exact thing the
operating principles forbid. Correct move: wait for impressions and CTR,
rank by opportunity, rewrite a handful, measure. Logged as GROW-004,
deliberately blocked.

---

## Open questions — no evidence yet

These are stated as questions, not beliefs, and must not be cited as
learnings until data exists.

- Do the 14 gated AI tools convert visitors better or worse than the 5
  ungated ones? The gated ones demand an account *and* a user-supplied API
  key before showing any result.
- Which gate (`AUTH`, `NO_KEY`, `RATE_LIMITED`) stops the most tool runs?
- Do ATS-intent landing pages convert better than generic
  resume-template traffic? Widely assumed in this market; unverified here.
- Which of the ~145 indexable pages produce users rather than sessions?
