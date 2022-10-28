const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(
  cors({
    origin: ["http://localhost:8080"],
    methods: "GET,POST,PUT,DELETE,OPTIONS",
  })
);

app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.send({
    slackUsername: "hojoisaac",
    backend: true,
    age: 23,
    bio: "A fullstack developer (Node + React)",
  });
});

app.listen(port, console.log(`Server Started at Port ${port}`));
