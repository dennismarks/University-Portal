const CourseResource = require("../models/courseResourceModel");

// to validate object IDs
const { ObjectID } = require("mongodb");

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
function list(req, res) {
  CourseResource.find().then(
    courseResources => {
      res.send({ courseResources }); // can wrap in object if want to add more properties
    },
    error => {
      res.status(500).send(error); // server error
    }
  );
}

// (read) one single object -- GET /:id
function show(req, res) {
  const course = req.params.course;

  // Otherwise, findById
  CourseResource.find({ course:  })
    .then(courseResource => {
      if (!courseResource) {
        res.status(404).send(); // could not find this student
      } else {
        res.send(courseResource);
      }
    })
    .catch(error => {
      res.status(500).send(); // server error
    });
}

// (update) one single object PATH /:id
function update(req, res) {}

// (destroy) one single object DELETE /:id
function destroy(req, res) {
  const id = req.params.id;

  // Validate id
  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }

  // Delete a course resource by their id
  CourseResource.findByIdAndRemove(id)
    .then(courseResource => {
      if (!courseResource) {
        res.status(404).send();
      } else {
        res.send(courseResource);
      }
    })
    .catch(error => {
      res.status(500).send(); // server error, could not delete.
    });
}

module.exports = {
  create,
  list,
  show,
  update,
  destroy
};
