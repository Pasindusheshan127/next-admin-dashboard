import { addProduct } from "@/lib/actions";
import React from "react";

const AddProductsPage = () => {
  return (
    <div className="min-h-screen p-5 bg-[#151c2c]">
      <div className="bg-slate-900 p-8 rounded-lg mt-5 shadow-lg">
        <form
          action={addProduct}
          className="flex flex-wrap text-gray-300 justify-between"
        >
          {/* Title Input */}
          <input
            type="text"
            className="p-4 w-[45%] bg-transparent text-gray-300 border-2 border-[#2e374a] rounded-md mb-6"
            name="title"
            placeholder="Title"
            required
          />

          {/* Category Selector */}
          <select
            name="cat"
            className="p-4 w-[45%] bg-transparent text-gray-300 border-2 border-[#2e374a] rounded-md mb-6"
          >
            <option value="general">Choose a Category</option>
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
          </select>

          {/* Price Input */}
          <input
            type="number"
            placeholder="Price"
            name="price"
            className="p-4 w-[45%] bg-transparent text-gray-300 border-2 border-[#2e374a] rounded-md mb-6"
            required
          />

          {/* Stock Input */}
          <input
            type="number"
            placeholder="Stock"
            name="stock"
            className="p-4 w-[45%] bg-transparent text-gray-300 border-2 border-[#2e374a] rounded-md mb-6"
            required
          />

          {/* Color Input */}
          <input
            type="text"
            placeholder="Color"
            name="color"
            className="p-4 w-[45%] bg-transparent text-gray-300 border-2 border-[#2e374a] rounded-md mb-6"
          />

          {/* Size Input */}
          <input
            type="text"
            placeholder="Size"
            name="size"
            className="p-4 w-[45%] bg-transparent text-gray-300 border-2 border-[#2e374a] rounded-md mb-6"
          />

          {/* Description Textarea */}
          <textarea
            name="desc"
            rows="6"
            placeholder="Description"
            className="p-4 w-full bg-transparent text-gray-300 border-2 border-[#2e374a] rounded-md mb-6"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-4 bg-teal-700 font-bold text-gray-300 rounded-md hover:bg-teal-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductsPage;
