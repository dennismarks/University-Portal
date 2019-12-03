const Course = require("../models/courseModel");
const { ObjectID } = require("mongodb");

const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
/**
 * Course review Controller
 *
 * @description :: Server-side logic for managing course reviews.
 */

// (create) on signle object -- POST /
function create(req, res) {
  const { course, school } = req.params;
  if (!req.session.user){
    res.status(401).send("Cannot create review, not logged in");
    return;
  }
  
  const { rating, comment } = req.body;
  const userId = req.session.user._id;
  const username = req.session.user.username;
  // TODO checkk if logged in and dont let user comment on same course twice
  if (!rating || !comment) {
    res.status(400).send("Need rating and comment in body");
  } else {
    Course.findOne({ school: school, code: course }).then(course => {
      if ( course.courseReviews.find(review => review.username === username) ){
        res.status(409).send("You have already commented on this course");
        return;
      }

      course.courseReviews.push({ rating, comment, userId, username });
      const averageRating = // recalculate average rating
        course.courseReviews.reduce(
          (accumulator, reviewObj) => accumulator + reviewObj.rating,
          0
        ) / course.courseReviews.length;
      course.averageRating =
        String(averageRating).length === 1
          ? averageRating
          : averageRating.toFixed(2);
      course.save().then(
        result => {
          req.session.user = req.session.user
          res.send(result);
        },
        err => {
          res.status(400).send(err); // 400 for bad request -- could not save
        }
      );
    });
  }
}

// (destroy) one single object DELETE /:id
function destroy(req, res) {
  const { course, school, id } = req.params;
  // TODO checkk if logged in
  if (!ObjectID.isValid(id)) {
    res.status(404).send("Invalid Id");
    return;
  }
  Course.findOne({ school: school, code: course })
    .then(course => {
      if (!course) {
        res.status(404).send("Course does not exist");
        return;
      }
      if (!course.courseReviews.id({ _id: id })) {
        res.status(404).send("Id not in course reviews");
        return;
      }
      course.courseReviews.pull(id);
      if (course.courseReviews.length !== 0) {
        const averageRating = // recalculate average rating
          course.courseReviews.reduce(
            (accumulator, reviewObj) => accumulator + reviewObj.rating,
            0
          ) / course.courseReviews.length;
        course.averageRating =
          String(averageRating).length === 1
            ? averageRating
            : averageRating.toFixed(2);
      } else {
        course.averageRating = null;
      }

      return course;
    })
    .then(course => {
      course.save().then(
        result => {
          res.send(result);
        },
        err => {
          // console.log(err)
          res.status(500).send(err); // server error -- could not save
        }
      );
    });
}

module.exports = {
  create,
  destroy
};
