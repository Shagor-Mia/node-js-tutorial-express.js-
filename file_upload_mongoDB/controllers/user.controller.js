let Users = require("../models/user.model");

const simpleGet = (req, res) => {
  res.send("testing api.");
};

module.exports = { simpleGet };
