require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const myMiddleWere = (req, res, next) => {
  console.log("this MIDDLEWERE");
  req.currentTime = new Date(Date.now());
  next();
};

app.use(myMiddleWere);

app.use((req, res, next) => {
  res.send("404.not found!");
});
app.use((err, req, res, next) => {
  res.status(500).send("Something broke!");
});

app.get("/", (req, res) => {
  console.log("next connection" + req.currentTime);
  res.send("get from middlewere");
});
app.get("/about", (req, res) => {
  console.log("i am about" + req.currentTime);
  res.send("get from middlewere");
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
