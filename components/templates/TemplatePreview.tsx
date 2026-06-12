import type { ComponentType } from 'react';
import type { TemplateProps } from '@/components/templates/template-utils';
import { sampleCVData } from '@/lib/sampleCV';
import { cn } from '@/lib/utils';

interface TemplatePreviewProps {
  Template: ComponentType<TemplateProps>;
  scale: number;
  className?: string;
}

const A4_WIDTH = 794;
const A4_HEIGHT = 1123;

export function TemplatePreview({
  Template,
  scale,
  className,
}: TemplatePreviewProps): JSX.Element {
  return (
    <div
      className={cn('overflow-hidden rounded-sm bg-white shadow-lg', className)}
      style={{
        width: A4_WIDTH * scale,
        height: A4_HEIGHT * scale,
      }}
    >
      <div
        style={{
          width: A4_WIDTH,
          height: A4_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        <Template data={sampleCVData} />
      </div>
    </div>
  );
}
