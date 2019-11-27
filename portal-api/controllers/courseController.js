const Course = require("../models/courseModel");
const { createUofTCourseObject } = require("../modules/convertCourseInfo");

// to validate object IDs
const { ObjectID } = require("mongodb");

/**
 * User Controller
 *
 * @description :: Server-side logic for managing users.
 */

async function create(req, res) {
  const { code, school } = req.body;
  if (!code || !school) {
    res.status(400).send();
  }
  try {
    const courseResource = await Course.create({
      code,
      school
    });
    
    if (school === "UofT") {
      const courseErr = await createUofTCourseObject(code, courseResource);
      console.log(courseErr)
      if (courseErr) {
        res.status(400).send(courseErr); // cant find course in Max's database
      }
    }
    courseResource.save().then(
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

module.exports = {
  create
};
