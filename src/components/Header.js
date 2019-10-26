import React from "react";

function Header() {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-blue-500 p-2">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <label class="font-semibold text-xl px-4 tracking-tight">Portal</label>
        </div>
        <div class="block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
                <a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-200 mr-4">
                    Home
                </a>
            </div>
        </div>
        <div>
            <a href="/login" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0">
                Login
            </a>
        </div>
        






    </nav>
  );
}

export default Header;
