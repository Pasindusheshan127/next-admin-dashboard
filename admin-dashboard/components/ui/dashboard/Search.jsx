"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { MdSearch } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }) => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", 1);
    if (e.target.value) {
      params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params}`);
  }, 300);

  return (
    <div className="">
      {/* SEARCH BAR */}
      <div className="flex  items-center bg-[#2e374a]  rounded-md gap-2 p-1">
        <MdSearch />
        <input
          type="text"
          placeholder={placeholder}
          onChange={handleSearch}
          className="outline-none bg-transparent text-gray-300"
        />
      </div>
    </div>
  );
};

export default Search;
