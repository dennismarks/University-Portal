const Course = require("../models/courseModel");
const {
  createUofTCourseObject,
  createRedditComments
} = require("../modules/convertCourseInfo");

// to validate object IDs
const { ObjectID } = require("mongodb");
const mongoose = require("mongoose");

/**
 * Course Controller
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
        return;
      }
      const redditErr = await createRedditComments(code, courseResource); // create an object for the course reddit comment schema
      if (redditErr) {
        res.status(500).send(redditErr); // cant connect to reddit api
        return;
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
    .catch(
      error => res.status(500).send(error) // server error
    );
}

function listSearch(req, res) {
  const searchQuery = req.query.q;
  const searchStart = parseInt(req.query.start);
  const PAGE_ENTRIES = 10; // number of courses to display per page
  let coursesPromise = null;
  if (!searchQuery) {
    res.status(400).send("Invalid search");
    return;
  } else if (/^Department:/.test(searchQuery)) {
    const regEx = searchQuery.replace(/^Department:/, "");
    coursesPromise = Course.find({ "info.department": regEx });
  } else if (/^Breadth:/.test(searchQuery)) {
    const regEx = searchQuery.replace(/^Breadth:/, "");
    coursesPromise = Course.find({ "info.breadthReqs": regEx });
  } else if (/^Rating:/.test(searchQuery)) {
    const regEx = searchQuery.replace(/^Rating:/, "");
    const rating = parseFloat(regEx);
    coursesPromise = Course.find({ averageRating: { $lte: rating } });
  } else {
    const regEx = new RegExp(searchQuery, "i");
    coursesPromise = Course.find({ fullCourseTitle: regEx });
  }
  if (coursesPromise) {
    coursesPromise
      .skip(searchStart)
      .limit(PAGE_ENTRIES)
      .then(courses => {
        if (!courses) {
          res.status(404).send("No courses found");
          return;
        }
        res.send({ courses });
      })
      .catch(error => {
        res.status(404).send(error); // search offset to high
      });
  }
}

function listTop(req, res) {
  Course.find()
    .limit(3)
    .sort({ averageRating: -1 })
    .then(courses => {
      if (!courses) {
        res.status(404).send("No courses found");
        return;
      }
      res.send({ courses });
    })
    .catch(error => {
      res.status(404).send(error); // search offset to high
    });
}

/* a a single course */
function show(req, res) {
  Course.findOne({ school: req.params.school, code: req.params.code }).then(
    course => {
      // TODO show all courses if admin
      course.courseResources = course.courseResources.filter(
        // only send a list of approved courses
        resource => resource.status === "Approved"
      );
      res.send(course);
    },
    error => {
      res.status(404).send(error);
    }
  );
}

function listIds(req, res) {
  const courseIds = req.body.courseIds;
  if (!courseIds) {
    res.status(400).send("Send a list of valid user id's");
    return;
  }
  const courseIdObjs = courseIds.map(courseId => {
    return new mongoose.Types.ObjectId(courseId);
  });
  Course.find({
    _id: { $in: courseIdObjs }
  })
    .then(courses => {
      res.send(courses);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

module.exports = {
  create,
  list,
  listIds,
  listSearch,
  listTop,
  show
};
