import React from "react";
import UserInfo from "../components/UserInfo";

import Header from "../components/Header";
import HeaderAdmin from "../components/HeaderAdmin";
import HeaderStudent from "../components/HeaderStudent";

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
        <HeaderAdmin/>
        <div className="main">
          <UserInfo userInfo={this.state.adminInfo}></UserInfo>
        </div>
      </div>
    );
  }
}

export default Admin;
