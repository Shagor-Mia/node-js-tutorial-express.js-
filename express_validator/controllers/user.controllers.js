const registerUser = (req, res) => {
  try {
    const { name, email, password, dob } = req.body;
    const newUser = { name, email, password, dob };

    return res.status(201).json({
      message: "user created.",
      newUser,
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

const logInUser = (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = { email, password };
    if (email === "infinityshagor18557@gmail.com" && password === "sagor7531") {
      return res.status(201).json({
        message: "user logged in.",
      });
    } else
      return res.status(400).json({
        message: "email or password missing.",
      });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

module.exports = { registerUser, logInUser };
