import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

function RedditPostBox(props) {
  const {
    auth: { isLoggedIn, role, userId }
  } = useContext(AuthContext);

  return (
    <div className="w=9/12 bg-gray-200 mb-8 py-4 px-4">
      <h4 className="mb-2 text-1xl font-medium">{props.threadTitle} </h4>
      <h5 className="mb-2">{props.threadText}</h5>
      <a
        href={props.threadLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-2 block text-blue-600 hover:text-blue-800"
      >
        reddit link
      </a>
      {true ? (
        <button className="btn bg-red-500 hover:bg-red-600 text-white rounded py-1 px-1 mt-0">
          Remove Thread
        </button>
      ) : null }
    </div>
  );
}

export default RedditPostBox;
