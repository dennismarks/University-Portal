const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

/*
 * GET
 */
router.get("/", courseController.list);

/*
 * GET one course
 */
router.get("/:school/:code", courseController.show);

/*
 * POST
 */
router.post("/", courseController.create);

/*
 * DELETE
 */
// router.delete("/:id", courseController.destroy);

module.exports = router;
