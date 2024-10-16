import Image from "next/image";
import React from "react";

const SingleProductPage = () => {
  return (
    <div className="flex gap-12 mt-5 p-5 bg-[#151c2c] text-gray-300">
      <div className="w-1/4 bg-[#1e2a3b] p-6 h-max rounded-lg shadow-lg">
        <div className="w-full h-[300px] relative overflow-hidden rounded-lg mb-4 shadow-md">
          <Image
            src="/noavatar.png"
            alt="Product image"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <h2 className="text-center font-bold text-xl mb-2">iPhone</h2>
        <p className="text-center text-sm">Latest Model</p>
      </div>

      <div className="w-3/4 bg-[#1e2a3b] p-6 rounded-lg shadow-lg">
        <form action="" className="flex flex-col gap-4">
          <label className="text-sm font-semibold">Title</label>
          <input
            className="p-4 border-2 border-[#2e374a] bg-[#1a1e25] rounded-lg focus:outline-none focus:border-teal-600 transition duration-300"
            type="text"
            name="title"
            placeholder="Title"
          />

          <label className="text-sm font-semibold">Price</label>
          <input
            className="p-4 border-2 border-[#2e374a] bg-[#1a1e25] rounded-lg focus:outline-none focus:border-teal-600 transition duration-300"
            type="number"
            name="price"
            placeholder="Price"
          />

          <label className="text-sm font-semibold">Stock</label>
          <input
            className="p-4 border-2 border-[#2e374a] bg-[#1a1e25] rounded-lg focus:outline-none focus:border-teal-600 transition duration-300"
            type="text"
            name="stock"
            placeholder="Stock"
          />

          <label className="text-sm font-semibold">Color</label>
          <input
            className="p-4 border-2 border-[#2e374a] bg-[#1a1e25] rounded-lg focus:outline-none focus:border-teal-600 transition duration-300"
            type="text"
            name="color"
            placeholder="Color"
          />

          <label className="text-sm font-semibold">Size</label>
          <textarea
            className="p-4 border-2 border-[#2e374a] bg-[#1a1e25] rounded-lg focus:outline-none focus:border-teal-600 transition duration-300"
            name="size"
            placeholder="Size"
          ></textarea>

          <label className="text-sm font-semibold">Category</label>
          <select
            className="p-4 border-2 border-[#2e374a] bg-[#1a1e25] rounded-lg focus:outline-none focus:border-teal-600 transition duration-300"
            name="cat"
          >
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>

          <label className="text-sm font-semibold">Description</label>
          <textarea
            className="p-4 border-2 border-[#2e374a] bg-[#1a1e25] rounded-lg focus:outline-none focus:border-teal-600 transition duration-300"
            name="desc"
            placeholder="Description"
          ></textarea>

          <button className="w-full p-4 bg-teal-600 text-gray-300 font-bold rounded-lg hover:bg-teal-500 transition duration-300">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
