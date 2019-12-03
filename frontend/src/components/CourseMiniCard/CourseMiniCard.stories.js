import React from "react";

import CourseMiniCard from ".";

export default {
  title: "CourseMiniCard"
};

export const example = () => (
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
);
