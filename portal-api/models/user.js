const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
    minlength: 4,
    required: "Username is required",
    match: [
      /^[a-zA-Z0-9\-]*$/,
      "Username can only contain letters, numbers, and dash"
    ]
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: {
      validator: validator.isEmail,
      message: "Not a valid email format"
    }
  },
  name: {
    type: String,
    maxlength: 128,
    default: ""
  },
  bio: {
    type: String,
    maxlength: 1024,
    default: ""
  },
  role: {
    type: String,
    enum: ["student", "admin"],
    default: "student"
  },
  currentCourses: [ObjectId],
  takenCourses: [ObjectId],
  plannedCourses: [ObjectId]
});

/**
 * Before saving, hash the password if it was modified.
 */
UserSchema.pre("save", async function(next) {
  const user = this;

  if (!user.isModified("password")) {
    next();
  }

  try {
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
  } catch (e) {
    console.error(e);
  }

  if (!user.name) {
    user.name = user.username;
  }

  next();
});

/**
 * Omit password from JSON serialization
 */
UserSchema.methods.toJSON = function() {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

/**
 * Find a User by their username and password.
 *
 * @param {string} username - Username
 * @param {string} password - Password (plain text)
 * @returns {Promise} Resolves with User if found, otherwise null
 */
UserSchema.statics.findByUsernameAndPassword = async function(
  username,
  password
) {
  const User = this;

  const user = await User.findOne({ username });
  if (!user) {
    const error = new Error(`User with username ${username} does not exist`);
    error.payload = {
      username: `User with username ${username} does not exist`
    };
    throw error;
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    const error = new Error(`Invalid password for user`);
    error.payload = {
      password: `Invalid password for user`
    };
    throw error;
  }

  return user;
};

module.exports = mongoose.model("user", UserSchema);
