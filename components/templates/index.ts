export { TemplateAcademic } from './TemplateAcademic';
export { TemplateClassic } from './TemplateClassic';
export { TemplateCreative } from './TemplateCreative';
export { TemplateExecutive } from './TemplateExecutive';
export { TemplateMinimal } from './TemplateMinimal';
export { TemplateModern } from './TemplateModern';
export { TemplatePremium } from './TemplatePremium';
export { TemplateTechnical } from './TemplateTechnical';
export { type TemplateProps } from './template-utils';

import { TemplateAcademic } from './TemplateAcademic';
import { TemplateClassic } from './TemplateClassic';
import { TemplateCreative } from './TemplateCreative';
import { TemplateExecutive } from './TemplateExecutive';
import { TemplateMinimal } from './TemplateMinimal';
import { TemplateModern } from './TemplateModern';
import { TemplatePremium } from './TemplatePremium';
import { TemplateTechnical } from './TemplateTechnical';
import type { ComponentType } from 'react';
import type { TemplateId } from '@/types/cv.types';
import type { TemplateProps } from './template-utils';

export const templateMap: Record<TemplateId, ComponentType<TemplateProps>> = {
  classic: TemplateClassic,
  modern: TemplateModern,
  minimal: TemplateMinimal,
  executive: TemplateExecutive,
  creative: TemplateCreative,
  technical: TemplateTechnical,
  academic: TemplateAcademic,
  premium: TemplatePremium,
};
