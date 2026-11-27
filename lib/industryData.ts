import { roles, type RoleData } from '@/lib/roleData';

export interface IndustryGroup {
  slug: string;
  name: string;
  blurb: string;
  matches: string[];
}

/**
 * `roles[].industry` has 31 raw free-text values (many appearing on a single
 * role, e.g. "Technology & ERP", "Technology & Networking"). Grouping into
 * broader, hiring-market-recognisable industries avoids one-role "industry"
 * pages that would read as thin/duplicate content next to the role page itself.
 */
const industryGroups: IndustryGroup[] = [
  {
    slug: 'technology-it',
    name: 'Technology & IT',
    blurb:
      'Software, data, and IT roles across product companies, startups, and Indian IT services firms — the largest and fastest-moving hiring category on CV Prime.',
    matches: ['Technology', 'Technology & ERP', 'Technology & Networking', 'Technology & Electronics', 'SaaS & Tech', 'Data Science & AI', 'Analytics'],
  },
  {
    slug: 'engineering',
    name: 'Engineering',
    blurb: 'Core engineering roles spanning infrastructure, manufacturing, and industrial project delivery.',
    matches: ['Engineering', 'Engineering & Infrastructure', 'Engineering & Manufacturing'],
  },
  {
    slug: 'sales-business-development',
    name: 'Sales & Business Development',
    blurb: 'Revenue-facing roles where CVs live or die on quota attainment, pipeline metrics, and deal size — not job descriptions.',
    matches: ['Sales & Business Development'],
  },
  {
    slug: 'marketing',
    name: 'Marketing',
    blurb: 'Brand, digital, content, and growth marketing roles across D2C, SaaS, and agency employers in India.',
    matches: ['Marketing', 'Marketing & Content', 'Marketing & Digital'],
  },
  {
    slug: 'finance-banking',
    name: 'Finance & Banking',
    blurb: 'Accounting, financial analysis, and banking roles where certifications and quantified financial outcomes carry the most CV weight.',
    matches: ['Finance', 'Finance & Accounting', 'Finance & Banking', 'Banking & Financial Services'],
  },
  {
    slug: 'consulting-strategy',
    name: 'Consulting & Strategy',
    blurb: 'Management consulting and strategy roles at MBB-tier and boutique firms, where a one-page CV and client-outcome bullets are the norm.',
    matches: ['Consulting & Strategy'],
  },
  {
    slug: 'operations-supply-chain',
    name: 'Operations & Supply Chain',
    blurb: 'Logistics, warehousing, and operations roles where scale, SLA performance, and cost metrics matter more than job titles.',
    matches: ['Operations & Supply Chain', 'Operations & Logistics', 'Supply Chain & Logistics'],
  },
  {
    slug: 'human-resources',
    name: 'Human Resources',
    blurb: 'HR and talent roles that increasingly need to demonstrate business impact, not just process ownership.',
    matches: ['Human Resources'],
  },
  {
    slug: 'design-creative',
    name: 'Design & Creative',
    blurb: 'Product, graphic, and interior design roles where a strong portfolio link matters as much as the CV itself.',
    matches: ['Design', 'Design & Creative', 'Design & Architecture'],
  },
  {
    slug: 'project-product-management',
    name: 'Project & Product Management',
    blurb: 'Project, program, product, and agile delivery roles that need to show scope, stakeholder scale, and shipped outcomes.',
    matches: ['Project Management', 'Project Management & Agile', 'Product Management'],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare & Pharma',
    blurb: 'Clinical, pharmacy, and healthcare roles across hospitals, pharma companies, and retail pharmacy chains in India.',
    matches: ['Healthcare', 'Healthcare & Pharma'],
  },
  {
    slug: 'education',
    name: 'Education',
    blurb: 'Teaching and academic roles where outcomes, curriculum ownership, and student results need to read clearly on a CV.',
    matches: ['Education'],
  },
];

export interface IndustryPage extends IndustryGroup {
  roles: RoleData[];
  keySkills: string[];
  topCompanies: string[];
}

function buildIndustryPage(group: IndustryGroup): IndustryPage {
  const groupRoles = roles.filter((r) => group.matches.includes(r.industry));
  const keySkills = Array.from(new Set(groupRoles.flatMap((r) => r.keySkills))).slice(0, 14);
  const topCompanies = Array.from(new Set(groupRoles.flatMap((r) => r.topCompanies))).slice(0, 12);
  return { ...group, roles: groupRoles, keySkills, topCompanies };
}

export const industries: IndustryPage[] = industryGroups.map(buildIndustryPage).filter((i) => i.roles.length > 0);
export const industryMap = new Map(industries.map((i) => [i.slug, i]));
export const industrySlugs = industries.map((i) => i.slug);
