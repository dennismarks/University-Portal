import React from "react";

import AsCoursesBox from "../components/AsCoursesBox";
import CourseInfoBox from "../components/CourseInfoBox";
import RedditBox from "../components/RedditBox";

import Header from "../components/Header";

function Course(props) {
  return (
    <div>
      <Header />
      <div className="">
        <h1 className="text-4xl font-medium  align-middle text-center my-12">
          CSC309: Programming on the Web
        </h1>
        <CourseInfoBox
          courseDescription="An introduction to software development on the web. Concepts
              underlying the development of programs that operate on the web;
              survey of technological alternatives; greater depth on some
              technologies. Operational concepts of the internet and the web,
              static client content, dynamic client content, dynamically served
              content, n-tiered architectures, web development processes, and
              security on the web. Assignments involve increasingly more complex
              web-based programs. Guest lecturers from leading e-commerce firms
              will describe the architecture and operation of their web sites."
        />
      </div>
    </div>
  );
}

export default Course;
