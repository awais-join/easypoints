import React from "react";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const ArrowIcon: React.FC<IconProps> = ({
  className,
  color = "currentColor",
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 6L19.6253 11.2951C20.0999 11.6744 20.1277 12.3539 19.6855 12.7664L13 19"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 12H4"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;
