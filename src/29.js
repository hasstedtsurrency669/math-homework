function calculateSum(a, b) {
  return a + b;
}

function getGCD(a, b) {
  if (b === 0) return a;
  return getGCD(b, a % b);
}

function displayMessage(message) {
  console.log(`\n--- \n${message}\n---`);
}

function convertToBase64(string) {
  const base64 = btoa(atob(base64urlDecode(string)));
  return `data:base64, ${base64}`;
}
