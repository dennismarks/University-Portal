"use strict";
const log = console.log;
const express = require("express");
const bodyParser = require('body-parser') 
const { mongoose } = require("./db/mongoose");

/* Routes from router */
const users = require("./routes/userRoutes");
/* Routes from router end */

const app = express();
app.use(bodyParser.json());

/* app object routes */
// app.use("/users", users);


const port = process.env.PORT || 3001;
app.listen(port, () => {
  log(`Listening on port ${port}... \n For development use http://localhost:3001`);
});
