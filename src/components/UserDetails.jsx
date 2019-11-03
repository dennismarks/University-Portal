import React, { useContext } from "react";
import { UsersContext } from "../context/UsersContext";
import { Link } from "react-router-dom";

const UserDetails = () => {
  // information about one particular user (selectedUser) would have been obtained
  // from an external source
  // but instead it is coming from the Users Context
  const { selectedUser, removeStudent } = useContext(UsersContext);
  const MY_ROUTE = () => `/user/${selectedUser.userInfo.id}/`;

  return (
    <div className="user-details">
      <h1>User Details </h1>
      {selectedUser.userInfo ? (
        <>
          <p>
            Name: <strong>{selectedUser.userInfo.name}</strong>
          </p>
          <p>
            Program: <strong>{selectedUser.userInfo.program}</strong>
          </p>
          <p>
            Id: <strong>{selectedUser.userInfo.id}</strong>
          </p>
          <p>
            User's page:
            <strong>
              <Link className="user-link" to={MY_ROUTE}>
                {" "}
                link
              </Link>
            </strong>
          </p>
          <button onClick={() => removeStudent(selectedUser.userInfo.id)}>
            Remove
          </button>
        </>
      ) : (
        <p>Select a user to see the details.</p>
      )}
    </div>
  );
};

export default UserDetails;
