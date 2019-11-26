const express = require("express");
const router = express.Router();
const courseResourceController = require("../controllers/courseResourceController");


/*
 * GET
 */
router.get("/:course/", courseResourceController.list);


/*
 * POST
 */
router.post("/:course/", courseResourceController.create);


/*
 * PATCH
 */
router.patch("/:course/:id", courseResourceController.update);

/*
 * DELETE
 */
router.delete("/:id", courseResourceController.destroy); // should we use /:courseid/:id, what is faster

module.exports = router;
