import type { CVData } from '@/types/cv.types';

function cleanText(value: string): string {
  return value.trim();
}

function line(label: string, value: string): string | null {
  const cleaned = cleanText(value);
  return cleaned ? `${label}: ${cleaned}` : null;
}

export function cvDataToPlainText(data: CVData): string {
  const sections: string[] = [];

  sections.push(
    [
      'Personal',
      line('Name', data.personal.name),
      line('Title', data.personal.title),
      line('Email', data.personal.email),
      line('Phone', data.personal.phone),
      line('Location', data.personal.location),
      line('LinkedIn', data.personal.linkedin),
      line('Website', data.personal.website),
      line('Summary', data.personal.summary),
    ]
      .filter(Boolean)
      .join('\n')
  );

  if (data.experience.length > 0) {
    sections.push(
      [
        'Experience',
        ...data.experience.map((item) =>
          [
            `${item.role || 'Role'} at ${item.company || 'Company'}`,
            line('Dates', [item.startDate, item.current ? 'Present' : item.endDate].filter(Boolean).join(' - ')),
            ...item.bullets.filter(cleanText).map((bullet) => `- ${bullet}`),
          ]
            .filter(Boolean)
            .join('\n')
        ),
      ].join('\n\n')
    );
  }

  if (data.education.length > 0) {
    sections.push(
      [
        'Education',
        ...data.education.map((item) =>
          [
            `${item.degree || 'Degree'}${item.field ? `, ${item.field}` : ''}`,
            line('Institution', item.institution),
            line('Dates', [item.startDate, item.endDate].filter(Boolean).join(' - ')),
            line('GPA', item.gpa),
          ]
            .filter(Boolean)
            .join('\n')
        ),
      ].join('\n\n')
    );
  }

  sections.push(
    [
      'Skills',
      line('Technical', data.skills.technical.filter(cleanText).join(', ')),
      line('Soft', data.skills.soft.filter(cleanText).join(', ')),
      line('Languages', data.skills.languages.filter(cleanText).join(', ')),
    ]
      .filter(Boolean)
      .join('\n')
  );

  if (data.projects.length > 0) {
    sections.push(
      [
        'Projects',
        ...data.projects.map((project) =>
          [
            project.name || 'Project',
            line('Description', project.description),
            line('Tech', project.tech.filter(cleanText).join(', ')),
            line('URL', project.url),
          ]
            .filter(Boolean)
            .join('\n')
        ),
      ].join('\n\n')
    );
  }

  if (data.certifications.some(cleanText)) {
    sections.push(`Certifications\n${data.certifications.filter(cleanText).join('\n')}`);
  }

  if (data.awards.some(cleanText)) {
    sections.push(`Awards\n${data.awards.filter(cleanText).join('\n')}`);
  }

  return sections.filter(cleanText).join('\n\n');
}
