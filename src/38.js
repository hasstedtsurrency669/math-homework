function addNumbers(a, b) {
  return a + b;
}

function subtractNumbers(a, b) {
  return a - b;
}

function multiplyNumbers(a, b) {
  return a * b;
}

function divideNumbers(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    throw new Error('Division by zero is not allowed.');
  }
}

function calculateExpression(expression) {
  try {
    let [left, operator, right] = expression.split(" ");
    switch(operator) {
      case "+":
        return parseInt(left) + parseInt(right);
      case "-":
        return parseInt(left) - parseInt(right);
      case "*":
        return parseInt(left) * parseInt(right);
      case "/":
        if (parseInt(right) === 0) throw new Error('Division by zero is not allowed.');
        return parseInt(left) / parseInt(right);
    }
  } catch(error) {
    console.error(`Error: ${error.message}`);
  }
}

// Example usage
const expression = "12 + 7 * 3 - 4";
console.log(calculateExpression(expression));
