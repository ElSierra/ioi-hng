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
 console.log(operation_input.value);
   if (
    
    operation_input.value === "addition" ||
    operation_input.value === "subtraction" ||
    operation_input.value === "multiplication"
  ) {
    console.log(true);
    let result = performOperation(operation_input.value, x, y);

    res.send({
      slackUsername: "hojoisaac",
      results: result.results,
      operation_type: result.operation_type,
    });
  } else {
    nlp(operation_input.value).then((results) => {
      ({ number1, number2, operator } = results);
      console.log(results);
      let result = performOperation(operator, Number(number1), Number(number2));
     // console.log(result);

   const response = {
        slackUsername: "hojoisaac",
        result: result.results,
        operation_type: result.operation_type,
      }

      const jsonContent = JSON.stringify(response);
      res.end(jsonContent);
    });
  }  
});
