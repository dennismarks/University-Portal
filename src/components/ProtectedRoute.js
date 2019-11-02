import PropTypes from "prop-types";
import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";

import AuthContext from "../context/AuthContext";

function ProtectedRoute({
  requiredRole = "admin",
  redirectTo = "/login",
  ...props
}) {
  const {
    auth: { role }
  } = useContext(AuthContext);
  return role === requiredRole ? (
    <Route {...props} />
  ) : (
    <Redirect to={redirectTo} />
  );
}

ProtectedRoute.propTypes = {
  redirectTo: PropTypes.string,
  requiredRole: PropTypes.oneOf(["student", "admin"])
};

export default ProtectedRoute;
