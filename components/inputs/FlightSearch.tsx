import React, {SyntheticEvent, useState} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline';

import CustomSelect from './CustomSelect';
import Container from '../views/Container';
import Select from 'react-select/base';
import {useAppSelector} from '@/store/hooks';
import {getAirports} from '@/store/features/flight/flight.feature';
import {Airport} from '@/store/features/flight/flights';

const flightType = [{name: 'One Way', value: 'one-way'}];

const flightClass = [{name: '1 Adult, Economy', value: 'one-adult-economy'}];

interface SearchQueryParams {
  from: Airport | null;
  to: Airport | null;
  departureDate: string | null;
  roundTrip: boolean;
  flightClass: string | null;
}

const FlightPriceSection = () => {
  const airports = useAppSelector(getAirports);
  const {pathname} = useRouter();

  const [isSwitched, setIsSwitched] = useState(false);
  const [searchQuery, setSearchQuery] = useState<SearchQueryParams>({
    from: null,
    to: null,
    departureDate: null,
    roundTrip: false,
    flightClass: null
  });
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (
    name: keyof SearchQueryParams,
    value: SearchQueryParams[typeof name]
  ) => {
    setSearchQuery({...searchQuery, [name]: value});
  };

  return (
    <section className="pb-8 lg:pb-0 pt-6 md:pt-12">
      <Container>
        <div className="bg-white rounded-4xl p-4 lg:p-6 lg:-mt-28 lg:translate-y-28">
          <div className="border border-lightGray rounded-3xl shadow-sm p-4 lg:p-8">
            <div className="flex items-center flex-wrap gap-6 mb-4">
              {pathname !== '/flight-search' && (
                <h5 className="font-bold text-lg mr-auto">
                  See the lowest flight price in points for any city pair:
                </h5>
              )}

              <div className="flex flex-wrap gap-4">
                <CustomSelect list={flightType} />
                <CustomSelect list={flightClass} />
              </div>
            </div>
            <form>
              <div className="flex flex-col 2xl:flex-row gap-6">
                <div className="border border-lightGray rounded-3xl lg:rounded-full px-4 py-2 flex flex-col lg:flex-row gap-4 lg:gap-0">
                  <div
                    className={`flex items-center flex-1 ${
                      isSwitched ? 'order-first' : 'order-last'
                    }`}
                  >
                    <span className="h-8 w-8 min-w-[2rem] relative block mr-2">
                      <Image fill src="/assets/flight-to.svg" alt="..." />
                    </span>
                    <input
                      className="w-full text-lg border-0 focus:ring-0 bg-transparent placeholder:text-black50"
                      placeholder="Where to?"
                      type="text"
                      name="to"
                      // value={searchQuery.to}
                      // onChange={handleChange}
                    />
                  </div>
                  <div className="border-t lg:border-l border-lightGray relative mx-8">
                    <button
                      type="button"
                      className="swap-button absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 active:scale-105"
                      onClick={() => setIsSwitched(!isSwitched)}
                    >
                      <span className="h-7 w-7 relative block">
                        <Image fill src="/assets/swap-icon.svg" alt="..." />
                      </span>
                    </button>
                  </div>
                  <div
                    className={`flex items-center flex-1 ${
                      isSwitched ? 'order-last' : 'order-first'
                    }`}
                  >
                    <span className="h-8 w-8 min-w-[2rem] relative block mr-2">
                      <Image fill src="/assets/flight-from.svg" alt="..." />
                    </span>
                    <input
                      className="w-full text-lg border-0 focus:ring-0 bg-transparent placeholder:text-black50"
                      placeholder="Where from?"
                      type="text"
                      name="from"
                      // value={searchQuery.from}
                      // onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="border border-lightGray rounded-3xl lg:rounded-full px-4 py-2 flex flex-col lg:flex-row gap-4 lg:gap-0">
                  <input
                    className="w-full text-lg border-0 focus:ring-0 bg-transparent placeholder:text-black50"
                    type="date"
                    name="departDate"
                    // value={searchQuery.departDate}
                    // onChange={handleChange}
                  />

                  {/* will use later  */}

                  {/* <div className="border-t lg:border-l border-lightGray relative mx-8" />
                  <input
                    className="w-full text-lg border-0 focus:ring-0 bg-transparent placeholder:text-black50"
                    type="date"
                    name="return"
                    id="return"
                    placeholder="Return"
                  /> */}
                </div>
                <Link
                  className="flex gap-2 items-center justify-center rounded-full bg-primary-500 px-8 py-4 text-base font-medium text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                  href={{
                    pathname: '/flight-search'
                    // query: searchQuery
                  }}
                >
                  <MagnifyingGlassIcon className="h-6 w-6 min-w-[1.5rem]" />
                  Search
                </Link>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FlightPriceSection;
