// const { v4: uuidv4 } = require("uuid");

// const users = [
//   {
//     id: uuidv4(),
//     username: "Md.Shagor Mia",
//     email: "safwan@gmail.com",
//   },
//   {
//     id: uuidv4(),
//     username: "Md.hasib",
//     email: "hasin@gmail.com",
//   },
// ];

// module.exports = users;

const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
