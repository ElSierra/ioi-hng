function performOperation(operation_type, x, y) {
  let results;
  const operation = {
    ADD: "addition",
    SUBTRACT: "subtraction",
    MULTIPLICATION: "multiplication",
  };
  //Get key of operation
    const operation_key = Object.keys(operation).find(
        (key) => operation[key] === operation_type
        );
        console.log(operation_key);

  switch (operation_type) {
    case operation.ADD:
      results = x + y;
      break;
    case operation.SUBTRACT:
      results = x - y;
      break;
    case operation.MULTIPLICATION:
      results = x * y;
      break;
    default:
      results = null;

      break;
  }
  return { results: results, operation_type: operation_type };
}

module.exports = performOperation;
