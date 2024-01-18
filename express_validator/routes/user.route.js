const express = require("express");
const { body, validationResult } = require("express-validator");
const { runValidation } = require("../validation/validate");
const { registerUser, logInUser } = require("../controllers/user.controllers");
const {
  userRegistrationCheck,
  userLogInCheck,
} = require("../validation/usercheck");

const router = express.Router();

router.post("/register", userRegistrationCheck, runValidation, registerUser);

router.post("/login", userLogInCheck, runValidation, logInUser);

module.exports = router;
