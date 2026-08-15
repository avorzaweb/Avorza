interface FacetMarkProps {
  className?: string;
}

export default function FacetMark({ className }: FacetMarkProps) {
  return (
    <svg
      viewBox="0 0 240 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M120 8 L216 180 L146 180 L120 132 L94 180 L24 180 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M120 8 L120 132" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
      <path d="M94 180 L146 132 L120 132" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
      <path d="M146 180 L120 132" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
    </svg>
  );
}
