function solveMathEquations() {
  // Define variables and equations as numbers
  var a = 4; 
  var b = 2;
  
  // Add the two numbers
  var result1 = a + b;

  // Subtract the second number from the first one
  var result2 = a - b;

  // Multiply the first number by the second
  var result3 = a * b;

  // Divide the sum of the first and third numbers by the second
  var result4 = (a+b)/b;
  
  // Calculate the square root of the result4
  var result5 = Math.sqrt(result4);
  
  // Display each result with a message
  console.log("The solution to the equation is: The sum of " + b + " and " + a + " equals " + result1, 
                "\nThe difference between the first number and " + b + " equals " + result2,
                "\nThe product of " + a + " and " + b + " equals " + result3,
                "\nDividing the sum of the two numbers by " + b + " gives us: " + result4, 
                "\nThe square root of " + result5 + " is: " + result5);
}
