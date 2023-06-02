import React from 'react';

interface IconProps {
  className?: string;
}

const FaceIcon: React.FC<IconProps> = ({className}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5013 18.3332H12.5013C16.668 18.3332 18.3346 16.6665 18.3346 12.4998V7.49984C18.3346 3.33317 16.668 1.6665 12.5013 1.6665H7.5013C3.33464 1.6665 1.66797 3.33317 1.66797 7.49984V12.4998C1.66797 16.6665 3.33464 18.3332 7.5013 18.3332Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.918 8.125C13.6083 8.125 14.168 7.56536 14.168 6.875C14.168 6.18464 13.6083 5.625 12.918 5.625C12.2276 5.625 11.668 6.18464 11.668 6.875C11.668 7.56536 12.2276 8.125 12.918 8.125Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.08203 8.125C7.77239 8.125 8.33203 7.56536 8.33203 6.875C8.33203 6.18464 7.77239 5.625 7.08203 5.625C6.39168 5.625 5.83203 6.18464 5.83203 6.875C5.83203 7.56536 6.39168 8.125 7.08203 8.125Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 11.0835H13C13.4167 11.0835 13.75 11.4168 13.75 11.8335C13.75 13.9085 12.075 15.5835 10 15.5835C7.925 15.5835 6.25 13.9085 6.25 11.8335C6.25 11.4168 6.58333 11.0835 7 11.0835Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FaceIcon;
