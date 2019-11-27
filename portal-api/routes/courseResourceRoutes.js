const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");


/*
 * GET
 */
router.get("/course-resource/:course", courseController.list);


/*
 * POST
 */
router.post("/course-resource/:course", courseController.create);

/*
 * DELETE
 */
// router.delete("/:id", courseController.destroy);

module.exports = router;
