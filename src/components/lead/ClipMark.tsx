import type { SVGProps } from 'react';

/**
 * A trigger clip drawn in local coordinates. The origin is the bottom of the
 * swivel ring, where the lead attaches; the clip extends upwards to y = -33.
 */
export function ClipMark(props: SVGProps<SVGGElement>) {
  return (
    <g {...props}>
      <circle cx="0" cy="-4" r="4" />
      <path d="M0 -8 V -12" />
      <path d="M-4.5 -12 H4.5 V-28 A4.5 4.5 0 0 0 -4.5 -28 Z" />
      <path d="M-1.25 -15 V-27" />
      <path d="M4.5 -19 H7.5" />
    </g>
  );
}

export function ClipIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="-9 -35 18 37"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ClipMark />
    </svg>
  );
}
