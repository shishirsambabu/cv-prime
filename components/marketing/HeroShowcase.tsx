import { ArrowRight, Check, FileText, Sparkles, Target } from 'lucide-react';

const scoreItems = [
  ['ATS score', '92'],
  ['Keyword gaps', '4 fixed'],
  ['Export state', 'Ready'],
] as const;

const cvLines = [
  'Product marketing manager',
  'Built launch messaging used by 42 sales reps',
  'Drove Rs 4.8 cr influenced pipeline',
  'Improved lifecycle activation by 23%',
  'Owned GTM reporting and enablement',
];

/**
 * Lightweight hero centerpiece. This avoids rendering the full A4 template on
 * the landing page, keeping the first load fast while still showing the product
 * promise: diagnose, rewrite, and export.
 */
export function HeroShowcase(): JSX.Element {
  return (
    <div className="relative mx-auto w-full max-w-[590px] lg:ml-auto">
      <div className="absolute -left-8 top-10 hidden h-44 w-44 rounded-full bg-brand/15 blur-3xl md:block" />
      <div className="absolute -right-6 bottom-8 hidden h-48 w-48 rounded-full bg-cyan-300/20 blur-3xl md:block" />

      <div className="hero-enter relative overflow-hidden rounded-panel border border-white/70 bg-white/90 p-3 shadow-[0_34px_100px_-42px_rgba(15,23,42,0.48)] backdrop-blur">
        <div className="rounded-card border border-slate-200 bg-[#eef2f8] p-3">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-inner border border-slate-200 bg-white px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-inner bg-slate-950 text-white">
                <FileText className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-slate-950">Role-tailored CV</p>
                <p className="text-xs font-medium text-slate-500">Product marketing manager</p>
              </div>
            </div>
            <span className="rounded-pill bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
              Ready to export
            </span>
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-[0.86fr_1.14fr]">
            <section className="rounded-card bg-slate-950 p-4 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
                CV Prime diagnosis
              </p>
              <div className="mt-4 grid gap-2">
                {scoreItems.map(([label, value]) => (
                  <div key={label} className="rounded-inner bg-white/[0.07] p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                      {label}
                    </p>
                    <p className="mt-1 font-display text-2xl font-bold">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-inner border border-cyan-300/20 bg-cyan-300/10 p-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan-100">
                  <Sparkles className="h-3.5 w-3.5" />
                  Rewrite applied
                </div>
                <p className="mt-2 text-xs leading-5 text-slate-300 line-through decoration-rose-300/70">
                  Responsible for campaigns.
                </p>
                <p className="mt-2 flex gap-2 text-xs font-semibold leading-5 text-white">
                  <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-200" />
                  Built GTM assets that influenced Rs 4.8 cr pipeline.
                </p>
              </div>
            </section>

            <section className="rounded-card border border-slate-200 bg-white p-4 shadow-sm">
              <div className="grid min-h-[390px] grid-cols-[74px_1fr] overflow-hidden rounded-inner border border-slate-200 bg-white">
                <aside className="bg-slate-950 p-3">
                  <div className="h-10 w-10 rounded-pill bg-white/90" />
                  <div className="mt-7 space-y-2">
                    {['w-full', 'w-4/5', 'w-3/5', 'w-full'].map((width, index) => (
                      <div
                        key={`${width}-${index}`}
                        className={`h-1.5 rounded-pill bg-white/30 ${width}`}
                      />
                    ))}
                  </div>
                </aside>
                <div className="p-5">
                  <div className="h-4 w-36 rounded-pill bg-slate-950" />
                  <div className="mt-2 h-2 w-24 rounded-pill bg-brand/70" />
                  <div className="mt-7 space-y-3">
                    {cvLines.map((line, index) => (
                      <div key={line}>
                        <p className="text-[11px] font-bold text-slate-500">{line}</p>
                        <div className="mt-1.5 space-y-1.5">
                          <div className="h-1.5 rounded-pill bg-slate-200" />
                          <div
                            className={`h-1.5 rounded-pill bg-slate-200 ${
                              index % 2 === 0 ? 'w-5/6' : 'w-3/4'
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {['JD matched', 'Facts preserved', 'PDF gated'].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-inner border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700"
              >
                <Check className="h-3.5 w-3.5 text-emerald-600" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-7 flex items-center justify-center gap-2 text-xs font-semibold text-slate-500">
        {['Paste JD', 'Upload CV', 'Generate PDF'].map((step, index) => (
          <span key={step} className="flex items-center gap-2">
            <span className="flex items-center gap-1.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-pill bg-brand/10 text-[10px] font-bold text-brand">
                {index + 1}
              </span>
              {step}
            </span>
            {index < 2 ? <Target className="h-3 w-3 text-slate-300" /> : null}
          </span>
        ))}
      </div>
    </div>
  );
}
