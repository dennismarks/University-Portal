const CourseResource = require("../models/courseResourceModel");

/**
 * User Controller
 *
 * @description :: Server-side logic for managing users.
 */

// (create) on signle object -- POST /
function create(req, res) {
  const courseResource = new CourseResource({
    status: req.body.status,
    semester: req.body.semester,
    title: req.body.title,
    link: req.body.link
  });
  courseResource.save().then(
    result => {
      res.send(result);
    },
    err => {
      res.status(400).send(err); // 400 for bad request
    }
  );
}

// (read) all objects -- GET /
function list(req, res) {}

// (read) one single object -- GET /:id
function show(req, res) {}

// (update) one single object PATH /:id
function update(req, res) {}

// (destroy) one single object DELETE /:id
function destroy(req, res) {}

module.exports = {
  create,
  list,
  show,
  update,
  destroy
};
