const mongoose = require("mongoose");

/* Connnect to our database */
// Get the URI of the local database, or the one specified on deployment.
const mongoURI =
  process.env.MONGODB_URI ||
  "mongodb://max:max@portal-shard-00-00-zus9j.mongodb.net:27017,portal-shard-00-01-zus9j.mongodb.net:27017,portal-shard-00-02-zus9j.mongodb.net:27017/test?ssl=true&replicaSet=Portal-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = { mongoose };
