import React from "react";
import Container from "../views/Container";
import Image from "next/image";
import FlightCard from "../cards/FlightCard";

const flights = [
  {
    airports: { from: "New York (JFK)", to: "London (LHR)" },
    imageURL: "/assets/image-2.png",
    onePoints: 27500,
    oneLogo: "/assets/logo-chase.png",
    twoPoints: 20000,
    twoLogo: "/assets/logo.png",
  },
  {
    airports: { from: "New York (JFK)", to: "London (LHR)" },
    imageURL: "/assets/image-2.png",
    onePoints: 27500,
    oneLogo: "/assets/logo-chase.png",
    twoPoints: 20000,
    twoLogo: "/assets/logo.png",
  },
  {
    airports: { from: "New York (JFK)", to: "London (LHR)" },
    imageURL: "/assets/image-2.png",
    onePoints: 27500,
    oneLogo: "/assets/logo-chase.png",
    twoPoints: 20000,
    twoLogo: "/assets/logo.png",
  },
  // Add more flights if needed
];

const SameFlightSection = () => {
  return (
    <section className="pb-8 md:pb-12 pt-8 lg:pt-36">
      <Container>
        <div className="bg-light rounded-3xl xl:m-8 p-4 lg:p-8 xl:p-12 xl:pb-0">
          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-bold leading-normal md:leading-snug mb-4">
                Same flight ✈ for less points
              </h2>
              <p className="text-lg font-medium text-black75 mb-6">
                Up to 90% less points used when booking with us.
              </p>
              <button
                type="submit"
                className="w-full md:w-auto flex gap-2 items-center justify-center rounded-full bg-primary-500 px-10 py-5 text-base font-bold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
              >
                <span>Search Flights</span>
              </button>
            </div>
            <div className="relative w-60 h-60 order-first md:order-last">
              <Image fill src="/assets/image-1.png" alt="..." />
            </div>
          </div>
          <ul className="mt-8 xl:-mt-24 xl:translate-y-32 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {flights.map((flight, index) => (
              <li key={index}>
                <FlightCard
                  airports={flight.airports}
                  onePoints={flight.onePoints}
                  oneLogo={flight.oneLogo}
                  twoPoints={flight.twoPoints}
                  twoLogo={flight.twoLogo}
                  imageURL={flight.imageURL}
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default SameFlightSection;
