import React, { useContext } from "react";
import { UsersContext } from "../context/UsersContext";
import AdminDashboard from "../components/AdminDashboard.jsx";
import AddCourseForm from "../components/AddCourseForm";
import UserInfo from "../components/UserInfo";
import UsersList from "../components/UsersList";
import UserDetails from "../components/UserDetails";
import ResourceApproval from "../components/ResourceApproval";

const Admin = () => {
  // admin information would have been obtained from an external source
  // using the passed id from the url parameter
  // but instead this user is located inside the Context
  const usersContext = useContext(UsersContext);
  // admin will be located at id=0
  const user = usersContext.users[0];

  return (
    <div className="main">
      <UserInfo userInfo={user.userInfo}></UserInfo>
      <div className="row-1">
        <AdminDashboard></AdminDashboard>
        <AddCourseForm></AddCourseForm>
      </div>
      <div className="row-2">
        <ResourceApproval></ResourceApproval>
        <div className="users-container">
          <UsersList></UsersList>
          <UserDetails></UserDetails>
        </div>
      </div>
    </div>
  );
};

export default Admin;
