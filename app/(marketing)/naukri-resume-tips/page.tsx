import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, AlertTriangle, Search, TrendingUp, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Naukri Resume Tips 2026 — Get More Recruiter Calls from Naukri.com | CV Prime',
  description:
    'Optimise your Naukri profile and resume for more recruiter calls in 2026. Resdex keyword strategy, Naukri headline formula, ATS tips for Indian job seekers. Free guide from CV Prime.',
  alternates: { canonical: 'https://cv-prime.in/naukri-resume-tips' },
  keywords: [
    'naukri resume tips',
    'naukri profile tips',
    'how to get calls from naukri',
    'naukri resume optimization',
    'naukri profile optimization',
    'naukri ats tips',
    'naukri resume format',
    'naukri headline tips',
    'resdex optimization',
    'naukri job search tips india',
    'naukri resume tips 2026',
    'best resume for naukri',
  ],
  openGraph: {
    title: 'Naukri Resume Tips 2026 — Get More Recruiter Calls | CV Prime',
    description:
      'Unlock more recruiter calls from Naukri.com with ATS keyword strategy, the right headline formula, and Resdex profile optimisation tips for India 2026.',
    url: 'https://cv-prime.in/naukri-resume-tips',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Naukri Resume Tips 2026 — CV Prime' }],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I get more recruiter calls from Naukri.com?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To get more recruiter calls from Naukri: (1) Set your profile status to "Actively Looking." (2) Refresh your profile every 14 days — Naukri Resdex sorts candidates by "Recently Updated," and a profile not updated in 30 days drops significantly in search results. (3) Write a keyword-rich headline: include your job title, years of experience, and 3 core skills. (4) Fill all profile sections completely — Naukri\'s algorithm boosts profile visibility for complete profiles. (5) Upload an ATS-readable resume (not a Canva PDF). (6) Set a competitive notice period and expected CTC.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best resume format for Naukri.com?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best resume format for Naukri is: (1) Single-column, clean layout — no tables, columns, or graphics. (2) Standard section headings: "Work Experience", "Skills", "Education." (3) Reverse chronological order. (4) Uploaded as a Word (.docx) or text-based PDF. (5) Named as FirstName_LastName_Resume.pdf. Naukri\'s internal ATS (Resdex) parses your uploaded resume and uses it alongside your structured profile — both must be keyword-optimised.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I write in the Naukri headline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Naukri headline formula that gets the most recruiter views is: [Job Title] | [X Years Experience] | [Skill 1], [Skill 2], [Skill 3]. Example: "Senior Software Engineer | 6 Years | Java, Spring Boot, AWS, Microservices." Avoid vague headlines like "Passionate Professional Seeking New Opportunities" — they contain no searchable keywords and will never surface in Resdex searches.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Naukri Resdex work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Naukri Resdex is Naukri\'s recruiter search engine that allows companies to search for candidates by skill, experience, location, designation, company, and salary expectations. Your profile appears in Resdex searches only if your profile and uploaded resume contain the exact keywords the recruiter searched for. Resdex ranks results by: keyword match score, recency (profile last updated), and profile completeness. Updating your profile regularly and including exact skill keywords (not synonyms) dramatically improves your Resdex visibility.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should I update my Naukri profile?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Update your Naukri profile at least every 14 days. Naukri Resdex sorts candidates by "Recently Updated" as one of its ranking factors. A profile last updated 90 days ago is ranked far below one updated 7 days ago, even if the qualifications are identical. You can refresh the "last updated" timestamp by making any minor edit — updating your expected CTC, adding a keyword to your skills, or editing a sentence in your summary.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I upload my resume on Naukri or just fill the profile?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Do both. Naukri uses two separate data sources for recruiter search: (1) your structured profile (filled in via the web form) and (2) your uploaded resume. Both are indexed separately. Your structured profile covers skills tags, designation, education, and company — the primary filters recruiters apply. Your uploaded resume allows keyword-level text search for more specific terms. Keeping both accurate and keyword-rich maximises your Resdex visibility. Use CV Prime to create an ATS-ready resume to upload.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'Naukri Resume Tips', item: 'https://cv-prime.in/naukri-resume-tips' },
  ],
};

const naukriTips = [
  {
    number: '01',
    title: 'Use Resdex-searchable keywords in your headline and skills',
    body: 'Naukri\'s recruiter search (Resdex) matches exact keywords — not synonyms. If your headline says "Backend Developer" but the recruiter searches "Spring Boot Developer", you might not appear. List your top 5–8 exact technology keywords in the Naukri Skills section and mirror them in your headline.',
    example: 'Weak: "Experienced Software Developer with backend expertise"\nStrong: "Senior Backend Developer | 5 Yrs | Java, Spring Boot, AWS Lambda, PostgreSQL, Kafka"',
  },
  {
    number: '02',
    title: 'Refresh your profile every 14 days',
    body: 'Resdex sorts search results by "Recently Updated" as a key ranking factor. A profile not touched in 30 days drops behind competitors who have updated recently — even if you are equally qualified. Set a calendar reminder to make any minor edit every two weeks during your job search.',
    example: 'Quick refresh trick: Update your expected CTC by ₹1, then change it back. This resets your "last updated" timestamp without altering your profile.',
  },
  {
    number: '03',
    title: 'Complete every section of your Naukri profile',
    body: 'Naukri\'s algorithm gives higher visibility to profiles that are 100% complete. Missing sections — particularly Awards, Certifications, Projects, and IT Skills — lower your profile score. Recruiters who filter for specific skills also see incomplete profiles less frequently.',
    example: 'Sections most often skipped: Projects (critical for freshers), Certifications (AWS, Google, Microsoft certs), IT Skills (separate from the main skills field), and Languages.',
  },
  {
    number: '04',
    title: 'Upload an ATS-readable resume — not a Canva PDF',
    body: 'Naukri stores your uploaded resume separately from your structured profile. Recruiters download and open your resume when they want the full picture. A Canva PDF or graphically designed resume that uses images, text boxes, or multi-column layouts will be unreadable by Naukri\'s parsing engine and will display incorrectly when recruiters open it on mobile devices.',
    example: 'Use CV Prime to export a clean, text-based PDF that Naukri can parse correctly. Test: open your uploaded resume in Naukri — if text appears garbled or misaligned, you have a format problem.',
  },
  {
    number: '05',
    title: 'Set profile visibility to "Visible to all recruiters"',
    body: 'By default, Naukri profiles are set to visible. But if you changed this — or if your profile was auto-hidden due to inactivity — check your Privacy Settings. A profile set to "Confidential" or hidden from your current employer may also be partially hidden from all recruiters depending on your settings.',
    example: 'Go to: My Naukri → Privacy Settings → Profile Visibility → Set to "Visible to all recruiters."',
  },
  {
    number: '06',
    title: 'Apply with a tailored resume — not the generic one on your profile',
    body: 'Every job application on Naukri goes through their ATS system before reaching the recruiter. A generic resume scores lower than a tailored one. Use CV Prime to paste the Naukri job description, get your ATS score, see which keywords are missing, and fix them — then apply with the tailored version.',
    example: 'Average ATS score improvement after tailoring: 40 points. A resume that scores 88 on a specific JD is dramatically more likely to be shortlisted than one that scores 48 with the generic version.',
  },
  {
    number: '07',
    title: 'Set your notice period accurately — shorter is faster',
    body: 'Recruiters on Resdex can filter candidates by notice period. If you set your notice period to "3 months" but can negotiate less, you may be excluded from searches where the recruiter needs "Immediate" or "30 days." Set it honestly, but add in your summary that you can negotiate for the right opportunity.',
    example: 'If your notice period is "3 months" but negotiable to 45 days with buyout, note this in your Naukri summary: "Currently on 3-month notice period — can negotiate buyout."',
  },
  {
    number: '08',
    title: 'Write a keyword-rich Naukri summary (not just copy-paste from your resume)',
    body: 'The Naukri profile summary is indexed separately from your uploaded resume. It should contain the same core keywords your target recruiters would search — job title, domain, key tools, industry, and career level. Write it in the third person ("A Java developer with 6 years of experience...") for Resdex search compatibility.',
    example: 'Template: "[Job title] with [X] years of experience in [domain/industry]. Expertise in [Skill 1], [Skill 2], [Skill 3]. Currently working at [Company] as [Designation]. Open to [roles] in [locations]. Targeting [CTC range]."',
  },
];

const commonMistakes = [
  'Uploading a Canva or visually designed resume — Naukri cannot parse images or graphics',
  'Not updating the profile for 30+ days — Resdex drops inactive profiles in search results',
  'Using vague headlines ("Experienced Professional") with no searchable keywords',
  'Skipping the IT Skills section — this is indexed separately from your resume text',
  'Setting notice period to "3 months" when you can negotiate — recruiter filters exclude you',
  'Not uploading a resume at all — relying only on the structured profile limits keyword coverage',
  'Using a personal email that looks unprofessional (e.g. coolkid2003@gmail.com)',
  'Leaving the "Current Salary" field blank — many recruiters filter by CTC band',
];

const faqs = [
  {
    q: 'How do I get more recruiter calls from Naukri.com?',
    a: 'To get more recruiter calls from Naukri: (1) Set your profile to "Actively Looking." (2) Refresh your profile every 14 days. (3) Write a keyword-rich headline with your job title, years of experience, and core skills. (4) Fill all profile sections completely. (5) Upload an ATS-readable resume. (6) Apply to roles with a JD-tailored resume using CV Prime\'s free ATS checker.',
  },
  {
    q: 'What should I write in the Naukri headline?',
    a: 'Use this formula: "[Job Title] | [X Years] | [Skill 1], [Skill 2], [Skill 3]." Example: "Senior Software Engineer | 6 Yrs | Java, Spring Boot, AWS, Microservices." Include your exact target job title and your 3 most in-demand skills. Avoid vague phrases like "Seeking opportunities" or "Passionate professional."',
  },
  {
    q: 'How often should I update my Naukri profile?',
    a: 'At least every 14 days during an active job search. Naukri Resdex ranks profiles partly by recency. You can refresh your timestamp by making any minor edit — even updating your expected CTC by ₹1,000.',
  },
  {
    q: 'Should I upload my resume on Naukri or just fill the profile?',
    a: 'Do both. Your structured profile and your uploaded resume are indexed separately. The structured profile covers recruiters\' primary filters (skills, designation, location, CTC). The uploaded resume enables deeper keyword text searches. Both must be keyword-optimised and consistent.',
  },
  {
    q: 'What resume format should I upload to Naukri?',
    a: 'Upload a single-column, ATS-friendly PDF or Word document. No tables, columns, graphics, or images. Use standard headings. Name the file FirstName_LastName_Resume.pdf. Canva PDFs and image-based exports will not parse correctly in Naukri and will appear garbled to recruiters.',
  },
  {
    q: 'How does Naukri Resdex work?',
    a: 'Naukri Resdex is the recruiter database search engine. Recruiters search by keyword, experience, location, designation, and CTC. Your profile ranks higher if: you updated it recently, your profile is 100% complete, and your skills and headline contain the exact keywords searched. Using synonyms or abbreviations (e.g. "ML" instead of "Machine Learning") may prevent you from appearing in relevant searches.',
  },
];

export default function NaukriResumeTipsPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-bold text-cyan-300">
            <Search className="h-4 w-4" />
            Naukri optimisation guide
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Naukri Resume Tips 2026 — get more recruiter calls
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            8 proven tactics to improve your Naukri profile visibility, rank higher in Resdex searches, and convert more recruiter views into interview calls.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground hover:bg-brand-strong"
            >
              Build ATS resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/ats-checker"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/20"
            >
              Check ATS score free
            </Link>
          </div>
        </div>
      </section>

      {/* Key stats */}
      <section className="border-b border-slate-100 px-5 py-10">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { stat: '7 crore+', label: 'CVs on Naukri Resdex', sub: 'your profile competes against these' },
              { stat: '14 days', label: 'Profile refresh window', sub: 'after which Resdex ranking drops' },
              { stat: '40%', label: 'More recruiter views', sub: 'with a keyword-optimised headline' },
            ].map((item) => (
              <div key={item.stat} className="rounded-2xl bg-slate-50 p-6 text-center">
                <p className="font-display text-3xl font-bold text-cyan-600">{item.stat}</p>
                <p className="mt-1 font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-xs text-slate-500">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            8 Naukri resume tips that get you recruiter calls
          </h2>
          <p className="mt-3 text-slate-500">Apply these tactics in order — tips 1–3 have the highest impact on Resdex visibility.</p>
          <div className="mt-12 space-y-10">
            {naukriTips.map((tip) => (
              <div key={tip.number} className="flex gap-6">
                <div className="flex-shrink-0">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 font-display text-sm font-bold text-cyan-700">
                    {tip.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900">{tip.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{tip.body}</p>
                  <div className="mt-4 rounded-xl bg-slate-50 p-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Example</p>
                    <p className="mt-2 whitespace-pre-line text-sm text-slate-700">{tip.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="bg-red-50 px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-1 h-6 w-6 shrink-0 text-red-600" />
            <div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl text-slate-900">
                8 Naukri mistakes hurting your visibility
              </h2>
              <p className="mt-3 text-slate-600">These are the most common errors that drop your Resdex ranking.</p>
            </div>
          </div>
          <ul className="mt-8 space-y-3">
            {commonMistakes.map((mistake) => (
              <li key={mistake} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm">
                <span className="mt-0.5 h-5 w-5 shrink-0 text-red-500">✗</span>
                <span className="text-sm leading-6 text-slate-700">{mistake}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How CV Prime helps */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            How CV Prime helps you rank higher on Naukri
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            CV Prime's ATS checker simulates what Naukri's parsing engine sees when a recruiter views your resume. Paste any Naukri job description and your resume — you get a 0–100 ATS match score, an exact keyword gap list, and AI rewrites for weak bullets.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {[
              {
                icon: TrendingUp,
                title: 'ATS score against any Naukri JD',
                body: 'Paste any job description from Naukri and see exactly how your resume scores against it. Know your keyword gaps before you apply.',
              },
              {
                icon: Star,
                title: 'Keyword gap analysis',
                body: 'See which keywords from the JD are missing from your resume. Fix them with AI suggestions — boosting your Resdex keyword match score.',
              },
              {
                icon: CheckCircle2,
                title: 'ATS-safe resume templates',
                body: 'All CV Prime templates use single-column layouts that Naukri can parse correctly. No tables, text boxes, or images that break ATS parsers.',
              },
              {
                icon: Search,
                title: 'Clean PDF export for upload',
                body: 'Export a text-based PDF that renders correctly on Naukri and mobile devices. Free plan includes 3 PDF exports — no credit card required.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-100 p-6">
                <item.icon className="h-6 w-6 text-cyan-600" />
                <h3 className="mt-3 font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Naukri headline formula */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Naukri headline formula</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Your Naukri headline is one of the most-indexed fields in Resdex. It appears in search results and is the first thing a recruiter reads. Use this formula:
          </p>
          <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
            <p className="text-sm font-bold uppercase tracking-widest text-slate-400">The formula</p>
            <p className="mt-2 font-display text-2xl font-bold text-cyan-700">
              [Job Title] | [X Years] | [Skill 1], [Skill 2], [Skill 3]
            </p>
            <div className="mt-6 space-y-3">
              {[
                { role: 'Software Engineer', headline: 'Senior Software Engineer | 6 Yrs | Java, Spring Boot, AWS, Microservices' },
                { role: 'Data Analyst', headline: 'Data Analyst | 4 Yrs | SQL, Python, Power BI, Tableau, ETL' },
                { role: 'HR Manager', headline: 'HR Manager | 8 Yrs | Talent Acquisition, Darwinbox, Statutory Compliance, HRBP' },
                { role: 'Finance Analyst', headline: 'Finance Analyst | 5 Yrs | Financial Modelling, SAP FICO, CFA Level 2, DCF, IFRS' },
                { role: 'Marketing Manager', headline: 'Marketing Manager | 7 Yrs | Performance Marketing, Google Ads, Meta Ads, CAC Reduction' },
              ].map((ex) => (
                <div key={ex.role} className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase text-slate-400">{ex.role}</p>
                  <p className="mt-1 font-medium text-slate-800">{ex.headline}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">Naukri resume tips — FAQ</h2>
          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-100 p-6">
                <h3 className="font-display text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-slate-100 px-5 py-12">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-slate-500">Related guides</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {[
              { href: '/ats-checker', label: 'Free ATS checker' },
              { href: '/ats-friendly-cv', label: 'ATS-friendly CV guide' },
              { href: '/resume-format', label: 'Resume format India 2026' },
              { href: '/fresher-resume', label: 'Fresher resume guide' },
              { href: '/resume-builder-india', label: 'Resume builder for India' },
              { href: '/blog/naukri-resume-tips-2026', label: 'Full Naukri guide (blog)' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-cyan-300 hover:text-cyan-700"
              >
                {link.label} <ArrowRight className="h-3 w-3" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Optimise your resume for Naukri — free
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Paste any Naukri job description and your resume. CV Prime shows you your ATS score, exact keyword gaps, and rewrites your weak bullets — so your next application gets the recruiter call.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong"
          >
            Check my ATS score free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
