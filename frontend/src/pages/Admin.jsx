import React, { useContext } from "react";

import AuthContext from "../context/AuthContext";
import AdminDashboard from "../components/AdminDashboard.jsx";
import AddCourseForm from "../components/AddCourseForm";
import UserInfo from "../components/UserInfo";
import UsersList from "../components/UsersList";
import UserDetails from "../components/UserDetails";
import ResourceApproval from "../components/ResourceApproval";

const Admin = props => {
  const {
    auth: { user }
  } = useContext(AuthContext);

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
        <AdminDashboard />
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
