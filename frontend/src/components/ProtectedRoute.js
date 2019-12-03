import PropTypes from "prop-types";
import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";

import AuthContext from "../context/AuthContext";
import { ALL_ROLES, ROLES } from "../constants/auth";

function ProtectedRoute({
  requiredRoles = [ROLES.STUDENT],
  redirectTo = "/login",
  ...props
}) {
  const {
    auth: { user }
  } = useContext(AuthContext);
  return user && requiredRoles.includes(user.role) ? (
    <Route {...props} />
  ) : (
    <Redirect to={redirectTo} />
  );
}

ProtectedRoute.propTypes = {
  redirectTo: PropTypes.string,
  requiredRole: PropTypes.oneOf(ALL_ROLES)
};

export default ProtectedRoute;
