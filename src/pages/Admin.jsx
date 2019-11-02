import React from "react";
import AdminDashboard from "../components/AdminDashboard.jsx";
import AddCourseForm from "../components/AddCourseForm";
import UserInfo from "../components/UserInfo";
import UsersList from "../components/UsersList";
import UserDetails from "../components/UserDetails";

const Admin = () => {
  const adminInfo = {
    img: "avatar.png",
    name: "Adam"
  };
  return (
    <div className="main">
      <UserInfo userInfo={adminInfo}></UserInfo>
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
