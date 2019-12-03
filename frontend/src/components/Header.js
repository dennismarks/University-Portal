import { Link, useLocation } from "react-router-dom";
import React, { useContext, useState, useRef } from "react";

import useOnClickOutside from "../utils/useOnClickOutside";
import AuthContext from "../context/AuthContext";
import { ROLES } from "../constants/auth";
import { UsersContext } from "../context/UsersContext";
import CourseSearchBar from "../components/CourseSearchBar";

function Header() {
  const ref = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    auth: { isLoggedIn, user }
  } = useContext(AuthContext);

  useOnClickOutside(ref, () => setIsMenuOpen(false));

  function handleAvatarClick() {
    setIsMenuOpen(true);
  }

  const menuLinks = [
    user && user._id && ["Profile", `/user/${user._id}`],
    user && user.role === ROLES.ADMIN && ["Admin", "/admin"],
    ["Logout", "/logout"]
  ].filter(Boolean);

  let location = useLocation();
  let condition =
    location.pathname !== "/" && !location.pathname.includes("/search");
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-4">
      <Link
        to="/"
        className="block font-semibold text-xl text-white px-4 tracking-tight"
      >
        Portal
      </Link>
      <div className="w-full lg:w-1/2">
        {condition && <CourseSearchBar shouldAutoFocus={true} />}
      </div>
      {isLoggedIn ? (
        <div className="relative">
          <button
            className="block h-10 w-10 rounded-full overflow-hidden focus:outline-none focus:border-white"
            onClick={handleAvatarClick}
          >
            <img
              alt={user.name || ""}
              className="h-full w-fill object-cover"
              src={user.img || "/img/avatar-default.png"}
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
