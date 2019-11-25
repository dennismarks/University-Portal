"use strict";
require("dotenv").config();
const log = console.log;
const express = require("express");
const bodyParser = require("body-parser");

const { setupAuth } = require("./auth");
const { mongoose } = require("./db/mongoose");

const app = express();

setupAuth(app);

/* Routes from router */
// const templates = require("./routes/_templateRoutes");
const courseResources = require("./routes/courseResourceRoutes");
const userRoutes = require("./routes/user");
/* Routes from router end */

app.use(bodyParser.json());

app.use(express.static("../frontend/build"));
// app.use("/api/v1", router);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/frontend/build/index.html");
});

/* app object routes */
app.use("/api/v1/course-resources", courseResources);
app.use("/api/v1/user", userRoutes);
/* app object routes end */

const port = process.env.PORT || 3001;
app.listen(port, () => {
  log(
    `Listening on port ${port}... \n For development use http://localhost:3001`
  );
});
