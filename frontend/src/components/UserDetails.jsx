import React, { useContext } from "react";
import { UsersContext } from "../context/UsersContext";
import { Link } from "react-router-dom";

const UserDetails = props => {
  // information about one particular user (selectedUser) would have been obtained
  // from an external source
  // but instead it is coming from the Users Context
  // const { selectedUser, removeStudent } = useContext(UsersContext);
  const { selectedUser, removeStudent } = props;
  console.log(selectedUser)
  return (
    <div className="user-details">
      {selectedUser? (
        <>
          <p>
            Name: <strong>{selectedUser.name}</strong>
          </p>
          <p>
            Email: <strong>{selectedUser.email}</strong>
          </p>
          <p>
            Id: <strong>{selectedUser._id}</strong>
          </p>
          <p>
            User's page:
            <strong>
              <Link
                className="user-link"
                to={`/user/${selectedUser._id}/`}
              >
                {" "}
                link
              </Link>
            </strong>
          </p>
        </>
      ) : (
        <p>User Error</p>
      )}
    </div>
  );
};

export default UserDetails;
