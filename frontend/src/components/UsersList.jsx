import React, { useContext } from "react";
import { UsersContext } from "../context/UsersContext";
import clsx from "clsx";
import "../stylesheets/coursesCard.css";
import "../stylesheets/Admin.css";

const UsersList = (props) => {
  // users would have been obtained from an external source
  // but instead they are hardcoded using Context
  // const usersContext = useContext(UsersContext);
  // const { users, selectedUser, setSelectedUser } = usersContext;
  const { users, selectedUser, setSelectedUser } = props;

  return (
    <div className="user-list">
      <h1>Users</h1>
      {users.slice(1).map(user => {
        // compose class name
        const userItemClassNames = clsx("user-item", {
          "user-item-selected": user === selectedUser
        });
        return (
          <div
            className={userItemClassNames}
            key={user._id}
            onClick={() => setSelectedUser(user)}
          >
            {user.name}
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;
