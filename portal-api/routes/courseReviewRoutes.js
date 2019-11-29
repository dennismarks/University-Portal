const express = require("express");
const router = express.Router();
const courseReviewController = require("../controllers/courseReviewController");

/*
 * GET
 */
router.get("/", courseReviewController.list);

/*
 * POST
 */
router.post("/", courseReviewController.create);

/*
 * PATCH
 */
router.patch("/:id", courseReviewController.update);

/*
 * DELETE
 */
router.delete("/:id", courseReviewController.destroy);

module.exports = router;
