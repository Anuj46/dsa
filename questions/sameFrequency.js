// Question: Write a function called sameFrequency. Given two positive integers,
//           find out if the two numbers have the same frequency of digits.

//           Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

const sameFrequency = (num1, num2) => {
  const strNum1 = String(num1);
  const strNum2 = String(num2);

  if (strNum1.length !== strNum2.length) {
    return false;
  }

  const charcountObj = {};

  for (let num of strNum1) {
    charcountObj[num] = (charcountObj[num] || 0) + 1;
  }

  for (let num of strNum2) {
    if (!charcountObj[num]) {
      return false;
    }
    charcountObj[num]--;
  }

  return true;
};

console.log(sameFrequency(223, 222));