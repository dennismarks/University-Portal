import React from "react";
import "../stylesheets/userInfo.css";

class UserInfo extends React.Component {
  render() {
    const { userInfo } = this.props;

    console.log(userInfo.img);
    return (
      <div className="personalInformation">
        <div>
          <img className="profileImage" src={"/img/" + userInfo.img} alt="" />
        </div>
        <div className="userInfo">
          <h1>{userInfo.name}</h1>
          <h3>{userInfo.university}</h3>
          <h4>{userInfo.program}</h4>
        </div>
      </div>
    );
  }
}

export default UserInfo;
