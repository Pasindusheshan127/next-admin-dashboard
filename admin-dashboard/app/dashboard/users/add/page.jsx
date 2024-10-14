import React from "react";

const AddUserpage = () => {
  return (
    <div>
      <div className="bg-slate-900 p-5 raounded-lg mt-5 ">
        <form
          action=""
          className="flex flex-wrap text-gray-300  mb-6 justify-between"
        >
          <input
            type="text"
            className="p-8 w-[45%] bg-slate-800 text-gray-300 border-2 border-[#2e374a] rounded-md mb-6"
            name="username"
            placeholder="title"
            required
          />
          <input
            type="email"
            className="p-8 w-[45%] bg-slate-800 text-gray-300 border-2 border-[#2e374a] rounded-md mb-6"
            name="email"
            placeholder="email"
            required
          />
          <input
            type="password"
            className="p-8 w-[45%] bg-slate-800 text-gray-300 border-2 border-[#2e374a] rounded-md mb-6"
            name="password"
            placeholder="password"
            required
          />
          <input
            type="phone"
            className="p-8 w-[45%] bg-slate-800 text-gray-300 border-2 border-[#2e374a] rounded-md mb-6"
            name="phone"
            placeholder="phone"
          />
          <select
            name="isAdmin"
            id="isAdmin"
            className="p-8 w-[45%] bg-slate-800 text-gray-300 border-2 border-[#2e374a] rounded-md mb-6"
          >
            <option value={false}>Is Admin</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <select
            name="isActive"
            id="isActive"
            className="p-8 w-[45%] bg-slate-800 text-gray-300 border-2 border-[#2e374a] rounded-md mb-6"
          >
            <option value={true}>Is Active</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <textarea
            name="address"
            id="address"
            rows="6"
            placeholder="Address"
            className="p-8 w-full bg-slate-800 text-gray-300 border-2 border-[#2e374a] rounded-md mb-6"
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

export default AddUserpage;
