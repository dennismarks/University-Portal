import React, { useContext, useEffect, useState } from "react";

import AuthContext from "../context/AuthContext";
import AdminDashboard from "../components/AdminDashboard.jsx";
import AddCourseForm from "../components/AddCourseForm";
import UserInfo from "../components/UserInfo";
import UsersList from "../components/UsersList";
import UserDetails from "../components/UserDetails";
import ResourceApproval from "../components/ResourceApproval";

const Admin = props => {
  const [numCourses, setNumCourses] = useState(null);
  const [numUsers, setNumUsers] = useState(null);
  const {
    auth: { user }
  } = useContext(AuthContext);

  useEffect(() => {
    fetch(`/api/v1/courses?limit=1`)
      .then(res => {
        const numCourses = res.headers.get("X-Total-Count");
        setNumCourses(numCourses);
      })
      .catch(error => {
        console.error(error);
      });

    fetch(`/api/v1/user?limit=1`)
      .then(res => {
        const numUsers = res.headers.get("X-Total-Count");
        setNumUsers(numUsers);
      })
      .catch(error => {
        console.error(error);
      });
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
      <div className="row-1">
        <AdminDashboard numUsers={numUsers} numCourses={numCourses} />
        <AddCourseForm />
      </div>
      <div className="row-2">
        <ResourceApproval />
        <div className="users-container">
          {/* <UsersList />
          <UserDetails /> */}
        </div>
      </div>
    </div>
  );
};

export default Admin;
