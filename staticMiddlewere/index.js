const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use("*", (req, res) => {
  res.status(400).send({
    message: "not a valid route!",
  });
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
