const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseReviewSchema = new Schema({
    course: {
      type: String,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
    }
    
  });