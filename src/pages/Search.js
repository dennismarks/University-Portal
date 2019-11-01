import React from "react";

import CourseMiniCard from "../components/CourseMiniCard";
import CourseSearchBar from "../components/CourseSearchBar";
import useQueryParams from "../utils/useQueryParams";

function Search() {
  const queryParams = useQueryParams();

  const searchQuery = queryParams.get("q");

  return (
    <div>
      <section className="bg-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="w-full">
            <CourseSearchBar
              initialValue={searchQuery}
              shouldAutoFocus={false}
            />
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 mb-8">
          <h2 className="text-xl font-normal text-gray-700 mb-4">
            Search Results
          </h2>
          <div className="mb-8 flex overflow-x-auto">
            <CourseMiniCard
              courseCode="CSC309"
              courseLink="/course/csc309"
              courseName="Programming on the Web"
              description="An introduction to software development on the web. Concepts underlying the development of programs that operate on the web; survey of technological alternatives; greater depth on some technologies. Operational concepts of the internet and the web, static client content, dynamic client content, dynamically served content, n-tiered architectures, web development processes, and security on the web. Assignments involve increasingly more complex web-based programs. Guest lecturers from leading e-commerce firms will describe the architecture and operation of their web sites."
              tags={[
                { name: "Arts & Sci.", link: "#" },
                { name: "Computer Science", link: "#" }
              ]}
            />
            <CourseMiniCard
              courseCode="CSC301"
              courseLink="/course/csc301"
              courseName="Introduction to Software Engineering"
              description="An introduction to software development on the web. Concepts underlying the development of programs that operate on the web; survey of technological alternatives; greater depth on some technologies. Operational concepts of the internet and the web, static client content, dynamic client content, dynamically served content, n-tiered architectures, web development processes, and security on the web. Assignments involve increasingly more complex web-based programs. Guest lecturers from leading e-commerce firms will describe the architecture and operation of their web sites."
              tags={[
                { name: "Arts & Sci.", link: "#" },
                { name: "Computer Science", link: "#" }
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Search;
