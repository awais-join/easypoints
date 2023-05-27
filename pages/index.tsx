import React from "react";
import { NextPage } from "next";

import FlightPriceSection from "@/components/sections/FlightPriceSection";
import HeroSection from "@/components/sections/HeroSection";
import Layout from "@/components/views/Layout";
import SameFlightSection from "@/components/sections/SameFlightSection";
import EasyToBookSection from "@/components/sections/EasyToBookSection";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <div className="bg-light rounded-b-3xl mx-3">
          <HeroSection />
          <FlightPriceSection />
        </div>
        <SameFlightSection />
        <EasyToBookSection />
      </Layout>
    </>
  );
};

export default Home;
