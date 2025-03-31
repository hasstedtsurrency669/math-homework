function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    throw new Error("Divide by zero is not allowed.");
  }
}

function square(x) {
  return x * x;
}

function cube(x) {
  return x ** 3;
}
