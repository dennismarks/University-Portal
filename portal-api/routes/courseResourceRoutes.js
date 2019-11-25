const express = require("express");
const router = express.Router();
const courseResourceController = require("../controllers/courseResourceController");

/*
 * POST
 */
router.post("/", courseResourceController.create);

module.exports = router;
