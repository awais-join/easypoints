import Image from "next/image";
import Link from "next/link";
import React from "react";

type TravelerData = {
  imageURL: string;
  title: string;
  points: string;
  originalPoints: string;
};

type TravelerCardProps = {
  data: TravelerData;
};

const TravelerCard: React.FC<TravelerCardProps> = ({ data }) => {
  const { imageURL, title, points, originalPoints } = data;
  return (
    <div className="rounded-3xl p-4 border border-lightGray hover:bg-white hover:shadow-xl">
      <div className="relative aspect-[5/3] rounded-2xl bg-gray-50">
        <Image className="rounded-2xl" fill src={imageURL} alt="..." />
      </div>
      <div className="mt-4">
        <h3
          title={title}
          className="text-2xl font-bold capitalize line-clamp-1 mb-4"
        >
          {title}
        </h3>
        <div className="flex items-center">
          <div className="mr-auto">
            <h4 className="font-bold text-xl text-primary-500 mb-1">
              {points} Points
            </h4>
            <h6 className="text-black75 line-through">
              {originalPoints} Points
            </h6>
          </div>
          <Link
            href="#"
            className="inline-flex gap-2 items-center justify-center rounded-full shadow-sm bg-primary-500 px-6 py-4 text-base font-bold text-white hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
          >
            <span>Explore</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TravelerCard;
