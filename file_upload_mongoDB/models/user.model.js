const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "username is required."],
  },
  image: {
    type: String,
    required: [true, "user image is required."],
  },
});

module.exports = mongoose.model("Uploads", userSchema);
