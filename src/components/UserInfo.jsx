import React from "react";
import "../stylesheets/userInfo.css";

const UserInfo = props => {
  const { img, name, university, program } = props.userInfo;

  return (
    <div className="personalInformation">
      <div>
        <img
          className="profileImage"
          src={img || "/img/avatar-default.png"}
          alt={name || ""}
        />
      </div>
      <div className="userInfo">
        <h1>{name}</h1>
        <h3>{university}</h3>
        <h4>{program}</h4>
      </div>
    </div>
  );
};

export default UserInfo;
