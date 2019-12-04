import React, { useContext, useEffect, useState } from "react";

import AddCourseForm from "../components/AddCourseForm";
import AdminStats from "../components/AdminStats";
import AuthContext from "../context/AuthContext";
import ResourceApproval from "../components/ResourceApproval";
import UserDetails from "../components/UserDetails";
import UserInfo from "../components/UserInfo";
import UsersList from "../components/UsersList";

const Admin = props => {
  const [numCourses, setNumCourses] = useState(null);
  const [numUsers, setNumUsers] = useState(null);
  const [requests, setRequests] = useState(null);
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

    fetch(`/api/v1/course-resource/UofT?status=Pending`)
      .then(res => {
        return res.json();
      })
      .then(res => {
        setRequests(res);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  if (!user) {
    return null;
  }

  return (
    <>
      <AdminStats numUsers={numUsers} numCourses={numCourses} />
      <div className="row-1">
        <AddCourseForm />
      </div>
      <div className="row-2">
        <ResourceApproval requests={requests} />
        <div className="users-container">
          {/* <UsersList /> */}
          <UserDetails />
        </div>
      </div>
    </>
  );
};

export default Admin;
