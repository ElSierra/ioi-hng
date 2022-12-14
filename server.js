//! Author: Ojo Isaac
//* HNG Internship {Backend Track}
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const performOperation = require("./performOperation");
const nlp = require("./nlp");

const app = express();
const port = 8080;
const slackUsername = "hojoisaac";

app.use(cors());

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.send({
    slackUsername: slackUsername,
    backend: true,
    age: 23,
    bio: "A fullstack developer (Node + React)",
  });
});

app.listen(
  process.env.PORT || port,
  console.log(`Server Started at Port ${process.env.PORT || port}`)
);

app.post("/api", (req, res) => {
  console.log(req.body);
  const operation_input = req.body.operation_type;
  const x = Number(req.body.x);
  const y = Number(req.body.y);
  console.log(operation_input);
  if (
    operation_input === "addition" ||
    operation_input === "subtraction" ||
    operation_input === "multiplication"
  ) {
    console.log(true);
    let result = performOperation(operation_input, x, y);
    const response = {
      slackUsername: slackUsername,
      result: result.results,
      operation_type: result.operation_type,
    };
    res.send(response);
  } else {
    nlp(operation_input).then((results) => {
      // console.log(results);
      let result;

      // const response = {
      //   slackUsername: slackUsername,
      //   result: result.results,
      //   operation_type: result.operation_type,
      // };

      // const jsonContent = JSON.stringify(response);
      // res.end(jsonContent);

      if (results === "operation.sub") {
        result = performOperation("subtraction", x, y);
        // // console.log(result);
      } else if (results === "operation.mul") {
        result = performOperation("multiplication", x, y);
      } else if (results === "operation.add") {
        result = performOperation("addition", x, y);
      }

      const response = {
        slackUsername: slackUsername,
        result: result.results,
        operation_type: result.operation_type,
      };
      res.send(response);
    });
  }
});
