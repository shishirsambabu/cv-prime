interface LogoMarkProps {
  className?: string;
  /** Decorative by default; set a title for standalone/icon-only use. */
  title?: string;
}

/**
 * Compact CV Prime icon — a crown (Prime) over a check-mark "V" (verified CV),
 * reversed out of the signature indigo. Used in tight/dark slots where the full
 * lockup (BrandLogo) does not fit. Recoloured to the site's --brand indigo.
 */
export function LogoMark({ className, title }: LogoMarkProps): JSX.Element {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
    >
      {title ? <title>{title}</title> : null}
      <rect width="40" height="40" rx="9" fill="#5048E5" />
      {/* Check-mark "V" */}
      <path
        d="M10.5 22 L17.5 29 L30 16"
        fill="none"
        stroke="#ffffff"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Crown */}
      <path
        d="M25 15.6 L26.8 10.6 L28.4 12.9 L30 9 L31.6 12.9 L33.2 10.6 L35 15.6 Z"
        fill="#ffffff"
      />
      <circle cx="26.8" cy="9.9" r="0.95" fill="#ffffff" />
      <circle cx="30" cy="8.2" r="1.05" fill="#ffffff" />
      <circle cx="33.2" cy="9.9" r="0.95" fill="#ffffff" />
    </svg>
  );
}
