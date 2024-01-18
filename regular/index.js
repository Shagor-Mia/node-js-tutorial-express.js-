const express = require("express");
const app = express();
const PORT = 3000;

app.get("/User/:id([0-9]{3})", (req, res) => {
  const Id = req.params.id;
  res.send(`your id is : ${Id}`);
});

app.get("/User/:title([a-zA-Z0-9]+)", (req, res) => {
  const Title = req.params.title;
  res.send(`your Title is : ${Title}`);
});

app.use("*", (req, res) => {
  res.status(400).send({
    message: "not a valid route!",
  });
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
