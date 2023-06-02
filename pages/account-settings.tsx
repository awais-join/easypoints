import React from 'react';
import {NextPage} from 'next';
import {NextSeo} from 'next-seo';
import {metaConstants} from '@/meta-constants';
import Container from '@/components/views/Container';
import Layout from '@/components/views/Layout';
import {Tab} from '@headlessui/react';
import PersonalInfoPanel from '@/components/account-settings/panel/PersonalInfoPanel';
import AccountSettingsTabs from '@/components/account-settings/tabs/AccountSettingTabs';
import LoginPanel from '@/components/account-settings/panel/LoginPanel';

interface TermsAndConditionsProps {}
function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}
const tabs = [
  {
    title: 'Personal Information',
    subTitle: 'View your details'
  },
  {
    title: 'Login and Security',
    subTitle: 'Set up and manage your password'
  },
  {
    title: 'Plan and billing',
    subTitle: 'Manage your plan and billing'
  },
  {
    title: 'Reward Flights',
    subTitle: 'All your flight and booking details'
  },
  {
    title: 'Get In Touch',
    subTitle: 'All your flight and booking details'
  }
];

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
                      {tabs.map((tab: any, index) => (
                        <Tab
                          className={({selected}) =>
                            classNames(
                              'w-full rounded-xl',
                              selected
                                ? 'bg-light  border-r border-primary-500'
                                : ' '
                            )
                          }
                        >
                          <AccountSettingsTabs tabsDetails={tab} />
                        </Tab>
                      ))}
                    </Tab.List>
                    <Tab.Panels className="md:flex-shrink-0  px-2 text-left lg:md:basis-[65%] grow hover:cursor-pointer">
                      <Tab.Panel>
                        <PersonalInfoPanel />
                      </Tab.Panel>
                      <Tab.Panel>
                        <LoginPanel />
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
