import React from 'react';

function GetInTouchPanel() {
  return (
    <div className="lg:px-8 h-full  ">
      <div className="flex  justify-between  h-full">
        <div className="mb-4 md:basis-[100%] rounded-2xl border-solid border border-lightGray pt-6 pb-8 px-2 lg:px-8">
          <h2 className=" text-3xl font-bold font-heading leading-snug mb-2">
            Get In Touch
          </h2>
          <p className="text-gray-500 font-medium leading-relaxed ">
            Want to get in touch? We‘d love to hear from you. Here‘s how you can
            reach us:
          </p>
          <div className="w-full mt-10">
            <div className="flex  flex-col md:flex-row  justify-between gap-4 h-full">
              <div className="mb-4  md:basis-1/2 rounded-2xl border px-7 py-5">
                <h4 className=" text-xl font-bold font-heading leading-snug mb-2">
                  Visit our Help Center
                </h4>
                <p className="text-gray-500 font-normal leading-relaxed ">
                  Find answers to our FAQs or contact us if you still need help.
                </p>
              </div>
              <div className="mb-4  md:basis-1/2  rounded-2xl border px-7 py-5">
                <h4 className=" text-xl font-bold font-heading leading-snug mb-2">
                  Share a suggestion
                </h4>
                <p className="text-gray-500 font-normal leading-relaxed ">
                  Do you have an idea to make point.me even better? Share it
                  here.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mt-5">
            <div className="flex  flex-col md:flex-row  justify-between gap-4 h-full">
              <div className="mb-4 md:basis-1/2  rounded-2xl border px-7 py-5">
                <h4 className=" text-xl font-bold font-heading leading-snug mb-2">
                  Share your easypoint success stories
                </h4>
                <p className="text-gray-500 font-normal leading-relaxed ">
                  We live to help our members see the world. Share your stories
                  with us and make our week!
                </p>
              </div>
              <div className="mb-4  md:basis-1/2  rounded-2xl border px-7 py-5">
                <h4 className=" text-xl font-bold font-heading leading-snug mb-2">
                  See our careers page
                </h4>
                <p className="text-gray-500 font-normal leading-relaxed ">
                  Learn about open positions and apply to join our team.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mt-5">
            <div className="flex  flex-col md:flex-row  justify-between gap-4 h-full">
              <div className="mb-4 md:basis-1/2  rounded-2xl border px-7 py-5">
                <h4 className=" text-xl font-bold font-heading leading-snug mb-2">
                  Report a bug
                </h4>
                <p className="text-gray-500 font-normal leading-relaxed ">
                  Let us know if something is not working as you‘d expect
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouchPanel;
