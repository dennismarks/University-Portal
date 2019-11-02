import React, { useContext } from "react";
import { UsersContext } from "../context/UsersContext";
import UserInfo from "../components/UserInfo";
import CoursesCard from "../components/CoursesCard";

const User = props => {
  const usersContext = useContext(UsersContext);
  const id = props.match.params.id;
  const user = usersContext.users[id];

  return (
    <div>
      <div className="main">
        <UserInfo userInfo={user.userInfo}></UserInfo>
        <CoursesCard
          courses={user.courses.currentCourses}
          toRender={user.courses.currentCourses.length}
          name="Current Courses"
        ></CoursesCard>
        <CoursesCard
          courses={user.courses.takenCourses}
          toRender={user.courses.takenCourses.length}
          name="Taken Courses"
        ></CoursesCard>
        <CoursesCard
          courses={user.courses.toTakeCourses}
          toRender={user.courses.toTakeCourses.length}
          name="Future course"
        ></CoursesCard>
      </div>
    </div>
  );
};

export default User;
