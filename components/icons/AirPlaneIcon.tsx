import React from "react";

interface IconProps {
  color?: string;
  className?: string;
}

const AirPlaneIcon: React.FC<IconProps> = ({
  className,
  color = "currentColor",
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-2.55712e-07 5.85L1.35 5.85L2.7 7.65L7.65 7.65L5.4 -5.50764e-07L7.2 -4.72083e-07L11.7 7.65L16.65 7.65C17.025 7.65 17.3439 7.7814 17.6067 8.0442C17.8695 8.307 18.0006 8.6256 18 9C18 9.375 17.8686 9.6939 17.6058 9.9567C17.343 10.2195 17.0244 10.3506 16.65 10.35L11.7 10.35L7.2 18L5.4 18L7.65 10.35L2.7 10.35L1.35 12.15L-5.31093e-07 12.15L0.899999 9L-2.55712e-07 5.85Z"
        fill={color}
      />
    </svg>
  );
};

export default AirPlaneIcon;
