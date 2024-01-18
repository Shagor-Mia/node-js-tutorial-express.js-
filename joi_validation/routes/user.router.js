const express = require("express");
const { registerUser, LoggedIn } = require("../controllers/user.controller");
const { runValidation } = require("../validation/user.validate");
const { schema } = require("../validation/user.schema");
const router = express.Router();

//register:
router.post("/register", runValidation(schema.registerSchema), registerUser);

//login:
router.post("/login", runValidation(schema.loginSchema), LoggedIn);

module.exports = router;
