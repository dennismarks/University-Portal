import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { CircularProgress } from "@material-ui/core";

import * as userService from "../services/user";
import AuthContext from "../context/AuthContext";

const loginSchema = Yup.object({
  username: Yup.string().required(),
  password: Yup.string().required()
});

function Error({ children }) {
  return <p className="text-red-500 text-xs mt-2">{children}</p>;
}

function Login() {
  const {
    auth: { isLoggedIn },
    login
  } = useContext(AuthContext);
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema: loginSchema,
    onSubmit: ({ username, password }) => {
      userService
        .login({ username, password })
        .then(user => {
          login(user);
        })
        .catch(err => {
          if (typeof err === "object") {
            formik.setErrors(err);
          } else {
            alert("An unexpected error occured");
          }
        })
        .finally(() => {
          formik.setSubmitting(false);
        });
    }
  });

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/");
    }
  }, [isLoggedIn]);

  return (
    <div>
      <div className="w-full mx-auto py-10 max-w-md">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto"
          onSubmit={formik.handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border roded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              type="text"
              id="username"
              name="username"
              placeholder="username"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username && (
              <Error>{formik.errors.username}</Error>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:outline-none focus:shadow-outline"
              type="password"
              id="password"
              name="password"
              placeholder="*****************"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <Error>{formik.errors.password}</Error>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              disabled={formik.isSubmitting}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {formik.isSubmitting ? <CircularProgress size={20} /> : "Sign In"}
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
