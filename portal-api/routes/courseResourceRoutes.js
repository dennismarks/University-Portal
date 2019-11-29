const express = require("express");
const router = express.Router();
const courseResourceController = require("../controllers/courseResourceController");

/*
 * GET the listing on pending course resources for this course
 */
router.get("/:school/:course/pending", courseResourceController.listPending);

/*
 * POST
 */
router.post("/:school/:course", courseResourceController.create);

/*
 * PATCH
 */
router.patch("/:school/:course", courseResourceController.update);

/*
 * DELETE
 */
router.delete("/:school/:course/:id", courseResourceController.destroy);

module.exports = router;
