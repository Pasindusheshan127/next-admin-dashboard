"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  // Get current page, default to 1
  const page = parseInt(searchParams.get("page")) || 1;
  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 1;

  // Pagination logic
  const hasPrev = page > 1; // there is a previous page if the current page is greater than 1
  const hasNext = ITEM_PER_PAGE * page < count; // there is a next page if items on the current page are less than the total count

  const handleChangePage = (type) => {
    if (type === "prev") {
      params.set("page", page - 1);
    } else {
      params.set("page", page + 1);
    }

    // Update the URL with the new page
    replace(`${pathname}?${params}`);
  };

  return (
    <div>
      <div className="flex justify-between mt-3">
        {/* Previous Button */}
        <button
          className={`p-2 ${
            hasPrev ? "cursor-pointer" : "cursor-not-allowed"
          } rounded-lg bg-slate-600 text-black`}
          disabled={!hasPrev}
          onClick={() => handleChangePage("prev")}
        >
          Previous
        </button>

        {/* Next Button */}
        <button
          className={`p-2 w-16 ${
            hasNext ? "cursor-pointer" : "cursor-not-allowed"
          } bg-white text-black font-bold rounded-lg`}
          disabled={!hasNext}
          onClick={() => handleChangePage("next")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
