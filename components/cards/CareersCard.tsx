import Image from 'next/image';
import React from 'react';

interface CareersCardProps {
  iconUrl: string;
  title: string;
  description: string;
}

const CareersCard: React.FC<CareersCardProps> = ({
  iconUrl,
  title,
  description
}) => {
  return (
    <div className="border border-lightGray flex flex-col justify-center p-8 w-full h-full rounded-3xl">
      {iconUrl !== '' && (
        <div className="mb-6">
          <Image
            width="100"
            height="100"
            src={iconUrl}
            alt="Test"
            className="rounded w-12 h-12"
          />
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold leading-normal mb-4 md:leading-snug max-w-xl mr-auto">
        {title}
      </h2>
      <p className="text-base leading-7 text-gray-600">{description}</p>
    </div>
  );
};

export default CareersCard;
