import Link from 'next/link';

interface Props {
  slug: string;
  displayTitle: string;
}

const resourceDefs = [
  { path: 'cv-examples', label: 'CV Example', desc: 'ATS-optimised CV template & writing guide' },
  { path: 'resume-examples', label: 'Resume Example', desc: 'Resume format & section-by-section tips' },
  { path: 'salary', label: 'Salary Guide', desc: 'Fresher to leadership pay bands in India' },
  { path: 'interview-questions', label: 'Interview Prep', desc: 'Top questions with detailed model answers' },
  { path: 'ats-guide', label: 'ATS Guide', desc: 'Role-specific keywords & formatting rules' },
  { path: 'cover-letter-examples', label: 'Cover Letter', desc: 'Role-specific cover letter example & tips' },
  { path: 'linkedin-headline', label: 'LinkedIn Headline', desc: 'Optimised headline templates for recruiters' },
  { path: 'resume-builder', label: 'Build My Resume', desc: 'AI-tailored resume for this exact role' },
];

export function RoleResourceLinks({ slug, displayTitle }: Props): JSX.Element {
  return (
    <section className="border-t border-slate-100 bg-slate-50 px-5 py-14">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-xl font-bold text-slate-900">
          Complete career resources for {displayTitle}s
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Everything you need to land a {displayTitle} role in India — in one place.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {resourceDefs.map((r) => (
            <Link
              key={r.path}
              href={`/${r.path}/${slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-cyan-300 hover:shadow-sm"
            >
              <p className="font-semibold text-slate-900 group-hover:text-cyan-700">{r.label} →</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">{r.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
