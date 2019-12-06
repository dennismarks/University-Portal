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
      resave: true,
      saveUninitialized: false,
      cookie: {
        maxAge: 30 * 60 * 1000,
        expires: 30 * 60 * 1000,
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
    res.status(401).send();
  } else {
    return next();
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
    res.status(403).send();
  } else {
    return next();
  }
}

module.exports = {
  setupAuth,
  isAdminUser,
  isUserAuthenticated
};
