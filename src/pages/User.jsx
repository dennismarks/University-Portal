import React, { useContext } from "react";
import { UsersContext } from "../context/UsersContext";
import UserInfo from "../components/UserInfo";
import CoursesCard from "../components/CoursesCard";

const User = props => {
  // this user would have been obtained from an external source using
  // the passed id from the url parameter
  // but instead this user is located inside the Context
  const usersContext = useContext(UsersContext);
  const id = props.match.params.id;
  const user = usersContext.users[id];

  return (
    <div>
      <div className="main">
        <UserInfo userInfo={user.userInfo}></UserInfo>
        <CoursesCard
          courses={user.courses.currentCourses}
          name="Current Courses"
        ></CoursesCard>
        <CoursesCard
          courses={user.courses.takenCourses}
          name="Taken Courses"
        ></CoursesCard>
        <CoursesCard
          courses={user.courses.toTakeCourses}
          name="Future course"
        ></CoursesCard>
      </div>
    </div>
  );
};

export default User;
