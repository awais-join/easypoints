import React from "react";
import Container from "../views/Container";
import Link from "next/link";
import ArrowIcon from "../icons/ArrowIcon";
import Image from "next/image";

const EasyToBookSection = () => {
  return (
    <section className="pb-8 md:pb-12 pt-8 lg:pt-36">
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center">
          <div>
            <div className="relative aspect-[5/3] rounded-l-4xl">
              <Image
                className="object-contain"
                fill
                src="/assets/image-3.png"
                alt="..."
              />
            </div>
          </div>
          <div className="order-first xl:order-last">
            <h2 className="text-3xl md:text-5xl font-bold leading-normal md:leading-snug mb-4">
              It’s beyond easy to book!
            </h2>
            <p className="text-lg font-medium text-black75 mb-6">
              Compare over 100 airlines in realtime.
            </p>
            <ul className="space-y-6">
              <li>
                <Link
                  href="#"
                  className="p-6 rounded-2xl flex items-center gap-4 text-lg md:text-2xl group  hover:bg-white hover:shadow-lg"
                >
                  <ArrowIcon className="h-6 w-6 min-w-[1.6rem] group-hover:text-primary-500" />
                  <span>Enter your flight details</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="p-6 rounded-2xl flex items-center gap-4 text-lg md:text-2xl group  hover:bg-white hover:shadow-lg"
                >
                  <ArrowIcon className="h-6 w-6 min-w-[1.6rem] group-hover:text-primary-500" />
                  <span>Let our algorithm work its magic!</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="p-6 rounded-2xl flex items-center gap-4 text-lg md:text-2xl group  hover:bg-white hover:shadow-lg"
                >
                  <ArrowIcon className="h-6 w-6 min-w-[1.6rem] group-hover:text-primary-500" />
                  <span>
                    Browse award flights from 100+ airlines instantly!
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EasyToBookSection;
