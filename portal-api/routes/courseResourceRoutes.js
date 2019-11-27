const express = require("express");
const router = express.Router();
const courseResourceController = require("../controllers/courseResourceController");

/*
 * GET the listing on pending course resources for this course
 */
router.get("/:course/pending", courseResourceController.listPending);

/*
 * POST
 */
router.post("/:course", courseResourceController.create);

/*
 * DELETE
 */
// router.delete("/:id", courseController.destroy);

module.exports = router;
