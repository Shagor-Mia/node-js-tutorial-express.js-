let Users = require("./models/user.model");
require("./config/db");

const multer = require("multer");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//file uploads:
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});
const upload = multer({ storage: storage });

app.get("/api", (req, res) => {
  res.send("testing api.");
});

app.get("/register", (req, res) => {
  res.status(200).sendFile(__dirname + "/views/index.html");
});

app.post("/register", upload.single("image"), async (req, res) => {
  try {
    const newUser = new Users({
      name: req.body.name,
      image: req.file.filename,
    });
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.use((req, res) => {
  res.send("<h1>404! not valid.</h1>");
});
module.exports = app;
