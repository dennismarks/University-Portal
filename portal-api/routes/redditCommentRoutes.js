const express = require("express");
const router = express.Router();
const redditCommentController = require("../controllers/redditCommentController");

/*
 * PATCH all reddit comments for the specfic course
 */
router.patch("/:course_id", redditCommentController.update);

/*
 * DELETE
 */
router.delete("/:id", redditCommentController.destroy);

module.exports = router;
