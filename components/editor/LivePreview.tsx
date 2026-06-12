'use client';

import { useCVStore } from '@/store/cvStore';
import { templateMap } from '@/components/templates';

export function LivePreview(): JSX.Element {
  const data = useCVStore((state) => state.data);
  const templateId = useCVStore((state) => state.templateId);
  const Template = templateMap[templateId];

  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
        <div>
          <p className="font-display text-sm font-bold text-slate-950">Live preview</p>
          <p className="mt-1 text-xs font-medium text-slate-500">
            A4 layout, recruiter-facing view
          </p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold capitalize text-slate-600">
          {templateId}
        </span>
      </div>
      <div className="max-h-[calc(100vh-190px)] overflow-auto bg-[#dfe7ef] p-4 shadow-inner">
        <div className="mx-auto w-fit shadow-2xl shadow-slate-950/20">
          <Template data={data} />
        </div>
      </div>
    </div>
  );
}
