import { MarketingHeader } from '@/components/marketing/MarketingHeader';
import { MarketingFooter } from '@/components/marketing/MarketingFooter';

/**
 * Shared chrome for every marketing page: a dark obsidian base with one
 * consistent sticky header and footer. Page bodies are migrated to the dark
 * theme batch by batch; until then they render their own background on top.
 */
export default function MarketingLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="min-h-screen bg-[#04060c] text-slate-100">
      <MarketingHeader />
      {children}
      <MarketingFooter />
    </div>
  );
}
