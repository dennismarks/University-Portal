import PropTypes from "prop-types";
import React, { createContext, useEffect, useState } from "react";

const Context = createContext();

function AuthProvider({ children = null }) {
  const defaultState = { isLoggedIn: false, userId: null, role: null };
  const prevAuth = localStorage.getItem("auth");
  const parsedAuth = JSON.parse(prevAuth) || defaultState;
  const [auth, setAuth] = useState(parsedAuth);

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  function logout() {
    setAuth(defaultState);
  }

  const defaultContext = {
    auth,
    logout,
    setAuth
  };

  return <Context.Provider value={defaultContext}>{children}</Context.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node
};

export { AuthProvider };
export default Context;
