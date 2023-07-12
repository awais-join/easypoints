import React, {useEffect} from 'react';
import {NextPage} from 'next';
import {NextSeo} from 'next-seo';
import {metaConstants} from '@/meta-constants';

import Container from '@/components/views/Container';
import FlightSearch from '@/components/inputs/FlightSearch';

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
      
        <FlightSearch />
     
    </>
  );
};

export default FlightSearchPage;
