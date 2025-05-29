// app/components/EnvironmentIcon.tsx
import React from "react";

const EnvironmentIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120.96 122.88"
    {...props}
  >
    <defs>
      <style>
        {`
          .cls-1 { fill: #333; }
          .cls-2 { fill: none; stroke: #231f20; stroke-linecap: round; stroke-linejoin: round; stroke-width: 3.74px; }
          .cls-3 { fill: #34a12e; fill-rule: evenodd; }
        `}
      </style>
    </defs>
    <title>environment</title>
    <path className="cls-1" d="M54,6.38c-1.44.17-2.86.39-4.26..." />
    <path className="cls-2" d="M13.07,90.72a48.8,48.8,0,0..." />
    <path d="M13.07,90.72a48.8,48.8,0,0..." />
    <path className="cls-3" d="M60,111.45c2.83,4.06,3,3.86..." />
  </svg>
);

export default EnvironmentIcon;
