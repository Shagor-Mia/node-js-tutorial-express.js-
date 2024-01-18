require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("this is from env.");
});

app.listen(PORT, (req, res) => {
  console.log(`server running at http://localhost:${PORT}`);
});
