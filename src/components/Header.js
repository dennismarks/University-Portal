import React from "react";

function Header(props) {
  const role = props.role;
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-4">
      <span className="block font-semibold text-xl text-white px-4 tracking-tight">
        Portal
      </span>
      <div className="flex flex-grow items-center w-auto mx-4">
        <a
          href="/"
          className="block text-sm text-white hover:text-blue-200 mr-4"
        >
          Explore Courses
        </a>
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
        <a
          href="/admin"
          className="block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white"
        >
          Admin
        </a>
      );
    case "student":
      return (
        <a
          href="/user"
          className="block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white"
        >
          Student
        </a>
      );
    default:
      return (
        <a
          href="/login"
          className="block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white"
        >
          Login
        </a>
      );
  }
}

export default Header;
