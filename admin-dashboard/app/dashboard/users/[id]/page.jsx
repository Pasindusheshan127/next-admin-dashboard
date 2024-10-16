import Image from "next/image";
import React from "react";

const SingleUserPage = () => {
  return (
    <div className="flex gap-12 mt-5 p-5 bg-[#151c2c] text-gray-300">
      <div className="w-1/4 bg-[#1e2a3b] p-6 h-max rounded-lg shadow-lg">
        <div className="w-full h-[300px] relative overflow-hidden rounded-lg mb-4 shadow-md">
          <Image
            src="/noavatar.png"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <h2 className="text-center font-bold text-xl mb-2">Mohan Peris</h2>
        <p className="text-center text-sm">Administrator</p>
      </div>

      <div className="w-3/4 bg-[#1e2a3b] p-6 rounded-lg shadow-lg">
        <form action="" className="flex flex-col gap-4">
          <label className="text-sm font-semibold">Username</label>
          <input
            className="p-4 border-2 border-[#2e374a] bg-[#1a1e25] rounded-lg focus:outline-none focus:border-[#00bcd4] transition duration-300"
            type="text"
            placeholder="Username"
          />

          <label className="text-sm font-semibold">Email</label>
          <input
            className="p-4 border-2 border-[#2e374a] bg-[#1a1e25] rounded-lg focus:outline-none focus:border-[#00bcd4] transition duration-300"
            type="email"
            placeholder="Email"
          />

          <label className="text-sm font-semibold">Password</label>
          <input
            className="p-4 border-2 border-[#2e374a] bg-[#1a1e25] rounded-lg focus:outline-none focus:border-[#00bcd4] transition duration-300"
            type="password"
            placeholder="Password"
          />

          <label className="text-sm font-semibold">Phone</label>
          <input
            className="p-4 border-2 border-[#2e374a] bg-[#1a1e25] rounded-lg focus:outline-none focus:border-[#00bcd4] transition duration-300"
            type="text"
            placeholder="+947189546"
          />

          <label className="text-sm font-semibold">Address</label>
          <textarea
            className="p-4 border-2 border-[#2e374a] bg-[#1a1e25] rounded-lg focus:outline-none focus:border-[#00bcd4] transition duration-300"
            placeholder="Address"
          ></textarea>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="text-sm font-semibold">Is Admin</label>
              <select className="w-full p-4 border-2 border-[#2e374a] bg-[#1a1e25] rounded-lg focus:outline-none focus:border-[#00bcd4] transition duration-300">
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>

            <div className="w-1/2">
              <label className="text-sm font-semibold">Is Active</label>
              <select className="w-full p-4 border-2 border-[#2e374a] bg-[#1a1e25] rounded-lg focus:outline-none focus:border-[#00bcd4] transition duration-300">
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
          </div>

          <button className="w-full p-4 mt-4 bg-[#00bcd4] text-gray-300 font-bold rounded-lg hover:bg-[#009688] transition duration-300">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
