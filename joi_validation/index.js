const express = require("express");
const router = require("./routes/user.router");

const app = express();

const PORT = 3002;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>testing joi validation.</h2>");
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
