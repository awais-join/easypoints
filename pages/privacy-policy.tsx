import React from 'react';
import {NextPage} from 'next';
import {NextSeo} from 'next-seo';
import {metaConstants} from '@/meta-constants';
import Container from '@/components/views/Container';
import Layout from '@/components/views/Layout';

interface PrivacyPolicyProps {}

const policyList = [
  {
    description: [
      `This Application collects some Personal Data from its Users.`
    ]
  },
  {
    title: 'POLICY SUMMARY',
    description: [
      `Personal Data collected for the following purposes and using the
following services`,
      `Access to third party services' accounts`
    ]
  },
  {
    title: 'Analytics',
    description: [`Google Analytics`, `Personal Data: Cookie and Usage data`]
  },
  {
    title: 'Contacting the User',
    description: [
      `Contact form and user sign-up form`,
      `Personal Data collected: First Name, Last Name, Address, City, Province/State, ZIP/Postal code, Country, Email address, Phone number and Cookie.`
    ]
  },
  {
    title: 'Mailing List or Newsletter',
    description: [
      `Personal Data collected: First Name, Last Name, Address, City, Province/State, ZIP/Postal code, Country, Email address, Phone number and Cookie`
    ]
  },
  {
    title: 'Privacy Policy',
    description: [
      `FULL POLICY`,
      `Data Controller and Owner Types of Data collected`,
      `Among the types of Personal Data that this Application collects, by itself or through third parties, there are: Cookie, Usage data, First Name, Last Name, Phone number, Company name, Address, Country, State, Province, Email address, ZIP/Postal code and City.`,
      `Other Personal Data collected may be described in other sections of this privacy policy or by dedicated explanation text contextually with the Data collection.`,
      `The Personal Data may be freely provided by the User, or collected automatically when using this Application.`,
      `Any use of Cookies - or of other tracking tools - by this Application or by the owners of third party services used by this Application, unless stated otherwise, serves to identify Users and remember their preferences, for the sole purpose of providing the service required by the User.`,
      `Failure to provide certain Personal Data may make it impossible for this Application to provide its services.`,
      `Users are responsible for any Personal Data of third parties obtained, published or shared through this Application and confirm that they have the third party's consent to provide the Data to the Owner.`,
      `The personal data that you submit to us in connection with your request will be used solely for the purpose of processing your request, and by proceeding with this request, you consent to our use of the data for that purpose. You have the right to withdraw your consent to our processing of your data at any time.`,
      `easypoints, Inc. acts as a service bureau that provides value added services for award travel. To facilitate easypoints, Inc to provide to you such value added services, you authorize easypoints, Inc to access those carriers’ and other related entities’ sites which contain data necessary or convenient to provide you your value added services as you request. Neither easypoints, Inc nor its associated business shall take any action in relation to the acquisition of any product of any nature; you retain sole authority to act or omit to act in relation to any and all acquisitions.`
    ]
  }
];

const PrivacyPolicy: NextPage<PrivacyPolicyProps> = () => {
  return (
    <>
      <NextSeo title={`Privacy Policy | ${metaConstants.SITE_NAME}`} />
      <Layout>
        <h1 className="bg-light rounded-b-3xl text-6xl py-12 text-center text-black font-bold">
          Privacy Policy
        </h1>
        <Container>
          <div className='my-14'>
            {policyList.map(policy => (
              <div key={Math.random().toString(26).slice(2)}>
                {policy.title && (
                  <h3 className="text-2xl font-bold capitalize mb-4">
                    {policy.title}
                  </h3>
                )}
                {policy.description &&
                  policy.description.map(des => (
                    <h4
                      key={Math.random().toString(26).slice(2)}
                      className="text-lg leading-normal text-black mb-4"
                    >
                      {des}
                    </h4>
                  ))}
              </div>
            ))}
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default PrivacyPolicy;
