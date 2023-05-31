import React from 'react';
import {NextPage} from 'next';

import FlightSearch from '@/components/inputs/FlightSearch';
import HeroSection from '@/components/home/HeroSection';
import Layout from '@/components/views/Layout';
import SameFlightSection from '@/components/home/SameFlightSection';
import EasyToBookSection from '@/components/home/EasyToBookSection';
import VideoSection from '@/components/home/VideoSection';
import TravelersSection from '@/components/home/TravelersSection';
import FaqSection from '@/components/home/FaqSection';
import CtaSection from '@/components/home/CtaSection';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <div className="bg-light rounded-b-3xl mx-3">
          <HeroSection />
          <FlightSearch />
        </div>
        <SameFlightSection />
        <EasyToBookSection />
        <VideoSection />
        <TravelersSection />
        <FaqSection />
        <CtaSection />
      </Layout>
    </>
  );
};

export default Home;
