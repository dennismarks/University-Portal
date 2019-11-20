import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import AuthContext from "../context/AuthContext";
import AsCoursesBox from "../components/AsCoursesBox";
import CourseInfoBox from "../components/CourseInfoBox";
import RedditBox from "../components/RedditBox";
import CourseFilesBox from "../components/CourseFilesBox";
import CourseCommentsBox from "../components/CourseCommentsBox";
import { ROLES } from "../constants/auth";
// raw reddit api call acting as a json file
const redditCommentData = require("../utils/reddit.json").data;

function Course() {
  const { courseCode } = useParams();
  const [course, setCourse] = useState(null);

  const {
    auth: { role }
  } = useContext(AuthContext);

  const canUserMakeEdits = role === ROLES.STUDENT || role === ROLES.ADMIN;

  useEffect(() => {
    fetch(`http://uoft-courseapi.herokuapp.com/get/${courseCode}`)
      .then(res => {
        return res.json();
      })
      .then(courseObj => {
        setCourse(courseObj);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // make api call to get course data
  // const course = {
  //   courseDescription: courseObj.title,
  //   courseCode: courseCode,
  //   courseInfo: {
  //     courseDescription:
  //       "An introduction to software development on the web. Concepts underlying the development of programs that operate on the web;survey of technological alternatives; greater depth on some technologies. Operational concepts of the internet and the web, static client content, dynamic client content, dynamically served content, n-tiered architectures, web development processes, and security on the web. Assignments involve increasingly more complex web-based programs. Guest lecturers from leading e-commerce firms will describe the architecture and operation of their web sites."
  //   },
  //   associatedCourseInfo: {
  //     prerequisites:
  //       "STA247H1/​ STA255H1/​ STA257H1/​ PSY201H1/​ ECO227Y1, ( MAT135H1, MAT136H1)/ MAT137Y1/​ MAT157Y1",
  //     recommendedPreparation: "CSC343H1",
  //     distributionRequirements: "Science",
  //     exclusions:
  //       "NOTE: Students not enrolled in the Computer Science Major or Specialist program at the UTSG, UTM, or UTSC are limited to a maximum of three 300-/400-level CSC/ECE half-courses.",
  //     breadthRequirements: "The Physical and Mathematical Universes (5)"
  //   },
  //   redditDetails: redditCommentData.children
  // };

  if (!course) {
    return <strong>LOADING</strong>;
  }
  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-medium  align-middle text-center my-6">
          {course.courseCode}: {course.title}
        </h1>
        {canUserMakeEdits && (
          <div className="flex justify-center">
            <button className="btn btn-blue rounded bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mx-2">
              Add To Current Courses
            </button>
            <button className="btn btn-blue rounded bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mx-2">
              Add To Taken Courses
            </button>
            <button className="btn btn-blue rounded bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mx-2">
              Add To Planned Courses
            </button>
          </div>
        )}
        <div className="flex">
          <CourseInfoBox courseDescription={course.summary} />
          <AsCoursesBox
            prerequisites={course.prerecquisites}
            recommendedPreparation={
              course.recommendedPreparation || "No recommended preparation"
            }
            distributionRequirements={course.distribution}
            exclusions={course.exclusions}
            breadthRequirements={course.breadth}
          />
        </div>
        <div className="flex">
          {/* <RedditBox redditData={course.redditDetails} /> */}
          <CourseFilesBox canSubmitFiles={canUserMakeEdits} />
        </div>
        <CourseCommentsBox />
      </div>
    </div>
  );
}

export default Course;
