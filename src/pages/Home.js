import React from "react";

import CourseMiniCard from "../components/CourseMiniCard";
import CourseSearchBar from "../components/CourseSearchBar";
import CourseSearchChip from "../components/CourseSearchChip";

function Home() {
  return (
    <div>
      <section className="bg-gray-200 py-16">
        <div className="flex flex-col lg:flex-row container items-center mx-auto px-4">
          <div className="w-full lg:w-1/2">
            <div className="pb-8">
              <h1 className="font-light text-3xl text-gray-700">
                Find the Courses you Need
              </h1>
              <span className="font-normal text-sm text-gray-500">
                Search by course code, title, or department
              </span>
            </div>
            <CourseSearchBar shouldAutoFocus={true} />
          </div>
          <div className="w-1/2 mb-0 hidden lg:block">
            <img
              alt="girl searching"
              className="h-64 mx-auto"
              src="/img/undraw_searching_p5ux.svg"
            />
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 mb-8">
          <h2 className="text-xl font-normal text-gray-700 mb-4">
            Top Rated Courses
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
        <div className="container mx-auto px-4 mb-8">
          <h2 className="text-xl font-normal text-gray-700 mb-4">
            By Department
          </h2>
          <div className="flex flex-row overflow-x-auto">
            <CourseSearchChip>Computer Science</CourseSearchChip>
            <CourseSearchChip>Statistics</CourseSearchChip>
            <CourseSearchChip>Humanities</CourseSearchChip>
            <CourseSearchChip>Health Sciences</CourseSearchChip>
            <CourseSearchChip>Medical Sciences</CourseSearchChip>
            <CourseSearchChip>Civil Engineering</CourseSearchChip>
          </div>
        </div>
        <div className="container mx-auto px-4 mb-8">
          <h2 className="text-xl font-normal text-gray-700 mb-4">
            By Breadth Requirement
          </h2>
          <div className="flex flex-row flex-wrap">
            <CourseSearchChip
              className="flex-auto"
              color="teal"
              variant="light"
              value="Creative and Cultural Representations"
            >
              1 - Creative and Cultural Representations
            </CourseSearchChip>
            <CourseSearchChip
              className="flex-auto"
              color="indigo"
              variant="light"
              value="Thought, Belief, and Behaviour"
            >
              2 - Thought, Belief, and Behaviour
            </CourseSearchChip>
            <CourseSearchChip
              className="flex-auto"
              color="pink"
              variant="light"
              value="Society and Its Institutions"
            >
              3 - Society and Its Institutions
            </CourseSearchChip>
            <CourseSearchChip
              className="flex-auto"
              color="yellow"
              variant="light"
              value="Living Things and Their Environment"
            >
              4 - Living Things and Their Environment
            </CourseSearchChip>
            <CourseSearchChip
              className="flex-auto"
              color="orange"
              variant="light"
              value="The Physical and Mathematical Universes"
            >
              5 - The Physical and Mathematical Universes
            </CourseSearchChip>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
