import React from 'react';
import {NextPage} from 'next';
import Layout from '@/components/views/Layout';
import Container from '@/components/views/Container';
import CareersCard from '@/components/cards/CareersCard';
import CareersFilter from '@/components/careers/CareersFilter';

const Careers: NextPage = () => {
  const openedJobs = [
    {
      title: 'UI/UX and product designer',
      description:
        'Pusit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent.',
      location: 'Los Angeles, CA',
      type: 'Full Time',
      category: 'Design',
      iconColor: 'yellow'
    },
    {
      title: 'Frontend developer',
      description:
        'Pusit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent.',
      location: 'Los Angeles, CA',
      type: 'Full Time',
      category: 'Development',
      iconColor: 'blue'
    },
    {
      title: 'Finance analyst',
      description:
        'Pusit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent.',
      location: 'Los Angeles, CA',
      type: 'Full Time',
      category: 'Business',
      iconColor: 'lightPink'
    },
    {
      title: 'Head of branding',
      description:
        'Pusit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent.',
      location: 'Los Angeles, CA',
      type: 'Full Time',
      category: 'Design',
      iconColor: 'yellow'
    },
    {
      title: 'Accounts analyst',
      description:
        'Pusit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent.',
      location: 'Los Angeles, CA',
      type: 'Full Time',
      category: 'Business',
      iconColor: 'lightPink'
    },
    {
      title: 'Laravel Developer',
      description:
        'Pusit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent.',
      location: 'Los Angeles, CA',
      type: 'Full Time',
      category: 'Development',
      iconColor: 'blue'
    }
  ];
  return (
    <Layout>
      <div className="max-w-full mx-3 p-6 bg-light rounded-b-3xl">
        <section className="py-20">
          <Container>
            <div className="mx-auto max-w-5xl">
              <div>
                <h1 className="text-3xl text-center md:text-6xl font-bold leading-normal md:leading-snug mb-4 ">
                  We’re leading the way in helping millions of Travelers
                </h1>
                <h4 className="text-2xl text-center leading-normal font-semibold text-black75 mb-6">
                  We’re leading the way in helping millions of Travelers
                </h4>
              </div>
            </div>
          </Container>
        </section>
      </div>
      {/*  */}
      <div className="max-w-full mx-3 ">
        <section className="pt-20 ">
          <Container>
            <div className="max-w-full xl:mx-auto md:p-6 pt-0 mb-4">
              <div className="mx-auto max-w-full">
                <div className="grid grid-cols-1  grid-rows-1 xl:grid-cols-3 xl:grid-rows-3 gap-x-5 lg:gap-x-14 lg:gap-y-8 gap-y-4 md:gap-y-2">
                  <div className="col-span-full md:col-span-1 lg:row-span-2 pt-12 md:pt-12 lg:pt-0  ">
                    <img
                      className="xl:w-full xl:h-full object-cover rounded-4xl"
                      src="/assets/laptop.jpg"
                      alt="Laptop Image"
                    />
                  </div>
                  <div className="col-span-full  md:col-span-1 rounded-lg  ">
                    <CareersCard
                      iconUrl="http://localhost:3000/assets/clock.svg"
                      title="Flexible hours"
                      description="Pusit amet luctus venenatis, lectus magna fringilla porttitor us rhoncus dolor purus non enim praesent."
                    />
                  </div>

                  <div className="col-span-full md:col-span-1 rounded-lg ">
                    <CareersCard
                      iconUrl=""
                      title="Unlimited PTO"
                      description="Lorem ipsum luctus dolor sit amet, consectetur adipiscing
                      elit ut aliquam, purus non sit amet luctus venenatis,
                      lectus magna fringilla.purus non sit amet luctus
                      venenatis, lectus magna fringilla.enenatis, lectus magna"
                    />
                  </div>
                  <div className="col-span-full md:col-span-1 rounded-lg ">
                    <CareersCard
                      iconUrl="/assets/remote.svg"
                      title="Remote"
                      description=" Pusit amet luctus venenatis, lectus magna fringilla
                      porttitor us rhoncus dolor purus non enim praesent."
                    />
                  </div>
                  <div className="col-span-full md:col-span-1 lg:row-span-2  ">
                    <img
                      className="xl:w-full xl:h-full object-cover rounded-4xl"
                      src="/assets/plane.jpg"
                      alt="Plane Image"
                    />
                  </div>
                  <div className="col-span-full md:col-span-1 rounded-lg   ">
                    <CareersCard
                      iconUrl=""
                      title=" Medical insurance"
                      description="Lorem ipsum luctus dolor sit amet, consectetur adipiscing
                      elit ut aliquam, purus non sit amet luctus venenatis,
                      lectus magna fringilla.purus non sit amet luctus
                      venenatis, lectus magna fringilla.enenatis, lectus magna
                      fringilla."
                    />
                  </div>
                  <div className="col-span-full md:col-span-1 rounded-lg  ">
                    <CareersCard
                      iconUrl="/assets/heart.svg"
                      title="Parental leave"
                      description="Pusit amet luctus venenatis, lectus magna fringilla
                      porttitor us rhoncus dolor purus non enim praesent."
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <div className="max-w-full mx-3 ">
          <section className="py-20 ">
            <Container>
              <div className="max-w-full xl:mx-auto px-6 pt-0 mb-3 ">
                <div className="mx-auto max-w-full">
                  <div className="flex flex-wrap -m-2 mb-1.5 justify-center align-baseline ">
                    <CareersFilter openedJobs={openedJobs} />
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Careers;
