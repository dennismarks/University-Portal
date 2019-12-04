const Course = require("../models/courseModel");
const { ObjectID } = require("mongodb");

/**
 * Course Resource Controller
 *
 * @description :: Server-side logic for managing course resources.
 */

// (create) on signle object -- POST /
function create(req, res) {
  const courseResource = {
    status: req.body.status,
    semester: req.body.semester,
    title: req.body.title,
    link: req.body.link
  };
  const courseCode = req.params.course;
  const school = req.params.school;
  if (
    !courseResource.status ||
    !courseResource.semester ||
    !courseResource.title ||
    !courseResource.link
  ) {
    res.status(400).send("Invalid parameters on body");
  } else {
    Course.findOne({ school: school, code: courseCode }).then(courseObj => {
      // find course object
      if (!courseObj) {
        res.status(404).send("No Course Object found");
        return;
      }
      const existingResourceLink = courseObj.courseResources.find(resource => {
        return resource.link === courseResource.link;
      }); // check if the same link already exits in the database
      if (existingResourceLink) {
        res
          .status(409)
          .send("Course resource link already exists in this course"); // send what we returned
        return;
      }
      const existingResourceSemAndTitle = courseObj.courseResources.find(
        resource => {
          return (
            resource.title === courseResource.title &&
            resource.semester === courseResource.semester
          );
        }
      ); // check if the same title already exits in the same semester
      if (existingResourceSemAndTitle) {
        res
          .status(409)
          .send(
            "Course resource title already exists in this semester of course resources"
          );
        return;
      }

      courseObj.courseResources.push(courseResource); // add request to course
      courseObj.save().then(
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

// (read) all pending course resources needed for approval -- GET /
function listPending(req, res) {
  // TODO check if user is an admin here
  const { school, course } = req.params;
  Course.findOne({ school: school, code: course }).then(
    courseObj => {
      const pendingResources = courseObj.courseResources.filter(resource => {
        return resource.status === "Pending";
      });
      res.send({ pendingResources });
    },
    error => {
      res.status(500).send(error); // server error
    }
  );
}

function updatePending(req, res) {
  const { school, course, resId } = req.params;
  console.log(req.params);
  Course.findOne({ school: school, code: course }).then(
    courseObj => {      
      if (!courseObj || !courseObj.courseResources.id({ _id: resId })) {
        res.status(404).send("No such resource found");
      }

      courseObj.courseResources.id(resId).status = "Approved";
      console.log(courseObj.courseResources.id(resId));
      courseObj.save().then(
        result => {
          res.send(result);
        },
        err => {
          res.status(500).send(err);
        }
      );
    },
    error => {
      res.status(500).send(error); // server error
    }
  );
}

// (read) all pending course resources needed for approval -- GET /
function listApproved(req, res) {
  const { school, course } = req.params;
  Course.findOne({ school: school, code: course }).then(
    courseObj => {
      const pendingResources = courseObj.courseResources.filter(resource => {
        return resource.status === "Approved";
      });
      res.send({ pendingResources });
    },
    error => {
      res.status(500).send(error); // server error
    }
  );
}

// TODO: add update for admin only
// // (update) one single object PATH /:id
// function update(req, res) {}

// // (destroy) one single object DELETE /:id
function destroy(req, res) {
  const { school, course, id } = req.params;

  // Validate id
  if (!ObjectID.isValid(id)) {
    res.status(404).send("Invalid Id");
    return;
  }
  Course.findOne({ school: school, code: course }).then(course => {
    if (!course) {
      res.status(404).send("Course does not exist");
      return;
    }
    if (!course.courseResources.id({ _id: id })) {
      res.status(404).send("Id not in course resources");
      return;
    }
    course.courseResources.pull(id);
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
  listPending,
  listApproved,
  updatePending,
  destroy
};
