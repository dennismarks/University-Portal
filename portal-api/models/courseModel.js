const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* Models for Embedded Document */
const CourseInfoSchema = require("./courseInfoSchema");

const CourseSchema = new Schema({
  info: CourseInfoSchema,

});

module.exports = mongoose.model("course", CourseSchema);
