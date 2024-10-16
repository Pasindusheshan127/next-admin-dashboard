"use client";
import Image from "next/image";
import React from "react";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className="fixed">
      <div className="bg-[#1e1e2f] rounded-lg mb-5 p-4 text-[#E0E0E0]">
        <div className="relative py-5">
          <div className="absolute bottom-0 right-0 w-[50%] h-[50%]">
            <Image
              src="/astronaut.png"
              alt=""
              fill
              className="object-contain opacity-20"
            />
          </div>
          <div className="flex flex-col gap-5">
            <span className="font-bold">🔥 Available Now</span>
            <h3 className="text-lg">
              How to use the new version of the admin dashboard?
            </h3>
            <span className="font-semibold text-xs text-gray-400">
              Takes 4 minutes to learn
            </span>
            <p className="text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              voluptates eius.
            </p>
            <button className="p-2 flex items-center bg-[#3f3d56] text-white gap-2 border-none rounded-md cursor-pointer w-max">
              <MdPlayCircleFilled />
              Watch
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#1e1e2f] rounded-lg mb-5 p-4 text-[#E0E0E0]">
        <div className="relative py-5">
          <div className="absolute bottom-0 right-0 w-[50%] h-[50%]">
            <Image
              src="/astronaut.png"
              alt=""
              fill
              className="object-contain opacity-20"
            />
          </div>
          <div className="flex flex-col gap-5">
            <span className="font-bold">🚀 Coming Soon</span>
            <h3 className="text-lg">
              How to use the new version of the admin dashboard?
            </h3>
            <span className="font-semibold text-xs text-gray-400">
              New server actions are available, partial pre-rendering is coming
              up!
            </span>
            <p className="text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              voluptates eius.
            </p>
            <button className="p-2 flex items-center bg-[#3f3d56] text-white gap-2 border-none rounded-md cursor-pointer w-max">
              <MdReadMore />
              Learn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
