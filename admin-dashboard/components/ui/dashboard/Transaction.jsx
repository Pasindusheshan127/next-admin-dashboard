"use client";
import Image from "next/image";
import React from "react";

const Transaction = () => {
  return (
    <div className="w-full bg-slate-900 p-5 rounded-lg">
      {/* title */}
      <h2 className="mb-5 font-[200px] text-gray-300">Latest Transactions</h2>
      {/* transaction details */}
      <table className="w-full ">
        <thead>
          <tr className="">
            <td className="p-2">Name</td>
            <td className="p-2">Status</td>
            <td className="p-2">Date</td>
            <td className="p-2">Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="flex gap-2 items-center p-2">
              <Image
                src="/noAvatar.png"
                alt="user"
                width={40}
                height={40}
                className="rounded-full"
              />
              prasad samarawickrama
            </td>
            <td className="p-2">
              <span className="rounded-md p-1 text-sm block w-[70px] text-center bg-yellow-600">
                pending
              </span>
            </td>
            <td className="p-2">14.02.2024</td>
            <td className="p-2">$32.00</td>
          </tr>
          <tr>
            <td className="flex gap-2 items-center p-2">
              <Image
                src="/noAvatar.png"
                alt="user"
                width={40}
                height={40}
                className="rounded-full"
              />
              prasad samarawickrama
            </td>
            <td className="p-2">
              <span className="rounded-md p-1 text-sm block w-[70px] text-center bg-green-600">
                Done
              </span>
            </td>
            <td className="p-2">14.02.2024</td>
            <td className="p-2">$32.00</td>
          </tr>
          <tr>
            <td className="flex gap-2 items-center p-2">
              <Image
                src="/noAvatar.png"
                alt="user"
                width={40}
                height={40}
                className="rounded-full"
              />
              prasad samarawickrama
            </td>
            <td className="p-2">
              <span className="rounded-md p-1 text-sm block w-[70px] text-centerl bg-red-600">
                cancelled
              </span>
            </td>
            <td className="p-2">14.02.2024</td>
            <td className="p-2">$32.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
