/**
 * User Controller
 *
 * @description :: Server-side logic for managing users.
 */

const User = require("../models/user");
const { ObjectID } = require("mongodb");

// (create) on single object -- POST /
// TODO  fix create promise error
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
    if (e.name === "MongoError" && e.code === 11000) {
      res.status(409).send(
        Object.keys(e.keyValue).reduce(
          (acc, key) => ({
            ...acc,
            [key]: `User with ${key} ${e.keyValue[key]} already exists`
          }),
          {}
        )
      );
    } else {
      res.status(500).send(e);
    }
  }
}

// (read) all objects -- GET /
async function list(req, res) {
  const skip = parseInt(req.query.skip) || 0;
  const limit = parseInt(req.query.limit) || 10;

  try {
    const users = await User.find()
      .skip(skip)
      .limit(limit);
    const numUsers = await User.count();
    res.set("X-Total-Count", numUsers).send({ users });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

// (read) one single object -- GET /:id
async function show(req, res) {
  const { id } = req.params;

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
      // Add the user's id to the session cookie.
      // We can check later if this exists to ensure we are logged in.
      req.session.user = user;
      res.status(200).send(user);
    })
    .catch(error => {
      if (error.payload) {
        res.status(401).send(error.payload);
      } else {
        res.status(500).send(error.message);
      }
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

function me(req, res) {
  const { user } = req.session;
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(401).send();
  }
}

function addCurrent(req, res) {
  const { user } = req.session;
  const courseId = req.params.id;
  if (!user) {
    res.status(401).send("Not logged in");
    return;
  }
  User.findById(user._id).then(currUser => {
    if (!currUser) {
      res.status(401).send("User not found in database anymore");
      return;
    }
    if (currUser.currentCourses.find(courseIdObj => courseIdObj == courseId)) {
      res
        .status(409)
        .send("Course already added")
        .redirect("/login");
      return;
    }

    currUser.currentCourses.push(courseId);
    currUser.save().then(
      result => {
        res.send(result);
        // console.log(result)
      },
      err => {
        res.status(400).send(err); // 400 for bad request
      }
    );
  });
}

function addTaken(req, res) {
  const { user } = req.session;
  const courseId = req.params.id;
  if (!user) {
    res.status(401).send("Not logged in");
    return;
  }
  User.findById(user._id).then(currUser => {
    if (!currUser) {
      res.status(401).send("User not found in database anymore");
      return;
    }
    if (currUser.takenCourses.find(courseIdObj => courseIdObj == courseId)) {
      res
        .status(409)
        .send("Course already added")
        .redirect("/login");
      return;
    }

    currUser.takenCourses.push(courseId);
    currUser.save().then(
      result => {
        res.send(result);
        // console.log(result)
      },
      err => {
        res.status(400).send(err); // 400 for bad request
      }
    );
  });
}

function addPlanned(req, res) {
  const { user } = req.session;
  const courseId = req.params.id;
  if (!user) {
    res.status(401).send("Not logged in");
    return;
  }
  User.findById(user._id).then(currUser => {
    if (!currUser) {
      res.status(401).send("User not found in database anymore");
      return;
    }
    if (currUser.plannedCourses.find(courseIdObj => courseIdObj == courseId)) {
      res
        .status(409)
        .send("Course already added")
        .redirect("/login");
      return;
    }

    currUser.plannedCourses.push(courseId);
    currUser.save().then(
      result => {
        res.send(result);
        // console.log(result)
      },
      err => {
        res.status(400).send(err); // 400 for bad request
      }
    );
  });
}

module.exports = {
  create,
  list,
  show,
  update,
  destroy,
  login,
  logout,
  me,
  addCurrent,
  addTaken,
  addPlanned
};
