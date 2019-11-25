const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* Models for Embedded Document */
const CourseInfoSchema = require("./courseInfoSchema");
const RedditCommentSchema = require("./redditCommentSchema");

const CourseSchema = new Schema({
  info: CourseInfoSchema,
  redditComments: [RedditCommentSchema],
  
});

module.exports = mongoose.model("course", CourseSchema);
