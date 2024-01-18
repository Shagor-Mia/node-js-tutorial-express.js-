const { check, body } = require("express-validator");

exports.userRegistrationCheck = [
  //input validation:
  check("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required!")
    .isLength({ min: 5 })
    .withMessage("Name must have at least 5 character!"),
  check("email")
    .trim()
    .notEmpty()
    .withMessage("email is required!")
    .isEmail()
    .withMessage("not a valid email!"),
  check("password")
    .trim()
    .notEmpty()
    .withMessage("password is required!")
    .isLength({ min: 8 })
    .withMessage("password must have at least 8 character!"),
  check("dob")
    .trim()
    .notEmpty()
    .withMessage("dob is required!")
    .isISO8601()
    .toDate()
    .withMessage("not a valid dob!"),
];

exports.userLogInCheck = [
  //input validation:

  body("email")
    .trim()
    .notEmpty()
    .withMessage("email is required!")
    .isEmail()
    .withMessage("not a valid email!"),

  body("password")
    .trim()
    .notEmpty()
    .withMessage("password is required!")
    .isLength({ min: 8 })
    .withMessage("password must have at least 8 character!"),
];
