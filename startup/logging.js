const winston = require("winston");
require("express-async-errors");

module.exports = function() {
  process.on("uncaughtException", err => {
    winston.error(err.message, err);
    process.exit(1);
  });

  process.on("unhandledRejection", err => {
    winston.error(err.message, err);
    process.exit(1);
  });

  winston.add(new winston.transports.File({ filename: "logfile.log" }));
};
