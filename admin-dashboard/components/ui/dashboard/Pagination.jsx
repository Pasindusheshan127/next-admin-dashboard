"use client";
import React from "react";

const Pagination = () => {
  return (
    <div>
      <div className="flex justify-between mt-3">
        <button className="p-2 cursor-not-allowed rounded-lg bg-slate-600 text-black ">
          Previous
        </button>
        <button className="p-2 w-16 cursor-pointer bg-white text-black font-bold rounded-lg">
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
