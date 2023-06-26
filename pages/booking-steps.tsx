import Image from 'next/image';
import Link from 'next/link';

import Container from '../components/views/Container';
import {InformationCircleIcon} from '@heroicons/react/24/outline';
import ArrowTwoIcon from '@/components/icons/ArrowTwoIcon';
import Stepper from '@/components/stepper/Stepper';

const BookYourself = () => {
  return (
    <>
      <div className="bg-light rounded-b-3xl text-base py-6 mx-3 text-black font-medium">
        <Container>
          <div className="flex items-center cursor-pointer">
            <div className="relative h-7 w-3 mr-2 min-w-[1.25rem] rotate-180">
              <Image fill src="/assets/arrow-to-right-icon.svg" alt="..." />
            </div>
            <div className="text-base">Back to results</div>
          </div>
        </Container>
      </div>
      <Container>
        <ul className="grid grid-cols-1 lg:grid-cols-3 my-8">
          {/* flight details card */}
          <li>
            <h4 className="text-xl font-bold mb-4">
              <span className="flex items-center gap-2 line-clamp-1 font-bold text-xl">
                New York
                <div className="relative h-5 w-5 mx-3 min-w-[1.25rem]">
                  <Image fill src="/assets/aeroplane-icon.svg" alt="..." />
                </div>
                Paris
              </span>
            </h4>
            <Link href={'/flight-search'}>
              <span className="flex items-center gap-2 line-clamp-1 cursor-pointer mb-4 font-semibold text-sm text-primary ">
                <div className="relative h-3 w-3 min-w-[0.75rem]">
                  <Image fill src="/assets/edit-flight.svg" alt="..." />
                </div>
                Change Flight
              </span>
            </Link>

            <div className="flex items-center gap-4">
              <div className="w-full bg-light rounded-2xl p-3 mb-4">
                <div className="bg-white rounded-2xl p-3">
                  <div className="flex items-center content-evenly gap-6">
                    <div className="space-y-2 ">
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
                  <div className="bg-white rounded-xl p-3 flex items-center content-evenly gap-3 w-full">
                    <span className="block relative w-24 h-10">
                      <Image
                        fill
                        className="object-contain"
                        src="/assets/logo-4.png"
                        alt="..."
                      />
                    </span>
                    <h6 className="text-black75 font-semibold">1,77,600 pts</h6>
                  </div>
                </div>
              </div>
            </div>

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
                  <div className="font-bold text-base mb-2">May 25th, 2023</div>
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

          {/* booking steps section */}
          <li className="lg:col-span-2 lg:ml-10 ">

          <Stepper />

            <div className="py-4 px-5 bg-light rounded-2xl border border-dashed">

              <h6 className="text-base font-medium text-black75 mb-2">
                PREPARE
              </h6>
              <div className="flex justify-between items-center">
                <h4 className="text-[1.14rem] font-bold">
                  Create an account with United MileagePlus
                </h4>
                <div className="flex items-center">
                  <div className="relative h-7 w-3 mr-2 min-w-[1.25rem] rotate-180 rounded-full bg-white p-4 cursor-pointer">
                    <Image
                      fill
                      src="/assets/arrow-to-right-icon.svg"
                      alt="..."
                    />
                  </div>
                  <div className="relative h-7 w-3 mr-2 min-w-[1.25rem] rounded-full bg-white p-4 cursor-pointer">
                    <Image
                      fill
                      src="/assets/arrow-to-right-icon.svg"
                      alt="..."
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-8 my-6">
                <div className="text-sm font-normal text-black75">
                  <div>
                    You need a United MileagePlus account to book these flights.
                  </div>
                  <ul className="list-disc my-5">
                    <li className="ml-8 ">
                      Sign up at
                      <a
                        className="ml-1 underline"
                        href="https://www.united.com/en/US/account/enroll/profile"
                        target="_blank"
                      >
                        United.com
                      </a>
                    </li>
                  </ul>
                  <div>
                    After you sign up, document your United MileagePlus number.
                    You'll need this to transfer your points.
                  </div>

                  <div className="w-full lg:w-full md:w-auto xl:w-auto mt-4">
                    <button
                      className={`w-full inline-flex items-center justify-center rounded-full
                    bg-primary-500 text-white px-7 py-3 text-sm hover:bg-primary-600 font-semibold hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500`}
                    >
                      Sign up for an account at United.com
                    </button>
                  </div>

                  <div className="flex justify-center mt-3">
                    <h6 className="text-sm font-semibold text-primary">
                      I already have one
                    </h6>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-3">
                  <div className="relative h-full w-100 min-w-[25rem]">
                    <Image fill src="/assets/stepper-image1.png" alt="..." />
                  </div>
                  <div className="text-xs font-normal">
                    * Screenshots and animations may vary from your experience.
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </Container>
    </>
  );
};

export default BookYourself;
