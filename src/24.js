// This is an example of how you can use JavaScript to solve math problems.
// Note: The actual solution involves more complex calculations and may not be fully written here.

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
  if (y === 0) throw new Error('Division by zero is not allowed.');
  return x / y;
}

// Example usage:
console.log(add(10, 5)); // Output: 15
console.log(subtract(4, 2)); // Output: 2

const x = 8;
const y = 3;

console.log(`The result of adding ${x} and ${y} is: ${add(x, y)}`);
console.log(`The result of subtracting ${y} from ${x} is: ${subtract(y, x)}`);

// Example 1
console.log(`The result of multiplying ${x} and ${y} is: ${multiply(x, y)}`);

// Example 2
const z = divide(8, 2);
if (z === undefined) {
  console.error('Division by zero should not throw an error.');
}
