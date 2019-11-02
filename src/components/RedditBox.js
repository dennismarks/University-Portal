import React from "react";

import RedditPostBox from "./RedditPostBox";
// console.log(redditCommentData)

function RedditBox(props) {
  // const classes = useStyles();
  const redditThreads = [];
  for (let i = 0; i < props.redditData.length; i++) {
    const thread = props.redditData[i].data;
    redditThreads.push(
      <RedditPostBox
        key={thread.id}
        threadTitle={thread.title}
        threadText={thread.selftext}
        threadLink={"https://reddit.com" + thread.permalink}
      />
    );
  }

  console.log(props.redditData);

  return (
    <div className="w-6/12 mt-5 ml-10 mr-5 px-10 pb-5 bg-white shadow-md">
      <h3 className="text-2xl font-medium my-4"> Reddit Threads</h3>
      <div className="overflow-y-scroll h-64 pr-2">
        <div>{redditThreads}</div>
      </div>
      <div className="flex justify-center">
        <a
          href={"https://reddit.com/r/UofT/search?q=csc309"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-blue bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mt-6"
        >
          Reddit Search
        </a>
      </div>
    </div>
  );
}

export default RedditBox;
