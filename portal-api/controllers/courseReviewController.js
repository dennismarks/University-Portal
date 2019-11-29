const Course = require("../models/courseModel");

/**
 * Course review Controller
 *
 * @description :: Server-side logic for managing course reviews.
 */

// (create) on signle object -- POST /
function create(req, res) {
  const { course, school } = req.params;
  const { rating, comment } = req.body;
  // TODO checkk if logged in
  if (!rating || !comment) {
    res.status(400).send("Need rating and comment in body");
  } else {
    Course.findOne({ school: school, code: course }).then(course => {
      course.courseReviews.push({ rating, comment });
      course.averageRating = (
        course.courseReviews.reduce((total, num) => total + num) /
        course.courseReviews.length
      ).toFixed(2);
      course.save().then(
        result => {
          res.send(result);
        },
        err => {
          res.status(400).send(err); // 400 for bad request -- could not save
        }
      );
    });
  }
}

// (update) one single object PATH /:id
function update(req, res) {
  const { course, school } = req.params;
  const { rating, comment } = req.body;
  // TODO checkk if logged in, ad them to request
  if (!rating || !comment) {
    res.status(400).send("Need rating and comment in body");
  } else {
    Course.findOne({ school: school, code: course }).then(course => {
      course.courseReviews.push({ rating, comment });
      course.averageRating = (
        course.courseReviews.reduce((total, num) => total + num) /
        course.courseReviews.length
      ).toFixed(2);
      course.save().then(
        result => {
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
  const {  } = req.params;
  // TODO checkk if logged in
 
    Course.findOne({ school: school, code: course }).then(course => {
      course.courseReviews.push({ rating, comment });
      course.averageRating = (
        course.courseReviews.reduce((total, num) => total + num) /
        course.courseReviews.length
      ).toFixed(2);
      course.save().then(
        result => {
          res.send(result);
        },
        err => {
          res.status(400).send(err); // 400 for bad request -- could not save
        }
      );
    });
  
}

module.exports = {
  create,
  update,
  destroy
};
