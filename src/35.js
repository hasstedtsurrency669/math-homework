function sumEvenNumbers(n) {
  let total = 0;
  for (let i = 2; i <= n; i += 2) {
    if (i % 2 === 0) {
      total += i;
    }
  }
  return total;
}

console.log(sumEvenNumbers(10));
