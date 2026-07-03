import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, BookOpen, FileText, Building2, Award, AlertCircle } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Government Job Resume & Biodata Format India 2026 — SSC, UPSC, PSU, Railway, Bank PO | CV Prime',
  description:
    'Complete guide to writing a resume and biodata for government jobs in India 2026. Covers SSC, UPSC, PSU (GATE), Railway, and bank applications. Biodata vs resume explained with free templates.',
  alternates: { canonical: 'https://cv-prime.in/government-job-resume' },
  keywords: [
    'government job resume india',
    'government job biodata format india',
    'ssc resume format',
    'upsc biodata format india',
    'psu resume gate india',
    'railway job resume india',
    'government job application format india',
    'biodata for government job india 2026',
    'ibps po biodata format',
    'ssc cgl resume format',
    'government job resume 2026',
    'psus resume india gate',
    'nabard resume format india',
    'drdo isro resume format',
  ],
  openGraph: {
    title: 'Government Job Resume & Biodata Format India 2026 — SSC, UPSC, PSU, Bank PO | CV Prime',
    description:
      'Resume and biodata guide for every type of government job in India: SSC CGL, UPSC, PSU via GATE, Railway, IBPS/SBI Bank PO, ISRO/DRDO. Understand which format each role needs.',
    url: 'https://cv-prime.in/government-job-resume',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Government Job Resume Guide 2026 — CV Prime' }],
  },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Write a Resume for Government Jobs in India 2026',
  description:
    'Step-by-step guide to writing the correct resume or biodata for different types of government jobs in India — SSC, UPSC, PSU GATE, Railway, and bank PO.',
  totalTime: 'PT45M',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Identify which format your role requires',
      text: 'Determine whether your government job application requires a standard biodata (SSC, UPSC, Railway, Bank PO interview) or a professional CV (PSU GATE, DRDO Scientist, ISRO). The official recruitment notification specifies the exact document requirements.',
    },
    {
      '@type': 'HowToStep',
      name: 'For PSU GATE roles: write a 2-page professional CV',
      text: 'PSU GATE interviews (BHEL, GAIL, ONGC, NTPC) require a professional CV with your GATE score prominently displayed, technical skills, domain-specific projects, and education. Include your category (General/OBC/SC/ST) in personal details.',
    },
    {
      '@type': 'HowToStep',
      name: 'For SSC/UPSC/Railway: use the official biodata format',
      text: 'Government biodata includes personal details (DOB, father\'s name, category, nationality), educational qualifications in tabular format from 10th standard onwards with percentages, work experience, and a signed declaration. Affix a passport-size photograph.',
    },
    {
      '@type': 'HowToStep',
      name: 'Prepare your document folder',
      text: 'Carry originals and two sets of self-attested photocopies of all mark sheets, degree certificate, category certificate, identity proof, and the interview call letter to every government interview.',
    },
    {
      '@type': 'HowToStep',
      name: 'Tailor your CV for the specific PSU domain',
      text: 'For BHEL: emphasise power plant engineering. For GAIL: gas engineering, pipelines, compression. For ONGC: upstream exploration, reservoir engineering. Match your technical project descriptions to the PSU\'s core domain.',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between a biodata and a resume for government jobs in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A government biodata is a structured personal document with DOB, father\'s name, category, educational qualifications in chronological tabular format, and a legal declaration. It is required for SSC, UPSC, Railway, and nationalised bank interviews. A professional resume is used for PSU technical interviews (BHEL, GAIL, ONGC via GATE), DRDO/ISRO Scientist positions, and private sector banking. Most government exams use the biodata format at the interview stage — not a corporate-style resume.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a photo on a government job biodata in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — almost all government biodata formats in India require a recent passport-size photograph (35mm × 45mm, white background) affixed in the designated box. UPSC has specific photograph guidelines. Corporate job applications in India (MNCs, IT companies, startups) do not require photographs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I write a resume for a PSU job via GATE in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For PSU GATE interviews (BHEL, GAIL, ONGC, NTPC, HPCL): Use a 2-page professional CV. Lead with GATE score and AIR prominently. Include: Career Objective with GATE rank, Education with CGPA, Technical Skills (domain-specific tools), Technical Projects with engineering problem and quantified outcomes, Internships, and Personal Details including category.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents do I need for a government job interview in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For government job interviews: (1) Original and photocopies of all educational mark sheets (10th to highest). (2) Original degree/provisional certificate. (3) Category certificate (OBC/SC/ST/EWS — current, from competent authority). (4) Identity proof (Aadhaar, PAN). (5) Interview call letter. (6) Passport-size photographs (4–6 copies). (7) Work experience certificates. Always carry originals with 2 sets of self-attested photocopies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use CV Prime to build a government job resume?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CV Prime is ideal for PSU GATE interviews (BHEL, GAIL, ONGC, NTPC) where a professional resume is required. It also helps with private sector banking, and technical government positions. For standard government biodata (SSC, UPSC, Railway, IBPS PO interview), you must use the official biodata form provided by the recruiting organisation — CV Prime is not designed for that format.',
      },
    },
  ],
};

const govJobTypes = [
  {
    icon: FileText,
    title: 'SSC — CGL, CHSL, MTS, CPO',
    format: 'Structured Online Form + DAF (Detailed Application Form) at interview stage',
    what: [
      'No separate resume required for application — SSC uses a standardised online form',
      'At interview stage: bring all original mark sheets, category certificate, DAF as specified',
      'SSC CGL Tier-3 Descriptive Paper tests essay and letter writing — not resume review',
      'Focus: CGPA/percentage for eligibility cut-offs, category documents, and interview preparation',
    ],
    badge: 'Biodata Form Required at Interview',
    color: 'blue',
  },
  {
    icon: Award,
    title: 'UPSC — Civil Services, CDS, CAPF',
    format: 'Detailed Application Form (DAF) at Personality Test stage',
    what: [
      'The DAF is a biographical form filled during UPSC interview registration — not a corporate resume',
      'DAF covers: education, employment history, hobbies, optional subject, and background information',
      'UPSC Personality Test evaluates administrative aptitude, not resume presentation',
      'Prepare a comprehensive narrative of your educational and career background for the interview board',
    ],
    badge: 'UPSC DAF Required',
    color: 'purple',
  },
  {
    icon: Building2,
    title: 'PSU via GATE — BHEL, GAIL, ONGC, NTPC, HPCL',
    format: 'Professional 2-page CV with GATE score prominently featured',
    what: [
      'A professional resume IS required at the Group Discussion and Technical Interview stage',
      'Lead with GATE Score and AIR (All India Rank) — this is your primary qualification credential',
      'Include domain-specific technical skills: ETAP/MATLAB (electrical), ANSYS/AutoCAD (mechanical), HYSYS/ASPEN (chemical)',
      'Technical project descriptions must include engineering problem, tools, and quantified outcome',
    ],
    badge: 'Professional CV Required',
    color: 'green',
  },
  {
    icon: FileText,
    title: 'Indian Railways — RRB',
    format: 'RRB Online Application Form (no separate resume)',
    what: [
      'Railway recruitment uses standardised RRB portal forms for all applications',
      'No separate resume is required for Group C/D positions',
      'For Senior Section Officer or Gazetted Officer positions: detailed biographical form required at interview stage',
      'Focus: educational qualification certificates, category documents, and valid ID proof for verification',
    ],
    badge: 'RRB Form Required',
    color: 'yellow',
  },
  {
    icon: Building2,
    title: 'IBPS PO / SBI PO / NABARD',
    format: 'Bank-specific Biodata Form provided at shortlisting stage',
    what: [
      'After clearing IBPS PO Mains, the bank provides a specific biodata form to fill and bring to interview',
      'The form covers: personal details, educational qualifications in table format, work experience, and declaration',
      'NABARD Grade A interview is competency-based — highlight rural development and agricultural finance knowledge',
      'Carry the complete original document set to every bank interview: mark sheets, certificates, category proof',
    ],
    badge: 'Bank Biodata Form Required',
    color: 'orange',
  },
  {
    icon: Award,
    title: 'ISRO, DRDO, BARC, CSIR',
    format: 'Academic/Research CV + Organisation-specific Application Form',
    what: [
      'Research and scientific positions require an academic CV with publications, research experience, and academic merit',
      'Include: Research Interests, Publications (IEEE/Springer format), Technical Projects, GATE score (where applicable)',
      'ISRO Scientist/Engineer uses a separate ISRO exam, not GATE — BARC and DRDO use GATE for many positions',
      'CSIR UGC NET JRF rank is the primary credential for CSIR lab positions',
    ],
    badge: 'Academic CV Required',
    color: 'red',
  },
];

const psuResumeStructure = [
  { step: '1', section: 'Contact Details + GATE Score', detail: 'Name, phone, email, LinkedIn. GATE Year | Score | AIR prominently displayed.' },
  { step: '2', section: 'Career Objective', detail: '2–3 lines: GATE rank, target PSU domain, key technical specialisation.' },
  { step: '3', section: 'Education', detail: 'B.Tech/M.Tech reverse chronological — CGPA/%, institution, year. 10th and 12th %.' },
  { step: '4', section: 'Technical Skills', detail: 'Domain tools: MATLAB/ETAP (EE) | AutoCAD/ANSYS (ME) | HYSYS/ASPEN (CHE).' },
  { step: '5', section: 'Technical Projects', detail: '2–3 projects with engineering problem, tools, and quantified outcome.' },
  { step: '6', section: 'Internships / Industrial Training', detail: 'Company, domain, duration, key tasks with engineering outcome.' },
  { step: '7', section: 'Certifications', detail: 'NPTEL, coursework, relevant technical certifications.' },
  { step: '8', section: 'Personal Details', detail: 'DOB, Category (General/OBC/SC/ST), Languages known, Nationality.' },
];

const govBiodataStructure = [
  { step: '1', section: 'Personal Information', detail: 'Full name, DOB, father\'s/mother\'s name, nationality, religion, category.' },
  { step: '2', section: 'Address', detail: 'Present address and permanent address separately.' },
  { step: '3', section: 'Educational Qualifications', detail: 'Tabular format from 10th to highest degree — exam | institution | year | % | board.' },
  { step: '4', section: 'Work Experience', detail: 'Organisation | Designation | Period | Salary (if applicable).' },
  { step: '5', section: 'Languages Known', detail: 'Read | Write | Speak — for each language.' },
  { step: '6', section: 'Extracurriculars / Achievements', detail: 'Sports, NCC/NSS, awards, community work.' },
  { step: '7', section: 'Photograph', detail: 'Passport-size photo (35×45mm) affixed in the designated box.' },
  { step: '8', section: 'Declaration + Signature', detail: 'Signed declaration of truth with date and place.' },
];

const faqs = [
  {
    q: 'What is the difference between a biodata and a resume for government jobs in India?',
    a: 'A government biodata is a structured personal document with DOB, father\'s name, category, educational qualifications in chronological tabular format, and a legal declaration — used for SSC, UPSC, Railway, and nationalised bank interviews. A professional resume is used for PSU technical interviews (BHEL, GAIL, ONGC via GATE), DRDO/ISRO Scientist positions, and private sector banking. The key distinction: biodata is the standard for exam-based government recruitment; a CV is for merit-based PSU and research recruitment.',
  },
  {
    q: 'Do I need a photo on a government job biodata?',
    a: 'Yes — almost all government biodata formats require a recent passport-size photograph (35mm × 45mm, white background) in the designated box. UPSC has specific photograph guidelines (no coloured background, no headwear except religious, taken within 6 months). For corporate job applications in India (MNCs, IT, startups), photos are not expected and can cause ATS parsing issues.',
  },
  {
    q: 'How do I write a resume for a PSU via GATE?',
    a: 'For PSU GATE interviews (BHEL, GAIL, ONGC, NTPC, HPCL): Use a 2-page professional CV. Lead with GATE score and AIR prominently in the header or Career Objective. Include domain-specific Technical Skills (ETAP/MATLAB for EE, AutoCAD/ANSYS for ME, HYSYS/ASPEN for CHE), 2–3 technical projects with engineering problem and quantified outcome, and Personal Details including category (General/OBC/SC/ST).',
  },
  {
    q: 'What documents do I need for a government job interview?',
    a: 'For government job interviews: (1) All original mark sheets (10th to highest qualification) + self-attested photocopies. (2) Original degree/provisional certificate. (3) Category certificate — OBC non-creamy layer, SC/ST, or EWS certificate from competent authority, current issue date. (4) Identity proof — Aadhaar, PAN card. (5) Interview call letter. (6) 4–6 passport-size photographs. (7) Work experience certificates. Carry originals with 2 complete sets of self-attested photocopies.',
  },
  {
    q: 'Can I use CV Prime to create a government job resume?',
    a: 'CV Prime is most useful for PSU GATE interviews (BHEL, GAIL, ONGC, NTPC) where a professional CV is required. Use CV Prime\'s free ATS resume builder to structure your GATE score, technical skills, and engineering projects. For standard government biodata (SSC, UPSC, Railway, IBPS PO interview), you must use the official form provided by the recruiting organisation — not a CV template.',
  },
];

const colorMap: Record<string, { bg: string; text: string; badge: string }> = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-700', badge: 'bg-blue-100 text-blue-800' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-700', badge: 'bg-purple-100 text-purple-800' },
  green: { bg: 'bg-green-50', text: 'text-green-700', badge: 'bg-green-100 text-green-800' },
  yellow: { bg: 'bg-amber-50', text: 'text-amber-700', badge: 'bg-amber-100 text-amber-800' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-700', badge: 'bg-orange-100 text-orange-800' },
  red: { bg: 'bg-red-50', text: 'text-red-700', badge: 'bg-red-100 text-red-800' },
};

export default function GovernmentJobResumePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
              { '@type': 'ListItem', position: 2, name: 'Resume Tips', item: 'https://cv-prime.in/resume-tips' },
              { '@type': 'ListItem', position: 3, name: 'Government Job Resume India 2026', item: 'https://cv-prime.in/government-job-resume' },
            ],
          }),
        }}
      />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 text-blue-300 text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              India 2026 Guide
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
              Government Job Resume &amp; Biodata Format India 2026
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              SSC, UPSC, PSU via GATE, Railway, Bank PO — every government job in India has different application requirements. Here is exactly what each one needs.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {['SSC CGL / CHSL', 'UPSC Civil Services', 'PSU via GATE', 'Indian Railways', 'IBPS / SBI PO', 'ISRO / DRDO'].map((tag) => (
                <span key={tag} className="bg-white/10 border border-white/20 rounded-full px-3 py-1 text-sm text-slate-200">
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href="/resume-builder"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
            >
              Build Your Resume Free <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Key Distinction */}
        <section className="py-12 bg-amber-50 border-y border-amber-200">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex gap-4 items-start">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="text-lg font-bold text-amber-900 mb-2">Biodata vs Resume: The Key Distinction</h2>
                <p className="text-amber-800">
                  <strong>Government Biodata</strong> (SSC, UPSC, Railway, IBPS/SBI Bank PO): A structured personal document with DOB, father&apos;s name, educational qualifications in tabular format, and a signed declaration. Use the official format provided by the recruiting organisation.
                </p>
                <p className="text-amber-800 mt-2">
                  <strong>Professional CV</strong> (PSU via GATE, ISRO Scientist, DRDO CEPTAM, NABARD Grade A): A 2-page professional resume with GATE score, technical skills, domain projects, and education. CV Prime helps you build this format.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Government Job Types */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-3">
              Resume or Biodata? — By Government Job Type
            </h2>
            <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto">
              The format you need depends entirely on which type of government role you are applying for.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {govJobTypes.map((job) => {
                const colors = colorMap[job.color] ?? { bg: 'bg-slate-50', text: 'text-slate-700', badge: 'bg-slate-100 text-slate-800' };
                return (
                  <div key={job.title} className={`${colors.bg} rounded-xl p-6 border border-${job.color}-200`}>
                    <div className="flex items-start gap-3 mb-3">
                      <job.icon className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                      <div>
                        <h3 className={`font-bold text-lg ${colors.text}`}>{job.title}</h3>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${colors.badge}`}>{job.badge}</span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 mb-3 font-medium">{job.format}</p>
                    <ul className="space-y-1.5">
                      {job.what.map((point, i) => (
                        <li key={i} className="flex gap-2 text-sm text-slate-700">
                          <CheckCircle2 className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PSU Resume Structure */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              PSU GATE Resume Structure — Section by Section
            </h2>
            <p className="text-slate-600 mb-8">
              For PSU interviews via GATE (BHEL, GAIL, ONGC, NTPC, HPCL, IOC, Power Grid, SAIL, NALCO), a professional 2-page CV is required. Here is the exact section order and what each section should contain.
            </p>
            <div className="space-y-3">
              {psuResumeStructure.map((item) => (
                <div key={item.step} className="flex gap-4 bg-white rounded-xl p-5 border border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-green-600 text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{item.section}</p>
                    <p className="text-slate-600 text-sm mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-green-800 text-sm">
                <strong>GATE Score placement:</strong> Your GATE Score and AIR are your primary qualification signal for PSU interviews. Display them prominently in the header or the first line of your Career Objective — not buried in the Education or Certifications section.
              </p>
            </div>
          </div>
        </section>

        {/* Government Biodata Structure */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Government Biodata Format — Section by Section
            </h2>
            <p className="text-slate-600 mb-8">
              The government biodata format is used for SSC, UPSC, Railway, and nationalised bank interviews. Always use the official form template provided by the recruiting organisation — if no template is provided, follow this structure.
            </p>
            <div className="space-y-3">
              {govBiodataStructure.map((item) => (
                <div key={item.step} className="flex gap-4 bg-white rounded-xl p-5 border border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{item.section}</p>
                    <p className="text-slate-600 text-sm mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-blue-800 text-sm">
                <strong>Educational qualifications are listed chronologically</strong> in government biodata (oldest first: 10th → 12th → Graduation → Post-graduation) — the opposite of a corporate resume, which uses reverse chronological order.
              </p>
            </div>
          </div>
        </section>

        {/* Documents Checklist */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Government Interview Document Checklist
            </h2>
            <p className="text-slate-600 mb-8">
              Carry originals and two complete sets of self-attested photocopies of every document below to every government job interview.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'All educational mark sheets from 10th standard onwards (originals + copies)',
                'Degree certificate and provisional certificate (originals + copies)',
                'Category certificate — OBC (non-creamy layer), SC/ST, or EWS (current date, competent authority)',
                'Identity proof — Aadhaar card AND PAN card',
                'Interview call letter / admit card (print clearly)',
                '4–6 recent passport-size photographs (35×45mm, white background)',
                'Work experience certificates (if applicable)',
                'Income certificate (for EWS category candidates)',
                'Domicile/residence certificate (if specified by state PSC)',
                'Discharge certificate (if ex-serviceman or defence)',
              ].map((doc) => (
                <div key={doc} className="flex gap-3 bg-white rounded-xl p-4 border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700 text-sm">{doc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="border border-slate-200 rounded-xl p-6">
                  <h3 className="font-semibold text-slate-900 mb-3">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-12 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Related Guides</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: '/blog/bank-po-resume-india-2026', label: 'Bank PO Resume & Biodata Guide 2026' },
                { href: '/blog/engineering-resume-india-2026', label: 'Engineering Resume India 2026' },
                { href: '/blog/fresher-resume-guide-india-2026', label: 'Fresher Resume Guide India 2026' },
                { href: '/resume-builder', label: 'AI Resume Builder — Build Your PSU Resume Free' },
                { href: '/ats-resume-builder', label: 'ATS Resume Builder' },
                { href: '/resume-tips', label: 'Resume Tips Hub' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl p-4 text-slate-700 hover:border-blue-300 hover:text-blue-700 transition-colors text-sm font-medium"
                >
                  <BookOpen className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Build Your PSU Resume or Corporate Resume — Free
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              CV Prime builds ATS-optimised professional resumes for PSU GATE interviews, private sector, and technical government roles. Paste any JD and AI tailors your skills and projects. Free — 3 PDF exports, no credit card.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/resume-builder"
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg"
              >
                Build Resume Free <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/ats-resume-builder"
                className="inline-flex items-center gap-2 bg-blue-500/30 border border-white/40 text-white font-semibold px-6 py-4 rounded-xl hover:bg-blue-500/40 transition-colors"
              >
                ATS Resume Builder
              </Link>
            </div>
          </div>
        </section>
      </main>

      <StickyCTA />
    </>
  );
}
