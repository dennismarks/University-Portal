import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { ROLES } from "../constants/auth";

function RedditPostBox(props) {
  const {
    auth: { role }
  } = useContext(AuthContext);

  return (
    <div className="w=9/12 bg-gray-200 mb-4 py-4 px-4 redditBox">
      <h3 className="mb-1">{props.threadTitle} </h3>
      <h5 className="mb-1">{props.threadText}</h5>
      <a
        href={props.threadLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-2 w-10 block text-blue-600 hover:text-blue-800"
      >
        Link
      </a>
      {/* {role === ROLES.ADMIN ? (
        <button onClick={props.removeFunc.bind(this, props.id)} className="btn bg-red-500 hover:bg-red-600 text-white rounded py-1 px-1 mt-0">
          Remove Thread
        </button>
      ) : null } */}
    </div>
  );
}

export default RedditPostBox;
