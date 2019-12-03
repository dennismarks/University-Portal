const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

const { isAdminUser } = require("../auth");

/*
 * GET
 */
router.get("/", userController.list);

/**
 * Me route
 */
router.get("/me", userController.me);

/**
 * Login route
 */
router.post("/login", userController.login);

/**
 * Logout route
 */
router.get("/logout", userController.logout);

/*
 * GET
 */
router.get("/:id", userController.show);

/*
 * POST
 */
router.post("/", userController.create);

/*
 * PATCH
 */
router.patch("/:id", userController.update);

/*
 * DELETE
 */
router.delete("/:id", userController.destroy);

/*
 * POST -- add to users list of the courses they are currenty taking
 */
router.post("/add-current/course/:id", userController.addCurrent);

/*
 * POST -- add to users list of the courses they have taken
 */
router.post("/add-taken/course/:id", userController.addTaken);

/*
 * POST -- add to users list of the courses they are planning on taking
 */
router.post("/add-planned/course/:id", userController.addPlanned);

module.exports = router;
