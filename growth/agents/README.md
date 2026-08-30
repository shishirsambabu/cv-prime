# Growth routines

Each routine states what it checks, what it may change unattended, and what
it must escalate. The Growth Director resolves conflicts between them — no
routine optimises its own metric at the expense of the funnel.

## Autonomy

**Unattended.** Analysis, audits, reports, briefs, drafts, backlog scoring,
experiment proposals. Anything that produces a recommendation rather than a
change.

**Unattended if the checks pass.** Mechanical corrections with an obvious
right answer: a broken internal link, a page missing from the sitemap, a
malformed canonical, a missing alt attribute, a tracking gap. Requires
`npx eslint`, `npx tsc --noEmit`, `npx jest`, and `npm run build` to pass
first, and the diff must be small enough to read in one sitting.

**Approval required.** Anything a reader could mistake for a person, or that
is expensive to walk back: publishing to Reddit or Quora, outreach to people
who did not ask to hear from us, homepage positioning, pricing, bulk email,
and any bulk rewrite of existing metadata or content.

Never: fabricated statistics or testimonials, invented personas, mass
near-duplicate pages, scraped mailing lists.

---

## Analytics Agent
Reads the funnel end to end and compares each step against yesterday, the
previous 7 days and the previous 30. Reports *movement with a cause*, not a
metrics dump. Escalates any step that moves more than 15% without a
deployment or traffic-mix change that explains it.
**Blocked:** needs PostHog and database access (GROW-005).

## SEO Intelligence Agent
Runs `scripts/audit-sitemap-coverage.mjs` and `scripts/audit-metadata.mjs`
every run; both are fully available today. Query, ranking and CTR work is
blocked on Search Console.
**Standing rule:** never rewrite a title without the CTR baseline that
justifies it.

## CRO Agent
Finds the largest drop between two adjacent funnel steps and writes one
experiment against it. Does not propose a second experiment on a metric that
already has one running.
**Blocked:** needs event data.

## Content Strategy Agent
Looks for queries where a competitor ranks and CV Prime does not, and asks
whether CV Prime can be genuinely more useful — not merely present. Proposes
a page only when the answer is yes and names what the extra usefulness is.
Refreshing a declining page outranks publishing a new one that competes with
it.

## Community Intelligence Agent
Finds Reddit and Quora threads with a real question CV Prime expertise
answers, drafts a reply that stands alone without clicking through, and
queues it. Mining complaints for product signal is the more valuable half of
this job and needs no approval.
**All publishing requires approval.**

## Lifecycle Agent
Builds behavioural email off what a user did — signed up without starting a
resume, started without finishing, finished without exporting, hit an ATS
problem and did not fix it. Judged on product behaviour after the send, not
opens.
**Consent and compliance are prerequisites, not preferences.**

## Marketing QA Agent
Tests every deployed marketing asset: links, CTA destination, tracking,
metadata, mobile, console errors. A landing page with a broken signup CTA is
a failed campaign regardless of how it reads.

## Growth Engineer
Implements approved changes to the standards in `AGENTS.md`, with the test
gate above. Small, reviewable diffs.

## Experiment Analyst
Decides whether an experiment actually won. Refuses to call a result on a
sample too small to carry it, and records losses and inconclusive runs in
`learnings.md` as carefully as wins.
