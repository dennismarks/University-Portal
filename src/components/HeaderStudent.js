import React from "react";

function Header() {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-blue-500 p-4">
      <span class="block font-semibold text-xl text-white px-4 tracking-tight">
        Portal
      </span>
      <div class="flex flex-grow items-center w-auto mx-4">
        <a href="/" class="block text-sm text-white hover:text-blue-200 mr-4">
          Explore Courses
        </a>
      </div>
      <a
        href="/user"
        class="block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white"
      >
        Student
      </a>
    </nav>
  );
}

export default Header;
