'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  Check,
  Download,
  Eye,
  FileText,
  Gauge,
  Lock,
  Sparkles,
  Target,
} from 'lucide-react';
import type { TemplateId } from '@/types/cv.types';
import type { Database } from '@/types/database.types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SectionPanel } from '@/components/editor/SectionPanel';
import { LivePreview } from '@/components/editor/LivePreview';
import { ATSScorePanel } from '@/components/editor/ATSScorePanel';
import { AIAssistPanel } from '@/components/editor/AIAssistPanel';
import { CoverLetterPanel } from '@/components/editor/CoverLetterPanel';
import { ExportPDFButton } from '@/components/editor/ExportPDFButton';
import { useAutoSave } from '@/hooks/useAutoSave';
import { templateMap } from '@/components/templates';
import { TemplatePreview } from '@/components/templates/TemplatePreview';
import { useCVStore } from '@/store/cvStore';
import { computeCompleteness } from '@/lib/cvCompleteness';
import { PRO_TEMPLATES } from '@/lib/constants';
import { UpgradeModal } from '@/components/payments/UpgradeModal';
import type { Plan } from '@/types/cv.types';

interface CVEditorProps {
  initialCV: Database['public']['Tables']['cvs']['Row'];
  plan: Plan;
}

const templateOptions: Array<{
  id: TemplateId;
  label: string;
  description: string;
  swatchClassName: string;
}> = [
  {
    id: 'classic',
    label: 'Classic',
    description: 'Formal serif layout',
    swatchClassName: 'bg-[#fbfaf7] border-[#b9a992]',
  },
  {
    id: 'modern',
    label: 'Modern',
    description: 'Crisp sidebar polish',
    swatchClassName: 'bg-[#eff6ff] border-[#2563eb]',
  },
  {
    id: 'minimal',
    label: 'Minimal',
    description: 'Quiet two-column scan',
    swatchClassName: 'bg-white border-[#a1a1aa]',
  },
  {
    id: 'executive',
    label: 'Executive',
    description: 'Leadership editorial',
    swatchClassName: 'bg-[#fbfbfa] border-[#a8863d]',
  },
  {
    id: 'creative',
    label: 'Creative',
    description: 'Portfolio-forward feel',
    swatchClassName: 'bg-[#fff7f3] border-[#be123c]',
  },
  {
    id: 'technical',
    label: 'Technical',
    description: 'Dense skills-first view',
    swatchClassName: 'bg-[#f8fafc] border-[#047857]',
  },
  {
    id: 'academic',
    label: 'Academic',
    description: 'Research-friendly serif',
    swatchClassName: 'bg-white border-[#78716c]',
  },
  {
    id: 'premium',
    label: 'Premium',
    description: 'High-contrast paid look',
    swatchClassName: 'bg-[#101114] border-[#f5c542]',
  },
];

function TemplateSwitcher({ plan }: { plan: Plan }): JSX.Element {
  const templateId = useCVStore((state) => state.templateId);
  const setTemplateId = useCVStore((state) => state.setTemplateId);
  const [showUpgrade, setShowUpgrade] = useState(false);

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {templateOptions.map((template) => {
          const gated = PRO_TEMPLATES.includes(template.id);
          const locked = gated && plan === 'free';
          const selected = templateId === template.id;
          const Template = templateMap[template.id];

          return (
            <button
              key={template.id}
              type="button"
              aria-pressed={selected}
              className={`group relative flex flex-col overflow-hidden rounded-inner border text-left transition duration-200 ${
                selected
                  ? 'border-brand bg-white shadow-xl shadow-brand/20 ring-2 ring-brand'
                  : locked
                  ? 'cursor-pointer border-slate-200 bg-white hover:border-slate-300'
                  : 'border-slate-200 bg-white hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-950/5'
              }`}
              onClick={() => {
                if (locked) {
                  setShowUpgrade(true);
                } else {
                  setTemplateId(template.id);
                }
              }}
            >
              {/* Live template preview thumbnail */}
              <span className="relative flex h-40 items-start justify-center overflow-hidden border-b border-slate-100 bg-[#eef3f8] pt-3">
                <TemplatePreview Template={Template} scale={0.156} className="shadow-md" />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#eef3f8] to-transparent" />

                {/* Lock overlay for gated templates on the free plan */}
                {locked ? (
                  <span className="absolute inset-0 flex items-center justify-center bg-white/55 backdrop-blur-[2px] transition group-hover:bg-white/40">
                    <span className="inline-flex items-center gap-1.5 rounded-pill bg-slate-950/90 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                      <Lock className="h-3.5 w-3.5" />
                      Unlock with Pro
                    </span>
                  </span>
                ) : null}

                {/* Selected check badge */}
                {selected ? (
                  <span className="absolute right-2 top-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-brand/30">
                    <Check className="h-4 w-4" />
                  </span>
                ) : null}
              </span>

              {/* Label row */}
              <span className="flex items-start justify-between gap-2 p-3">
                <span>
                  <span className="block font-display text-sm font-bold text-slate-950">
                    {template.label}
                  </span>
                  <span className="mt-0.5 block text-xs leading-5 text-slate-500">
                    {template.description}
                  </span>
                </span>
                {gated ? (
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-pill bg-amber-50 px-2 py-1 text-[11px] font-bold text-amber-700">
                    <Lock className="h-3 w-3" />
                    Pro
                  </span>
                ) : null}
              </span>
            </button>
          );
        })}
      </div>
      {showUpgrade ? (
        <div className="mt-4">
          <p className="mb-3 text-sm font-semibold text-slate-700">
            Premium templates are available on the Pro plan.
          </p>
          <UpgradeModal triggerLabel="Upgrade to Pro — unlock all templates" />
        </div>
      ) : null}
    </>
  );
}

export function CVEditor({ initialCV, plan }: CVEditorProps): JSX.Element {
  const hydrate = useCVStore((state) => state.hydrate);
  const isDirty = useCVStore((state) => state.isDirty);
  const lastSaved = useCVStore((state) => state.lastSaved);
  const data = useCVStore((state) => state.data);
  const completeness = useMemo(() => computeCompleteness(data), [data]);
  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit');

  useEffect(() => {
    const currentData = useCVStore.getState().data;

    hydrate({
      cvId: initialCV.id,
      data: {
        ...currentData,
        ...((initialCV.data as Partial<typeof currentData>) ?? {}),
      },
      templateId: (initialCV.template_id as TemplateId) ?? 'classic',
    });
    // Only hydrate on first mount for the loaded CV.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrate, initialCV.id]);

  useAutoSave();

  const savedLabel = useMemo(() => {
    if (isDirty) {
      return 'Unsaved changes';
    }

    if (!lastSaved) {
      return 'Saved';
    }

    return `Saved at ${lastSaved.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })}`;
  }, [isDirty, lastSaved]);

  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-panel bg-slate-950 p-5 text-white shadow-2xl shadow-slate-950/20 sm:p-6">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-pill bg-brand/25 blur-3xl" />
        <div className="relative">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-pill border border-white/10 bg-white/[0.08] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
                <Target className="h-3.5 w-3.5" />
                Editor
              </div>
              <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-[-0.04em]">
                {initialCV.title}
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                Build the master CV, choose a template, and prepare the draft for ATS scoring, AI rewrites, and export.
              </p>
              {completeness.nextStep ? (
                <p className="mt-4 inline-flex items-center gap-2 rounded-pill border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold text-cyan-100">
                  <Sparkles className="h-3.5 w-3.5" />
                  Next: {completeness.nextStep}
                </p>
              ) : (
                <p className="mt-4 inline-flex items-center gap-2 rounded-pill border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-xs font-semibold text-emerald-200">
                  <Check className="h-3.5 w-3.5" />
                  Your CV covers all the essentials
                </p>
              )}
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3">
                <div className="flex items-center justify-between gap-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-300">
                  <span className="flex items-center gap-2">
                    <Gauge className="h-4 w-4" />
                    Complete
                  </span>
                  <span className="tabular-nums text-cyan-200">{completeness.score}%</span>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-pill bg-white/15">
                  <div
                    className="h-full rounded-pill bg-cyan-300 transition-all duration-500"
                    style={{ width: `${completeness.score}%` }}
                  />
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-300">
                  <Sparkles className="h-4 w-4" />
                  AI
                </div>
                <p className="mt-2 font-display text-2xl font-bold">Ready</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-300">
                  <Download className="h-4 w-4" />
                  Export
                </div>
                <div className="mt-2">
                  <ExportPDFButton />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-card border border-white/10 bg-white/[0.06] p-4">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <Badge variant={isDirty ? 'secondary' : 'default'}>
                {isDirty ? <Check className="mr-1 h-3 w-3" /> : null}
                {savedLabel}
              </Badge>
              <div className="flex items-center gap-2 md:hidden">
                <Button
                  type="button"
                  variant={activeTab === 'edit' ? 'default' : 'outline'}
                  onClick={() => setActiveTab('edit')}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Edit
                </Button>
                <Button
                  type="button"
                  variant={activeTab === 'preview' ? 'default' : 'outline'}
                  onClick={() => setActiveTab('preview')}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  Preview
                </Button>
              </div>
            </div>
            <TemplateSwitcher plan={plan} />
          </div>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-2">
        <ATSScorePanel />
        <AIAssistPanel plan={plan} />
        <div className="xl:col-span-2">
          <CoverLetterPanel />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(420px,0.9fr)]">
        <section
          className={`${activeTab === 'preview' ? 'hidden md:block' : 'block'} space-y-4`}
        >
          <SectionPanel />
        </section>
        <aside
          className={`${activeTab === 'edit' ? 'hidden md:block' : 'block'} sticky top-24 self-start`}
        >
          <LivePreview />
        </aside>
      </div>
    </div>
  );
}
