import React from "react";

const LoginPage = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <form
        action=""
        className="gap-8 items-center bg-slate-800 p-12 rounded-lg w-[500px] h-[500px] flex flex-col justify-center"
      >
        <h1 className="text-center font-bold text-2xl">Login</h1>
        <input
          type="text"
          placeholder="username"
          className="p-8 bg-slate-900 border-2 border-[#2e374a] rounded-md text-gray-300"
        />
        <input
          type="password"
          placeholder=""
          className="p-8 bg-slate-900 border-2 border-[#2e374a] rounded-md text-gray-300"
        />
        <button className="p-8 bg-teal-600 text-gray-300 font-bold cursor-pointer rounded-lg">
          Logout
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
