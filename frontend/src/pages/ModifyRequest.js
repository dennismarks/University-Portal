import React from "react";

function Login() {
  return (
    <div>
      <div className="w-full mx-auto py-10 max-w-xl">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Course
            </label>
            <input
              className="shadow appearance-none border roded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              un
              type="text"
              id="courseRequest"
              placeholder="ex: CSC309"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Request
            </label>
            <input
              className="shadow appearance-none border roded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              un
              type="text"
              id="request"
              placeholder="Request to add course website for 2019..."
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Submit
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2019 Portal. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Login;
