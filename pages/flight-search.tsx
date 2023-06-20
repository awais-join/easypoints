import React, {useEffect} from 'react';
import {NextPage} from 'next';
import {NextSeo} from 'next-seo';
import {metaConstants} from '@/meta-constants';

import Container from '@/components/views/Container';
import FlightSearch from '@/components/inputs/FlightSearch';
import BookCard from '@/components/cards/BookCard';
import FilterCard from '@/components/cards/FilterCard';
import BookingOptions from '@/components/modal/BookingOptions';
import {useAppDispatch} from '@/store/hooks';
import {API} from '@/utils/axios.service';
import {Airport} from '@/store/features/flight/flights';
import {setAirports} from '@/store/features/flight/flight.feature';

interface FlightSearchProps {}

const FlightSearchPage: NextPage<FlightSearchProps> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    API.get('utils/airports')
      .then((response: Airport[]) => {
        dispatch(setAirports(response));
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <NextSeo title={`Flight Search | ${metaConstants.SITE_NAME}`} />
      <div className="bg-light rounded-b-3xl mx-3">
        <FlightSearch />
      </div>
      <section className="pb-8 md:pb-12 pt-8 lg:pt-36">
        <Container>
          <div className="max-w-7xl mx-auto">
            {/* filter section */}
            <FilterCard />
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
        <BookingOptions />
      </section>
    </>
  );
};

export default FlightSearchPage;
