import React from 'react';

function Form() {
  return (
    <div className="w-full ">
      <form className="bg-white ">
        <div className="flex  justify-between gap-4 h-full">
          <div className="mb-4 md:basis-1/2">
            <label
              className="block text-gray-700 text-sm font-semibold mb-3"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full border-lightGray py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="mb-4  md:basis-1/2">
            <label
              className="block text-gray-700 text-sm font-semibold mb-3"
              htmlFor="firstName"
            >
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 border-lightGray text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="flex  justify-between gap-4 h-full">
          <div className="mb-4 md:basis-1/2">
            <label
              className="block text-gray-700 text-sm font-semibold mb-3"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 border-lightGray text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              placeholder="Phone Number"
            />
          </div>
          <div className="mb-4  md:basis-1/2">
            <label
              className="block text-gray-700 text-sm font-semibold mb-3"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border border-lightGray rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="rounded-full bg-primary-500 px-8 py-4 text-base font-bold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
            type="button"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
