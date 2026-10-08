import React from 'react';

/**
 * Hand-drawn SVG doodle annotations inspired by Ellery.se
 * Renders an organic wavy underline or loop around text.
 */

export const HandDrawnUnderline: React.FC<{ color?: string; className?: string }> = ({
  color = 'currentColor',
  className = '',
}) => {
  return (
    <svg
      className={`hand-drawn-underline ${className}`}
      viewBox="0 0 250 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M3 17C45 9 125 7 247 14C190 20 95 22 25 21"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};

export const HandDrawnCircle: React.FC<{ color?: string; className?: string }> = ({
  color = 'currentColor',
  className = '',
}) => {
  return (
    <svg
      className={`hand-drawn-circle ${className}`}
      viewBox="0 0 320 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M30 45C25 22 75 8 160 8C265 8 305 24 300 48C295 72 235 84 140 84C45 84 10 68 15 42C18 24 60 14 110 12"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};
