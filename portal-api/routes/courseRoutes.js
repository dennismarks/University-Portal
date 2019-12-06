const express = require("express");
const router = express.Router();

const { isAdminUser, isUserAuthenticated } = require("../auth");
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
 *
 */
router.get("/top", courseController.listTop);

/*
 * POST
 */
router.post("/", [isUserAuthenticated, isAdminUser], courseController.create);

/*
 * GET
 */
router.get("/search", courseController.listSearch);

/*
 * POST a list of all courses from the given ids
 */
router.post("/ids", courseController.listIds);

/*
 * DELETE
 */
// router.delete("/:id", courseController.destroy);

module.exports = router;
