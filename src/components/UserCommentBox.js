import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { ROLES } from "../constants/auth";

function UserCommentBox(props) {
  const {
    auth: { role, userId }
  } = useContext(AuthContext);

  return (
    <div className="w=9/12 bg-gray-200 mb-8 py-4 px-4">
      <h4 className="mb-2 text-1xl font-medium">
        <a
          href={"/user/" + props.userId}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2 text-blue-600 hover:text-blue-800"
        >
          {props.user}
        </a>
      </h4>
      <h4 className="mb-2 text-1xl font-medium">
          Rating: {props.rating} / 5
      </h4>
      <h5 className="mb-2">{props.comment}</h5>
      {role === ROLES.ADMIN || props.userId === String(userId) ? (
        <button onClick={props.removeFunc.bind(this, props.userId)} className="btn bg-red-500 hover:bg-red-600 text-white rounded py-1 px-1 mt-0">
          Remove Comment
        </button>
      ) : null }
    </div>
  );
}

export default UserCommentBox;
