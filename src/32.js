function findCommonChars(str1, str2) {
  let commonChars = '';
  const set1 = new Set(str1);
  const set2 = new Set(str2);

  if (set1.size <= 0 || set2.size <= 0) return '';

  for (let char of set1) {
    if (set2.has(char)) {
      commonChars += char;
      set1.delete(char);
      set2.delete(char);
    }
  }

  return commonChars;
}

function compareStrings(str1, str2) {
  const length = Math.min(str1.length, str2.length);

  for (let i = 0; i < length; i++) {
    if (str1[i] !== str2[i]) {
      return false;
    }
  }

  return true;
}

function reverseString(text) {
  return text.split('').reverse().join('');
}
