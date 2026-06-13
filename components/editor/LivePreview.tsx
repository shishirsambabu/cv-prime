'use client';

import { useEffect, useRef, useState } from 'react';
import { useCVStore } from '@/store/cvStore';
import { templateMap } from '@/components/templates';

const CV_WIDTH = 794; // A4 at 96 dpi

export function LivePreview(): JSX.Element {
  const data = useCVStore((state) => state.data);
  const templateId = useCVStore((state) => state.templateId);
  const Template = templateMap[templateId];

  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      setScale(entry.contentRect.width / CV_WIDTH);
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scaledHeight = Math.round(1123 * scale);

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

      {/* bg tray */}
      <div className="bg-[#dfe7ef] p-3 shadow-inner">
        {/* measure available width */}
        <div ref={containerRef} className="w-full">
          {/* clipping frame — exactly as tall as one scaled A4 page */}
          <div
            className="relative mx-auto overflow-hidden rounded-lg shadow-2xl shadow-slate-950/20"
            style={{ width: '100%', height: scaledHeight }}
          >
            {/* full-width template, scaled down */}
            <div
              style={{
                width: CV_WIDTH,
                transformOrigin: 'top left',
                transform: `scale(${scale})`,
              }}
            >
              <Template data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
