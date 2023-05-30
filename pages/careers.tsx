import React from 'react';
import {NextPage} from 'next';
import Layout from '@/components/views/Layout';
import Container from '@/components/views/Container';
import CareersCard from '@/components/cards/CareersCard';
import Image from 'next/image';

const Careers: NextPage = () => {
  const careersCardData = [
    {
      style: 'image-only',
      imageUrl: '/assets/laptop.jpg'
    },
    {
      style: 'icon-text',
      iconUrl: '/assets/clock.svg',
      title: 'Flexible hours',
      description:
        'Pusit amet luctus venenatis, lectus magna fringilla porttitor us rhoncus dolor purus non enim praesent.'
    },
    {
      style: 'text-only',
      title: 'Unlimited PTO',
      description:
        'Lorem ipsum luctus dolor sit amet, consectetur adipiscing elit ut aliquam, purus non sit amet luctus venenatis, lectus magna fringilla.purus non sit amet luctus venenatis, lectus magna fringilla.enenatis, lectus magna'
    },
    {
      style: 'icon-text',
      iconUrl: '/assets/remote.svg',
      title: 'Remote',
      description:
        'Pusit amet luctus venenatis, lectus magna fringilla porttitor us rhoncus dolor purus non enim praesent.'
    },
    {
      style: 'image-only',
      imageUrl: '/assets/plan.jpg'
    },
    {
      style: 'text-only',
      title: 'Medical insurance',
      description:
        'Lorem ipsum luctus dolor sit amet, consectetur adipiscing elit ut aliquam, purus non sit amet luctus venenatis, lectus magna fringilla.purus non sit amet luctus venenatis, lectus magna fringilla.enenatis, lectus magna fringilla.'
    },
    {
      style: 'icon-text',
      iconUrl: '/assets/heart.svg',
      title: 'Parental leave',
      description:
        'Pusit amet luctus venenatis, lectus magna fringilla porttitor us rhoncus dolor purus non enim praesent.'
    }
  ];

  return (
    <Layout>
      <div className="max-w-full mx-3 p-6 bg-light rounded-b-3xl">
        <section className="py-20">
          <Container>
            <div className="mx-auto max-w-5xl">
              <div>
                <h1 className="text-3xl text-center md:text-6xl font-bold leading-normal md:leading-snug mb-4">
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
      <div className="max-w-full mx-3 ">
        <section className="py-20 ">
          <Container>
            <div className="max-w-full xl:mx-auto p-6 pt-0 mb-4">
              <div className="mx-auto max-w-full">
                <div className="grid grid-cols-1 grid-rows-1 xl:grid-cols-3 xl:grid-rows-3 gap-x-5 lg:gap-x-14 gap-y-4 md:gap-y-2">
                  <div className="col-span-full md:col-span-1 lg:row-span-2 pt-12 md:pt-12 lg:pt-0  xl:mb-8 ">
                    <img
                      className="xl:w-full xl:h-full object-cover rounded-4xl"
                      src="/assets/laptop.jpg"
                      alt="Laptop Image"
                    />
                  </div>
                  <div className="col-span-full md:col-span-1 rounded-lg pt-16 ">
                    <CareersCard
                      iconUrl="http://localhost:3000/assets/clock.svg"
                      title="Flexible hours"
                      description="Pusit amet luctus venenatis, lectus magna fringilla porttitor us rhoncus dolor purus non enim praesent."
                    />
                  </div>

                  <div className="col-span-full md:col-span-1 rounded-lg  pt-16">
                    <CareersCard
                      iconUrl=""
                      title="Unlimited PTO"
                      description="Lorem ipsum luctus dolor sit amet, consectetur adipiscing
                      elit ut aliquam, purus non sit amet luctus venenatis,
                      lectus magna fringilla.purus non sit amet luctus
                      venenatis, lectus magna fringilla.enenatis, lectus magna"
                    />
                  </div>
                  <div className="col-span-full md:col-span-1 rounded-lg pt-12 md:pt-16">
                    <CareersCard
                      iconUrl="/assets/remote.svg"
                      title="Remote"
                      description=" Pusit amet luctus venenatis, lectus magna fringilla
                      porttitor us rhoncus dolor purus non enim praesent."
                    />
                  </div>
                  <div className="col-span-full md:col-span-1 lg:row-span-2  pt-12  xl:pt-8 xl:mb-0 mb-16">
                    <img
                      className="xl:w-full xl:h-full object-cover rounded-4xl"
                      src="/assets/plane.jpg"
                      alt="Plane Image"
                    />
                  </div>
                  <div className="col-span-full md:col-span-1 rounded-lg  pt-12 md:pt-0 ">
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
                  <div className="col-span-full md:col-span-1 rounded-lg  pt-12 md:pt-12">
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
      </div>
    </Layout>
  );
};

export default Careers;
