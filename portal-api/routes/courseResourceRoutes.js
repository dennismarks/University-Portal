const express = require("express");
const router = express.Router();

const { isAdminUser, isUserAuthenticated } = require("../auth");
const courseResourceController = require("../controllers/courseResourceController");

/**
 * GET all the pending course resources
 */
router.get(
  "/:school",
  [isUserAuthenticated, isAdminUser],
  courseResourceController.list
);

/*
 * GET the listing on pending course resources for this course
 */
router.get(
  "/:school/:course/pending",
  [isUserAuthenticated, isAdminUser],
  courseResourceController.listPending
);

/*
 * GET the listing on approved course resources for this course
 */
router.get(
  "/:school/:course/approved",
  [isUserAuthenticated],
  courseResourceController.listApproved
);

/*
 * POST
 */
router.post(
  "/:school/:course",
  [isUserAuthenticated],
  courseResourceController.create
);

/*
 * PATCH - update status of the course resources to approved
 */
router.patch(
  "/:school/:course/:resId",
  [isUserAuthenticated, isAdminUser],
  courseResourceController.updatePending
);

/*
 * PATCH
 */
// router.patch("/:school/:course", courseResourceController.update);

/*
 * DELETE
 */
router.delete(
  "/:school/:course/:id",
  [isUserAuthenticated, isAdminUser],
  courseResourceController.destroy
);

module.exports = router;
