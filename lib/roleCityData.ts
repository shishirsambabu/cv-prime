import { roleMap } from './roleData';
import { salaryDataMap, type SalaryData } from './salaryData';

export interface CityMeta {
  slug: string;
  name: string;
  displayName: string;
  tagline: string;
  sectors: string[];
  signatureCompanies: string[];
  atsNote: string;
  premium: string;
  /** Key of SalaryData.byLocation for this city. */
  salaryKey: keyof SalaryData['byLocation'];
  /** Existing city landing page to link to. */
  cityPageHref: string;
}

export const cityMetaMap: Record<string, CityMeta> = {
  bangalore: {
    slug: 'bangalore',
    name: 'Bangalore',
    displayName: 'Bangalore (Bengaluru)',
    tagline: "India's tech and startup capital",
    sectors: ['Product & SaaS', 'Fintech', 'E-commerce', 'Deep tech', 'IT services'],
    signatureCompanies: ['Flipkart', 'Swiggy', 'PhonePe', 'CRED', 'Groww', 'Google', 'Amazon', 'Microsoft'],
    atsNote:
      'Bangalore product companies and startups rely on Greenhouse, Lever, and Workday. Single-column, keyword-matched resumes parse best — multi-column designs get scrambled.',
    premium: '15–25% above the national average — the highest in India',
    salaryKey: 'bangalore',
    cityPageHref: '/resume-builder-bangalore',
  },
  mumbai: {
    slug: 'mumbai',
    name: 'Mumbai',
    displayName: 'Mumbai',
    tagline: "India's financial capital",
    sectors: ['BFSI', 'Consulting', 'Media & entertainment', 'E-commerce', 'Advertising'],
    signatureCompanies: ['Goldman Sachs', 'JP Morgan', 'HDFC Bank', 'ICICI Bank', 'Nykaa', 'Meesho'],
    atsNote:
      'Mumbai BFSI and consulting firms screen heavily on domain keywords and certifications. Mirror the job description exactly and lead with quantified, regulated-industry impact.',
    premium: 'strongest in India for BFSI, finance, and consulting pay',
    salaryKey: 'mumbai',
    cityPageHref: '/resume-builder-mumbai',
  },
  delhi: {
    slug: 'delhi',
    name: 'Delhi NCR',
    displayName: 'Delhi, Gurgaon & Noida',
    tagline: 'MNCs, consulting and e-commerce hub',
    sectors: ['MNC corporate', 'Consulting', 'E-commerce', 'IT services', 'Government & PSU'],
    signatureCompanies: ['Amazon (Noida)', 'BCG', 'Deloitte', 'Paytm', 'HCL', 'American Express'],
    atsNote:
      'Delhi NCR MNCs and consulting firms use Workday and Taleo. Conservative, ATS-safe formatting with standard headings parses most reliably.',
    premium: 'competitive for MNC corporate and consulting roles',
    salaryKey: 'delhi',
    cityPageHref: '/resume-builder-delhi',
  },
  hyderabad: {
    slug: 'hyderabad',
    name: 'Hyderabad',
    displayName: 'Hyderabad',
    tagline: 'FAANG engineering and pharma hub',
    sectors: ['FAANG engineering', 'IT services', 'Pharma & life sciences', 'BFSI back-office'],
    signatureCompanies: ['Microsoft (IDC)', 'Amazon', 'Apple', 'Google', 'Salesforce', 'Deloitte'],
    atsNote:
      'Hyderabad FAANG centres in HITEC City screen for strong technical keyword match and system-design depth. Keep the resume single-column and skills-first.',
    premium: 'second-highest tech pay in India',
    salaryKey: 'hyderabad',
    cityPageHref: '/resume-builder-hyderabad',
  },
  chennai: {
    slug: 'chennai',
    name: 'Chennai',
    displayName: 'Chennai',
    tagline: 'IT services, SaaS and automotive hub',
    sectors: ['IT services', 'SaaS', 'Automotive', 'BFSI', 'Manufacturing'],
    signatureCompanies: ['TCS', 'Zoho', 'Cognizant', 'Ford', 'Hyundai', 'Bosch'],
    atsNote:
      'Chennai IT services and automotive firms use Taleo and iCIMS. A single-column resume with a clear skills matrix and project summaries parses best.',
    premium: 'strong, steady demand across IT services and automotive',
    salaryKey: 'chennai',
    cityPageHref: '/resume-builder-chennai',
  },
  pune: {
    slug: 'pune',
    name: 'Pune',
    displayName: 'Pune',
    tagline: 'IT services, automotive and semiconductor hub',
    sectors: ['IT services', 'Automotive & EV', 'Semiconductor', 'BFSI', 'Manufacturing'],
    signatureCompanies: ['Infosys', 'Persistent', 'Bajaj Auto', 'Qualcomm', 'Cummins', 'Mahindra'],
    atsNote:
      'Pune IT and engineering firms value precise technical keywords — for automotive roles, terms like AUTOSAR and ISO 26262 matter. Keep it single-column and specific.',
    premium: 'a fast-growing tech and core-engineering market',
    salaryKey: 'pune',
    cityPageHref: '/resume-builder-pune',
  },
  kolkata: {
    slug: 'kolkata',
    name: 'Kolkata',
    displayName: 'Kolkata',
    tagline: "eastern India's IT, BFSI and manufacturing hub",
    sectors: ['IT services', 'BFSI', 'Manufacturing', 'Consulting', 'Media'],
    signatureCompanies: ['TCS', 'Wipro', 'Cognizant', 'IBM', 'ITC', 'Bandhan Bank'],
    atsNote:
      'Kolkata IT services and BFSI firms in Salt Lake Sector V and New Town use Taleo and Workday. Single-column, keyword-matched resumes parse most reliably.',
    premium: 'an affordable major metro with steady IT services and BFSI demand',
    salaryKey: 'kolkata',
    cityPageHref: '/resume-builder-kolkata',
  },
  ahmedabad: {
    slug: 'ahmedabad',
    name: 'Ahmedabad',
    displayName: 'Ahmedabad',
    tagline: 'pharma, GIFT City fintech and industrial hub',
    sectors: ['Pharma & life sciences', 'GIFT City fintech & banking', 'IT services', 'Industrial & manufacturing', 'Textiles'],
    signatureCompanies: ['Zydus', 'Sun Pharma', 'Torrent', 'Adani Group', 'TCS', 'Deloitte USI'],
    atsNote:
      'Ahmedabad pharma and GIFT City firms screen for regulatory keywords (GMP/GLP for pharma, SEBI/FEMA for IFSC finance). Mirror the JD precisely and keep the resume single-column.',
    premium: 'a fast-growing market led by pharma and GIFT City',
    salaryKey: 'ahmedabad',
    cityPageHref: '/resume-builder-ahmedabad',
  },
};

/** Cities included in the role × city matrix (those with per-role salary data). */
export const matrixCitySlugs = [
  'bangalore',
  'mumbai',
  'delhi',
  'hyderabad',
  'chennai',
  'pune',
  'kolkata',
  'ahmedabad',
] as const;

/** Roles included in the matrix: those that have both role content and per-city salary data. */
export const matrixRoleSlugs: string[] = Object.keys(salaryDataMap).filter((slug) => roleMap.has(slug));

export function cityMeta(slug: string): CityMeta | undefined {
  return cityMetaMap[slug];
}
