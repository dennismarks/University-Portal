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

module.exports = router;
