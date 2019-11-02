import React, { useContext } from "react";
import { UsersContext } from "../context/UsersContext";

const UserDetails = () => {
  const { selectedUser, removeStudent } = useContext(UsersContext);

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
