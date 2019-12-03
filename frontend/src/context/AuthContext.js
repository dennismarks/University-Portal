import PropTypes from "prop-types";
import React, { createContext, useEffect, useState, useCallback } from "react";

import * as userService from "../services/user";

const Context = createContext();

function AuthProvider({ children = null }) {
  const defaultState = { isLoggedIn: false, user: null };
  const [auth, setAuth] = useState(defaultState);

  function login(user) {
    setAuth({ isLoggedIn: true, user: user });
  }

  const logout = useCallback(() => {
    userService.logout();
    setAuth(defaultState);
  }, [defaultState, setAuth]);

  useEffect(() => {
    userService
      .fetchAuthUser()
      .then(user => {
        if (user) {
          login(user);
        } else {
          logout();
        }
      })
      .catch(err => {
        console.error(err);
        logout();
      });
  }, []);

  const defaultContext = {
    auth,
    login,
    logout
  };

  return <Context.Provider value={defaultContext}>{children}</Context.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node
};

export { AuthProvider };
export default Context;
