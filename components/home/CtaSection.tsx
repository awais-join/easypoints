import React from "react";
import Container from "../views/Container";
import Link from "next/link";
import AirPlaneIcon from "../icons/AirPlaneIcon";
import Image from "next/image";

const CtaSection = () => {
  return (
    <section className="lg:pt-16 px-4 md:px-0">
      <Container>
        <div className="max-w-7xl mx-auto block lg:hidden">
          <div className="relative aspect-[5/3]">
            <span className="absolute top-8 left-0 block h-24 w-52">
              <Image fill src="/assets/airplace.png" alt="..." />
            </span>
            <Image
              className="object-contain"
              fill
              src="/assets/image-8.png"
              alt="..."
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto rounded-t-4xl bg-primary-500 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-center lg:text-left">
            <div>
              <div className="py-16 px-4 lg:pl-16">
                <h2 className="text-2xl sm:text-3xl md:text-5xl  lg:text-4xl  xl:text-5xl font-bold leading-10 tracking-tight mb-6">
                  Give EasyPoints a Try!
                </h2>
                <Link
                  href="#"
                  className="inline-flex gap-3 items-center justify-center rounded-full shadow-sm border bg-white px-10 py-5 text-lg font-bold text-primary-500 hover:bg-primary-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                >
                  <span>Search Flight Now!</span>
                  <AirPlaneIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="hidden lg:block mt-[-5rem] order-first lg:order-last">
              <div className="relative h-full w-full">
                <span className="absolute top-8 -left-3 block h-24 w-52">
                  <Image fill src="/assets/airplace.png" alt="..." />
                </span>
                <Image
                  className="md:object-contain"
                  fill
                  src="/assets/image-8.png"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CtaSection;
