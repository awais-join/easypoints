import React from "react";
import Container from "../views/Container";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="pt-12">
      <Container>
        <div className="flex flex-col lg:flex-row xl:items-end gap-10 xl:gap-28">
          <div className="max-w-md">
            <h1 className="text-4xl md:text-6xl font-bold leading-normal md:leading-snug mb-8">
              Get the{" "}
              <span className="bg-primary-500 text-white pb-2 px-8 rounded-full">
                most
              </span>{" "}
              <br /> for your points
            </h1>
            <h4 className="text-2xl leading-normal font-semibold text-black75 xl:mb-8">
              Your airline & credit card rewards can take you much farther.
            </h4>
            <div className="relative h-28 w-28 lg:mx-auto hidden xl:block">
              <Image
                className="object-contain"
                fill
                src="/assets/arrow-icon.svg"
                alt="arrow"
              />
            </div>
          </div>
          <div className="flex-1 order-first lg:order-last">
            <div className="relative aspect-[5/3] rounded-l-4xl">
              <Image
                className="rounded-l-4xl"
                fill
                src="/assets/hero-image.jpg"
                alt="hero-image"
              />
              <div className="relative translate-y-9 md:translate-y-0 md:absolute bottom-0 start-0 shadow-primary bg-white text-center rounded-4xl max-w-[15rem] mx-auto sm:mx-7 my-7 md:m-7 px-14 py-8">
                <div>
                  <span className="block relative w-24 h-12 mx-auto">
                    <Image
                      fill
                      className="object-contain"
                      src="/assets/logo-chase.png"
                      alt="..."
                    />
                  </span>
                  <h4 className="mt-1 text-2xl font-medium">27,500 pts</h4>
                </div>
                <span className="block relative h-10 w-10 mx-auto my-4">
                  <Image fill src="/assets/vs-icon.svg" alt="hero-image" />
                </span>
                <div>
                  <span className="block relative w-24 h-12 mx-auto">
                    <Image
                      fill
                      className="object-contain"
                      src="/assets/logo.png"
                      alt="..."
                    />
                  </span>
                  <h4 className="mt-1 text-2xl text-primary-500 font-bold">
                    15,000 pts
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
