const express = require("express");
const router = express.Router();
const courseReviewController = require("../controllers/courseReviewController");

/*
 * POST
 */
router.post("/:school/:course/", courseReviewController.create);

/*
 * PATCH
 */
router.patch("/:id", courseReviewController.update);

/*
 * DELETE
 */
router.delete("/:id", courseReviewController.destroy);

module.exports = router;
