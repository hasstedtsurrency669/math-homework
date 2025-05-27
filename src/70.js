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
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

function calculateMathExpression(expression) {
  const numbers = expression.split(' ');
  let result = Number(numbers[0]);
  
  for (let i = 1; i < numbers.length; i++) {
    result = multiplyNumbers(result, parseFloat(numbers[i]));
  }
  
  if (numbers[numbers.length - 1] === '+') return addNumbers(Number(result), 0);
  else if (numbers[numbers.length - 1] === '-') return subtractNumbers(Number(result), 0);
  else if (numbers[numbers.length - 1] === '*') return multiplyNumbers(Number(result), 1);
  else if (numbers[numbers.length - 1] === '/') return divideNumbers(Number(result), 1);
}
