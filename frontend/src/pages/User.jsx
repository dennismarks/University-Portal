import React, { useContext, useEffect } from "react";
import { UsersContext } from "../context/UsersContext";
import UserInfo from "../components/UserInfo";
import CoursesCard from "../components/CoursesCard";

const User = props => {
  const { fetchUserById, users } = useContext(UsersContext);
  const { id } = props.match.params;
  const user = users[id];

  useEffect(() => {
    fetchUserById(id);
  }, []);

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
      <CoursesCard courses={user.currentCourses} name="Current Courses" />
      <CoursesCard courses={user.takenCourses} name="Taken Courses" />
      <CoursesCard courses={user.plannedCourses} name="Future course" />
    </div>
  );
};

export default User;
