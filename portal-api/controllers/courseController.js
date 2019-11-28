const Course = require("../models/courseModel");
const {
  createUofTCourseObject,
  createRedditComments
} = require("../modules/convertCourseInfo");

// to validate object IDs
const { ObjectID } = require("mongodb");

/**
 * User Controller
 *
 * @description :: Server-side logic for managing courses.
 */

async function create(req, res) {
  const { code, school } = req.body;
  if (!code || !school) {
    // check request sends both a course code and a school
    res.status(400).send();
  }
  try {
    const courseResource = await Course.create({
      code,
      school
    });

    if (school === "UofT") {
      // if the school is UofT then run the following
      const courseErr = await createUofTCourseObject(code, courseResource); // create an object for the course info schema
      if (courseErr) {
        res.status(400).send(courseErr); // cant find course in Max's database
      }
      console.log(courseErr);
      const redditErr = await createRedditComments(code, courseResource); // create an object for the course reddit comment schema
      if (redditErr) {
        res.status(500).send(redditErr); // cant connect to reddit api
      }
    }
    courseResource.save().then(
      // save course to db
      result => {
        res.send(result);
      },
      err => {
        res.status(400).send(err); // 400 for bad request
      }
    );
  } catch (err) {
    res.status(500).send(err);
  }
}

/* Get a list of all the course (for admin only)
 */

function list(req, res) {
  // TODO admin acess only
  Course.find()
    .then(courses => {
      res.send({ courses });
    })
    .catch(error => [
      res.status(500).send(error) // server error
    ]);
}

/* a a single course */
function show(req, res) {
  Course.findOne({ school: req.params.school, code: req.params.code }).then(
    course => {
      course.courseResources = course.courseResources.filter( // only send a list of approved courses
        resource => resource.status === "Approved"
      );
      res.send(course);
    },
    error => {
      res.status(404).send(error);
    }
  );
}

module.exports = {
  create,
  list,
  show
};
