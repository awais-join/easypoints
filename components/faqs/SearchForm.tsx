import React from 'react';
import PropTypes from 'prop-types';
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline';

const SearchForm = () => {
  return (
    <form className="w-full max-w-xl">
      <div className="flex items-center border rounded-full  py-2 pl-6 pr-2 bg-white">
        <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Search anything..."
          aria-label="Search"
        />
        <button
          className="flex-shrink-0 rounded-full bg-primary-500 px-8 py-4 text-base font-bold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
          type="button"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
