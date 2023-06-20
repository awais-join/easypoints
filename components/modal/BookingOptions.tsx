import {Fragment, useState, FC} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import {XMarkIcon, InformationCircleIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';

import Container from '../views/Container';
import {PointsDealListCard} from '../PointsDealListCard';

const BookingOptions = () => {
  const [open, setOpen] = useState(true);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 w-full lg:max-w-7xl sm:p-6">
                <Container>
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <h5 className="text-xl font-bold flex flex-col sm:flex-row gap-2 sm:items-center mb-4">
                    <span className="flex items-center gap-2 line-clamp-1 font-bold text-3xl">
                      New York
                      <div className="relative h-5 w-5 mx-3 min-w-[1.25rem]">
                        <Image
                          fill
                          src="/assets/aeroplane-icon.svg"
                          alt="..."
                        />
                      </div>
                      Paris
                    </span>
                  </h5>

                  <ul className="grid grid-cols-1 lg:grid-cols-3">
                    {/* flight details card */}
                    <li>
                      <h5 className="flex items-center text-lg font-bold mb-7 gap-2">
                        <span className="flex items-center justify-center h-6 w-6 min-w-[1.5rem] text-white bg-primary-500 text-sm font-bold rounded-full">
                          1
                        </span>
                        <span>Review your flight details</span>
                      </h5>

                      <div className="bg-light rounded-2xl border border-dashed p-2">
                        <div className="flex items-center gap-6 m-4">
                          <span className="block relative w-16 h-7">
                            <Image
                              fill
                              className="object-contain"
                              src="/assets/logo-3.png"
                              alt="..."
                            />
                          </span>
                          <div>
                            <div className="font-bold text-base mb-2">
                              May 25th, 2023
                            </div>
                            <div className="text-sm text-gray-500">
                              Air France – Nonstop
                            </div>
                          </div>
                        </div>

                        <div className="bg-white rounded-2xl px-2 py-4">
                          <div className="flex justify-center">
                            <div className="row-span-1 mr-1 relative w-6">
                              <Image
                                fill
                                className="object-contain"
                                src="/assets/vertical-arrow-trail.svg"
                                alt="..."
                              />
                            </div>
                            <div className="space-y-4">
                              <div className="flex gap-8 items-center">
                                <div className="font-semibold text-sm text-black">
                                  8:45 AM
                                </div>
                                <div className="font-semibold text-xs text-black75">
                                  New York (EWR)
                                </div>
                                <div className="text-xs font-normal text-black75">
                                  Fri May 26th
                                </div>
                              </div>
                              <div className="flex gap-8 items-center">
                                <div className="font-medium text-xs text-black">
                                  6h 55m
                                </div>
                                <div className="font-normal text-[0.69rem] text-black75">
                                  United Airlines UA57781
                                </div>
                              </div>
                              <div className="flex gap-8 items-center">
                                <div className="font-semibold text-sm text-black">
                                  8:45 AM
                                </div>
                                <div className="font-semibold text-xs text-black75">
                                  New York (EWR)
                                </div>
                                <div className="text-xs font-normal text-black75">
                                  Fri May 26th
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-light py-2 relative">
                          <hr className="border-1 border-dashed border-lightGray w-12/14 mx-auto" />
                          <span className="absolute top-1/2 -translate-y-1/2 inset-x-1/2 -translate-x-1/2 w-40 p-1 flex items-center justify-center bg-white text-primary-500 font-semibold text-xs border border-gray-300 shadow-sm rounded-full">
                            1h 30m Layover
                          </span>
                        </div>

                        <div className="bg-white rounded-2xl px-2 py-4">
                          <div className="flex justify-center">
                            <div className="row-span-1 mr-1 relative w-6">
                              <Image
                                fill
                                className="object-contain"
                                src="/assets/vertical-arrow-trail.svg"
                                alt="..."
                              />
                            </div>
                            <div className="space-y-4">
                              <div className="flex gap-8 items-center">
                                <div className="font-semibold text-sm text-black">
                                  8:45 AM
                                </div>
                                <div className="font-semibold text-xs text-black75">
                                  New York (EWR)
                                </div>
                                <div className="text-xs font-normal text-black75">
                                  Fri May 26th
                                </div>
                              </div>
                              <div className="flex gap-8 items-center">
                                <div className="font-medium text-xs text-black">
                                  6h 55m
                                </div>
                                <div className="font-normal text-[0.69rem] text-black75">
                                  United Airlines UA57781
                                </div>
                              </div>
                              <div className="flex gap-8 items-center">
                                <div className="font-semibold text-sm text-black">
                                  8:45 AM
                                </div>
                                <div className="font-semibold text-xs text-black75">
                                  New York (EWR)
                                </div>
                                <div className="text-xs font-normal text-black75">
                                  Fri May 26th
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* payment and points card */}
                    <li className="lg:col-span-2 lg:ml-10">
                      <h5 className="flex items-center text-lg font-bold mb-7 gap-2 lg:mt-0 mt-6">
                        <span className="flex items-center justify-center h-6 w-6 min-w-[1.5rem] text-white bg-primary-500 text-sm font-bold rounded-full">
                          2
                        </span>
                        <span>Select a way to book</span>
                      </h5>
                      <div className="ml-8 w-4/5">
                        <h5 className="text-xs font-normal black75 mb-3">
                          We’ll help you transfer your points to an airline
                          program and then book directly with them. We’ll guide
                          you through this process step-by-step.
                        </h5>
                        <h5 className="text-xs font-normal black75 mb-3">
                          <span className="font-bold mr-3">
                            We’ll help you transfer your points to an airline
                            program and then book directly with them. We’ll
                            guide you through this process step-by-step.
                          </span>
                          Additional bag fees and other fees may apply.
                        </h5>
                      </div>

                      <div className="bg-light rounded-2xl border border-dashed pt-2 px-2 mt-5">
                        <div className="p-3">
                          <h5 className="flex items-center text-sm font-bold mb-4">
                            easypoints pick:
                            <InformationCircleIcon
                              title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, doloremque sunt aliquid sint voluptates ad doloribus dicta expedita eos et?"
                              className="h-4 w-4 min-w-[1rem] text-black75 ml-3"
                            />
                          </h5>
                          {[1, 2].map((number) => (
                            <PointsDealListCard key={number} cardType={'easypoints'} />
                          ))}
                        </div>
                      </div>

                      <div className="bg-light rounded-2xl border border-dashed pt-2 px-2 mt-5">
                        <div className="p-3">
                          <h5 className="flex items-center text-sm font-bold mb-4">
                            Transfer points from a credit card:
                          </h5>
                          {[1, 2, 3, 4, 5, 6].map((number) => (
                            <PointsDealListCard key={number} cardType={'other'} />
                          ))}
                        </div>
                      </div>

                      <div className="bg-light rounded-2xl border border-dashed pt-2 px-2 mt-5">
                        <div className="p-3">
                          <h5 className="flex items-center text-sm font-bold mb-4">
                            Explore other programs:
                          </h5>
                          {[1, 2].map((number) => (
                            <PointsDealListCard key={number} cardType={'other'} />
                          ))}

                          <h5 className="flex items-center text-sm font-bold mb-4">
                            Pay retail price:
                          </h5>

                          <div className="bg-white rounded-3xl text-black px-3 py-4 mb-4 font-normal text-sm">
                            $9,868 via skyscanner
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </Container>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default BookingOptions;
