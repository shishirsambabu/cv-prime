# CV Prime — LinkedIn Company Page Playbook

The rules the content team follows. Research baseline: October 2026. The
Analyst revises the **tunable** values below from our own page data
(`analytics/latest.json` on the `linkedin-queue` branch) and records every change
in `LEARNINGS.md` on that branch. **Guardrails** never change without the founder's sign-off.

---

## 1. How the LinkedIn feed ranks posts (what we optimise for)

Most of what follows comes from third-party studies, not from LinkedIn. Use the
direction of each finding; don't rely on the exact numbers.

| Signal | What the research says | What we do |
|---|---|---|
| **Dwell time** | The strongest ranking signal in most 2026 analyses. Posts that hold attention for 60s+ show many times the engagement of posts scrolled past in under 3s. | Carousels with one idea per slide, a hook that earns the "…see more" tap, and 900–1,500 character bodies with short lines. |
| **Relevance matching (the 2026 unified ranking model, nicknamed "360Brew")** | Since the March 2026 feed overhaul, a single model reads the post text, the author's profile and the reader's history together. Posts can resurface days or weeks later for readers they match. | Keep the topic tightly about **careers, CVs, hiring and the Indian job market**, so LinkedIn learns our page's subject. Use clear topic words in the first two lines. Avoid off-topic "viral" posts. |
| **Comment depth > reactions** | Long, back-and-forth comment threads are weighted above likes. The first 60–120 minutes set the trajectory. | End with a specific, low-effort question. A human from the team replies to every comment within 90 minutes (see §7). |
| **External links** | Links in the post body are widely reported to cut reach (estimates of about 25–60%). | No links in the body. The page posts the CTA link as the **first comment**, and the body says "link in the first comment". |
| **Generic AI content** | The 2026 model is reported to demote low-originality, templated "AI slop". | Every post needs a specific, sourced angle: Indian context, real numbers, a concrete before/after. Banned phrases are listed in §6. |
| **Engagement bait and pods** | "Comment YES", "tag 3 friends" and engagement pods are detected and demoted. | Never. `validate.mjs` blocks the common patterns. |
| **Company page reach** | Page posts reach a small share of followers. Estimates range from about 2% to 5% of followers, far below personal profiles. | Format and timing are tuned for the page. The biggest lever is people resharing with their own commentary (§7). |

## 2. Formats (tunable)

Benchmarks rank formats in this order: **document/PDF carousel** (about 6.6–7% average
engagement), multi-image, native video, single image (about 3–5%), then text-only
(about 2–4.5%). Polls get high comment counts but little dwell time.

Starting format mix per week (7 posts):

| Format | Per week | Use for |
|---|---|---|
| `carousel` (PDF, 6–9 slides) | 3 | Teardowns, how-tos, frameworks, lists |
| `image` (1080×1350 stat or quote card) | 2 | Data points, myth vs fact, one-liners |
| `gif` (≤6s loop, 800px wide) | 1 | Product proof: ATS score climbing, before→after rewrite |
| `poll` | 1 | Weekend pulse check. Results feed next week's content |

Carousel rules: slide 1 is the hook (big type, a promise, "Swipe →"). One idea per
slide. Fewer than 30 words per inner slide. The last slide is the CTA ("Build yours free on
cv-prime.in"). Portrait 4:5 (1080×1350) takes up the most of a phone screen.

## 3. When to post (tunable)

- **Cadence: one post per day, seven days a week.** Never two in one day: page posts
  compete with each other for reach. The publisher enforces an 18-hour minimum gap.
- **Audience timezone: IST.** The Indian job-seeker audience peaks on weekday mornings.
  Studies disagree, putting the peak at around 8 AM IST (220k Indian posts) or 9:30–11:30 AM IST.
  A secondary window is 3–5 PM IST.
- **Best days:** Tue–Thu. Weekends are weakest, so they get the lighter formats (poll, GIF).
- **Publisher slots** (GitHub Actions runs at :50 IST every hour from 06:50 to 20:50):
  - Default weekday slot: `08:45+05:30` (it goes live around 08:50).
  - Test slots for the first four weeks: `12:45+05:30` and `17:45+05:30`. Use each on two
    posts per week (rotating), mark the post with `"experiment": "slot-12"` or `"slot-17"`,
    and let the Analyst decide.
  - Weekend slot: `10:45+05:30`.

## 4. Content pillars

Every post belongs to exactly one pillar and ties back to a CV Prime capability.

| Pillar (`pillar`) | Share | What it covers | CV Prime tie-in |
|---|---|---|---|
| `ats-decoded` | 20% | How applicant tracking systems (Workday, Taleo, Naukri RMS, Darwinbox) actually parse and rank CVs. Myths vs facts. | ATS score checker, parser-safe templates |
| `cv-teardown` | 20% | Line-by-line before/after rewrites of real-style (anonymised, fictional) CV lines | AI bullet rewriter, JD tailoring |
| `india-job-market` | 20% | Hiring data, layoffs, GCC boom, fresher hiring, AI roles, salary trends, with sources | Role-specific templates, tailoring for in-demand roles |
| `recruiter-pov` | 15% | What recruiters and hiring managers say they scan for, shortlisting reality | One-page layouts, quantified bullets |
| `career-moves` | 15% | Job switches, notice periods, appraisal season, referrals, LinkedIn profile, interviews, negotiation | Cover letters, job tracker, LinkedIn headline tool |
| `product-proof` | 10% | Feature demos, before/after scores, honest product updates | The product itself |

Weekly rhythm (the Strategist can swap days when news breaks):

| Day | Pillar | Default format |
|---|---|---|
| Mon | `india-job-market` | image or carousel |
| Tue | `cv-teardown` | carousel |
| Wed | `ats-decoded` | carousel |
| Thu | `recruiter-pov` | image |
| Fri | `career-moves` | carousel |
| Sat | `product-proof` | gif |
| Sun | rotating pillar | poll |

**Seasonal hooks (India):** Diwali bonus and post-Diwali switch season (Oct–Nov),
campus placements (Aug–Dec), January hiring restart, appraisal and hike season (Mar–Apr),
fresher batch joining (Jun–Jul), quarterly IT results and hiring commentary
(Jan/Apr/Jul/Oct), and union budget employment announcements (Feb).

## 5. Anatomy of a post

```
HOOK (≤ 140 chars, shows before "…see more"; a tension, number, or contrarian claim)

2–3 lines of setup: the problem, in Indian context.

The meat: 3–6 short points, one idea each, plain words.
(Use → or • for lists; blank line between blocks.)

The CV Prime bridge: one or two lines showing how CV Prime handles exactly this.

CTA: "Try CV Prime free: link in the first comment 👇"

A specific question that invites a real answer (not "thoughts?")

#Hashtag1 #Hashtag2 #Hashtag3
```

- **Length:** 900–1,500 characters (hard max 3,000).
- **Hashtags:** 3 maximum, at the end. Pick from: `#JobSearch #Resume #CVTips #ATS
  #CareerAdvice #Hiring #Freshers #JobSearchIndia #CareerGrowth #Recruitment`.
- **First comment (posted by the page):** a one-line value add plus the UTM link,
  e.g. `Check your CV's ATS score free → {{cta_url}}`.
- **CTA URL (`cta_url`):** match it to the topic. Default `https://cv-prime.in/signup?next=/ai-cv`.
  Topic pages: `/ats-checker`, `/ai-cv-maker`, `/fresher-resume`, `/linkedin-headline`,
  `/cover-letter-generator`, `/job-application-tracker`, `/templates`.
  The publisher adds `utm_source=linkedin&utm_medium=organic_social&utm_content=<post id>`
  so PostHog can attribute signups to individual posts.
- **Voice:** a sharp senior recruiter friend. Confident, warm, specific, Indian English
  (CV/résumé, LPA, lakh, notice period, Naukri, fresher, TCS/Infosys/GCC). No hype.

## 6. Guardrails (founder sign-off to change)

1. **No invented facts.** Every number, quote or claim about a company needs a source
   URL in `research.sources`. If it can't be sourced, cut it. Vendor "studies" must be
   labelled as such ("one hiring-platform study found…").
2. **No fake people or testimonials.** Teardown CVs are fictional and labelled as
   illustrative. No made-up user quotes, recruiter names, or "a candidate told us".
3. **No impersonation or borrowed authority.** Don't use other companies' logos or
   brand styling, and don't imply endorsement.
4. **Competitors:** compare only on verifiable facts, never mock.
5. **Sensitive topics:** layoffs are reported with empathy and without naming
   individuals. No politics, religion, or caste.
6. **No engagement bait, no pods, no buying engagement.**
7. **Banned phrasing:** "in today's fast-paced world", "game-changer", "delve",
   "unlock your potential", "elevate", "revolutionise", "synergy", "let that sink in",
   "agree?", "thoughts?", more than 2 emojis in the body.
8. **Page only.** The team publishes to the CV Prime company page and nowhere else.
9. **Accessibility:** every image, GIF or carousel has meaningful `alt_text` (or `title`
   for documents). Text on visuals is at least 34px on the 1080px canvas, with high contrast.

## 7. After publishing (humans, highest-leverage)

Automation covers posting. These three human actions move reach the most:

1. **Reply to every comment within 90 minutes** as the page, and ask a follow-up question.
2. **The founder and team reshare with their own 2–3 line take** (not a bare repost),
   ideally within the first hour. Personal profiles are reported to get several times
   more distribution than pages.
3. **Invite relevant connections to follow the page** (LinkedIn gives pages monthly
   invite credits).

## 8. KPIs the Analyst tracks

- North star: **signups attributed to `utm_source=linkedin`** (PostHog).
- Engagement rate = (reactions + comments + reposts + clicks) / impressions. Targets:
  carousel ≥ 5%, image ≥ 3%, text ≥ 2.5%.
- Comments per post, which reflects comment depth.
- Clicks per 1,000 impressions, which reflects CTA strength.
- Follower growth per week.

Decision rules: after **at least 3 posts** in a cell (pillar × format, or slot), a cell
that beats the page median engagement rate by more than 30% gets +1 slot per week.
A cell that trails by more than 30% gets −1, with a floor of one post per pillar every two weeks.
Change one variable at a time and label each post's `experiment`.

## Sources (October 2026 research)

- [SocialPilot: How the LinkedIn algorithm works (Sept 2026)](https://www.socialpilot.co/blog/linkedin-algorithm)
- [ZoomSphere: LinkedIn algorithm 2026 and generic AI content](https://www.zoomsphere.com/blog/linkedin-algorithm-2026-why-generic-ai-content-kills-your-organic-reach)
- [Ordinal: How LinkedIn's algorithm works in 2026](https://www.tryordinal.com/blog/how-linkedins-algorithm-works)
- [Digital Applied: LinkedIn algorithm 2026 engagement guide](https://www.digitalapplied.com/blog/linkedin-algorithm-2026-engagement-strategy-guide)
- [Transformation Junction: LinkedIn algorithm guide for businesses](https://www.transformationjunction.com/blog/how-to-be-seen-on-linkedin-2026-algorithm/)
- [Dataslayer: what works on LinkedIn in 2026](https://www.dataslayer.ai/blog/linkedin-algorithm-february-2026-whats-working-now)
- [Buffer: best time to post on LinkedIn (4.8M posts)](https://buffer.com/resources/best-time-to-post-on-linkedin/)
- [MagicPost: best time to post on LinkedIn in India (IST)](https://magicpost.in/blog/best-time-to-post-on-linkedin-india)
- [RecurPost: best and worst times to post on LinkedIn](https://recurpost.com/schedule-linkedin-posts/best-and-worst-times-to-post-on-linkedin/)
- [ConnectSafely: best time to post by day, zone and industry](https://connectsafely.ai/articles/best-time-to-post-on-linkedin-2026-data-guide)
- [Vulse: LinkedIn content benchmarks 2026](https://vulse.co/blog/linkedin-content-benchmarks-2026-which-post-format-drives-most-engagement)
- [Carousels Generator: LinkedIn carousel statistics 2026](https://carousels-generator.com/blog/linkedin-carousel-statistics-2026)
- [People Matters: applicants per job double in India (LinkedIn data)](https://www.peoplematters.in/news/recruiting-and-onboarding/applicants-per-job-double-in-india-intensifying-job-search-pressure-linkedin-47949)
- [Careers360: 84% of Indian professionals feel unprepared (LinkedIn survey)](https://news.careers360.com/ai-reshapes-hiring-84-indian-professionals-feel-unprepared-in-2026-top-hiring-job-roles-linkedin-survey/amp)
