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
    <div className="w-6/12 mt-5 ml-10 mr-5 px-10 pb-5 bg-white shadow-md">
      <h3 className="text-2xl font-medium my-4"> Reddit Threads</h3>
      <div className="overflow-auto h-64 pr-2">
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
      <div className="flex justify-center">
        <a
          href={`https://reddit.com/r/UofT/search?q=${props.courseCode.slice(0,6)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-blue rounded bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mt-6"
        >
          Reddit Search
        </a>
        <button
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-blue rounded bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 ml-6 mt-6"
          onClick={updateThreadsFunc}
        >
          Refresh Threads
        </button>
      </div>
    </div>
  );
}

export default RedditBox;
