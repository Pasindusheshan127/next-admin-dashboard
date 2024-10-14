import Image from "next/image";
import React from "react";

const SingleProductPage = () => {
  return (
    <div className="flex gap-12 mt-5">
      <div className="w-1/4 bg-slate-900 p-3 h-max">
        <div className="w-full h-[300px] relative overflow-hidden text-gray-300 font-bold">
          <Image src="/noavatar.png" alt="" fill className="rounded-md mb-2" />
        </div>
        iPhone
      </div>
      <div className="w-3/4 bg-slate-900 p-5 rounded-lg">
        <form action="" className="flex flex-col">
          <label className="font-[12px]">Title</label>
          <input
            className="p-5 border-2 border-[#2e374a] bg-slate-900 text-gray-300 mx--0 my-3"
            type="text"
            name="title"
            placeholder="title"
          />
          <label className="font-[12px]">Price</label>
          <input
            className="p-5 border-2 border-[#2e374a] bg-slate-900 text-gray-300 mx--0 my-3"
            type="email"
            name="price"
            placeholder="price"
          />
          <label className="font-[12px]">Stock</label>
          <input
            className="p-5 border-2 border-[#2e374a] bg-slate-900 text-gray-300 mx--0 my-3"
            type="text"
            name="stock"
            placeholder="stock"
          />
          <label className="font-[12px]">Color</label>
          <input
            className="p-5 border-2 border-[#2e374a] bg-slate-900 text-gray-300 mx--0 my-3"
            type="text"
            name="color"
            placeholder="+color"
          />
          <label className="font-[12px]">Size</label>
          <textarea
            className="p-5 border-2 border-[#2e374a] bg-slate-900 text-gray-300 mx--0 my-3"
            name="size"
            placeholder="size"
          ></textarea>
          <label className="font-[12px]">Cat</label>
          <select
            className="p-5 border-2 border-[#2e374a] bg-slate-900 text-gray-300 mx--0 my-3"
            name="cat"
            id="cat"
          >
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label className="font-[12px]">Description</label>
          <textarea
            className="p-5 border-2 border-[#2e374a] bg-slate-900 text-gray-300 mx--0 my-3"
            name="desc"
            id="desc"
            placeholder="description"
          ></textarea>
          <button className="w-full p-5 bg-teal-600 font-bold text-gray-300 border-none rounded-md">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
