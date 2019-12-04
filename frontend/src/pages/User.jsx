import React, { useContext, useEffect, useState } from "react";

import CoursesCard from "../components/CoursesCard";
import { fetchUser } from "../services/user";
import UserInfo from "../components/UserInfo";

const User = props => {
  const [user, setUser] = useState(null)
  const [currentCourses, setCurrentCourses] = useState(null);
  const [takenCourses, setTakenCourses] = useState(null);
  const [plannedCourses, setPlannedCourses] = useState(null);
  
  const { id } = props.match.params;

  function setAnyCourses(funcSet, coursesArr) {
    const courseIdsObj = JSON.stringify({ courseIds: coursesArr });
    fetch(`/api/v1/courses/ids`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: courseIdsObj
    })
      .then(res => {
        return res.json();
      })
      .then(coursesObj => {
        funcSet(coursesObj);
      })
      .catch(error => {
        console.error(error);
      });
  }

  useEffect(() => {
    fetchUser(id)
      .then(user => {
        setUser(user)
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (user) {
      setAnyCourses(setCurrentCourses, user.currentCourses);
      setAnyCourses(setTakenCourses, user.takenCourses);
      setAnyCourses(setPlannedCourses, user.plannedCourses);
    }
  }, [user]);
  
  if (!user) {
    return null;
  }
  
  return (
    <div className="main">
      <UserInfo
        userInfo={{
          name: user.username,
          university: "University of Toronto",
          program: "Computer Science"
        }}
      />
      {currentCourses && currentCourses.length && (
        <CoursesCard courses={currentCourses} name="Current Courses" />
      )}
      {takenCourses && takenCourses.length !== 0 && (
        <CoursesCard courses={takenCourses} name="Taken Courses" />
      )}
      {plannedCourses && plannedCourses.length !== 0 && (
        <CoursesCard courses={plannedCourses} name="Future course" />
      )}
    </div>
  );
};

export default User;
