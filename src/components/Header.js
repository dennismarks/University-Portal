import { Link } from "react-router-dom";
import React, { useContext, useState, useRef } from "react";

import useOnClickOutside from "../utils/useOnClickOutside";
import AuthContext from "../context/AuthContext";
import { ROLES } from "../constants/auth";

function Header() {
  const ref = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    auth: { isLoggedIn, role, userId }
  } = useContext(AuthContext);

  useOnClickOutside(ref, () => setIsMenuOpen(false));

  function handleAvatarClick() {
    setIsMenuOpen(true);
  }

  const menuLinks = [
    ["Profile", `/user/${userId}`],
    role === ROLES.ADMIN && ["Admin", "/admin"],
    ["Logout", "/logout"]
  ].filter(Boolean);

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
      {isLoggedIn ? (
        <div className="relative">
          <button
            className="block h-10 w-10 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white"
            onClick={handleAvatarClick}
          >
            <img
              alt="avatar"
              className="h-full w-fill object-cover"
              src="https://picsum.photos/id/237/100"
            />
          </button>
          {isMenuOpen && (
            <div
              ref={ref}
              className="absolute right-0 overflow-hidden mt-2 py-2 w-24 bg-white rounded-lg shadow-xl"
            >
              {menuLinks.map(([label, url]) => (
                <Link
                  className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                  to={url}
                  key={url}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        <Link
          to="/login"
          className="block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white"
        >
          Login
        </Link>
      )}
    </nav>
  );
}

export default Header;
