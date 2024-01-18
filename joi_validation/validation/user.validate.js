const Joi = require("joi");
const { schema } = require("./user.schema");

exports.runValidation = (schema) => {
  return (req, res, next) => {
    const { result, error } = schema.validate(req.body, {
      abortEarly: false,
      errors: { wrap: { label: "" } },
    });
    if (error) {
      const errorList = error.details.map((err) => err.message);
      return res
        .status(400)
        .json({ message: "something went Wrong!", errorList });
    }
    next();
  };
};
