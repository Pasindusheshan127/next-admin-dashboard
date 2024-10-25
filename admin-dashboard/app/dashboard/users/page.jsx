import Pagination from "@/components/ui/dashboard/Pagination";
import Search from "@/components/ui/dashboard/Search";
import { fetchUsers } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, users } = await fetchUsers(q, page);

  console.log("users:", users);

  return (
    <div className="p-5 bg-[#151c2c] min-h-screen">
      <div className="mt-5 bg-[#1e2a3b] p-6 rounded-lg shadow-lg">
        {/* Changed bg-slate-900 to bg-[#1e2a3b] */}
        {/* Header Section */}
        <div className="flex items-center justify-between mb-4">
          <Search placeholder={"Search for a user"} />
          <Link href="/dashboard/users/add">
            <button className="p-3 bg-[#4a0082] text-gray-200 font-bold rounded-md hover:bg-[#3e0070] transition duration-300">
              {/* Changed bg-purple-900 to bg-[#4a0082] */}
              Add New
            </button>
          </Link>
        </div>
        {/* Table */}
        <table className="w-full table-auto bg-[#1a1e25] text-gray-200 rounded-lg overflow-hidden">
          {/* Changed bg-slate-800 to bg-[#1a1e25] */}
          <thead className="bg-[#23292f]">
            {/* Changed bg-slate-700 to bg-[#23292f] */}
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Created At</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* User Row */}
            {users.map((user) => (
              <tr key={user.id} className="border-b border-[#3b3f45]">
                {" "}
                {/* Changed border-slate-700 to border-[#3b3f45] */}
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/noavatar.png"
                      alt="user"
                      height={40}
                      width={40}
                      className="rounded-full object-cover"
                    />
                    {user.username}
                  </div>
                </td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">
                  {user.createdAt?.toString().slice(4, 16)}
                </td>
                <td className="p-3">{user.isAdmin ? "Admin" : "Client"}</td>
                <td className="p-3">{user.isActive ? "Active" : "passive"}</td>
                <td className="p-3">
                  <div className="flex gap-3">
                    <Link href={`/dashboard/users/${user.id}`}>
                      <button className="p-2 bg-[#00897b] text-gray-200 font-bold rounded-md hover:bg-[#00796b] transition duration-300">
                        {/* Changed bg-teal-700 to bg-[#00897b] */}
                        View
                      </button>
                    </Link>
                    <button className="p-2 bg-[#e53935] text-gray-200 font-bold rounded-md hover:bg-[#d32f2f] transition duration-300">
                      {/* Changed bg-red-700 to bg-[#e53935] */}
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
        <Pagination count={count} />
      </div>
    </div>
  );
};

export default UserPage;
