const Course = require("../models/courseModel");
const { createRedditComments } = require("../modules/convertCourseInfo");

/**
 * Reddit Comment Controller
 *
 * @description :: Server-side logic for managing reddit reviews on a single course
 */

// (update) one single object PATH /:id
async function update(req, res) {
  const { school, course } = req.params;
  const courseObj = await Course.findOne({ school: school, code: course });
  const redditErr = await createRedditComments(course, courseObj);
  if (!courseObj) {
    res.status(404).send("Course not found");
    return;
  }
  if (redditErr) {
    res.status(500).send(redditErr); // cant connect to reddit api
    return;
  }
  courseObj.save().then(
    // save course to db
    result => {
      res.send(result);
    },
    err => {
      res.status(500).send(err); // could not update
    }
  );
}

// (destroy) one single object DELETE /:id
function destroy(req, res) {}

module.exports = {
  update,
  destroy
};
