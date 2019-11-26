const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RedditCommentSchema = new Schema({
  pubishDate: {
    type: String, // change to datetime?
    required: true,
    minlength: 1
  },
  title: {
    type: String,
    required: true,
    minlength: 1
  },
  content: {
    type: String,
    required: true,
    minlength: 1
  },
  link: {
    type: String,
    required: true,
    minlength: 1,
    validate: {
      // validate with format of a link, i.e http:// or https://
      validator: function(v) {
        return /^https?:\/\//.test(v);
      },
      message: props => `${props.value} is not a valid semester`
    }
  },
  subreddit: {
    type: String,
    required: true,
    minlength: 1,
    validate: {
      // validate i fsubreit strt with r/...
      validator: function(v) {
        return /^r\//.test(v);
      },
      message: props => `${props.value} is not a valid subreddit`
    }
  },
  upvotes: {
    type: Number,
    min: 0,
    default: 0
  },
  downvotes: {
    type: Number,
    min: 0,
    default: 0
  }
});

module.exports = RedditCommentSchema;
