import React from "react";
import UserInfo from "../components/UserInfo";


class Admin extends React.Component {
  state = {
    adminInfo: {
      img: "avatar.png",
      name: "Alex Laptov"
    }
  };

  render() {
    return (
      <div>
        <div className="main">
          <UserInfo userInfo={this.state.adminInfo}></UserInfo>
        </div>
      </div>
    );
  }
}

export default Admin;
