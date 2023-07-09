import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Transition} from '@headlessui/react';

import {InformationCircleIcon} from '@heroicons/react/24/outline';
import {ChevronDownIcon} from '@heroicons/react/24/solid';
import ArrowTwoIcon from '../icons/ArrowTwoIcon';
import {useAppSelector} from '@/store/hooks';
import {getAllResponse} from '@/store/features/flight/flight.feature';
import FilterCard from './FilterCard';
import getConfig from 'next/config';
import {toHoursAndMinutes, toAMPMTime, dateToDayAndMonth} from 'utils/utils';
import {Airport, UnifiedFlightResponse} from '@/store/features/flight/flights';

const config = getConfig();
const DOMAIN_BASE_URL = config.publicRuntimeConfig.DOMAIN_BASE_URL || '';

const BookCard = () => {
  const allFlights = useAppSelector(getAllResponse);

  const [flightsData, setFlightsData] = useState<UnifiedFlightResponse[] | []>(
    []
  );

  const [searchValues, setSearchValues] = useState<{
    from: Airport | null;
    to: Airport | null;
    departureDate: string;
    flightClass: string;
    roundTrip: string;
  }>({
    from: null,
    to: null,
    departureDate: '',
    flightClass: '',
    roundTrip: ''
  });

  const [open, setOpen] = useState(false);
  const [selectedFlights, setSelectedFlights] = useState<string[]>([]);
  const [selectedStops, setSelectedStops] = useState<{
    value: string;
    name: string;
  } | null>({
    value: '',
    name: ''
  });
  const [arrivalFilter, setArrivalFilter] = useState<[number, number]>([1, 48]);
  const [deptFilter, setDeptFilter] = useState<[number, number]>([1, 48]);

  console.log('selectedFlights', selectedFlights);
  useEffect(() => {
    if (allFlights) setFlightsData(allFlights);
  }, [allFlights]);

  useEffect(() => {
    handleFilter();
  }, [selectedFlights, selectedStops, arrivalFilter, deptFilter]);

  const handleFilter = () => {
    let filteredData = [...allFlights];
    if (selectedFlights.length) {
      filteredData = allFlights?.filter(flight =>
        selectedFlights.includes(flight.airlineName)
      );
    }

    if (
      selectedStops?.value &&
      selectedStops?.value !== 'Any number of stops'
    ) {
      filteredData = filteredData?.filter(
        flight =>
          flight.haveConnectingFlight &&
          flight.connectingFlights.length === Number(selectedStops?.value) + 1
      );
    }
    setFlightsData(filteredData);
  };

  return (
    <>
      {/* filter section */}

      <FilterCard
        selectedFlights={selectedFlights}
        setSelectedFlights={setSelectedFlights}
        selectedStops={selectedStops}
        setSelectedStops={setSelectedStops}
        arrivalFilter={arrivalFilter}
        setArrivalFilter={setArrivalFilter}
        deptFilter={deptFilter}
        setDeptFilter={setDeptFilter}
      />
      <h6 className="font-bold">
        {flightsData?.length} flight{flightsData?.length > 1 ? '(s)' : ''}
      </h6>
      {/* /filter section */}

      {flightsData?.length ? (
        flightsData.map(flight => {
          return (
            <div
              key={Math.random()}
              className="bg-white shadow-primaryLg border rounded-2xl sm:rounded-3xl p-4 sm:p-7 mt-2"
            >
              <div className="flex flex-col xl:flex-row xl:justify-between gap-4 2xl:gap-12">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 bg-gray-100 rounded-lg">
                    <Image
                      className="rounded-lg"
                      fill
                      src={flight.imageUrl ? `/assets/${flight.imageUrl}` : ''}
                      alt="airline name"
                    />
                  </div>
                  <div className="text-black75 text-sm capitalize space-y-1">
                    <h6>{flight.airlineName}</h6>
                    <h6>{flight.flightFares[0].cabinClass}</h6>
                  </div>
                </div>
                <div className="xl:w-5/12 flex items-center gap-4 2xl:gap-12">
                  <div className="text-left">
                    <h6 className="font-bold text-base">
                      {toAMPMTime(flight.departure)}
                    </h6>
                    <h6 className="text-black75 text-sm uppercase">
                      {flight.origin}
                    </h6>
                  </div>
                  <div className="text-center flex-1">
                    <div className="relative w-full h-7">
                      <Image fill src="/assets/to-from.svg" alt="..." />
                      <span className="absolute inset-x-1/2 -translate-x-1/2 w-24 block bg-white px-3">
                        <h6 className="font-medium text-black text-base">
                          {toHoursAndMinutes(flight.duration)}
                        </h6>
                      </span>
                    </div>

                    <h6 className="text-black75 text-sm">
                      {flight.haveConnectingFlight
                        ? `${flight.connectingFlights.length - 1} stops via ${
                            flight.connectingFlights[0].destination
                          }`
                        : 'non stop'}
                    </h6>
                  </div>
                  <div className="text-right">
                    <h6 className="font-bold text-base">
                      {toAMPMTime(flight.arrivalTime)}
                    </h6>
                    <h6 className="text-black75 text-sm uppercase">
                      {flight.destination}
                    </h6>
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
                            <h6 className="font-bold text-lg">
                              {
                                flight.flightFares[0].totalRequiredMoneyType[1]
                                  .amount
                              }{' '}
                              pts
                            </h6>
                            <InformationCircleIcon
                              title="some info here"
                              className="h-4 w-4 min-w-[1rem] text-black75"
                            />
                          </div>
                          <h6 className="text-base text-black75">
                            +$
                            {
                              flight.flightFares[0].totalRequiredMoneyType[0]
                                .amount
                            }
                            *
                          </h6>
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
                        <h6 className="text-black75 font-semibold">0 pts</h6>
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
                      {flight.haveConnectingFlight ? (
                        flight.connectingFlights.map(
                          (flightLeg, flightLegIndex) => (
                            <div key={flightLeg.arrivalTime}>
                              <div className="bg-white rounded-2xl p-4 sm:p-6 mb-2">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-4 2xl:gap-12">
                                  <div className="text-center sm:text-left space-y-1">
                                    <h6 className="font-bold text-base">
                                      {toAMPMTime(flightLeg.departure)}
                                    </h6>
                                    <h6 className="text-black75 text-sm uppercase">
                                      {flightLeg.origin}
                                    </h6>
                                    <h6 className="text-black75 text-sm uppercase">
                                      {dateToDayAndMonth(flightLeg.departure)}
                                    </h6>
                                  </div>
                                  <div className="text-center flex-1">
                                    <div className="relative w-full h-7">
                                      <Image
                                        fill
                                        src="/assets/to-from.svg"
                                        alt="..."
                                      />
                                      <span className="absolute inset-x-1/2 -translate-x-1/2 w-24 block bg-white px-3">
                                        <h6 className="font-medium text-black text-base">
                                          {toHoursAndMinutes(
                                            flightLeg.duration
                                          )}
                                        </h6>
                                      </span>
                                    </div>

                                    <h6 className="text-black75 text-sm">
                                      Flight Duration
                                    </h6>
                                  </div>
                                  <div className="text-center sm:text-right space-y-1">
                                    <h6 className="font-bold text-base">
                                      {toAMPMTime(flightLeg.arrivalTime)}
                                    </h6>
                                    <h6 className="text-black75 text-sm uppercase">
                                      {flightLeg.destination}
                                    </h6>
                                    <h6 className="text-black75 text-sm uppercase">
                                      {dateToDayAndMonth(flightLeg.arrivalTime)}
                                    </h6>
                                  </div>
                                </div>
                              </div>
                              {flightLegIndex !==
                                flight.connectingFlights.length - 1 && (
                                <div className="bg-light py-2 relative">
                                  <hr className="border-2 border-dashed border-lightGray w-10/12 mx-auto" />
                                  <span className="absolute top-1/2 -translate-y-1/2 inset-x-1/2 -translate-x-1/2 w-40 p-2 flex items-center justify-center bg-white text-primary-500 font-semibold text-sm border border-gray-300 shadow-sm rounded-full">
                                    {toHoursAndMinutes(
                                      flightLeg.layoverTimeAfterFlight
                                    )}
                                    Layover
                                  </span>
                                </div>
                              )}
                            </div>
                          )
                        )
                      ) : (
                        <div className="bg-white rounded-2xl p-4 sm:p-6">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-4 2xl:gap-12">
                            <div className="text-center sm:text-left space-y-1">
                              <h6 className="font-bold text-base">
                                {' '}
                                {toAMPMTime(flight.departure)}
                              </h6>
                              <h6 className="text-black75 text-sm uppercase">
                                {flight.origin}
                              </h6>
                              <h6 className="text-black75 text-sm uppercase">
                                {dateToDayAndMonth(flight.departure)}
                              </h6>
                            </div>
                            <div className="text-center flex-1">
                              <div className="relative w-full h-7">
                                <Image
                                  fill
                                  src="/assets/to-from.svg"
                                  alt="..."
                                />
                                <span className="absolute inset-x-1/2 -translate-x-1/2 w-24 block bg-white px-3">
                                  <h6 className="font-medium text-black text-base">
                                    {toHoursAndMinutes(flight.duration)}
                                  </h6>
                                </span>
                              </div>

                              <h6 className="text-black75 text-sm">
                                Flight Duration
                              </h6>
                            </div>
                            <div className="text-center sm:text-right space-y-1">
                              <h6 className="font-bold text-base">
                                {toAMPMTime(flight.arrivalTime)}
                              </h6>
                              <h6 className="text-black75 text-sm uppercase">
                                {flight.destination}
                              </h6>
                              <h6 className="text-black75 text-sm uppercase">
                                {dateToDayAndMonth(flight.arrivalTime)}
                              </h6>
                            </div>
                          </div>
                        </div>
                      )}
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
        })
      ) : (
        <h4 className="font-bold mt-10 flex items-center justify-center">
          no flights found
        </h4>
      )}
    </>
  );
};

export default BookCard;
