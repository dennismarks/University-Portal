const axios = require("axios");

async function createUofTCourseObject(code, courseResource) {
  const calendar_server = axios.create({
    baseURL: "http://uoft-courseapi.herokuapp.com/get",
    timeout: 2000
  });
  try {
    course_info_ax = await calendar_server.get(`/${code}`);
    course_info = course_info_ax.data;
    // confrom the course calandar data to our Course Info schema for portal
    courseResource.info = {
      title: course_info.title,
      hours: course_info.hours,
      description: course_info.summary,
      faculty: "Arts and Science",
      department: course_info.program
    };
    courseResource.fullCourseTitle = `${code} - ${course_info.title}`;
  } catch {
    return "Cannot find course in UofT FAS database";
  }
}

async function createRedditComments(code, courseResource) {
  const reddit_server = axios.create({
    baseURL: "https://www.reddit.com",
    timeout: 2000
  });
  try {
    const simple_code = code.replace(/H(1|5)$/i, "");
    const comments_info_ax = await reddit_server.get(
      "/r/uoft/search/.json?q=" + simple_code
    );
    const comments_info = comments_info_ax.data.data;
    // confrom the reddit data to our Reddit Comment schema for portal
    const redditCommentsObjects = comments_info.children.map(redditComment => {
      const commentData = redditComment.data;
      const portalRedditComment = {
        publishDate: commentData.created_utc,
        title: commentData.title,
        content: commentData.selftext,
        link: commentData.url,
        subreddit: commentData.subreddit_name_prefixed,
        upvotes: commentData.ups,
        downvotes: commentData.downs
      };
      return portalRedditComment;
    });
    courseResource.redditComments = redditCommentsObjects;
    console.log(`Reddit comments updated for ${code}`);
  } catch {
    return "Cannot connect to reddit properly"; // cant find course in reddit server
  }
}

module.exports = {
  createUofTCourseObject,
  createRedditComments
};
