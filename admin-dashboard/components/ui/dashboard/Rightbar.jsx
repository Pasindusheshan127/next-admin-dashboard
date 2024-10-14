"use client";
import Image from "next/image";
import React from "react";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className="fixed">
      <div className=" bg-slate-900 rounded-lg mb-5 p-2">
        <div className="relativ py-5 px-0">
          <div className="absolute bottom-0 right-0 w-[50%] h-[50%]">
            <Image
              src="/astronaut.png"
              alt=""
              fill
              className="object-contain opacity-20 "
            />
          </div>
          <div className="flex flex-col gap-5">
            <span className="font-bold">🔥 Available Now</span>
            <h3>how to user the new version of the admin dashboard?</h3>
            <span className="font-semibold text-xs text-gray-300">
              Takes 4 minutes to learn
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              voluptates eius.
            </p>
            <button className="p-2 items-center bg-purple-950 flex gap-2 text-white border-none rounded-md cursor-pointer w-max">
              <MdPlayCircleFilled className="" />
              watch
            </button>
          </div>
        </div>
      </div>

      <div className=" bg-slate-900 rounded-lg mb-5 p-2">
        <div className="relativ py-5 px-0">
          <div className="absolute bottom-0 right-0 w-[50%] h-[50%]">
            <Image
              src="/astronaut.png"
              alt=""
              fill
              className="object-contain opacity-20 "
            />
          </div>
          <div className="flex flex-col gap-5">
            <span className="font-bold">🚀 Coming Soon</span>
            <h3>how to user the new version of the admin dashboard?</h3>
            <span className="font-semibold text-xs text-gray-300">
              New server actions are available, partial pre-rendering is coming
              up!
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              voluptates eius.
            </p>
            <button className="p-2 items-center bg-purple-950 flex gap-2 text-white border-none rounded-md cursor-pointer w-max">
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
