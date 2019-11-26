const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseResourceSchema = new Schema({
  status: {
    type: String,
    required: true,
    enum: ["Approved", "Pending", "Rejected"]
  },
  semester: {
    type: String,
    required: true,
    validate: {
      // validate with format with ZZZZ 2019
      validator: function(v) {
        return /\w+ \d{4}/.test(v);
      },
      message: props => `${props.value} is not a valid semester`
    }
  },
  title: {
    type: String,
    require: true
  },
  link: {
    type: String,
    required: true,
    validate: {
      // validate with format of a link, i.e http:// or https://
      validator: function(v) {
        return /^https?:\/\//.test(v);
      },
      message: props => `${props.value} is not a valid semester`
    }
  }
});

module.exports = CourseResourceSchema;
