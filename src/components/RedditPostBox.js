import React from "react";

function RedditPostBox(props) {
  return (
    <div className="w=9/12 bg-gray-200 mb-8 py-4 px-4">
      <h4 className="mb-2 text-1xl font-medium">{props.threadTitle} </h4>
      <h5 className="mb-2">{props.threadText}</h5>
      <a
        href={props.threadLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-2 text-blue-600 hover:text-blue-800"
      >
        reddit link
      </a>
    </div>
  );
}

export default RedditPostBox;
