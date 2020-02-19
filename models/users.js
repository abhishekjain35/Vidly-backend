const Joi = require("joi");
const mongoose = require("mongoose");

const user = mongoose.model(
  "Users",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    email: {
      type: String,
      unique: true,
      required: true,
      minlength: 5,
      maxlength: 255
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 1024
    }
  })
);

function validateUser(user) {
  const Schema = {
    name: Joi.string()
      .min(5)
      .max(50)
      .required(),
    email: Joi.string()
      .min(5)
      .max(50)
      .required()
      .email(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required()
  };
  return Joi.validate(user, Schema);
}

exports.User = User;
exports.validate = validateUser;
