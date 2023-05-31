import React, {useState} from 'react';
import {Switch} from '@headlessui/react';
import CustomSelect from '@/components/inputs/CustomSelect';
import Dropdown from '@/components/inputs/Dropdown';
import TimeSlider from '../sliders/TimeSlider';

import {ArrowRightIcon} from '@heroicons/react/24/solid';
import {InformationCircleIcon} from '@heroicons/react/24/outline';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface Airline {
  name: string;
}

interface CardPrograms {
  name: string;
}

const quickestFlights = [
  {name: 'Quickest Flights', value: 'quickest-flights'},
  {name: 'Points Low to High', value: 'points-low-to-high'},
  {name: 'Easypoints picks', value: 'easypoints-picks'}
];

const stopsList = [
  {name: 'Any number of stops'},
  {name: 'Non-stop only'},
  {name: '1 stop or fewer'},
  {name: '2 stop or fewer'}
];

const airlines: Airline[] = [
  {name: 'Aer Lingus'},
  {name: 'Air Canada'},
  {name: 'Air France'},
  {name: 'American Airlines'},
  {name: 'American Airlines 2'},
  {name: 'American Airlines 3'},
  {name: 'American Airlines 3'},
  {name: 'American Airlines 4'},
  {name: 'American Airlines 5'},
  {name: 'American Airlines 6'}
];

const cardPrograms: CardPrograms[] = [
  {name: 'American Express Membership Rewards'},
  {name: 'Bilt'},
  {name: 'Brex'},
  {name: 'Capital One'},
  {name: 'Chase Ultimate Rewards'},
  {name: 'Citi ThankYou'}
];

const FilterCard = () => {
  const [allAirlines, setAllAirlines] = useState(false);
  const [allPrograms, setAllPrograms] = useState(false);

  return (
    <>
      <div className="border-b pb-5 mb-2">
        <h5 className="text-lg font-bold flex flex-col sm:flex-row gap-2 sm:items-center mb-4">
          <span>Quickest Flights:</span>
          <span className="flex items-center gap-2 line-clamp-1">
            New York (JFK)
            <ArrowRightIcon className="inline-block h-5 w-5" />
            London (LHR)
          </span>
        </h5>
        <h6 className="font-bold text-xs md:text-sm text-gray-500 mb-1">
          Pricing displayed is one-way only. Return flight pricing will be
          displayed after selecting an outbound flight.
        </h6>
        <h6 className="font-normal text-xs md:text-sm text-gray-500">
          Additional bag fees and other fees may apply. We show real time
          results and airline inventory can change quickly. Availability and
          pricing are not guaranteed.
        </h6>
        <div className="mt-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1">
              <h6 className="font-normal uppercase text-base text-black mb-2">
                Filter:
              </h6>
              <div className="flex flex-wrap items-center gap-4">
                <Dropdown title="Airlines">
                  <div className="md:min-w-[19rem] max-w-[19rem]">
                    <Switch.Group as="div" className="flex items-center mb-6">
                      <Switch
                        checked={allAirlines}
                        onChange={setAllAirlines}
                        className={classNames(
                          allAirlines ? 'bg-primary-500' : 'bg-gray-200',
                          'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={classNames(
                            allAirlines ? 'translate-x-5' : 'translate-x-0',
                            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                          )}
                        />
                      </Switch>
                      <Switch.Label
                        as="span"
                        className="ml-3 text-base cursor-pointer"
                      >
                        <span className="font-bold text-black">
                          Select all airlines
                        </span>
                      </Switch.Label>
                    </Switch.Group>
                    <ul className="space-y-4 max-h-60 overflow-auto scrollbar py-1 pl-1 pr-3">
                      {airlines.map(airline => (
                        <li
                          key={airline.name}
                          className="relative flex items-start"
                        >
                          <div className="flex h-6 items-center">
                            <input
                              id={airline.name}
                              name={airline.name}
                              type="checkbox"
                              className="h-5 w-5 rounded-sm border-gray-300"
                            />
                          </div>
                          <div className="ml-3 text-sm leading-6">
                            <label
                              title={airline.name}
                              htmlFor={airline.name}
                              className="font-medium text-base text-black capitalize line-clamp-1"
                            >
                              {airline.name}
                            </label>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Dropdown>
                <CustomSelect list={stopsList} placeholder="Stops" />
                <Dropdown title="Times">
                  <div className="md:min-w-[19rem] max-w-[19rem]">
                    <TimeSlider />
                  </div>
                </Dropdown>
                <Dropdown title="Programs">
                  <div className="md:min-w-[19rem] max-w-[19rem]">
                    <Switch.Group as="div" className="flex items-center mb-4">
                      <Switch
                        checked={allPrograms}
                        onChange={setAllPrograms}
                        className={classNames(
                          allPrograms ? 'bg-primary-500' : 'bg-gray-200',
                          'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={classNames(
                            allPrograms ? 'translate-x-5' : 'translate-x-0',
                            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                          )}
                        />
                      </Switch>
                      <Switch.Label
                        as="span"
                        className="ml-3 text-base cursor-pointer"
                      >
                        <span className="font-bold text-black">
                          Select all programs
                        </span>
                      </Switch.Label>
                    </Switch.Group>
                    <div className="mb-6">
                      <h5 className="font-bold text-black capitalize text-lg mb-4">
                        Card Programs
                      </h5>
                      <ul className="space-y-4 py-1 pl-1 pr-3">
                        {cardPrograms.map(cardProgram => (
                          <li
                            key={cardProgram.name}
                            className="relative flex items-start"
                          >
                            <div className="flex h-6 items-center">
                              <input
                                id={cardProgram.name}
                                name={cardProgram.name}
                                type="checkbox"
                                className="h-5 w-5 rounded-sm border-gray-300"
                              />
                            </div>
                            <div className="ml-3 text-sm leading-6">
                              <label
                                title={cardProgram.name}
                                htmlFor={cardProgram.name}
                                className="font-medium text-base text-black capitalize line-clamp-1"
                              >
                                {cardProgram.name}
                              </label>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 text-sm font-medium text-black75">
                        Once you select specific cards, we include their
                        transfer partners by default.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-bold text-black capitalize text-lg mb-4">
                        Airline Programs
                      </h5>
                      <ul className="space-y-4 max-h-60 overflow-auto scrollbar py-1 pl-1 pr-3">
                        {airlines.map(airline => (
                          <li
                            key={airline.name}
                            className="relative flex items-start"
                          >
                            <div className="flex h-6 items-center">
                              <input
                                id={airline.name}
                                name={airline.name}
                                type="checkbox"
                                className="h-5 w-5 rounded-sm border-gray-300"
                              />
                            </div>
                            <div className="ml-3 text-sm leading-6">
                              <label
                                title={airline.name}
                                htmlFor={airline.name}
                                className="font-medium text-base text-black capitalize line-clamp-1"
                              >
                                {airline.name}
                              </label>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Dropdown>
                <div className="max-w-[19rem]">
                  <Switch.Group as="div" className="flex items-center">
                    <Switch
                      checked={allPrograms}
                      onChange={setAllPrograms}
                      className={classNames(
                        allPrograms ? 'bg-primary-500' : 'bg-gray-200',
                        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={classNames(
                          allPrograms ? 'translate-x-5' : 'translate-x-0',
                          'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                        )}
                      />
                    </Switch>
                    <Switch.Label
                      as="span"
                      className="ml-3 text-base cursor-pointer flex gap-3"
                    >
                      <span className="text-sm text-black75">
                        Filter results to match my card & airline loyalty
                        programs
                      </span>
                      <InformationCircleIcon
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, doloremque sunt aliquid sint voluptates ad doloribus dicta expedita eos et?"
                        className="h-5 w-5 min-w-[1.25rem] text-black50"
                      />
                    </Switch.Label>
                  </Switch.Group>
                </div>
              </div>
            </div>
            <div>
              <h6 className="font-normal uppercase text-base text-black mb-2">
                Sort:
              </h6>
              <div className="flex items-center gap-4">
                <CustomSelect list={quickestFlights} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h6 className="font-bold">153 flights</h6>
    </>
  );
};

export default FilterCard;
