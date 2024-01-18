const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const userRouter = require("./routes/users.route");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

//route errors
app.get("*", (req, res, next) => {
  res.status(404).json({
    message: "invalid url!",
  });
  next();
});

//server errors:
app.get((err, req, res, next) => {
  res.status(500).json({
    message: "something broken!",
  });
  next();
});
module.exports = app;
