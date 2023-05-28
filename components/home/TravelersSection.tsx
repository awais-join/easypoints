import React, { useCallback, useRef } from "react";
import Container from "../views/Container";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper";
import TravelerCard from "../cards/TravelerCard";

const travelerData = [
  {
    imageURL: "/assets/image-5.png",
    title: "Sophia’s Latin American Trek",
    points: "76,000",
    originalPoints: "800,000",
  },
  {
    imageURL: "/assets/image-6.png",
    title: "Emma’s Thailand Escape",
    points: "50,000",
    originalPoints: "600,000",
  },
  {
    imageURL: "/assets/image-7.png",
    title: "Olivia’s Arctic Exploration",
    points: "90,000",
    originalPoints: "1,000,000",
  },
  {
    imageURL: "/assets/image-2.png",
    title: "Olivia’s Arctic Exploration",
    points: "90,000",
    originalPoints: "1,000,000",
  },
];

const TravelersSection = () => {
  const sliderRef = useRef<any>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="pb-8 md:pb-12 pt-8 md:pt-72">
      <Container>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold leading-normal md:leading-snug max-w-xl mr-auto">
              Thousands of travelers are taking the easy way.
            </h2>
            <div className="flex-1 flex gap-4 justify-end">
              <button
                onClick={handlePrev}
                type="button"
                className="rounded-full border bg-white p-3 text-black shadow hover:text-white hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 active:scale-105"
              >
                <ArrowLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                onClick={handleNext}
                type="button"
                className="rounded-full border bg-white p-3 text-black shadow hover:text-white hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 active:scale-105"
              >
                <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            className="cards-swiper py-2"
            ref={sliderRef}
            keyboard={true}
            modules={[Keyboard]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {travelerData.map((data, index) => (
              <SwiperSlide key={index}>
                <TravelerCard key={index} data={data} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default TravelersSection;
