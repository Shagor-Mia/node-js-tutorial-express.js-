const express = require("express");
const app = express();

const PORT = 3000;

//query parameter:
// app.get("/", (req, res) => {
//   const { id, name } = req.query;
//   res.send(`<h1>student Name :${name} and Id :${id}</h1>`);
// });

//Route parameter:
// app.get("/id/:Id/age/:Age", (req, res) => {
//   const { Id, Age } = req.params;
//   res.send(`<h1>student Age :${Age} and Id :${Id}</h1>`);
// });

// headers method:
// app.get("/", (req, res) => {
//   const id = req.header("id");
//   const name = req.header("name");
//   res.send(`<h1>student Name :${name}, and Id :${id}</h1>`);
// });

// JSON data/FormData method:
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/register", (req, res) => {
  const { fullName, Age } = req.body;
  res.send(`your name is ${fullName} and Age is ${Age}.`);
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
