import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h2 className="text-3xl font-bold mb-6">Login to Slinkr</h2>
      <form className="flex flex-col gap-4 w-80">
        <input
          type="email"
          placeholder="Email"
          className="p-2 rounded bg-gray-800 border border-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 rounded bg-gray-800 border border-gray-700"
        />
        <button
          type="submit"
          className="bg-purple-600 py-2 rounded hover:bg-purple-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
