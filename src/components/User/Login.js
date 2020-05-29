import React from 'react';

const UserLogin = ({ changeHandler, loginHandler, createAccountHandler }) => {
  return (
    <div className="w-full max-w-md">
      <form
        onSubmit={loginHandler}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div>
          <h5 className="text-3xl text-gray-700">Check into your account</h5>
          <hr className="mt-2 mb-2" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="email"
            type="email"
            onChange={changeHandler}
          />
        </div>
        <div className="mb-8">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="password"
            type="password"
            onChange={changeHandler}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
          <button
            onClick={createAccountHandler}
            type="button"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            Create a new account
          </button>
        </div>
        <div className="mt-5">
          <p className="text-teal-500 text-center">Forget your password?</p>
        </div>
      </form>
    </div>
  );
};

export default UserLogin;
