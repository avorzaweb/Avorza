type IconProps = { className?: string };

const base = "stroke-current fill-none";
const sw = 1.6;

export function IconTarget({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={`${base} ${className}`} strokeWidth={sw}>
      <circle cx="20" cy="20" r="14" />
      <circle cx="20" cy="20" r="8" />
      <circle cx="20" cy="20" r="2" fill="currentColor" stroke="none" />
      <path d="M20 2 L20 8 M20 32 L20 38 M2 20 L8 20 M32 20 L38 20" />
    </svg>
  );
}

export function IconCode({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={`${base} ${className}`} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 11 L4 20 L14 29" />
      <path d="M26 11 L36 20 L26 29" />
      <path d="M23 7 L17 33" />
    </svg>
  );
}

export function IconBolt({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={`${base} ${className}`} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4 L8 22 H18 L16 36 L32 16 H21 Z" />
    </svg>
  );
}

export function IconSupport({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={`${base} ${className}`} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 21 v-2 a12 12 0 0 1 24 0 v2" />
      <rect x="4" y="21" width="8" height="10" rx="2" />
      <rect x="28" y="21" width="8" height="10" rx="2" />
      <path d="M32 31 v2 a4 4 0 0 1 -4 4 h-4" />
    </svg>
  );
}

export function IconLanding({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={`${base} ${className}`} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="6" width="32" height="28" rx="1.5" />
      <path d="M4 13 H36" />
      <circle cx="8.5" cy="9.5" r="0.8" fill="currentColor" stroke="none" />
      <rect x="9" y="18" width="12" height="3" />
      <rect x="9" y="24" width="18" height="2" opacity="0.6" />
      <rect x="24" y="17" width="8" height="9" opacity="0.5" />
    </svg>
  );
}

export function IconWeb({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={`${base} ${className}`} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="20" cy="20" r="15" />
      <ellipse cx="20" cy="20" rx="6.5" ry="15" />
      <path d="M5 20 H35 M6.5 12 H33.5 M6.5 28 H33.5" />
    </svg>
  );
}

export function IconPalette({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={`${base} ${className}`} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 5 a15 15 0 1 0 6 28.7 c2 -1 1 -3.4 -1 -3.4 h-2 a4 4 0 0 1 -3 -6.7 h5 a6 6 0 0 0 0 -12 Z" />
      <circle cx="14" cy="16" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="21" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="27" cy="17" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="13" cy="23" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconUX({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={`${base} ${className}`} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="6" width="28" height="28" rx="2" />
      <path d="M6 15 H34" />
      <circle cx="12" cy="10.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="16" cy="10.5" r="1" fill="currentColor" stroke="none" />
      <rect x="11" y="20" width="8" height="8" opacity="0.55" />
      <path d="M23 20 L29 26 M29 20 L23 26" />
    </svg>
  );
}

export function IconArrowRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12 H20 M14 6 L20 12 L14 18" />
    </svg>
  );
}

export function IconQuote({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 32" className={className} fill="currentColor">
      <path d="M0 20 C0 8 8 1 17 0 L17 5.5 C11 6.5 8 10 7.7 15 H16 V28 H0 Z" />
      <path d="M22 20 C22 8 30 1 39 0 L39 5.5 C33 6.5 30 10 29.7 15 H38 V28 H22 Z" />
    </svg>
  );
}
