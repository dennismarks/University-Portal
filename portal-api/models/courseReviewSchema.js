const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const CourseReviewSchema = new Schema({
  user: {
    type: String
    // required: true
  },
  userId: {
    type: ObjectId
  },
  username: {
    type: String,
    minlength: 1
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  comment: {
    type: String,
    require: true,
    minlength: 1
  }
});

module.exports = CourseReviewSchema;
