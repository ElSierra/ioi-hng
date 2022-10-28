const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(cors());

app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.send({
    slackUsername: "hojoisaac",
    backend: true,
    age: 23,
    bio: "A fullstack developer (Node + React)",
  });
});

app.listen(
  process.env.PORT || port,
  console.log(`Server Started at Port ${process.env.PORT || port}`)
);
