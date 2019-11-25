"use strict";
const log = console.log;
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const { mongoose } = require("./db/mongoose");

/* Routes from router */
// const templates = require("./routes/_templateRoutes");
const courseResources = require("./routes/courseResourceRoutes");
/* Routes from router end */

const app = express();
app.use(bodyParser.json());

app.use(express.static("../frontend/build"));
// app.use("/api/v1", router);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/frontend/build/index.html");
});

/* app object routes */
app.use("/api/v1/course-resources", courseResources);
/* app object routes end */

// GET /api/v1/templates/:id

const port = process.env.PORT || 3001;
app.listen(port, () => {
  log(
    `Listening on port ${port}... \n For development use http://localhost:3001`
  );
});
