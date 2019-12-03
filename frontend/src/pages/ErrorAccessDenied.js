import React from "react";

function ErrorNotFound() {
  return (
    <div>
      <section className="bg-gray-200 py-16">
        <div className="flex flex-col lg:flex-row container items-center mx-auto px-4">
          <div className="w-full lg:w-1/2">
            <div className="pb-8">
              <h1 className="font-semibold text-4xl text-gray-700">
                ACCESS DENIED
              </h1>
              <span className="font-normal text-base text-gray-500">
                Someone's trying to get somewhere they aren't supposed to be
              </span>
            </div>
          </div>
          <div className="w-1/2 mb-0 hidden lg:block">
            <img
              alt="404"
              className="h-64 mx-auto"
              src="/img/undraw_access_denied_6w73.svg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ErrorNotFound;
