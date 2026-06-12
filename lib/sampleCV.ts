import type { CVData } from '@/types/cv.types';

export const sampleCVData: CVData = {
  personal: {
    name: 'Aarav Mehta',
    title: 'Product Marketing Manager',
    email: 'aarav.mehta@email.com',
    phone: '+91 98765 43210',
    location: 'Bengaluru',
    linkedin: 'linkedin.com/in/aaravmehta',
    website: 'aaravmehta.com',
    summary:
      'Product marketing manager with 6 years of experience launching B2B SaaS products, improving activation, and turning customer research into sharper positioning. Known for building sales enablement systems that shorten deal cycles and improve win rates.',
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
        'Led go-to-market strategy for three product launches, contributing to Rs 4.8 crore in influenced pipeline within two quarters.',
        'Built messaging, battlecards, and demo narratives adopted by a 42-person sales team across SMB and mid-market segments.',
        'Improved trial-to-paid conversion by 18% by repositioning onboarding emails around buyer pain points and proof.',
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
        'Owned lifecycle campaigns across email, paid search, and webinars, increasing qualified demos by 31% year over year.',
        'Partnered with product and design to launch customer stories that lifted enterprise landing page conversion by 22%.',
      ],
    },
  ],
  education: [
    {
      id: 'sample-edu-1',
      institution: 'Christ University',
      degree: 'MBA',
      field: 'Marketing',
      startDate: '2016',
      endDate: '2018',
      gpa: '8.6/10',
    },
  ],
  skills: {
    technical: ['Positioning', 'Lifecycle marketing', 'HubSpot', 'GA4', 'SQL basics'],
    soft: ['Storytelling', 'Sales collaboration', 'Research synthesis'],
    languages: ['English', 'Hindi', 'Kannada'],
  },
  projects: [
    {
      id: 'sample-project-1',
      name: 'Competitive intelligence hub',
      description:
        'Created a searchable competitor library with objection handling, pricing notes, and feature comparison pages for sales teams.',
      tech: ['Notion', 'HubSpot', 'Gong'],
      url: '',
    },
  ],
  certifications: ['Product Marketing Alliance Core Certification', 'Google Analytics Certification'],
  awards: ['Top GTM contributor, Northstar Cloud, 2024'],
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
