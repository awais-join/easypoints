import React from 'react';
import {NextPage} from 'next';
import {NextSeo} from 'next-seo';
import {metaConstants} from '@/meta-constants';
import Container from '@/components/views/Container';
import FlightSearch from '@/components/inputs/FlightSearch';
import Layout from '@/components/views/Layout';
import {ArrowRightIcon} from '@heroicons/react/24/solid';
import CustomSelect from '@/components/inputs/CustomSelect';
import BookCard from '@/components/cards/BookCard';

const quickestFlights = [
  {name: 'Quickest Flights', value: 'quickest-flights'},
  {name: 'Points Low to High', value: 'points-low-to-high'},
  {name: 'Easypoints picks', value: 'easypoints-picks'}
];

interface FlightSearchProps {}

const FlightSearchPage: NextPage<FlightSearchProps> = () => {
  return (
    <>
      <NextSeo title={`Flight Search | ${metaConstants.SITE_NAME}`} />
      <Layout>
        <div className="bg-light rounded-b-3xl mx-3">
          <FlightSearch />
        </div>
        <section className="pb-8 md:pb-12 pt-8 lg:pt-36">
          <Container>
            <div className="max-w-7xl mx-auto">
              {/* <h4 className="text-2xl font-bold capitalize mb-6">
                Selected Outbound Flight:
              </h4> */}
              {/* filter section */}
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
                  Pricing displayed is one-way only. Return flight pricing will
                  be displayed after selecting an outbound flight.
                </h6>
                <h6 className="font-normal text-xs md:text-sm text-gray-500">
                  Additional bag fees and other fees may apply. We show real
                  time results and airline inventory can change quickly.
                  Availability and pricing are not guaranteed.
                </h6>
                <div className="mt-4">
                  <div className="flex flex-wrap gap-3">
                    <div className="flex-1">
                      <h6 className="font-normal uppercase text-base text-black mb-2">
                        Filter:
                      </h6>
                      <div className="flex flex-wrap items-center gap-4">
                        <CustomSelect list={quickestFlights} />
                        <CustomSelect list={quickestFlights} />
                        <CustomSelect list={quickestFlights} />
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
              {/* /filter section */}
              {/* books cards */}
              <ul className="space-y-4 mt-8">
                <li>
                  <BookCard />
                </li>
              </ul>
              {/* /books cards */}
            </div>
          </Container>
        </section>
      </Layout>
    </>
  );
};

export default FlightSearchPage;
