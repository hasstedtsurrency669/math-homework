// This is just an example to demonstrate how you can use JavaScript to solve math problems.
function calculate(x, y, operation) {
  switch (operation) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    case '/':
      if (y !== 0) {
        return x / y;
      } else {
        throw new Error('Division by zero is not allowed');
      }
    default:
      throw new Error(`Unsupported operation: ${operation}`);
  }
}

// Example usage:
console.log(calculate(5, 3, '+')); // Output: 8
console.log(calculate(5, 3, '-')); // Output: 2
console.log(calculate(4.5, 1.2, '*')); // Output: 5.4
console.log(calculate(4.5, 1.2, '/')); // Output: 3.75
