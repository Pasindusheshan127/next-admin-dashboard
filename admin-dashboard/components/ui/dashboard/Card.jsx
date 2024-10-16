"use client";
import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className="flex w-full bg-[#1e1e2f] rounded-2xl p-5 gap-5 cursor-pointer hover:bg-[#2b2c3b] transition duration-300 ease-in-out">
      <MdSupervisedUserCircle className="text-[#E0E0E0] text-4xl" />
      <div className="flex flex-col gap-5">
        <span className="text-[#E0E0E0]">Total User</span>
        <span className="text-xl font-semibold text-[#ffffff]">20.00</span>
        <span className="text-[14px] font-light">
          <span className="text-green-500">124</span> more than previous
        </span>
      </div>
    </div>
  );
};

export default Card;
