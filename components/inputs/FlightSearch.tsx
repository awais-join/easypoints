import React, {useState} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline';
import styles from './FlightSearch.module.scss';
import CustomSelect from './CustomSelect';
import Container from '../views/Container';
import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {
  addToResponse,
  getAirports
} from '@/store/features/flight/flight.feature';
import {Airport, Response} from '@/store/features/flight/flights';
import Fuse from 'fuse.js';
import {Autocomplete} from '@mui/material';
import {
  ListboxComponent,
  StyledPopper
} from '@/components/inputs/autocomplete.component';
import {API} from '@/utils/axios.service';

const flightType = [{name: 'One Way', value: 'one-way'}];

const flightClass = [{name: '1 Adult, Economy', value: 'one-adult-economy'}];

const airlinesCodes = [
  {value: 'aa', name: 'American Air'},
  // {value: 'etihadGuest', name: 'Etihad Airways'},
  // {value: 'virginAustralia', name: 'Virgin Australia'},
  // {value: 'southwest', name: 'Southwest Airlines'},
  // {value: 'virginAtlantic', name: 'Virgin Atlantic'},
  // {value: 'jetBlue', name: 'JetBlue'},
  // {value: 'alaska', name: 'Alaska Air'},
  // {value: 'airCanada', name: 'Air Canada'},
  // {value: 'delta', name: 'Delta Air Lines'},
  // {value: 'united', name: 'United Airlines'},
  // {value: 'asiana', name: 'Asiana Airlines'},
  // {value: 'qantas', name: 'Qantas Airline'},
  // {value: 'korean', name: 'Korean Air'},
  // {value: 'lifemiles', name: 'LifeMiles Airline'},
  // {value: 'aeromexico', name: 'Aeroméxico Airline'},
  // {value: 'emirates', name: 'Emirates Airline'},
  // {value: 'asiaMiles', name: 'Asia Miles'},
  // {value: 'iberia', name: 'Iberia Airline'},
  // {value: 'british', name: 'British Airways'},
  // {value: 'hawaiian', name: 'Hawaiian Airlines'}
];

const FlightPriceSection = () => {
  const dispatch = useAppDispatch();

  const airports = useAppSelector(getAirports);
  const {pathname} = useRouter();

  const [isSwitched, setIsSwitched] = useState(false);
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

  const searchForAirports = (value: string) => {
    const fuse = new Fuse(airports, {
      shouldSort: true,
      keys: [
        'airportCode',
        'code',
        'airportName',
        'countryCode',
        'countryName',
        'country',
        'cityName',
        'city'
      ]
    });
    return fuse.search(value).map(({item}) => item);
  };

  const search = () => {
    airlinesCodes
      .map( airline => {
        return { promiseResult: API.get(
          `results/${airline.value}?origin=${searchValues.from?.airportCode}&destination=${searchValues.to?.airportCode}&departureDate=${searchValues.departureDate}`
        ), metaData: airline}
      })
      .forEach(promise => {
        promise.promiseResult.then((response: Response) => {
          if (response && Array.isArray(response.result)) {
            const dataTosend = response.result.map(item => {
              return {
                imageUrl: `${promise.metaData.value}.png`,
                airlineName: promise.metaData.name,
                departure: item.departure,
                arrivalTime: item.arrivalTime,
                duration: item.duration,
                origin: item.origin,
                destination: item.destination,
                flightNumber: item.flightNumber,
                operatedBy: item.operatedBy,
                aircraft: item.aircraft,
                haveConnectingFlight: item.haveConnectingFlight,
                connectingFlights:item.connectingFlights,
                flightFares:item.flightFares,
              }
            })
            dispatch(addToResponse(dataTosend));
          }
        });
      });
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
                <div
                  className={`border border-lightGray rounded-3xl lg:rounded-full px-4 py-2 flex flex-col lg:flex-row gap-4 lg:gap-0 ${styles.mainContainer}`}
                >
                  <Autocomplete
                    onChange={(_, value) => {
                      setSearchValues({...searchValues, to: value});
                    }}
                    value={searchValues.to}
                    sx={{width: 300}}
                    PopperComponent={StyledPopper}
                    ListboxComponent={ListboxComponent}
                    options={airports}
                    renderInput={params => {
                      return (
                        <div
                          className={`flex items-center flex-1 ${
                            isSwitched ? 'order-first' : 'order-last'
                          }`}
                          ref={params.InputProps.ref}
                        >
                          <span className="h-8 w-8 min-w-[2rem] relative block mr-2">
                            <Image fill src="/assets/flight-to.svg" alt="..." />
                          </span>
                          <input
                            {...params.inputProps}
                            className="w-full text-lg border-0 focus:ring-0 bg-transparent placeholder:text-black50"
                            placeholder="Where to?"
                            type="text"
                            name="to"
                          />
                        </div>
                      );
                    }}
                    getOptionLabel={e => e.airportName}
                  />
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
                  <Autocomplete
                    value={searchValues.from}
                    onChange={(_, value) => {
                      setSearchValues({...searchValues, from: value});
                    }}
                    sx={{width: 300}}
                    disableListWrap
                    PopperComponent={StyledPopper}
                    ListboxComponent={ListboxComponent}
                    options={airports}
                    renderInput={params => {
                      return (
                        <div
                          className={`flex items-center flex-1 ${
                            isSwitched ? 'order-last' : 'order-first'
                          }`}
                          ref={params.InputProps.ref}
                        >
                          <span className="h-8 w-8 min-w-[2rem] relative block mr-2">
                            <Image
                              fill
                              src="/assets/flight-from.svg"
                              alt="..."
                            />
                          </span>
                          <input
                            {...params.inputProps}
                            className="w-full text-lg border-0 focus:ring-0 bg-transparent placeholder:text-black50"
                            placeholder="Where from?"
                            type="text"
                            name="from"
                          />
                        </div>
                      );
                    }}
                    getOptionLabel={e => e.airportName}
                  />
                </div>
                <div className="border border-lightGray rounded-3xl lg:rounded-full px-4 py-2 flex flex-col lg:flex-row gap-4 lg:gap-0">
                  <input
                    className="w-full text-lg border-0 focus:ring-0 bg-transparent placeholder:text-black50"
                    type="date"
                    name="departDate"
                    value={searchValues.departureDate}
                    onChange={e => {
                      setSearchValues({
                        ...searchValues,
                        departureDate: e.target.value
                      });
                    }}
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
                  onClick={search}
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
