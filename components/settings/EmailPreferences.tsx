'use client';

import { useEffect, useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Prefs = {
  career_tips: boolean;
  product_updates: boolean;
  offers: boolean;
  newsletter: boolean;
};

const DEFAULTS: Prefs = { career_tips: false, product_updates: false, offers: false, newsletter: false };

const OPTIONS: Array<{ key: keyof Prefs; title: string; description: string }> = [
  { key: 'newsletter', title: 'Weekly newsletter', description: 'One useful job-search tip a week — a resume fix, an ATS myth busted, a stronger bullet.' },
  { key: 'career_tips', title: 'Career tips', description: 'Occasional guidance on resumes, interviews, and applications.' },
  { key: 'product_updates', title: 'Product updates', description: 'New CV Prime features and improvements as they ship.' },
  { key: 'offers', title: 'Offers & promotions', description: 'The occasional discount or seasonal offer. Never more than a couple a month.' },
];

function Toggle({ on, onClick, label }: { on: boolean; onClick: () => void; label: string }): JSX.Element {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      onClick={onClick}
      className={`relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition-colors ${on ? 'bg-brand' : 'bg-slate-300'}`}
    >
      <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${on ? 'translate-x-5' : 'translate-x-0.5'}`} />
    </button>
  );
}

export function EmailPreferences(): JSX.Element {
  const [prefs, setPrefs] = useState<Prefs>(DEFAULTS);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    fetch('/api/account/email-preferences')
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error('load failed'))))
      .then((data: { prefs?: Partial<Prefs> }) => {
        if (active) setPrefs({ ...DEFAULTS, ...(data.prefs ?? {}) });
      })
      .catch(() => {
        if (active) setError('Could not load your preferences.');
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const toggle = (key: keyof Prefs): void => {
    setPrefs((p) => ({ ...p, [key]: !p[key] }));
    setSaved(false);
  };

  const save = async (): Promise<void> => {
    setSaving(true);
    setError(null);
    try {
      const res = await fetch('/api/account/email-preferences', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(prefs),
      });
      if (!res.ok) throw new Error('save failed');
      setSaved(true);
    } catch {
      setError('Could not save. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="rounded-card border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-inner bg-brand/10 text-brand">
          <Mail className="h-5 w-5" />
        </div>
        <div>
          <h2 className="font-display text-xl font-bold text-slate-950">Email preferences</h2>
          <p className="text-sm text-slate-500">
            Choose which optional emails you get. Account, payment, and security emails are always sent.
          </p>
        </div>
      </div>

      <div className="mt-6 divide-y divide-slate-100">
        {OPTIONS.map((opt) => (
          <div key={opt.key} className="flex items-start justify-between gap-4 py-4">
            <div>
              <p className="text-sm font-semibold text-slate-900">{opt.title}</p>
              <p className="mt-1 text-sm leading-6 text-slate-500">{opt.description}</p>
            </div>
            <Toggle on={prefs[opt.key]} onClick={() => toggle(opt.key)} label={opt.title} />
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-3">
        <Button type="button" onClick={save} disabled={loading || saving}>
          {saving ? 'Saving…' : 'Save preferences'}
        </Button>
        {saved ? (
          <span className="flex items-center gap-1.5 text-sm font-medium text-emerald-600">
            <CheckCircle2 className="h-4 w-4" /> Saved
          </span>
        ) : null}
        {error ? <span className="text-sm text-red-600">{error}</span> : null}
      </div>
    </section>
  );
}
