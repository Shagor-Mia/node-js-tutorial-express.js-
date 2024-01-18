const express = require("express");
const app = express();
const PORT = 3000;
const userRouter = require("./routes/users.route");

app.use(express.urlencoded({ extended: true }));

app.use(userRouter);

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
