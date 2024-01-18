const mongoose = require("mongoose");
const config = require("./config");

const DB_URL = config.db.url;

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log(" MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
