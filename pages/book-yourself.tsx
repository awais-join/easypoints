import Image from 'next/image';
import Link from 'next/link';

import Container from '../components/views/Container';
import {InformationCircleIcon} from '@heroicons/react/24/outline';
import ArrowTwoIcon from '@/components/icons/ArrowTwoIcon';

const BookYourself = () => {
  return (
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
                    <div className="font-medium text-xs text-black">6h 55m</div>
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
                    <div className="font-medium text-xs text-black">6h 55m</div>
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

        {/* book yourself card */}
        <li className="lg:col-span-2 lg:ml-10 ">
          <div className="py-3 px-5 bg-light rounded-2xl border border-dashed">
            <h5 className="flex items-center text-xl font-bold mb-2 gap-2 lg:mt-0 mt-6">
              BOOK IT YOURSELF
            </h5>
            <p className="flex items-center text-black75 text-base font-normal mb-7 gap-2 lg:mt-0 mt-6">
              Booking award flights can sometimes be clunky, but we're here to
              help! We'll walk you through the steps.
            </p>
            <div className="flex justify-between gap-4 sm:gap-0 sm:flex-row flex-col items-center text-base font-bold mb-4 bg-white rounded-2xl py-2 px-4">
              <span className="flex items-center gap-2">
                New York
                <div className="relative h-5 w-5 mx-3 min-w-[1.25rem]">
                  <Image fill src="/assets/aeroplane-icon.svg" alt="..." />
                </div>
                Paris
              </span>
              <div>
                <span className="bg-light rounded-2xl p-2 font-semi-bold text-[0.63rem] mr-6">
                  Instant Transfer
                </span>
                <span className="bg-light rounded-2xl p-2 font-semi-bold text-[0.63rem]">
                  Online Booking
                </span>
              </div>
            </div>

            <div className="flex justify-between gap-5">
              <div className="bg-white rounded-2xl">
                <div className="flex flex-col gap-3 mb-4 pt-4 pb-2 px-4">
                  <div className="relative h-10 w-10 min-w-[0.75rem] ">
                    <Image
                      fill
                      src="/assets/prepare-account-icon.svg"
                      alt="..."
                    />
                  </div>
                  <h4 className="text-base font-bold">1. Prepare Account</h4>
                  <ul className="text-sm font-normal list-disc ml-4">
                    <li>Create account with United MileagePlus.</li>
                    <li>
                      Find matching flight using United MileagePlus booking
                      search.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl">
                <div className="flex flex-col gap-3 mb-4 pt-4 pb-2 px-4">
                  <div className="relative h-10 w-10 min-w-[0.75rem] ">
                    <Image
                      fill
                      src="/assets/transfer-points-icon.svg"
                      alt="..."
                    />
                  </div>
                  <h4 className="text-base font-bold">1. Prepare Account</h4>
                  <ul className="text-sm font-normal list-disc ml-4">
                    <li>Create account with United MileagePlus.</li>
                    <li>
                      Find matching flight using United MileagePlus booking
                      search.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl">
                <div className="flex flex-col gap-3 mb-4 pt-4 pb-2 px-4">
                  <div className="relative h-10 w-10 min-w-[0.75rem] ">
                    <Image fill src="/assets/book-flight-icon.svg" alt="..." />
                  </div>
                  <h4 className="text-base font-bold">1. Prepare Account</h4>
                  <ul className="text-sm font-normal list-disc ml-4">
                    <li>Create account with United MileagePlus.</li>
                    <li>
                      Find matching flight using United MileagePlus booking
                      search.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5 px-8 mt-6 bg-light rounded-2xl border border-dashed">
            <h5 className="text-xl font-bold mb-2 text-center">
              NEED HELP? DIDN’T FIND WHAT YOU WERE LOOKING FOR?
            </h5>
            <h6 className="text-base font-medium mb-2 text-center">
              Consider working with one of our friendly full-service concierges
              to search and book the best flights available with your points. A
              $200 per passenger fee applies.
            </h6>
            <div className="w-full lg:w-full md:w-auto xl:w-auto">
              <button
                className={`w-full inline-flex items-center justify-center rounded-full
                    bg-primary-500 text-white
                 px-7 py-3 text-sm hover:bg-primary-600 font-medium hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500`}
              >
                Submit a concierge booking request now
              </button>
            </div>
          </div>
        </li>
      </ul>
    </Container>
  );
};

export default BookYourself;
