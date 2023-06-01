import React, {useEffect, useState} from 'react';
import {NextPage} from 'next';
import Layout from '@/components/views/Layout';
import Container from '@/components/views/Container';
import Image from 'next/image';
import {useRouter} from 'next/router';
import Link from 'next/link';

const CareerDetails: NextPage = ({}) => {
  const router = useRouter();
  var jobDetails = router.query;

  if (router.isReady && !jobDetails.title) {
    router.push('/careers');
  }

  return (
    <>
      {jobDetails.title && (
        <Layout>
          <div className="max-w-full mx-3 md:p-6 bg-light rounded-b-3xl">
            <section className="py-20">
              <Container>
                <div className="lg:mx-8 ">
                  <div>
                    <h1 className="text-3xl  md:text-6xl font-bold text-center leading-normal md:leading-snug mb-4">
                      {jobDetails.title}
                    </h1>
                    <h4 className="text-2xl leading-normal font-semibold text-center text-black75 mb-6">
                      {jobDetails.excerpt}
                    </h4>
                  </div>
                  <div className="flex flex-wrap justify-center items-center -m-2">
                    <div className="w-auto p-2">
                      <div className="flex flex-wrap -m-3 items-center">
                        <div className="w-auto md:p-3">
                          <div className="flex flex-wrap items-center gap-4 -m-1">
                            <div className="w-auto p-2">
                              <div className="flex flex-wrap items-center -m-1">
                                <div className="w-auto p-1">
                                  <p className=" font-sans leading-relaxed">
                                    <span
                                      className={`w-3 h-3 rounded-full bg-blue group-focus:bg-white inline-block mr-2`}
                                    ></span>
                                    {jobDetails.category}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="w-auto p-1">
                              <p className=" font-sans leading-relaxed">
                                <Image
                                  width="19"
                                  height="22"
                                  src="/assets/loc.svg"
                                  alt="Test"
                                  className="rounded inline-block  mr-2"
                                />
                                {jobDetails.location}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="w-auto p-1">
                          <Image
                            width="19"
                            height="22"
                            src="/assets/clock1.svg"
                            alt="Test"
                            className="rounded inline-block  mr-2"
                          />
                          {jobDetails.type}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </section>
          </div>
          <div className="max-w-full mx-3 md:p-6  rounded-b-3xl">
            <section className="py-20">
              <Container>
                <div className="mx-2 lg:mx-24  ">
                  <div className="mb-8">
                    <h2 className="text-2xl  md:text-5xl font-bold  leading-normal md:leading-snug mb-8">
                      About the job posting
                    </h2>
                    <h4 className="text-xl leading-normal font-normal  text-black75 ">
                      {jobDetails.aboutPosting}
                      {/* <ul className="list-disc	pl-8 mt-6">
                      <li>
                        Lorem ipsum dolor sit amet consectetur adipiscing elitut
                      </li>
                      <li>Mauris aliquet faucibus iaculis dui vitae ullamco</li>
                      <li>
                        Eu egestas morbi duis libero accumsan commodo libero
                      </li>
                    </ul> */}
                    </h4>
                  </div>
                  <div className="mb-8">
                    <h2 className="text-2xl  md:text-4xl font-bold  leading-normal md:leading-snug mb-6">
                      Job responsibilities
                    </h2>
                    <h4 className="text-xl leading-normal font-normal  text-black75">
                      {jobDetails.jobRespopnsibilty}
                    </h4>
                  </div>
                  <div className="mb-6">
                    <h2 className="text-2xl  md:text-4xl font-bold  leading-normal md:leading-snug mb-6">
                      Job requirements
                    </h2>
                    <h4 className="text-xl leading-normal font-normal  text-black75">
                      {jobDetails.jobRequirements}
                      {/* <ul className="list-decimal	pl-8 mt-6">
                      <li>
                        Lorem ipsum dolor sit amet consectetur adipiscing elitut
                      </li>
                      <li>Mauris aliquet faucibus iaculis dui vitae ullamco</li>
                      <li>
                        Eu egestas morbi duis libero accumsan commodo libero
                      </li>
                    </ul> */}
                    </h4>
                  </div>
                  <div className="mb-6 mt-14">
                    <Link
                      href="#"
                      className="rounded-full bg-primary-500 px-8 py-4 text-base font-bold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </Container>
            </section>
          </div>
        </Layout>
      )}
    </>
  );
};

export default CareerDetails;
