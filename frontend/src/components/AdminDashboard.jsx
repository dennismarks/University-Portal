import React, { useContext } from "react";
import { CoursesContext } from "../context/CoursesContext";
import { UsersContext } from "../context/UsersContext";

const AddminDashboard = ({ numUsers, numCourses }) => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>
        Number of users: <strong>{numUsers}</strong>
        <br />
        Number of courses: <strong>{numCourses}</strong>
      </p>
    </div>
  );
};

export default AddminDashboard;
