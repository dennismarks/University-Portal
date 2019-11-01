import React, { useState } from "react";

import { useHistory } from "react-router-dom";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

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
      localStorage.setItem("role", "admin");
      history.push("/");
    }

    //student
    else if (id === "student" && password === "student") {
      localStorage.setItem("role", "student");
      history.push("/");
    } else {
      alert("Wrong Credentials");
    }
  }
  return (
    <div>
      <div class="w-full mx-auto py-10 max-w-md">
        <form
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto"
          onSubmit={checkCredentials}
        >
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Username{" "}
            </label>{" "}
            <input
              class="shadow appearance-none border roded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              un
              type="text"
              id="username"
              placeholder="username"
              value={id}
              onChange={updateID}
            />{" "}
          </div>{" "}
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Password{" "}
            </label>{" "}
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:outline-none focus:shadow-outline"
              type="password"
              id="password"
              placeholder="*****************"
              value={password}
              onChange={updatePassword}
            />{" "}
          </div>{" "}
          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Sign In{" "}
            </button>{" "}
            <a
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/forgot"
            >
              Forgot Password ?
            </a>{" "}
            <a
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/signup"
            >
              Create Account{" "}
            </a>{" "}
          </div>{" "}
        </form>{" "}
        <p class="text-center text-gray-500 text-xs">
          & copy; 2019 Portal.All rights reserved.{" "}
        </p>{" "}
      </div>{" "}
    </div>
  );
}

export default Login;
