const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: uuidv4(),
    username: "Md.Shagor Mia",
    email: "safwan@gmail.com",
  },
  {
    id: uuidv4(),
    username: "Md.hasib",
    email: "hasin@gmail.com",
  },
];

module.exports = users;
