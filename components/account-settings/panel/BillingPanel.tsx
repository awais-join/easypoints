import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
const headings = ['Receipts', 'Paid', 'Amount'];
const billingData = [
  {
    Receipts: '1 × Standard Plan (at $12.00 / month)',
    Paid: 'January 05, 2022',
    Amount: '$1,240.00',
    link: '#'
  },
  {
    Receipts: '1 × Standard Plan (at $12.00 / month)',
    Paid: 'January 05, 2022',
    Amount: '$1,240.00',
    link: '#'
  },
  {
    Receipts: '1 × Standard Plan (at $12.00 / month)',
    Paid: 'January 05, 2022',
    Amount: '$1,240.00',
    link: '#'
  },
  {
    Receipts: '1 × Standard Plan (at $12.00 / month)',
    Paid: 'January 05, 2022',
    Amount: '$1,240.00',
    link: '#'
  }
];
function BillingPanel() {
  return (
    <div className="lg:px-8 h-full  ">
      <div className="flex  justify-between  h-full">
        <div className="mb-4 md:basis-[100%] rounded-2xl border-solid border border-lightGray pt-6 pb-8 px-2 lg:px-8">
          <h2 className=" text-3xl font-bold font-heading leading-snug mb-6">
            Plan Details
          </h2>
          <div className="w-full ">
            <div className="flex  justify-between">
              <div className="basis-[30%] bg-light">
                <div className="flex flex-col justify-between items-center py-4 px-2 md:px-0">
                  <h4 className="mb-1 text-base font-semibold text-center md:text-left leading-snug">
                    Standard Plan
                  </h4>
                  <h4 className="mb-1 text-3xl md:text-4xl font-bold text-center md:text-left  leading-snug">
                    $12{' '}
                    <span className="text-gray-500 text-base font-normal leading-relaxed ">
                      /month
                    </span>
                  </h4>
                </div>
              </div>
              <div className="basis-[70%] py-4 pl-2 md:pl-10">
                <p className="text-gray-500 font-medium leading-relaxed pr-8">
                  Your easypoint plan will renew on 11/6/2023.
                </p>
                <p className="text-gray-500 font-medium leading-relaxed pr-8">
                  Payment method: AMEX **** 1007
                </p>
                <div className="flex gap-3">
                  <Link href="#" className="text-primary underline font-medium">
                    Update
                  </Link>
                  <Link href="#" className="text-primary underline font-medium">
                    Changen Plan
                  </Link>
                  <Link href="#" className="text-primary underline font-medium">
                    Cancel
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex basis-full flex-col mt-10">
              <h3 className=" text-2xl font-bold font-heading leading-snug mb-6">
                Billing History
              </h3>
              <table className="table-auto">
                <thead className="border-b py-5">
                  <tr>
                    {headings.map(head => (
                      <th>
                        <div className="flex flex-wrap items-center py-4 gap-1 md:gap-2">
                          <div className="w-auto ">
                            <p className=" font-sans font-semibold text-sm md:text-base leading-relaxed text-[#718096]">
                              {head}
                            </p>
                          </div>
                          <div className="w-auto ">
                            <Image
                              width="14"
                              height="14"
                              src="/assets/rotate.svg"
                              alt="Test"
                              className="rounded "
                            />
                          </div>
                        </div>
                      </th>
                    ))}

                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {billingData.map(data => (
                    <tr className="border-b align-top font-sans text-sm md:text-base leading-relaxed text-[#434749] ">
                      <td className="py-4 align-top md:align-middle">
                        {data.Receipts}
                      </td>
                      <td className="py-4 align-top  md:align-middle">
                        {data.Paid}
                      </td>
                      <td className="text-black  text-sm md:font-medium py-4 align-top md:align-middle">
                        {data.Amount}
                      </td>
                      <td className="text-black  text-sm md:font-medium py-1 md:py-4 align-top  md:align-middle">
                        <div className="flex flex-wrap items-start md:items-center py-4 gap-2">
                          <div className="w-auto align-top  md:align-middle">
                            <Image
                              width="14"
                              height="14"
                              src="/assets/receipt.svg"
                              alt="Test"
                              className="rounded "
                            />
                          </div>
                          <div className="w-auto ">
                            <p className=" text-black font-medium">Receipt</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillingPanel;
