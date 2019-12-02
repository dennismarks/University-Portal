import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import AuthContext from "../context/AuthContext";
import AsCoursesBox from "../components/AsCoursesBox";
import CourseInfoBox from "../components/CourseInfoBox";
import RedditBox from "../components/RedditBox";
import CourseFilesBox from "../components/CourseFilesBox";
import CourseCommentsBox from "../components/CourseCommentsBox";
import { ROLES } from "../constants/auth";
import useMaxAPI from "../utils/useMaxAPI";
// raw reddit api call acting as a json file
// const redditCommentData = require("../utils/reddit.json").data;

function Course() {
  const { courseCode } = useParams();

  const course = useMaxAPI(courseCode);

  const {
    auth: { role }
  } = useContext(AuthContext);

  const canUserMakeEdits = role === ROLES.STUDENT || role === ROLES.ADMIN;

  if (!course) {
    return <strong>LOADING</strong>;
  }
  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-medium  align-middle text-center my-6">
          {course.code}: {course.info.title}
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
          <CourseInfoBox courseDescription={course.info.description} />
          <AsCoursesBox
            prerequisites={course.info.prerequisites}
            recommendedPreparation={
              course.info.recPrep || "No recommended preparation"
            }
            distributionRequirements={course.info.distribution}
            exclusions={course.info.exclusions}
            breadthRequirements={course.info.breadthReqs}
          />
        </div>
        <div className="flex">
          <RedditBox redditData={course.redditComments} />
          <CourseFilesBox canSubmitFiles={canUserMakeEdits} />
        </div>
        <CourseCommentsBox />
      </div>
    </div>
  );
}

export default Course;
