import React from 'react';

function CareersFilter() {
  return (
    <>
      <div className="md:flex-shrink-0 md:max-w-2xl px-2 lg:md:basis-1/2 grow hover:cursor-pointer">
        <div className="px-8 h-full bg-white bg-opacity-80 rounded-xl">
          <div className="flex  justify-between h-full">
            <div className="mb-4">
              <h2 className="mb-4 text-5xl font-bold font-heading leading-snug">
                Current positions
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex-shrink-0 md:max-w-2xl p-2 lg:md:basis-1/2 grow hover:cursor-pointer">
        <div className="md:pl-6 xl:px-8 h-full bg-white bg-opacity-80  rounded-xl">
          <div className="flex flex-col md:flex-row justify-between h-full">
            <div className="text-md xl:leading-5 sm:leading-5  xl:text-xl  rounded-[40px] bg-blue w-[70px] h-[56px]  lg:ml-0 py-[18px] px-[24px] text-white inline-block text-center">
              All
            </div>
            <div className="text-md xl:text-xl py-[18px] leading-snug inline-block lg:text-center">
              <span
                className={`w-3 h-3 rounded-full bg-yellow inline-block mr-2`}
              ></span>
              Design
            </div>
            <div className="text-md xl:text-xl py-[18px] leading-snug inline-block lg:text-center">
              <span
                className={`w-3 h-3 rounded-full bg-blue inline-block mr-2`}
              ></span>
              Development
            </div>
            <div className="text-md xl:text-xl py-[18px] leading-snug inline-block lg:text-center">
              <span
                className={`w-3 h-3 rounded-full bg-lightPink inline-block mr-2`}
              ></span>
              Business
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CareersFilter;
