"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";

// Define the menu items structure
const menuItems = [
  {
    title: "Pages",
    list: [
      { title: "Dashboard", path: "/dashboard", icon: <MdDashboard /> },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      { title: "Revenue", path: "/dashboard/revenue", icon: <MdWork /> },
      { title: "Reports", path: "/dashboard/reports", icon: <MdAnalytics /> },
      { title: "Teams", path: "/dashboard/teams", icon: <MdPeople /> },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      { title: "Help", path: "/dashboard/help", icon: <MdHelpCenter /> },
    ],
  },
];

// ListItem component to handle individual menu item display
const ListItem = ({ item }) => {
  const pathName = usePathname();
  return (
    <Link
      href={item.path}
      className={`flex gap-4 items-center p-4 hover:bg-slate-800 ${
        pathName === item.path ? "bg-slate-800" : ""
      }`}
    >
      <div className="text-2xl">{item.icon}</div>
      <span>{item.title}</span>
    </Link>
  );
};

// Sidebar component to display the menu
const Sidebar = () => {
  return (
    <div className="w-full h-full bg-slate-900 p-5 rounded-lg">
      {/* User profile section */}
      <div className="flex items-center mb-5">
        <Image
          src="/noAvatar.png"
          height={48}
          width={48}
          alt="userimg"
          className="object-cover rounded-full"
        />
        <div className="ml-4">
          <span className="font-semibold text-gray-100">Mohan Peris</span>
          <span className="block text-sm text-gray-400">Administrator</span>
        </div>
      </div>

      {/* Menu list */}
      <ul className="space-y-5">
        {menuItems.map((category) => (
          <li key={category.title} className="text-gray-300">
            <span className="font-bold">{category.title}</span>
            <ul className="ml-2 space-y-2">
              {category.list.map((item) => (
                <ListItem item={item} key={item.title} />
              ))}
            </ul>
          </li>
        ))}
      </ul>

      {/* Logout button */}
      <button className="flex items-center gap-2 p-4 mt-10 w-full text-gray-300 hover:bg-slate-800 rounded-lg">
        <MdLogout className="text-2xl" />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
