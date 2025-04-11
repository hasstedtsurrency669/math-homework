function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2 || num === 3) return true;

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function calculateGCD(num1, num2) {
  if (!isPrime(num1)) num1 = Math.min(num1, num2);
  if (!isPrime(num2)) num2 = Math.min(num1, num2);

  while (num1 !== num2) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }

  return num1;
}

function calculateLCM(num1, num2) {
  let greatestCommonDivisor = calculateGCD(num1, num2);
  return (num1 / greatestCommonDivisor) * num2;
}
