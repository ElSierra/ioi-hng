const { NlpManager } = require("node-nlp");
const manager = new NlpManager({ languages: ["en"] });
// Adds the utterances and intents for the NLP
manager.addDocument("en", "addition", "operation.add");
manager.addDocument("en", "add", "operation.add");
manager.addDocument("en", "can you add", "operation.add");
manager.addDocument("en", "add this two numbers", "operation.add");
manager.addDocument("en", "plus 5 and 2", "operation.add");
manager.addDocument("en", "addition of the next numbers", "operation.add");
manager.addDocument("en", "add the below numbers", "operation.add");
manager.addDocument("en", "do a sum of the numbers", "operation.add");
manager.addDocument("en", "what will be the sum", "operation.add");
manager.addDocument("en", "what will be the add", "operation.add");
manager.addDocument("en", "sum of the following", "operation.add");


manager.addDocument("en", "subtract", "opearation.sub");
manager.addDocument("en", "sub", "operation.sub");
manager.addDocument("en", "subtract one from the other", "operation.sub");
manager.addDocument("en", "minus one number from the other", "operation.sub");
manager.addDocument("en", "subtract the below numbers", "operation.sub");
manager.addDocument("en", "do a subtraction of the numbers", "operation.sub");
manager.addDocument("en", "what will be the subtraction", "operation.sub");
manager.addDocument("en", "what will be the sub", "operation.sub");
manager.addDocument("en", "subtraction of the following", "operation.sub");

manager.addDocument("en", "multiply", "operation.mul");
manager.addDocument("en", "multiply the below numbers", "operation.mul");
manager.addDocument("en", "do a multiplication of the numbers", "operation.mul");
manager.addDocument("en", "what will be the multiplication", "operation.mul");
manager.addDocument("en", "what will be the mul", "operation.mul");
manager.addDocument("en", "multiplication of the following", "operation.mul");
manager.addDocument("en", "can the you times", "operation.mul");
manager.addDocument("en", "times the following", "operation.mul");
manager.addDocument("en", "times of the numbers", "operation.mul");
manager.addDocument("en", "times x and y", "operation.mul");
manager.addDocument("en", "product of x and y", "operation.mul");
manager.addDocument("en", "waht is the product", "operation.mul");
manager.addDocument("en", "what is the product of", "operation.mul");
manager.addDocument("en", "the product of ", "operation.mul");





(async() => {
  await manager.train();
  await manager.save();
  const response = await manager.process("en", "subtract and minus");
  console.log(response);
})();