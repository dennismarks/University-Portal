const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseInfoSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 1
  },
  hours: {
    type: String,
    require: true
  },
  description: {
    type: String,
    required: true,
    minlength: 1
  },
  prerequisites: {
    type: [String]
  },
  recPrep: {
    type: [String]
  },
  exclusions: {
    type: [String]
  },
  distribution: {
    type: [String],
    enum: ["Science", "Humanities", "Social Science"]
  },
  breadthReqs: {
    type: [String],
    enum: [
      "Creative and Cultural Representations (1)",
      "Thought, Belief and Behaviour (2)",
      "Society and its Institutions (3)",
      "Living Things and Their Environment (4)",
      "The Physical and Mathematical Universes (5)"
    ]
  },
  department: {
    type: String,
    required: true,
    minlength: 1
  },
  faculty: {
    type: String,
    required: true,
    minlength: 1
  }
});

module.exports = CourseInfoSchema;
