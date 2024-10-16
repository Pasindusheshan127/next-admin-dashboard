"use client";
import Image from "next/image";
import React from "react";

const Transaction = () => {
  return (
    <div className="w-full bg-[#1e1e2f] p-5 rounded-lg">
      {/* title */}
      <h2 className="mb-5 font-light text-[#E0E0E0]">Latest Transactions</h2>
      {/* transaction details */}
      <table className="w-full ">
        <thead>
          <tr className="">
            <td className="p-2 text-[#E0E0E0]">Name</td>
            <td className="p-2 text-[#E0E0E0]">Status</td>
            <td className="p-2 text-[#E0E0E0]">Date</td>
            <td className="p-2 text-[#E0E0E0]">Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="flex gap-2 items-center p-2 text-[#ffffff]">
              <Image
                src="/noAvatar.png"
                alt="user"
                width={40}
                height={40}
                className="rounded-full"
              />
              Prasad Samarawickrama
            </td>
            <td className="p-2">
              <span className="rounded-md p-1 text-sm block w-[70px] text-center bg-yellow-600 text-[#E0E0E0]">
                Pending
              </span>
            </td>
            <td className="p-2 text-[#ffffff]">14.02.2024</td>
            <td className="p-2 text-[#ffffff]">$32.00</td>
          </tr>
          <tr>
            <td className="flex gap-2 items-center p-2 text-[#ffffff]">
              <Image
                src="/noAvatar.png"
                alt="user"
                width={40}
                height={40}
                className="rounded-full"
              />
              Prasad Samarawickrama
            </td>
            <td className="p-2">
              <span className="rounded-md p-1 text-sm block w-[70px] text-center bg-green-600 text-[#E0E0E0]">
                Done
              </span>
            </td>
            <td className="p-2 text-[#ffffff]">14.02.2024</td>
            <td className="p-2 text-[#ffffff]">$32.00</td>
          </tr>
          <tr>
            <td className="flex gap-2 items-center p-2 text-[#ffffff]">
              <Image
                src="/noAvatar.png"
                alt="user"
                width={40}
                height={40}
                className="rounded-full"
              />
              Prasad Samarawickrama
            </td>
            <td className="p-2">
              <span className="rounded-md p-1 text-sm block w-[70px] text-center bg-red-600 text-[#E0E0E0]">
                Cancelled
              </span>
            </td>
            <td className="p-2 text-[#ffffff]">14.02.2024</td>
            <td className="p-2 text-[#ffffff]">$32.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
