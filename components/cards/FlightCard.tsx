import Image from "next/image";
import React from "react";

interface FlightCardProps {
  airports: { from: string; to: string };
  onePoints: number;
  oneLogo: string;
  twoPoints: number;
  twoLogo: string;
  imageURL: string;
}

const formatNumber = (number: number): string => {
  return number.toLocaleString();
};

const FlightCard: React.FC<FlightCardProps> = ({
  airports,
  onePoints,
  oneLogo,
  twoPoints,
  twoLogo,
  imageURL,
}) => {
  const formattedOnePoints = formatNumber(onePoints);
  const formattedTwoPoints = formatNumber(twoPoints);

  return (
    <div className="rounded-4xl bg-white p-3">
      <div className="relative aspect-[5/3] lg:aspect-[4/3] xl:aspect-[6/3] rounded-4xl bg-light">
        <Image className="rounded-4xl" fill src={imageURL} alt="..." />
        <div className="absolute top-0 left-0 h-full w-full rounded-4xl bg-primary-500/70 p-6 flex flex-col justify-between">
          <h3 className="text-white text-sm sm:text-xl lg:text-sm xl:text-xl font-medium">
            {airports.from}
          </h3>
          <span className="relative h-full w-full">
            <Image
              className="object-contain xl:scale-150"
              fill
              src="/assets/flight-map.svg"
              alt="..."
            />
          </span>
          <h3 className="text-white text-sm sm:text-xl lg:text-sm xl:text-xl font-medium text-right">
            {airports.to}
          </h3>
        </div>
      </div>
      <div className="px-4 pt-4 flex lg:flex-col xl:flex-row items-center justify-center text-center gap-4">
        <div>
          <span className="block relative w-28 h-7 mx-auto">
            <Image fill className="object-contain" src={oneLogo} alt="..." />
          </span>
          <h4 className="mt-1 text-base font-semibold">
            {formattedOnePoints} pts
          </h4>
        </div>
        <span className="block relative w-8 min-w-[2rem] h-8 mx-2">
          <Image fill src="/assets/vs-icon.svg" alt="hero-image" />
        </span>
        <div>
          <span className="block relative w-28 h-7 mx-auto">
            <Image fill className="object-contain" src={twoLogo} alt="..." />
          </span>
          <h4 className="mt-1 text-base font-semibold">
            {formattedTwoPoints} pts
          </h4>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
