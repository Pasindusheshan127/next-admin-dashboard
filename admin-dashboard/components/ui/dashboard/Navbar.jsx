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
  const title = pathName.split("/").filter(Boolean).join(" > "); // Display formatted path title

  return (
    <div className="flex justify-between items-center bg-slate-900 p-5 rounded-md shadow-md">
      {/* TITLE */}
      <div className="text-gray-300 text-xl capitalize">
        {title || "Dashboard"} {/* Default to 'Dashboard' if title is empty */}
      </div>

      {/* NAVIGATION MENU */}
      <div className="flex items-center gap-6">
        {/* SEARCH BAR */}
        <div className="flex items-center bg-[#2e374a] rounded-md gap-2 p-2">
          <MdSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none bg-transparent text-gray-300 placeholder-gray-500"
          />
        </div>
        {/* NOTIFICATION ICONS */}
        <MdOutlineChat className="text-2xl text-gray-400 hover:text-white transition duration-200" />
        <MdNotifications className="text-2xl text-gray-400 hover:text-white transition duration-200" />
        <MdPublic className="text-2xl text-gray-400 hover:text-white transition duration-200" />
      </div>
    </div>
  );
};

export default Navbar;
