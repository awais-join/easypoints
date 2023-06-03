import React from 'react';
import Image from 'next/image';

interface Tabs {
  tabsDetails: any;
}
const PersonalInfoTab: React.FC<Tabs> = ({tabsDetails}) => {
  return (
    <div className="pl-4 lg:pl-8 h-full  rounded-xl">
      <div className=" text-left   h-full">
        <div className="flex flex-wrap w-full items-center gap-2 xl:gap-4">
          <div className="w-auto ">
            <Image
              width="24"
              height="24"
              src={tabsDetails.iconUrl}
              alt="Test"
              className="rounded "
            />
          </div>

          <div className=" xl:px-8 py-6 w-[60%] md:w-[75%]">
            <h4 className="mb-1 text-base md:text-lg font-bold  leading-snug">
              {tabsDetails.title}
            </h4>
            <p className="text-gray-500 text-sm md:text-base  font-medium leading-relaxed pr-8">
              {tabsDetails.subTitle}
            </p>
          </div>
          <div className="w-auto">
            <Image
              width="24"
              height="24"
              src="/assets/right.svg"
              alt="Test"
              className="rounded "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoTab;
