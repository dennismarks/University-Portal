import React, { useState } from "react";

import RedditPostBox from "./RedditPostBox";

function RedditBox(props) {
  const [threads, setThreads] = useState(props.redditData);

  const updateThreadsFunc = () => {
    fetch(
      `http://localhost:3001/api/v1/courses/reddit-comments/UofT/${props.courseCode}/`,
      {
        method: "PATCH"
      }
    )
      .then(res => res.json())
      .then(result => {
        setThreads(result.redditComments);
      });
  };

  // const removeThread = removingThreadId => {
  //   setThreads(
  //     threads.filter(filterThread => {
  //       return filterThread._id !== removingThreadId;
  //     })
  //   );
  // };

  return (
    <div id="course" className="course-container reddit">
      <h2> Reddit Threads</h2>
      <div className="flex mb-4">
        <a
          href={`https://reddit.com/r/UofT/search?q=${props.courseCode.slice(0,6)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-blue rounded bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 ml-3 mt-2"
        >
          Reddit Search
        </a>
        <button
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-blue rounded bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 ml-6 mt-2"
          onClick={updateThreadsFunc}
        >
          Refresh Threads
        </button>
      </div>
      <div className="overflow-auto pr-2 redditComments">
        <div>
          {threads.map(threadInfo => (
            <RedditPostBox
              key={threadInfo._id}
              id={threadInfo._id}
              threadTitle={threadInfo.title}
              threadText={threadInfo.content}
              threadLink={threadInfo.link}
              // removeFunc={removeThread}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RedditBox;
