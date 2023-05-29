import React from 'react';
import {NextPage} from 'next';
import {NextSeo} from 'next-seo';
import {metaConstants} from '@/meta-constants';
import Container from '@/components/views/Container';
import Layout from '@/components/views/Layout';

interface TermsAndConditionsProps {}

const termsList = [
  {
    description: [
      `easypoints, Inc. (as referenced herein and in “Privacy Policy) shall not be liable for failure of travel service provided by the booked airline (carrier) or hotel. We do not guarantee or insure the services to be provided by any supplier, the financial position of such suppliers or the reimbursement to you from any loss experienced as a result of the financial condition of such supplier. In the event an airline defaults prior to providing the service to you for which payment has been made, the sole recourse for refund shall be with the defaulting supplier, from insurance covering such defaults if any or from other responsible third parties.`,
      `In those situations in which a supplier defaults prior to providing services you may pursue any recourse against the supplier for refund, which may be permitted by law or statute.`,
      `Except as expressly stated herein, easypoints, Inc. assumes no responsibility for actions relating to travel services beyond the control of easypoints, Inc. or its contractors, consultants and associated business. easypoints, Inc. and its associated business are not responsible or liable for any act, error, omission, injury, loss, accident, damage, delay, nonperformance, irregularity, or any consequence thereof, which may be occasioned through neglect, or default or any other act or inaction of any supplier of Travel products. easypoints, Inc. shall not be liable for any change in schedule or equipment, which occurs subsequent to payment for such service.`,
      `easypoints, Inc. acts as a service bureau that provides value added services to consumers for their booking of their award travel. To facilitate easypoints, Inc. and its associated business to provide such value added services to and for you, you authorize easypoints, Inc. and/or its associated business to contact those carriers’, and other related entities’ sites, in order to access and/or create necessary frequent flyer accounts under your name which contain data necessary or convenient to provide you your value added services as you request. Neither easypoints, Inc. nor its associated business shall take any action in relation to the acquisition of any product of any nature; you retain sole authority to act or omit to act in relation to any and all acquisitions.`,
      `For avoidance of doubt, we do not issue airline tickets or sell any other travel products directly. Our fees cover our advice and consulting services, and are independent of any provider-imposed charges. We are happy to assist with transferring points or finalizing bookings as a courtesy, but if you decide to book elsewhere or choose not to complete a trip after receiving an itinerary meeting your original specifications, our consulting fee will still be invoiced. Furthermore, we cannot issue any refunds for our consulting services, even if your plans have changed or the airline modifies your planned itinerary. Depending on the operating carriers and airline programs selected for your itinerary, there may be a penalty imposed by those providers for changing or canceling your mileage tickets. We’ll gladly advise you on the most economical way to adjust your itinerary or redeposit the miles under a separate consulting fee.`,
      `When booking your chosen itinerary with the airline reward program, please take special care to ensure you have the full and correct Names, Dates of Birth, and Nationality, exactly as shown on their respective passports, for all passengers. Similarly, we recommend having the airline agent repeat all flight and passenger information back to you using the NATO phonetic alphabet. Despite these precautions, airline agents do sometimes make entry errors including improper trip dates, routings, birthdays, and names. If any of these occur, we may be able to work with the airlines on your behalf to restore your itinerary back to what was originally confirmed, but cannot accept liability for any issues associated with these types of errors. Additionally, we will not be liable for any costs beyond the fees paid.`,
      `Please note that a non-refundable $25 “goodwill” search fee applies for all award booking and mileage run requests. The $25 fee will be deducted from your final invoice should you choose to book your trip with us. If not, the fee is non-refundable.`,
      `We sell no miles and advise our clients against working with any third-party agencies that broker miles or otherwise violate the terms of the respective frequent flyer program. Mileage run estimates are based on currently available public information to all members and may change prior to your trip. Any estimates are based on the mileage and dollar earning rates at the time of booking. We cannot guarantee the proper crediting of miles or qualifying dollars, but we will work with the airlines on your behalf should a posting error occur.`
    ]
  },
  {
    title: 'Unlimited Searching Terms and Conditions',
    description: [
      `As part of the services offered to our customers, we attempt to offer the widest range of choice in award booking redemptions, and as part of that service, provide information on those airlines and on our website. Any appearances of an organization's name or logo on this website are for informational and/or attribution purposes only, and do not imply an affiliation or approval by that organization. Airline tickets are subject to the published conditions of carriage and rules, including but not limited to cancellation policies, of the applicable airline. The contract of carriage in use by the applicable airline, when issued, shall be between the applicable airline and passenger. Airlines retain the right to adjust flight times and schedules at any time - schedule changes can result in an itinerary that falls outside of contractual agreements. Airlines may also in their discretion change or cancel flights or itineraries. Please review the applicable carrier/s’ Terms of Use.`,
      `This Agreement contains an agreement to arbitrate all claims and disclaimers of warranties and liability.`
    ]
  },
  {
    title: 'Your Access and Use of our Services',
    description: [
      `Your right to access and use our Services is personal to you and is not transferable by you to any other person or entity. You are only entitled to access and use our Services for lawful purposes and pursuant to the terms and conditions of this Agreement and the Privacy Policy.`,
      `Your access and use of our Services may be interrupted from time to time for any of several reasons, including, without limitation, the malfunction of equipment, periodic updating, maintenance or repair of our Services or other actions that we, in our sole discretion, may elect to take. We reserve the right to suspend or discontinue the availability of our Services and/or any portion or feature of our Services at any time in our sole discretion and without prior notice.`,
      `Any action by you that, in our sole discretion: (i) violates the terms and conditions of this Agreement and/or the Privacy Policy; (ii) restricts, inhibits or prevents any access, use or enjoyment of our Services; or (iii) through the use of our Services, defames, abuses, harasses, offends or threatens, shall not be permitted, and may result in your loss of the right to access and use our Services. You shall not modify, scrape, embed, or frame our Services without our prior written permission.`,
      `Subject to the terms of this Agreement and the Privacy Policy, we may offer you various Services. Below are terms and conditions governing these Services.`,
      `You Must Maintain the Integrity of Your Information. To use certain Services, you may be required to provide us with information about you, which may be of a confidential nature and may include personal identifying information, medical and health history information, and/or financial information (“Your Information”). If you provide Your Information to us then you agree to provide true, current, complete and accurate information, and not to misrepresent your identity. You also agree to keep Your Information current and to update Your Information if any of Your Information changes. Our collection, use and disclosure of Your Information is governed by this Agreement and our Privacy Policy.`,
      `You Must Maintain the Security of Any Password Issued to You. If our Services require you to create a password to use certain portions of our Services, then it is your sole responsibility to maintain the security of that password. You agree that we shall not be liable for any loss that you may suffer as a result of the authorized or unauthorized use of your password by a third party. You shall not allow any person under the age of 18 to use any Service via your registration or password.`,
      `You Must Notify Us of a Breach. You agree to immediately notify us of any unauthorized use of your password, any unauthorized use of any account that you may have with us, any violation of this Agreement, or any other breach of security known to you in connection with any product or service available on our Services by sending an email to: support@easypoints.`,
      `You Are Responsible for Your Financial Decisions. We and our affiliates, through the Services, may provide a venue through which you can obtain information and you can find third-party service providers, such as financial institutions, credit card providers, mortgage brokers, insurance brokers, insurance agents, discount program representatives and other insurance professionals (“Service Providers”). We do not endorse or recommend the products or services of any Service Provider, and are not an agent or advisor to you or any Service Provider. We do not validate or investigate the licensing, certification or other requirements and qualifications of Service Providers. It is your responsibility to investigate Service Providers. You acknowledge and agree that Service Providers are solely responsible for any services that they may provide to you and that we are not liable for any losses, costs, damages or claims in connection with, arising from, or related to, your use of a Service Provider’s products or services. We urge you to obtain the advice of financial advisors, insurance agents, brokers or other qualified professionals who are fully aware of your individual circumstances before you make any financial or insurance decisions. You acknowledge and agree that you rely on your own judgment and that of such advisors in selecting any products or services offered by Service Providers.`,
      `You Acknowledge and Agree that We are not a financial institution, insurance provider or other Service Provider. Instead, we, through our Services, may help to connect you with Service Providers that might meet your needs based on information provided by you. We do not, and will not, make any coverage or credit decision with any Service Provider referred to you. We do not issue mortgages, credit cards, insurance coverage or any other financial products.`,
      `No Guarantee of Quotes, Fees, Terms, Rates, Coverage or Services. We do not make any warranties or representations regarding the quotes, fees, terms, rates, coverage or services offered or made available by Service Providers. We do not guarantee that quotes, fees, terms, rates, coverage or services offered by Service Providers are the best available.`,
      `You are solely responsible for complying with applicable laws and regulations in connection with your use of any services offered by us or a Service Provider.`
    ]
  },
  {
    title: 'Fees and Payments',
    description: [
      `Initial access and use of our Services is free. At any time, we may choose to charge fees for various premium features and services, and we will notify you of those charges at the time that we offer features and services for a fee. We may, in our sole discretion, and by notifying you on our Services, change this policy and begin charging for access to our Services and other features and services, and we may, in our sole discretion, add, remove or change the features and services we offer or the fees (including the amount and type of fees) we charge at any time. If we introduce a new service or charge a new fee, we will establish and notify you of the fees for that service at the launch of the service or start of charging a new fee. If we notify you of new fees or changes to fees for an existing service, then you agree to pay all fees and charges specified and all applicable taxes for your continued use of the applicable service.`,
      `Membership, Free Trials, Billing and Cancellation`,
      `Ongoing Membership. If selected, your easypoints membership, which may start with a free trial, will continue annually or month-to-month unless and until you cancel your membership or we terminate it. You must have Internet access and provide us with a current, valid, accepted method of payment (as such may be updated from time to time, "Payment Method") to use the easypoints service. We will bill the annual or monthly membership fee to your Payment Method. You must cancel your membership before it renews each year or month in order to avoid billing of the next year’s or month's membership fees to your Payment Method.`,
      `Differing Memberships. We may offer a number of membership plans, including special promotional plans or memberships with differing conditions and limitations. Any materially different terms from those described in these Terms of Use will be disclosed at your sign-up or in other communications made available to you. You can find specific details regarding your membership with easypoints by visiting our website and clicking on the "Your Account" link. Some promotional memberships are offered by third parties in conjunction with the provision of their own products and services. We are not responsible for the products and services provided by such third parties. We reserve the right to modify, terminate or otherwise amend our offered membership plans.`
    ]
  },
  {
    title: 'Membership',
    description: [
      `Recurring Billing. By starting your easypoints membership and providing or designating a Payment Method, you authorize us to charge you an annual or monthly membership fee at the then current rate, and any other charges you may incur in connection with your use of the easypoints service to your Payment Method. You acknowledge that the amount billed each year or month may vary from year to year or month to month for reasons that may include differing amounts due to promotional offers, including gift card redemption and promotional code redemption, and/or changing or adding a plan, and you authorize us to charge your Payment Method for such varying amounts, which may be billed monthly in one or more charges. Price Changes. We reserve the right to adjust pricing for our service or any components thereof in any manner and at any time as we may determine in our sole and absolute discretion. Except as otherwise expressly provided for in these Terms of Use, any price changes to your service will take effect following email notice to you.`,
      `Billing Cycle. The membership fee for our service will be billed at the beginning of the paying portion of your membership and each year or month thereafter unless and until you cancel your membership. We automatically bill your Payment Method each year or month on the calendar day corresponding to the commencement of your paying membership. Membership fees are fully earned upon payment. We reserve the right to change the timing of our billing, in particular, as indicated below, if your Payment Method has not successfully settled. In the event your paying membership began on a day not contained in a given month, we may bill your Payment Method on a day in the applicable month or such other day as we deem appropriate. For example, if you started your easypoints membership or became a paying member on January 31st, your next payment date is likely to be February 28th, and your Payment Method would be billed on that date. Your renewal date may change due to changes in your Membership. We may authorize your Payment Method in anticipation of membership or service-related charges. As used in these Terms of Use, "billing" shall indicate a charge, debit or other payment clearance, as applicable, against your Payment Method. Unless otherwise stated differently, month or monthly refers to your billing cycle.`,
      `No Refunds. PAYMENTS ARE NONREFUNDABLE AND THERE ARE NO REFUNDS OR CREDITS FOR PARTIALLY USED PERIODS. Following any cancellation, however, you will continue to have access to the service through the end of your current billing period. At any time, and for any reason, we may provide a refund, discount, or other consideration to some or all of our members ("credits"). The amount and form of such credits, and the decision to provide them, are at our sole and absolute discretion. The provision of credits in one instance does not entitle you to credits in the future for similar instances, nor does it obligate us to provide credits in the future, under any circumstance.`,
      `Payment Methods. If a payment is not successfully settled, due to expiration, insufficient funds, or otherwise, and you do not edit your Payment Method information or cancel your account (see, "Cancellation" below), you remain responsible for any uncollected amounts and authorize us to continue billing the Payment Method, as it may be updated. This may result in a change to your payment billing dates. For certain Payment Methods, the issuer of your Payment Method may charge you a foreign transaction fee or other charges. Check with your Payment Method service provider for details.`,
      `Cancellation. You may cancel your easypoints membership at any time, and you will continue to have access to the easypoints service through the end of your monthly or annual billing period. WE DO NOT PROVIDE REFUNDS OR CREDITS FOR ANY PARTIAL-MONTH MEMBERSHIP PERIODS. To cancel, simply log-into “My Account” or email us your request to do so at support@easypoints. This request will be acknowledged within 72 hours at which point, once acknowledged you will be notified via email.`
    ]
  },
  {
    title: 'Billing'
  },
  {
    title: 'Our Intellectual Property Rights',
    description: [
      `Our names, graphics, logos, page headers, button icons, scripts, and service names are our trademarks or trade dress in the United States and/or other countries (collectively, the “Proprietary Marks”). You may not use the Proprietary Marks without our prior written permission. We make no proprietary claim to any third-party names, trademarks or service marks appearing on our Services. Any third-party names, trademarks, and service marks are property of their respective owners.`,
      `The information, advice, data, software and content viewable on, contained in, or downloadable from our Services (collectively, the “Content”), including, without limitation, all text, graphics, charts, pictures, photographs, images, videos, line art, icons and renditions, are copyrighted by, or otherwise licensed to, us or our Content suppliers. We also own a copyright of a collective work in the selection, coordination, arrangement, presentation, display and enhancement of the Content (the “Collective Work”). All software used on or within our Services (the “Software”) is our property or the property of our software vendors and is protected by United States and international copyright laws. Viewing, reading, printing, downloading or otherwise using the Content and/or the Collective Work does not entitle you to any ownership or intellectual property rights to the Content, the Collective Work, or the Software.`,
      `You are solely responsible for any damages resulting from your infringement of our or any third-party’s intellectual property rights regarding the Trademarks, the Content, the Collective Work, the Software and/or any other harm incurred by us or our affiliates as a, direct or indirect, result of your copying, distributing, redistributing, transmitting, publishing or using the same for purposes that are contrary to the terms and conditions of this Agreement.`
    ]
  },
  {
    title: 'Your Use of the Content',
    description: [
      `We grant you a limited license to access, print, download or otherwise make personal use of the Content and the Collective Work in the form of: (i) one machine-readable copy; (ii) one backup copy; and (iii) one print copy, for your non-commercial use; provided, however, that you shall not delete any proprietary notices or materials with regard to the foregoing manifestations of the Content and the Collective Work. You may not modify the Content or the Collective Work or utilize them for any commercial purpose or any other public display, performance, sale, or rental, decompile, reverse engineer, or disassemble the Content and the Collective Work, or transfer the Content or the Collective Work to another person or entity.`,
      `Except as otherwise permitted under the copyright laws of the United States, no other copying, distribution, redistribution, transmission, publication or use, other than the non-commercial use of the Content and the Collective Work as permitted by this Agreement, is permitted by you without our prior written permission.`,
      `You may not use any meta tags or any other “hidden text” utilizing our name or trademarks without our prior written permission.`
    ]
  },
  {
    title: 'Access and Interference',
    description: [
      `You agree that you will not use any robot, spider, scraper, deep link or other similar automated data gathering or extraction tools, program, algorithm or methodology to access, acquire, copy or monitor our Services or any portion of our Services or for any other purpose, without our prior written permission. Additionally, you agree that you will not: (i) take any action that imposes, or may impose in our sole discretion an unreasonable or disproportionately large load on our infrastructure; (ii) copy, reproduce, modify, create derivative works from, distribute or publicly display any content (except for your personal information) from our Services without our prior written permission and the appropriate third party, as applicable; (iii) interfere or attempt to interfere with the proper working of our Services or any activities conducted on our Services; or (iv) bypass any robot exclusion headers or other measures we may use to prevent or restrict access to our Services. Notwithstanding the foregoing, we grant the operators of public search engines permission to use spiders to copy materials from our Services for the sole purpose and solely to the extent necessary for creating publicly available search indices of the materials on our Services, but not caches or archives of such materials. We reserve the right to revoke these exceptions either generally or in specific cases. Except as expressly permitted in this Agreement, you shall not collect or harvest any personally identifiable information, including account names, from our Services. You shall not use any communication systems provided on our Services (such as Forums or email) for any commercial or solicitation purposes. You shall not solicit for commercial purposes any users of our Services without our prior written permission.`
    ]
  },
  {
    title: 'Electronic Communications',
    description: [
      `When you visit our Services or send email to us, you are communicating with us electronically. You consent to receive communications from us electronically. Although we may choose to communicate with you by regular mail, we may also choose to communicate with you by email or by posting notices on our Services. You agree that all agreements, notices, disclosures and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing.`,
      `Your Responsibility for Equipment and Related Costs`,
      `You are responsible for obtaining and maintaining all telephone, computer hardware, Internet access services and other equipment or services needed to access and use our Services, and all costs and fees associated with Internet access or long distance charges incurred with regard to your access and use of our Services.`
    ]
  },
  {
    title: 'Third Party Links or Access',
    description: [
      `There may be provided on our Services links or access to other websites or mediums belonging to our advertisers, business partners, affiliates, Service Providers and other third parties. Such links and access do not constitute our endorsement of those third parties, nor the products or services of those third parties. We are not responsible for the activities or policies of those third parties. We do not guarantee that the terms or rates offered by any particular advertiser, business partner, affiliate, Service Provider or other third party on or through our Services are the best terms or lowest rates available in the market.`
    ]
  },
  {
    title: 'Mobile Devices',
    description: [
      `If we provide aspects of our Services via an application for your mobile or other device, please be aware that your carrier’s normal rates and fees may apply and that the terms of this Agreement and other agreements within the application apply to your use of such application.`,
      `Copyright Infringement`,
      `It is our policy to comply with the Digital Millennium Copyright Act, title 17, United States Code, Section 512, including, without limitation, responding to notices of alleged copyright infringement, and other applicable intellectual property laws. We shall, in appropriate circumstances, disable and/or terminate the accounts of users who may infringe or repeatedly infringe the copyrights or other intellectual property rights of ours and/or others.`
    ]
  },
  {
    title: 'We Make No Representations or Warranties Regarding the Content',
    description: [
      `The Content and all services and products associated with OUR SERVICES are provided to you on an “as-is” and “as available” basis. WE make no representations or warranties of any kind, express or implied, as to the operation of OUR SERVICES or the information, content, materials, products or services included on or associated with OUR SERVICES. You expressly agree that your use of OUR SERVICES and all products and services included on or associated with OUR SERVICES is at your sole risk.`,
      `WE DO not make, AND EXPRESSLY DISCLAIM, any representations, warranties or guarantees, express or implied, regarding the accuracy, correctness, or completeness of the Content or the services and products associated with OUR SERVICES, or the safety, reliability, title, timeliness, completeness, merchantability, conformity or fitness for a particular purpose of the Content or the services and products associated with OUR SERVICES. It is your sole responsibility to independently evaluate the accuracy, correctness or completeness of the Content and the services and products associated with OUR SERVICES. WE make no representation, warranty or guarantee that the Content that may be available for downloading from OUR SERVICES is free of infection from any viruses, worms, Trojan horses, trap doors, back doors, easter eggs, time bombs, cancelbots or other code or computer programming routines that contain contaminating or destructive properties or that are intended to damage, detrimentally interfere with, surreptitiously intercept or expropriate any system, data or personal information. WE do not make any representations, warranties or guarantees, express or implied, regarding any quotes OR OFFERS provided on or through OUR SERVICES.`,
      `WITHOUT LIMITING THE FOREGOING, YOU ACKNOWLEDGE AND AGREE THAT WE ARE NOT A FINANCIAL INSTITUTION, INSURANCE PROVIDER AND/OR CREDIT CARD PROVIDER. YOU ACKNOWLEDGE AND AGREE THAT WE ARE SOLELY AN INTERMEDIARY BETWEEN YOU AND SUCH SERVICE PROVIDERS AND, THEREFORE, WE EXPRESSLY DISCLAIM ANY AND ALL LIABILITY FOR ANY CONTENT, PRODUCTS OR SERVICES PROVIDED BY SUCH SERVICE PROVIDERS.`,
      `The Content is intended only to assist you with financial decisions and is broad in scope and does not consider your personal financial situation. Your personal financial situation is unique and the information and advice may not be appropriate for your situation. Accordingly, before making any final decisions or implementing any financial strategy, we recommend that you obtain additional information and advice of your accountant and other financial advisors who are fully aware of your individual circumstances.`,
      `Our Services are controlled and offered by us from our facilities in the United States of America. We make no representations that our Services are appropriate or available for use in other jurisdictions. If you access or use our Services from other jurisdictions, then you do so by your own volition and are solely responsible for compliance with local law.`
    ]
  },
  {
    title: 'Limitations on Our Liability',
    description: [
      `WE shall in no event be responsible to, or liable to, you, or any third party, whether in contract, warranty, tort (including negligence) or otherwise, for any damages, including, but not limited to, special, incidental, indirect or consequential damages that include, but are not limited to, damages for any loss of profit, revenue or business, as a direct or indirect result of: (i) your breach or violation of the terms and conditions of this Agreement; (ii) your access and use of OUR SERVICES; (iii) your DELAY IN ACCESSING OR inability to access or use OUR SERVICES for any reason; (iv) your downloading of any of the Content or the Collective Work for your use; (v) your reliance upon or use of the Content or the Collective Work, OR (VI) ANY INFORMATION, SOFTWARE, PRODUCTS OR SERVICES OBTAINED THROUGH OUR SERVICES, OR OTHERWISE ARISING OUT OF THE USE OF OUR SERVICES, WHETHER RESULTING IN WHOLE OR IN PART, FROM BREACH OF CONTRACT, TORTIOUS BEHAVIOR, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF WE AND/OR OUR SUPPLIERS HAD BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. OUR LIABILITY AND THE LIABILITY OF OUR AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES, INDEPENDENT CONTRACTORS, SHAREHOLDERS, REPRESENTATIVES, AND AGENTS ARISING OUT OF THIS AGREEMENT SHALL NOT EXCEED $100.`,
      `YOU SPECIFICALLY ACKNOWLEDGE THAT WE SHALL NOT BE LIABLE FOR USER GENERATED CONTENT OR THE DEFAMATORY, OFFENSIVE OR ILLEGAL CONDUCT OF ANY THIRD PARTY, AND THAT THE RISK OF HARM OR DAMAGE FROM SUCH USER GENERATED CONTENT AND THIRD-PARTY CONDUCT RESTS ENTIRELY WITH YOU.`,
      `YOU AND US AGREE THAT ANY CAUSE OF ACTION ARISING OUT OF OR RELATED TO OUR SERVICES MUST COMMENCE WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES. OTHERWISE, SUCH CAUSE OF ACTION IS PERMANENTLY BARRED.`,
      `Certain state laws do not allow limitations on implied warranties or the exclusion or limitation of certain damages. If these laws apply to you, some or all of the above disclaimers, exclusions or limitations may not apply to you.`,
      `In the event that any limitation on the period of time for bringing an action, claim, dispute or proceeding against us, located in this “Limitations on Our Liability” section, is determined or held to be inapplicable or unenforceable by any court, arbitration panel or other tribunal, then the statute of limitations for the State of Florida, including but not limited to Florida Statutes Section 95, shall apply to any such action, claim, dispute or proceeding referred to final or binding arbitration.`
    ]
  },
  {
    title: 'Your Indemnification of Us',
    description: [
      `You shall defend, indemnify and hold harmless us and our officers, directors, shareholders, employees, independent contractors, agents, representatives and affiliates from and against all claims and expenses, including, but not limited to, attorneys’ fees, arising out of, or attributable to: (i) any breach or violation of this Agreement by you; (ii) your failure to provide accurate, complete and current personally identifiable information requested or required by us; (iii) your access or use of our Services; (iv) access or use of our Services under any password that may be issued to you; (v) your transmissions, submissions or postings (i.e., your own User Generated Content); and/or (vi) any personal injury or property damage caused by you.`
    ]
  },
  {
    title: 'Our Remedies',
    description: [
      `You acknowledge that we may be irreparably damaged if this Agreement is not specifically enforced, and damages at law would be an inadequate remedy. Therefore, in the event of a breach or threatened breach of any provision of this Agreement by you, we shall be entitled, in addition to all rights and remedies, to an injunction restraining such breach or threatened breach, without being required to show any actual damage or to post an injunction bond, and/or to a decree for specific performance of the provisions of this Agreement. For purposes of this Section, you agree that any action or proceeding with regard to such injunction restraining such breach or threatened breach shall be brought in the courts of record of Palm Beach County, Florida, or the United States District Court, Southern District of Florida. You consent to the jurisdiction of such court and waive any objection to the laying of venue of any such action or proceeding in such court. You agree that service of any court paper may be effected on such party by mail or in such other manner as may be provided under applicable laws, rules of procedure or local rules.`
    ]
  },
  {
    title: 'Legal Disputes',
    description: [
      `You and we agree that any claim or dispute at law or equity that has arisen or may arise between us relating in any way to or arising out of this or previous versions of this Agreement, your use of or access to the Services will be resolved in accordance with the provisions set forth in this Legal Disputes section. Please read this section carefully. It affects your rights and will have a substantial impact on how claims you and we have against each other are resolved.`
    ]
  },
  {
    title: 'A. Applicable Law',
    description: [
      `You agree that the laws of the State of California, without regard to principles of conflict of laws, will govern this Agreement and any claim or dispute that has arisen or may arise between you and us, except as otherwise stated in this Agreement.`
    ]
  },
  {
    title: 'B. Agreement to Arbitrate',
    description: [
      `You and we each agree that any and all disputes or claims that have arisen or may arise between you and us relating in any way to or arising out of this or previous versions of this Agreement, your use of or access to our Services, or any products or services sold, offered, or purchased through our Services shall be resolved exclusively through final and binding arbitration, rather than in court, except that you may assert claims in small claims court, if your claims qualify. The Federal Arbitration Act governs the interpretation and enforcement of this Agreement to Arbitrate section (this “Agreement to Arbitrate”).`,
      `Please contact support@easypoints with any questions on our T&Cs.`
    ]
  }
];

const TermsAndConditions: NextPage<TermsAndConditionsProps> = () => {
  return (
    <>
      <NextSeo title={`Terms And Conditions | ${metaConstants.SITE_NAME}`} />
      <Layout>
        <h1 className="bg-light rounded-b-3xl text-6xl py-12 text-center text-black font-bold">
          Terms And Conditions
        </h1>
        <Container>
          <div className="my-14">
            {termsList.map(term => (
              <div key={Math.random().toString(26).slice(2)}>
                {term.title && (
                  <h3 className="text-2xl font-bold capitalize mb-4">
                    {term.title}
                  </h3>
                )}
                {term.description &&
                  term.description.map(des => (
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

export default TermsAndConditions;
