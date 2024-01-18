const express = require("express");
const { getUser, postUser } = require("../controllers/user.controller");
const router = express.Router();

router.get("/", getUser);
router.post("/", postUser);

module.exports = router;
