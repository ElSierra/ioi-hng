const { NlpManager } = require("node-nlp");
const fs = require("fs");

const data = fs.readFileSync("./model.nlp", "utf8");
const manager = new NlpManager();
manager.import(data);
//!: Natural Language Processor
let operation = async (operation_type) => {
  const result = await manager.process(operation_type);

  //! Searches for keywords in the statement passed

  // ! Check: makes sure correct integer is passed

  return result.classifications[0].intent;
};

module.exports = operation;
