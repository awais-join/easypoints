import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Transition} from '@headlessui/react';

import {InformationCircleIcon} from '@heroicons/react/24/outline';
import {ChevronDownIcon} from '@heroicons/react/24/solid';
import ArrowTwoIcon from '../icons/ArrowTwoIcon';
import {useAppSelector} from '@/store/hooks';
import {getAllResponse} from '@/store/features/flight/flight.feature';
import getConfig from 'next/config';
const config = getConfig();
const DOMAIN_BASE_URL =
  config.publicRuntimeConfig.DOMAIN_BASE_URL || '';

const BookCard = () => {
  const allFlights = useAppSelector(getAllResponse);

  const [open, setOpen] = useState(false);
  return (
    <>
      {allFlights.map(value => {
        return (
          <div className="bg-white shadow-primaryLg border rounded-2xl sm:rounded-3xl p-4 sm:p-7">
            <div className="flex flex-col xl:flex-row xl:justify-between gap-4 2xl:gap-12">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 bg-gray-100 rounded-lg">
                  <Image
                    className="rounded-lg"
                    fill
                    src={value.imageUrl ? `${DOMAIN_BASE_URL}${value.imageUrl}` : ''}
                    alt="..."
                  />
                </div>
                <div className="text-black75 text-sm capitalize space-y-1">
                  <h6>United Airlines</h6>
                  <h6>business</h6>
                </div>
              </div>
              <div className="xl:w-5/12 flex items-center gap-4 2xl:gap-12">
                <div className="text-left">
                  <h6 className="font-bold text-base">8:45 AM</h6>
                  <h6 className="text-black75 text-sm uppercase">JFK</h6>
                </div>
                <div className="text-center flex-1">
                  <div className="relative w-full h-7">
                    <Image fill src="/assets/to-from.svg" alt="..." />
                    <span className="absolute inset-x-1/2 -translate-x-1/2 w-24 block bg-white px-3">
                      <h6 className="font-medium text-black text-base">
                        6h 55m
                      </h6>
                    </span>
                  </div>

                  <h6 className="text-black75 text-sm">1 stop via XYZ</h6>
                </div>
                <div className="text-right">
                  <h6 className="font-bold text-base">8:40 PM</h6>
                  <h6 className="text-black75 text-sm uppercase">LHR</h6>
                </div>
              </div>
              <div className="flex items-center gap-4">
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
                      <h6 className="text-black75 font-semibold">
                        1,77,600 pts
                      </h6>
                    </div>
                    <button
                      type="button"
                      className="text-primary-500 font-semibold text-sm active:scale-105"
                    >
                      +1
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  className="h-12 w-12 min-w-[3rem] border border-lightGray rounded-full hidden xl:flex items-center justify-center"
                  onClick={() => setOpen(!open)}
                >
                  <ChevronDownIcon
                    className={`w-7 h-7 text-primary-500 transition-all duration-300 ${
                      open && 'rotate-180'
                    }`}
                  />
                </button>
              </div>
              <button
                type="button"
                className="bg-white text-primary-500 flex justify-center items-center gap-2 xl:hidden"
                onClick={() => setOpen(!open)}
              >
                <span className="font-semibold capitalize">
                  {open ? 'Hide' : 'Show'} Details
                </span>
                <ChevronDownIcon
                  className={`w-5 h-5 transition-all duration-300 ${
                    open && 'rotate-180'
                  }`}
                />
              </button>
            </div>
            <Transition
              show={open}
              enter="transition duration-300 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-200 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <div className="mt-4 xl:mt-6 bg-light rounded-2xl p-4 sm:p-6">
                <ul className="flex flex-col lg:flex-row lg:items-center gap-6 w-full">
                  <li className="flex-1">
                    <div className="bg-white rounded-2xl p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 2xl:gap-12">
                        <div className="text-center sm:text-left space-y-1">
                          <h6 className="font-bold text-base">8:45 AM</h6>
                          <h6 className="text-black75 text-sm uppercase">
                            New York (EWR)
                          </h6>
                          <h6 className="text-black75 text-sm uppercase">
                            Thu May 25th
                          </h6>
                        </div>
                        <div className="text-center flex-1">
                          <div className="relative w-full h-7">
                            <Image fill src="/assets/to-from.svg" alt="..." />
                            <span className="absolute inset-x-1/2 -translate-x-1/2 w-24 block bg-white px-3">
                              <h6 className="font-medium text-black text-base">
                                6h 55m
                              </h6>
                            </span>
                          </div>

                          <h6 className="text-black75 text-sm">
                            Flight Duration
                          </h6>
                        </div>
                        <div className="text-center sm:text-right space-y-1">
                          <h6 className="font-bold text-base">8:40 PM</h6>
                          <h6 className="text-black75 text-sm uppercase">
                            Paris (CDG)
                          </h6>
                          <h6 className="text-black75 text-sm uppercase">
                            Fri May 26th
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="bg-light py-2 relative">
                      <hr className="border-2 border-dashed border-lightGray w-10/12 mx-auto" />
                      <span className="absolute top-1/2 -translate-y-1/2 inset-x-1/2 -translate-x-1/2 w-40 p-2 flex items-center justify-center bg-white text-primary-500 font-semibold text-sm border border-gray-300 shadow-sm rounded-full">
                        1h 30m Layover
                      </span>
                    </div>
                    <div className="bg-white rounded-2xl p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 2xl:gap-12">
                        <div className="text-center sm:text-left space-y-1">
                          <h6 className="font-bold text-base">8:45 AM</h6>
                          <h6 className="text-black75 text-sm uppercase">
                            New York (EWR)
                          </h6>
                          <h6 className="text-black75 text-sm uppercase">
                            Thu May 25th
                          </h6>
                        </div>
                        <div className="text-center flex-1">
                          <div className="relative w-full h-7">
                            <Image fill src="/assets/to-from.svg" alt="..." />
                            <span className="absolute inset-x-1/2 -translate-x-1/2 w-24 block bg-white px-3">
                              <h6 className="font-medium text-black text-base">
                                6h 55m
                              </h6>
                            </span>
                          </div>

                          <h6 className="text-black75 text-sm">
                            Flight Duration
                          </h6>
                        </div>
                        <div className="text-center sm:text-right space-y-1">
                          <h6 className="font-bold text-base">8:40 PM</h6>
                          <h6 className="text-black75 text-sm uppercase">
                            Paris (CDG)
                          </h6>
                          <h6 className="text-black75 text-sm uppercase">
                            Fri May 26th
                          </h6>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="flex-1 lg:flex-none">
                    <Link
                      href="#"
                      className="w-full inline-flex gap-2 items-center justify-center rounded-full bg-primary-500 px-10 py-5 text-base font-bold text-white hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                    >
                      <span>View Booking Options</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </Transition>
          </div>
        );
      })}
    </>
  );
};

export default BookCard;
