const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* Models for Embedded Document */
const CourseInfoSchema = require("./courseInfoSchema");
const RedditCommentSchema = require("./redditCommentSchema");
const CourseResourceSchema = require("./courseResourceSchema");
const CourseReviewSchema = require("./courseReviewSchema");
/* End Model for Embedded Document */

const CourseSchema = new Schema({
  // TODO ask if values combined can be unique
  code: {
    type: String,
    required: true,
    minlength: 2
  },
  school: {
    type: String,
    require: true
  },
  averageRating: {
    type: mongoose.SchemaTypes.Decimal128,
    min: 0,
    max: 5
  },
  fullCourseTitle: {
    type: String,
    // required: true,
    minlength: 1
  },
  info: CourseInfoSchema,
  redditComments: [RedditCommentSchema],
  courseResources: [CourseResourceSchema],
  courseReviews: [CourseReviewSchema]
});

CourseSchema.index({ fullCourseTitle: 'text' });

module.exports = mongoose.model("course", CourseSchema);
