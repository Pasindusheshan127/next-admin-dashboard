import Image from "next/image";
import React from "react";

const SingleUserPage = () => {
  return (
    <div className="flex gap-12 mt-5">
      <div className="w-1/4 bg-slate-900 p-3 h-max">
        <div className="w-full h-[300px] relative overflow-hidden text-gray-300 font-bold">
          <Image src="/noavatar.png" alt="" fill className="rounded-md mb-2" />
        </div>
        mohan peris
      </div>
      <div className="w-3/4 bg-slate-900 p-5 rounded-lg">
        <form action="" className="flex flex-col">
          <label className="font-[12px]">username</label>
          <input
            className="p-5 border-2 border-[#2e374a] bg-slate-900 text-gray-300 mx--0 my-3"
            type="text"
            name="username"
            placeholder="username"
          />
          <label className="font-[12px]">Email</label>
          <input
            className="p-5 border-2 border-[#2e374a] bg-slate-900 text-gray-300 mx--0 my-3"
            type="email"
            name="username"
            placeholder="email"
          />
          <label className="font-[12px]">Password</label>
          <input
            className="p-5 border-2 border-[#2e374a] bg-slate-900 text-gray-300 mx--0 my-3"
            type="password"
            name="password"
            placeholder="password"
          />
          <label className="font-[12px]">Phone</label>
          <input
            className="p-5 border-2 border-[#2e374a] bg-slate-900 text-gray-300 mx--0 my-3"
            type="text"
            name="phone"
            placeholder="+947189546"
          />
          <label className="font-[12px]">Address</label>
          <textarea
            className="p-5 border-2 border-[#2e374a] bg-slate-900 text-gray-300 mx--0 my-3"
            name="address"
            placeholder="Address"
          ></textarea>
          <label className="font-[12px]">Is Admin</label>
          <select
            className="p-5 border-2 border-[#2e374a] bg-slate-900 text-gray-300 mx--0 my-3"
            name="isadmin"
            id="isAdmin"
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label className="font-[12px]">Is Active</label>
          <select
            className="p-5 border-2 border-[#2e374a] bg-slate-900 text-gray-300 mx--0 my-3"
            name="isActive"
            id="isActive"
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button className="w-full p-5 bg-teal-600 font-bold text-gray-300 border-none rounded-md">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
