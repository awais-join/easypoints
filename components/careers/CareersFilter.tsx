import React from 'react';
import {Tab} from '@headlessui/react';

import CareersJobsCard from '@/components/cards/CareersJobsCard';
interface Jobs {
  openedJobs: any;
}
function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}
const CareersFilter: React.FC<Jobs> = ({openedJobs}) => {
  const categories: any[] = [
    'All',
    ...new Set(openedJobs.map((job: any) => job.category))
  ];
  const catColors = ['', 'bg-yellow', 'bg-blue', 'bg-lightPink'];
  return (
    <>
      <div className="md:flex-shrink-0 md:max-w-2xl px-2 lg:md:basis-1/2 grow hover:cursor-pointer">
        <div className="px-8 h-full bg-white bg-opacity-80 rounded-xl">
          <div className="flex  justify-between h-full">
            <div className="mb-4">
              <h2 className="mb-4 text-5xl font-bold font-heading leading-snug">
                Current positions
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Tab.Group>
        <Tab.List className="w-full justify-between  md:flex-shrink-0 md:max-w-2xl p-2 lg:md:basis-1/2 grow hover:cursor-pointer">
          <div className="">
            <div className="md:pl-6 xl:px-8 h-full bg-white bg-opacity-80  rounded-xl">
              <div className="flex flex-col md:flex-row justify-between h-full">
                {categories.map((cat: any, index) => (
                  <Tab
                    key={cat}
                    className={({selected}) =>
                      classNames(
                        'text-md xl:text-xl py-[18px] leading-snug inline-block lg:text-center group',
                        selected
                          ? 'px-8 rounded-[40px] bg-blue outline-white text-white inline-block text-center'
                          : 'text-blue-100 hover:bg-white/[0.12]  '
                      )
                    }
                  >
                    {cat.toLowerCase() !== 'all' && (
                      <span
                        className={`w-3 h-3 rounded-full ${catColors[index]} group-focus:bg-white inline-block mr-2`}
                      ></span>
                    )}
                    {cat}
                  </Tab>
                ))}
              </div>
            </div>
          </div>
        </Tab.List>
        <Tab.Panels className="mt-2">
          {categories.map((cat: any, idx) => {
            if (cat.toLowerCase() === 'all') {
              return (
                <Tab.Panel key={idx} className={classNames('')}>
                  <div className="max-w-full xl:mx-auto p-3 md:p-6 pt-0 mb-4">
                    <div className="mx-auto max-w-full">
                      <div className="flex flex-wrap -m-2 mb-1.5 justify-center gap-2">
                        {openedJobs.map((job: any) => (
                          <CareersJobsCard
                            key={Math.random()}
                            title={job.title}
                            category={job.category}
                            type={job.type}
                            iconColor={job.iconColor}
                            location={job.location}
                            description={job.description}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
              );
            } else {
              return (
                <Tab.Panel key={idx} className={classNames('')}>
                  <div className="max-w-full xl:mx-auto p-3 md:p-6 pt-0 mb-4">
                    <div className="mx-auto max-w-full">
                      <div className="flex flex-wrap -m-2 mb-1.5 justify-center gap-2">
                        {openedJobs.map((job: any) => {
                          if (
                            job.category.toLowerCase() === cat.toLowerCase()
                          ) {
                            return (
                              <CareersJobsCard
                                key={Math.random()}
                                title={job.title}
                                category={job.category}
                                type={job.type}
                                iconColor={job.iconColor}
                                location={job.location}
                                description={job.description}
                              />
                            );
                          }
                        })}
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
              );
            }
          })}
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};

export default CareersFilter;
