import React from "react";
import "../stylesheets/course.css";

function CourseInfoBox(props) {
  return (
    <div id="course" className="course-container">
      <h2> Course Info</h2>
      <p>{props.courseDescription}</p>
    </div>
  );
}

export default CourseInfoBox;
