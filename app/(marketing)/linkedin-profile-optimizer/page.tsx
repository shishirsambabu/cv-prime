import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, XCircle, Linkedin, TrendingUp, Search, Users } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'LinkedIn Profile Optimizer India — Get Found by Recruiters | CV Prime',
  description:
    'Optimise your LinkedIn profile to attract recruiters in India. Learn the headline formula, About section, keyword strategy, and Open to Work settings that get InMail. Free guide with AI resume builder.',
  alternates: { canonical: 'https://cv-prime.in/linkedin-profile-optimizer' },
  keywords: [
    'linkedin profile optimizer india',
    'linkedin profile optimisation india',
    'linkedin profile tips india',
    'linkedin headline india',
    'how to optimise linkedin profile india',
    'linkedin for job search india',
    'linkedin profile for freshers india',
    'linkedin keywords india',
    'linkedin recruiter india',
    'linkedin profile checker india',
  ],
  openGraph: {
    title: 'LinkedIn Profile Optimizer India — CV Prime',
    description:
      'Get found by Indian recruiters on LinkedIn. Headline formula, About section, keyword strategy, and profile settings that generate InMail — with a matching ATS resume.',
    url: 'https://cv-prime.in/linkedin-profile-optimizer',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'LinkedIn Profile Optimizer India — CV Prime' }],
  },
};

const profileSections = [
  {
    section: 'Headline (220 characters)',
    impact: 'Highest',
    tip: 'Do not use your job title alone. Use: [Role] | [Top Skill/Domain] | [Value Proposition or Achievement]. Example: "Senior Frontend Engineer | React & Next.js | Scaled products to 5M+ users | Ex-Swiggy"',
    mistake: 'Using only your current title: "Software Engineer at TCS" — no keywords, no differentiation',
  },
  {
    section: 'About section (2,600 characters)',
    impact: 'High',
    tip: 'Open with a 2-sentence hook (what you do, who you help). Paragraph 2: your top 3 achievements with metrics. Paragraph 3: what you are looking for / your specialisation. Close with a CTA: DM or email. End with 10–15 skills keywords as plain text for LinkedIn search indexing.',
    mistake: 'Leaving it blank, or copying-pasting a generic resume objective — LinkedIn weights the About section heavily in search',
  },
  {
    section: 'Experience section',
    impact: 'High',
    tip: 'Mirror your resume exactly — same companies, titles, dates, and metric bullets. Recruiters cross-reference your LinkedIn and resume; discrepancies raise red flags. Add media (PDFs, links, work samples) to each role for visual impact.',
    mistake: 'Sparse experience entries with only job titles and no bullets — missed opportunity for keyword coverage and credibility',
  },
  {
    section: 'Skills section (top 3 endorsed)',
    impact: 'High',
    tip: 'Add 50 skills (LinkedIn maximum). Pin your top 3 strategically — these appear on your profile card and in recruiter search filters. Request endorsements from colleagues for the skills most relevant to your target roles.',
    mistake: 'Randomly ordered skills with no strategy — endorse and pin the most in-demand skills for your target role first',
  },
  {
    section: 'Open to Work settings',
    impact: 'Very High',
    tip: 'Use "Share with recruiters only" (not the green frame) to signal availability discreetly while employed. Specify exact job titles (up to 5), preferred locations (include Remote), and employment type. LinkedIn\'s algorithm boosts your profile in recruiter searches when Open to Work is set.',
    mistake: 'Leaving Open to Work off while job searching — recruiters use this filter actively on LinkedIn Recruiter',
  },
  {
    section: 'Featured section',
    impact: 'Medium',
    tip: 'Pin your best work: a top article, a portfolio link, a project case study, or your CV Prime resume PDF. For freshers, pin your best college project or internship write-up. This is prime real estate above the fold.',
    mistake: 'Leaving Featured blank — it disappears from your profile and you lose the highest-visibility content slot',
  },
];

const keywordStrategy = [
  'Find the top 10 keywords in 5–10 JDs for your target role — note which terms appear most frequently',
  'Use exact keyword phrases in your headline, About, and experience bullets — not paraphrases',
  'Repeat high-value keywords 3–5 times across your profile (headline + About + experience) without keyword stuffing',
  'Add location-specific keywords if targeting a city: "Bangalore SaaS startups", "Mumbai BFSI", "Delhi NCR IT"',
  'List tools and platforms by their exact brand names: "Salesforce" not "CRM software", "Python" not "scripting language"',
  'LinkedIn\'s search algorithm gives extra weight to your headline, skills section, and the first 300 characters of your About',
];

const faqs = [
  {
    q: 'Does LinkedIn profile optimisation actually help get jobs in India?',
    a: 'Yes — significantly. LinkedIn has over 130 million members in India, and over 80% of Indian recruiters use LinkedIn Recruiter to source candidates. An optimised profile with strong keywords, a clear headline, and Open to Work set correctly generates 3–5× more recruiter InMail than an incomplete profile. The most important single action: rewrite your headline to include 3–4 searchable skill keywords beyond just your job title.',
  },
  {
    q: 'What is the best LinkedIn headline formula for India?',
    a: 'The proven formula for Indian professionals: [Current Role / Target Role] | [Top Skill or Domain] | [Value or Achievement]. For example: "Data Analyst | SQL & Python | Reduced reporting time by 60% | Ex-Infosys" or "MBA Marketing Fresher | Digital Marketing & SEO | MICA Ahmedabad 2026". Keep it under 220 characters. Include at least 2 skill keywords that recruiters search for in your target role.',
  },
  {
    q: 'How many connections do I need for LinkedIn to work in India?',
    a: 'Aim for 500+ connections — LinkedIn shows "500+" rather than the exact number, which signals an established profile to recruiters. The path to 500 for job seekers: connect with batchmates, professors, previous colleagues, and professionals you meet at events. A fast shortcut: after attending any webinar or industry event, connect with everyone who commented. Connection count also affects how high your profile appears in search results.',
  },
  {
    q: 'Should I use the "Open to Work" green frame on LinkedIn in India?',
    a: 'If you are actively job searching and not worried about your current employer seeing it — yes. Studies show profiles with the Open to Work frame receive 40% more recruiter InMails. If you are employed and prefer discretion, use "Share with recruiters only" in the Open to Work settings instead of the public green frame. This tells LinkedIn\'s recruiter tool about your availability without showing the frame to your network or employer.',
  },
  {
    q: 'How do I make my LinkedIn profile ATS-friendly?',
    a: 'LinkedIn itself is not an ATS — but many Indian companies use LinkedIn Easy Apply, which sends your LinkedIn profile data through their ATS. To optimise: keep your experience section structured identically to your resume (same companies, titles, dates). Use standard section headings. Include a downloadable resume in the Featured section. Mirror the keyword language from the job description. If you apply via Easy Apply, your profile data is what gets parsed — make it match your best-optimised resume.',
  },
];

export default function LinkedInProfileOptimizerPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/15 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1.5 text-sm font-bold text-blue-300">
            <Linkedin className="h-4 w-4" />
            LinkedIn profile optimisation
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Optimise your LinkedIn profile to get found by Indian recruiters
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            80% of Indian recruiters use LinkedIn to source candidates. The right headline, keywords, and settings can triple your recruiter InMail — without applying to a single job.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-full bg-blue-400 px-8 py-3.5 text-base font-bold text-slate-950 transition hover:bg-blue-300"
            >
              Build matching ATS resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/blog/linkedin-optimisation-guide-india-2026"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40"
            >
              Full LinkedIn guide
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">Free with your CV Prime account · No credit card required</p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-slate-100 bg-slate-50 px-5 py-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
            {[
              { stat: '130M+', label: 'LinkedIn members in India' },
              { stat: '80%', label: 'Indian recruiters use LinkedIn to source' },
              { stat: '3–5×', label: 'More InMail with optimised profile' },
              { stat: '40%', label: 'More InMail with Open to Work set' },
            ].map((item) => (
              <div key={item.label}>
                <div className="font-display text-3xl font-bold text-blue-600">{item.stat}</div>
                <div className="mt-1 text-sm text-slate-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile sections */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            The 6 sections that determine your LinkedIn visibility
          </h2>
          <p className="mt-4 text-slate-500">Optimise these in order of impact — starting with the headline</p>
          <div className="mt-10 space-y-5">
            {profileSections.map((item, i) => (
              <div key={item.section} className="rounded-2xl border border-slate-100 p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                    {i + 1}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-lg font-bold">{item.section}</h3>
                      <span className={`rounded-full px-3 py-0.5 text-xs font-bold ${item.impact === 'Very High' ? 'bg-green-100 text-green-700' : item.impact === 'Highest' ? 'bg-purple-100 text-purple-700' : item.impact === 'High' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'}`}>
                        Impact: {item.impact}
                      </span>
                    </div>
                    <div className="mt-3 flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                      <p className="text-sm leading-6 text-slate-700">{item.tip}</p>
                    </div>
                    <div className="mt-2 flex items-start gap-2">
                      <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                      <p className="text-sm leading-6 text-slate-500">{item.mistake}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keyword strategy */}
      <section className="bg-blue-50 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                LinkedIn keyword strategy for Indian job seekers
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                LinkedIn&apos;s recruiter search is keyword-driven. Recruiters search for role titles, tools, certifications, and skills — if those words aren&apos;t in your profile, you don&apos;t appear.
              </p>
              <ul className="mt-8 space-y-3">
                {keywordStrategy.map((tip) => (
                  <li key={tip} className="flex items-start gap-3">
                    <Search className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                    <span className="text-slate-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-5 w-5 text-blue-500" />
                  <span className="font-bold text-slate-900">Profile visibility comparison</span>
                </div>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="rounded-xl bg-red-50 p-3">
                    <div className="font-semibold text-slate-700">Generic headline only</div>
                    <div className="mt-1 text-slate-500">&quot;Software Engineer at Wipro&quot;</div>
                    <div className="mt-2 font-bold text-red-600">~12 recruiter searches/month</div>
                  </div>
                  <div className="rounded-xl bg-green-50 p-3 ring-2 ring-green-400">
                    <div className="font-semibold text-slate-700">Keyword-optimised headline</div>
                    <div className="mt-1 text-slate-600">&quot;Senior Java Developer | Spring Boot &amp; AWS | Microservices | 6 YOE | Open to Bangalore roles&quot;</div>
                    <div className="mt-2 font-bold text-green-600">~85 recruiter searches/month</div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-blue-500" />
                  <span className="font-bold text-slate-900">Top keywords Indian recruiters search</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['Python', 'React', 'Product Manager', 'Data Analyst', 'Salesforce', 'AWS', 'SAP', 'MBA', 'B2B Sales', 'Digital Marketing', 'JIRA', 'SQL', 'MBA Finance', 'CA', 'HRMS'].map((kw) => (
                    <span key={kw} className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">{kw}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">LinkedIn optimisation — common questions</h2>
          <div className="mt-10 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-100 p-6">
                <h3 className="font-display text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="border-t border-slate-100 px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-xl font-bold">Related guides &amp; tools</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/blog/linkedin-optimisation-guide-india-2026', label: 'Full LinkedIn guide India 2026' },
              { href: '/linkedin-headline', label: 'LinkedIn headline by role' },
              { href: '/ai-resume-builder', label: 'AI resume builder' },
              { href: '/ats-checker', label: 'ATS resume checker' },
              { href: '/resume-writing-service', label: 'AI resume writing service' },
              { href: '/cover-letter', label: 'AI cover letter generator' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Build the resume that matches your optimised LinkedIn — free
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Your LinkedIn and resume must say the same thing. CV Prime&apos;s AI ensures your resume keywords match your LinkedIn profile and the job description — so you pass both human and ATS screening.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-400 px-10 py-4 text-base font-bold text-slate-950 hover:bg-blue-300"
          >
            Build my ATS resume free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Build matching ATS resume free" message="Optimise LinkedIn + build a matching ATS resume — free with CV Prime" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: { '@type': 'Answer', text: faq.a },
            })),
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'LinkedIn Profile Optimizer India — CV Prime',
            description: 'Optimise your LinkedIn profile to get found by Indian recruiters. Headline formula, keyword strategy, and profile settings guide.',
            url: 'https://cv-prime.in/linkedin-profile-optimizer',
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
                { '@type': 'ListItem', position: 2, name: 'LinkedIn Profile Optimizer', item: 'https://cv-prime.in/linkedin-profile-optimizer' },
              ],
            },
          }),
        }}
      />
    </main>
  );
}
