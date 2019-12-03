import React from "react";

import CourseSearchBar from "../components/CourseSearchBar";

function ErrorNotFound() {
  return (
    <div>
      <section className="bg-gray-200 py-16">
        <div className="flex flex-col lg:flex-row container items-center mx-auto px-4">
          <div className="w-full lg:w-1/2">
            <div className="pb-8">
              <h1 className="font-semibold text-4xl text-gray-700">
                This is not the web page you are looking for.
              </h1>
            </div>
          </div>
          <div className="w-1/2 mb-0 hidden lg:block">
            <img
              alt="404"
              className="h-64 mx-auto"
              src="/img/undraw_page_not_found_su7k.svg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ErrorNotFound;
