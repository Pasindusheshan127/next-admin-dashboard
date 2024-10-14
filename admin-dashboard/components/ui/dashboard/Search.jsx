"cuse client";
import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ placeholder }) => {
  return (
    <div className="">
      {/* SEARCH BAR */}
      <div className="flex  items-center bg-[#2e374a]  rounded-md gap-2 p-1">
        <MdSearch />
        <input
          type="text"
          placeholder={placeholder}
          className="outline-none bg-transparent text-gray-300"
        />
      </div>
    </div>
  );
};

export default Search;
