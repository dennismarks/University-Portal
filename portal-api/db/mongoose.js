const mongoose = require("mongoose");

/* Connnect to our database */
// Get the URI of the local database, or the one specified on deployment.
const mongoURI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/PortalAPI";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = { mongoose };
