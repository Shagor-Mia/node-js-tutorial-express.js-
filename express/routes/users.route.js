const express = require("express");
const router = express.Router();

router.get("/about", (req, res) => {
  res.send("this is about route.");
});
router.get("/login", (req, res) => {
  res.send("this is login route.");
});

module.exports = router;
