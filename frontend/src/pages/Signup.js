import classnames from "classnames";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

import { CircularProgress } from "@material-ui/core";

import * as userService from "../services/user";

const signupSchema = Yup.object({
  username: Yup.string()
    .min(6, "Must be 6 characters or more")
    .matches(/^[a-zA-Z0-9\-]*$/, "Must contain only letters, numbers, or dash")
    .required(),
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string()
    .min(6, "Must be 6 characters or more")
    .required(),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Must confirm password")
});

function Error({ children }) {
  return <p className="text-red-500 text-xs mt-2">{children}</p>;
}

function Signup() {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: ""
    },
    validationSchema: signupSchema,
    onSubmit: ({ username, email, password }) => {
      userService
        .create({ username, email, password })
        .then(user => {
          history.push("/login");
        })
        .catch(err => {
          formik.setErrors(err);
        })
        .finally(() => {
          formik.setSubmitting(false);
        });
    }
  });

  const buttonClass = classnames(
    "bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
    {
      "opacity-50 cursor-not-allowed": formik.isSubmitting
    }
  );
  const inputClass = name =>
    classnames(
      "shadow appearance-none border w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline",
      {
        "border-red-500": name in formik.errors && name in formik.touched
      }
    );

  return (
    <div>
      <div className="w-full mx-auto py-10 max-w-md">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto"
          onSubmit={formik.handleSubmit}
        >
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              className={inputClass("username")}
              name="username"
              type="text"
              id="username"
              placeholder="Username"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username && (
              <Error>{formik.errors.username}</Error>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              className={inputClass("email")}
              name="email"
              type="text"
              id="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <Error>{formik.errors.email}</Error>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              className={inputClass("password")}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <Error>{formik.errors.password}</Error>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="passwordConfirmation"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Confirm Password
            </label>
            <input
              className={inputClass("passwordConfirmation")}
              type="password"
              name="passwordConfirmation"
              id="passwordConfirmation"
              placeholder="Confirm Password"
              onChange={formik.handleChange}
              value={formik.values.passwordConfirmation}
            />
            {formik.touched.passwordConfirmation &&
              formik.errors.passwordConfirmation && (
                <Error>{formik.errors.passwordConfirmation}</Error>
              )}
          </div>
          <div className="flex items-center justify-between mt-8">
            <button
              disabled={formik.isSubmitting}
              type="submit"
              className={buttonClass}
            >
              {formik.isSubmitting ? <CircularProgress size={20} /> : "Sign Up"}
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

export default Signup;
