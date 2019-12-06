const express = require("express");
const router = express.Router();

const { isAdminUser, isUserAuthenticated } = require("../auth");
const redditCommentController = require("../controllers/redditCommentController");

/*
 * PATCH all reddit comments for the specfic course
 */
router.patch(
  "/:school/:course",
  [isUserAuthenticated],
  redditCommentController.update
);

/*
 * DELETE
 */
router.delete(
  "/:id",
  [isUserAuthenticated, isAdminUser],
  redditCommentController.destroy
);

module.exports = router;
