import type { CVData } from '@/types/cv.types';

export const sampleCVData: CVData = {
  personal: {
    name: 'Aarav Mehta',
    title: 'Senior Product Marketing Manager',
    email: 'aarav.mehta@email.com',
    phone: '+91 98765 43210',
    location: 'Bengaluru, India',
    linkedin: 'linkedin.com/in/aaravmehta',
    website: 'aaravmehta.com',
    summary:
      'Senior product marketing manager with 6+ years launching B2B SaaS products that move revenue. I turn customer research into sharp positioning, build sales enablement that shortens deal cycles, and own go-to-market from narrative to pipeline.',
  },
  experience: [
    {
      id: 'sample-exp-1',
      company: 'Northstar Cloud',
      role: 'Senior Product Marketing Manager',
      startDate: '2022',
      endDate: '',
      current: true,
      bullets: [
        'Led go-to-market for 3 flagship launches, generating Rs 4.8 crore in influenced pipeline within two quarters.',
        'Built messaging, battlecards, and demo narratives adopted by a 42-person sales team, lifting win rate 14%.',
        'Repositioned onboarding around buyer pain points, improving trial-to-paid conversion from 11% to 18%.',
      ],
    },
    {
      id: 'sample-exp-2',
      company: 'KiteWorks',
      role: 'Growth Marketing Lead',
      startDate: '2019',
      endDate: '2022',
      current: false,
      bullets: [
        'Owned lifecycle across email, paid, and webinars, growing qualified demos 31% year over year.',
        'Launched a customer-story program that raised enterprise landing-page conversion 22%.',
        'Scaled the demand team from 2 to 6 while holding CAC flat through channel mix optimization.',
      ],
    },
  ],
  education: [
    {
      id: 'sample-edu-1',
      institution: 'Christ University',
      degree: 'MBA, Marketing',
      field: 'Marketing',
      startDate: '2016',
      endDate: '2018',
      gpa: '8.6/10',
    },
  ],
  skills: {
    technical: ['Positioning', 'GTM strategy', 'Lifecycle marketing', 'HubSpot', 'GA4', 'SQL'],
    soft: ['Narrative', 'Sales partnership', 'Research synthesis'],
    languages: ['English', 'Hindi', 'Kannada'],
  },
  projects: [
    {
      id: 'sample-project-1',
      name: 'Competitive intelligence hub',
      description:
        'Searchable competitor library with objection handling, pricing notes, and comparison pages used in every mid-market deal.',
      tech: ['Notion', 'HubSpot', 'Gong'],
      url: '',
    },
  ],
  certifications: [
    'Product Marketing Alliance — Core Certification',
    'Google Analytics (GA4) Certification',
  ],
  awards: ['Top GTM Contributor — Northstar Cloud, 2024'],
  sectionOrder: [
    'personal',
    'experience',
    'skills',
    'projects',
    'education',
    'certifications',
    'awards',
  ],
};
