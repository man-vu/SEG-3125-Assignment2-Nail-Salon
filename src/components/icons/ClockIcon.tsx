// src/components/icons/ClockIcon.tsx

import React from "react";

interface ClockIconProps {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}

const ClockIcon: React.FC<ClockIconProps> = ({ size = 16, color = "#bbb", style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 20 20"
    aria-label="duration"
    style={style}
  >
    <circle cx="10" cy="10" r="9" stroke={color} strokeWidth="2" fill="none" />
    <rect x="9.25" y="5" width="1.5" height="6" rx="0.75" fill={color} />
    <rect x="10" y="10" width="5" height="1.5" rx="0.75" fill={color} transform="rotate(30 10 10)" />
  </svg>
);

export default ClockIcon;
