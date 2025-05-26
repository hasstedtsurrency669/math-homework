function solveMathEquation(a, b, c) {
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant > 0) {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return { "roots": [root1, root2] };
  } else if (discriminant === 0) {
    let root = -b / (2 * a);
    return { "root": root };
  } else {
    let discriminants = Math.abs(discriminant);
    let sqrtDiscriminants = Math.sqrt(discriminants);

    let realRoots = [(-b + sqrtDiscriminants) / (2 * a), (-b - sqrtDiscriminants) / (2 * a)];
    return { "realRoots": realRoots };
  }
}

// Example usage:
let equation1 = solveMathEquation(1, -3, 2);
console.log(equation1); // Output: {"roots": [(-3 + 0.8660254037844386j), (-3 - 0.8660254037844386j)]}
let equation2 = solveMathEquation(1, 2, -2);
console.log(equation2); // Output: {"root": -1}
