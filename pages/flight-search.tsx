import React from 'react';
import {NextPage} from 'next';
import {NextSeo} from 'next-seo';
import {metaConstants} from '@/meta-constants';

import Container from '@/components/views/Container';
import FlightSearch from '@/components/inputs/FlightSearch';
import Layout from '@/components/views/Layout';
import BookCard from '@/components/cards/BookCard';
import FilterCard from '@/components/cards/FilterCard';
import BookingOptions from '@/components/modal/BookingOptions';

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
      </Layout>
    </>
  );
};

export default FlightSearchPage;
