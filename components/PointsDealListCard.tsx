import {FC} from 'react';
import Image from 'next/image';

interface PointsDealListCardProps {
  cardType: string;
}

export const PointsDealListCard: FC<PointsDealListCardProps> = ({cardType}) => {
  return (
    <div className="bg-white rounded-3xl px-3 py-4 mb-4">
      <div className="flex flex-wrap md:justify-between items-center gap-4 justify-center">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative h-6 mx-3 w-20 min-w-[4.7rem]">
            <Image fill src="/assets/membership-reward-icon.svg" alt="..." />
          </div>
          <div className="relative h-5 w-5 mx-3 min-w-[1.25rem] md:rotate-0 rotate-90">
            <Image fill src="/assets/arrow-to-right-icon.svg" alt="..." />
          </div>
          <div className="relative h-6 mx-3 w-20 min-w-[4.7rem]">
            <Image fill src="/assets/air-france-to-klm-icon.svg" alt="..." />
          </div>
        </div>

        <div>
          <h4 className="font-bold text-base">4,40,000 pts</h4>
          <small className="text-xs font-normal text-[0.5rem]">+$205.00*</small>
        </div>

        <div className="w-full lg:w-full md:w-auto xl:w-auto">
          <button
            className={`w-full inline-flex items-center justify-center rounded-full ${
              cardType === 'other'
                ? 'bg-light border border-primary-500 text-primary-500'
                : 'bg-primary-500 text-white'
            } px-7 py-3 text-sm hover:bg-primary-600 font-medium hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500`}
          >
            Select Deal
          </button>
        </div>
      </div>

      {cardType !== 'other' && (
        <div className="flex flex-wrap md:justify-between items-center justify-center">
          <div className="bg-light rounded-2xl font-bold text-[0.63rem] p-2 inline-block mt-2">
            Special offer: 25% Transfer Bonus
          </div>
        </div>
      )}
    </div>
  );
};
