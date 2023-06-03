import FlightsCard from '@/components/cards/FlightsCard';
import React from 'react';

function RewardFlightsPanel() {
  return (
    <div className="lg:px-8 h-full  ">
      <div className="flex  justify-between  h-full">
        <div className="mb-4 basis-[100%] rounded-2xl border-solid border border-lightGray pt-6 pb-8 px-2 lg:px-8">
          <h2 className=" text-3xl font-bold font-heading leading-snug mb-6">
            Reward Flights{' '}
          </h2>
          <div className="w-auto ">
            <FlightsCard isReturn={true} />
            <FlightsCard isReturn={false} />
            <FlightsCard isReturn={false} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RewardFlightsPanel;
