import React, {ReactNode} from 'react';
import {NextPage} from 'next';
import {PricingSectionComponent} from '@/components/pricing/pricing-section.component';
import {Pricing} from '@/components/pricing/pricing-card.component';
import Image from 'next/image';
import Container from '@/components/views/Container';
import {metaConstants} from '@/meta-constants';
import {NextSeo} from 'next-seo';

const ALL_PRICING_SELF_SERVE: Pricing[] = [
  {
    name: 'Standard Plan',
    key: 'standardPlan',
    features: [
      'Unlimited Searches',
      'Customized results tailored to your rewards',
      'Access to the best current reward deals',
      'Exclusive tips for replenishing your points'
    ],
    price: 12,
    priceUnit: 'month',
    saveWithAnnual: 'Select annual billing to save 10% off'
  },
  {
    name: 'Premium Plan',
    key: 'premiumPlan',
    features: [
      'Everything in Standard',
      '10% discount on all Concierge services',
      'Personalized points strategy consult call ($200 value)',
      'Friends and family annually ($25 value)'
    ],
    price: 260,
    priceUnit: 'year'
  },
  {
    name: 'I have a code!',
    key: 'haveACode',
    features: ['Complimentary Starter pass for 24 hours (Normally $5)'],
    price: 0
  },
  {
    name: 'Starter Pass',
    key: 'starterPass',
    features: [
      'Enjoy Standard plan access for 24 hours',
      'A great value for single trip!'
    ],
    price: 12,
    priceUnit: 'month'
  }
];

const ALL_PRICING_CONCIERGE: Pricing[] = [
  {
    name: 'Full-service booking',
    key: 'fullServiceBooking',
    price: 200,
    priceUnit: 'passenger',
    features: [
      'One of our experts will handle every aspect of your award booking experience with personalized service',
      'Our expert consultants will identify the best redemption values'
    ]
  },
  {
    name: 'Earn Eline Status',
    key: 'earnEliteStatus',
    price: 200,
    priceUnit: 'person',
    features: [
      'Our dedicated Mileage Run team will provide personalized service to craft you the mileage run to meet your goals'
    ]
  },
  {
    name: 'Points Strategy Consulting',
    key: 'pointsStrategyConsulting',
    price: 200,
    priceUnit: 'person',
    features: [
      'Strategic consulting on the best ways to earn points and miles for your specific situation and travel goals'
    ]
  }
];

interface AdditionalServices {
  key: string;
  value: string;
  arrayKey: number;
}

const ADDITIONAL_SERVICES: ReadonlyArray<AdditionalServices> = [
  {
    key: `<span>
        <strong>$100&nbsp;&nbsp;/</strong>&nbsp;&nbsp;passenger
      </span>`,
    value: 'Cancellations and redeposits for concierge-booked itineraries',
    arrayKey: 1
  },
  {
    key: `<span>
        <strong>$200&nbsp;&nbsp;/</strong>&nbsp;&nbsp;passenger
      </span>`,
    value: 'Cancellations and redeposits for outside-booked itineraries',
    arrayKey: 2
  },
  {
    key: `<span>
        Contact us <strong>for a custom quote</strong>
      </span>`,
    value: 'Round-the-world and complex bookings',
    arrayKey: 3
  },
  {
    key: `<span>
        Starting at <strong>$800&nbsp;&nbsp;/</strong>&nbsp;&nbsp;couple
      </span>`,
    value:
      'Honeymoon bundle - easypoints helps 3,000 couples use their wedding expenses to fund "free" luxury trips every year',
    arrayKey: 4
  }
];

const Pricing: NextPage = () => {
  return (
    <>
      <NextSeo title={`Pricing | ${metaConstants.SITE_NAME}`} />
      <Container paddingZero>
        <PricingSectionComponent
          headerSubText="Self-Serve"
          headerText="Eastpoints"
          tagline="Find your better flights for less."
          pricingLists={ALL_PRICING_SELF_SERVE}
          pricingLength={ALL_PRICING_SELF_SERVE.length}
        >
          <p className="text-text text-xs mt-10">
            Unlimited search is for personal use, and is subject to fair use
            policies. point.me reserves the right to limit or otherwise
            constrain searches in case of excessive use.
          </p>
        </PricingSectionComponent>
        <PricingSectionComponent
          pricingLength={ALL_PRICING_CONCIERGE.length}
          headerSubText="Conceirge"
          headerText="Eastpoints"
          tagline="Let us book for you."
          pricingLists={ALL_PRICING_CONCIERGE}
        >
          <div className="bg-white p-8 rounded-3xl mt-10">
            <div className="text-xl text-black font-bold rounded-2xl bg-darkBlue p-4 mb-6">
              Additional Services
            </div>
            <div className="bg-white mt-2">
              {ADDITIONAL_SERVICES.map((value, index) => {
                return (
                  <div
                    key={value.arrayKey}
                    className="flex flex-row w-full my-4"
                  >
                    <div className="w-1/5 flex flex-row justify-between">
                      <p
                        className="text-sm text-[#2B2F30]"
                        dangerouslySetInnerHTML={{__html: value.key}}
                      />
                      <div className="border-r-2 border-[#E6EDF2] mr-2" />
                    </div>
                    <div className="w-4/5 text-sm text-text">{value.value}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </PricingSectionComponent>
        <div className="flex justify-center">
          <div
            className="flex flex-row justify-between w-5/6 mt-4"
            style={{maxHeight: '1000px', minHeight: 'fit-content'}}
          >
            <div className="w-1/2 h-full relative">
              <Image
                className="object-cover rounded-[2rem]"
                src="/assets/img.jpg"
                alt="woman on beach"
                fill
              />
            </div>
            <div className="w-1/2 h-500 bg-lightBlue rounded-[2rem] ml-6 p-10">
              <p className="text-5xl font-bold text-black">
                Why does easypoints cost money?
              </p>
              <br />
              <p className="text-sm text-text">
                Here at point.me we’re devoted to bringing simplicity and
                clarity to a system that is intentionally opaque. And unlike
                traditional travel agencies, or even online booking services
                like Orbitz, Kayak, & Google, we don’t take a fee or commission
                from the airlines when you book a flight.
              </p>
              <br />
              <p className="text-sm text-text">
                Here at point.me we’re devoted to bringing simplicity and
                clarity to a system that is intentionally opaque. And unlike
                traditional travel agencies, or even online booking services
                like Orbitz, Kayak, & Google, we don’t take a fee or commission
                from the airlines when you book a flight.
              </p>
              <br />
              <p className="text-sm text-text">
                Instead, point.me is on your side — we work directly for you.
                We’re an ally that uses our expertise and technology to ensure
                you travel better, and are never taken advantage of.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Pricing;
