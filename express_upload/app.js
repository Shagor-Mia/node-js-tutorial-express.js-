const multer = require("multer");
const express = require("express");
const app = express();

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

app.post("/register", upload.single("image"), (req, res) => {
  res.status(201).send("file uploaded.");
});

app.use((req, res) => {
  res.send("<h1>404! not valid.</h1>");
});
module.exports = app;
