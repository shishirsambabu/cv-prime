import { Fragment, type ReactNode } from 'react';
import type {
  CVData,
  CVEducation,
  CVExperience,
  CVProject,
  SectionId,
} from '@/types/cv.types';
import { sectionTitle } from '@/lib/cv';
import { cn } from '@/lib/utils';

export interface TemplateProps {
  data: CVData;
  forExport?: boolean;
  highlight?: HighlightConfig;
}

export type TemplateVariant =
  | 'classic'
  | 'modern'
  | 'minimal'
  | 'executive'
  | 'creative'
  | 'technical'
  | 'academic'
  | 'premium';

interface TemplateTheme {
  pageClassName: string;
  nameClassName: string;
  titleClassName: string;
  metaClassName: string;
  summaryClassName: string;
  sectionTitleClassName: string;
  sectionAccentClassName: string;
  itemTitleClassName: string;
  mutedClassName: string;
  chipClassName: string;
  layout: 'single' | 'sidebar' | 'editorial' | 'compact' | 'technical';
  sidebarClassName?: string;
  mainClassName?: string;
  headerClassName?: string;
}

const templateThemes: Record<TemplateVariant, TemplateTheme> = {
  classic: {
    pageClassName: 'bg-[#fbfaf7] px-[54px] py-[50px] font-serif text-[#201b16]',
    nameClassName: 'text-[27pt] font-semibold leading-none',
    titleClassName: 'mt-2 text-[12pt] italic text-[#62564b]',
    metaClassName: 'mt-4 text-[9pt] uppercase text-[#6d6258]',
    summaryClassName: 'mt-5 border-y border-[#d6cfc4] py-4 text-[10.5pt] leading-[1.62]',
    sectionTitleClassName: 'text-[9pt] font-semibold uppercase text-[#3b332c]',
    sectionAccentClassName: 'border-[#b9a992]',
    itemTitleClassName: 'text-[11pt] font-semibold text-[#201b16]',
    mutedClassName: 'text-[#655c52]',
    chipClassName: 'border-[#d7cfc3] bg-white text-[#40382f]',
    layout: 'single',
  },
  modern: {
    pageClassName: 'bg-white px-[46px] py-[42px] text-[#111827]',
    nameClassName: 'text-[29pt] font-bold leading-none',
    titleClassName: 'mt-2 text-[12pt] font-medium text-[#2563eb]',
    metaClassName: 'mt-4 text-[9pt] uppercase text-[#475569]',
    summaryClassName: 'mt-5 rounded-[4px] bg-[#eff6ff] px-5 py-4 text-[10pt] leading-[1.6] text-[#1f2937]',
    sectionTitleClassName: 'text-[9pt] font-bold uppercase text-[#1d4ed8]',
    sectionAccentClassName: 'border-[#93c5fd]',
    itemTitleClassName: 'text-[11pt] font-bold text-[#0f172a]',
    mutedClassName: 'text-[#475569]',
    chipClassName: 'border-[#bfdbfe] bg-[#eff6ff] text-[#1e3a8a]',
    layout: 'sidebar',
    sidebarClassName: 'bg-[#0f172a] text-white',
    mainClassName: 'pl-[34px]',
  },
  minimal: {
    pageClassName: 'bg-white px-[58px] py-[58px] text-[#18181b]',
    nameClassName: 'text-[24pt] font-medium leading-tight',
    titleClassName: 'mt-1 text-[10pt] text-[#52525b]',
    metaClassName: 'mt-4 text-[9pt] text-[#71717a]',
    summaryClassName: 'mt-6 text-[10pt] leading-[1.72] text-[#3f3f46]',
    sectionTitleClassName: 'text-[8.5pt] font-semibold uppercase text-[#27272a]',
    sectionAccentClassName: 'border-[#e4e4e7]',
    itemTitleClassName: 'text-[10.5pt] font-semibold text-[#18181b]',
    mutedClassName: 'text-[#71717a]',
    chipClassName: 'border-[#e4e4e7] bg-white text-[#3f3f46]',
    layout: 'compact',
  },
  executive: {
    pageClassName: 'bg-[#fbfbfa] px-[50px] py-[48px] font-serif text-[#15120f]',
    nameClassName: 'text-[30pt] font-semibold leading-none',
    titleClassName: 'mt-2 text-[12pt] text-[#8a6d2f]',
    metaClassName: 'mt-5 text-[9pt] uppercase text-[#5b554d]',
    summaryClassName: 'mt-6 border-l-[3px] border-[#a8863d] pl-5 text-[10.5pt] leading-[1.65] text-[#2c2721]',
    sectionTitleClassName: 'text-[9pt] font-semibold uppercase text-[#7a5d20]',
    sectionAccentClassName: 'border-[#c6b27a]',
    itemTitleClassName: 'text-[11pt] font-semibold text-[#15120f]',
    mutedClassName: 'text-[#5b554d]',
    chipClassName: 'border-[#ded4b4] bg-[#fffdf8] text-[#44391e]',
    layout: 'editorial',
  },
  creative: {
    pageClassName: 'bg-[#fff7f3] px-[42px] py-[40px] text-[#1f1b2d]',
    nameClassName: 'text-[31pt] font-black leading-none',
    titleClassName: 'mt-2 text-[12pt] font-semibold text-[#be123c]',
    metaClassName: 'mt-4 text-[9pt] uppercase text-[#6b5b66]',
    summaryClassName: 'mt-5 rounded-[6px] border border-[#fecdd3] bg-white px-5 py-4 text-[10pt] leading-[1.62]',
    sectionTitleClassName: 'text-[9pt] font-black uppercase text-[#be123c]',
    sectionAccentClassName: 'border-[#fda4af]',
    itemTitleClassName: 'text-[11pt] font-bold text-[#1f1b2d]',
    mutedClassName: 'text-[#6b5b66]',
    chipClassName: 'border-[#fecdd3] bg-white text-[#9f1239]',
    layout: 'sidebar',
    sidebarClassName: 'bg-[#be123c] text-white',
    mainClassName: 'pl-[30px]',
  },
  technical: {
    pageClassName: 'bg-[#f8fafc] px-[42px] py-[40px] font-mono text-[#0f172a]',
    nameClassName: 'text-[24pt] font-bold leading-tight',
    titleClassName: 'mt-2 text-[10pt] font-semibold text-[#047857]',
    metaClassName: 'mt-4 text-[8.5pt] uppercase text-[#475569]',
    summaryClassName: 'mt-5 border border-[#cbd5e1] bg-white p-4 text-[9.5pt] leading-[1.6]',
    sectionTitleClassName: 'text-[8.5pt] font-bold uppercase text-[#047857]',
    sectionAccentClassName: 'border-[#86efac]',
    itemTitleClassName: 'text-[10pt] font-bold text-[#0f172a]',
    mutedClassName: 'text-[#475569]',
    chipClassName: 'border-[#bbf7d0] bg-[#ecfdf5] text-[#065f46]',
    layout: 'technical',
  },
  academic: {
    pageClassName: 'bg-white px-[60px] py-[54px] font-serif text-[#1c1917]',
    nameClassName: 'text-[25pt] font-semibold leading-tight',
    titleClassName: 'mt-2 text-[11pt] text-[#57534e]',
    metaClassName: 'mt-4 text-[9pt] text-[#57534e]',
    summaryClassName: 'mt-5 text-[10.5pt] leading-[1.7] text-[#292524]',
    sectionTitleClassName: 'text-[9pt] font-semibold uppercase text-[#44403c]',
    sectionAccentClassName: 'border-[#d6d3d1]',
    itemTitleClassName: 'text-[11pt] font-semibold text-[#1c1917]',
    mutedClassName: 'text-[#57534e]',
    chipClassName: 'border-[#d6d3d1] bg-[#fafaf9] text-[#44403c]',
    layout: 'single',
  },
  premium: {
    pageClassName: 'bg-[#101114] px-[42px] py-[40px] text-white',
    nameClassName: 'text-[31pt] font-bold leading-none',
    titleClassName: 'mt-2 text-[12pt] font-semibold text-[#f5c542]',
    metaClassName: 'mt-4 text-[9pt] uppercase text-[#d1d5db]',
    summaryClassName: 'mt-5 rounded-[6px] border border-white/15 bg-white/8 px-5 py-4 text-[10pt] leading-[1.62] text-[#f3f4f6]',
    sectionTitleClassName: 'text-[9pt] font-bold uppercase text-[#f5c542]',
    sectionAccentClassName: 'border-[#f5c542]',
    itemTitleClassName: 'text-[11pt] font-bold text-white',
    mutedClassName: 'text-[#d1d5db]',
    chipClassName: 'border-white/20 bg-white/10 text-[#f8fafc]',
    layout: 'sidebar',
    sidebarClassName: 'bg-[#f5c542] text-[#101114]',
    mainClassName: 'pl-[30px]',
  },
};

// ── Change highlighting ──────────────────────────────────────────────
// An optional `highlight` config can be threaded into a template (see
// TemplateProps). Any summary text or experience bullet whose trimmed value
// is in `texts` is visually marked. `tone` controls the colour: 'added'
// (green, used on the After CV) or 'removed' (amber, used on the Before CV).
// When omitted, templates render exactly as before. This is passed via props
// rather than React context so templates stay server-renderable.
export interface HighlightConfig {
  texts: Set<string>;
  tone: 'added' | 'removed';
}

function highlightTone(config: HighlightConfig | undefined, value: string): string | null {
  if (!config || !value) {
    return null;
  }
  return config.texts.has(value.trim()) ? config.tone : null;
}

function highlightClass(tone: string): string {
  return tone === 'added'
    ? 'rounded-[2px] bg-emerald-200/70 box-decoration-clone px-[2px] text-[#0f172a]'
    : 'rounded-[2px] bg-amber-200/70 box-decoration-clone px-[2px] text-[#0f172a]';
}

function hasText(value: string): boolean {
  return value.trim().length > 0;
}

function contactLine(data: CVData): string {
  return [
    data.personal.email,
    data.personal.phone,
    data.personal.location,
    data.personal.linkedin,
    data.personal.website,
  ]
    .filter(hasText)
    .join(' | ');
}

function itemDate(startDate: string, endDate: string, current = false): string {
  return [startDate, current ? 'Present' : endDate].filter(hasText).join(' - ');
}

function Section({
  title,
  children,
  theme,
}: {
  title: string;
  children: ReactNode;
  theme: TemplateTheme;
}): JSX.Element {
  return (
    <section className="mb-[18px] break-inside-avoid">
      <h2
        className={cn(
          'border-b pb-[5px]',
          theme.sectionAccentClassName,
          theme.sectionTitleClassName
        )}
      >
        {title}
      </h2>
      <div className="mt-[10px]">{children}</div>
    </section>
  );
}

function BulletList({
  items,
  theme,
  highlight,
}: {
  items: string[];
  theme: TemplateTheme;
  highlight?: HighlightConfig;
}): JSX.Element | null {
  const filtered = items.filter(hasText);

  if (filtered.length === 0) {
    return null;
  }

  return (
    <ul className={cn('mt-[6px] list-disc space-y-[3px] pl-[16px] text-[9.5pt] leading-[1.48]', theme.mutedClassName)}>
      {filtered.map((item, index) => {
        const tone = highlightTone(highlight, item);
        return (
          <li key={`${item}-${index}`}>
            {tone ? <span className={highlightClass(tone)}>{item}</span> : item}
          </li>
        );
      })}
    </ul>
  );
}

function ChipList({
  items,
  theme,
}: {
  items: string[];
  theme: TemplateTheme;
}): JSX.Element | null {
  const filtered = items.filter(hasText);

  if (filtered.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-[6px]">
      {filtered.map((item) => (
        <span
          key={item}
          className={cn('rounded-[3px] border px-[7px] py-[3px] text-[8.5pt]', theme.chipClassName)}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function ExperienceItem({
  item,
  theme,
  highlight,
}: {
  item: CVExperience;
  theme: TemplateTheme;
  highlight?: HighlightConfig;
}): JSX.Element {
  return (
    <article className="break-inside-avoid">
      <div className="flex items-start justify-between gap-[18px]">
        <div>
          <p className={theme.itemTitleClassName}>{item.role || 'Role title'}</p>
          <p className={cn('mt-[2px] text-[9.5pt]', theme.mutedClassName)}>
            {item.company || 'Company name'}
          </p>
        </div>
        <p className={cn('shrink-0 text-right text-[8.5pt] uppercase', theme.mutedClassName)}>
          {itemDate(item.startDate, item.endDate, item.current)}
        </p>
      </div>
      <BulletList items={item.bullets} theme={theme} highlight={highlight} />
    </article>
  );
}

function EducationItem({
  item,
  theme,
}: {
  item: CVEducation;
  theme: TemplateTheme;
}): JSX.Element {
  return (
    <article className="break-inside-avoid">
      <div className="flex items-start justify-between gap-[18px]">
        <div>
          <p className={theme.itemTitleClassName}>{item.degree || 'Degree'}</p>
          <p className={cn('mt-[2px] text-[9.5pt]', theme.mutedClassName)}>
            {[item.institution, item.field].filter(hasText).join(' | ') || 'Institution'}
          </p>
          {item.gpa ? (
            <p className={cn('mt-[2px] text-[9pt]', theme.mutedClassName)}>GPA {item.gpa}</p>
          ) : null}
        </div>
        <p className={cn('shrink-0 text-right text-[8.5pt] uppercase', theme.mutedClassName)}>
          {itemDate(item.startDate, item.endDate)}
        </p>
      </div>
    </article>
  );
}

function ProjectItem({
  item,
  theme,
}: {
  item: CVProject;
  theme: TemplateTheme;
}): JSX.Element {
  return (
    <article className="break-inside-avoid">
      <div className="flex items-start justify-between gap-[18px]">
        <div>
          <p className={theme.itemTitleClassName}>{item.name || 'Project name'}</p>
          {item.description ? (
            <p className={cn('mt-[3px] text-[9.5pt] leading-[1.5]', theme.mutedClassName)}>
              {item.description}
            </p>
          ) : null}
        </div>
        {item.url ? (
          <p className={cn('shrink-0 text-right text-[8.5pt]', theme.mutedClassName)}>
            {item.url}
          </p>
        ) : null}
      </div>
      <div className="mt-[7px]">
        <ChipList items={item.tech} theme={theme} />
      </div>
    </article>
  );
}

function sectionContent(
  sectionId: SectionId,
  data: CVData,
  theme: TemplateTheme,
  highlight?: HighlightConfig
): JSX.Element | null {
  switch (sectionId) {
    case 'personal':
      return null;
    case 'experience':
      return data.experience.length > 0 ? (
        <Section title={sectionTitle(sectionId)} theme={theme}>
          <div className="space-y-[13px]">
            {data.experience.map((item) => (
              <ExperienceItem key={item.id} item={item} theme={theme} highlight={highlight} />
            ))}
          </div>
        </Section>
      ) : null;
    case 'education':
      return data.education.length > 0 ? (
        <Section title={sectionTitle(sectionId)} theme={theme}>
          <div className="space-y-[12px]">
            {data.education.map((item) => (
              <EducationItem key={item.id} item={item} theme={theme} />
            ))}
          </div>
        </Section>
      ) : null;
    case 'skills': {
      const skillGroups = [
        { label: 'Technical', items: data.skills.technical },
        { label: 'Soft', items: data.skills.soft },
        { label: 'Languages', items: data.skills.languages },
      ].filter((group) => group.items.some(hasText));

      return skillGroups.length > 0 ? (
        <Section title={sectionTitle(sectionId)} theme={theme}>
          <div className="space-y-[9px]">
            {skillGroups.map((group) => (
              <div key={group.label} className="space-y-[5px]">
                <p className={cn('text-[8.5pt] font-semibold uppercase', theme.mutedClassName)}>
                  {group.label}
                </p>
                <ChipList items={group.items} theme={theme} />
              </div>
            ))}
          </div>
        </Section>
      ) : null;
    }
    case 'projects':
      return data.projects.length > 0 ? (
        <Section title={sectionTitle(sectionId)} theme={theme}>
          <div className="space-y-[12px]">
            {data.projects.map((item) => (
              <ProjectItem key={item.id} item={item} theme={theme} />
            ))}
          </div>
        </Section>
      ) : null;
    case 'certifications':
      return data.certifications.some(hasText) ? (
        <Section title={sectionTitle(sectionId)} theme={theme}>
          <BulletList items={data.certifications} theme={theme} />
        </Section>
      ) : null;
    case 'awards':
      return data.awards.some(hasText) ? (
        <Section title={sectionTitle(sectionId)} theme={theme}>
          <BulletList items={data.awards} theme={theme} />
        </Section>
      ) : null;
  }
}

function Summary({
  data,
  theme,
  flush = false,
  highlight,
}: {
  data: CVData;
  theme: TemplateTheme;
  flush?: boolean;
  highlight?: HighlightConfig;
}): JSX.Element {
  // When the summary is rendered standalone at the top of a column (sidebar
  // layouts) its built-in top margin (`mt-5`/`mt-6`) creates an unwanted gap.
  // `flush` strips that leading margin so it sits tight to the top.
  const className = flush
    ? theme.summaryClassName.replace(/\bmt-\d+\b/, 'mt-0')
    : theme.summaryClassName;
  const tone = highlightTone(highlight, data.personal.summary ?? '');

  if (!data.personal.summary) {
    return (
      <p className={cn(className, 'opacity-70')}>
        Add a focused 3 to 4 line summary that explains your target role, strongest proof points, and what you want next.
      </p>
    );
  }

  return (
    <p className={className}>
      {tone ? (
        <span className={highlightClass(tone)}>{data.personal.summary}</span>
      ) : (
        data.personal.summary
      )}
    </p>
  );
}

function Header({
  data,
  theme,
  showSummary = true,
  highlight,
}: {
  data: CVData;
  theme: TemplateTheme;
  showSummary?: boolean;
  highlight?: HighlightConfig;
}): JSX.Element {
  const contacts = contactLine(data);

  return (
    <header className={cn('break-inside-avoid', theme.headerClassName)}>
      <h1 className={theme.nameClassName}>{data.personal.name || 'Your name'}</h1>
      <p className={theme.titleClassName}>{data.personal.title || 'Target role'}</p>
      {contacts ? <p className={theme.metaClassName}>{contacts}</p> : null}
      {showSummary ? <Summary data={data} theme={theme} highlight={highlight} /> : null}
    </header>
  );
}

function orderedMainSections(data: CVData): SectionId[] {
  return data.sectionOrder.filter((sectionId) => sectionId !== 'personal');
}

function SidebarLayout({
  data,
  theme,
  highlight,
}: {
  data: CVData;
  theme: TemplateTheme;
  highlight?: HighlightConfig;
}): JSX.Element {
  const sidebarSections: SectionId[] = ['skills', 'education', 'certifications'];
  const mainSections = orderedMainSections(data).filter(
    (sectionId) => !sidebarSections.includes(sectionId)
  );

  return (
    <div className="grid min-h-[1035px] grid-cols-[220px_1fr]">
      <aside className={cn('px-[24px] py-[30px]', theme.sidebarClassName)}>
        {/* Summary is intentionally excluded from the sidebar and rendered at
            the top of the main column so ATS parsers see it directly before
            work experience in the DOM reading order. */}
        <Header data={data} theme={theme} showSummary={false} highlight={highlight} />
        <div className="mt-[22px]">
          {sidebarSections.map((sectionId) => (
            <Fragment key={sectionId}>{sectionContent(sectionId, data, theme, highlight)}</Fragment>
          ))}
        </div>
      </aside>
      <main className={cn('py-[30px] pr-[24px]', theme.mainClassName)}>
        <div className="mb-[14px]">
          <Summary data={data} theme={theme} flush highlight={highlight} />
        </div>
        {mainSections.map((sectionId) => (
          <Fragment key={sectionId}>{sectionContent(sectionId, data, theme, highlight)}</Fragment>
        ))}
      </main>
    </div>
  );
}

function StandardLayout({
  data,
  theme,
  highlight,
}: {
  data: CVData;
  theme: TemplateTheme;
  highlight?: HighlightConfig;
}): JSX.Element {
  const sections = orderedMainSections(data);

  if (theme.layout === 'editorial') {
    return (
      <div>
        <div className="grid grid-cols-[1fr_170px] gap-[34px]">
          <Header data={data} theme={theme} highlight={highlight} />
          <div className="border-l border-[#c6b27a] pl-[20px] text-[9pt] leading-[1.6] text-[#5b554d]">
            <p className="font-semibold uppercase text-[#7a5d20]">Profile</p>
            <p className="mt-[8px]">{contactLine(data) || 'Add contact details'}</p>
          </div>
        </div>
        <div className="mt-[26px] grid grid-cols-[1fr_1fr] gap-x-[32px]">
          {sections.map((sectionId) => (
            <Fragment key={sectionId}>{sectionContent(sectionId, data, theme, highlight)}</Fragment>
          ))}
        </div>
      </div>
    );
  }

  if (theme.layout === 'technical') {
    return (
      <div>
        <Header data={data} theme={theme} highlight={highlight} />
        <div className="mt-[24px] grid grid-cols-[1.15fr_0.85fr] gap-[26px]">
          <div>
            {sections
              .filter((sectionId) => ['experience', 'projects'].includes(sectionId))
              .map((sectionId) => (
                <Fragment key={sectionId}>{sectionContent(sectionId, data, theme, highlight)}</Fragment>
              ))}
          </div>
          <div>
            {sections
              .filter((sectionId) => !['experience', 'projects'].includes(sectionId))
              .map((sectionId) => (
                <Fragment key={sectionId}>{sectionContent(sectionId, data, theme, highlight)}</Fragment>
              ))}
          </div>
        </div>
      </div>
    );
  }

  if (theme.layout === 'compact') {
    return (
      <div>
        <Header data={data} theme={theme} highlight={highlight} />
        <div className="mt-[24px] grid grid-cols-[1fr_1fr] gap-x-[34px]">
          {sections.map((sectionId) => (
            <Fragment key={sectionId}>{sectionContent(sectionId, data, theme, highlight)}</Fragment>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header data={data} theme={theme} highlight={highlight} />
      <div className="mt-[24px]">
        {sections.map((sectionId) => (
          <Fragment key={sectionId}>{sectionContent(sectionId, data, theme, highlight)}</Fragment>
        ))}
      </div>
    </div>
  );
}

export function createTemplate(variant: TemplateVariant): (props: TemplateProps) => JSX.Element {
  return function Template({ data, highlight }: TemplateProps): JSX.Element {
    const theme = templateThemes[variant];

    return (
      <article
        className={cn('mx-auto min-h-[1123px] w-[794px] shadow-sm', theme.pageClassName)}
        style={{ fontSize: '10pt', lineHeight: 1.45 }}
      >
        {theme.layout === 'sidebar' ? (
          <SidebarLayout data={data} theme={theme} highlight={highlight} />
        ) : (
          <StandardLayout data={data} theme={theme} highlight={highlight} />
        )}
      </article>
    );
  };
}
