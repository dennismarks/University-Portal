import React, { useContext, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import { ROLES } from "../constants/auth";
import AuthContext from "../context/AuthContext";

function Login() {
  const {
    auth: { isLoggedIn },
    setAuth
  } = useContext(AuthContext);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/");
    }
  });

  function updateID(e) {
    setId(e.target.value);
  }

  function updatePassword(e) {
    setPassword(e.target.value);
  }

  function checkCredentials(e) {
    e.preventDefault();

    //admin
    if (id === "admin" && password === "admin") {
      setAuth({ isLoggedIn: true, userId: 0, role: ROLES.ADMIN });
      history.push("/");
    }

    //student
    else if (id === "student" && password === "student") {
      setAuth({ isLoggedIn: true, userId: 1, role: ROLES.STUDENT });
      history.push("/");
    } else {
      alert("Wrong Credentials");
    }
  }
  return (
    <div>
      <div className="w-full mx-auto py-10 max-w-md">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto"
          onSubmit={checkCredentials}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border roded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              un
              type="text"
              id="username"
              placeholder="username"
              value={id}
              onChange={updateID}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:outline-none focus:shadow-outline"
              type="password"
              id="password"
              placeholder="*****************"
              value={password}
              onChange={updatePassword}
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Sign In
            </button>
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              to="/forgot"
            >
              Forgot Password ?
            </Link>
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              to="/signup"
            >
              Create Account
            </Link>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy; 2019 Portal.All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Login;
