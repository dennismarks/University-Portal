import React, { useState } from "react";

import RedditPostBox from "./RedditPostBox";

function RedditBox(props) {
  const [threads, setThreads] = useState(props.redditData);

  const removeThread = removingThreadId => {
    setThreads(
      threads.filter(filterThread => {
        return filterThread.data.id !== removingThreadId;
      })
    );
  };

  return (
    <div className="w-6/12 mt-5 ml-10 mr-5 px-10 pb-5 bg-white shadow-md">
      <h3 className="text-2xl font-medium my-4"> Reddit Threads</h3>
      <div className="overflow-auto h-64 pr-2">
        <div>
          {threads.map(threadInfo => (
            <RedditPostBox
              key={threadInfo.data.id}
              id={threadInfo.data.id}
              threadTitle={threadInfo.data.title}
              threadText={threadInfo.data.selftext}
              threadLink={"https://reddit.com" + threadInfo.data.permalink}
              removeFunc={removeThread}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <a
          href={"https://reddit.com/r/UofT/search?q=csc309"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-blue rounded bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mt-6"
        >
          Reddit Search
        </a>
      </div>
    </div>
  );
}

export default RedditBox;
