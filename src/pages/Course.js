import React from "react";

import AsCoursesBox from "../components/AsCoursesBox";
import CourseInfoBox from "../components/CourseInfoBox";
import RedditBox from "../components/RedditBox";
const redditCommentData = require('../utils/reddit.json').data.children;

function Course() {
  return (
    <div>
      <div className="">
        <h1 className="text-4xl font-medium  align-middle text-center my-12">
          CSC309: Programming on the Web
        </h1>
        <div className="flex">
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
          <AsCoursesBox
            prerequisites="STA247H1/​ STA255H1/​ STA257H1/​ PSY201H1/​ ECO227Y1, ( MAT135H1, MAT136H1)/ MAT137Y1/​ MAT157Y1"
            recommendedPreparation="CSC343H1"
            distributionRequirements="Science"
            exclusions="NOTE: Students not enrolled in the Computer Science Major or Specialist program at the UTSG, UTM, or UTSC are limited to a maximum of three 300-/400-level CSC/ECE half-courses."
            breadthRequirements="The Physical and Mathematical Universes (5)"
          />
        </div>
        <div className="flex">
          <RedditBox redditData={redditCommentData} />
        </div>
      </div>
    </div>
  );
}

export default Course;
