const userModel = require("../models/userModel");

/**
 * User Controller
 *
 * @description :: Server-side logic for managing users.
 */

// (create) on signle object -- POST /
function create(req, res) {}

// (read) all objects -- GET /
function list(req, res) {}

// (read) one single object -- GET /:id
function show(req, res) {}

// (update) one single object PATH /:id
function update(req, res) {}

// (destroy) one single object DELETE /:id
function destroy(req, res) {}

module.exports = {
  create,
  list,
  show,
  update,
  destroy
};
