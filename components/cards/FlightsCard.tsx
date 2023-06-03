import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Transition} from '@headlessui/react';

import {InformationCircleIcon} from '@heroicons/react/24/outline';
import {ChevronDownIcon} from '@heroicons/react/24/solid';
import ArrowTwoIcon from '../icons/ArrowTwoIcon';
interface FlightsCardProps {
  isReturn: boolean;
}

const FlightsCard: React.FC<FlightsCardProps> = ({isReturn}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white shadow-primaryLg border rounded-2xl sm:rounded-3xl p-4 sm:p-7 mb-4">
      <div className="flex flex-col xl:flex-row  gap-4 2xl:gap-12">
        <div className="flex flex-col  xl:justify-around basis-[55%]">
          <div className="flex items-center gap-4 ">
            <div className="relative h-16 w-16 bg-gray-100 rounded-lg">
              <Image
                className="rounded-lg"
                fill
                src="/assets/f-image-0.png"
                alt="..."
              />
            </div>
            <div className="text-black75 text-sm capitalize space-y-1">
              <h6>United Airlines</h6>
              <h6>business</h6>
            </div>
          </div>
          <div className=" flex items-center gap-4 2xl:gap-6  ">
            <div className="text-left">
              <h6 className="font-bold text-base">8:45 AM</h6>
              <h6 className="text-black75 text-sm uppercase">JFK</h6>
            </div>
            <div className="text-center flex-1">
              <div className="relative w-full h-7">
                <Image fill src="/assets/to-from.svg" alt="..." />
                <span className="absolute inset-x-1/2 -translate-x-1/2 w-24 block bg-white px-3">
                  <h6 className="font-medium text-black text-base">6h 55m</h6>
                </span>
              </div>

              <h6 className="text-black75 text-sm">1 stop via XYZ</h6>
            </div>
            <div className="text-right">
              <h6 className="font-bold text-base">8:40 PM</h6>
              <h6 className="text-black75 text-sm uppercase">LHR</h6>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 basis-[45%]">
          <div className="w-full bg-light rounded-2xl p-3">
            <div className="bg-white rounded-2xl p-3">
              <div className="flex items-center gap-6">
                <div className="space-y-2 mr-auto">
                  <span className="block relative w-16 h-7">
                    <Image
                      fill
                      className="object-contain"
                      src="/assets/logo-chase.png"
                      alt="..."
                    />
                  </span>
                  <span className="block relative w-16 h-7">
                    <Image
                      fill
                      className="object-contain"
                      src="/assets/logo-3.png"
                      alt="..."
                    />
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h6 className="font-bold text-lg">1,78,000 pts</h6>
                    <InformationCircleIcon
                      title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, doloremque sunt aliquid sint voluptates ad doloribus dicta expedita eos et?"
                      className="h-4 w-4 min-w-[1rem] text-black75"
                    />
                  </div>
                  <h6 className="text-base text-black75">+$6.00*</h6>
                </div>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <ArrowTwoIcon className="h-6 w-6 text-black75" />
              <div className="bg-white rounded-xl p-3 flex items-center gap-3">
                <span className="block relative w-24 h-10 mr-auto">
                  <Image
                    fill
                    className="object-contain"
                    src="/assets/logo-4.png"
                    alt="..."
                  />
                </span>
                <h6 className="text-black75 font-semibold">1,77,600 pts</h6>
              </div>
              <button
                type="button"
                className="text-primary-500 font-semibold text-sm active:scale-105"
              >
                +1
              </button>
            </div>
          </div>
        </div>
      </div>
      {isReturn && (
        <div className="flex flex-col xl:flex-row  gap-4 2xl:gap-12 mt-4">
          <div className="flex flex-col  xl:justify-around basis-[55%]">
            <div className="flex items-center gap-4 ">
              <div className="relative h-16 w-16 bg-gray-100 rounded-lg">
                <Image
                  className="rounded-lg"
                  fill
                  src="/assets/f-image-0.png"
                  alt="..."
                />
              </div>
              <div className="text-black75 text-sm capitalize space-y-1">
                <h6>United Airlines</h6>
                <h6>business</h6>
              </div>
            </div>
            <div className=" flex items-center gap-4 2xl:gap-6  ">
              <div className="text-left">
                <h6 className="font-bold text-base">8:40 PM</h6>
                <h6 className="text-black75 text-sm uppercase">LHR</h6>
              </div>
              <div className="text-center flex-1">
                <div className="relative w-full h-7">
                  <Image fill src="/assets/to-from.svg" alt="..." />
                  <span className="absolute inset-x-1/2 -translate-x-1/2 w-24 block bg-white px-3">
                    <h6 className="font-medium text-black text-base">6h 55m</h6>
                  </span>
                </div>

                <h6 className="text-black75 text-sm">1 stop via XYZ</h6>
              </div>
              <div className="text-right">
                <h6 className="font-bold text-base">8:45 AM</h6>
                <h6 className="text-black75 text-sm uppercase">JFK</h6>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 basis-[45%]">
            <div className="w-full bg-light rounded-2xl p-3">
              <div className="bg-white rounded-2xl p-3">
                <div className="flex items-center gap-6">
                  <div className="space-y-2 mr-auto">
                    <span className="block relative w-16 h-7">
                      <Image
                        fill
                        className="object-contain"
                        src="/assets/logo-chase.png"
                        alt="..."
                      />
                    </span>
                    <span className="block relative w-16 h-7">
                      <Image
                        fill
                        className="object-contain"
                        src="/assets/logo-3.png"
                        alt="..."
                      />
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h6 className="font-bold text-lg">1,78,000 pts</h6>
                      <InformationCircleIcon
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, doloremque sunt aliquid sint voluptates ad doloribus dicta expedita eos et?"
                        className="h-4 w-4 min-w-[1rem] text-black75"
                      />
                    </div>
                    <h6 className="text-base text-black75">+$6.00*</h6>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <ArrowTwoIcon className="h-6 w-6 text-black75" />
                <div className="bg-white rounded-xl p-3 flex items-center gap-3">
                  <span className="block relative w-24 h-10 mr-auto">
                    <Image
                      fill
                      className="object-contain"
                      src="/assets/logo-4.png"
                      alt="..."
                    />
                  </span>
                  <h6 className="text-black75 font-semibold">1,77,600 pts</h6>
                </div>
                <button
                  type="button"
                  className="text-primary-500 font-semibold text-sm active:scale-105"
                >
                  +1
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center mt-3">
        <button
          className="rounded-full bg-primary-500 px-6 md:px-8 py-3 md:py-4 text-base font-medium  md:font-bold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
          type="button"
        >
          Resume Booking
        </button>
        <button
          className=" rounded-full px-6 md:px-8 py-3 md:py-4 text-base font-medium  md:font-bold text-black shadow-sm hover:bg-primary-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
          type="button"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FlightsCard;
