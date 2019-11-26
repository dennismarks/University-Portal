const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* Models for Embedded Document */
const CourseInfoSchema = require("./courseInfoSchema");
const RedditCommentSchema = require("./redditCommentSchema");
const CourseResourceSchema = require("./courseResourceSchema");
/* End Model for Embedded Document */

const CourseSchema = new Schema({
  code: {
    type: String,
    required: true,
    minlength: 5
  },
  title: {
    type: String,
    required: true,
    minlength: 1
  },
  info: CourseInfoSchema,
  redditComments: [RedditCommentSchema],
  courseResources: [CourseResourceSchema]
});

module.exports = mongoose.model("course", CourseSchema);
