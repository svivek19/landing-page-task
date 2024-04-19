import React from "react";
import { IoFilter, IoSearchSharp } from "react-icons/io5";

function SearchForm() {
  return (
    <form className="w-5/6 mx-auto mt-24">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <IoSearchSharp className="text-xl" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900  rounded-lg bg-gray-200 outline-none"
        />
        <button className="absolute end-3 bottom-4">
          <IoFilter className="text-xl" />
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
