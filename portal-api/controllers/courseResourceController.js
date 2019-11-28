const Course = require("../models/courseModel");

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
  if (
    !courseResource.status ||
    !courseResource.semester ||
    !courseResource.title ||
    !courseResource.link
  ) {
    res.status(400).send("Invalid parameters on body");
  } else {
    Course.findOne({ code: courseCode }).then(courseObj => {
      // find course object
      if (!courseObj) {
        res.status(404).send("No Course Object found");
      }
      const existingResourceLink = courseObj.courseResources.find(resource => {
        return resource.link === courseResource.link;
      }); // check if the same link already exits in the database

      // TODO how to avoid after saving ???????????????????????
      if (existingResourceLink) {
        res
          .status(409)
          .send("Course resource link already exists in this course"); // send what we returned
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
  const courseCode = req.params.course;
  Course.findOne({ code: courseCode }).then(
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

// TODO: add update and destroy for admin only
// // (update) one single object PATH /:id
// function update(req, res) {}

// // (destroy) one single object DELETE /:id
// function destroy(req, res) {
//   const id = req.params.id;

//   // Validate id
//   if (!ObjectID.isValid(id)) {
//     res.status(404).send();
//   }

//   // Delete a course resource by their id
//   CourseResource.findByIdAndRemove(id)
//     .then(courseResource => {
//       if (!courseResource) {
//         res.status(404).send();
//       } else {
//         res.send(courseResource);
//       }
//     })
//     .catch(error => {
//       res.status(500).send(); // server error, could not delete.
//     });
// }

module.exports = {
  create,
  listPending
};
