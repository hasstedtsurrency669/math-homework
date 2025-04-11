function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function sumOfNumbers(arr) {
  let sum = 0;
  arr.forEach(number => {
    sum += number;
  });
  return sum;
}

function randomColor() {
  const colors = [
    'red',
    'green',
    'blue',
    'yellow',
    'orange'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

function randomArray(arr) {
  return arr.map(() => Math.random());
}

function generateRandomString(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters[Math.floor(Math.random() * characters.length)];
  }
  return result;
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}
