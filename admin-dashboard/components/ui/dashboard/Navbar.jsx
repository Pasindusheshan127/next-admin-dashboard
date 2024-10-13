"use client";
import { usePathname } from "next/navigation";
import React from "react";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="flex justify-between bg-slate-900 p-5 items-center rounded-md">
      {/* TITLE */}
      <div className="text-gray-300 text-xl capitalize">
        {pathName.split("/")}
      </div>

      {/* NAVIGATION MENU*/}
      <div className="flex gap-6">
        {/* SEARCH BAR */}
        <div className="flex  items-center bg-[#2e374a]  rounded-md gap-2 p-1">
          <MdSearch />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none bg-transparent text-gray-300"
          />
        </div>
        {/* NOTIFICATION ICONS */}
        <MdOutlineChat className="text-2xl mt-1" />
        <MdNotifications className="text-2xl mt-1" />
        <MdPublic className="text-2xl mt-1" />
      </div>
    </div>
  );
};

export default Navbar;
