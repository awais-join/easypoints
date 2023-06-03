import React from 'react';

function LoginPanel() {
  return (
    <div className="lg:px-8 h-full  ">
      <div className="flex  justify-between  h-full">
        <div className="mb-4 basis-[100%] rounded-2xl border-solid border border-lightGray pt-6 pb-8 px-2 lg:px-8">
          <h2 className=" text-3xl font-bold font-heading leading-snug mb-6">
            Login and Security
          </h2>
          <div className="w-full ">
            <div className="flex items-center justify-between">
              <button
                className="rounded-full bg-primary-500 px-8 py-4 text-base font-bold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                type="button"
              >
                Change your password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPanel;
