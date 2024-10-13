"use client";
import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className="flex w-full bg-slate-900 rounded-2xl p-5 gap-5 cursor-pointer hover:bg-[#2e374a]">
      <MdSupervisedUserCircle />
      <div className="flex flex-col gap-5">
        <span className="">Total User</span>
        <span className="text-xl font-semibold">20.00</span>
        <span className="text-[14px] font-[300px]">
          <span className="text-green-600">124</span> more than previous
        </span>
      </div>
    </div>
  );
};

export default Card;
