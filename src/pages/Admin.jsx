import React, { useContext } from "react";
import { UsersContext } from "../context/UsersContext";
import AdminDashboard from "../components/AdminDashboard.jsx";
import AddCourseForm from "../components/AddCourseForm";
import UserInfo from "../components/UserInfo";
import UsersList from "../components/UsersList";
import UserDetails from "../components/UserDetails";

const Admin = () => {
  const usersContext = useContext(UsersContext);
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
