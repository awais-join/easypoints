import React from "react";
import Container from "../views/Container";
import Image from "next/image";
import Link from "next/link";

const VideoSection = () => {
  return (
    <section className="pb-8 md:pb-12">
      <Container>
        <div
          className="rounded-4xl bg-primary-900 text-white p-4 bg-center bg-cover"
          style={{ backgroundImage: "url(/assets/bg-dots.png)" }}
        >
          <div className="max-w-2xl mx-auto py-10 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-normal md:leading-snug">
              The absolute best way to book with points
            </h2>
          </div>
          <div className="max-w-4xl mx-auto relative md:-mt-[14rem] lg:-mt-[17rem] md:translate-y-1/2">
            <span className="relative block aspect-[5/3]">
              <Image fill src="/assets/image-4.png" alt="..." />
            </span>
            <button
              type="button"
              className="absolute h-16 w-16 md:h-24 md:w-24 inset-1/2 -translate-x-1/2 -translate-y-1/2 active:scale-105"
            >
              <Image fill src="/assets/play-button.svg" alt="..." />
            </button>
            <span className="absolute -bottom-6 w-full text-center">
              <Link
                href="#"
                className="inline-flex gap-2 items-center justify-center rounded-full shadow-button bg-primary-500 px-10 py-5 text-base font-bold text-white hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
              >
                <span>Find the best deals</span>
              </Link>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VideoSection;
