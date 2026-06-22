export interface FestiveOffer {
  id: string;
  name: string;
  emoji: string;
  tagline: string;
  discountPrice: number;
  originalPrice: number;
  /** YYYY-MM-DD inclusive start */
  start: string;
  /** YYYY-MM-DD inclusive end */
  end: string;
}

// All dates for 2026. Update yearly or make dynamic for lunar holidays.
export const festiveOffers: FestiveOffer[] = [
  // ── January ────────────────────────────────────────────────────────────────
  {
    id: 'new-year-2026',
    name: 'New Year Sale',
    emoji: '🎆',
    tagline: 'Start 2026 with a job-ready CV',
    discountPrice: 249,
    originalPrice: 999,
    start: '2026-01-01',
    end: '2026-01-03',
  },
  {
    id: 'makar-sankranti-2026',
    name: 'Makar Sankranti Offer',
    emoji: '🪁',
    tagline: 'New beginnings, new career',
    discountPrice: 299,
    originalPrice: 999,
    start: '2026-01-13',
    end: '2026-01-15',
  },
  // ── January 26 ─────────────────────────────────────────────────────────────
  {
    id: 'republic-day-2026',
    name: 'Republic Day Sale',
    emoji: '🇮🇳',
    tagline: 'Build your career with pride',
    discountPrice: 249,
    originalPrice: 999,
    start: '2026-01-24',
    end: '2026-01-26',
  },
  // ── March ──────────────────────────────────────────────────────────────────
  {
    id: 'holi-2026',
    name: 'Holi Special',
    emoji: '🎨',
    tagline: 'Colour your career story',
    discountPrice: 299,
    originalPrice: 999,
    start: '2026-03-21',
    end: '2026-03-23',
  },
  // ── April ──────────────────────────────────────────────────────────────────
  {
    id: 'ugadi-2026',
    name: 'Ugadi / Gudi Padwa Offer',
    emoji: '🌸',
    tagline: 'New year, new career chapter',
    discountPrice: 299,
    originalPrice: 999,
    start: '2026-03-28',
    end: '2026-03-30',
  },
  {
    id: 'baisakhi-2026',
    name: 'Baisakhi Sale',
    emoji: '🌾',
    tagline: 'Harvest the best opportunities',
    discountPrice: 299,
    originalPrice: 999,
    start: '2026-04-13',
    end: '2026-04-14',
  },
  // ── May ────────────────────────────────────────────────────────────────────
  {
    id: 'labour-day-2026',
    name: 'Labour Day Sale',
    emoji: '💼',
    tagline: 'Celebrate work by upgrading yours',
    discountPrice: 249,
    originalPrice: 999,
    start: '2026-05-01',
    end: '2026-05-02',
  },
  // ── August ─────────────────────────────────────────────────────────────────
  {
    id: 'independence-day-2026',
    name: 'Independence Day Sale',
    emoji: '🇮🇳',
    tagline: 'Freedom from a bad CV — forever',
    discountPrice: 249,
    originalPrice: 999,
    start: '2026-08-13',
    end: '2026-08-15',
  },
  {
    id: 'onam-2026',
    name: 'Onam Special',
    emoji: '🌺',
    tagline: 'Prosperity for your career',
    discountPrice: 299,
    originalPrice: 999,
    start: '2026-08-26',
    end: '2026-08-28',
  },
  // ── September ──────────────────────────────────────────────────────────────
  {
    id: 'teachers-day-2026',
    name: "Teacher's Day Offer",
    emoji: '📚',
    tagline: 'Your career journey starts here',
    discountPrice: 299,
    originalPrice: 999,
    start: '2026-09-05',
    end: '2026-09-05',
  },
  // ── October ────────────────────────────────────────────────────────────────
  {
    id: 'gandhi-jayanti-2026',
    name: 'Gandhi Jayanti Sale',
    emoji: '🕊️',
    tagline: 'Take a step toward your goals',
    discountPrice: 249,
    originalPrice: 999,
    start: '2026-10-02',
    end: '2026-10-02',
  },
  {
    id: 'navratri-2026',
    name: 'Navratri Offer',
    emoji: '🪔',
    tagline: '9 nights of savings',
    discountPrice: 299,
    originalPrice: 999,
    start: '2026-10-08',
    end: '2026-10-17',
  },
  {
    id: 'dussehra-2026',
    name: 'Dussehra Special',
    emoji: '🏹',
    tagline: 'Slay your next interview',
    discountPrice: 249,
    originalPrice: 999,
    start: '2026-10-18',
    end: '2026-10-20',
  },
  // ── November ───────────────────────────────────────────────────────────────
  {
    id: 'diwali-2026',
    name: 'Diwali Sale',
    emoji: '🪔',
    tagline: 'Light up your career this Diwali',
    discountPrice: 199,
    originalPrice: 999,
    start: '2026-11-05',
    end: '2026-11-10',
  },
  {
    id: 'childrens-day-2026',
    name: "Children's Day Sale",
    emoji: '🎉',
    tagline: 'Invest in your future self',
    discountPrice: 299,
    originalPrice: 999,
    start: '2026-11-14',
    end: '2026-11-14',
  },
  {
    id: 'black-friday-2026',
    name: 'Black Friday Deal',
    emoji: '⚡',
    tagline: 'Biggest deal of the year',
    discountPrice: 149,
    originalPrice: 999,
    start: '2026-11-27',
    end: '2026-11-29',
  },
  // ── December ───────────────────────────────────────────────────────────────
  {
    id: 'christmas-2026',
    name: 'Christmas Offer',
    emoji: '🎄',
    tagline: 'The gift of a great career',
    discountPrice: 249,
    originalPrice: 999,
    start: '2026-12-24',
    end: '2026-12-26',
  },
  {
    id: 'new-year-eve-2026',
    name: 'Year-End Sale',
    emoji: '🎊',
    tagline: 'End the year with the best deal',
    discountPrice: 199,
    originalPrice: 999,
    start: '2026-12-29',
    end: '2026-12-31',
  },
];

export function getActiveOffer(now: Date = new Date()): FestiveOffer | null {
  const today = now.toISOString().split('T')[0] ?? '';
  return festiveOffers.find((o) => o.start <= today && today <= o.end) ?? null;
}

export function getOfferEndDate(offer: FestiveOffer): Date {
  const d = new Date(`${offer.end}T23:59:59+05:30`);
  return d;
}

export function getSavings(offer: FestiveOffer): number {
  return offer.originalPrice - offer.discountPrice;
}

export function getDiscountPercent(offer: FestiveOffer): number {
  return Math.round((getSavings(offer) / offer.originalPrice) * 100);
}
