let Users = require("../models/user.model");
const { v4: uuidv4 } = require("uuid");

// GET:all users
const getAllUser = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// GET:get one user.
const getOneUser = async (req, res) => {
  try {
    const OneUser = await Users.findOne({ id: req.params.id });
    res.status(200).json(OneUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
// POST:
const createUser = async (req, res) => {
  try {
    const newUser = new Users({
      id: uuidv4(),
      name: req.body.name,
      age: Number(req.body.age),
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
// UPDATE:
const updateUser = async (req, res) => {
  try {
    const user = await Users.findOne({ id: req.params.id });

    (user.name = req.body.name),
      (user.age = Number(req.body.age)),
      await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
//DELETE:
const deleteUser = async (req, res) => {
  try {
    await Users.deleteOne({ id: req.params.id });
    res.status(200).json({ message: "1 id is deleted." });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getAllUser, getOneUser, createUser, updateUser, deleteUser };
// module.exports = getAllUser;
// module.exports = createUser;
