const express = require("express");
const router = express.Router();
const courseResourceController = require("../controllers/courseResourceController");

/**
 * GET all the pending course resources
 */
router.get("/:school", courseResourceController.list);

/*
 * GET the listing on pending course resources for this course
 */
router.get("/:school/:course/pending", courseResourceController.listPending);

/*
 * GET the listing on approved course resources for this course
 */
router.get("/:school/:course/approved", courseResourceController.listApproved);

/*
 * POST
 */
router.post("/:school/:course", courseResourceController.create);

/*
 * PATCH - update status of the course resources to approved
 */
router.patch("/:school/:course/:resId", courseResourceController.updatePending)

/*
 * PATCH
 */
// router.patch("/:school/:course", courseResourceController.update);

/*
 * DELETE
 */
router.delete("/:school/:course/:id", courseResourceController.destroy);

module.exports = router;
