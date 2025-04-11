function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y !== 0) {
    return x / y;
  } else {
    throw new Error('Division by zero is not allowed.');
  }
}

function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let result = n * factorial(n - 1);
    return result;
  }
}

console.log(add(3, 5)); // Output: 8
console.log(subtract(3, 5)); // Output: -2
console.log(multiply(3, 5)); // Output: 15
console.log(divide(10, 4)); // Output: 2.5
console.log(square(4)); // Output: 16
console.log(cube(4)); // Output: 64
console.log(factorial(3)); // Output: 6 (1 * 2 * 3)
