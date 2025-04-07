function squareMatrix(matrix) {
  return matrix.map(row => row.map(value => value * value));
}

const input = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(squareMatrix(input));
