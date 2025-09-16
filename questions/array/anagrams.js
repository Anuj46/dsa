// Question - Given two strings, write a function to determine if the second string is an anagram of the first.
//            An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema,
//            formed from iceman.

// This has more Space complexity
const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (let str1Char of str1) {
    frequencyCounter1[str1Char] = (frequencyCounter1[str1Char] || 0) + 1;
  }

  for (let str2Char of str2) {
    frequencyCounter2[str2Char] = (frequencyCounter2[str2Char] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }

  return true;
};

// This has less1 Space complexity
const validAnagram2 = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const frequencyCounter1 = {};

  for (let str1Char of str1) {
    frequencyCounter1[str1Char] = (frequencyCounter1[str1Char] || 0) + 1;
  }

  console.log(frequencyCounter1);

  for (let char2 of str2) {
    if (!frequencyCounter1[char2]) {
      return false;
    } else {
      frequencyCounter1[char2] -= 1;
    }
  }

  return true;
};

const str1 = "azzs";
const str2 = "azz";

console.log(validAnagram2(str1, str2));
