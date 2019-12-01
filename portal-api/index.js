"use strict";
require("dotenv").config();
const log = console.log;
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const { setupAuth } = require("./auth");
const { mongoose } = require("./db/mongoose");

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});

setupAuth(app);

/* Routes from router */

const courseRoutes = require("./routes/courseRoutes");
const courseResourceRoutes = require("./routes/courseResourceRoutes");
const courseReviewRoutes = require("./routes/courseReviewRoutes");
const redditCommentRoutes = require("./routes/redditCommentRoutes");
const userRoutes = require("./routes/user");
/* Routes from router end */

app.use(bodyParser.json());

/* Server Resource Routes */
app.use("/api/v1/courses", courseRoutes);
app.use("/api/v1/courses/course-resource", courseResourceRoutes);
app.use("/api/v1/courses/course-review", courseReviewRoutes);
app.use("/api/v1/courses/reddit-comments", redditCommentRoutes);
app.use("/api/v1/user", userRoutes);
/* Server Resource Routes End */

/* Frontend Resource Routes */
app.use(express.static(path.resolve(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});
/* Frontend Resource Routes End */

const port = process.env.PORT || 3001;
app.listen(port, () => {
  log(
    `Listening on port ${port}... \n For development use http://localhost:${port}`
  );
});
