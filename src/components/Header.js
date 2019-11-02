import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const role = props.role;
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-4">
      <span className="block font-semibold text-xl text-white px-4 tracking-tight">
        Portal
      </span>
      <div className="flex flex-grow items-center w-auto mx-4">
        <Link
          to="/"
          className="block text-sm text-white hover:text-blue-200 mr-4"
        >
          Explore Courses
        </Link>
      </div>
      <RoleDisplay role={role} />
    </nav>
  );
}

function RoleDisplay(props) {
  const role = props.role;
  switch (role) {
    case "admin":
      return (
        <Link
          to="/admin"
          className="block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white"
        >
          Admin
        </Link>
      );
    case "student":
      return (
        <Link
          to="/user"
          className="block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white"
        >
          Student
        </Link>
      );
    default:
      return (
        <Link
          to="/login"
          className="block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white"
        >
          Login
        </Link>
      );
  }
}

export default Header;
