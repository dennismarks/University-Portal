import React from "react";

import CourseMiniCard from "../components/CourseMiniCard";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <div>
      <section className="bg-gray-200 py-16">
        <div class="flex container items-center mx-auto px-4">
          <div className="w-1/2">
            <div className="pb-8">
              <h1 className="font-light text-3xl text-gray-700">
                Find the Courses you Need
              </h1>
              <span className="font-normal text-sm text-gray-500">
                Search by course code, title, or department
              </span>
            </div>
            <SearchBar />
          </div>
          <div className="w-1/2">
            <img
              alt="girl searching"
              className="h-64 mx-auto"
              src="/img/undraw_searching_p5ux.svg"
            />
          </div>
        </div>
      </section>
      <section className="py-16">
        <div class="container mx-auto px-4">
          <h2 className="text-xl font-normal text-gray-700 mb-4">
            Top Rated Courses
          </h2>
          <div className="mb-8 flex">
            <CourseMiniCard
              courseCode="CSC309"
              courseLink="#"
              courseName="Programming on the Web"
              description="An introduction to software development on the web. Concepts underlying the development of programs that operate on the web; survey of technological alternatives; greater depth on some technologies. Operational concepts of the internet and the web, static client content, dynamic client content, dynamically served content, n-tiered architectures, web development processes, and security on the web. Assignments involve increasingly more complex web-based programs. Guest lecturers from leading e-commerce firms will describe the architecture and operation of their web sites."
              tags={[
                { name: "Arts & Sci.", link: "#" },
                { name: "Computer Science", link: "#" }
              ]}
            />
            <CourseMiniCard
              courseCode="CSC301"
              courseLink="#"
              courseName="Introduction to Software Engineering"
              description="An introduction to software development on the web. Concepts underlying the development of programs that operate on the web; survey of technological alternatives; greater depth on some technologies. Operational concepts of the internet and the web, static client content, dynamic client content, dynamically served content, n-tiered architectures, web development processes, and security on the web. Assignments involve increasingly more complex web-based programs. Guest lecturers from leading e-commerce firms will describe the architecture and operation of their web sites."
              tags={[
                { name: "Arts & Sci.", link: "#" },
                { name: "Computer Science", link: "#" }
              ]}
            />
          </div>
        </div>
        <div class="container mx-auto px-4">
          <h2 className="text-xl font-normal text-gray-700 mb-4">
            By Department
          </h2>
        </div>
        <div class="container mx-auto px-4">
          <h2 className="text-xl font-normal text-gray-700 mb-4">
            By Breadth Requirement
          </h2>
        </div>
      </section>
    </div>
  );
}

export default Home;
