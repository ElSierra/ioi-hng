const { NlpManager } = require("node-nlp");
//!: Natural Language Processor
let operation = async (operation_type) => {
  let operator;
  let manager = new NlpManager({
    languages: ["en"],
    forceNER: true,
    ner: { useDuckling: false },
  });
  const result = await manager.process(operation_type);
  
  let [first, second] = result.sourceEntities;

  let x;
  let y;
//! Searches for keywords in the statement passed
  if (operation_type.match("add")) {
    operator = "addition";
  } else if (operation_type.match("mul")) {
    operator = "multiplication";
  } else if (operation_type.match("sub")) {
    operator = "subtraction";
  }
  // ! Check: makes sure correct integer is passed
  if (first.text.match(/[\+\-\*\/]/)) {
    if (second.text.match(/[\+\-\*\/]/)) {
      x = first.text.substr(1);
      y = second.text.substr(1);
    } else {
      x = first.text.substr(1);
      y = second.text;
    }
  } else if (second.text.match(/[\+\-\*\/]/)) {
    if (first.text.match(/[\+\-\*\/]/)) {
      x = first.text.substr(1);
      y = second.text.subtr(1);
    } else {
      x = first.text;
      y = second.text.substr(1);
    }
  } else {
    x = first.text;
    y = second.text;
  }
  return {
    number1: x,
    number2: y,
    operator: operator,
  };
};

module.exports = operation;
