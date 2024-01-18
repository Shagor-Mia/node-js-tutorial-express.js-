const { check, validationResult } = require("express-validator");

exports.runValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    let errorList = errors.array().map((errors) => errors.msg);
    return res.status(400).json({ errors: errorList });
  }
  next();
};
