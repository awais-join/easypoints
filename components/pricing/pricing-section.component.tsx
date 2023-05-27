import React, {FC, ReactNode} from 'react';
import {
  Pricing,
  PricingCardComponent
} from '@/components/pricing/pricing-card.component';
import {tag} from 'postcss-selector-parser';

interface PricingSectionComponentProps {
  pricingLists: Pricing[];
  children?: ReactNode;
  headerText: string;
  headerSubText: string;
  tagline: string;
  pricingLength?: number;
}

export const PricingSectionComponent: FC<PricingSectionComponentProps> = ({
  pricingLists,
  headerText,
  headerSubText,
  tagline,
  children,
  pricingLength
}) => {
  return (
    <div className="rounded-6xl p-8 m-8 bg-lightBlue">
      <div className="text-center p-8 bg-white rounded-3xl mb-10">
        <p className="text-[2.5rem] leading-[4rem] font-bold">
          <span className="text-primary">{headerText}</span>&nbsp;
          <span className="text-black">{headerSubText}</span>
        </p>
        <p className="text-text font-medium leading-9 text-[1.25rem]">
          {tagline}
        </p>
      </div>
      <div className={`grid gap-5 grid-cols-${pricingLength}`}>
        {pricingLists.map(value => {
          return <PricingCardComponent pricing={value} key={value.key} />;
        })}
      </div>
      {children}
    </div>
  );
};
