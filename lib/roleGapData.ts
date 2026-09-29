import type { AtsGuideData } from '@/lib/atsGuideData';
import type { CoverLetterData } from '@/lib/coverLetterData';
import type { RoleData } from '@/lib/roleData';

// Qualitative fallbacks for roles without hand-written ATS-guide / cover-letter data.
// Everything is derived from the role's curated keySkills, whatToInclude, commonMistakes and
// topCompanies — no salary figures or statistics are generated.

function list(items: string[], max: number): string {
  return items.slice(0, max).join(', ');
}

export function generateAtsGuideFallback(role: RoleData): AtsGuideData {
  const title = role.displayTitle;
  const lower = title.toLowerCase();
  const skills = role.keySkills;
  return {
    atsKeywords: [title, ...skills],
    mustHaveSections: ['Professional Summary', 'Key Skills', 'Work Experience', 'Education', 'Certifications (if relevant)'],
    formattingRules: [
      'Use a single-column layout — tables, text boxes and multi-column templates break most ATS parsers',
      'Name sections with standard labels such as "Work Experience", "Education" and "Skills" so ATS can map them',
      `Include the exact job title from the posting (for example "${title}") in your headline or current role`,
      'Use a standard font (Arial, Calibri, Georgia) and submit a text-based PDF or .docx, not a scanned image',
      'Keep contact details in the body of the document, not the header or footer, where parsers often skip them',
    ],
    commonAtsFailures: [
      ...role.commonMistakes.slice(0, 3),
      'Using icons, graphics or skill bars instead of plain-text skills — ATS cannot read them',
      `Writing only abbreviations without the full ${lower} term used in the job description`,
    ],
    keywordTips: [
      `Mirror the exact wording of the job description for core ${lower} skills — ATS matching is largely literal`,
      `Place your strongest skills (${list(skills, 4)}) in a dedicated Skills section and again inside experience bullets`,
      'Write both the abbreviation and the full term once, for example "CRM (Customer Relationship Management)"',
      'Tie each keyword to a result in a bullet so recruiters see context as well as the match',
    ],
    faqs: [
      {
        q: `What ATS keywords should a ${lower} include on their CV in India?`,
        a: `Start with the exact job title and the skills that recur in the postings you apply to. For ${lower} roles these commonly include ${list(skills, 6)}. Use the wording from each job description rather than a generic list, and place keywords in both a Skills section and your experience bullets.`,
      },
      {
        q: `Which CV format works best for ${lower} applications?`,
        a: 'A single-column, reverse-chronological CV in a text-based PDF or .docx is the safest format across ATS platforms and Indian job portals. Avoid tables, columns, headers and footers for essential information.',
      },
      {
        q: `How can I check whether my ${lower} CV passes ATS?`,
        a: 'Paste the job description and your CV into the CV Prime ATS checker to see which keywords are missing and which formatting issues may affect parsing, then fix them before you apply.',
      },
    ],
  };
}

export function generateCoverLetterFallback(role: RoleData): CoverLetterData {
  const title = role.displayTitle;
  const lower = title.toLowerCase();
  const skills = role.keySkills;
  const companies = role.topCompanies.length > 0 ? list(role.topCompanies, 3) : 'leading employers';
  return {
    dos: [
      `Open with the specific ${lower} role and one achievement that proves you can do it`,
      `Name 2–3 skills from the job description (for example ${list(skills, 3)}) and back each with evidence`,
      'Quantify at least one result — a percentage, a count, a time saving or a revenue figure',
      'Explain why this company specifically, using something from its products, clients or recent news',
      'Close with a clear next step, such as asking for a conversation about the role',
    ],
    donts: [
      'Don\'t repeat your CV line by line — use the letter to add context and motivation',
      'Avoid generic openers like "I am writing to apply for the position"',
      `Don't send the same letter to every ${lower} opening — tailor the company name and requirements`,
      'Don\'t raise salary expectations unless the posting asks for them',
      'Don\'t exceed one page — three short paragraphs are enough',
    ],
    keyPoints: role.whatToInclude.slice(0, 4),
    sampleOpening: `I am applying for the ${title} position at [Company]. In my current role at [Previous Company], I [key achievement with a number], and I would like to bring the same focus on ${skills[0] ?? 'results'} to your team.`,
    sampleBody: `My experience covers ${list(skills, 4)}. At [Previous Company], I [specific example showing one of these skills and its measurable result]. I also [second example], which taught me [relevant lesson]. This is the kind of work I understand [Company] is doing, and it matches how I like to work.`,
    sampleClosing: `I would welcome the chance to discuss how my background can support [Company]'s ${lower} goals. Thank you for your time and consideration — I look forward to hearing from you.`,
    faqs: [
      {
        q: `Do ${lower} applicants need a cover letter in India?`,
        a: `It is not always mandatory, but a short tailored letter helps when applying to employers such as ${companies}, or when a posting invites one. It is most useful for explaining relevant achievements and motivation that a CV alone cannot show.`,
      },
      {
        q: `How long should a ${lower} cover letter be?`,
        a: 'Keep it to one page, about 250–350 words across three short paragraphs: your opening hook, your strongest evidence, and a clear close.',
      },
      {
        q: `What should a ${lower} cover letter emphasise?`,
        a: `Emphasise results tied to the role's core requirements — ${list(skills, 4)} — and show that you understand what the employer needs.`,
      },
    ],
  };
}
