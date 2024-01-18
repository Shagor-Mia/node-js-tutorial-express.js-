const path = require("path");
const users = require("../models/user.model");
// const htmlForm = require("../views/user.view");

exports.getUser = (req, res) => {
  // res.send(htmlForm)
  res.sendfile(path.join(__dirname + "/../views/index.html"));
};

exports.postUser = (req, res) => {
  const Name = req.body.name;
  const Age = Number(req.body.age);
  const user = {
    Name,
    Age,
  };
  users.push(user);
  res.status(201).json({
    success: true,
    users,
  });
};
