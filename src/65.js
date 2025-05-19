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
    throw new Error('Cannot divide by zero');
  }
}

function getGCD(x, y) {
  while (y !== 0) {
    let temp = y;
    y = x % y;
    x = temp;
  }
  return x;
}
