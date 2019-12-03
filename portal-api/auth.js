const session = require("express-session");

/**
 * Sets up authentication middleware
 *
 * @param {*} app Express application
 */
function setupAuth(app) {
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 30 * 60 * 1000,
        httpOnly: true
      }
    })
  );
}

/**
 * Checks whether the user is authenticated.
 *
 * @param {*} req Request object
 * @param {*} res Response object
 * @param {*} next Next middleware callback
 */
function isUserAuthenticated(req, res, next) {
  const { user } = req.session;

  if (!user) {
    return res.status(401).send();
  } else {
    next();
  }
}

/**
 * Checks whether the user is an admin.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function isAdminUser(req, res, next) {
  const { user } = req.session;

  if (!user || !user.role === "admin") {
    return res.status(403).send();
  } else {
    next();
  }
}

module.exports = {
  setupAuth,
  isAdminUser,
  isUserAuthenticated
};
