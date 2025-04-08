function solveMathProblem(problem) {
  const result = performCalculation(problem);
  console.log(result);
}

function performCalculation(problem) {
  // Implement your math operations here
  let num1, num2;
  switch (problem) {
    case "add":
      num1 = parseFloat(prompt("Enter the first number: "), "");
      num2 = parseFloat(prompt("Enter the second number: "), "");
      return num1 + num2;
    case "subtract":
      num1 = parseFloat(prompt("Enter the first number: "), "");
      num2 = parseFloat(prompt("Enter the second number: "), "");
      return num1 - num2;
    case "multiply":
      num1 = parseFloat(prompt("Enter the first number: "), "");
      num2 = parseFloat(prompt("Enter the second number: "), "");
      return num1 * num2;
    case "divide":
      num1 = parseFloat(prompt("Enter the numerator: "), "");
      num2 = parseFloat(prompt("Enter the denominator: "), "");
      if (num2 === 0) {
        console.log("Error: Division by zero is not allowed.");
      } else {
        return num1 / num2;
      }
    default:
      console.log("Invalid operation. Please enter 'add', 'subtract', 'multiply', or 'divide'.");
      return "Invalid problem";
  }
}

// Example usage
solveMathProblem("add");
