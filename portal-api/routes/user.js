const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

const { isAdminUser } = require("../auth");

/*
 * GET
 */
router.get("/", userController.list);

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

/**
 * Login route
 */
router.post("/login", userController.login);

/**
 * Logout route
 */
router.get("/logout", userController.logout);

module.exports = router;
