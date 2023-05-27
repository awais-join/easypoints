import Layout from "@/components/views/Layout";

// sections
import HeroSection from "@/components/sections/HeroSection";
import FlightPriceSection from "@/components/sections/FlightPriceSection";
import SameFlightSection from "@/components/sections/SameFlightSection";
import EasyToBookSection from "@/components/sections/EasyToBookSection";

export default function Home() {
  return (
    <Layout>
      <div className="bg-light rounded-b-3xl mx-3">
        <HeroSection />
        <FlightPriceSection />
      </div>
      <SameFlightSection />
      <EasyToBookSection />
    </Layout>
  );
}
