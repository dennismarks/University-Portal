import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import { fetchUser } from "../services/user";

export const Context = createContext({});

export const Provider = props => {
  // Initial values are obtained from the props
  const { selectedUser: initialSelectedUsers, children } = props;

  // Use State to keep the values
  const [users, setUsers] = useState({});
  const [selectedUser, setSelectedUser] = useState(initialSelectedUsers);

  const removeStudent = id => {
    setUsers(
      users.filter(u => {
        return u.userInfo.id !== id;
      })
    );
  };

  function fetchUserById(id) {
    fetchUser(id)
      .then(user => {
        setUsers({ ...users, [user._id]: user });
      })
      .catch(err => {
        console.error(err);
      });
  }

  // Make the context object:
  const usersContext = {
    fetchUserById,
    users,
    setUsers,
    selectedUser,
    setSelectedUser,
    removeStudent
  };

  // pass the value in provider and return
  return <Context.Provider value={usersContext}>{children}</Context.Provider>;
};

export const { Consumer } = Context;

export {
  Context as UsersContext,
  Provider as UsersContextProvider,
  Consumer as UsersContextConsumer
};

Provider.propTypes = {
  users: PropTypes.array,
  selectedUser: PropTypes.object
};

Provider.defaultProps = {
  users: [],
  selectedUser: {}
};
