const express = require("express");
const router = express.Router();
const courseReviewController = require("../controllers/courseReviewController");

/*
 * POST
 */
router.post("/:school/:course/", courseReviewController.create);

/*
 * DELETE
 */
router.delete("/:school/:course/:id", courseReviewController.destroy);

module.exports = router;
