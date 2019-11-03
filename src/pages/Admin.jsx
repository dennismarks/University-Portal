import React, { useContext } from "react";
import { UsersContext } from "../context/UsersContext";
import AdminDashboard from "../components/AdminDashboard.jsx";
import AddCourseForm from "../components/AddCourseForm";
import UserInfo from "../components/UserInfo";
import UsersList from "../components/UsersList";
import UserDetails from "../components/UserDetails";

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
      <AdminDashboard></AdminDashboard>
      <AddCourseForm></AddCourseForm>
      <div className="users-container">
        <UsersList></UsersList>
        <UserDetails></UserDetails>
      </div>
    </div>
  );
};

export default Admin;
