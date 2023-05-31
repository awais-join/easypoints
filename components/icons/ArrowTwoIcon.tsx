import React from 'react';

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const ArrowTwoIcon: React.FC<IconProps> = ({
  className,
  color = 'currentColor'
}) => {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <g clipPath="url(#clip0_1_7458)">
        <path
          d="M12.9525 5.51389L15.7233 8.41668L18.4941 11.3195M18.4941 11.3195L12.9525 17.125M18.4941 11.3195H9.24414C6.48272 11.3195 4.24414 9.0809 4.24414 6.31947V2.875"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default ArrowTwoIcon;
