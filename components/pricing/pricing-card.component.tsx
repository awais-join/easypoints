import React, {FC} from 'react';
import Image from 'next/image';

export interface Pricing {
  name: string;
  key: string;
  features: string[];
  price: number;
  priceUnit?: string;
  saveWithAnnual?: string;
}

interface PricingCardComponentProps {
  pricing: Pricing;
}

export const PricingCardComponent: FC<PricingCardComponentProps> = ({
  pricing
}) => {
  return (
    <div
      key={pricing.key}
      className="flex flex-col justify-between rounded-3xl w-full p-6 bg-white"
    >
      <div>
        <div className="rounded-2xl bg-darkBlue p-4 mb-6">
          <p className="text-center text-black font-semibold text-base mb-4">
            {pricing.name}
          </p>
          <p className="text-center">
            <span className="text-5xl text-black font-semibold">
              ${pricing.price}
            </span>
            {pricing.priceUnit ? (
              <span className="text-text text-sm font-medium">
                &nbsp;&nbsp;&nbsp;/&nbsp;{pricing.priceUnit}
              </span>
            ) : null}
          </p>
        </div>
        {pricing.features.map(feature => {
          return (
            <div className="flex-row items-center mb-3 flex" key={feature}>
              <Image
                className="mr-4"
                alt="filled-checkmark"
                src="/assets/filled-green-checkmark.svg"
                height={25}
                width={25}
              />
              <p style={{whiteSpace: 'pre-wrap'}} className="whitespace-nowrap">
                {feature}
              </p>
            </div>
          );
        })}
        {pricing.saveWithAnnual ? (
          <div className="mt-6">
            <label className="relative inline-flex items-center mb-5 cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-xs text-black">
                {pricing.saveWithAnnual}
              </span>
            </label>
          </div>
        ) : null}
      </div>
      <button
        className="h-12 px-6 mt-6 text-base font-semibold rounded-6xl bg-primary text-white"
        type="submit"
      >
        Get Started
      </button>
    </div>
  );
};
