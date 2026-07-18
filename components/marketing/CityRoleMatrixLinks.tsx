import Link from 'next/link';
import { matrixRoleSlugs } from '@/lib/roleCityData';
import { roleMap } from '@/lib/roleData';

interface CityRoleMatrixLinksProps {
  citySlug: string;
  cityName: string;
}

/**
 * Links a city landing page into its role x city resume-builder pages
 * (/resume-builder/[role]/[city]) — the only internal entry point into
 * that 280-page matrix, which is otherwise reachable only via sitemap.xml.
 */
export function CityRoleMatrixLinks({ citySlug, cityName }: CityRoleMatrixLinksProps): JSX.Element {
  const roles = matrixRoleSlugs.map((slug) => roleMap.get(slug)).filter((role): role is NonNullable<typeof role> => Boolean(role));

  return (
    <section className="border-t border-white/10 px-5 py-12">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
          {cityName} resume guides by role
        </p>
        <div className="flex flex-wrap gap-3">
          {roles.map((role) => (
            <Link
              key={role.slug}
              href={`/resume-builder/${role.slug}/${citySlug}`}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-brand hover:text-brand"
            >
              {role.displayTitle} resume — {cityName}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
