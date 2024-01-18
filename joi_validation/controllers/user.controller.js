const Joi = require("joi");

const registerUser = (req, res) => {
  try {
    const user = {
      name: req.body.name,
      age: req.body.age,
      languages: req.body.language,
      email: req.body.email,
      password: req.body.password,
      dob: req.body.dob,
      isRegister: req.body.isRegister,
    };
    return res.status(200).json({ message: "user created!", user });
  } catch (error) {
    return res.status(404).send({ message: error.message });
  }
};

const LoggedIn = (req, res) => {
  try {
    return res.status(200).json({ message: "user logged in!" });
  } catch (error) {
    return res.status(404).send({ message: error.message });
  }
};

module.exports = { registerUser, LoggedIn };
