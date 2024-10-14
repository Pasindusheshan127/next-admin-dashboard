import React from "react";

const AddProductspage = () => {
  return (
    <div>
      <div className="bg-slate-900 p-5 raounded-lg mt-5 ">
        <form
          action=""
          className="flex flex-wrap text-gray-300  mb-6 justify-between"
        >
          <input
            type="text"
            className="p-8 w-[45%] bg-transparent text-gray-300 border-2 border-[#2e374a] rounded-md mb-6"
            name="title"
            placeholder="title"
            required
          />
          <select
            name="cat"
            id="cat"
            className="p-8 w-[45%] bg-transparent text-gray-300 border-2 border-[#2e374a] rounded-md mb-6"
          >
            <option value="general">Choose a Category</option>
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
          </select>
          <input
            type="number"
            placeholder="price"
            name="price"
            className="p-8 w-[45%] bg-transparent text-gray-300 border-2 border-[#2e374a] rounded-md mb-6"
          />
          <input
            type="number"
            placeholder="stock"
            name="stock"
            className="p-8 w-[45%] bg-transparent text-gray-300 border-2 border-[#2e374a] rounded-md mb-6"
          />
          <input
            type="text"
            placeholder="color"
            name="color"
            className="p-8 w-[45%] bg-transparent text-gray-300 border-2 border-[#2e374a] rounded-md mb-6"
          />
          <input
            type="text"
            placeholder="size"
            name="size"
            className="p-8 w-[45%] bg-transparent text-gray-300 border-2 border-[#2e374a] rounded-md mb-6"
          />
          <textarea
            name="desc"
            id="desc"
            rows="16"
            placeholder="description"
            className="p-8 w-full bg-transparent text-gray-300 border-2 border-[#2e374a] rounded-md mb-6"
          ></textarea>

          <button
            type="submit"
            className="w-full p-7 bg-teal-700 font-bold text-gray-300 border-none rounded-md cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductspage;
