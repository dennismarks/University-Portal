const express = require("express");
const router = express.Router();
const courseResourceController = require("../controllers/courseResourceController");


/*
 * GET
 */
router.get("/", courseResourceController.list);


/*
 * POST
 */
router.post("/", courseResourceController.create);


/*
 * PATCH
 */
router.patch("/:id", courseResourceController.update);

/*
 * DELETE
 */
router.delete("/:id", courseResourceController.destroy); // should we use /:courseid/:id, what is faster

module.exports = router;
