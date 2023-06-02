import React from 'react';

interface IconProps {
  className?: string;
}

const SettingsIcon: React.FC<IconProps> = ({className}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 7.59163V12.4C2.5 14.1666 2.5 14.1666 4.16667 15.2916L8.75 17.9416C9.44167 18.3416 10.5667 18.3416 11.25 17.9416L15.8333 15.2916C17.5 14.1666 17.5 14.1666 17.5 12.4083V7.59163C17.5 5.8333 17.5 5.8333 15.8333 4.7083L11.25 2.0583C10.5667 1.6583 9.44167 1.6583 8.75 2.0583L4.16667 4.7083C2.5 5.8333 2.5 5.8333 2.5 7.59163Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SettingsIcon;
