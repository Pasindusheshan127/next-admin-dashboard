import React from "react";

const LoginPage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-slate-800">
      <form
        action=""
        className="gap-6 items-center bg-slate-800 p-10 rounded-xl shadow-lg w-[400px] flex flex-col justify-center"
      >
        <h1 className="text-center font-extrabold text-3xl text-gray-200">
          Login
        </h1>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-4 bg-slate-900 border-2 border-[#2e374a] rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 bg-slate-900 border-2 border-[#2e374a] rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <button className="w-full py-4 bg-teal-600 text-gray-300 font-bold rounded-lg hover:bg-teal-500 transition-all duration-300 ease-in-out transform hover:scale-105">
          Login
        </button>
        <span className="text-sm text-gray-400 mt-4 hover:underline cursor-pointer">
          Forgot Password?
        </span>
      </form>
    </div>
  );
};

export default LoginPage;
