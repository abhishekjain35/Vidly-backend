const config = require("config");
const winston = require("winston");
require("express-async-errors");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const express = require("express");
const app = express();
require("./startup/routes")(app);
require("./startup/db")();

process.on("uncaughtException", err => {
  winston.error(err.message, err);
  process.exit(1);
});

process.on("unhandledRejection", err => {
  winston.error(err.message, err);
  process.exit(1);
});

winston.add(new winston.transports.File({ filename: "logfile.log" }));

if (!config.get("jwtPrivateKey")) {
  console.error("FATAL ERROR: jwtPrivateKey is not defined.");
  process.exit(1);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
