import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";

import AuthContext from "../context/AuthContext";

function Logout() {
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    logout();
  });

  return <Redirect to="/" />;
}

export default Logout;
