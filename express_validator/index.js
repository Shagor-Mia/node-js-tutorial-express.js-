const express = require("express");
const app = express();
const { body, validationResult } = require("express-validator");
const router = require("./routes/user.route");
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>testing user route.</h2>");
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
