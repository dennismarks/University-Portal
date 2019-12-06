const express = require("express");
const router = express.Router();

const { isAdminUser, isUserAuthenticated } = require("../auth");
const courseReviewController = require("../controllers/courseReviewController");

/*
 * POST
 */
router.post(
  "/:school/:course/",
  [isUserAuthenticated],
  courseReviewController.create
);

/*
 * DELETE
 */
router.delete(
  "/:school/:course/:id",
  [isUserAuthenticated, isAdminUser],
  courseReviewController.destroy
);

module.exports = router;
