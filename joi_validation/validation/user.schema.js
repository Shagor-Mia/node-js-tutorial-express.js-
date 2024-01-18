const Joi = require("joi");

exports.schema = {
  registerSchema: Joi.object({
    name: Joi.string().min(3).max(32).required(),
    age: Joi.number().required(),
    languages: Joi.array().items(Joi.string()).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(16).required(),
    confirmPassword: Joi.ref("password"),
    dob: Joi.date().iso().greater(new Date("1990-01-01")).required(),
    dob: Joi.boolean().required(),
  }),
  loginSchema: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(16).required(),
  }),
};
