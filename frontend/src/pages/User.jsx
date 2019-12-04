import React, { useContext, useEffect, useState } from "react";
import { UsersContext } from "../context/UsersContext";
import UserInfo from "../components/UserInfo";
import CoursesCard from "../components/CoursesCard";

const User = props => {
  const { fetchUserById, users } = useContext(UsersContext);
  const { id } = props.match.params;
  const user = users[id];
  const [currentCourses, setCurrentCourses] = useState([]);
  const [takenCourses, setTakenCourses] = useState([]);
  const [plannedCourses, setPlannedCourses] = useState([]);

  const setAnyCourses = (funcSet, coursesArr) => {
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
        // console.log(courseArr) // returns []
      })
      .catch(error => {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchUserById(id);
    if (user) {
      setAnyCourses(setCurrentCourses, user.currentCourses);
      setAnyCourses(setTakenCourses, user.takenCourses);
      setAnyCourses(setPlannedCourses, user.plannedCourses);
    }
  }, []);

  if (!user) {
    return null;
  }
  console.log(currentCourses.length == 0 )
  return (
    <div className="main">
      <UserInfo
        userInfo={{
          name: user.username,
          university: "University of Toronto",
          program: "Computer Science"
        }}
      />
      {currentCourses.length != 0 ?( <CoursesCard coursesArr={currentCourses} name="Current Courses" /> ): null}
      {takenCourses.length != 0  ? (<CoursesCard coursesArr={takenCourses} name="Taken Courses" /> ): null}
      {plannedCourses.length != 0  ? (<CoursesCard coursesArr={plannedCourses} name="Future course" /> ): null}
    </div>
  );
};

export default User;
