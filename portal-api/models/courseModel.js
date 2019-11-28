const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* Models for Embedded Document */
const CourseInfoSchema = require("./courseInfoSchema");
const RedditCommentSchema = require("./redditCommentSchema");
const CourseResourceSchema = require("./courseResourceSchema");
/* End Model for Embedded Document */

const CourseSchema = new Schema({
  // TODO ask if values combined can be unique
  code: {
    type: String,
    required: true,
    minlength: 5
  },
  school: {
    type: String,
    require: true
  },
  info: CourseInfoSchema,
  redditComments: [RedditCommentSchema],
  courseResources: [CourseResourceSchema]
});

module.exports = mongoose.model("course", CourseSchema);
