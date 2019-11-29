const Course = require("../models/courseModel");
const { ObjectID } = require("mongodb");
/**
 * Course review Controller
 *
 * @description :: Server-side logic for managing course reviews.
 */

// (create) on signle object -- POST /
function create(req, res) {
  const { course, school } = req.params;
  const { rating, comment } = req.body;
  // TODO checkk if logged in and dont let user comment on same course twice
  if (!rating || !comment) {
    res.status(400).send("Need rating and comment in body");
  } else {
    Course.findOne({ school: school, code: course }).then(course => {
      course.courseReviews.push({ rating, comment });
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
  Course.findOne({ school: school, code: course }).then(course => {
    if (!course) {
      res.status(404).send("Course does not exist");
      return;
    }
    if (!course.courseReviews.id({ _id: id })) {
      res.status(404).send("Id not in course reviews");
      return;
    }
    course.courseReviews.pull(id);
    course.save().then(
      result => {
        res.send(result);
      },
      err => {
        res.status(500).send(err); // server error -- could not save
      }
    );
  });
}

module.exports = {
  create,
  destroy
};
