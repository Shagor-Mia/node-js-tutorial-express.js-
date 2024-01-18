let users = require("../models/user.model");
const { v4: uuidv4 } = require("uuid");

// GET:
const getAllUser = (req, res) => {
  res.status(200).json({ users });
};
// POST:
const createUser = (req, res) => {
  const newUser = {
    id: uuidv4(),
    Name: req.body.username,
    Mail: req.body.email,
  };
  users.push(newUser);
  res.status(200).json(users);
};
// UPDATE:
const updateUser = (req, res) => {
  const userId = req.params.id;
  const { username, email } = req.body;
  users
    .filter((user) => user.id === userId)
    .map((selectedUser) => {
      selectedUser.username = username;
      selectedUser.email = email;
    });
  res.status(201).json(users);
};
// UPDATE:
const deleteUser = (req, res) => {
  const userId = req.params.id;

  users = users.filter((user) => user.id !== userId);

  res.status(201).json(users);
};

module.exports = { getAllUser, createUser, updateUser, deleteUser };
// module.exports = getAllUser;
// module.exports = createUser;
