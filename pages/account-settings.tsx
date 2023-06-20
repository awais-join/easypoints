import React from 'react';
import {NextPage} from 'next';
import {NextSeo} from 'next-seo';
import {metaConstants} from '@/meta-constants';
import Container from '@/components/views/Container';
import {Tab} from '@headlessui/react';
import PersonalInfoPanel from '@/components/account-settings/panel/PersonalInfoPanel';
import AccountSettingsTabs from '@/components/account-settings/tabs/AccountSettingTabs';
import LoginPanel from '@/components/account-settings/panel/LoginPanel';
import BillingPanel from '@/components/account-settings/panel/BillingPanel';
import RewardFlightsPanel from '@/components/account-settings/panel/RewardFlightsPanel';
import GetInTouchPanel from '@/components/account-settings/panel/GetInTouchPanel';

interface TermsAndConditionsProps {}
function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}
const tabs = [
  {
    title: 'Personal Information',
    subTitle: 'View your details',
    iconUrl: '/assets/user.svg'
  },
  {
    title: 'Login and Security',
    subTitle: 'Set up and manage your password',
    iconUrl: '/assets/lock.svg'
  },
  {
    title: 'Plan and billing',
    subTitle: 'Manage your plan and billing',
    iconUrl: '/assets/card.svg'
  },
  {
    title: 'Reward Flights',
    subTitle: 'All your flight and booking details',
    iconUrl: '/assets/airplane.svg'
  },
  {
    title: 'Get In Touch',
    subTitle: 'All your flight and booking details',
    iconUrl: '/assets/question.svg'
  }
];

const AccountSettings: NextPage = () => {
  return (
    <>
      <NextSeo title={`Account Settings | ${metaConstants.SITE_NAME}`} />
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
                    <Tab.List className="lg:flex-shrink-0 mb-4  px-2 lg:basis-[35%] grow ">
                      {tabs.map((tab: any, index) => (
                        <Tab
                            key={index}
                          className={({selected}) =>
                            classNames(
                              'w-full rounded-xl',
                              selected
                                ? 'bg-light border-r border-primary-500 outline-none '
                                : ' '
                            )
                          }
                        >
                          <AccountSettingsTabs tabsDetails={tab} />
                        </Tab>
                      ))}
                    </Tab.List>
                    <Tab.Panels className="lg:flex-shrink-0  px-2 text-left lg:md:basis-[65%] grow ">
                      <Tab.Panel>
                        <PersonalInfoPanel />
                      </Tab.Panel>
                      <Tab.Panel>
                        <LoginPanel />
                      </Tab.Panel>
                      <Tab.Panel>
                        <BillingPanel />
                      </Tab.Panel>
                      <Tab.Panel>
                        <RewardFlightsPanel />
                      </Tab.Panel>
                      <Tab.Panel>
                        <GetInTouchPanel />
                      </Tab.Panel>
                    </Tab.Panels>
                  </div>
                </div>
              </Tab.Group>
            </Container>
          </section>
        </div>
    </>
  );
};

export default AccountSettings;
