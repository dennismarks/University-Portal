import React, { useContext } from "react";
import { UsersContext } from "../context/UsersContext";
import clsx from "clsx";
import "../stylesheets/coursesCard.css";
import "../stylesheets/Admin.css";

const UsersList = p => {
  // const MY_ROUTE = userId => `/user/${userId}/`;

  const usersContext = useContext(UsersContext);
  const { users, selectedUser, setSelectedUser } = usersContext;

  return (
    <div className="user-list">
      <h1>Users:</h1>
      {users.map(user => {
        // compose class name
        const userItemClassNames = clsx("user-item", {
          "user-item-selected": user.userInfo === selectedUser.userInfo
        });

        return (
          <div
            className={userItemClassNames}
            key={user.userInfo.id}
            onClick={() => setSelectedUser(user)}
          >
            {user.userInfo.name}
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;
