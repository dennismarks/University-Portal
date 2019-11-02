import React, { useContext } from "react";
import { CoursesContext } from "../context/CoursesContext";
import { UsersContext } from "../context/UsersContext";

const AddminDashboard = p => {
  const coursesContext = useContext(CoursesContext);
  const usersContext = useContext(UsersContext);

  const { courses } = coursesContext;
  const { users } = usersContext;

  return (
    <div className="dashboard">
      <h1>Dashboard:</h1>
      <p>
        Number of users: <strong>{users.length}</strong>
        <br />
        Number of courses: <strong>{courses.length}</strong>
      </p>
    </div>
  );
};

export default AddminDashboard;
