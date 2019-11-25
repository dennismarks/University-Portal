const User = require("../models/user");
const { ObjectID } = require("mongodb");
/**
 * User Controller
 *
 * @description :: Server-side logic for managing users.
 */

// (create) on single object -- POST /
async function create(req, res) {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    res.status(400).send();
  }

  try {
    const user = await User.create({
      username,
      password,
      email
    });

    res.status(201).send(user);
  } catch (e) {
    res.status(500).send(e);
  }
}

// (read) all objects -- GET /
async function list(req, res) {
  try {
    const users = await User.find();

    res.status(200).send(users);
  } catch (e) {
    res.status(500).send(e);
  }
}

// (read) one single object -- GET /:id
async function show(req, res) {
  const { id } = req.params;

  console.log(id);

  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }

  try {
    const user = await User.findById(id);

    if (!user) {
      res.status(404).send();
    } else {
      res.status(200).send(user);
    }
  } catch (e) {
    res.status(400).send(e);
  }
}

// (update) one single object PATH /:id
function update(req, res) {}

// (destroy) one single object DELETE /:id
function destroy(req, res) {}

function login(req, res) {
  const { username, password } = req.body;

  User.findByUsernameAndPassword(username, password)
    .then(user => {
      if (!user) {
        res.status(401).send();
      } else {
        // Add the user's id to the session cookie.
        // We can check later if this exists to ensure we are logged in.
        req.session.user = {
          id: user._id,
          role: user.role
        };
        res.status(200).send();
      }
    })
    .catch(error => {
      res.status(400).send();
    });
}

function logout(req, res) {
  req.session.destroy(error => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send();
    }
  });
}

module.exports = {
  create,
  list,
  show,
  update,
  destroy,
  login,
  logout
};
