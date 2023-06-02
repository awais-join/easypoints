import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface JobsCardProps {
  title: string;
  location: string;
  description: string;
  type: string;
  category: string;
  iconColor: string;
}
const CareersJobsCard: React.FC<JobsCardProps> = ({
  title,
  location,
  description,
  type,
  category,
  iconColor
}) => {
  const jobDetails = {
    title,
    excerpt: description,
    category,
    type: type,
    location,
    iconColor,
    aboutPosting:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum faucibus.',
    jobRespopnsibilty:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit purus varius in senectus fermentum viverra ornare lectus adipiscing sollicitudin pellentesque aenean habitant. Semper in dolor quis faucibus interdum nunc tortor consequat condimentum fermentum orci porttitor.',
    jobRequirements:
      'Nulla neque enim feugiat vestibulum auctor pellentesque pretium libero turpis elementum euismod malesuada nulla est, consectetur maecenas curabitur senectus consectetur tincidunt vitae feugiat laoreet'
  };

  return (
    <>
      {' '}
      <Link
        href={{
          pathname: '/careerDetails',
          query: jobDetails
        }}
        as="/careerDetails"
        className="md:flex-shrink-0 md:max-w-2xl  md:basis-[49%]  "
      >
        <div className="md:flex-shrink-0 md:max-w-2xl p-2 md:basis-[49%] border hover:border-gray-300 rounded-2xl grow hover:cursor-pointer hover:shadow-2xl">
          <div className="p-3 md:p-8 h-full bg-white bg-opacity-80  rounded-xl">
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-wrap justify-between items-center lg:pl-3 ">
                <div className="w-auto px-3 py-2 mb-2 border border-1 border-gray-300 rounded-[32px]">
                  <div className="flex flex-wrap items-center ">
                    <div className="w-auto p-1 ">
                      <div
                        className={`w-3 h-3 rounded-full bg-${iconColor}`}
                      ></div>
                    </div>
                    <div className="w-auto p-1">
                      <p className="font-sans leading-relaxed">{category}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-16">
                <h3
                  className="mb-4 text-3xl font-bold font-heading leading-snug"
                  data-config-id="auto-txt-4-3"
                >
                  {title}
                </h3>
                <p className="text-gray-500 font-medium leading-relaxed pr-8">
                  {description}
                </p>
              </div>
              <div className="flex flex-wrap justify-between items-center -m-2">
                <div className="w-auto p-2">
                  <div className="flex flex-wrap -m-3 items-center">
                    <div className="w-auto md:p-3">
                      <div className="flex flex-wrap items-center -m-1">
                        <div className="w-auto p-1">
                          <Image
                            width="19"
                            height="22"
                            src="/assets/loc.svg"
                            alt="Test"
                            className="rounded "
                          />
                        </div>
                        <div className="w-auto p-1">
                          <p className=" font-sans leading-relaxed">
                            {location}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-auto p-2">
                      <div className="flex flex-wrap items-center -m-1">
                        <div className="w-auto p-1">
                          <p className="font-sans leading-relaxed">{type}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-auto p-2">
                  <div className="text-indigo-600 group-hover:text-indigo-700">
                    <svg
                      className="autofocus h-6 w-6 min-w-[1.6rem] text-primary-500 group-hover:text-primary-700"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 6L19.6253 11.2951C20.0999 11.6744 20.1277 12.3539 19.6855 12.7664L13 19"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M19 12H4"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CareersJobsCard;
