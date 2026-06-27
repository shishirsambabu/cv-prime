'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowRightLeft } from 'lucide-react';

type Mode = 'toPct' | 'toCgpa';
type Formula = 'cbse' | 'vtu' | 'custom';

const FORMULAS: Record<Formula, { label: string; note: string }> = {
  cbse: { label: 'CBSE / general (CGPA × 9.5)', note: 'The most common rule in India: Percentage = CGPA × 9.5.' },
  vtu: { label: 'VTU ((CGPA − 0.75) × 10)', note: 'Used by VTU and some technical universities: Percentage = (CGPA − 0.75) × 10.' },
  custom: { label: 'Custom multiplier', note: 'Enter your university\'s official multiplier if it differs.' },
};

function cgpaToPct(cgpa: number, formula: Formula, mult: number): number {
  if (formula === 'vtu') return (cgpa - 0.75) * 10;
  if (formula === 'custom') return cgpa * mult;
  return cgpa * 9.5;
}
function pctToCgpa(pct: number, formula: Formula, mult: number): number {
  if (formula === 'vtu') return pct / 10 + 0.75;
  if (formula === 'custom') return mult ? pct / mult : 0;
  return pct / 9.5;
}

export function CgpaConverter(): JSX.Element {
  const [mode, setMode] = useState<Mode>('toPct');
  const [formula, setFormula] = useState<Formula>('cbse');
  const [mult, setMult] = useState('9.5');
  const [value, setValue] = useState('');

  const num = parseFloat(value);
  const m = parseFloat(mult) || 9.5;
  const valid = !Number.isNaN(num) && num >= 0 && (mode === 'toPct' ? num <= 10 : num <= 100);

  let output = '';
  if (valid) {
    if (mode === 'toPct') {
      const pct = Math.max(0, Math.min(100, cgpaToPct(num, formula, m)));
      output = `${pct.toFixed(2)}%`;
    } else {
      const cgpa = Math.max(0, Math.min(10, pctToCgpa(num, formula, m)));
      output = `${cgpa.toFixed(2)} CGPA`;
    }
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      {/* Mode toggle */}
      <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 p-1 text-sm font-bold">
        <button
          type="button"
          onClick={() => { setMode('toPct'); setValue(''); }}
          className={`rounded-full px-4 py-2 transition ${mode === 'toPct' ? 'bg-brand text-brand-foreground' : 'text-slate-600'}`}
        >
          CGPA → %
        </button>
        <button
          type="button"
          onClick={() => { setMode('toCgpa'); setValue(''); }}
          className={`rounded-full px-4 py-2 transition ${mode === 'toCgpa' ? 'bg-brand text-brand-foreground' : 'text-slate-600'}`}
        >
          % → CGPA
        </button>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cgpa-value" className="text-sm font-bold text-slate-800">
            {mode === 'toPct' ? 'Your CGPA (out of 10)' : 'Your percentage'}
          </label>
          <input
            id="cgpa-value"
            type="number"
            inputMode="decimal"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={mode === 'toPct' ? 'e.g. 8.2' : 'e.g. 77.9'}
            className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 p-3 text-lg font-semibold text-slate-900 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </div>
        <div>
          <label htmlFor="cgpa-formula" className="text-sm font-bold text-slate-800">Conversion formula</label>
          <select
            id="cgpa-formula"
            value={formula}
            onChange={(e) => setFormula(e.target.value as Formula)}
            className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 p-3 text-sm font-semibold text-slate-900 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
          >
            {(Object.keys(FORMULAS) as Formula[]).map((f) => (
              <option key={f} value={f}>{FORMULAS[f].label}</option>
            ))}
          </select>
          {formula === 'custom' ? (
            <input
              type="number"
              inputMode="decimal"
              value={mult}
              onChange={(e) => setMult(e.target.value)}
              placeholder="Multiplier (e.g. 9.5)"
              className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 p-3 text-sm font-semibold text-slate-900 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            />
          ) : null}
        </div>
      </div>

      <p className="mt-3 text-xs text-slate-500">{FORMULAS[formula].note}</p>

      <div className="mt-6 flex flex-col items-center justify-center rounded-2xl bg-slate-950 p-7 text-center text-white">
        <ArrowRightLeft className="h-5 w-5 text-brand" />
        <p className="mt-2 text-sm font-semibold text-slate-300">
          {mode === 'toPct' ? 'Equivalent percentage' : 'Equivalent CGPA'}
        </p>
        <p className="mt-1 font-display text-4xl font-bold text-white">
          {valid ? output : '—'}
        </p>
        {!valid && value ? (
          <p className="mt-2 text-xs text-amber-300">
            Enter a valid {mode === 'toPct' ? 'CGPA between 0 and 10' : 'percentage between 0 and 100'}.
          </p>
        ) : null}
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
        <p className="text-sm leading-6 text-slate-600">
          Putting this on your resume? Show whichever your target employer expects — many Indian recruiters prefer percentage, while some prefer CGPA. When in doubt, list both.
        </p>
        <Link href="/signup?next=/ai-cv" className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-sm font-bold text-brand-foreground transition hover:bg-brand-strong">
          Build an ATS resume free <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
