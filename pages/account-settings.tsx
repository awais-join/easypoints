import React from 'react';
import {NextPage} from 'next';
import {NextSeo} from 'next-seo';
import {metaConstants} from '@/meta-constants';
import Container from '@/components/views/Container';
import Layout from '@/components/views/Layout';
import {Tab} from '@headlessui/react';
import Link from 'next/link';
import ArrowIcon from '../components/icons/ArrowIcon';
import Image from 'next/image';
import Form from '@/components/account-settings/form';

interface TermsAndConditionsProps {}
function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}
const AccountSettings: NextPage = () => {
  return (
    <>
      <NextSeo title={`Account Settings | ${metaConstants.SITE_NAME}`} />
      <Layout>
        <div className="max-w-full mx-3 p-6 bg-light rounded-b-3xl">
          <section className="py-20">
            <Container>
              <div className="mx-auto max-w-5xl">
                <div>
                  <h1 className="text-3xl text-center md:text-6xl font-bold leading-normal md:leading-snug mb-4 ">
                    Account Settings
                  </h1>
                </div>
              </div>
            </Container>
          </section>
        </div>
        <div className="max-w-full lg:mx-3 ">
          <section className="pb-8 md:pb-12 pt-8 lg:pt-36">
            <Container>
              <Tab.Group>
                <div className="mx-auto max-w-full">
                  <div className="flex flex-wrap -m-2 mb-1.5 justify-center align-baseline ">
                    <Tab.List className="md:flex-shrink-0 mb-4  px-2 lg:md:basis-[35%] grow hover:cursor-pointer">
                      <Tab
                        className={({selected}) =>
                          classNames('w-full', selected ? 'bg-light' : ' ')
                        }
                      >
                        {' '}
                        <div className="pl-4 lg:pl-8 h-full  rounded-xl">
                          <div className=" text-left   h-full">
                            <div className="flex flex-wrap items-center gap-2 xl:gap-4">
                              <div className="w-auto ">
                                <Image
                                  width="24"
                                  height="24"
                                  src="/assets/user.png"
                                  alt="Test"
                                  className="rounded "
                                />
                              </div>

                              <div className=" xl:px-8 py-6 lg:w-[75%]">
                                <h4 className="mb-1 text-lg font-bold  leading-snug">
                                  Personal Information
                                </h4>
                                <p className="text-gray-500 font-medium leading-relaxed pr-8">
                                  View your details
                                </p>
                              </div>
                              <div className="w-auto">
                                <Image
                                  width="24"
                                  height="24"
                                  src="/assets/right.svg"
                                  alt="Test"
                                  className="rounded "
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab>
                    </Tab.List>
                    <Tab.Panels className="md:flex-shrink-0  px-2 text-left lg:md:basis-[65%] grow hover:cursor-pointer">
                      <Tab.Panel>
                        {' '}
                        <div className="lg:px-8 h-full  ">
                          <div className="flex  justify-between  h-full">
                            <div className="mb-4 md:basis-[100%] rounded-2xl border-solid border border-lightGray pt-6 pb-8 px-2 lg:px-8">
                              <h2 className=" text-3xl font-bold font-heading leading-snug mb-6">
                                Personal Information
                              </h2>
                              <Form />
                            </div>
                          </div>
                        </div>
                      </Tab.Panel>
                    </Tab.Panels>
                  </div>
                </div>
              </Tab.Group>
            </Container>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default AccountSettings;
