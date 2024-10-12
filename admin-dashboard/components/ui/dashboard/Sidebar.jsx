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

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
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
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
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
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const ListItem = ({ item }) => {
  const pathName = usePathname();
  return (
    <Link
      href={item.path}
      className={`flex gap-10 items-center p-5 hover:bg-slate-800 ${
        pathName === item.path ? "active:bg-slate-800" : ""
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};
const Sidebar = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex mb-4">
          <Image
            src="/noAvatar.png"
            height={48}
            width={48}
            alt="userimg"
            className="object-cover rounded-full "
          />
          <div className="flex flex-col ml-4">
            <span className="font-semibold">mohan peris</span>
            <span className="text-gray-300">Administrator</span>
          </div>
        </div>
        <ul>
          {menuItems.map((cat) => (
            <li key={cat.title}>
              {cat.title}
              {cat.list.map((item) => (
                <ListItem item={item} key={item.title} />
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
