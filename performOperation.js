function performOperation(operation_type, x, y) {
  let results;
  const operation = {
    ADD: "addition",
    SUBTRACT: "subtraction",
    MULTIPLACTION: "multiplication",
  };
  switch (operation_type) {
    case operation.ADD:
      results = x + y;
      break;
    case operation.SUBTRACT:
      results = x - y;
      break;
    case operation.MULTIPLACTION:
      results = x * y;
      break;
    default:
      results = null;

      break;
  }
  return { results: results, operation_type: operation_type };
}

module.exports = performOperation;
