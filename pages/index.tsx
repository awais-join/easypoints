import React from "react";
import { NextPage } from "next";

import FlightPriceSection from "@/components/home/FlightPriceSection";
import HeroSection from "@/components/home/HeroSection";
import Layout from "@/components/views/Layout";
import SameFlightSection from "@/components/home/SameFlightSection";
import EasyToBookSection from "@/components/home/EasyToBookSection";

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
