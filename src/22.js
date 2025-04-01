function calculate(num1, num2, operation) {
  switch(operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        throw new Error('Division by zero is not allowed.');
      }
    default:
      throw new Error('Unsupported operation');
  }
}

function main() {
  const result = calculate(5, 3, '+');
  console.log(result);
}

main();
