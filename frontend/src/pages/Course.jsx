import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AuthContext from "../context/AuthContext";
import AsCoursesBox from "../components/AsCoursesBox";
import CourseInfoBox from "../components/CourseInfoBox";
import RedditBox from "../components/RedditBox";
import CourseFilesBox from "../components/CourseFilesBox";
import CourseCommentsBox from "../components/CourseCommentsBox";
import { ROLES } from "../constants/auth";

import "../stylesheets/course.css";
// raw reddit api call acting as a json file
// const redditCommentData = require("../utils/reddit.json").data;

function Course() {
  const { courseCode } = useParams();

  // const course = useMaxAPI(courseCode);
  const [course, setCourse] = useState(null);
  useEffect(() => {
    fetch(`/api/v1/courses/UofT/${courseCode}`)
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

  const addCurrentCourse = () => {
    fetch(`/api/v1/courses/UofT/user/add-current/course/${course._id}`, {
      method: 'POST'
    })
    .then(res => {
      return res.json();
    })
    .then(currentCourses => {
      console.log(currentCourses);
    })
    .catch(error => {
      console.error(error);
    });
  }

  const addTakenCourse = () => {
    fetch(`/api/v1/courses/UofT/user/add-taken/course/${course._id}`)
    .then(res => {
      return res.json();
    })
    .then(takenCourses => {
      console.log(takenCourses);
    })
    .catch(error => {
      console.error(error);
    });
  }

  const addPlannedCourse = () => {
    fetch(`/api/v1/courses/UofT/user/add-planned/course/${course._id}`)
    .then(res => {
      return res.json();
    })
    .then(plannedCourses => {
      console.log(plannedCourses);
    })
    .catch(error => {
      console.error(error);
    });
  }

  const {
    auth: { user }
  } = useContext(AuthContext);

  const canUserMakeEdits =
    user && (user.role === ROLES.STUDENT || user.role === ROLES.ADMIN);

  if (!course) {
    return <strong>LOADING</strong>;
  }
  return (
    <div id="course" className="courseMain">
      <div className="name">
        <h1>{course.code}</h1>
        <h2>{course.info.title}</h2>
      </div>
      {canUserMakeEdits && (
        <div className="add">
          <button onClick={addCurrentCourse} className="btn btn-blue rounded bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mx-2">
            Add To Current Courses
          </button>
          <button onClick={addTakenCourse} className="btn btn-blue rounded bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mx-2">
            Add To Taken Courses
          </button>
          <button onClick={addPlannedCourse} className="btn btn-blue rounded bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mx-2">
            Add To Planned Courses
          </button>
        </div>
      )}
      <div className="doubleDiv">
        <CourseInfoBox courseDescription={course.info.description} />
        <AsCoursesBox
          prerequisites={course.info.prerequisites}
          recommendedPreparation={
            course.info.recPrep || "No recommended preparation"
          }
          exclusions={course.info.exclusions}
          breadthRequirements={course.info.breadthReqs}
        />
      </div>
      <div>
        <RedditBox
          redditData={course.redditComments}
          courseCode={course.code}
        />
      </div>
      <div>
        <CourseCommentsBox
          commentData={course.courseReviews}
          averageRating={course.averageRating}
          courseCode={course.code}
        />
      </div>
      <div>
        <CourseFilesBox
          canSubmitFiles={canUserMakeEdits}
          courseResourcesList={course.courseResources}
          courseCode={course.code}
        />
      </div>
    </div>
  );
}

export default Course;
