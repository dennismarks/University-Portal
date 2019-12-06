const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

const { isAdminUser, isUserAuthenticated } = require("../auth");

/*
 * GET
 */
router.get("/", [isUserAuthenticated, isAdminUser], userController.list);

/**
 * Me route
 */
router.get("/me", [isUserAuthenticated], userController.me);

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
router.get("/:id", [isUserAuthenticated], userController.show);

/*
 * POST
 */
router.post("/", userController.create);

/*
 * PATCH
 */
router.patch("/:id", [isUserAuthenticated], userController.update);

/*
 * DELETE
 */
router.delete(
  "/:id",
  [isUserAuthenticated, isAdminUser],
  userController.destroy
);

/*
 * POST -- add to users list of the courses they are currenty taking
 */
router.post(
  "/add-current/course/:id",
  [isUserAuthenticated],
  userController.addCurrent
);

/*
 * POST -- add to users list of the courses they have taken
 */
router.post(
  "/add-taken/course/:id",
  [isUserAuthenticated],
  userController.addTaken
);

/*
 * POST -- add to users list of the courses they are planning on taking
 */
router.post(
  "/add-planned/course/:id",
  [isUserAuthenticated],
  userController.addPlanned
);

module.exports = router;
