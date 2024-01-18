const express = require("express");
const app = express();
const UserRouter = require("./routes/users.route");

app.use("/api/user", UserRouter);

app.use("/register", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/register.html");
});

app.use("/login", (req, res) => {
  res.send("this is login route.");
});
app.use("/", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/index.html");
});

app.use((req, res) => {
  res.send("<h1>404! not valid.</h1>");
});
module.exports = app;
